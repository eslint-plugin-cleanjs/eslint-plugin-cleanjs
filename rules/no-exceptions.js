const create = function (context) {
  return [
    'ThrowStatement',
    'TryStatement',
    'CatchClause'
  ].reduce((acc, statement) => {
    acc[statement] = function (node) {
      return context.report(node, 'Unexpected exception handling statement, return error objects instead');
    };
    return acc;
  }, {});
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids throwing and catching errors.',
      recommended: 'off'
    }
  }
};
