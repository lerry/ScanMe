'use strict';
document.addEventListener('DOMContentLoaded', function() {
  return chrome.tabs.getSelected(null, function(tab) {
    return new QRCode(document.getElementById("qrcode"), tab.url);
  });
});
