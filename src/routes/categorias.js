var express = require('express');
var router = express.Router();

const categoriasController = require('../controllers/categoriasController')

router.get('/', categoriasController.listar);

module.exports = router;

