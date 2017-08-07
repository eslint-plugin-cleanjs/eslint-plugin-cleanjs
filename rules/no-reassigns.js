module.exports = function (context) {
  return {
    AssignmentExpression(node) {
      return node.left && node.left.type === 'MemberExpression' && node.left.property && node.left.property.name === 'exports' ?
        null :
        context.report(node, 'Unexpected variable reassignment');
    }
  };
};
