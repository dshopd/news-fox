

$(document).ready(function() {
    $('.js-example-basic-single').select2({
      placeholder: "В какой город отправить ваш заказ?"
    });
});


$(document).ready(function() {
    $('.js-example-basic-single1').select2({
      placeholder: "Отлеление № 1: ул. Пироговский путь 135"
    });
});

$(document).ready(function() {
    $('.js-example-basic-single2').select2({
      placeholder: "'Фокстрот', просп. Степана Бандеры, 23 Пн-Пт 09:00-22:00"
    });
});
 

  $(".js-delivery").select2({
    placeholder: "Выберете способ доставки ",
    theme: "default search-none"
});


  $(".js-payment").select2({
    placeholder: "Выберете способ оплаты",
    theme: "default search-none"
});




$( ".js-payment" )
  .change(function() {
    var str = "";
    $( ".js-payment option:selected" ).each(function() {
      str += $( this ).val() + " ";
    });
    console.log(str);
    if( 2 == +str) {
      $( ".js-credit" ).addClass('open')
      $( ".js-pr-credit" ).removeClass('open')
    } else if(1 == +str) {
      $( ".js-credit" ).removeClass('open')
      $( ".js-pr-credit" ).removeClass('open')
    } else if( 0 == +str) {
      $( ".js-credit" ).removeClass('open')
      $( ".js-pr-credit" ).removeClass('open')
    } else {
      $( ".js-credit" ).removeClass('open')
      $( ".js-pr-credit" ).addClass('open')
    }
  })
  .trigger( "change" );


$( ".js-delivery" )
  .change(function() {
    var str = "";
    $( ".js-delivery option:selected" ).each(function() {
      str += $( this ).val() + " ";
    });
    console.log(str);
    if( 1 == +str) {
      $( ".js-dos-focx" ).addClass('open')
      $( ".js-news-post" ).removeClass('open')
      $( ".js-samo-mag" ).removeClass('open')
      $( ".js-news-post-dom" ).removeClass('open')
    } else if(2 == +str) {
      $( ".js-dos-focx" ).removeClass('open')
      $( ".js-news-post" ).removeClass('open')
      $( ".js-samo-mag" ).removeClass('open')
      $( ".js-news-post-dom" ).removeClass('open')
    } else if(4 == +str) {
        $( ".js-samo-mag" ).addClass('open')
        $( ".js-news-post" ).removeClass('open')
        $( ".js-dos-focx" ).removeClass('open')
        $( ".js-news-post-dom" ).removeClass('open')
    } else if( 3 == +str) {
      $( ".js-dos-focx" ).removeClass('open')
      $( ".js-news-post" ).addClass('open')
      $( ".js-samo-mag" ).removeClass('open')
      $( ".js-news-post-dom" ).removeClass('open')
    } else if( 5 == +str) {
        $( ".js-news-post-dom" ).addClass('open')
        $( ".js-news-post" ).removeClass('open')
        $( ".js-dos-focx" ).removeClass('open')
        $( ".js-samo-mag" ).removeClass('open')

    } else {
      $( ".js-dos-focx" ).removeClass('open')
      $( ".js-news-post" ).removeClass('open')
      $( ".js-samo-mag" ).removeClass('open')
      $( ".js-news-post-dom" ).removeClass('open')
    }
  })
  .trigger( "change" );



$(".js-radio1").click(function(){
    $(".pasport").addClass("open");
    $(".idpasport").removeClass("open");
});
$(".js-radio2").click(function(){
    $(".idpasport").addClass("open");
    $(".pasport").removeClass("open");
});



 


$( ".js-inyl" ).change(function() {
  var $input = $( this );
  console.log($input.prop( "checked" ));
  if( false == $input.prop( "checked" )) {
    $( ".js-yl-input" ).attr("disabled", true);
  } else {
    $( ".js-yl-input" ).removeAttr("disabled", true);
  }
}).change();


$( ".js-jul" ).change(function() {
  var $input = $( this );
  console.log($input.prop( "checked" ));
  if( false == $input.prop( "checked" )) {
    $( ".js-jul1" ).attr("disabled", true);
  } else {
    $( ".js-jul1" ).removeAttr("disabled", true);
  }
}).change();

$( ".js-jul22" ).change(function() {
  var $input = $( this );
  console.log($input.prop( "checked" ));
  if( false == $input.prop( "checked" )) {
    $( ".js-jul2" ).attr("disabled", true);
  } else {
    $( ".js-jul2" ).removeAttr("disabled", true);
  }
}).change();




$( ".js-bonus" ).click(function() {
  $( ".js-bonus_input" ).toggleClass( "open" );
});
$( ".js-promotional" ).click(function() {
  $( ".js-promotional_input" ).toggleClass( "open" );
});
$( ".js-certificate" ).click(function() {
  $( ".js-certificate_input" ).toggleClass( "open" );
});

$( ".js-coment" ).click(function() {
  $( ".js-coment-textarea" ).toggleClass( "open" );
});



$( ".js-score" ).click(function() {
  $( ".js-score-open" ).toggleClass( "open" );
});



$( ".show" ).click(function() {
  $( ".js-op" ).toggleClass( "open" );
});


$( ".show1" ).click(function() {
  $( ".js-op1" ).toggleClass( "open" );
});

$( ".js-open-product" ).click(function() {
  $( ".js-open-pr" ).toggleClass( "open" );
});

$(".js-news-user").click(function(){
    $(".news-user").addClass("open");
    $(".pos-user").removeClass("open");

    $(".js-news-user").addClass("active");
    $(".js-pos-user").removeClass("active");
});
$(".js-pos-user").click(function(){
    $(".news-user").removeClass("open");
    $(".pos-user").addClass("open");

    $(".js-news-user").removeClass("active");
    $(".js-pos-user").addClass("active");
});


$('.js-slide').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,

      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,

      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,

      }
    }

  ]
});


$('.phone-input').inputmask("+38 (099) 999-99-99");