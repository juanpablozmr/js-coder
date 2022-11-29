
const valorDolar = 171.75;

let montoIngresado = prompt("Ingrese cuanto Dólares quiere adquirir. Cotización: ARS " + valorDolar);

if (montoIngresado < 100) {
    alert("El monto minimo de compra es USD 100");
}
else {
    let totalDolares = Number(montoIngresado) * valorDolar;

    alert("¿Confirmas el pago de  " + parseFloat(totalDolares).toFixed(2) + " Pesos Argentinos?");
    console.log("¿Confirmas el pago de  " + parseFloat(totalDolares).toFixed(2) + " Pesos Argentinos?");

    alert("Felicitaciones! Compraste " + parseFloat(montoIngresado).toFixed(2) + " Dólares Americanos");
    console.log("Felicitaciones! Compraste " + parseFloat(montoIngresado).toFixed(2) + " Dólares Americanos");
}
