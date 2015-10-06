
// Make the height of the spacer equal to the banner-img in order to vertically position text in the middle
function setSpacerHeight() {
  console.log('set height');
  var bannerHeight = $('.banner-img').height();
  if(bannerHeight>0) {
    $('.spacer').height(bannerHeight);
  }
}

function setNavBar(nav, title) {
  var $main = $('main');
  if (window.matchMedia('(max-width: 768px)').matches) {
    nav.css('background-color', 'rgb(236,170,57)');
    nav.css('box-shadow', '0px 2px 5px black');
    nav.css('color', 'white');
    title.css('visibility', 'visible');
    $main.css('padding-top', '100px');
  } else{
    $main.css('padding-top', '');
  }
}

function setNavStyle() {
  var $nav = $('.top-nav');
  var $title = $('.title-text');
  var scroll = $( window ).scrollTop();
  if(scroll != 0) {
      $nav.css('background-color', 'rgb(236,170,57)');
      $nav.css('box-shadow', '0px 2px 5px black');
      $nav.css('color', 'white');
      $title.css('visibility', 'visible');
  }
  else {
      $nav.css('background-color', '');
      $nav.css('box-shadow', '');
      $nav.css('color', 'rgb(236,170,57)');
      $title.css('visibility', 'hidden');
  }
  setNavBar($nav, $title);
}

$(function() {

  $( window ).resize(function() {
    setNavStyle();
    setSpacerHeight();
  });

  $( window ).on('scroll', function() {
    setNavStyle();
  })
});

$('.banner-img').load(function() {
  setSpacerHeight();
});