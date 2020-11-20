const sliderInit = () =>{

    let swiperMultiple;

    if (document.querySelectorAll('.swiper-container.multiple-slides').length) {
        swiperMultiple = new Swiper('.swiper-container.multiple-slides', {
            loop: true,
            spaceBetween: 0,
            breakpoints: {
                // when window width is >= 1360px
                1920: {
                    speed: 500,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 190
                },
                // when window width is >= 1360px
                1360: {
                    speed: 500,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 80
                },
                // when window width is >= 1024px
                1200: {
                    speed: 500,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 130
                },
                // when window width is >= 1024px
                1024: {
                    speed: 500,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 70
                },
                // when window width is >= 768px
                768: {
                    speed: 500,
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 55
                },
                // when window width is >= 640px
                640: {
                    speed: 500,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 77
                },
                // when window width is >= 100px
                100: {
                    speed: 500,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 80
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

const navigationShown = () =>{
    let body = document.getElementsByTagName('body')[0],
        buttonNavCall = document.querySelector('.buttons__nav-call>button'),
        navigationLinks = document.querySelectorAll('.navigation__link'),
        navigationOverlay = document.querySelector('.navigation__overlay');

    buttonNavCall.addEventListener('click', ()=>{
        body.classList.toggle('navigation_shown');
    });

    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener('click', ()=>{
            body.classList.remove('navigation_shown');
        })
    })

    navigationOverlay.addEventListener('click', ()=>{
        body.classList.remove('navigation_shown');
    })
}

const initFunc = () =>{
    navigationShown()
    sliderInit()
}

window.onload = initFunc;

