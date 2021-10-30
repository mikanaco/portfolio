


$(window).on('load', function(){
  if ($(window).width()>749){
    $('.is_flow').hide();
    $(window).on('scroll', function(){
  //console.log($(window).width());
    console.log($(window).width());
    if ($(window).scrollTop() > 800) {
    $('.is_flow').fadeIn(400);
   } else {
    $('.is_flow').fadeOut(400);
   }
});
      }
});
