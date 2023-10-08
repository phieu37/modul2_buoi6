$(document).ready(function() {
    // Tạo button xóa và thêm nó vào trong các thẻ li
    var i;
    for (i = 0; i < $("li").length; i++) {
        $("li").eq(i).append('<span class="close">\u00D7</span>');
    }

    // Khi button xóa được click thì ẩn phần tử li chứa nó
    $(".close").on("click", function() {
        $(this).parent().hide();
    });

    // Thêm class checked vào thẻ li nào được click
    $("ul").on("click", "li", function() {
        $(this).toggleClass("checked");
    });

    // Thêm công việc mới khi click vào button "thêm"
    $(".addBtn").on("click", function() {
        var inputValue = $("#myInput").val();
        if (inputValue === '') {
            alert("Mời bạn nhập");
        } else {
            var newLi = $('<li></li>').text(inputValue).append('<span class="close">\u00D7</span>');
            $("#myUL").append(newLi);
        }
        $("#myInput").val('');

        // Gán lại sự kiện cho các button xóa
        $(".close").on("click", function() {
            $(this).parent().hide();
        });
    });
});












