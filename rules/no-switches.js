module.exports = function (context) {
  return {
    SwitchStatement(node) {
      return context.report(node, 'Unexpected switch statement, use pattern matching library instead');
    }
  };
};
