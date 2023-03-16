const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexControllers')


/* GET home page. */

router.get('/', indexControllers.index);
  
router.get('/cadastro', indexControllers.loginForm);

// router.post('/login', indexControllers.autenticar);
// router.get('/logout', indexControllers.logout);

router.get('/sobre', function(req, res, next) {
    res.render('sobre', { pageName: 'sobre', js: '' });
});

router.get('/suporte', function(req, res, next) {
    res.render('suporte', { pageName: 'suporte', js:'suporte' });
});



module.exports = router;