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
  bioText.text("Hey! My name is Elizabeth and I’m a high school senior from Maryland who loves music, code, running, and productivity :)");
}

function hoverForBioMouni(event){
  bioText.text("Hello! My name is Mouni and I’m a rising senior from Virginia who loves to listen to music, spend time with friends, and bake!");
}

function hoverForBioFehintolu(event){
  bioText.text("Hey! My name is Fehintolu. I am 17 years old and an upcoming senior from Maryland who likes web development!");
}

function hoverForBioKate(event){
  bioText.text("Hi! My name is Kate and I am a rising freshman in college. I love staying active and reading on the beach :)");
}

function resetBio(event){
  bioText.text("");
}


// https://www.uuidgenerator.net/ --> append like 500 of these into an array for unique link generator



// use it section

var seven = $('.seven');
var sevenThirty = $('.seven-thirty');
var eight = $('.eight');
var eightThirty = $('.eight-thirty');
var nine = $('.nine');
var nineThirty = $('.nine-thirty');
var ten = $('.ten');
var tenThirty = $('.ten-thirty');
var eleven = $('.eleven');
var elevenThirty = $('.eleven-thirty');
var twelve = $('.twelve');
var twelveThirty = $('.twelve-thirty');
var thirteen = $('.thirteen');
var thirteenThirty = $(".thirteen-thirty");
var fourteen = $('.fourteen');
var fourteenThirty = $('.fourteen-thirty');
var fifteen = $('.fifteen');
var fifteenThirty = $('.fifteen-thirty');
var sixteen = $('.sixteen');
var sixteenThirty = $('.sixteen-thirty');
var seventeen = $('.seventeen');
var seventeenThirty = $('.seventeen-thirty');
var eighteen = $('.eighteen');
var submit = $('.submitUseIt');

// var eighteenThirty
// var nineteen
// var nineteenThirty
// var twenty
// var twentyThirty
// var twentyOne
// var twentyOneThirty
// var twentyTwo
// // var twentyTwoThirty
// var twentyThree
// var twentThreeThirty
// var twentyFour = $('.twentyFour')



seven.on("click", changeColor7);
var clicked7 = false;
function changeColor7(event) {
  event.preventDefault();
  clicked7 = !clicked7;
  if (clicked7) {
    seven.css("color", "#FFFFFF");
  } else {
    seven.css("color", "#FFC7A0");
  }
}


sevenThirty.on("click", changeColor730);
var clicked730 = false;
function changeColor730(event) {
  event.preventDefault();
  clicked730 = !clicked730;
  if (clicked730) {
    sevenThirty.css("color", "#FFFFFF");
  } else {
    sevenThirty.css("color", "#FFC7A0");
  }
}

eight.on("click", changeColor8);
var clicked8 = false;
function changeColor8(event) {
  event.preventDefault();
  clicked8 = !clicked8;
  if (clicked8) {
    eight.css("color", "#FFFFFF");
  } else {
    eight.css("color", "#FFC7A0");
  }
}

eightThirty.on("click", changeColor830);
var clicked830 = false;
function changeColor830(event) {
  event.preventDefault();
  clicked830 = !clicked830;
  if (clicked830) {
    eightThirty.css("color", "#FFFFFF");
  } else {
    eightThirty.css("color", "#FFC7A0");
  }
}

nine.on("click", changeColor9);
var clicked9 = false;
function changeColor9(event) {
  event.preventDefault();
  clicked9 = !clicked9;
  if (clicked9) {
    nine.css("color", "#FFFFFF");
  } else {
    nine.css("color", "#FFC7A0");
  }
}

nineThirty.on("click", changeColor930);
var clicked930 = false;
function changeColor930(event) {
  event.preventDefault();
  clicked930 = !clicked930;
  if (clicked930) {
    nineThirty.css("color", "#FFFFFF");
  } else {
    nineThirty.css("color", "#FFC7A0");
  }
}


ten.on("click", changeColor10);
var clicked10 = false;
function changeColor10(event) {
  event.preventDefault();
  clicked10 = !clicked10;
  if (clicked10) {
    ten.css("color", "#FFFFFF");
  } else {
    ten.css("color", "#FFC7A0");
  }
}

eleven.on("click", changeColor11);
var clicked11 = false;
function changeColor11(event) {
  event.preventDefault();
  clicked11 = !clicked11;
  if (clicked11) {
    eleven.css("color", "#FFFFFF");
  } else {
    eleven.css("color", "#FFC7A0");
  }
}

var display = $('.display');
submit.on("click", displayMessage);

function displayMessage(event){
  event.preventDefault();
  console.log("testing display");
  var name = $('.nameuser-input').val();
  console.log(name);
  display.text(`Hello, ${name} — thanks for inputting your time! Please wait for your peers to input their times and you will see your matching availibility dates.`);
}


