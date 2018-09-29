/* eslint-env node */

module.exports = {
  description: 'Install React, ReactDOM and decorator support',

  normalizeEntityName() {},

  afterInstall() {
    return this.addAddonToProject('@ember-decorators/babel-transforms');
  }
};
