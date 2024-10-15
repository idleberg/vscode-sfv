import { defineConfig } from 'tsup';

export default defineConfig({
	bundle: true,
	clean: true,
	entry: ['src/index.ts'],
	external: ['vscode'],
	format: 'cjs',
	minify: true,
	noExternal: ['simple-file-verification', 'vscode-get-config'],
	target: 'es2020',
	outDir: 'lib',
});
