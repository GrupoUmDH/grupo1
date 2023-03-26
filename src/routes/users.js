const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserControllers');
const loginSession = require('../middlewares/loginSession');


router.get('/', loginSession, userController.index);

router.post('/user', userController.login);

router.post("/cadastro", userController.cadastro);


module.exports = router;
