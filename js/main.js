AOS.init({
    duration: 1000,
});

// banner
const banner_list = new Swiper(".banner_list", {
    loop: true, // 반복
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정 bullets, fraction, progressbar
        clickable: true, //버튼 클릭 여부
    },
});

// menu
const menu_list = new Swiper(".menu_list", {
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    centeredSlides: true, // 기본값 false
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
});