import Accordion from 'accordion-js';

import { Navigation, Keyboard } from 'swiper/modules';
import Swiper from 'swiper';


const acordeonAbout = new Accordion('.js-about-descriprion', {
  duration: 500,
  showMultiple: false,
  openOnInit: [0],
  elementClass: 'acord-about-el',
  triggerClass: 'acord-about-tr',
  panelClass: 'js-about-accordeon',
  
});

document.querySelector('.acord-about-el').addEventListener('click', e => {
  acordeonAbout
});


const aboutSwiper = new Swiper('.js-about-swiper', {
  modules: [Navigation, Keyboard],
  speed: 400,
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  
});

document.querySelector('.js-swiper-btn').addEventListener('click', e => {
  aboutSwiper.slideNext();
});