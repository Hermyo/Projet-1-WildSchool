function hidePart() {
    document.getElementById('hidepart1').style.visibility = 'visible';
    document.getElementById('hidepart2').style.visibility = 'visible';
    document.getElementById('hidepart3').style.visibility = 'visible';
    document.getElementById('hidepart1').style.display = 'inline-block';
    document.getElementById('hidepart2').style.display = 'inline-block';
    document.getElementById('hidepart3').style.display = 'inline-block';
    document.getElementById('buthide').style.visibility = 'hidden';
    document.getElementById('buthide').style.display = 'none';
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var svgFill = document.getElementById("svgFill");
var link1 = document.getElementById("connect");
var link2 = document.getElementById("sign");
var link3 = document.getElementById("help");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky"); navbar.classList.remove("noSticky");
    svgFill.classList.add("redFill"); svgFill.classList.remove("whiteFill");
    link1.classList.add("blueLink"); link1.classList.remove("whiteLink");
    link2.classList.add("blueLink"); link2.classList.remove("whiteLink");
    link3.classList.add("blueLink"); link3.classList.remove("whiteLink");
  }
  if (window.pageYOffset <= 0) {
    navbar.classList.add("noSticky"); navbar.classList.remove("sticky");
    svgFill.classList.add("whiteFill"); svgFill.classList.remove("redFill");
    link1.classList.add("whiteLink");link1.classList.remove("blueLink");
    link2.classList.add("whiteLink"); link2.classList.remove("blueLink");
    link3.classList.add("whiteLink"); link3.classList.remove("blueLink");
  }
}