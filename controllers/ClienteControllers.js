

module.exports = {
    index: async (req, res, next) => {
        res.render("painel-user", {
            pageName: "painel-user",
            js: "painel-user",
        });
    },
}