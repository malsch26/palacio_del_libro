// Carrusel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}

//Función para eliminar libros del carrito

function myFunction() {
  document.getElementById("carrito1").style.display = "none";
}

function myFunction2() {
  document.getElementById("carrito2").style.display = "none";
}

function myFunction3() {
  document.getElementById("carrito3").style.display = "none";
}

function myFunction4() {
  document.getElementById("carrito4").style.display = "none";
}

function myFunction5() {
  document.getElementById("carrito5").style.display = "none";
}

function myFunction6() {
  document.getElementById("carrito6").style.display = "none";
}

