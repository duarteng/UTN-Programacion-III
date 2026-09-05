
// Actividad 1 - Ejercicio 1 - Declarar variables

const texto = "Declarando un String";

const numero = 23;

const booleano = true;

const arreglo = ["peras", "bananas", 3];

const objeto = {
    clave: "valor",
    numero: 7,
    arreglo: [1,2,3],
    objeto: {
        nombre: "Gonzalo"
    }
}

console.log(texto);
console.log(numero);
console.log(booleano);
console.log(arreglo);
console.log(objeto);

console.log("=======================");


// Actividad 1 - Ejercicio 2 - typeof
console.log(typeof(texto));
console.log(typeof(numero));
console.log(typeof(booleano));
console.log(typeof(arreglo));
console.log(typeof(objeto));

console.log("=======================");


// Actividad 1 - Ejercicio 3 - Reasignacion constantes

const variableConstante = "Numeros";

//variableConstante = 23; // script.js:44 Uncaught TypeError: Assignment to constant variable.at script.js:44:19


console.log("=======================");


// Actividad 2 - Ejercicio 4 - operaciones

const numero1 = 5;
const numero2 = 10;

const suma = numero1 + numero2;

const resta = numero1 - numero2;

const multiplicacion = numero1 * numero2;

const division = numero1 / numero2;

const modulo = numero1 % numero2;


console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);


console.log("=======================");


// Actividad 2 - Ejercicio 5 - Comparar

console.log("5" == 5); // true 

console.log("5" === 5); // false 

console.log(5 + "5"); // 55






console.log("=======================");


// Actividad 2 - Ejercicio 6 - if/else */

const numeroPar = 8;

if (numeroPar % 2 == 0) {
    console.log("El numero es Par");
} else {
    console.log("El numero es Impar");
}




console.log("=======================");


// Actividad 2 - Ejercicio 7 - for

const arregloFrutas = ["Peras", "Manzanas", "Melones", "Sandias"];

for (let i = 0; i < arregloFrutas.length; i++) {
    const fruta = arregloFrutas[i];
    
    console.log(i, fruta);
}




console.log("=======================");


// Actividad 2 - Ejercicio 8

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
    
}