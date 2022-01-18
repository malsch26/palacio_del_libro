
//Función para dislike

function cambiardislike1(){
	document.getElementById("dislike1").src = "images/dislikecopia.png";
}
function cambiardislike2(){
	document.getElementById("dislike2").src = "images/dislikecopia.png";
}
function cambiardislike3(){
	document.getElementById("dislike3").src = "images/dislikecopia.png";
}
function cambiardislike4(){
	document.getElementById("dislike4").src = "images/dislikecopia.png";
}
function cambiardislike5(){
	document.getElementById("dislike5").src = "images/dislikecopia.png";
}
function cambiardislike6(){
	document.getElementById("dislike6").src = "images/dislikecopia.png";
}
function cambiardislike7(){
	document.getElementById("dislike7").src = "images/dislikecopia.png";
}
function cambiardislike8(){
	document.getElementById("dislike8").src = "images/dislikecopia.png";
}

//Función para like

function like1(){
	document.getElementById("like1").src = "images/likecopia.png";
}
function like2(){
	document.getElementById("like2").src = "images/likecopia.png";
}
function like3(){
	document.getElementById("like3").src = "images/likecopia.png";
}
function like4(){
	document.getElementById("like4").src = "images/likecopia.png";
}
function like5(){
	document.getElementById("like5").src = "images/likecopia.png";
}
function like6(){
	document.getElementById("like6").src = "images/likecopia.png";
}
function like7(){
	document.getElementById("like7").src = "images/likecopia.png";
}
function like8(){
	document.getElementById("like8").src = "images/likecopia.png";
}

//Función para eliminar de la lista de favoritos

function myFunction() {
  document.getElementById("favorito1").style.display = "none";
}

function myFunction2() {
  document.getElementById("favorito2").style.display = "none";
}

function myFunction3() {
  document.getElementById("favorito3").style.display = "none";
}

function miComentario() {
	var x = document.getElementById("respuesta").value;
	document.getElementById("contenedortexto").innerHTML = x;
  if (document.getElementById("contenedor-previo4").style.display == "none") { // permite que aparezca el contenedor o desaparezca segun si se hace click en el boton
	document.getElementById("contenedor-previo4").style.display = "block";
  } else {
	document.getElementById("contenedor-previo4").style.display = "none";
  }
  }

// Cuenta los libros al hacer click en añadir al carrito
var contador = 0;
function miContador() {
document.getElementsByClassName("aumento").innerHTML;  {
	contador++;
	document.getElementById("contador").innerHTML = contador
};
}

