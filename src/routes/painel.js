const express = require('express');
const router = express.Router();
const bodyParse = require("body-parser");
const multer = require("multer");
const path = require("path");

const validadorForm = require("../middlewares/validadorForm");
const userCriar = require('../middlewares/userCriar');

const AdmControllers = require('../../controllers/AdmControllers');
const userController = require('../../controllers/UserControllers');

router.use(bodyParse.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join("public/img/filmes");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage, limits: { fileSize: 10000000 } });

router.get('/', AdmControllers.index);
router.get('/sair', userController.sair);
router.get('/users', AdmControllers.userConfig);

router.get('/criar', AdmControllers.formCriar);
router.post('/criar',
    upload.fields([{ name: "capa" }, { name: "fundo" }]),
    AdmControllers.criar
);

router.put('/editar', AdmControllers.editar);
router.put('/atualiza', upload.fields([{ name: "capa" }, { name: "fundo" }]), AdmControllers.atualiza);
router.delete('/deletar', AdmControllers.deletar);

//rotas de painel CLIENTES - painel-user.ejs 
router.get('/painel-user', userController.index);
router.post('/painel-user', userController.update);

router.get('/users/criar', AdmControllers.userFormCriar);
router.post('/users/criar', userCriar, AdmControllers.userCriar);

router.post('/users/editar', AdmControllers.userEditar);
router.put('/users/atualizar', userCriar, AdmControllers.userUpdate);

router.put('/users/atualizaDados', AdmControllers.dadosUpdate);

router.delete('/users/delete', AdmControllers.userDelete);

module.exports = router;
