// Ejercicio 4 – Pares e impares en un rango
// Crea una función clasificarParesImpares que reciba dos números inicio y fin y:

// Use un bucle for para recorrer todos los números desde inicio hasta fin.

// Use condicional para imprimir si cada número es par o impar.

// Pide al usuario inicio y fin mediante prompt.

// Muestra el resultado en consola.


let inicio = prompt("Ingresa el número de inicio:");
let fin = prompt("Ingresa el número de fin:");

function clasificarParesImpares(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i + " es par");
        } else {
            console.log(i + " es impar");
        }
 }
}

clasificarParesImpares(Number(inicio), Number(fin));