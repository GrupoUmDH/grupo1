const sectionFilme = document.querySelectorAll('section.item');

const delCarrinho = document.querySelectorAll("main form input");

const removeBtns = document.querySelectorAll("main form#montarCarrinho");

//console.log(filme.id);
removeBtns.forEach((btn, index) => {

    btn.addEventListener('submit', function (event) {
        event.preventDefault()

        sectionFilme[index].remove();

        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        delCarrinho[index].value = carrinho;

        //console.log(delCarrinho[index].value);
        event.submit();
        //window.location.reload();
    });
});
