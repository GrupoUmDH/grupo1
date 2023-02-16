const { check } = require('express-validator');

module.exports = [
    check('nome').notEmpty()
]