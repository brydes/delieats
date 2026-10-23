// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Referencias a los elementos del DOM
    const inputAzucar = document.getElementById('gramosAzucar');
    const selectEdulcorante = document.getElementById('tipoEdulcorante');
    const btnCalcular = document.getElementById('btnCalcular');
    
    const resultadoCantidad = document.getElementById('resultadoCantidad');
    const resultadoNombre = document.getElementById('resultadoNombre');
    const consejoUso = document.getElementById('consejoUso');

    // Función principal para calcular la equivalencia
    function calcularEquivalencia() {
        const gramos = parseFloat(inputAzucar.value);
        const tipo = selectEdulcorante.value;

        // Validación simple
        if (isNaN(gramos) || gramos <= 0) {
            resultadoCantidad.textContent = "0 g";
            resultadoNombre.textContent = "Ingresa un valor válido";
            consejoUso.textContent = "Por favor introduce una cantidad mayor a cero.";
            return;
        }

        let cantidadCalculada = 0;
        let nombreEdulcorante = "";
        let consejo = "";

        // Lógica de conversión según la sustancia
        switch (tipo) {
            case 'eritritol':
                // El eritritol endulza un 70% comparado con el azúcar (requiere un 130% aprox)
                cantidadCalculada = Math.round(gramos * 1.3);
                nombreEdulcorante = "de Eritritol";
                consejo = "💡 El eritritol no altera la glucosa ni la insulina. Excelente para hornear y dar volumen.";
                break;

            case 'stevia':
                // La stevia pura endulza aproximadamente 300 veces más que el azúcar
                cantidadCalculada = (gramos / 300).toFixed(2);
                nombreEdulcorante = "de Stevia Pura en Polvo";
                consejo = "💡 La stevia pura es superconcentrada. Usa una pizca o cuchara medidora muy pequeña.";
                break;

            case 'monkfruit':
                // El fruto del monje comercializado para repostería suele formularse 1 a 1
                cantidadCalculada = Math.round(gramos * 1.0);
                nombreEdulcorante = "de Fruto del Monje (Monk Fruit 1:1)";
                consejo = "💡 El fruto del monje da un sabor muy natural y neutro, ideal para bizcochos y galletas.";
                break;

            default:
                cantidadCalculada = gramos;
                nombreEdulcorante = "del edulcorante seleccionado";
                consejo = "Consulte las especificaciones del fabricante.";
        }

        // Actualizar el DOM con animación sencilla
        resultadoCantidad.textContent = `${cantidadCalculada} ${tipo === 'stevia' ? 'g' : 'g'}`;
        resultadoNombre.textContent = nombreEdulcorante;
        consejoUso.textContent = consejo;
    }

    // Escuchar el evento click en el botón
    btnCalcular.addEventListener('click', calcularEquivalencia);

    // Ejecutar una vez al inicio para mostrar el resultado por defecto (100g)
    calcularEquivalencia();
});