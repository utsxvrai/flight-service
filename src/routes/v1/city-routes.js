const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/cities POST
router.post('/', 
        CityMiddlewares.validateCreateRequest,
        CityController.createCity);

// /api/v1/cities/:id DELETE
router.delete('/:id', 
        CityController.destroyCity);

// /api/v1/cities/:id PATCH
router.patch('/:id', 
        CityController.updateCity);


router.get('/',
        CityController.getAllCities);


module.exports = router;