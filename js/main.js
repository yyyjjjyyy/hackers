$(document).ready(function () {

    // 이슈 탭메뉴 콘텐츠 

    let tabBtn = $('#tab_con >.inner> ul > li'); //변수선언
    tabBtn.mouseenter(function () { //마우스 오버시 아래 내용을 실행한다.

        //탭버튼 bg 변경
        $(this).addClass('t_active'); //마우스 오버시 클래스 추가
        $(this)
            .siblings() //형제요소들의
            .removeClass('t_active'); //탭버튼 서식 (스프라이트이미지) 서식 지움


        //탭 콘텐츠 img/bg 변경
        const tabBanner = $(this).attr('data-tab-banner'); //속성값 가져오기
        //console.log(tabBanner); 확인하기

        $('.tab_banner img').attr('src', tabBanner); //src, data-tab-banner 속성 대입하기

        const tabCon = $(this).attr('data-tab-con'); //속성값 가져오기
        $('#tab_con').attr('style', 'background-image: url(' + tabCon + ');'); //스타일의, bgimg 대입하기

    });


    // -----------------------------------------------------------------------


    // 이슈 배너 슬라이드

    let n = $('.banner_wrap .page_btn li').index(); //0
    // console.log(n);

    const p_btn = $('.banner_wrap .page_btn li'); //페이지버튼

    // 페이지 버튼을 클릭시 해당하는 슬라이드 보이게 하기
    p_btn.click(function () {
        n = $(this).index();
       // console.log(n); //선택한 콘트롤 버튼의 인덱스값을 확인

        // 페이지 버튼의 서식을 모두제거하고 선택한 페이지 버튼에만 서식을 적용
        $('.banner_wrap .page_btn li').removeClass('page_on');
        $(this).addClass('page_on');

        //$(this).addClass('on').siblings().removeClass('on');

        $('.banner_wrap .banner_slide')
            .stop()
            .fadeOut(); // 보이는 배너 슬라이드 숨기고,
        $('.banner_wrap .banner_slide')
            .eq(n)
            .stop()
            .fadeIn(); // 인덱스 값에 해당하는 배너 슬라이드만 보이게 한다.
    });

    function moveLeft() {
        $('.banner_wrap .banner_slide')
            .stop()
            .fadeOut(); //보이는 이미지 부터 숨기고
        $('.banner_wrap .page_btn li').removeClass('page_on'); //페이지 버튼 서식을 모두 제거하고
        if (n == 2) { //0, 1, 2, 0순으로 변경
            n = 0;
        } else {
            n++;
        }

        $('.banner_wrap .banner_slide')
            .eq(n) //인덱스값에 해당하는 이미지가 보이게함.
            .stop()
            .fadeIn();

        $('.banner_wrap .page_btn li')
            .eq(n)
            .addClass('page_on'); //해당하는 페이지버튼에 서식적용
    }

    var Timer = setInterval(moveLeft, 3000);


    $('.banner_wrap .page_btn').hover(function () { //페이지 버튼에 마우스 오버시
        clearInterval(Timer);// 시간을 제거하여 멈추게 하고 
    }, function () {
        Timer = setInterval(moveLeft, 3000); //다시 마우스를 빼면 자동으로 움직이도록
    });


    // -----------------------------------------------------------------------


    // 사업영역

    let colorOn = $('.business .inner ul li');

    for (var i = 1; i < (colorOn.length / 2) + 1; i++) {
        //1: 1부터 시작. i가 list의 length의 절반(5)+1보다 작으면, i증감  1, 2, 3, 4, 5

        let ran_num1 = Math.floor(Math.random() * (colorOn.length / 2)) + 1;
        // .Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환 Math.random() 함수는 0 이상 1
        // 미만의 부동소숫점
        //0.1234*5

        colorOn
            .eq(i * 2 - 1) //1 3 5 7 9  2 4 6 8 10
            .find('img') ///img찾아
            .eq(1) //  img 중 index1 : on 이미지
            .delay(300 * ran_num1) // .delay( duration , queueName  )
            .fadeIn(1000); // .fadeIn( duration(시간:숫자or slow/fast), easing(사라지는 모양) , complete(나타난 다음 불러올 함수)  )

        //console.log(colorOn); console.log(i);
    }

    var businessTimer = setInterval(function () {
        business_li(); //랜덤2*300
    }, 5000); //5초 간격으로
    // setInterval(함수,eorltlrks,함수에 전달할 인수) : 일정한 시간 간격으로 작업을 수행 setTimeout 함수 : 일정한
    // 시간 후에 작업을 한번 실행합니다.


    colorOn.hover(function () { // 마우스 오버시
        clearInterval(businessTimer); //작업의 다음 작업 중지
    }, function () {
        businessTimer = setInterval(function () {
            business_li();
        }, 5000);
    });
    //clearInterval(), clearTimeout() 실행중인 작업 중지 아닌 지정된 작업은 모두 실행되고 다음 작업이 중지


    function business_li() {
        colorOn.each(function () {
            var ran_num2 = Math.floor(Math.random() * (colorOn.length)) + 1; //1~10 랜덤
            var delay_t = ran_num2 * 300;

            $(this)
                .find('img')
                .eq(1)
                .delay(delay_t)
                .fadeToggle(1000); //fadeToggle()  보이는 요소는 보이지 않게, 보이지 않는 요소는 보이게 하는 메서드

            //console.log(ran_num2); 1~10 랜덤
        });
    }


    // //li 마우스 오버시 list img 

    // let listImg =    $('.business .inner ul li img')

    // listImg.mouseenter(function(){  
    //    listImg.find('img') ///img찾아
    //     .eq(2) //  img 중 index2 : list이미지      
    //     .fadeIn(100); // .fadeIn( duration(시간:숫자or slow/fast), easing(사라지는 모양) , complete(나타난 다음 불러올 함수)  )
      
    // });



    // -----------------------------------------------------------------------

    // 1위 해커스

    $('.first_place .arrow img').click(function () { //화살표이미지 클릭시
        // 변수선언
        var txtbox = $('.first_place .first_txt');
        var p_con = txtbox.children();
        var txt_height = p_con.length * p_con.height();

        txtbox.toggleClass('show'); //show클래스 넣었다 뺐다

        if (txtbox.hasClass('show')) { //show클래스 가지고 있다면
            txtbox.css('height', txt_height + 'px'); //txt_heigt의 높이만큼 높이 설정
        } else {
            txtbox.removeAttr('style'); //그렇지 않다면 style속성 지우기.
        }
    });


    // -----------------------------------------------------------------------

    // 나눔

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

    // src값을 변경하여 이미지가 변경되도록 하기
    let s_slide = $('.s_wrap .swiper-slide');
    s_slide.hover(function () { // 마우스 오버시 이미지 변경
        const img = $(this).find('img'); //s_slide이미지 찾아서 img변수에 넣어줌
        const src = img
            .attr('src') //img의 src속성을 가져와
            .replace('off', 'on'); // off를 on으로 바꾼 것 src변수에 넣어줌.

        img.attr('src', src); //img속성의 'src'를  변수 src(이미지 src속성 가져와 off->on)에 저장.

    }, function () { // 마우스 아웃시 원래 이미지가 나오도록 한다
        const img = $(this).find('img');
        const src = img
            .attr('src')
            .replace('on', 'off');

        img.attr('src', src);
    });

});
