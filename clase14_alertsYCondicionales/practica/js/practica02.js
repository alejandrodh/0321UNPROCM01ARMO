// Mediante un prompt pedí al usuario que escriba un número del 1 al 100. Guardá la respuesta en una variable.

// Mediante otro prompt pedí al usuario que escriba otro número del 1 al 100. Guardá la respuesta en otra variable.

// Creá una variable “resultado” con la suma de los 2 números.

// Usando condicionales evaluá:
// Si el usuario dejó el campo vacío mostrá un alerta con la leyenda “Ey, necesitamos un número”. ¿Se te ocurre cómo evaluar el campo vacío? Con la ayuda de console.log() fijate qué retorna un prompt al que el usuario no le completó datos.

// Si los números ingresados son iguales. mostrá una alerta diciendo “Ey, escribiste el mismo número: elNúmero”.

let num1 = prompt('Escribí un número del 1 al 100');
let num2 = prompt('Escribí otro número del 1 al 100');
let resultado = num1 + num2;

if(num1 == ''){
    alert('Ey, necesitamos un número')
}
if(num2 == ''){
    alert('Ey, necesitamos un número')
}
if(num1 == num2){
    alert(`Ey, escribiste el mismo número: ${num1}`)
}