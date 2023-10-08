$(document).ready(function () {
  $('.accordion-header').click(function () {

    // Chuyển đổi CSS và chọn thằng kế tiếp đóng/mở
    $(this).toggleClass('active').next('.accordion-content').slideToggle();
    // Tìm class icon thay đổi icon đóng/mở
    $(this).find('.icon').toggleClass('fa-plus fa-minus');

    // Mở .accordion-content hiện tại trừ .accordion-content kế tiếp của thằng .accordion-header -> 1 thẳng mở
    $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    // Bỏ .fa-minus và thêm .fa-plus cho tất cả .icon, ngoại trừ .icon của .accordion-header hiện tại -> 1 icon được thay đổi
    $('.icon').not($(this).find('.icon')).removeClass('fa-minus').addClass('fa-plus');
    // Bỏ .active cho tất cả .accordion-header, ngoại trừ accordion-header hiện tại
    $('.accordion-header').not($(this)).removeClass('active');
  });
});

