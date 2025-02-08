import Swiper from 'swiper';
import 'swiper/css';
const projectImages = []

const projectCards = document.querySelector(".projects-list")
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

const projectGalleryImages = projectImages.map((image) =>
``).join("")

//projectCards.innerHTML = projectGalleryImages;

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
        },
        touchEventsTarget: 'container',
        simulateTouch: true,
        grabCursor: true,
    });

    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    swiper.on('slideChange', function () {
         console.log("Текущий индекс слайда:", swiper.activeIndex);
        console.log("isBeginning:", swiper.isBeginning);
        console.log("isEnd:", swiper.isEnd);
        prevButton.classList.toggle('custom-disabled', swiper.isBeginning);
        nextButton.classList.toggle('custom-disabled', swiper.isEnd);
    });
});