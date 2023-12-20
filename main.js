const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
//Contains the main window object that'll be loaded
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
          }
    });
    win.loadFile('./public/index.html');
};
//When all is ready, deploys the window
app.whenReady().then( () => {
    //Here i define what the handlers will responsa
    ipcMain.handle('ping', () => 'pong')
    createWindow();
});
// Ctrl+W will close the application (except in macOS).
app.on('window-all-closed', () => {
    if( process.platform !== 'darwin' ){
        console.log("Cerrando...💻🔥");
        app.quit();
    } 
});
//macOS case.
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    } 
});

try {
    require('electron-reloader')(module)
} catch (_){
    console.log("Algo pasó con electron-reloader💻🔥");
}

console.log("Hola mundo desde Electron👋🏻");