
'use strict';
var ipcRenderer = require('electron').ipcRenderer
var closeEl = document.querySelector('.close');
var saveUrl = document.querySelector('.save');

closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-app');
});

closeEl.addEventListener('click', function () {
    ipcRenderer.send('save-url');
});
