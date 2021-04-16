console.log("hola");

let colores = ["blanco", "rojo", "negro"];
let peliculas = ["volver al futuro", "Tenet", "Harry Potter"];

console.log(colores[2]);
console.log(peliculas[0]);

let favoritos = [colores, peliculas]
console.log(favoritos[0][1]);

console.log(colores.length)

colores.push('verde');
console.log(colores);

favoritos[0].push('naranja'); //Es lo mismo que llamar al array de colores
console.log(colores);

peliculas.pop(); //Sacar el último elemento del array de películas.
console.log(peliculas);