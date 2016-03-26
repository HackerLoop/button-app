'use strict';
var ipcMain = require('electron').ipcMain
var globalShortcut = require('global-shortcut');
var request = require('request');
var menubar = require('menubar');

var mb = menubar({
  dir: __dirname,
  index: 'file://' + __dirname + '/app/index.html',
  icon: 'app/img/IconTemplate.png'
});


mb.on('ready', function ready () {
  console.log('app is ready')
  setGlobalShortcuts();
})

function setGlobalShortcuts() {
    globalShortcut.unregisterAll();
    globalShortcut.register('ctrl+alt+shift+y', function () {
      request.post(
        'https://maker.ifttt.com/trigger/button_pressed/with/key/mdWQxkYhM1-LuraKiqDmaXb_euu5AWqNKsPh63bTy0o',
        {form:{event:'button_pressed'}},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
      );
        console.log('button is pressed')
    });
}


ipcMain.on('close-app', function(event, arg) {
  mb.app.quit();
});
