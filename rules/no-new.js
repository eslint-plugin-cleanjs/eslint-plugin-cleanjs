const create = function (context) {
  return {
    NewExpression(node) {
      context.report(node, 'Unexpected "new" expression');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of the `new` keyword',
      recommended: 'off'
    }
  }
};
