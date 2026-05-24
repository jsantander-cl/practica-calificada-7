function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// 2. Usar un bucle for para solicitar los datos 3 veces
for (let i = 1; i <= 3; i++) {
    console.log(`Triangulo ${i}`);
    
    let base = parseFloat(prompt(`Triángulo ${i}: Ingresa la base:`));
    let altura = parseFloat(prompt(`Triángulo ${i}: Ingresa la altura:`));

    // 3. Usar condicional para verificar que sean mayores que 0
    if (base > 0 && altura > 0) {
        let area = calcularAreaTriangulo(base, altura);
        // 4. Muestra cada área en consola
        console.log(`Base: ${base}, Altura: ${altura} -> Área: ${area}`);
    } else {
        console.log("Error: La base y la altura deben ser números mayores que 0.");
    }
}