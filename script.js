


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

var loader = document.getElementById("loadingPage");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

var landingImg1  = document.getElementById("landingImg1");


window.onload = (event) => {
    loader.className += " hidden";
  };

;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function() {
    if(window.outerWidth > 450){
      box1.style.transform = "rotateZ(-"+window.pageYOffset/4+"deg) " + "translateX(-"+window.pageYOffset+"px)";
      box2.style.transform = "rotate("+window.pageYOffset/2+"deg)";
  
      landingImg1.style.transform = "translateX("+window.pageYOffset/8+"px)";
    }
    
    // landingImg1.style.opacity= 1/((window.pageYOffset/window.height)*100);
});



//Nav menu open an close animation
document.getElementById("defaultOpen").click();  

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
})


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
      tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }