const input_capa = document.querySelector('#img-capa');
const input_fundo = document.querySelector('#img-fundo');

input_capa.addEventListener('change', (e) => {
    const tgt = e.target || window.event.srcElement;

    const file = tgt.files;

    const fr = new FileReader();

    fr.onload = function(){
        document.querySelector('#previa-capa').src = fr.result;
    }

    fr.readAsDataURL(file[0]);
});

input_fundo.addEventListener('change', (e) => {
    const tgt = e.target || window.event.srcElement;

    const file = tgt.files;

    const fr = new FileReader();

    fr.onload = function(){
        document.querySelector('#previa-fundo').src = fr.result;
    }

    fr.readAsDataURL(file[0]);
});