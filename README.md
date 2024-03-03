# vscode-sfv

[![Version](https://img.shields.io/github/v/release/idleberg/vscode-sfv?style=for-the-badge)](https://github.com/idleberg/vscode-sfv/releases)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idleberg.sfv?style=for-the-badge&label=Marketplace)](https://marketplace.visualstudio.com/items?itemName=idleberg.sfv)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/idleberg/sfv?style=for-the-badge&label=Open%20VSX)](https://open-vsx.org/extension/idleberg/sfv)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vscode-sfv/default.yml?style=for-the-badge)](https://github.com/idleberg/vscode-sfv/actions)

Syntax highlighting for SFV files (see [Simple File Verification](https://www.wikiwand.com/en/Simple_file_verification)). Also supports extended SFV files (`.sfvx`) as introduced by [`sfv-cli`](https://www.npmjs.com/package/sfv-cli).

## Installation

### Extension Marketplace

Launch Quick Open, paste the following command, and press <kbd>Enter</kbd>

`ext install idleberg.sfv`

### CLI

With [shell commands](https://code.visualstudio.com/docs/editor/command-line) installed, you can use the following command to install the extension:

`$ code --install-extension idleberg.sfv`

### Packaged Extension

Download the packaged extension from the the [release page](https://github.com/idleberg/vscode-sfv/releases) and install it from the command-line:

```bash
$ code --install-extension path/to/sfv-*.vsix
```

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or install it using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

```bash
$ ovsx get idleberg.sfv
```

### Clone Repository

Change to your Visual Studio Code extensions directory:

```bash
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone repository as `sfv`:

```bash
$ git clone https://github.com/idleberg/vscode-sfv sfv
```
## Related

- [atom-language-sfv](https://github.com/idleberg/atom-language-sfv)
- [sublime-sfv](https://github.com/idleberg/sublime-sfv)

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)
