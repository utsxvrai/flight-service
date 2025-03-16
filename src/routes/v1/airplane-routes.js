const express = require('express'); 
const {AirplaneController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router(); 


// /api/v1/airplane post
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,   //registered the middlewares
    AirplaneController.createAirplane);

module.exports = router;