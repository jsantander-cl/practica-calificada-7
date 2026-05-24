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
    let entrada = Number(prompt("Ingresa los grados Celsius:"));
    
    // let celsius = parseFloat(entrada);

    if (!isNaN(celsius)) {
       
        let fahrenheit = convertirAFahrenheit(celsius);
        console.log(`${celsius}°C equivale a ${fahrenheit}°F`);

    } else {
        console.log(`Error en la temperatura ${i}: "${entrada}" no es un número válido.`);
    }
}