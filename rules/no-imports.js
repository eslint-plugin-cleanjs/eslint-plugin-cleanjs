const create = function (context) {
  return {
    ImportDeclaration(node) {
      return context.report(node, 'Unexpected import statement, use CJS require function instead');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids the use of the `import` keyword, in favour of CommonJS',
      recommended: 'off'
    }
  }
};
