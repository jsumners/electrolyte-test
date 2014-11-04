'use strict';

var ioc = require('electrolyte');
ioc.loader('config', ioc.node('server/config'));
ioc.loader('controllers', ioc.node('server/controllers'));

var settings = ioc.create('config/settings');

var Hapi = require('hapi');
var server = new Hapi.Server(settings.server.interfaceAddress, settings.server.port);

var routes = ioc.create('config/routes');
server.route(routes);

server.start();