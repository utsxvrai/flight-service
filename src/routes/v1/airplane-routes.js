const express = require('express'); 
const {AirplaneController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router(); 


// /api/v1/airplane post
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,   //registered the middlewares
    AirplaneController.createAirplane);

// /api/v1/airplane get
router.get('/', 
    AirplaneController.getAirplane);

// /api/v1/airplane/:id get
router.get('/:id', 
    AirplaneController.getAirplaneById);

// /api/v1/airplane/:id delete
router.delete('/:id', 
    AirplaneController.destroyAirplane);

module.exports = router;