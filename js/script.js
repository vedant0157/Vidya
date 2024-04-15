$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $('#mobile-nav-panel').toggleClass("active-panel");
      $('#body').toggleClass('nav-toggle');
      $('#mobile-hambrgr-icn').toggleClass('isactive');
    });
  });
  