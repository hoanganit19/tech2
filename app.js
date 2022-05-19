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

let currentPath = window.location.pathname;

if (currentPath === '/success.html'){
    let content = null;
    if (sessionStorage.getItem('checkin_email')){
      content = `<p><i class="fa fa-check-circle fa-5x text-success" aria-hidden="true"></i></p>
      <h3>Chúc mừng bạn đã checkin thành công</h3>
      <h4>Vui lòng đưa màn hình cho hỗ trợ viên xác nhận</h4>`;
      
    }else{
      content = `<p><i class="fa fa-times fa-5x text-danger" aria-hidden="true"></i></p>
      <h3>Checkin không thành công! Có thể bạn chưa đăng ký tham dự</h3>
      <h4>Vui lòng liên hệ hỗ trợ viên để được giúp đỡ</h4>`;
    }

    $('.app').html(content);
}

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
            sessionStorage.setItem('checkin_email', email);
            window.location.href="success.html";
          }else{
            sessionStorage.removeItem('checkin_email');
          }

          window.location.href="success.html";
        }
      });
    }
});

