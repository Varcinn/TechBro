//Menu obsługa
$('nav ul li a').on("click", function () {
    const scrolling = "#" + $(this).attr('data-menu');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top - 80
    })
})
$('nav aside').on("click", function () {
    const scrolling = "#" + $(this).attr('class');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top
    })
})



// licznik 


$(window).on("scroll",function(){
    if($(window).scrollTop()>1200){

        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            $(window).off("scroll");
     });
     
    }
})
  



    


