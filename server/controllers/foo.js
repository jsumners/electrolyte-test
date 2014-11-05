'use strict';

exports = module.exports = function(settings) {
  var obj = {};

  obj.message = function(request, reply) {
    reply(settings.fooController.msg);
  };

  return obj;
};

exports['@require'] = ['config/settings'];
exports['@singleton'] = true;