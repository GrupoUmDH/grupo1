module.exports = [
    login = (req, res, next) => {

        const usuario = {nome:req.session.name, email:req.session.email}


         console.log(req.session.email,req.session.tipo)
        if (req.session.email) {
            if(req.session.tipo == 'admin'){
                res.redirect("/painel");
                
            }else {
                next();
                //console.log("Aqui");
                //res.redirect('/painel/painel-user');
                //res.render('painel-user', { pageName: 'painel-user', js: '', usuario });
            }
        } else {
            next();
        }
    },

    
]