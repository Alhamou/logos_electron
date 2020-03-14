const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  
  app.allowRendererProcessReuse = true

  mainWindow = new BrowserWindow({
    width: 1500, height: 770,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile('logos/index.html')

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed',  () => {
    mainWindow = null
  })


}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
