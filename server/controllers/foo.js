'use strict';

exports['@require'] = ['settings'];
exports['@singleton'] = true;

exports = module.exports = function(settings) {
  var obj = {};

  obj.message = function(request, reply) {
    reply(settings.fooController.msg);
  };

  return obj;
};