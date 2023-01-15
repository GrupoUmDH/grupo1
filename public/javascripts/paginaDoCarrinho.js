//console.log(localStorage.carrinho.valor)

const sectionFilme = document.querySelectorAll('section.item');

const removeBtns = document.querySelectorAll(".remover");

//console.log(filme.id);
removeBtns.forEach((btn) => {

    btn.addEventListener("click", function () {
        const idFilme = btn.value;
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));

        carrinho = carrinho.filter((item) => item.id != idFilme);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        btn.parentElement.remove();
    });
});
