module.exports = function (context) {
  return {
    FunctionExpression(node) {
      return context.report(node, 'Unexpected function expression, use fat arrow expression instead');
    }
  };
};
