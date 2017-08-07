const create = function (context) {
  return {
    UnaryExpression(node) {
      return node.operator === 'instanceof' ?
        context.report(node, 'Unexpected instanceof operator') :
        undefined;
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of the `instanceof` operator',
      recommended: 'off'
    }
  }
};
