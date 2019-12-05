const express = require('express');
const routes = express.Router();

routes.get('/presidents/random', require('./randomPresident'));
routes.get('/presidents/:presidentID', require('./president'));
routes.get('/presidents', require('./presidents'));

module.exports = routes;