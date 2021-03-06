// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { generateSnippetRequestUrl } from './api/snippet-url-generator';
import { getCodeSnippet } from './api/snppet-api-calls';
import { getsnippetRequestInformation } from './app/snippet-information-input';
const axios: any = require('axios').default;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('SnippetGenerator.GenerateSnippet', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const snippetRequestInformation = await getsnippetRequestInformation();
		const snippetRequestUrl = snippetRequestInformation ? generateSnippetRequestUrl(snippetRequestInformation) : {};
		const codeSnippet = snippetRequestUrl ? await getCodeSnippet(snippetRequestUrl) : {};

		if (codeSnippet) {
			vscode.window.showInformationMessage(codeSnippet);
		}

		console.log('HEre is the snippet ', codeSnippet);
		vscode.window.showInformationMessage(codeSnippet, { modal: true });
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	//
}
