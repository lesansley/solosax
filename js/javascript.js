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

$(function() {
        $('[data-scroll-speed]').moveIt();
        $( window ).on('scroll', function() {
            var scroll = $( window ).scrollTop();
            console.log(scroll);
            var $nav = $('.top-nav');
            if(scroll != 0) {

                $nav.css('background-color', 'white');
                $nav.css('box-shadow', '0px 5px 10px #fff');

            }
            else {
                $nav.css('background-color', '');
                $nav.css('box-shadow', '');

            }
        })
});