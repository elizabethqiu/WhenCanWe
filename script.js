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


var button1 = $('.elizabethTeam');
var button2 = $('.mouniTeam');
var button3 = $('.fehintoluTeam');
var button4 = $('.kateTeam');



var button = $('.team');
var text = $('.bioText');

console.log(button1);

//button1.on("click", hoverForBio("click")); 

function hoverForBioElizabeth(event){
  // event.preventDefault();
  console.log("in function");
  text.text("hover for bi0")
  
}


// button.on("click", hoverForBio("click")); //mouseover

// function hoverForBio(event){
//   // event.preventDefault();
//   console.log("in function");
//   container.append(`<h2>Hover For Bio!!!</h2>`);
// }

// https://www.uuidgenerator.net/ --> append like 500 of these into an array for unique link generator