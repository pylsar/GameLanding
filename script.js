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