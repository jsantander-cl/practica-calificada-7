// Ejercicio 1 – Área de triángulos múltiples
// Crea una función llamada calcularAreaTriangulo que reciba base y altura y devuelva el área:

// Pide al usuario 3 veces la base y altura de diferentes triángulos usando prompt.

// Usa un bucle for para solicitar los datos 3 veces.

// Usa condicional para verificar que base y altura sean mayores que 0.

// Muestra cada área en consola.



function calcularAreaTriangulo(base, altura) {
    let resultado = base * altura / 2
    return resultado
}

for (let i = 0; i < 3; i++) {
    let base = Number(prompt("Ingrese base:"))
    let altura = Number(prompt("Ingrese altura:"))
    if (base > 0 && altura > 0) {
        let area = calcularAreaTriangulo(base, altura)
        console.log("El area es " + area)
    } else {
        console.log("base y altura deben ser mayores que 0.")
    }
}