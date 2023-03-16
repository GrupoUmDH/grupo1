const express = require('express');
const router = express.Router();

let userController = require('../../controllers/UserControllers')

/* GET users listing. */
router.get('/', userController.index);
//router.get('/criar',userController.criarForm);

router.post('/user', userController.login);

router.post("/cadastro", userController.cadastro);
router.post('/login', userController.login);

//router.post('/novo', userController.novoUsuario);


module.exports = router;
