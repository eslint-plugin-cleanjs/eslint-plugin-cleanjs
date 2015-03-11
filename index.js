module.exports = {
	rules: {
		'explicit-return': require('./rules/explicit-return.js'),
		'no-classes': require('./rules/no-classes.js'),
		'no-deletes': require('./rules/no-deletes.js'),
		'no-exceptions': require('./rules/no-exceptions.js'),
		'no-exports': require('./rules/no-exports.js'),
		'no-fors': require('./rules/no-fors.js'),
		'no-function-expressions': require('./rules/no-function-expressions.js'),
		'no-ifs': require('./rules/no-ifs.js'),
		'no-imports': require('./rules/no-imports.js'),
		'no-instanceofs': require('./rules/no-instanceofs.js'),
		'no-new': require('./rules/no-new.js'),
		'no-nulls': require('./rules/no-nulls.js'),
		'no-reassigns': require('./rules/no-reassigns.js'),
		'no-switches': require('./rules/no-switches.js'),
		'no-this': require('./rules/no-this.js'),
		'no-typeofs': require('./rules/no-typeofs.js'),
		'no-undefined': require('./rules/no-undefined.js'),
		'no-variable-declaration': require('./rules/no-variable-declarations.js'),
		'no-whiles': require('./rules/no-whiles.js')
	},
	rulesConfig: {
		'explicit-return': 2,
		'no-classes': 0,
		'no-deletes': 2,
		'no-exceptions': 2,
		'no-exports': 0,
		'no-fors': 2,
		'no-function-expressions': 0,
		'no-ifs': 2,
		'no-imports': 0,
		'no-instanceofs': 2,
		'no-new': 2,
		'no-nulls': 2,
		'no-reassigns': 2,
		'no-switches': 2,
		'no-this': 2,
		'no-typeofs': 2,
		'no-undefined': 0,
		'no-variable-declaration': 0,
		'no-whiles': 2
	}
};
