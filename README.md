# AutoPilot VS Code Extension

## Overview

AutoPilot automates code execution, terminal output capture, and interaction with GitHub Copilot Chat, enabling developers to quickly run their code, get output, and paste it into Copilot for suggestions.

### Features

- **Auto-Run Code**: Executes code using the `Code Runner` extension.
- **Wait for Completion**: Ensures the code finishes running before proceeding.
- **Capture Terminal Output**: Automatically copies the output of the last terminal command.
- **Send to Copilot Chat**: Pastes the terminal output directly into GitHub Copilot Chat for further suggestions or conversation.

### Commands

- `AutoPilot: Run Code and Send to Copilot`: Runs your code, captures the last output, and sends it to GitHub Copilot Chat.
- `AutoPilot: Focus Copilot Chat`: Focuses on the GitHub Copilot Chat.
- `AutoPilot: Copy Last Terminal Command Output`: Captures and copies the last terminal output to the clipboard.

### Requirements

Ensure that the **Code Runner** extension is installed for this extension to work.

### How to Use

1. Open your workspace in VS Code.
2. Press `Ctrl + Shift + P` to open the Command Palette.
3. Run `AutoPilot: Run Code and Send to Copilot` to execute your code and send the result to Copilot Chat.
4. You can customize the command with your own shortcut keys.

