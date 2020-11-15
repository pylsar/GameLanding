//слайдер
$(document).ready(function(){
    $('.gallary__pics__box').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});


//скролл
$("#scrollImg").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".second").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

// тогл меню
$('#dropdown').on('click', function(){
    $('.head__right__menu').toggleClass('menuShow');
})



// анимация футера
let tl = new TimelineMax();

tl
    .fromTo('.head__logo', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1})
    .fromTo('.head__right', 1, {x: 200}, {x: 0}, '-=0.7')
    .staggerFromTo('.head__navigation ul li a', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 0.05)
    .staggerFromTo('h1 span', 0.3, {y: 40, opacity: 0}, {y: 0, opacity: 1}, 0.05)