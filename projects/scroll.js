window.addEventListener('scroll', function() {
  var arrow = document.querySelector('#arrow');
  var windowHeight = window.innerHeight;
  var scrollHeight = window.scrollY;

  if (scrollHeight > windowHeight / 5) {
      arrow.style.display = 'none';
  } else {
      arrow.style.display = 'block';
  }
});
