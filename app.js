function calcularPreciosConDescuento(precio,descuento){
    const porcentangeConPrecioDescuento = (100 - descuento );
    const precioConDescuento =  precio * porcentangeConPrecioDescuento / 100;
    
    return precioConDescuento;
}

function calcularPrecioDescuento(){

    const inputPrecio = document.getElementById('inputPrecio');
    const priceValue = parseInt( inputPrecio.Value);

    const inputDecuento = document.getElementById('inputDecuento');
    const descuentoValue = parseInt( inputDecuento.Value);

 const precioConDescuento  = calcularPreciosConDescuento(parseInt(priceValue), parseInt(descuentoValue));

  const result = document.getElementById('Result').innerText = "El precio con descuento son: $" + (precioConDescuento );
  
 
}

