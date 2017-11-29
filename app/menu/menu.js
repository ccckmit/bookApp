const template = [
    {
      label: 'File',
      submenu: [
        {
          label: '開新檔案',
          accelerator: 'CmdOrCtrl+N',
          click: newFile
        },
        {
          label: 'Open',
          accelerator: 'CmdOrCtrl+O',
          click: openFile
        },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click: saveFile
        },
        {
          label: '另存新檔',
          accelerator: 'CmdOrCtrl+A',
          click: saveFileAs
        },
        { label: 'Exit', role: 'close' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: '原始碼',
          click: E.viewSource // viewSource
        },
        {
          label: '預覽',
          click: E.viewHtml
        },
        {
          label: 'GoBack',
          click: E.goBack
        },
        { role: 'reload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    }
  /*  
    ,
    {
      role: 'help',
      submenu: [ { label: 'Learn More' } ]
    }
  */
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  