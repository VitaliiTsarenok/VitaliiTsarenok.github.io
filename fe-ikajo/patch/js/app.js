"use strict";

$(document).ready(function () {
  $(".accordion > .accordion__head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordion__content").slideUp(200);
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
    } else {
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
      $(this).find(".accordion__btn").removeClass("down").addClass("top");
      $(".accordion > .accordion__head").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this).siblings(".accordion__content").slideDown(200);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-burger').click(function () {
    $(this).toggleClass('is-open');
    $(this).toggleClass('fixed-center');
    $('.js-nav').toggleClass('active');
    $('.header').toggleClass('index');
  });
  $('.nav__link').click(function () {
    $('.js-burger').removeClass('is-open');
    $('.js-burger').removeClass('fixed-center');
    $('.js-nav').removeClass('active');
    $('.header').removeClass('index');
  });
});
$(document).ready(function () {
  $('.js-open-click-modal').click(function () {
    $('.js-click-modal').addClass('active');
  });
  $('.js-close-modal').click(function () {
    $('.js-modal').removeClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('#plus').click(function add() {
    var $qtde = $("#quantity");
    var a = $qtde.val();
    a++;
    $("#minus").attr("disabled", !a);
    $qtde.val(a);
  });
  $("#minus").attr("disabled", !$("#quantity").val());
  $('#minus').click(function minusButton() {
    var $qtde = $("#quantity");
    var b = $qtde.val();

    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus").attr("disabled", true);
    }
  });
});
$(document).ready(function () {
  function updatePrice() {
    var priceProduct = parseFloat($.trim($('.skuBestPrice').html().replace(",", "").replace("R$", "")));
    var convertion = priceProduct.toFixed(0);
    var price = parseFloat($("#quantity").val());
    var total = (convertion * price).toFixed(0);
    window.totalPrice = total;
    var finalPrice = total.toString().replace(/\./g, ',');
    var priceElement = document.querySelector("#total-price");
    priceElement.innerHTML = finalPrice;
  }

  $(document).ready(function () {
    updatePrice();
  });
  $(document).on("click", "input", updatePrice);
  $(document).on("keyup", "input", updatePrice);
  $(document).on("change", "input", updatePrice);
  $('#quantity').on('change keyup focus', function () {
    var removeLetters = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(removeLetters);
  });
}); // submit button

(function () {
  var submitButton = document.querySelector('.priceForm__btn');

  if (submitButton) {
    submitButton.addEventListener('click', function () {
      var formData = new FormData();
      formData.append('count', window.totalPrice);
      $.ajax({
        url: '#',
        type: 'post',
        dataType: 'multipart/form-data',
        data: formData,
        success: function success(data) {
          console.log(data);
        }
      });
    });
  }
})();

$(document).ready(function () {
  $('.js-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    infinite: true
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict'; //video

  $('.js-video-open').click(function () {
    $('.js-video').fadeIn();
    $('.js-mask').fadeIn(1000);
  });
  $('.js-video-close').click(function () {
    $('.js-video').fadeOut();
    $('.js-mask').fadeOut();
    var videoURL = $('#video').prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    $('#video').prop('src', '');
    $('#video').prop('src', videoURL);
  }); //footer

  $('.js-footer-open').click(function () {
    $('.js-footer').addClass('active');
  });
  $('.js-footer-close').click(function () {
    $('.js-footer').removeClass('active');
  }); //fullpage

  $("#fullpage").fullpage({
    anchors: ['1page', '2page', '3page', '4page', '5page', '6page', '7page', '8page'],
    menu: '#menu',
    scrollBar: false,
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'left',
    loopTop: true,
    loopBottom: true,
    loopHorizontal: false,
    responsive: 768
  }); //animation

  $(window).scroll(function () {
    $('.mov').each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + 400) {
        $(this).addClass('anim');
      }
    });
  });
});