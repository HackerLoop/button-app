
'use strict';
var ipcRenderer = require('electron').ipcRenderer
var configuration = require('../configuration');
var closeEl = document.querySelector('.close');
var saveUrl = document.querySelector('.save');
var buttonPressed = document.querySelector('.pressed');



closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-app');
});

buttonPressed.addEventListener('click', function () {
    ipcRenderer.send('button-pressed');
});

saveUrl.addEventListener('click', function () {
    var buttonUrl = document.getElementById("url").value;
    configuration.saveSettings('buttonUrl', buttonUrl);
    ipcRenderer.send('save-url');
});
