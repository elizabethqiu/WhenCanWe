// ✨ Beginning of slideshow home section

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ✨ End of slideshow home section





var bioText = $('.bioText');

function hoverForBioElizabeth(event){
  bioText.text("Hey! My name is Elizabeth and I’m a high school senior from Maryland who loves music, code, running, and productivity");
}

function hoverForBioMouni(event){
  bioText.text("Hello! My name is Mouni and I’m a high school senior from Virginia who loves to listen to music, spend time with friends, and cook!");
}

function hoverForBioFehintolu(event){
  bioText.text("Hey! My name is Fehintolu. I am 17 years and an upcoming senior from Maryland who likes web development!");
}

function hoverForBioKate(event){
  bioText.text("Hi! My name is Kate and I am a rising freshman in college. I love staying active and reading on the beach :)");
}

function resetBio(event){
  bioText.text("");
}


// https://www.uuidgenerator.net/ --> append like 500 of these into an array for unique link generator