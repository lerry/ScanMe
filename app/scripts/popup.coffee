'use strict';

document.addEventListener 'DOMContentLoaded', ->
  chrome.tabs.getSelected null, (tab)->
    new QRCode(document.getElementById("qrcode"), tab.url)