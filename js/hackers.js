// 메인 타이틀 이미지
var tit_li = $('.main_visual .title li');

for (var i = 0; i < tit_li.length + 1; i++) {
    var time = 6500;
    var delay_t = (i + 1) * 150;

    if (i == tit_li.length) {
        $('.hot_site')
            .delay(delay_t)
            .animate({
                'bottom': '105px',
                'opacity': '1'
            }, 500);
    } else {
        tit_li
            .eq(i)
            .delay(delay_t)
            .animate({
                'margin-top': '0',
                'opacity': '1'
            }, 500);
    }
}

// 검색창
var num = 1;
var Otimer = setInterval(show, 100);

function show() {
    var text = '원하시는 키워드를 입력하여 빠른 검색하기';
    var txtLength = text.length;

    if (num <= txtLength) {
        var word = text.substring(0, num);
        $('.search_area input').attr({'placeholder': word});
        num++;
    }
};

$('.search_area input').focusin(function () {
    $('.search_area_in')
        .stop(true, false)
        .animate({'opacity': '1'});
    $('.search').css({'width': '600px'});
    $()
});
$('.search_area input').focusout(function () {
    $('.search_area_in')
        .stop(true, false)
        .animate({'opacity': '0.9'});
    $('.search').css({'width': '430px'});
});

// 해커스 이슈 영상 탭
$('.mv_area .tab_con > div.tab_con_01').appendTo('.tab_con');
// $('.tab_btn li.active img').attr('src',$('.tab_btn li.active
// img').attr('src').replace('_off','_on'));

$('.tab_btn li').hover(function () {
    $(this)
        .not('.active')
        .find('img')
        .attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
}, function () {
    $(this)
        .not('.active')
        .find('img')
        .attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
});
$('.tab_btn li').on('mouseover', function () {
    var idx = $(this).index() + 1;

    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
    $('.mv_area .tab_con > div.tab_con_0' + idx)
        .appendTo('.tab_con')
        .css('opacity', '0')
        .animate({
            'opacity': '1'
        }, 300);
    // $('.tab_btn
    // li').not('.active').find('img').attr('src',$(this).find('img').attr('src').replace('_on','_off'));
});

var animate_con = $('.tab_con > div > a');
var window_h = $(window).height();
var scroll_area = animate_con
    .offset()
    .top;
var scroll_area_h = animate_con.height();
var start_scroll = scroll_area - window_h;
var end_scroll = scroll_area + scroll_area_h;

$(window).on('scroll', function () {
    var scroll_top = $(window).scrollTop();
    var tmpTop = (scroll_top - start_scroll) / 20;

    if (start_scroll < scroll_top && end_scroll > scroll_top) {
        animate_con.css({
            'background-position-y': '-' + tmpTop + 'px'
        });
    }
});

// 사업영역
var fade_li = $('.business ul li');

for (var i = 1; i < (fade_li.length / 2) + 1; i++) {
    var ran_num1 = Math.floor(Math.random() * (fade_li.length / 2)) + 1;

    fade_li
        .eq(i * 2 - 1)
        .find('img')
        .eq(1)
        .delay(300 * ran_num1)
        .fadeIn(1000);
}

var bussiness_area = setInterval(function () {
    b_area();
}, 5000);

$('.business ul').hover(function () {
    clearInterval(bussiness_area);
}, function () {
    bussiness_area = setInterval(function () {
        b_area();
    }, 5000);
});

function b_area() {
    var b_li = $('.business ul li');

    b_li.each(function () {
        var ran_num2 = Math.floor(Math.random() * (fade_li.length)) + 1;
        var delay_t = ran_num2 * 300;

        $(this)
            .find('img')
            .eq(1)
            .delay(delay_t)
            .fadeToggle(1000);
    });
}

// 1위 해커스 배경
var win_wd = window.innerWidth;
var bg_gap = (2440 - win_wd) / 2;

bg_resize(win_wd, bg_gap);

$(window).resize(function () {
    win_wd = $(window).width();
    bg_gap = (2440 - win_wd) / 2;

    bg_resize(win_wd, bg_gap)
});

