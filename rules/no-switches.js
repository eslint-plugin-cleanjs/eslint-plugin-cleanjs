const create = function (context) {
  return {
    SwitchStatement(node) {
      return context.report(node, 'Unexpected switch statement, use pattern matching library instead');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of the `switch` statement',
      recommended: 'off'
    }
  }
};
