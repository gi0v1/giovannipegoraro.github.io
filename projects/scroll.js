window.addEventListener('scroll', function() {
  var arrow = document.querySelector('#arrow');
  var scrollHeight = window.scrollY;
  var scrollLimit = 65; // Change this value to the number of pixels you want

  if (scrollHeight > scrollLimit) {
      arrow.style.display = 'none';
  } else {
      arrow.style.display = 'block';
  }
});

var lastScrollTop = 0;
var banner = document.querySelector('.container');

function handleBannerVisibility() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // downscroll
        banner.classList.add('hidden');
    } else {
        // upscroll
        banner.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleBannerVisibility);
