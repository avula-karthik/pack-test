// ./public/electron.js
const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

app.on('ready', () => {
    const mainWindow = new BrowserWindow({width: 800, height: 600,webPreferences:{nodeIntegration:true} });

    mainWindow.loadURL(
        isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
    );
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
});




  
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    const mainWindow = new BrowserWindow({width: 800, height: 600,webPreferences:{nodeIntegration:true} });

    mainWindow.loadURL(
        isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
    )
  }
});
