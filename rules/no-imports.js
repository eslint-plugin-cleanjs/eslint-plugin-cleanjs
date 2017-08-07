module.exports = function (context) {
  return {
    ImportDeclaration(node) {
      return context.report(node, 'Unexpected import statement, use CJS require function instead');
    }
  };
};
