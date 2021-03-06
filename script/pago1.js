// Autocompletar
function autocomplete(inp, arr) {

    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  var countries = ["Afghanistan","Albania", "Alemania","Algeria","Andorra","Angola","Antigua y Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaiy??n","Bahamas","Bahrain","Bangladesh","Barbados","B??lgica","Belice","Ben??n","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","British Virgin Islands","Brun??i","Bulgaria","Burkina Faso","Burundi","Camboya","Camer??n","Canad??","Cabo Verde","Chad","Chile","China","Colombia","Congo","Costa Rica","Croacia","Cuba","Curacao","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Eritrea","Eslovaquia","Estados Unidos", "Espa??a","Etiop??a","Fiyi","Finlandia","Francia","Gab??n","Gambia","Georgia","Ghana","Gibraltar","Grecia","Guatemala","Guinea","Guyana","Hait??","Honduras","Hungr??a","India","Indonesia","Ir??n","Iraq","Israel","Italia","Jamaica","Jap??n","Kenya","Kosovo","L??bano","Liberia","Libia","Lituania","Luxemburgo","Macedonia del Norte","Madagascar","Malasia","Maldivas","Mal??","Malta","M??xico","Mongolia","Montenegro","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nicaragua","Nueva Zelanda","Om??n","Pakist??n","Palaos","Palestina","Panam??","Pap??a Nueva Guinea","Paraguay","Per??","Polania","Portugal","Puerto Rico","Qatar","Reino Unido","Romania","Rusia","Ruanda","Samoa","San Marino","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Somalia","Sur ??frica","Sri Lanka","Sud??n","Surinam","Suiza","Suecia","Siria","Tailandia","Togo","Tonga","Trinidad y Tobago","T??nez","Turqu??a","Turkmenist??n","Tuvalu","Uganda","Ucrania","Uruguay","Uzbekist??n","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  
  autocomplete(document.getElementById("myInput"), countries);

  // Formulario 
  function validateForm()
  {
    //Primero validamos el formulario   
    let x = document.forms["form1"];
      if (x["name"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["direccion"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["mas"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["ciudad"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["state"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["myInput"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else if (x["postal"].value == "") 
      {
        alert("Por favor rellene el campo");
        return false;
      }
      else
      { 
      //Si esta todo correcto, almacenamos datos en local
      localStorage.setItem("name", x["name"].value);
      localStorage.setItem("direccion", x["direccion"].value);
      localStorage.setItem("mas", x["mas"].value);
      localStorage.setItem("ciudad", x["ciudad"].value);
      localStorage.setItem("state", x["state"].value);
      localStorage.setItem("myInput", x["myInput"].value);
      localStorage.setItem("postal", x["postal"].value);

        console.log(localStorage);

    //Despues de almacenar, redirigimos a la pagina

      window.location.href="pago2.html"
      return false;
      }
    }