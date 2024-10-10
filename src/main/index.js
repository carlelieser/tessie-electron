import { app, BrowserWindow, nativeImage, nativeTheme, shell } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import windowStateKeeper from 'electron-window-state'
import iconLight from '../../resources/icons/light/icon.png?asset'
import iconDark from '../../resources/icons/dark/icon.png?asset'
import iconLightWindows from '../../resources/icons/light/icon.ico?asset'
import iconDarkWindows from '../../resources/icons/dark/icon.ico?asset'

const url = 'https://dash.tessie.com'

function getThemeIcon() {
  let source

  if (process.platform === 'win32') {
    source = nativeTheme.shouldUseDarkColors ? iconLightWindows : iconDarkWindows
  } else {
    source = nativeTheme.shouldUseDarkColors ? iconLight : iconDark
  }

  return nativeImage.createFromPath(source)
}

function createWindow() {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    autoHideMenuBar: true,
    icon: getThemeIcon()
  })

  nativeTheme.on('updated', () => {
    mainWindow.setIcon(getThemeIcon())
  })

  mainWindowState.manage(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.loadURL(url)
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.tessie')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

