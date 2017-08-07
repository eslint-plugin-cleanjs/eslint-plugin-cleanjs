module.exports = function (context) {
  const functions = [];
  function enterFunction(node) {
    return functions.push(node);
  }
  function exitFunction(node) {
    return functions[functions.length - 1] === node ?
      context.report(node, 'Does not have explicit return value') :
      undefined;
  }

  return {
    FunctionDeclaration: enterFunction,
    FunctionExpression: enterFunction,
    ArrowFunctionExpression(node) {
      return node.body.type === 'BlockStatement' ?
        enterFunction(node) :
        null;
    },

    'FunctionDeclaration:exit': exitFunction,
    'FunctionExpression:exit': exitFunction,
    'ArrowFunctionExpression:exit': exitFunction,

    ReturnStatement() {
      return functions.pop();
    }
  };
};
