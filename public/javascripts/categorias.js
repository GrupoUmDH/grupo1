const produto= document.querySelectorAll("section section .filme-show")[1];
const filmes = [].slice.call(produto);

filmes.forEach(function(e){
    e.addEventListener('click', function(event){
        console.log('teste')
    })
});


// for(let p of produto){
//     return 
// }