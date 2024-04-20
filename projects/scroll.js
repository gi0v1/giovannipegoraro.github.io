window.addEventListener('scroll', function() {
  var arrow = document.querySelector('#arrow');
  var scrollHeight = window.scrollY;
  var scrollLimit = 80; // Change this value to the number of pixels you want

  if (scrollHeight > scrollLimit) {
      arrow.style.display = 'none';
  } else {
      arrow.style.display = 'block';
  }
});
