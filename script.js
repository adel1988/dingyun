
$(function() {
  var h = $(window).height();

  $('main').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(function(){
  setTimeout('stopload()',12000);
});

function stopload(){
  $('main').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

