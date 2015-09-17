var express = require('express');
var routes = require('./routes');
var app = express();

routes.app(app);

app.listen('8081')

console.log('listening on port 8081');

exports = module.exports = app;