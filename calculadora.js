function calcular() {
    // Obtenemos los valores de los inputs
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('op').value;
    const cajaResultado = document.getElementById('resultado');

    // Validación básica de campos vacíos
    if (isNaN(n1) || isNaN(n2)) {
        cajaResultado.innerText = "Por favor, ingresa números";
        return;
    }

    let total;

    // Lógica de cálculo
    if (operacion === "+") {
        total = n1 + n2;
    } else if (operacion === "-") {
        total = n1 - n2;
    } else if (operacion === "*") {
        total = n1 * n2;
    } else if (operacion === "/") {
        if (n2 === 0) {
            total = "Error: Div por 0";
        } else {
            total = n1 / n2;
        }
    } else if (operacion === "%") {
        total = (n1 * n2) / 100;
    }

    // Mostramos el resultado en el HTML
    cajaResultado.innerText = "Resultado: " + total;
}

// Variable para saber cuál fue el último input tocado
let ultimoInput = document.getElementById('num1');

// Detectamos cada vez que el usuario hace clic o tabula a un input
document.getElementById('num1').addEventListener('focus', (e) => ultimoInput = e.target);
document.getElementById('num2').addEventListener('focus', (e) => ultimoInput = e.target);

function insertar(num) {
    // Insertamos número en el último input
    ultimoInput.value += num;
    // Forzamos que se mantenga ahí
    ultimoInput.focus();
}

function borrarUno() {
    // Borra solo el último carácter (como la tecla Backspace)
    ultimoInput.value = ultimoInput.value.slice(0, -1);
    ultimoInput.focus();
}

function limpiarTodo() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}