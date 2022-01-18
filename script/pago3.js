// Pago con exito Popup
function myPago() {
    var txt;
    if (confirm("Su pago ha sido completado y su orden ha sido tramitada correctamente. Este mensaje le puede servir como recibo, que también será enviado por email. Muchas gracias por su compra.")) {
        window.location = "index.html";
    } else {
      txt = "Cancelar";
    }
  }

  window.onload = function () {

    // Se actualiza con la información pasada
    document.getElementById('name').innerHTML=localStorage.getItem("name"); //agrega el nombre del usuario
    document.getElementById('direccion').innerHTML=localStorage.getItem("direccion"); //agrega la direccion del usuario
    document.getElementById('tarjeta').innerHTML=localStorage.getItem("ccnum"); //que aparezca el numero de tarjeta
    document.getElementById('exptarjeta').innerHTML=localStorage.getItem("expyear"); // que aparezca el año de expiracion de la tarjeta

  }