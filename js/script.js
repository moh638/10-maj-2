$(document).ready(function(){
    // toggler btn
    $('.navbar-toggler').click(function(){

        $('.navbar-toggler').toggleClass('change')


    })


    // smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link){

        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    })

  // back to top
  $(window).scroll(function(){

    let position = $(this).scrollTop();
    if(position>= 718){
        $('#back-to-top').addClass('scrollTop');
    }
    else{
        $('#back-to-top').removeClass('scrollTop');
          
    }


})






});


$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
        
        $(this).addClass('transition');
    }, function(){
        
        $(this).removeClass('transition');
    });
});
    

