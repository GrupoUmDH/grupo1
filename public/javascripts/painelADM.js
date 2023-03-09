const bt_deletar = document.getElementById('bt-excluir');

const bt_editar = document.querySelectorAll('[id = "bt-editar"]');



bt_deletar.addEventListener('submit', (element) => {
    element.preventDefault();
});

bt_editar.forEach((element, position) => {
    element.addEventListener('submit', (event) =>{
        event.preventDefault();
    })
})