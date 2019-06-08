const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

function createMainWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  
  // and load the index.html of the app.
  mainWindow.loadFile( path.join(__dirname, 'index.html') )
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  // Emitted when the window is closed.
  mainWindow.on('closed', () => { mainWindow = null } )
}


app.on('ready', createMainWindow)


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})