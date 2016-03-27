'use strict';
var ipcMain = require('electron').ipcMain
var configuration = require('./configuration');
var globalShortcut = require('global-shortcut');
var request = require('request');
var menubar = require('menubar');

var mb = menubar({
  dir: __dirname,
  index: 'file://' + __dirname + '/app/index.html',
  icon: 'app/img/IconTemplate.png'
});


mb.on('ready', function ready () {
  if (!configuration.readSettings('buttonUrl')) {
      configuration.saveSettings('buttonUrl', 'https://maker.ifttt.com/trigger/button_pressed/with/key/mdWQxkYhM1-LuraKiqDmaXb_euu5AWqNKsPh63bTy0o');
  }
  console.log('app is ready')
  setGlobalShortcuts()
})

function setGlobalShortcuts() {
  globalShortcut.unregisterAll();
  globalShortcut.register('ctrl+alt+shift+y', function () {
      pressButton()
      console.log('button is pressed')
  });
}


function pressButton() {
  var buttonUrl = configuration.readSettings('buttonUrl');
  console.log('request is sending')
  request.post(
    buttonUrl,
    {form:{event:'button_pressed'}},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
  );

}

ipcMain.on('button-pressed', function(event, arg){
  pressButton();
});

ipcMain.on('close-app', function(event, arg) {
  mb.app.quit();
});
