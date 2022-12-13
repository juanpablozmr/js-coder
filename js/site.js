

function bienvenida() {
    let nombreIngresado = prompt("Bienvenido, ingresa tu nombre para loguearte ");
    alert("Bienvenido " + nombreIngresado + " ¿Queres realizar la compra de moneda extranjera?");
}

bienvenida();
prompt("Bienvenido, ingresa tu moneda ");

function cotizacion(Dolar, Euro) {

    switch (moneda) {
        case "euro":
            return Euro;
            break;

        case "dolar":
            return Dolar;
            break;

            default:
                return 0;
                break;
                
  
    }
    
}
cotizacion();

let montoIngresado = prompt("¿ Cuanto Dólares quieres adquirir. Cotización: ARS " + valorDolar + valorEuro);
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
