function calcularNota() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);

    if (!isNaN(parcial1) && !isNaN(parcial2) && !isNaN(parcial3)) {
        const sumaNotas = parcial1 + parcial2 + parcial3;
        const notaFinal = sumaNotas.toFixed(2);
        document.getElementById('resultado').textContent = notaFinal;

        
        let mensaje = '';
        if (sumaNotas >= 90) {
            mensaje = 'Sobresaliente';
        } else if (sumaNotas >= 80) {
            mensaje = 'Muy Bueno';
        } else if (sumaNotas >= 60) {
            mensaje = 'Bueno';
        } else {
            mensaje = 'Reprobado';
        }
        alert(`Tu nota final es ${mensaje}`);
    } else {
        alert('Ingresa valores válidos para las notas (0-10).');
    }
}

function limpiarCampos() {
    document.getElementById('parcial1').value = '';
    document.getElementById('parcial2').value = '';
    document.getElementById('parcial3').value = '';
    document.getElementById('resultado').textContent = '';
}