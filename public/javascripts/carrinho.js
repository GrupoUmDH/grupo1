const sectionFilme = document.querySelectorAll("section.item");
const filmesNoCariinho = document.querySelector("form input#itensCarrinho");
const removeBtns = document.querySelectorAll("main form#montarCarrinho");

const popUp = document.querySelector("div.pop-up");
const popUp_sair = document.querySelector("div.pop-up span button");

//SAIR DO POP-UP
popUp_sair.addEventListener("click", (event) => {
    popUp.style.display = "none";
});

removeBtns.forEach((btn, index) => {
    btn.addEventListener("submit", function (event) {
        event.preventDefault();

        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho.splice(index, 1);
        //console.log(carrinho);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        //delCarrinho[index].value = carrinho;
        filmesNoCariinho.value = JSON.parse(carrinho);

        sectionFilme[index].remove();

        this.submit();
    });
});

