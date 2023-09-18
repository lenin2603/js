// DOM obtiene una referencia al elemento
//agrega un event listener que escucha el evento
//Se obtiene una referencia al elemento del botón con el id "calcularBtn" 
//Se agrega un detector de eventos al botón 
document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");
    const resultado = document.getElementById("resultado");

//Se obtienen los valores ingresados por el usuario desde dos campos de entrada
    calcularBtn.addEventListener("click", function () {
        const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
        const horasExtras = parseFloat(document.getElementById("horasExtras").value);
        const tarifaHora = 10; // Se define una tarifa por hora según corresponda

        //sueldo mensual sumando el producto de las horas trabajadas
        //Si las horas ingresadas son válidas, se calcula el sueldo mensual sumando el producto de las horas
        if (isNaN(horasTrabajadas) || isNaN(horasExtras)) {
            resultado.textContent = "Por favor, ingrese horas válidas.";
        } else {
            const sueldoMensual = (horasTrabajadas * tarifaHora) + (horasExtras * tarifaHora * 1.5);
            resultado.textContent = `Sueldo Mensual: $${sueldoMensual.toFixed(3)}`;
        }
    });
});
