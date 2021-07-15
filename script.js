

// variables assigned to document elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const landing = document.querySelector('.section1');

var body = document.body,
  html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);

var loader = document.getElementById("loadingPage");
var box1 = document.getElementById("bgCloud1");
var box2 = document.getElementById("bgCloud2");

var servicesImg = document.getElementById("servicesImg");
var landingImg1 = document.getElementById("landingImg1");

var whyHonestCareImg = document.getElementById("whyHonestCareImg");


var whyHCSection = document.getElementById("whyHonestCare");
const faders = document.querySelectorAll(".fade-in"); //holds an array of all elements to be faded into view on scroll
const sliders = document.querySelectorAll(".slide-in");

// Preloading animaton
$(window).on('load', function () {
  $("#cover").fadeOut(1750);
});

// Form Validator
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Scroll behavire
window.scroll({
 
  behavior: 'smooth'
});


// Back to top button
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Fade in on Scroll

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(
  function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(
      entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      }
    );
  },
  appearOptions
);

faders.forEach(
  fader => {
    appearOnScroll.observe(fader);
  }
)

sliders.forEach(
  slider => {
    appearOnScroll.observe(slider);
  }
)
// Add responsiveness to dropdowns

function responsiveFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


  //Scroll animations


  ; (function () {
    var throttle = function (type, name, obj) {
      var obj = obj || window;
      var running = false;
      var func = function () {
        if (running) { return; }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };
    throttle("scroll", "optimizedScroll");
  })();

window.addEventListener("optimizedScroll", function () {
  if (window.outerWidth > 450) {


    landingImg1.style.transform = "translateX(" + window.pageYOffset / 8 + "px)";
    whyHonestCareImg.style.transform = "translateX(-" + window.pageYOffset / 16 + "px)";
    servicesImg.style.transform = "translateX(" + ((window.pageYOffset / 4) - 1000) + "px)";
  }

});






