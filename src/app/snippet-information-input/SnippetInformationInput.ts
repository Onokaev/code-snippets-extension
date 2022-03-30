import * as vscode from 'vscode'
export const getsnippetRequestInformation = async (): Promise<any> => {
    const requestUrlInput = await vscode.window.showInputBox({
        placeHolder: 'Enter request url. For exmple me/messages for emails',
        prompt: 'Enter the request url'
    });

    const options: { [key: string]: string } = {
        v1: 'v1.0',
        beta: 'beta'
    };

    const languages: { [key: string]: string } = {
        csharp: 'csharp',
        javascript: 'javascript',
        java: 'Java',
        objectiveC: 'Objective-C',
        go: 'go',
        powerShell: 'powershell'
    };

    const urlVersionInput = await vscode.window.showQuickPick(Object.values(options), { matchOnDetail: true });

    const snippetLanguage = await vscode.window.showQuickPick(Object.values(languages), { matchOnDetail: true });

    return { requestUrlInput, urlVersionInput, snippetLanguage };
};