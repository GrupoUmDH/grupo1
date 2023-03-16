module.exports = [
    login = (req, res, next) => {

        console.log(req.session.nome);
        
        if (req.session.name) {
            res.redirect("/painel/painel-user");
        } else {
            next();
        }
    },
]