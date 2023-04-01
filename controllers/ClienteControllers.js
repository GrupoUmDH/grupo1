


module.exports = {
    index: async (req, res, next) => {
        console.log(req.session);

        res.render("painel-user", {
            pageName: "painel-user",
            js: "painel-user",
        });
    },


}