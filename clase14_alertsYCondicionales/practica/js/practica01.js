//En el primer archivo js diseñemos un programa que le pregunte al usuario por medio de un confirm “¿Sos  culpable?”
// En caso afirmativo mostrá un alert con el texto «irás a la cárcel».
// En caso contrario mostrá un alert con el texto «irás a casa». 
// Para verlo funcionar deberás abrir en el navegador el archivo html asociado. Refrescá la página cada vez para que se ejecuten los scripts.

let respuesta = confirm('¿Sos culpable?'); //TRUE o FALSE;

if(respuesta == true){
    alert('«irás a la cárcel»');
} else {
    alert('Irás a tu casa');
}