function bg_resize(win_wd, bg_gap) {
    if (win_wd > 2440) {
        $('.first_hackers').css('background-position', 'left bottom, right bottom');
    } else if (win_wd > 1100) {
        $('.first_hackers').css('background-position', -bg_gap + 'px bottom, ' + (
            win_wd / 2
        ) + 'px bottom');
    }
}
// 1위 해커스 근거문구
$('.first_hackers .btn a').click(function () {
    var $box = $('.first_hackers .txt_box');
    var $txt = $box.children();
    var box_height = $txt.length * $txt.height();
    $box.toggleClass('active');

    if ($box.hasClass('active')) {
        $box.css('height', box_height + 'px');
    } else {
        $box.removeAttr('style');
    }
});

// 영상 팝업창
function mv_pop(vodURL, autopl) {
    $('#mv_pop').fadeIn();
    $("#mv_pop .con_mv").html(
        '<iframe frameborder="0" width="800px" height="400px" scrolling="No" src="/jwpl' +
        'ayer/?main=y&src=' + vodURL + '&amp;autoplay=' + autopl + '&amp;loop=1&amp;mut' +
        'e=1"></iframe>'
    );
};

// 신청 팝업창
function apply_pop() {
    $('#apply_pop').fadeIn();
};

// 신청 팝업창 오늘날짜
var now = new Date();
var year = now.getFullYear();
var mon = (now.getMonth() + 1) > 9
    ? '' + (
        now.getMonth() + 1
    )
    : '0' + (
        now.getMonth() + 1
    );
var day = now.getDate() > 9
    ? '' + now.getDate()
    : '0' + now.getDate();
var chan_val = year + '-' + mon + '-' + day;

$('#apply_pop .date').val(chan_val);

// 팝업창 닫기
function close_pop() {
    $('.popup').fadeOut();
}

// 나눔활동
var shareSlider = $('.list_winner').bxSlider({
    ticker: true,
    tickerHover: true,
    speed: 200000,
    slideMargin: 20,
    useCSS: false, //ie 적용
});

$('.share .list_winner li').hover(function () {
    $(this)
        .find('img')
        .eq(0)
        .stop(true, false)
        .fadeIn(300);
}, function () {
    $(this)
        .find('img')
        .eq(0)
        .stop(true, false)
        .fadeOut(300);
});

// Contact
$(window).scroll(function () {
    if ($('.contact').offset().top - 700 < $(window).scrollTop()) {
        var contact_li = $('.contact li');

        for (var i = 0; i < contact_li.length + 1; i++) {
            var time = 150;
            var delay_t = (i + 1) * time;

            contact_li
                .eq(i)
                .delay(delay_t)
                .animate({'margin-top': '0', 'opacity': '1'});
        }
    }
});

// 팝업창, 검색 기능
function ItemSubchange(item) {

    var data = {
        'key': item,
        'type': 'DetailItem'
    };
    $.ajax({
        url: '/ajax/select.php',
        type: 'get',
        dataType: 'json',
        data: data,
        success: function (result) {
            $('.selectDetailItem').empty();
            $('.selectDetailItem').append("<option value=''>세부 영역</option>");
            if (result != '') {
                $.each(result, function (i, obj) {
                    var option = '<option value="' + obj.ServiceItemIdx + '">' + obj.ServiceDetailCategoryName +
                            '</option>';
                    $('.selectDetailItem').append(option);
                });

            }
        }
    });
}

