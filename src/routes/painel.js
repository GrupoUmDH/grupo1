const express = require('express');
const router = express.Router();

const AdmControllers = require('../../controllers/AdmControllers');


router.get('/', AdmControllers.index);

router.put('/editar', AdmControllers.editar);

router.post('/atualiza', AdmControllers.atualiza)


module.exports = router;
