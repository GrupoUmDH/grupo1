const pupUpErro = document.querySelector('div.popUpErro');
const popUpSair = document.querySelector('div#popUp-content span button');

pupUpErro.style.display = "flex";

popUpSair.addEventListener('click', (event) => {
    pupUpErro.style.display = "none";
});



