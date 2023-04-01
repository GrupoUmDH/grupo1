var express = require('express');
var router = express.Router();
const bodyParse = require('body-parser');
const multer = require('multer');
const path = require('path');

const validadorFormCreate = require('../middlewares/validadorFormCreate');
const validadorFormDelete = require('../middlewares/validadorFormDelete');
const validadorFormRead = require('../middlewares/validadorFormRead');
const validadorFormUpdate = require('../middlewares/validadorFormUpdate');

const ProdutosController = require('../controllers/ProdutosController');

const FilmesControllers = require('../../controllers/FilmesControllers');

router.use(bodyParse.urlencoded({extended: true}));

router.get('/', ProdutosController.produto);

//router.get('/filmes', FilmesControllers.filmes);


router.get('/filmes', ProdutosController.filmes);
router.get('/series', ProdutosController.series);
router.get('/categorias', ProdutosController.listar);
router.get('/cadastroProduto', FilmesControllers.categoriaclassificacaoFilme);

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
router.post('/create', upload.fields([{name:'backgroundCreate'},{name:'imagemCreate'}]), validadorFormCreate, FilmesControllers.createProduto);

//buscar produto
// router.get('/search', validadorFormRead, ProdutosController.buscaProduto);

router.get('/teste', FilmesControllers.index);
 
// deletar produto
router.delete('/remove', validadorFormDelete, FilmesControllers.deletaProduto);

// atualiza produto
router.put('/edit', upload.fields([{name:'backgroundUpdate'},{name:'imagemUpdate'}]), validadorFormUpdate, FilmesControllers.atualizaProduto);

// SEQUELIZE
router.get('/search', FilmesControllers.buscar);

router.get('/pesquisa', (req, res) => {
    res.render('pesquisa', {pageName: 'pesquisa', js: ''});
})


module.exports = router;
