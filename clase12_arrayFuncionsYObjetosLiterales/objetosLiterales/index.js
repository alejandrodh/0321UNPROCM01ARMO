//Arrays con datos variados
let alumno1 = ["Octa", "Perez", 22, "CABA"]
let alumno2 = ["Vivone", 30, "Alejandro", "CABA"]

let ale = {
    nombre: "Alejandro",
    apellido: "Vivone",
    edad: 45,
    ciudad: "CABA",
    saludar: function(){ //Es una funión anónima
        return "Hola " + this.nombre
    }
}
let octa = {
    edad: 22,
    apellido: "Perez",
    ciudad: "CABA",
    nombre: "Octavio",    
    saludar: function(){ //Es una funión anónima
        return "Hola " + this.nombre
    }
}

// console.log(ale.nombre);
// console.log(ale.saludar);
console.log(ale.saludar());
console.log(octa.saludar());
