'use strict'

const tmp          = require('tmp');
const path         = require('path');
const childProcess = require('child_process');
const phantomjs    = require('phantomjs-prebuilt');

const phantom = function(config) {

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

  this.slugify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')      // Replace spaces with -
      .replace(/[^\w\-]+/g, '-') // Replace all non-word chars with -
      .replace(/\-\-+/g, '-')    // Replace multiple - with single -
      .replace(/^-+/, '')        // Trim - from start of text
      .replace(/-+$/, '');       // Trim - from end of text
  }
}

module.exports = function(config) {
  return new phantom(config);
}
