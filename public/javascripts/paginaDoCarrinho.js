const removeBtns = document.querySelectorAll(".remover");
console.log(removeBtns);

removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const idFilme = this.nextElementSibling.value;
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho = carrinho.filter((item) => item.id != idFilme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        btn.parentElement.parentElement.parentElement.parentElement.remove();
    });
});

/*
let itensCarrinho = JSON.parse(localStorage.getItem("carrinho"));
console.log(itensCarrinho);

let itemsContainer = document.querySelector(".itens");
itensCarrinho.forEach((filme) => {
    itemsContainer.innerHTML += `
                <section class="item">
                    <input type="hidden" value="${filme.id}" id="id" name="id">
                    <img class="imagem-produto" src="${filme.imagem}"/>
                    <div class="descricao-produto">
                        <div>
                            <h2 class="filme-nome"> ${filme.nome}</h2>
                            <br>
                            <p class="filme-descricao"> ${filme.descricao}</p>
                        </div>
                        <div class="container-preco">
                            <img id="indicacao" src="${filme.classificacao}">
                            <div>
                                <span class="filme-valor"></span>
                                <img class="remover" type="button" src="/img/ico/lixo.png"/>
                                <input type="hidden" value="${filme.id}" id="id" name="id">
                            </div>
                        </div>
                    </div>
                </section>`;
});

window.onload = function () {
    const removeBtns = document.querySelectorAll(".remover");
    console.log(removeBtns);
    removeBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const idFilme = this.nextElementSibling.value;
            let carrinho = JSON.parse(localStorage.getItem("carrinho"));
            carrinho = carrinho.filter((item) => item.id != idFilme);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            btn.parentElement.parentElement.parentElement.parentElement.remove();
        });
    });
};

*/
