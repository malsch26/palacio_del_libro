// Formulario 
function validateForm()
{
  //Primero validamos el formulario   
  let x = document.forms["form"];
    if (x["login"].value == "") 
    {
      alert("Por favor rellene el campo");
      return false;
    }
    else if (x["contrasena"].value == "") 
    {
      alert("Por favor rellene el campo");
      return false;
    }
    else
    { 
    //Si esta todo correcto, almacenamos datos en local
    localStorage.setItem("login", x["login"].value);
    localStorage.setItem("contrasena", x["contrasena"].value);

      console.log(localStorage);

  //Despues de almacenar, redirigimos a la pagina

    window.location.href="masleidoregistrados.html"
    return false;
    }
  }