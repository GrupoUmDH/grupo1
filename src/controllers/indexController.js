const IndexModel = require('../models/IndexModel');

module.exports = {
    index: (req, res) =>{
        const index = IndexModel.index();
<<<<<<< HEAD
        return res.render('index', { title: 'index' })
=======
        return res.render('index', { index:index, pageName: 'index', js:'' })
>>>>>>> origin
    }
    
}