electrolyte-test
================

A simple "Hello world" web service using [Hapi](http://hapijs.com) for the server framework
and [Electrolyte](https://github.com/jaredhanson/electrolyte) for dependency injection.

```{bash}
$ git clone https://github.com/jsumners/electrolyte-test.git
$ cd electrolyte-test
$ npm install
$ node server.js &
$ server_pid=$!
$ curl http://localhost:8080/foo
$ kill ${server_pid}
```
