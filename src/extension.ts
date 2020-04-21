import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('remove-markdown-links.removeLinks', () => {
        console.log('Congratulations, your extension "remove-markdown-links" is now active!');
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        var selection = editor.selection;
        var text = editor.document.getText(selection);
        text = text.replace(/([^!])\[(.*?)\]\(.*?\)/gm, "$1$2");
        editor.edit(editBuilder => {
            editBuilder.replace(selection, text);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
