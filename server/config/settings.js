'use strict';

var settings = {
  server: {
    interfaceAddress: '127.0.0.1',
    port: 8080
  },

  fooController: {
    msg: "Hello World!"
  }
};

exports = module.exports = function() {
  return settings;
};

exports['@singleton'] = true;