const create = function (context) {
  return {
    IfStatement(node) {
      return context.report(node, 'Unexpected if statement, use ternary expression instead');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of `if` statements, in favour of ternary expressions',
      recommended: 'error'
    }
  }
};
