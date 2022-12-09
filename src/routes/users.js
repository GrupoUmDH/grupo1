var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro', { pageName: 'cadastro' });
});

router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { pageName: 'painel-user' });
});



module.exports = router;
