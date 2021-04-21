
$(document).ready(function() {
    $(".first-list-element").addClass("active");
    //لحذف الصنف النشط، ووضعه عندما يُضغط على أحد أزرار القائمة العلوية
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });


    $("#toggler").click(function(event){
        $('#wrap').toggleClass('toggled');
          var left = $('.sidebar').css("left");
        if(left == '0px') //هنا عندما تكن القائمة مفتوحة ونضغط على الزر
            {
                $('.sidebar').css({'left': '-15rem'}); // الناتج هو غلق القائمة
                $('.layer').fadeOut();
            }
            else // وهنا عندما تكن القائمة مغلقة ونضغط على الزر 
            {
                $('.sidebar').css({'left': '0'}); // الناتج هو فتح القائمة
                $('.layer').fadeIn(); 
            }
     });
     //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
    $('.layer').click(function () {
        $('.sidebar').css({ 'left': '-15rem' });
        $('.layer').fadeOut();
    });
    $(".search-icon").click(function (e) { // e لاحظ هنا حرف 
        e.stopPropagation() //  لاحظ هنا  إضافة الدالة
        $(".search-input").slideToggle("slow"); 
    });
    
});
