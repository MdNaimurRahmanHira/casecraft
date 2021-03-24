$(document).ready(function () {
  $(".bar-wrapper").click(function () {
    $(".bar-wrapper .first-line").toggle();
    $(".bar-wrapper .second-line").toggleClass("bar-click-second-line");
    $(".bar-wrapper .third-line").toggleClass("bar-click-third-line");
    $(".nav-area .nav").toggleClass("navblock");
  });
});