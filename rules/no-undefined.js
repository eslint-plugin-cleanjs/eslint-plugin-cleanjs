module.exports = function (context) {
  return {
    Identifier(node) {
      return node.value === 'undefined' ?
				context.report(node, 'Unexpected undefined, use null instead') :
				undefined;
    }
  };
};
