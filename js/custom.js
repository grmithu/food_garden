$(function(){

//banner-slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
});



//ingredients-slider
$('.ing-part').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
});




// back-to-top
 $('.back-to-top').click(function(){
   $('html,body').animate({scrollTop:0},700)
 });

 

 $(window).scroll(function(){
    scroll=$(this).scrollTop();
  if(scroll>150){
  	$('.back-to-top').fadeIn(500);
  }
  else{
  	$('.back-to-top').fadeOut(500);
  }
  if(scroll>50){
  	$('.navbar').addClass('bg');
  }
  else{
  	  	$('.navbar').removeClass('bg');

  }

 });



    
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 115
            }, 1000);
            return false;
        }
    }
});    


//wow js
new WOW().init();
    
//    add color-witcher
    var colorSheets = [
    {
        color: "#000",
        title: "Switch to Default",
        href: "./css/style.css"
    },
    {
        color: "green",
        title: "Switch to green",
        href: "./css/green.css"
    },
     {
        color: "red",
        title: "Switch to red",
        href: "./css/red.css"
    },
];

ColorSwitcher.init(colorSheets);


//    sidebar
  $('.slide-btn').click(function(){
      $('.slidebar').toggleClass('slidebar2');
  });
     $('.slide-btn').click(function(){
      $('.slide-btn').toggleClass('fa-bars');
  });


});