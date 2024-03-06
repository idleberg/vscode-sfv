import { commands, type ExtensionContext } from 'vscode';
import { create } from './commands';

export const activate = (context: ExtensionContext): void => {
  context.subscriptions.push(
    commands.registerCommand('extension.sfv.create', async () => await create())
  );
};
