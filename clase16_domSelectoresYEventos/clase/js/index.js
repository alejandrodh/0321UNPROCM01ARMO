//Probando eventos
window.addEventListener('load', function(){
    
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';

    //Capturamos el elemento
    let titulo = document.querySelector('h1');
    let tituloPrimerArticulo = document.querySelector('.uno');
    
    console.log(titulo);
    console.log(tituloPrimerArticulo);
    
    //Implementar un eventListener
    titulo.addEventListener('click', function(event){
        titulo.style.color="red";
        tituloPrimerArticulo.style.display = "none";
        //alert('Me hicieron click');  
        console.log(event);
        console.log(this);
    })
    
    titulo.addEventListener('mouseover', function(){
        tituloPrimerArticulo.style.display = 'block';
        titulo.style.color = '#000'
    })
    
    let textoPrimerArticulo = document.querySelector('.text');
    
    textoPrimerArticulo.addEventListener('mouseover', function(){
        tituloPrimerArticulo.style.display = 'block';
        titulo.style.color = '#000'
    })
    
    //Detectar qué tecla está aperntando el usuario.
    window.addEventListener('keydown', function(e){
        console.log(e.key);
    })

})