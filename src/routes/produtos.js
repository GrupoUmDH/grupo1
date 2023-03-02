var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const validadorFormCreate = require('../middlewares/validadorFormCreate');
const validadorFormDelete = require('../middlewares/validadorFormDelete')
const validadorFormRead = require('../middlewares/validadorFormRead')
const validadorFormUpdate = require('../middlewares/validadorFormUpdate')

const ProdutosController = require('../controllers/ProdutosController');
const CategoriasController = require('../../controllers/CategoriasController');

const FilmesControllers = require('../../controllers/FilmesControllers');

router.get('/', ProdutosController.produto);


router.get('/filmes', ProdutosController.filmes);
router.get('/series', ProdutosController.series);
router.get('/categorias', ProdutosController.listar);
router.get('/cadastroProduto', function(req, res, next) {
    res.render('cadastroProduto', { pageName: 'cadastroProduto', errors: [], js: 'cadastroProduto'}, CategoriasController.index);
});

//implementar multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder =path.join('public/img/filmes')
        cb(null, folder)
    } ,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    } ,
});
const upload = multer({storage: storage, limits: {fileSize: 10000000}});

router.get('/produtos/:id/:nome?', ProdutosController.listaProduto);

//criar produto
router.post('/create',upload.fields([{name:'backgroundCreate'},{name:'imagemCreate'}]), validadorFormCreate, ProdutosController.createProduto);

//buscar produto
// router.get('/search', validadorFormRead, ProdutosController.buscaProduto);
 
// deletar produto
router.delete('/remove', validadorFormDelete, ProdutosController.deletaProduto);

// atualiza produto
router.put('/edit', validadorFormUpdate, ProdutosController.atualizaProduto);

// banco de dados
// router.get('/cadastroProduto/categorias', FilmesControllers.categorias);

// SEQUELIZE
router.get('/search', FilmesControllers.buscar);


module.exports = router;
