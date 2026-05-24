// Ejercicio 3 – Contar vocales en un texto
// Crea una función contarVocales que reciba un texto y devuelva el número de vocales:

// Pide al usuario 3 textos mediante prompt.

// Usa un bucle para recorrer cada letra del texto.

// Usa condicionales para determinar si un carácter es vocal.

// Muestra en consola cuántas vocales tiene cada texto.

function contarVocales(texto) {
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase(); //texto en minusculas
        
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            contador++;
        }
    }
    return contador;
}

for (let i = 1; i <= 3; i++){
    let Texto = prompt("Texto:");
    console.log("Vocales en texto:", contarVocales(Texto));

}


