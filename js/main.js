$(document).ready(function(){

  $('.menu').on('click',function(){
      $(this).toggleClass('active');
      $('.overlay').toggleClass('menu-open')
  });
  
  $('.nav a').on('click',function(){
      $('.menu').removeClass('active');
      $('.overlay').removeClass('menu-open');
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
  });

});


