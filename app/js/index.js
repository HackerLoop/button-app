
'use strict';
var ipcRenderer = require('electron').ipcRenderer
var closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-app');
});
