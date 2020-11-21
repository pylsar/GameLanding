//СЛАЙДЕР
$(document).ready(function(){
    $('.gallary__pics__box').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});


//СКРОЛЛ
$("#scrollImg").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".second").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

// ТОГЛЛ ЯЗЫКОВ
$('#dropdown').on('click', function(){
    $('.head__right__menu').toggleClass('menuShow');
})



//БУРГЕР МЕНЮ
var burger = document.querySelector(".head__burger");
$(document).on("click", function (event) {
  // событие клика  
  if (burger == event.target) {
    $(".head__navigation").toggleClass("burgerToggle"); // показываем содержимое выпадающего меню
    $(burger).toggleClass("head__burger-close"); // меняем иконку бургера
  }
  
  if (
    burger !== event.target && // если клик не по меню
    $(event.target).closest(".head__navigation").length == 0 // и не по его дочерним элементам
  ) {
    $(".head__navigation").removeClass("burgerToggle");
    $(".head__burger").removeClass("head__burger-close");
  }
});

// АНИМАЦИЯ ХЭДЕРА

    let tl = new TimelineMax();
        tl
        .staggerFromTo('h1 span', 0.3, {y: 40, opacity: 0}, {y: 0, opacity: 1}, 0.05)
        .fromTo('.head__logo', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1})
        .fromTo('.head__right', 1, {x: 200}, {x: 0}, '-=0.7')
        .staggerFromTo('.head__navigation ul li a', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 0.05)
   

