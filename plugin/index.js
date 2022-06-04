const stylelint = require('stylelint');
const propertiesOrderRule = require('stylelint-order/rules/properties-order');
const configCreator = require('../config/configCreator');

const ruleName = 'plugin/rational-order';
const propertiesOrderRuleName = propertiesOrderRule.ruleName;

module.exports = stylelint.createPlugin(
  ruleName,
  (enabled, options, context) => (postcssRoot, postcssResult) => {
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {
        actual: enabled,
        possible: [true, false],
      },
      {
        actual: options,
        optional: true,
        possible: {
          'border-in-box-model': [true, false],
          'empty-line-between-groups': [true, false],
          'no-empty-lines-between-properties': [true, false],
        },
      }
    );
    if (!enabled || !validOptions) {
      return;
    }

    const resultStylelint = postcssResult.stylelint;
    resultStylelint.ruleSeverities[propertiesOrderRuleName] = resultStylelint.ruleSeverities[ruleName];
    resultStylelint.customMessages[propertiesOrderRuleName] = resultStylelint.customMessages[ruleName];
    resultStylelint.ruleMetadata[propertiesOrderRuleName] = resultStylelint.ruleMetadata[ruleName];

    const expectation = configCreator(options);
    propertiesOrderRule(
      expectation,
      undefined,
      context
    )(postcssRoot, postcssResult);
  }
);

module.exports.ruleName = ruleName;
