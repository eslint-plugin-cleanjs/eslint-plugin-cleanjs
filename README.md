# eslint-plugin-fp [![Build Status](https://travis-ci.org/jfmengels/eslint-plugin-fp.svg?branch=master)](https://travis-ci.org/jfmengels/eslint-plugin-fp)

ESLint rules for functional programming


## Install

```
$ npm install --save-dev eslint eslint-plugin-fp
```

## Usage

Configure it in `package.json`.

<!-- EXAMPLE_CONFIGURATION:START -->
```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "env": {
      "es6": true
    },
    "plugins": [
      "fp"
    ],
    "rules": {
      "fp/no-arguments": "error",
      "fp/no-class": "error",
      "fp/no-delete": "error",
      "fp/no-events": "error",
      "fp/no-get-set": "error",
      "fp/no-let": "error",
      "fp/no-loops": "error",
      "fp/no-mutating-assign": "error",
      "fp/no-mutating-methods": "error",
      "fp/no-mutation": "error",
      "fp/no-nil": "error",
      "fp/no-proxy": "error",
      "fp/no-rest-parameters": "error",
      "fp/no-this": "error",
      "fp/no-throw": "error",
      "fp/no-unused-expression": "error",
      "fp/no-valueof-field": "error",
      "no-var": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-arguments](docs/rules/no-arguments.md) - Forbid the use of `arguments`.
- [no-class](docs/rules/no-class.md) - Forbid the use of `class`.
- [no-delete](docs/rules/no-delete.md) - Forbid the use of `delete`.
- [no-events](docs/rules/no-events.md) - Forbid the use of the `events` module.
- [no-get-set](docs/rules/no-get-set.md) - Forbid the use of getters and setters.
- [no-let](docs/rules/no-let.md) - Forbid the use of `let`.
- [no-loops](docs/rules/no-loops.md) - Forbid the use of loops.
- [no-mutating-assign](docs/rules/no-mutating-assign.md) - Forbid the use of [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) with a variable as first argument.
- [no-mutating-methods](docs/rules/no-mutating-methods.md) - Forbid the use of mutating methods.
- [no-mutation](docs/rules/no-mutation.md) - Forbid the use of mutating operators.
- [no-nil](docs/rules/no-nil.md) - Forbid the use of `null` and `undefined`.
- [no-proxy](docs/rules/no-proxy.md) - Forbid the use of `Proxy`.
- [no-rest-parameters](docs/rules/no-rest-parameters.md) - Forbid the use of rest parameters.
- [no-this](docs/rules/no-this.md) - Forbid the use of `this`.
- [no-throw](docs/rules/no-throw.md) - Forbid the use of `throw`.
- [no-unused-expression](docs/rules/no-unused-expression.md) - Enforce that an expression gets used.
- [no-valueof-field](docs/rules/no-valueof-field.md) - Forbid the creation of `valueOf` fields.

<!-- RULES:END -->

## Recommended configuration

This plugin exports a [`recommended` configuration](index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "fp"
    ],
    "extends": "plugin:fp/recommended"
  }
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [Jeroen Engels](https://github.com/jfmengels)



# The better parts

[![NPM version][1]][2]
[![Davis Dependency status][3]][4]

Javascript is a terribly designed language, fortunately it has a decent subset. eslint-plugin-better is a set of rules to help you avoid some of the bad parts and write better code.

Inspired by [this talk](https://www.youtube.com/watch?v=PSGEjv3Tqo0).

## Rules

| Name  | Description | Default Configuration |
| ------------- | ------------- | ------------- |
| no-exceptions | Forbids throwing and catching errors. | 'no-exceptions': 2 |
| no-exports | Forbids use of export keyword.  | 'no-exports': 0 |
| no-function-expressions | Forbids use function expressions. | 'no-function-expressions': 0 |
| no-ifs | Forbids use of if statements. | 'no-ifs': 2 |
| no-imports | Forbids use of import keyword. | 'no-imports': 0 |
| no-instanceofs | Forbids instanceof operator. | 'no-instanceofs': 2 |
| no-new | Forbids use of new. |'no-new': 2, |
| no-nulls | Forbids use of null. | 'no-nulls': 2 |
| no-reassigns | Forbids reassigning variables. | 'no-reassigns': 2 |
| no-switches | Forbids use of switch statement. | 'no-switches': 2 |
| no-this | Forbids use of this. | 'no-this': 2 |
| no-typeofs | Forbids typeof operator. | 'no-typeofs': 2 |
| no-undefined | Forbids use of undefined. | 'no-undefined': 0 |
| no-variable-declaration | Forbids declaring variables. | 'no-variable-declaration': 0 |
| must-return | Every branch of every function should have a return statement. | 'must-return': 2 |
| explicit-return | Stricter version of must-return: every function should have a top level return statement. | 'explicit-return': 2 |


[1]: https://badge.fury.io/js/eslint-plugin-better.svg
[2]: https://badge.fury.io/js/eslint-plugin-better
[3]: https://david-dm.org/idmitriev/eslint-plugin-better.svg
[4]: https://david-dm.org/idmitriev/eslint-plugin-better
