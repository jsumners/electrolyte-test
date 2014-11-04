'use strict';

exports['@singleton'] = true;

exports = module.exports = {
  server: {
    interfaceAddress: '127.0.0.1',
    port: 8080
  },

  fooController: {
    msg: "Hello World!"
  }
};