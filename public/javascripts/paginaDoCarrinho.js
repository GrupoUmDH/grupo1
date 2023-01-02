const removeBtns = document.querySelectorAll(".remover");
console.log(removeBtns);

let Itens = JSON.parse(localStorage.getItem("carrinho"));
console.log(Itens);

removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const idFilme = this.nextElementSibling.value;
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho = carrinho.filter((item) => item.id != idFilme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        btn.parentElement.parentElement.parentElement.parentElement.remove();
    });
});