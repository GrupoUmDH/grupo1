const express = require('express');
const router = express.Router();

const AdmControllers = require('../../controllers/AdmControllers');


router.get('/', AdmControllers.index);


module.exports = router;
