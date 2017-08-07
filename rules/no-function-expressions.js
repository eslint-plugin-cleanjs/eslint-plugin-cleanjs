const create = function (context) {
  return {
    FunctionExpression(node) {
      return context.report(node, 'Unexpected function expression, use fat arrow expression instead');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of function expressions, consider: prefer-arrow-callback',
      recommended: 'off'
    }
  }
};
