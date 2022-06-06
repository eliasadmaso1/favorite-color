const express = require('express');

const Router = express.Router();

const Controller = require('../Controller/Colors');

Router.get('/',Controller.getColors);
Router.put('/',Controller.updateColor);




module.exports = Router;