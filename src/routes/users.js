var express = require('express');
var router = express.Router();

let userController = require('../../controllers/UserControllers')

/* GET users listing. */
router.get('/', userController.index);

router.post('/user', userController.login);

router.post("/cadastro", userController.cadastro);



module.exports = router;
