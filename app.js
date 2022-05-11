// ===================slick===================
$(document).ready(function () {
  $(".list_member").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrow: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 2000,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});
// ==================Resize Header on Scroll======================
window.addEventListener("scroll", function () {
  var headerElement = document.getElementById("header");
  headerElement.classList.toggle("sticky", window.scrollY > 0);
});


