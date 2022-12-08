

let itensCarrinho = JSON.parse(localStorage.getItem("carrinho"))
    console.log(itensCarrinho)

let itemsContainer = document.querySelector('.itens')
    itensCarrinho.forEach(filme => {
        itemsContainer.innerHTML += `
                <section class="item">
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
                            </div>
                        </div>
                    </div>
                </section>`

    });

    window.onload = function (){
        const removeBtns = document.querySelectorAll('.remover')
        console.log(removeBtns)
        removeBtns.forEach(btn => {
            btn.addEventListener('click' , function(){
                btn.parentElement.parentElement.parentElement.parentElement.remove()
                
            })
        }
            
            )}