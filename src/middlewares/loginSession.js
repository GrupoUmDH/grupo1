module.exports = [
    login = (req, res, next) => {

         
        if (req.session.email) {
            if(req.session.tipo == 'admin'){
                res.redirect("/painel");
                
            } else {
                res.redirect("/painel/painel-user");
            }
        } else {
            next();
        }
    },

    
]