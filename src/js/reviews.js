import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

async function reviewApi() {
    return axios.get(`https://portfolio-js.b.goit.study/api/reviews`);
}

function createRewiew(response) {
    const { author, avatar_url, review } = response;

    return `<li class="swiper-slide swiper-slide-rev">
        <img src="${avatar_url}" alt="Avatar" class="avatar" />
        <h3 class="name-autor">${author}</h3>
        <p class="review-text">${review}</p>
    </li>`;
}

const swiperWrapper = document.querySelector(".swiper-wrapper-rev");
const reviewsSection = document.querySelector(".reviews");
const elementsField = document.querySelector(".swiper-rev");

let swiper;
let errorOccurred = false;

addReview();

async function addReview() {
    try {
        const responseReview = await reviewApi();
        const stringData = responseReview.data.map(el => createRewiew(el)).join("");
        swiperWrapper.innerHTML = stringData;

        swiper = new Swiper('.swiper-rev', {
            slidesPerView: 1,
            modules: [Navigation, Keyboard, Mousewheel],
            navigation: {
                nextEl: '.reviews-button-next',
                prevEl: '.reviews-button-prev',
            },
            wrapperClass: 'swiper-wrapper-rev',
            speed: 500,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            mousewheel: {
                invert: false,
            },
            spaceBetween: 16,
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1440: { slidesPerView: 4, spaceBetween: 16 },
            },
            on: {
                afterInit: function () {
                    updateNavigationButtons(this);
                },
                slideChange: function () {
                    updateNavigationButtons(this);
                }
            },

        });
        updateNavigationButtons(swiper);
    } catch (error) {
        errorOccurred = true;
        observeReviewsSection();
        elementsField.innerHTML = `<p class="not-found">Not found</p>`;
    }
}

function updateNavigationButtons(swiper) {
    const nextButton = document.querySelector('.reviews-button-next');
    const prevButton = document.querySelector('.reviews-button-prev');

    if (swiper.isEnd) {
        nextButton.setAttribute("disabled", "true");
        nextButton.classList.add('disabled');
    } else {
        nextButton.removeAttribute("disabled");
        nextButton.classList.remove('disabled');
    }

    if (swiper.isBeginning) {
        prevButton.setAttribute("disabled", "true");
        prevButton.classList.add('disabled');
    } else {
        prevButton.removeAttribute("disabled");
        prevButton.classList.remove('disabled');
    }
}


function observeReviewsSection() {
    if (!reviewsSection) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && errorOccurred) {
                    iziToast.error({
                        title: "Error",
                        message: "There is no connection with the server."
                    });
                    observer.disconnect();
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(reviewsSection);
}

