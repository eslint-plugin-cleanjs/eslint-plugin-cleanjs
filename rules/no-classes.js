module.exports = function (context) {
  return {
    Class(node) {
      return context.report(node, 'Unexpected class');
    }
  };
};
