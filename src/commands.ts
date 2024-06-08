import { fromFiles as checksumFromFiles } from "simple-file-verification";
import { getConfig } from 'vscode-get-config';
import { getFiles, getProjectPath, getLongestString, slugify } from './utils';
import { readdir } from 'node:fs/promises';
import { relative } from 'node:path';
import { repository, version } from '../package.json';
import { window } from 'vscode';

const sfvChannel = window.createOutputChannel('SFV', 'sfv');
const sfvxChannel = window.createOutputChannel('SFVX', 'sfvx');

export async function create() {
	let cwd;

	try {
		cwd = getProjectPath();
	} catch (error) {
		window.showErrorMessage(error.message);
		return;
	}

	const config = await getConfig('sfv');
	const projectFiles = (await readdir(cwd));
	const files = await getFiles(cwd, projectFiles);

	const selection = await window.showQuickPick(files.filter(item => item.type === 'file').map(item => item.name), {
		canPickMany: true,
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: 'Select files to be included in SFV file.'
	});

	if (selection?.length === 0) {
		return;
	}

	const algorithm = config.algorithm === '(always ask)' ? (await window.showQuickPick(['CRC32', 'MD5', 'SHA-1', 'SHA-256', 'SHA-512'], {
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: 'Select the algorithm used for checksums.'
	})) : config.algorithm;

	const selectedFiles = files.filter(item => selection?.includes(item.name));
	const selectedAlgorithm = algorithm ? slugify(algorithm) : 'crc32';

	const channel = selectedAlgorithm === 'crc32' ? sfvChannel : sfvxChannel;
	channel.clear();
	channel.appendLine(`; vscode-sfv v${version} | ${repository.url}`);
	channel.appendLine(';');

	const checksums = (await checksumFromFiles(selectedFiles.map(item => item.path), selectedAlgorithm))
	.map((item: Record<string, string>) => ({
		checksum: item.checksum,
		file: relative(cwd, item.file)
		}))
	.sort((a, z) => a.file.localeCompare(z.file))

	const longestString = getLongestString(checksums.map(item => relative(cwd, item.file)));

	for (const item of checksums) {
		channel.appendLine(`${item.file} ${' '.repeat(longestString - relative(cwd, item.file).length)} ${item.checksum}`);
	}

	channel.show();
}
