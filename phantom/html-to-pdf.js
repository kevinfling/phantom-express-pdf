'use strict';

var system = require('system');
var page   = require('webpage').create();

var address    = system.args[1];
var outFile    = system.args[2];
var pageWidth  = system.args[3];
var pageHeight = system.args[4];

page.viewportSize = { 
  width  : pageWidth, 
  height : pageHeight
};

page.open(address, function(status) {
  if (status !== 'success') {
    console.log('Unable to load the address!');
    phantom.exit(1);
  } else {
    window.setTimeout(function () {
      page.render(outFile, { format: 'pdf' });
      console.log('Wrote to ' + outFile);
      phantom.exit();
    }, 200);
  }
});
