'use strict';

const cacheKeyForTree = require('calculate-cache-key-for-tree');

module.exports = {
  name: require('./package').name,

  options: {
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
  },

  // cacheKeyForTree(treeType) {
  //   return cacheKeyForTree(treeType, this);
  // },
};
