function validateForm(){
    //Primero validamos el formulario
     
    let x = document.forms["form1"];
      if (x["cname"].value == "") {
        alert("Por favor rellene el campo Nombre completo");
         return false;
    }
        else if (x["ccnum"].value == "") {
        alert("Por favor rellene el campo Número de tarjeta");
         return false;
    }
        else if (x["expmonth"].value == "") {
        alert("Por favor rellene el campo Mes de expiración de la tarjeta");
         return false;
    }
        else if (x["expyear"].value == "") {
        alert("Por favor rellene el campo Año de expiración de la tarjeta");
         return false;
    }

        else if (x["cvv"].value == "") {
        alert("Por favor rellene el campo Código de seguridad de la tarjeta");
         return false;
    }
        else{ //Si esta todo correcto, almacenamos datos en local
     
        localStorage.setItem("cname", x["cname"].value);
        localStorage.setItem("ccnum", x["ccnum"].value);
        localStorage.setItem("expmonth", x["expmonth"].value);
        localStorage.setItem("expyear", x["expyear"].value);
        localStorage.setItem("cvv", x["cvv"].value);
         console.log(localStorage);
     
     
      //Despues de almacenar, redirigimos a la pagina
     
      window.location.href="pago3.html"
      return false;
      }
    }
