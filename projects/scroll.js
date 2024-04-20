window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition + windowHeight < documentHeight/3) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
}
