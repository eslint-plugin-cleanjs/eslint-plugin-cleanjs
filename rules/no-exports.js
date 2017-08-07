const create = function (context) {
  return [
    'ExportNamedDeclaration',
    'ExportDefaultDeclaration',
    'ExportAllDeclaration'
  ].reduce((acc, statement) => {
    acc[statement] = function (node) {
      return context.report(node, 'Unexpected export declaration, use CJS module.exports instead');
    };
    return acc;
  }, {});
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbids use of export keyword',
      recommended: 'off'
    }
  }
};
