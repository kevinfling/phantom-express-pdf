'use strict'

const models = function(config) {
  const _this   = this;
  const _config = config;

  _this.phantom = require('./phantom')(_config);
}

module.exports = function(config) {
  return new models(config);
}
