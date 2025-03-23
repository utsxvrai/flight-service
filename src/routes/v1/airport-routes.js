const express = require('express'); 
const {AirportController} = require('../../controllers');
const {AirportMiddlewares} = require('../../middlewares');

const router = express.Router(); 


// /api/v1/airport post
router.post('/', 
    AirportMiddlewares.validateCreateRequest,   //registered the middlewares
    AirportController.createAirport);

// /api/v1/airport get
router.get('/', 
    AirportController.getAirport);

// /api/v1/airport/:id get
router.get('/:id', 
    AirportController.getAirportById);

// /api/v1/airport/:id delete
router.delete('/:id', 
    AirportController.destroyAirport);

// /api/v1/airport/:id patch
router.patch('/:id', 
    AirportController.updateAirport);

module.exports = router;