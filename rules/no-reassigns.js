const create = function (context) {
  return {
    AssignmentExpression(node) {
      return node.left && node.left.type === 'MemberExpression' && node.left.property && node.left.property.name === 'exports' ?
        null :
        context.report(node, 'Unexpected variable reassignment');
    }
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids reassigning variables',
      recommended: 'off'
    }
  }
};
