/*/Precalentando a
for(let i=0; i<5; i++){
    console.log('Practicando con for');
}

//Precalentando b
for(let i=0; i<5; i++){
    console.log(`La variable i tiene el valor: ${i}`);
}

//Precalentando c
for(let i=2; i<20; i+=2){
    console.log(i);
}

for(let i=5; i<50; i+=5){
    console.log(i);
}

//Precalentando d
for(let i=100; i>0; i--){
    console.log(i);
}

//Tablas de multiplicar
let base = 3;
let resultado = [];

for(let i=1; i<=10; i++){
    resultado.push(base*i)
}
// console.log(resultado);

//Obteniendo el total
let ganancias = [1,2,3,-4,5,6,-2,8,23];
let total = 0;

for(let i=0; i<ganancias.length; i++){
   total = total + ganancias[i]; 
}
console.log(total);

//Recorriendo arrays
let healingIsDifficult = [
'Fear',
'Drink to Get Drunk',
'Taken for Granted',
'Blow It All Away',
'Get Me',
'Im Not Important to You',
'Sober and Unkissed',
'Healing Is Difficult',
'Judge Me',
'Little Man',
'Insidiously'
]

for(let i=0; i<healingIsDifficult.length; i++){
    console.log( healingIsDifficult[i] );
}

for(let i=0; i<healingIsDifficult.length; i++){
    console.log( `${i+1} ${healingIsDifficult[i]}` );
}

*/
//Recorriendo Objetos literales
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

for(let i=0; i<got.length; i++){
    console.log(got[i].nombre)
}


//
let base = 3;
let resultado = [];

for(let i=1; i<11; i++){
    resultado.push(base*i);
    console.log(resultado);
}