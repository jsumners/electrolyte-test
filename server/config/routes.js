'use strict';

exports = module.exports = function(fooController) {
  return [
    {
      method: 'GET',
      path: '/foo',
      handler: fooController.message
    }
  ];
};

exports['@require'] = ['controllers/foo'];
exports['@singleton'] = true;