const botoes = document.querySelectorAll("main form button");

botoes.forEach((botao, index) => {

    botao.addEventListener('submit', function (event) {
        console.log("Testando")

        event.preventDefault();

    })
})




