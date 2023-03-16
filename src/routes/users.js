const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserControllers');
const loginSession = require('../middlewares/loginSession')

/* GET users listing. */
router.get('/', loginSession, userController.index);

//router.get('/criar',userController.criarForm);

router.post('/user', userController.login);

router.post("/cadastro", userController.cadastro);
//router.post('/login', userController.login);

//router.post('/novo', userController.novoUsuario);




module.exports = router;
