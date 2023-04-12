const formMontarCarrinho = document.querySelectorAll("form#montarCarrinho");
const formDeletaItem = document.querySelectorAll("form#deletaItem");

let novoCarrinho = [];
novoCarrinho = JSON.parse(localStorage.getItem('carrinho'));

formDeletaItem.forEach((item, i)=> {
    item.addEventListener('submit', function(event){
        event.preventDefault();
        const itensCarrinho = document.querySelectorAll('input[id="deletaItem"]');
        
        //localStorage.removeItem('carrinho');
        
        novoCarrinho.splice(i,1);
        console.log(novoCarrinho);
        
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

        itensCarrinho[i].value = localStorage.getItem('carrinho');

        this.submit();

    })
});

formMontarCarrinho.forEach((montaCarrinho, index) => {
    montaCarrinho.addEventListener('submit', function (event) {

        event.preventDefault();
        
        const itensCarrinho = document.querySelectorAll('[id="itensCarrinho"]');
        itensCarrinho[index].value = localStorage.getItem("carrinho");
        
        
        this.submit();
    })
});

