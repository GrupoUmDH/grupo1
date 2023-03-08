var express = require('express');
var router = express.Router();
const bodyParse = require('body-parser');
const multer = require('multer');
const path = require('path');

const validadorFormCreate = require('../middlewares/validadorFormCreate');
const validadorFormDelete = require('../middlewares/validadorFormDelete')
const validadorFormRead = require('../middlewares/validadorFormRead')
const validadorFormUpdate = require('../middlewares/validadorFormUpdate')

const ProdutosController = require('../controllers/ProdutosController');
const CategoriasController = require('../controllers/CategoriasController');

const FilmesControllers = require('../../controllers/FilmesControllers');

router.use(bodyParse.urlencoded({extended: true}));

router.get('/', ProdutosController.produto);


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
 
// deletar produto
router.delete('/remove', validadorFormDelete, FilmesControllers.deletaProduto);

// atualiza produto
router.put('/edit', validadorFormUpdate, FilmesControllers.atualizaProduto);

// SEQUELIZE
router.get('/search', FilmesControllers.buscar);


router.get("/teste", FilmesControllers.index);
router.get('/testeADD/:id?', FilmesControllers.form);
router.post("/adicionaFilme", upload.fields([{name:'backgroundCreate'},{name:'imagemCreate'}]), FilmesControllers.addFilme);

router.post('/editarFilme', FilmesControllers.editar);


module.exports = router;
