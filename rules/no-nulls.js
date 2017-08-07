const create = function (context) {
  return {
    Null(node) {
      return context.report(node, 'Unexpected null, use an Option/Maybe Monad instead');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of `null`.',
      recommended: 'off'
    }
  }
};
