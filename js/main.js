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



// --------SPLIDE SLIDER-----------

const splide = new Splide( '#coursesSlider', {
    type   : 'loop',
    perPage: 4,
    pagination: false,
    perMove: 1,
    gap: '30px',
    fixedWidth: "340px",
    

    // breakpoints: {
    //     768: {
    //         perPage: 2
    //     }
    // }
} );

const bar = splide.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();




const splide2 = new Splide( '#clientsSlider', {
    type   : 'loop',
    perPage: 4,
    pagination: false,
    perMove: 1,
    gap: '30px',
    fixedWidth: "340px",
    

    // breakpoints: {
    //     768: {
    //         perPage: 2
    //     }
    // }
} );

const Progresbar = splide2.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide2.on( 'mounted move', function () {
  const end  = splide2.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( splide2.index + 1 ) / end, 1 );
  Progresbar.style.width = String( 100 * rate ) + '%';
} );

splide2.mount();
// ---------------END SPLIDE SLIDER----------


const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.accordion-body')
    body.classList.toggle('active')
  })
})