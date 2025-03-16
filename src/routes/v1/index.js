const express = require('express');
const { UserController } = require('../../controllers')
const { AuthMiddlewares } = require('../../middlewares');

const router = express.Router();
const airplaneRoutes = require('./airplane-routes');

router.use('/airplanes', airplaneRoutes);

router.post(
    '/signup', 
    AuthMiddlewares.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthMiddlewares.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthMiddlewares.validateIsAdminRequest,
    UserController.isAdmin
);
module.exports  = router;