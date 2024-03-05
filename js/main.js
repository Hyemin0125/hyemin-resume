$('.gnb li').click(function(){
    let i = $(this).index();
    let hig = $('.wrap div').eq(0).height();
    $('html,body').animate({'scrollTop':i*hig});
});/*클릭시 이동 */

$(window).scroll(function(){
    let scr = $(window).scrollTop();
    let hig = $('.wrap div').height();

    if(scr>=0 && scr<hig){

        $('.gnb li').eq(0).addClass('active')
        .siblings().removeClass('active');

    }else if(scr >=hig && scr<hig*2){

        $('.gnb li').eq(1).addClass('active')
        .siblings().removeClass('active');

    }else if(scr>=hig*2 && scr<hig*3){

        $('.gnb li').eq(2).addClass('active')
        .siblings().removeClass('active');

    }else if(scr>=hig*3 && scr<hig*4){

        $('.gnb li').eq(3).addClass('active')
        .siblings().removeClass('active');

    }else{
        
        $('.gnb li').eq(4).addClass('active')
        .siblings().removeClass('active');
        
    }
});/*gnb 연결*/

$('.wrap').children('div').mousewheel(function(e,d){
if(d>0){

let prv = $(this).prev().offset().top;
$('html,body').stop().animate({'scrollTop':prv});

}else if(d<0){

let nxt = $(this).next().offset().top;
$('html,body').stop().animate({'scrollTop' : nxt});

}
});/*마우스 연결*/

$('.top').click(function(){
$('html,body').stop().animate({'scrollTop':0},1500);
})/*top btn*/
/*스크롤컨트롤*/ 


$('.item4 .tWrap .tabBtn li').on('click',function(e){
    e.preventDefault();

    var i = $(this).index();
    
$('.item4 .tWrap .tabCon').children().eq(i).show().siblings().hide();
$(this).addClass('active').siblings().removeClass('active');
});//tab
