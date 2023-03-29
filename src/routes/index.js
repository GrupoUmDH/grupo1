const express = require('express');
const router = express.Router();
const userController= require('../../controllers/UserControllers')

const indexControllers = require('../controllers/indexControllers');


/* GET home page. */

router.get('/', indexControllers.index);

router.get('/sobre', function(req, res, next) {
    res.render('sobre', { pageName: 'sobre', js: '' });
});

router.get('/suporte', function(req, res, next) {
    res.render('suporte', { pageName: 'suporte', js:'suporte' });
});

router.get('/sair', userController.sair);


module.exports = router;