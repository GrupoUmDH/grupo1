var express = require("express");
var router = express.Router();


router.get("/adm", function (req, res, next) {
    res.render("painelADM", { pageName: "Painel", js: "" });
});