function searchs() {
    var search_text = $('.search')
        .val()
        .toUpperCase();
    var first_key = "";
    var type = '';
    if (search_text == '') {
        return false;
    }
    $('.searched').removeClass('searched');

    $(".nav_area > .inner > .nav_map > ul > li > a").each(function (key, item) {
        var item_text = $(item).html();
        if (item_text.indexOf(search_text) > '-1') {

            if (first_key == '') {
                first_key = key;
                type = 1;
            }
            $(item).addClass('searched');

        }
    });

    $(".academy > .nav_map > .inner a").each(function (key, item) {
        var item_text = $(item).html();
        if (item_text.indexOf(search_text) > '-1') {
            if (first_key == '') {
                first_key = key;
                type = 2;
            }
            $(item).addClass('searched');

        }
    });

    if (type == 1) {
        var top = $(".nav_area > .inner > .nav_map > ul > li > a")[first_key].documentOffsetTop() - (
            window.innerHeight / 3
        );
        console.log(top);
        $('html, body').scrollTop(top);
        return false;
    } else if (type == 2) {
        var top = $(".academy > .nav_map > .inner a")[first_key].documentOffsetTop() - (
            window.innerHeight / 3
        );
        console.log(top);
        $('html, body').scrollTop(top);
        return false;
    }

}

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + (
        this.offsetParent
            ? this.offsetParent.documentOffsetTop()
            : 0
    );
};
function ItemChange() {

    var data = {
        'type': 'Item'
    };
    $.ajax({
        url: '/ajax/select.php',
        type: 'get',
        dataType: 'json',
        data: data,
        success: function (result) {
            if (result != '') {
                $.each(result, function (i, obj) {
                    var option = '<option value="' + obj + '">' + obj + '</option>';
                    $('.selectItem').append(option);
                });

            }
        }
    });
}

function sending_data() {
    var data = $('#frm').serialize();
    var deny_char = /^[ㄱ-ㅎ|가-힝|a-z|A-Z|\*]+$/;

    if ($("input[name='trigger']").val() == 1) {
        alert('데이터 전송중입니다.');
        return false;
    }
    if (deny_char.test($("input[name='name']").val()) == false) {
        alert('한글과 영문만 입력해주세요');
        $("input[name='name']").focus();
        return false;
    }
    if ($("input[name='name']").val() == '') {
        alert('이름을 입력해주세요');
        $("input[name='name']").focus();
        return false;
    }
    if ($("input[name='tel']").val() == '') {
        alert('연락처를 입력해주세요');
        $("input[name='tel']").focus();
        return false;
    }
    if ($("textarea[name='InquiryContent']").val() == '') {
        alert('상담내용을 입력해주세요');
        $("input[name='InquiryContent']").focus();
        return false;
    }

    if ($("select[name='selectDetailItem'] option:selected").val() == '') {
        alert('관심 과정을 선택해주세요');
        return false;
    }

    if ($('#chk').prop('checked') == false) {
        alert('개인정보 수집 및 이용에 동의해주세요');
        return false;
    }

    $("input[name='trigger']").val(1);

    $.ajax({
        url: '/ajax/apply_ajax.php',
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (result) {
            if (result.result == 'success') {
                alert('상담 신청이 완료되었습니다');
                location.reload();
            } else if (result.msg != undefined) {
                alert(result.msg);
                return false;
            } else {
                alert('오류가 발생하였습니다 잠시 후 다시 시도해주세요');
                return false;
            }
        }
    });
}

$(document).ready(function () {
    ItemChange();

    $("input[name='tel']").on('keyup', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
        if ($(this).val().length > 11) {
            var valid_number = $(this)
                .val()
                .substring(0, 11);
            $(this).val(valid_number);
        }
    });

    $("input[name='name']").on('keyup', function () {
        if ($(this).val().length > 10) {
            var valid_number = $(this)
                .val()
                .substring(0, 10);
            $(this).val(valid_number);
        }
    });

    $("textarea[name='InquiryContent']").on('keyup', function () {
        if ($(this).val().length > 100) {
            var valid_number = $(this)
                .val()
                .substring(0, 100);
            $(this).val(valid_number);
        }
    });

    $(".search").keypress(function (e) {
        if (e.which == 13) {
            searchs();
        }
    });

    $('.date').datepicker({
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        language: "kr",
        startDate: "-0m",
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true
    });
});
function digit_check(evt) {
    var code = evt.which
        ? evt.which
        : event.keyCode;
    if (code < 48 || code > 57) {
        return false;
    }
}
