// server.js - RAPID TEST VERSION
console.log("🚀 STARTING MINDBOOK SERVER...");
console.log("Node version:", process.version);
console.log("Current directory:", __dirname);

// List files to verify structure
const fs = require('fs');
console.log("Files in root:");
fs.readdirSync(__dirname).forEach(file => console.log(" - " + file));

// Check if main.js exists
const mainPath = __dirname + '/main.js';
console.log("main.js exists:", fs.existsSync(mainPath));

// Check if config folder exists
const configPath = __dirname + '/config';
console.log("config folder exists:", fs.existsSync(configPath));
if (fs.existsSync(configPath)) {
  console.log("Files in config:");
  fs.readdirSync(configPath).forEach(file => console.log(" - " + file));
}

// Minimal Express server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'MindBook',
    time: new Date().toISOString(),
    message: 'Server is running!'
  });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ SERVER RUNNING ON PORT ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
});