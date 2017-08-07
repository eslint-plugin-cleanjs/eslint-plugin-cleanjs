const create = function (context) {
  return {
    Identifier(node) {
      return node.value === 'undefined' ?
        context.report(node, 'Unexpected undefined, use an Option/Maybe Monad instead') :
        undefined;
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of `undefined`.',
      recommended: 'off'
    }
  }
};
