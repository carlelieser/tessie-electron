# Tessie Electron Wrapper

A simple Electron-based desktop wrapper for [Tessie](https://tessie.com/), the Tesla management platform.

## Overview

This project provides a desktop application for Tessie using Electron. It wraps the Tessie web app into a native desktop application, allowing you to access it directly from your desktop without the need for a web browser.

## Features

- **Cross-Platform Support**: Works on Windows, macOS, and Linux.
- **Lightweight**: Minimal overhead, providing a seamless experience.
- **Easy Access**: Quickly launch Tessie from your desktop or dock.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/tessie-electron-wrapper.git
   cd tessie-electron-wrapper
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

## Building the Application

To build the application for distribution:

```bash
npm run build
```

The executable files will be generated in the `dist` directory.

## Usage

- Launch the application.
- Log in with your Tessie credentials.
- Use Tessie just as you would in a web browser.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Tessie](https://tessie.com/) for providing the platform.
- [Electron](https://www.electronjs.org/) for making cross-platform desktop apps possible.