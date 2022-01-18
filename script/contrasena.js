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
    else if (x["email"].value == "") 
    {
      alert("Por favor rellene el campo");
      return false;
    }
    else if (x["password"].value == "") 
    {
      alert("Por favor rellene el campo");
      return false;
    }
    else if (x["password1"].value == "") 
    {
      alert("Por favor rellene el campo");
      return false;
    }
    else if (x["password"].value != x["password1"].value) {
    alert("Las contraseñas no coinciden");
    return false;
    }
    else
    { 
    //Si esta todo correcto, almacenamos datos en local
    localStorage.setItem("login", x["login"].value);
    localStorage.setItem("email", x["email"].value);
    localStorage.setItem("password", x["password"].value);
    localStorage.setItem("password1", x["password1"].value);

      console.log(localStorage);

  //Despues de almacenar, redirigimos a la pagina

    window.location.href="masleidoregistrados.html"
    return false;
    }
  }