// jsを記述する際はここに記載していく
$(function(){
    /* header */
    $('.menu a').hover(
        function(){	
            $(this).css('font-weight','bold');
            $(this).animate({'font-size':'24px'},200);
        },
        function(){	
            $(this).css('font-weight','normal');
            $(this).animate({'font-size':'18px'},200);
        }
    );

    /* faq */
    $('.faq_item').click(function(){
        var $answer = $(this).find('.answer');

        if( $answer.hasClass('open') ){
            $answer.removeClass('open');
            $(this).find('span').text('+');
            $answer.slideUp(200);
        }else{
            $answer.addClass('open');
            $(this).find('span').text('-');
            $answer.slideDown(200);
        }
    });
    /* faqはここまで */
});
