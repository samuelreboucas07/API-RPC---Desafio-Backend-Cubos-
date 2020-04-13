const express = require('express');
const UserController = require('./../controllers/UserController');
const FifoController = require('./../controllers/FifoController');

const routes = express.Router();

routes.post('/createUser', UserController.createUser);
routes.post('/addToLine', FifoController.addToLine);
routes.post('/findPosition', FifoController.findPosition);
routes.get('/showLine', FifoController.showLine);
routes.post('/filterLine', FifoController.filterLine);
routes.post('/popLine', FifoController.popLine);

module.exports = routes;