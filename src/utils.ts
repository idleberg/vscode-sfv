import { resolve } from 'node:path';
import { stat } from 'node:fs/promises';
import { window, workspace } from 'vscode';

type Results = {
	name: string;
	path: string;
	type: string;
};

export async function getFiles(projectPath: string, items: string[]): Promise<Results[]> {
	const results: Results[] = [];

	for (const item of items) {
		try {
			const absolutePath = resolve(projectPath, item);
			const stats = await stat(absolutePath);

			if (stats.isDirectory()) {
				results.push({
					name: item,
					path: absolutePath,
					type: 'directory'
				});
			} else if (stats.isFile()) {
				results.push({
					name: item,
					path: absolutePath,
					type: 'file',
				});
			}
		} catch (error) {
			console.warn(`[idleberg.sfv] File not found: ${item}`);
		}
	}

	return results;
}

export function getLongestString(input: string[]): number {
	const map = input.map(x => x.length);
	const max = map.indexOf(Math.max(...map));

	return input[max].length;
}

export function getProjectPath(): string {
	const textEditor = window.activeTextEditor;

	if (!textEditor?.document?.uri) {
		const message = 'No active editor.';

		window.showWarningMessage(message);
		throw new Error(message);
	}

	const workspaceFolder = workspace.getWorkspaceFolder(textEditor.document.uri);

	if (!workspaceFolder?.uri?.fsPath) {
		const message = 'No workspace folder.';

		window.showWarningMessage(message);
		throw new Error(message);
	}

	return workspaceFolder.uri.fsPath
}

export function slugify(algorithm: string): string {
	return (
		algorithm
			.trim()
			.toLowerCase()
			.replace('-', '')
	);
}
