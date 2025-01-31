const { spawn } = require('child_process');
const path = require('path');

// Path to the original react-scripts start script
const reactScriptsStart = path.resolve(__dirname, 'node_modules/react-scripts/scripts/start.js');

// Set environment variable to prevent React from opening the browser automatically
process.env.BROWSER = 'none';  // This prevents the browser from opening automatically when React starts

// Start React app using react-scripts (without opening the browser)
console.log('Starting React app...');
require(reactScriptsStart);

// Run your custom command (cmd1)
const rcloneCmd = path.resolve(__dirname, '../rclone-linux-amd64/rclone');  // Adjusted to the correct location
const rcloneArgs = [
  'rcd', '--rc-serve',
  `--rc-user=${process.env.RCLONE_USER || 'admin'}`,
  `--rc-pass=${process.env.RCLONE_PASS || 'pass'}`,
  `--rc-files=${path.resolve(__dirname, 'build')}`, // Uses the Webpack build output
  '-vv'
];

console.log('Starting Rclone server...');
const rcloneProcess = spawn(rcloneCmd, rcloneArgs, {
  stdio: 'inherit',
  shell: true
});

rcloneProcess.on('error', (err) => {
  console.error('Failed to start Rclone:', err);
});
