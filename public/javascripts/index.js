// ENVIA OS DADOS DO FILME PARA A PÁGINA DO PRODUTO...

const itemFilme = document.querySelectorAll('section section .filme-show');

const id_Filme = document.querySelectorAll('h1 #id-filmes');
const tipo_Filme = document.querySelectorAll('h1 #tipo-filmes');
const categoria_Filme = document.querySelectorAll('div #categoria-filmes');
const nome_Filme = document.querySelectorAll('div #nome-filme');
const aluga_Filme = document.querySelectorAll('#aluga-filmes');
const compra_Filme = document.querySelectorAll('#compra-filmes');
const descri_Filme = document.querySelectorAll('#descri-filme');
const img_Filme = document.querySelectorAll('#img-filmes');
const back_Filme = document.querySelectorAll('#back-filme');


itemFilme.forEach( (item, index) => {
    item.addEventListener('click', function(event){
        //console.log(item);
        //console.log(nome_Filme[index].innerText);

        let filmeContent = []

        let filme = {
            index,
            tipo: tipo_Filme[index],
            categoria: categoria_Filme[index].innerText,
            nome: nome_Filme[index].innerText,
            aluga: aluga_Filme[index].innerText,
            compra_Filme: compra_Filme[index].innerText,
            descri_Filme: descri_Filme[index].innerText,
            img: img_Filme[index].src,
            background: back_Filme[index].src
        }

        filmeContent.push(filme);
        //filmeContent = JSON.parse(filme)
        //filmeContent.push(filme);

        sessionStorage.setItem('carrinho', JSON.stringify(filmeContent))
        console.log(filme)
    })
})