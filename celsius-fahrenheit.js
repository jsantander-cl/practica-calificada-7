// Ejercicio 2 – Conversión de Celsius a Fahrenheit
// Crea una función convertirAFahrenheit que reciba un valor en Celsius y lo convierta a Fahrenheit:

// Pide al usuario 5 temperaturas mediante prompt.

// Usa un bucle para hacer las 5 conversiones.

// Usa un condicional para verificar que el valor ingresado sea un número.

// Muestra cada resultado en consola.



function convertirAFahrenheit(i) {
    let celsius = ( i * 9 / 5) + 32
    return celsius
}

for (let i = 1; i <= 5; i++) {
    let grados = Number(prompt("Ingresa los grados Celsius:"));
    let celsius = parseFloat(grados); // el 10 lo convierte de letra a numero

    if (grados > 0 && celsius > 0){

        let fahrenheit = convertirAFahrenheit(celsius);
        console.log(celsius + "°C es igual a: " + fahrenheit + "°F");10

    }else{
        console.log("valor no valido")
    }
    }
