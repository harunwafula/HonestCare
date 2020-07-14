


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

var loader = document.getElementById("loadingPage");
var box1 = document.getElementById("bgCloud1");
var box2 = document.getElementById("bgCloud2");
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

  
      landingImg1.style.transform = "translateX("+window.pageYOffset/8+"px)";
    }
    
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