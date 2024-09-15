(function () {
    let init = function () {
        addListeners();
    };

    let addListeners = function () {
        document.addEventListener('DOMContentLoaded', function () {
            // Ensure the Swiper container exists before initialization
            const swiperContainer = document.querySelector('.swiper-container');
            if (swiperContainer) {
                const swiper = new Swiper(swiperContainer, {
                    slidesPerView: 1,
                    loop: true,
                    navigation: {
                        clickable: true,
                        nextEl: '.slider-btn-next',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            } else {
                console.error('Swiper container not found. Please check your HTML structure.');
            }
        });
    };

    init();
})();