var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  initialSlide:0,
  effect: "fade",
  spaceBetween: 50,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});


// Review Swiper

var swiper = new Swiper(".review-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// About Swipers

var swiper2 = new Swiper(".mySwiper2", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-130%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["130%", 0, -500],
          },
        },
      });