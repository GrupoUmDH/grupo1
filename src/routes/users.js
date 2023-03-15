const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserControllers')

/* GET users listing. */
router.get('/', userController.index);
router.get('/criar',userController.criarForm);

router.post('/criar',userController.criar);
router.post('/login', userController.login);
router.post('/novo', userController.novoUsuario);


router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { pageName: 'painel-user', js:'' });
});




module.exports = router;
