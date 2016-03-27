
'use strict';
var ipcRenderer = require('electron').ipcRenderer
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
    ipcRenderer.send('save-url');
});
