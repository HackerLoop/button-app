var globalShortcut = require('global-shortcut')
var request = require('request');
var menubar = require('menubar')
var mb = menubar()


mb.on('ready', function ready () {
  console.log('app is ready')
  setGlobalShortcuts();
})

function setGlobalShortcuts() {
    globalShortcut.unregisterAll();
    globalShortcut.register('ctrl+alt+shift+b', function () {
      request.post(
        'https://zapier.com/hooks/catch/4505/2xk24t/',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
      );
        console.log('button is pressed')
    });
}
