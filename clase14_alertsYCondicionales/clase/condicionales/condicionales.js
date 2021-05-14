let edad = prompt('Edad?');
let mensaje = '';


if(edad <16){
    mensaje = 'Acceso denegado';
} else if(edad >=16 && edad <18){
    mensaje = 'Podes entrar con una adulto.'
} else if(edad >=18 && edad < 60)
    mensaje = 'Podés entrar tranca'
else{
    mensaje = 'Estás pasado.'
}

alert(mensaje);