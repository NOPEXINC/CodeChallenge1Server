/* 
   when scrolling the page the navigation menu 
   will change its background from nothing to a transparent black
   color once we scroll past the main site title
*/
$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $(".call-to-action .content");
  var offset = startchange.offset();

  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $("nav").css('background-color', 'rgba(0,0,0,.75)');
      } else {
        $('nav').css('background-color', 'transparent');
      }
    });
  }
});
