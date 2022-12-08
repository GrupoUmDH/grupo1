const IndexModel = require('../models/IndexModel');

module.exports = {
    index: (req, res) =>{
        const index = IndexModel.index();
        return res.render('index', { pageName: 'index' })
    }
}