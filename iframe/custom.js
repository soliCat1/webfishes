(function () {
    console.log('init');
})();

const swiper = document.querySelector('.swiper');

const initSwiper = () => {
  if (swiper) {
    const jurySwiper = new Swiper(swiper, {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
    });
  }
};

initSwiper()