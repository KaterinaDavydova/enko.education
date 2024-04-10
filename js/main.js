// ---------------------mobile menu

let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.header__menu-mobile');
let menuLinks = document.querySelectorAll('.header__menu-item');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMenu();
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ----------------------end mobile menu




$(function () {
    const $slider = $('.courses__slider');
    const $progressBar = $('.courses__slide__progress');
    const $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        variableWidth: true,
        speed: 400,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});

