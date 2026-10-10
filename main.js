const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 980,
    minWidth: 1200,
    minHeight: 850,
    backgroundColor: '#0a0d14',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      enableRemoteModule: false,
    },
  });

  win.loadFile('index.html');
  win.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
