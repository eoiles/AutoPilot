import * as vscode from 'vscode';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {


    // Register the AutoPilot command to run code and send terminal output to Copilot
    const autoPilot = vscode.commands.registerCommand('autopilot.autoPilot', async () => {
        // Execute the code-runner command to run the current file
        await vscode.commands.executeCommand('code-runner.run');

        // Wait for 1 second to allow the code execution to finish
        setTimeout(async () => {
            // Focus on the Copilot chat window
            await vscode.commands.executeCommand('workbench.panel.chat.view.copilot.focus');

            // Insert "@workspace " text to the chat input
            await vscode.env.clipboard.writeText('@workspace ');
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');

            // Copy and paste the last terminal command output
            await vscode.commands.executeCommand('workbench.action.terminal.copyLastCommandOutput');
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        }, 1000);  // Adjust this timeout based on execution time of your code
    });

    // Register the command for focusing on Copilot Chat
    const focusCopilotChat = vscode.commands.registerCommand('autopilot.focusCopilotChat', async () => {
        await vscode.commands.executeCommand('workbench.panel.chat.view.copilot.focus');
    });

    // Register the command for copying the last terminal command output
    const copyTerminalOutput = vscode.commands.registerCommand('autopilot.copyTerminalLastCommandOutput', async () => {
        await vscode.commands.executeCommand('workbench.action.terminal.copyLastCommandOutput');
    });

    const sendLastTerminalOutputToChat = vscode.commands.registerCommand('autopilot.sendLastTerminalCommandOutputToChat', async () => {
        // Focus on the Copilot chat window
        await vscode.commands.executeCommand('workbench.panel.chat.view.copilot.focus');

        // Insert "@workspace " text to the chat input
        await vscode.env.clipboard.writeText('@workspace ');
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');

        // Copy and paste the last terminal command output
        await vscode.commands.executeCommand('workbench.action.terminal.copyLastCommandOutput');
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
    });

    // Push the registered commands to the context subscriptions to enable disposal later
    context.subscriptions.push(autoPilot, focusCopilotChat, copyTerminalOutput, sendLastTerminalOutputToChat);
}

// This method is called when the extension is deactivated
export function deactivate() {}