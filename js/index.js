// menu déroulant 900px #############################

const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector(".mob-wrapper").classList;

open.addEventListener("click", () => {
    wrapper.toggle("opened");
    wrapper.toggle("close");
});

close.addEventListener("click", () => {
    wrapper.toggle("close");
    wrapper.toggle("opened");
});

// header scroll up et down #############################

function myFunction(x) {
    setInterval('myFunction',3000);
    if (x.matches) { // If media query matches
        let theEnd = 0;
        navbar = document.getElementById('soleil');
    
        window.addEventListener('scroll', function(){
            var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            if (scrollTop > theEnd) {
                navbar.style.top= '-60px';
            }
            else{
                navbar.style.top= '0px';
            }
            theEnd = scrollTop
        })
    }
}
  
var x = window.matchMedia("(max-width: 900px)");
myFunction(x); // Call listener function at run time


// arrive des blocs quand scroll #############################

document.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');

        }
    }
}