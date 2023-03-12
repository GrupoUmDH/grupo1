const express = require('express');
const router = express.Router();
const bodyParse = require("body-parser");
const multer = require("multer");
const path = require("path");

const validadorFormCreate = require("../middlewares/validadorFormCreate");

const AdmControllers = require('../../controllers/AdmControllers');

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

router.get('/criar', AdmControllers.formCriar);
router.post(
    "/criar",
    upload.fields([{ name: "capa" }, { name: "fundo" }]),
    validadorFormCreate,
    AdmControllers.criar
);

router.put('/editar', AdmControllers.editar);

router.post('/atualiza', AdmControllers.atualiza)


module.exports = router;
