const buttons = document.querySelectorAll('.container-perguntas > .btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(this.nextElementSibling.style.maxHeight){
            this.nextElementSibling.style.maxHeight = null
        }else{
            this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 'px'
        }
    }); 
});