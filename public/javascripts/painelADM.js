const bt_deletar = document.querySelectorAll('[id = "bt-excluir"]');

const bt_editar = document.querySelectorAll('[id = "bt-editar"]');

const inputDelele = document.querySelectorAll('[id = "inputDelele"]');

const popUpDelete = document.querySelector('div.pop-up');

popUpDelete.style.display = "none";

//BOTÃO DE EXCLUIR
bt_deletar.forEach((element, position) => {
    element.addEventListener('click', (event) =>{
        event.preventDefault();

        popUpDelete.style.display = "flex";

        const popUp_inputDelete = document.querySelector('div input#pup-up-inputValue');
        popUp_inputDelete.value = inputDelele[position].value;

        console.log(popUp_inputDelete.value)

    })
});

//BOTÃO DE EDITAR
bt_editar.forEach((element, position) => {
    element.addEventListener('submit', (event) =>{
        event.preventDefault();
    })
})