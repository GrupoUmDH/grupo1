var express = require('express');
var router = express.Router();

let userController = require('../controllers/UserControllers')

/* GET users listing. */
router.get('/', userController.index);

router.post('/login', userController.login);

router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { pageName: 'painel-user', js:'' });
});


module.exports = router;
