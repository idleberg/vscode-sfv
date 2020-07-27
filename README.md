# vscode-sfv

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-sfv)](https://github.com/idleberg/vscode-sfv/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.sfv.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.sfv)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/vscode-sfv)](https://circleci.com/gh/idleberg/vscode-sfv)

Syntax highlighting for SFV files (see [Simple File Verification](https://www.wikiwand.com/en/Simple_file_verification))

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

Alternatively, you can download the packaged extension from the [Open VSX Registry](https://open-vsx.org/) or using the [`ovsx`](https://www.npmjs.com/package/ovsx) command-line tool:

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

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
