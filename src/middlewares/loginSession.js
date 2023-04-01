module.exports = [
    login = (req, res, next) => {

        console.log(req.session.email,req.session.tipo)
        if (req.session.email) {
            res.redirect("/painel");
        } else {
            next();
        }
    },

    
]