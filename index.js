'use strict';

const importModules = require('import-modules');
const createIndex = require('create-eslint-index');

const rules = importModules('rules', {camelize: false});

const externalRecommendedRules = {
  'no-var': 'error',
  'prefer-spread': 'error'
};

const internalRecommendedRules = createIndex.createConfig({
  plugin: 'cleanjs',
  field: 'meta.docs.recommended'
}, rules);

module.exports = {
  rules,
  configs: {
    recommended: {
      rules: Object.assign({}, internalRecommendedRules, externalRecommendedRules)
    }
  }
};
