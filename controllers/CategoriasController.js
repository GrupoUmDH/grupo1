const { Categorias } = require('../models');

module.exports = {
    // index: async(req, res) =>{
    //     console.log('categorias')
    //     const categorias = await Categorias.findAll();
    //     console.log(categorias)
    //     res.render('cadastroProduto', { categorias:categorias });

    // }
    // index: async (req, res) => {
    //     const categorias = await Categorias.findAll();
        
    //     console.log(categorias);

    //     res.render('teste', { categorias:[categorias] });

    // },
    index: async function(req, res) {
        const categorias = await Categorias.findAll({
            order:["nome"]
        }
            
        );
        
        console.log(categorias);
    
        
    }
    
}

