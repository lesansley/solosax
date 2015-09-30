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

// Make the height of the title-wrapper equal to the banner-img in order to vertically position text in the middle
function setTitleWrapperHeight() {
  var bannerHeight = $('.banner-img').height();
  if(bannerHeight>0) {
    $('.title-wrapper').height(bannerHeight);
    setTitleTextY(bannerHeight);
  }
}

function setTitleTextY(wrapperHeight) {
  var navHeight = $('.top-nav').height();
  var $titleText = $('.title');
  var titleHeight = $titleText.height();
  var titleTop = $titleText[0].offsetTop;
  var move = (0.5 * (wrapperHeight - navHeight) - (0.5 * titleHeight) + navHeight) - titleTop;
    $titleText.css('transform', 'translateY(' + move + 'px)')
}

function setNavBar(nav, logo) {
  var $main = $('main');
  if (window.matchMedia('(max-width: 768px)').matches) {
    nav.css('background-color', 'rgb(236,170,57)');
    nav.css('box-shadow', '0px 2px 5px black');
    nav.css('color', 'white');
    logo.css('visibility', 'visible');
    $main.css('padding-top', '100px');
  } else{
    $main.css('padding-top', '');
  }
}

function setNavStyle() {
  var $nav = $('.top-nav');
  var $logo = $('.logo-img')
  var scroll = $( window ).scrollTop();
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
  setNavBar($nav, $logo);
}

$(function() {
  $('[data-scroll-speed]').moveIt();

  $( window ).resize(function() {
    setNavStyle();
    setTitleWrapperHeight();
  });

  $( window ).on('scroll', function() {
    setNavStyle();
  })
});

$('.banner-img').load(function() {
  setTitleWrapperHeight();
});