console.log("Probando funciones");


//Declarando una función
function saludar(nombre){
    return "Hola " + nombre;
} 

console.log(saludar('Maca'));
console.log(saludar('Nacho'));
console.log(saludar('Octa'));
console.log(saludar('Cande'));
console.log(saludar('Martín'));

function sumar(){
    let num1 = 89; //Variable local
    console.log(num1); //Pregunto por la variable local 
    return num1;
}

console.log(sumar() + 4);
console.log(num1);