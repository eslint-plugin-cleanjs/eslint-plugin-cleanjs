module.exports = function (context) {
  return {
    Null(node) {
      return context.report(node, 'Unexpected null, use undefined instead');
    }
  };
};
