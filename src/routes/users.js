var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro', { pageName: 'cadastro', js: 'cadastro' });
});

router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { pageName: 'painel-user', js:'' });
});


module.exports = router;
