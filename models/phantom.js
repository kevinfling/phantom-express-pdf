'use strict'

const tmp          = require('tmp');
const path         = require('path');
const childProcess = require('child_process');
const phantomjs    = require('phantomjs-prebuilt');

const html2pdf = function(config) {

  // Public
  this.convert = function(url, pageWidth, pageHeight, cb) {
    var tmpObj = tmp.fileSync({ prefix: 'phantom-', postfix: '.pdf' });

    const childArgs = [
      path.join(config.phantomScriptsPath, 'html-to-pdf.js'),
      url,
      tmpObj.name,
      pageWidth,
      pageHeight
    ];

    childProcess.execFile(phantomjs.path, childArgs, (err, stderr, stdout) => {
      if (err) throw err;
      cb(tmpObj.name);
    });
  }
}

module.exports = function(config) {
  return new html2pdf(config);
}
