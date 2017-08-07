module.exports = function (context) {
  return {
    NewExpression(node) {
      context.report(node, 'Unexpected "new" expression');
    }
  };
};
