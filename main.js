var globalShortcut = require('global-shortcut')

var menubar = require('menubar')
var mb = menubar()


mb.on('ready', function ready () {
  console.log('app is ready')
  setGlobalShortcuts();
})

function setGlobalShortcuts() {


    globalShortcut.register('ctrl+alt+shift+b', function () {
        console.log('button is pressed')
    });
}
