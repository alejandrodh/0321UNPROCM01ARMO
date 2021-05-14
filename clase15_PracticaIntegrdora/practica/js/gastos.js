// Preguntarle al visitante que recién ingresa si quiere iniciar. Si la respuesta es negativa, deberá mostrarse una alerta que diga "Gracias por haber venido" y luego será direccionado al sitio web de Netflix. Usá el método:
//  window.location.href = ‘https://netflix.com’

// Si la respuesta es positiva: 
// Mediante un prompt ingresar la cantidad de integrantes de la familia. Tal vez debas pasar el valor ingresado usando la función Number() para asegurarnos de que se guarde como número. 
// Validá que el dato ingresado sea un número y que sea mayor a 2. 
// Para chequear que sea número podrías usar la función typeof(variable) == “Number”. 
// Si el usuario coloca algo diferente a un número o es un número menor igual a 2 deberá alertar que el valor necesario es un número mayor a 2 y volver a cargar la página con la función (window.location.reload()).

// Con la cantidad de integrantes lista vamos a pedir mediante un prompt para cada uno: nombre y gastos del día validando que:
// El nombre no puede estar vacío.
// El valor de gasto no puede estar vacío y debe ser un número. Para chequear que sea número podrías usar la función typeof(variable). En cualquiera de esos casos, alertar del error y volver a cargar la página.




// Con todos los datos usando un bucle y métodos de arrays creá un array de objetos literales. Ejemplo final:
// let integrantes = [
// {nombre: "Ada", gastos: 300},
// {nombre: "Tim", gastos: 570},
// {nombre: "Vincent", gastos: 80},
// ]

// Mostrar dicho array por consola.

// Imprimir por consola el nombre y gasto de cada integrante.

// Obtener:
// Los gastos de toda la familia e imprimirlos por consola.
// Si el gasto total supera los $1000 mostrar una alerta con el mensaje “Debemos pedir un préstamo”.
// El promedio de gasto del día e imprimirlo por consola.
// Si el gasto promedio es inferior a $500 mostrar una alerta con el mensaje “¡Festejamos!”
		
let continuar = confirm('¿Querés iniciar?'); 

if( continuar == false ){
    alert('Gracias por haber venido');
    window.location.href = "https://netflix.com";
} else {
   let integrantes = Number( prompt('Ingrese un número de integrantes') );

   if(typeof(integrantes) == "number" && integrantes >2){
    //Acá tendremos la magia

    let familia = [];

    for(let i=0; i<integrantes; i++){
        let persona = {};

        let nombre = prompt('Ingrese un nombre');
        let gasto = Number (prompt('Ingrese un valor de gastos'));

        persona.nombre = nombre;
        persona.gasto = gasto;

        familia.push(persona);
    }

        console.log(familia);

// Array modelo
// let familia = [
//         {nombre: "Ada", gastos: 300},
//         {nombre: "Tim", gastos: 570},
//         {nombre: "Vincent", gastos: 80},
//     ]

        //Recorremos el array de familia para imprimir los datos de los integrantes.
        for(let i=0; i<familia.length; i++){
            console.log(`nombre: ${familia[i].nombre}; gasto: ${familia[i].gasto }`);
        }

        let totalGastos = 0;
        for(let i=0; i<familia.length; i++){
            totalGastos = familia[i].gasto + totalGastos
        }
        console.log(`Total de gastos: ${totalGastos}`);



   } else {
        alert('Por favor ingresá únicamente un número mayor a 2');   
        window.location.reload();
   }


}
