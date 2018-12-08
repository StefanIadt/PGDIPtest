
// Donovan's add class .visible if element is in viewport
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
          (
            rect.top <= 0 &&
            rect.bottom >= 0
          ) ||
          (
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
          ) ||
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
}

var addClassIfVisible = function() {
  $('.hideme').each(function(index, item) {
    if (isElementInViewport(item)) {
      $(item).addClass('visible');
    } 
    else {
      $(item).removeClass('visible');
    }
  });
}

$(function() {
  $(window).on('DOMContentLoaded load resize scroll', addClassIfVisible); 
});

// SCROLL TO 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

