//ecmaScript 2021 / ES12 / ES.NEXT (ecmascript moderno)
//varibles: var, let, const
//let:
//const:

// var nombre = "Giancarlo Fernandez WEB";
// // VAR: Ambito global o funcfunction mostrarNombre() {
// var nombre = 'Pepito';
// var apellidos = 'Robles';
// console.log('Dentro : ', nombre);
// console.log('Dentro : ', apellidos);

// function mostrarNombre() {
//     var nombre = 'Juan';
//     console.log('Dentro : ', nombre);
// }
// mostrarNombre();
// console.log('Fuera: ', nombre)


/*
lET: A diferencia de VAR (que tiene un ambito global),
     LET tiene un ambito de bloque.
    Con let, se consigue
 */

/* let pais = 'peru'

function mostrarPais() {
    console.log(pais);
} */

// mostrarPais();
/* if (pais == 'peru') {
    let continente = 'Europa';
    console.log('fuera', continente);
} */


// console.log(continente);

// si a contador no defino, se define automaticamente con var.
// for (let contador = 0; contador <= 5; contador++) {
//     console.log(contador);
// }
// muestra error, si a contador lo definimos con let. Si no lo declaramos automaticamente, lo define como var. Y var es global.
//no es accesible desde fuera del bloque
// console.log('CONTADOR: ', contador);


// CONST: Crear constantes o variables que su contenido
// no es variable


let edad = 18
console.log(edad);
edad = 12;
console.log(edad);


const ciudad = 'Lima';
const fechaNacimiento = 1985;
console.log(ciudad, fechaNacimiento);

