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
  
function goToByScroll(id) {

    // Scroll
    id = id.replace('#', '.');

    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 1);
}

$(".primary-menu > li > a").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    
    goToByScroll(this.getAttribute('href'));
});
});
// ==================Resize Header on Scroll======================
window.addEventListener("scroll", function () {
  var headerElement = document.getElementById("header");
  headerElement.classList.toggle("sticky", window.scrollY > 0);
});


$('.checkin').on('submit', function(e){
    e.preventDefault();
    let email = $(this).find('#email').val();
    if (email.trim()!==''){
      $.ajax({
        url: 'https://unicode.vn/api/checkin.php',
        type: 'POST',
        dataType: 'text',
        data: {email:email},
        success: function(response){
          if (response=='yes'){
            alert('Chúc mừng bạn checkin thành công! Hãy đưa màn hình này cho hỗ trợ sự kiện xác nhận')
          }else{
            alert('Bạn chưa đăng ký tham gia. Vui lòng liên hệ hỗ trợ sự kiện')
          }
        }
      });
    }
});

