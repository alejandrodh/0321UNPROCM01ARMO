let boton = document.querySelector('#abracadabra');
let titular = document.querySelector('#titular');

boton.addEventListener('click', function(event){
    event.preventDefault();
    let nombre = prompt('Ingresá tu nombre');
    titular.innerHTML = `Hi. I'm <strong>${nombre}</strong>`;

    //<h1 id="titular">Hi. I'm <strong>Jane Doe</strong>.</h1>
    

})