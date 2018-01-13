'use strict'

const models = function(config) {
  const _this   = this;
  const _config = config;

  _this.html2pdf = require('./html2pdf')(_config);
}

module.exports = function(config) {
  return new models(config);
}
