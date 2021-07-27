$(document).ready(function () {


    //메인 이미지 
    var rankingImg = $('.main_img .ranking li');

for (let i = 0; i < rankingImg.length + 1; i++) {
  
    let delay = (i + 1) * 250;

    if (i == rankingImg.length) {
        $('.link_tag')
            .delay(delay)           
            .animate({
                'top': '80%',                
                'opacity': '1'
            }, 600);
    } else {
        rankingImg
            .eq(i)
            .delay(delay)
            .animate({
                'top': '50%',
                'opacity': '1'
            }, 500);
    }
}





    //1. 탭메뉴 콘텐츠 제이쿼리 구현
    let gnb = $('#tab_con >.inner> ul > li');

    gnb.mouseenter(function () { //마우스 오버시 아래 내용을 실행한다.
        const tabBanner = $(this).attr('data-tab-banner'); //가져오기
        //console.log(tabBanner); 증명하기
        $('.tab_banner img').attr('src', tabBanner); //대입하기

        const tabCon = $(this).attr('data-tab-con');
        $('#tab_con').attr('style', 'background-image: url(' + tabCon +');');
    });

    //.issue #tab_con, .issue #tab_con .tab_banner bg이미지 바뀌도록 배너 슬라이드

    let n = $('.banner_wrap .page_btn li').index(); //0
    console.log(n);

    const p_btn = $('.banner_wrap .page_btn li'); //페이지버튼

    //페이지 버튼을 클릭시 해당하는 슬라이드 보이게 하기
    p_btn.click(function () {
        n = $(this).index();
        console.log(n); //선택한 콘트롤 버튼의 인덱스값을 확인

        //페이지 버튼의 서식을 모두제거하고 선택한 페이지 버튼에만 서식을 적용
        $('.banner_wrap .page_btn li').removeClass('page_on');
        $(this).addClass('page_on');

        //$(this).addClass('on').siblings().removeClass('on');

        $('.banner_wrap .banner_slide')
            .stop()
            .fadeOut(); //보이는 배너 슬라이드 숨기고,
        $('.banner_wrap .banner_slide')
            .eq(n)
            .stop()
            .fadeIn(); //인덱스 값에 해당하는 배너 슬라이드만 보이게 한다.
    });

    function moveLeft() { //0, 1, 2, 0순으로 변경
        //보이는 이미지 부터 숨기고
        $('.banner_wrap .banner_slide')
            .stop()
            .fadeOut();
        //페이지 버튼 서식을 모두 제거하고
        $('.banner_wrap .page_btn li').removeClass('page_on');
        if (n == 2) {
            n = 0;
        } else {
            n++;
        }
        //인덱스값에 해당하는 이미지가 보이게함.
        $('.banner_wrap .banner_slide')
            .eq(n)
            .stop()
            .fadeIn();
        //해당하는 페이지버튼에 서식적용
        $('.banner_wrap .page_btn li')
            .eq(n)
            .addClass('page_on');
    }
    var Timer = setInterval(moveLeft, 3000);

    //페이지 버튼에 마우스 오버시 시간을 제거하여 멈추게 하고 다시 마우스를 빼면 자동으로 움직이게 한다.
    $('.banner_wrap .page_btn').hover(function () {
        clearInterval(Timer);
    }, function () {
        Timer = setInterval(moveLeft, 3000);
    });

    //1위 해커스
    $('.first_place .arrow img').click(function () {
        var txtbox = $('.first_place .first_txt');
        var p_con = txtbox.children();
        var txt_height = p_con.length * p_con.height();
        txtbox.toggleClass('show');

        if (txtbox.hasClass('show')) {
            txtbox.css('height', txt_height + 'px');
        } else {
            txtbox.removeAttr('style');
        }
    });

    // 사업영역 onImg fadein
    var colorOn = $('.business .inner ul li');

    for (var i = 1; i < (colorOn.length / 2) + 1; i++) {
        var ran_num1 = Math.floor(Math.random() * (colorOn.length / 2)) + 1;

        colorOn
            .eq(i * 2 - 1)
            .find('img')
            .eq(1)
            .delay(300 * ran_num1)
            .fadeIn(1000);
    }

    var bussiness_area = setInterval(function () {
        b_list();
    }, 5000);

    $('.business .inner ul').hover(function () {
        clearInterval(bussiness_area);
    }, function () {
        bussiness_area = setInterval(function () {
            b_list();
        }, 5000);
    });

    function b_list() {
        var b_li = $('.business .inner ul li');

        b_li.each(function () {
            var ran_num2 = Math.floor(Math.random() * (colorOn.length)) + 1;
            var delay_t = ran_num2 * 300;

            $(this)
                .find('img')
                .eq(1)
                .delay(delay_t)
                .fadeToggle(1000);
        });
    }

    timer();
    var current = 0;
    var $interval;

    function timer() {
        var $interval = setInterval(function () {
            slide()
        }, 2000);
    }

    function slide() {
        $(".bannerbox").animate({
            left: "-=187px"
        }, 1000, function () {
            $(this).css({"left": 0});
            $(".bannerbox").append($("ul").children("li").eq(0));
        });
        current++;
        if (current == 5) 
            current = 0;
        }
    
    //나눔
    let swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 0
        },
        // autoplay: true,
        speed: 3000,
        // speed: 100,
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 5, //한번에 보여 줄 슬라이드 개수
        spaceBetween: 10, //슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 "가운데" 보이기
    });

    /*
    
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    */

 


   // src값을 변경하여 이미지가 변경되도록 하기 
   let s_slide = $('.s_wrap .swiper-slide');
    s_slide.hover(function () {
       // 마우스 오버시 이미지 변경
        // $(this).find('img').attr('src').replace('off','on');
        const img = $(this).find('img');
        const src = img.attr('src').replace('off','on');
        img.attr('src', src);

    }, function () {
       // 마우스 아웃시 원래
       // 이미지가 나오도록 한다
        const img = $(this).find('img');
        const src = img.attr('src').replace('on','off');
        img.attr('src', src);
    });

});
