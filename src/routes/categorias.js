var express = require('express');
var router = express.Router();

const CategoriasController = require('../controller/categoriasController')

router.get('/', CategoriasController.categorias);

module.exports = router;

