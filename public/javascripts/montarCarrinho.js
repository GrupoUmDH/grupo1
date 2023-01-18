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
