
$('#buttom-1').click(function(){
    let index = $('#buttom-1').index(this)
    $('.hover-hienthi-top').eq(index).toggle();
})
$('#buttom-2').click(function(){
    let index = $('#buttom-2').index(this)
    $('.hover-hienthi-left').eq(index).toggle();
})
$('#buttom-3').click(function(){
    let index = $('#buttom-3').index(this)
    $('.hover-hienthi-right').eq(index).toggle();
})
$('#buttom-4').click(function(){
    let index = $('#buttom-4').index(this)
    $('.hover-hienthi-bottom').eq(index).toggle();
})
// modal
$(document).ready(function () {
    let modal = $('.modal');
    let btn = $('.btn');
    let span = $('.close');
  
    btn.click(function () {
      modal.show();
    });
  
    span.click(function () {
      modal.hide();
    });
  
    $(window).on('click', function (e) {
      if ($(e.target).is('.modal')) {
        modal.hide();
      }
    });
  });
// accordion
  $(document).ready(function () {
    $('.accordion-item.active .accordion-body').slideDown();
    $('.accordion-header').click(function(){
      $(this).parent().toggleClass('active');
      $(this).parent().children('.accordion-body').slideToggle();
    });
  });

