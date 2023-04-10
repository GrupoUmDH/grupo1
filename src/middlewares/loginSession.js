module.exports = [
    login = (req, res, next) => {
        if (req.session.email) {
            res.redirect("/painel");
        } else {
            next();
        }
    },
]