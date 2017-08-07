module.exports = function (context) {
  return {
    AssignmentExpression(node) {
      return node.left != null && node.left.type === 'MemberExpression' && node.left.property != null && node.left.property.name === 'exports' ?
				null :
				context.report(node, 'Unexpected variable reassignment');
    }
  };
};
