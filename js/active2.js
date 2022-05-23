$(document).ready(function(){
  $("input.phone").mask("+7(999) 999-9999?9",{placeholder: " "});
  
  $(document).on('click', '.btn-close_consult', function () {
    $('#consultModal').arcticmodal('close');
  });
  $(document).on('click', '.btn-close', function () {
    $('#masterModal').arcticmodal('close');
  });
  /*Modal*/
  $(document).on('click', '.btn_consultModal_MA', function () {
    $('#consultModal').arcticmodal();
  });
  $(document).on('click', '.btn_masterModal_MA', function () {
    $('#masterModal').arcticmodal();
  });
  $(document).on('click', '.menu_mob', function () {
    $('.menu_list_mob').show();
  });
  $('.menu_mob, .close').click(function() {
    $('.menu_list_mob').toggle();
  });
  $('.menu_list_mob .menu_link').click(function() {
		$(".menu_list_mob").fadeOut(600);
  });
  let $page = $('html, body');
  $('a[href*="#"]').click(function(){
    $page.animate({scrollTop: $($.attr(this, 'href')).offset().top - 90}, 400);
    return false;
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0){
    }
  });
  if( window.innerWidth >= 1280 ){
    $(".main .slide h1").animated("fadeInLeft", "fadeOutDown");
    $(".main .advantages").animated("fadeInLeft", "fadeOutDown");
    $(".main .btn").animated("fadeInLeft", "fadeOutDown");
    $(".main .slide .slide-image").animated("fadeInRight", "fadeOutDown");
    $(".master .center > img").animated("flipInY", "fadeOutDown");
    $(".master .col").animated("fadeInRight", "fadeOutDown");
    $(".col-lg-4, .col-lg-6").animated("fadeInRight", "fadeOutDown");
    $(".price_title, .new .competitors-comparison-section h2").animated("fadeInUp", "fadeOutDown");
    $(".table-info thead").animated("fadeIn", "fadeOutDown");
    $(".table-info__question").animated("fadeIn", "fadeOutDown");
    $(".table-info_cell, .table-info__cell").animated("fadeIn", "fadeOutDown");
    $(".callback_master .h3").animated("fadeInLeft", "fadeOutDown");
    $(".callback_master .text-theme-black").animated("fadeInLeft", "fadeOutDown");
    $(".support-methods-item .row .supports-intro").animated("fadeInLeft", "fadeOutDown");
    $(".support-methods-item .row .supports-info").animated("fadeInRight", "fadeOutDown");
    $(".diagnostic .title").animated("fadeInUp", "fadeOutDown");
    $(".diagnostic .image").animated("fadeInLeft", "fadeOutLeft");
    $(".diagnostic .block_text").animated("fadeInRight", "fadeOutRight");
    $(".service .title").animated("fadeInUp", "fadeOutDown");
    $(".service .blocks .block:first-child").animated("fadeInLeft", "fadeOutDown");
    $(".service .blocks .block:nth-child(2)").animated("fadeInUp", "fadeOutDown");
    $(".service .blocks .block:nth-child(3)").animated("fadeInDown", "fadeOutDown");
    $(".service .blocks .block:nth-child(4)").animated("fadeInRight", "fadeOutDown");
    $(".service .question_blocks .block:first-child").animated("fadeInLeft", "fadeOutLeft");
    $(".service .question_blocks .block:nth-child(3)").animated("fadeInLeft", "fadeOutLeft");
    $(".service .question_blocks .block:nth-child(2)").animated("fadeInRight", "fadeOutRight");
    $(".service .question_blocks .block:nth-child(4)").animated("fadeInRight", "fadeOutRight");
    $(".problems .title").animated("fadeInUp", "fadeOutDown");
    $(".problems .list .item:nth-child(odd)").animated("fadeInLeft", "fadeOutDown");
    $(".problems .list .item:nth-child(even)").animated("fadeInRight", "fadeOutDown");
    $(".choice .title").animated("fadeInUp", "fadeOutDown");
    $(".choice .blocks .block:nth-child(1), .choice .blocks .block:nth-child(4)").animated("fadeInLeft", "fadeOutLeft");
    $(".choice .blocks .block:nth-child(2)").animated("fadeInDown", "fadeOutUp");
    $(".choice .blocks .block:nth-child(5)").animated("fadeInUp", "fadeOutDown");
    $(".choice .blocks .block:nth-child(3), .choice .blocks .block:nth-child(6)").animated("fadeInRight", "fadeOutRight");
  }

  $('form').submit(function (e) {
    console.log('submit');
    e.preventDefault();
    var cityStorage = localStorage.getItem("city");
    var pagePhone = $(".callibri_phone")["0"].innerText;
    var serial = $(this).serialize() + "&city=" + cityStorage + "&pagePhone=" + pagePhone;
    // console.log(cityStorage, serial, pagePhone);
    $.ajax({
      url: "/php/contact.php",
      type: "POST",
      data: serial
    }).done(function () {
      console.log('done');
    });
    var inModal = $(this).closest(".box-modal").length;
    if (inModal) {
      var modalID = $(this).closest(".box-modal").attr('id');
      $('#' + modalID).arcticmodal('close');
    }
    $('#thanks').arcticmodal();
    yaCounter49389526.reachGoal('order');
    reachSubGoal();
    setTimeout(function () {
      $('#thanks').arcticmodal('close');
    }, 5000);
  });
});