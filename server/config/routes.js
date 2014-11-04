'use strict';

exports['@require'] = ['controllers/foo'];
exports['@singleton'] = true;

exports = module.exports = function(fooController) {
  return [
    {
      method: 'GET',
      path: '/foo',
      handler: fooController.message
    }
  ];
};