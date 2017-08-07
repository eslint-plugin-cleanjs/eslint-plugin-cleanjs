module.exports = function (context) {
  return [
    'WhileStatement',
    'DoWhileStatement'
  ].reduce((acc, statement) => {
    acc[statement] = function (node) {
      return context.report(node, 'Unexpected while statement, use recursive call instead');
    };
    return acc;
  }, {});
};
