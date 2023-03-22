const bt_deletar = document.querySelectorAll('[id = "bt-excluir"]');

const bt_editar = document.querySelectorAll('[id = "bt-editar"]');
const form_Editar = document.querySelectorAll('[id = "form-editar"]');

const inputDelele = document.querySelectorAll('[id = "inputDelele"]');

const popUpDelete = document.querySelector('div.pop-up');

const popUp_sair = document.querySelector('div.pop-up span button');

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
form_Editar.forEach((element, position) => {
    element.addEventListener("submit", (event) => {
        //event.preventDefault();
        console.log("Testando botão editar");
    });
});

//SAIR DO POP-UP 
popUp_sair.addEventListener('click', event => {
    popUpDelete.style.display = "none";
})