const create = function (context) {
  return {
    UnaryExpression(node) {
      return node.operator === 'typeof' ?
        context.report(node, 'Unexpected typeof operator') :
        undefined;
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the typeof operator',
      recommended: 'off'
    }
  }
};
