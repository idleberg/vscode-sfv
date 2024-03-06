import { fromFile as checksumFromFile } from "simple-file-verification";
import { getConfig } from 'vscode-get-config';
import { getFiles, getProjectPath, getLongestString, slugify } from './utils';
import { readdir } from 'fs/promises';
import { window } from 'vscode';

export async function create() {
	const config = await getConfig('sfv');
	const cwd = getProjectPath();
	const projectFiles = await readdir(cwd);
	const files = await getFiles(cwd, projectFiles);

	const selection = await window.showQuickPick(projectFiles, {
		canPickMany: true,
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: 'Select files to be included in SFV file.'
	});

	const algorithm = config.algorithm === '(always ask)' ? (await window.showQuickPick(['CRC32', 'MD5', 'SHA-1', 'SHA-256', 'SHA-512'], {
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: 'Select the algorithm used for checksums.'
	})) : config.algorithm;

	const result = files.filter(item => selection?.includes(item.name));
	const longestString = getLongestString(projectFiles);
	const selectedAlgorithm = algorithm ? slugify(algorithm) : 'crc32';

	const channel = window.createOutputChannel('SFV', selectedAlgorithm === 'crc32' ? 'sfv' : 'sfvx');
	channel.clear();
	channel.appendLine(`Generating checksums for ${result.length} ${result.length === 1 ? 'file' : 'files'}...`);
	channel.appendLine('');

	await Promise.all(result.map(async item => {
		try {
			const checksum = await checksumFromFile(item.path, selectedAlgorithm);
			channel.appendLine(`${item.name}${' '.repeat(longestString - item.name.length + 1)}${checksum}`);
		} catch (error) {
			channel.appendLine(`Skipping ${item.name}...`);
		}
	}));

	channel.show();
}
