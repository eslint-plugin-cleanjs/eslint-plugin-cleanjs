# eslint-plugin-cleanjs [![Build Status](https://travis-ci.org/eslint-plugin-cleanjs/eslint-plugin-cleanjs.svg?branch=master)](https://travis-ci.org/eslint-plugin-cleanjs/eslint-plugin-cleanjs)

ESLint rules for functional programming


## Install

```
$ npm install --save-dev eslint eslint-plugin-cleanjs
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
      "cleanjs"
    ],
    "rules": {
      "cleanjs/explicit-return": "off",
      "cleanjs/must-return": "off",
      "cleanjs/no-arguments": "error",
      "cleanjs/no-class": "error",
      "cleanjs/no-delete": "error",
      "cleanjs/no-events": "error",
      "cleanjs/no-exceptions": "off",
      "cleanjs/no-exports": "off",
      "cleanjs/no-function-expressions": "off",
      "cleanjs/no-get-set": "error",
      "cleanjs/no-ifs": "off",
      "cleanjs/no-imports": "off",
      "cleanjs/no-instanceofs": "off",
      "cleanjs/no-let": "error",
      "cleanjs/no-loops": "error",
      "cleanjs/no-mutating-assign": "error",
      "cleanjs/no-mutating-methods": "error",
      "cleanjs/no-mutation": "error",
      "cleanjs/no-new": "off",
      "cleanjs/no-nil": "error",
      "cleanjs/no-nulls": "off",
      "cleanjs/no-proxy": "error",
      "cleanjs/no-reassigns": "off",
      "cleanjs/no-rest-parameters": "error",
      "cleanjs/no-switches": "off",
      "cleanjs/no-this": "error",
      "cleanjs/no-throw": "error",
      "cleanjs/no-typeofs": "off",
      "cleanjs/no-undefined": "off",
      "cleanjs/no-unused-expression": "error",
      "cleanjs/no-valueof-field": "error",
      "cleanjs/no-variable-declarations": "off",
      "no-var": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [explicit-return](docs/rules/explicit-return.md) - Stricter version of must-return: every function should have a top level return statement.
- [must-return](docs/rules/must-return.md) - Every branch of every function should have a return statement.
- [no-arguments](docs/rules/no-arguments.md) - Forbid the use of `arguments`.
- [no-class](docs/rules/no-class.md) - Forbid the use of `class`.
- [no-delete](docs/rules/no-delete.md) - Forbid the use of `delete`.
- [no-events](docs/rules/no-events.md) - Forbid the use of the `events` module.
- [no-exceptions](docs/rules/no-exceptions.md) - Forbids throwing and catching errors.
- [no-exports](docs/rules/no-exports.md) - Forbids use of export keyword
- [no-function-expressions](docs/rules/no-function-expressions.md) - Forbids the use of function expressions, consider: prefer-arrow-callback
- [no-get-set](docs/rules/no-get-set.md) - Forbid the use of getters and setters.
- [no-ifs](docs/rules/no-ifs.md) - Forbids the use of `if` statements, in favour of ternary expressions
- [no-imports](docs/rules/no-imports.md) - Forbids the use of the `import` keyword, in favour of CommonJS
- [no-instanceofs](docs/rules/no-instanceofs.md) - Forbids the use of the `instanceof` operator
- [no-let](docs/rules/no-let.md) - Forbid the use of `let`.
- [no-loops](docs/rules/no-loops.md) - Forbid the use of loops.
- [no-mutating-assign](docs/rules/no-mutating-assign.md) - Forbid the use of [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) with a variable as first argument.
- [no-mutating-methods](docs/rules/no-mutating-methods.md) - Forbid the use of mutating methods.
- [no-mutation](docs/rules/no-mutation.md) - Forbid the use of mutating operators.
- [no-new](docs/rules/no-new.md) - Forbids the use of the `new` keyword
- [no-nil](docs/rules/no-nil.md) - Forbid the use of `null` and `undefined`.
- [no-nulls](docs/rules/no-nulls.md) - Forbids the use of `null`.
- [no-proxy](docs/rules/no-proxy.md) - Forbid the use of `Proxy`.
- [no-reassigns](docs/rules/no-reassigns.md) - Forbids reassigning variables
- [no-rest-parameters](docs/rules/no-rest-parameters.md) - Forbid the use of rest parameters.
- [no-switches](docs/rules/no-switches.md) - Forbids the use of the `switch` statement
- [no-this](docs/rules/no-this.md) - Forbid the use of `this`.
- [no-throw](docs/rules/no-throw.md) - Forbid the use of `throw`.
- [no-typeofs](docs/rules/no-typeofs.md) - Forbids the typeof operator
- [no-undefined](docs/rules/no-undefined.md) - Forbids the use of `undefined`.
- [no-unused-expression](docs/rules/no-unused-expression.md) - Enforce that an expression gets used.
- [no-valueof-field](docs/rules/no-valueof-field.md) - Forbid the creation of `valueOf` fields.
- [no-variable-declarations](docs/rules/no-variable-declarations.md) - Forbids variable declarations, no `var` or `let`.

<!-- RULES:END -->

## Recommended configuration

This plugin exports a [`recommended` configuration](index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "cleanjs"
    ],
    "extends": "plugin:cleanjs/recommended"
  }
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

MIT © [Jeroen Engels](https://github.com/jfmengels)
MIT © [Ivan Dmitriev](https://github.com/idmitriev)
MIT © [Thomas Grainger](https://github.com/graingert)
