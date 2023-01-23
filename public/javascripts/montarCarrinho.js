const formMontarCarrinho = document.querySelectorAll("form#montarCarrinho");

formMontarCarrinho.forEach((montaCarrinho, index) => {
    montaCarrinho.addEventListener('submit', function (event) {
        event.preventDefault()
        const itensCarrinho = document.querySelectorAll('[name="itensCarrinho"]');
        itensCarrinho[index].value = localStorage.getItem("carrinho");
        //console.log(itensCarrinho)
        this.submit()
    })
})

const sectionFilme = document.querySelectorAll("section.item");
const filmesNoCariinho = document.querySelector("form input#itensCarrinho");
const removeBtns = document.querySelectorAll("main form#montarCarrinho");
let delCarrinho = document.querySelectorAll("main form input");

console.log(filmesNoCariinho.value);

//console.log(filme.id);
removeBtns.forEach((btn, index) => {
    btn.addEventListener("submit", function (event) {
        event.preventDefault();

        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho.splice(index, 1);
        console.log(carrinho);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        delCarrinho[index].value = carrinho;
        filmesNoCariinho.value = carrinho;

        sectionFilme[index].remove();

        this.submit();
        //window.location.reload();
    });
});
