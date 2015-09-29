$.fn.moveIt = function() {
  var $els = $(this);
  var $window = $(window);
  var scrollPos = $window.scrollTop();

  $window.on('scroll', function() {
    scrollPos = $window.scrollTop();
    $els.each(moveEl);
  });

  function moveEl() {
    var $this = $(this);
    var $title = $this.hasClass('title-wrapper');
    var scrollSpeed = parseInt($this.data('scrollSpeed'));
    var elPos = scrollPos / scrollSpeed;
    $this.css('transform', 'translateY(-' + elPos + 'px)');
  }
}

function setBannerHeight() {
  var bannerHeight = $('.banner-img').height();
  if(bannerHeight>0) {
    $('.title-wrapper').height(bannerHeight);
  }
}

function setNavBar(nav, logo) {
  if (window.matchMedia('(max-width: 768px)').matches) {
    var $main = $('main');
    nav.css('background-color', 'rgb(236,170,57)');
    nav.css('box-shadow', '0px 2px 5px black');
    nav.css('color', 'white');
    logo.css('visibility', 'visible');
    $main.css('padding-top', '100px');
  }
}

function setNavStyle() {
  var scroll = $( window ).scrollTop();
  var $nav = $('.top-nav');
  var $logo = $('.logo-img')

  if (!window.matchMedia('(max-width: 768px)').matches) {
    if(scroll != 0) {
        $nav.css('background-color', 'rgb(236,170,57)');
        $nav.css('box-shadow', '0px 2px 5px black');
        $nav.css('color', 'white');
        $logo.css('visibility', 'visible');
    }
    else {
        $nav.css('background-color', '');
        $nav.css('box-shadow', '');
        $nav.css('color', 'rgb(236,170,57)');
        $logo.css('visibility', 'hidden');
    }
  }
  else {
    console.log('Call setNavBar');
    setNavBar($nav, $logo);
  }
}

$(function() {
  $('[data-scroll-speed]').moveIt();
  $( window ).resize(function() {
    setBannerHeight();
    setNavStyle();
  });
  $( window ).on('scroll', function() {
    setNavStyle();
  })
});

$( document).ready(function() {
  console.log('loaded');
})