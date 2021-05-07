//Repaso temas previos JS

let tenista = {
    nombre: 'Guillermo',
    saludar: function(){
        return 'Hola soy Guillermo'; 
    },  
}

console.log(tenista.saludar());


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        ciudad: "Dothorakt",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

// Recorré el array de personas para:
// Imprimir por consola la frase: “Hola NOMBRE APELLIDO criatura viajera!”
// Imprimir por consola la frase: “Soy NOMBRE APELLIDO de la ciudad CIUDAD”

for(let i=0; i<got.length; i++){
    console.log(`Hola ${got[i].nombre, got[i].apellido} criatura viajera`);
   // console.log('Hola ' + got[i].nombre + ' ' + got[i].apellido + ' criatura viajera')
}


//Funciones
//Crea una función que reciba como parámetro un array y retorne la cantidad de elementos que contiene.

function contar (data){
    return data.length;
}

;
console.log(contar([1,2,3,"hola",true]));


//Sumar
function sumar(num1, num2){
    return num1+num2;
}
function multiplicar(num1, num2){
    return num1*num2;
}

console.log(sumar("hola",1,2));


