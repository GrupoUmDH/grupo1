module.exports = [
    login = (req, res, next) => {

        console.log(req.session.nome);
        console.log(req.session.id);
        console.log(req.session.email);
        console.log(req.session.key);
        
    const usuario = {nome:req.session.name, email:req.session.email}
        
        if (req.session.name) {
            res.render('painel-user', { pageName: 'painel-user', js: '', usuario });
        } else {
            next();
        }
    },

    
]