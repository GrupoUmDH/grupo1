const itemFilme = document.querySelectorAll('section section .filme-show');

const nomeFilme = document.querySelectorAll('div #nome-filme');
const descriFilme = document.querySelectorAll('div #descri-filme');
const imgFilme = document.querySelectorAll('div #img-filme');

const id = document.getElementById('id').value

let dados = [];

const filme = {
    id,
    nome: nomeFilme.innerText,
    descricao: descriFilme.innerText,
    imagem: imgFilme.src
}

itemFilme.forEach( (item, index) => {
    item.addEventListener('click', function(event){
        console.log(item);
        console.log(nomeFilme[index].innerText);

        //var filme = nomeFilme[index].innerText;

        //dados = sessionStorage.getItem('filme')
        if (sessionStorage.getItem('filme') == null) {
            dados.push(filme)
            sessionStorage.setItem('filme', JSON.stringify(dados))
        } else {
            dados = sessionStorage.getItem('filme')
            dados = JSON.parse(carrinho)
            dados.push(filme)
            sessionStorage.setItem('filme', JSON.stringify(dados))
        }
    })
})