const swiper = new Swiper('.about__swiper', {
  speed: 400,

  pagination: {
    el: '.about__swiper_pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.about__swiper_next',
    prevEl: '.about__swiper_prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    1024: {
      spaceBetween: 100,
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1440: {
      spaceBetween: 100,
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }

});


