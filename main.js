const {app, BrowserWindow} = require('electron')
const options = require("./config/options")
let mainWindow

function createWindow () {
  
  app.allowRendererProcessReuse = true

    mainWindow = new BrowserWindow(options)

  mainWindow.loadFile('logos/index.html')

  // mainWindow.webContents.openDevTools()

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
