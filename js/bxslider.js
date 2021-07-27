var __globalBxslider = {
    bxList:[],
    setup:function(idx, attr){

        if(attr.bxSlider) { // bxslider �대� �곸슜�� 寃쎌슦 return 泥섎━
            return false;
        }

        // attr�� bxslider �곸슜
        var $sliderLi = $(".bxslider li", attr);

        var wd = $sliderLi.width();

        var isSingleImage = $sliderLi.length === 1;

        var _mode = $(attr).attr("data-mode"); // �щ씪�대뱶 �④낵 - horizontal,vertical,fade
        _mode = _mode ? _mode : 'horizontal';

        var _maxSlides = $(attr).attr("data-maxSlides"); // 理쒕� 蹂댁뿬吏��� 媛�닔
        _maxSlides = _maxSlides && !isNaN(parseInt(_maxSlides)) ? parseInt(_maxSlides) : 1;

        var _minSlides = $(attr).attr("data-minSlides"); // 理쒖냼 蹂댁뿬吏��� 媛�닔
        _minSlides = _minSlides && !isNaN(parseInt(_minSlides)) ? parseInt(_minSlides) : 1;

        var _slideMargin = $(attr).attr("data-slideMargin"); // �щ씪�대뱶 �ъ씠 margin 媛�
        _slideMargin = _slideMargin && !isNaN(parseInt(_slideMargin)) ? parseInt(_slideMargin) : 0;

        var _delay = $(attr).attr("data-delay"); // �щ씪�대뱶 �쒕젅�� �ㅼ젙
        _delay = _delay && !isNaN(parseInt(_delay)) ? parseInt(_delay) : 4000;

        var _speed = $(attr).attr("data-speed"); // �щ씪�대뱶 �띾룄 �ㅼ젙
        _speed = _speed && !isNaN(parseInt(_speed)) ? parseInt(_speed) : 400;

        var _autoBtn = $(attr).attr("data-autoBtn"); // play / stop / puase
        _autoBtn = _autoBtn && _autoBtn=='true' ? true : false;

        var _auto  = $(attr).attr("data-auto"); // �먮룞�щ씪�대뱶 �щ�
        _auto = _auto && _auto=='true' ? true : false;

        var _pager = $(attr).attr("data-pager");  // �섏씠吏� �숆렇�� 踰꾪듉 �ㅼ젙 �щ�
        _pager = ( _pager && _pager=='true' && !isSingleImage ) ? true : false;

        var _pagerCustom = '.'+$(attr).attr("data-pagerCustom");  // �섏씠吏� �몃�濡� 鍮좎�寃뚰븷��

        var _controls = $(attr).attr("data-controls"); //�먮룞 �щ씪�대뱶 而⑦듃濡� 踰꾪듉 �ㅼ젙 �щ�
        _controls = _controls && _controls=='true' ? true : false;

        var _moves = $(attr).attr("data-moves"); //�쒖옣�� �щ씪�대뱶
        _moves = _moves && !isNaN(parseInt(_moves)) ? parseInt(_moves) : 1;

        var _touch = $(attr).attr("data-touch"); //留덉슦�� �곗튂 �щ씪�대뱶 �ъ슜�щ�
        _touch = _touch && _touch=='true' ? true : false;

        var _loop = $(attr).attr("data-loop"); //留덉슦�� �곗튂 �щ씪�대뱶 �ъ슜�щ�
        _loop = _loop && _loop=='false' ? false : true;

        var _type = $(attr).attr("type-number"); //�섏씠吏� �レ옄 �ㅼ젙 �щ�
        _type = _type && _type=='true' ? 'short' : 'full';

        var bgCacheCheck = false,
            bgAvailable = false,
            bgColors = [],
            bgTarget;

        __globalBxslider.bxList[__globalBxslider.bxList.length] = attr.bxSlider = $('.bxslider',attr).bxSlider({
            slideWidth: wd
            ,slideMargin: _slideMargin
            ,minSlides: _minSlides // 理쒖냼 蹂댁뿬吏��� 媛�닔
            ,maxSlides: _maxSlides // 理쒕� 蹂댁뿬吏��� 媛�닔
            ,speed: _speed
            ,pause: _delay
            ,moveSlides:_moves
            ,mode: _mode // �щ씪�대뱶 �④낵 - horizontal,vertical,fade
            ,autoControls: _autoBtn // play / stop / puase
            ,auto: _auto // _auto // �먮룞�щ씪�대뱶 �щ�
            ,pager: _pager
            ,pagerCustom: (_pagerCustom == '.undefined') ? '': _pagerCustom
            ,controls: _controls
            ,touchEnabled: _touch
            ,infiniteLoop: _loop
            ,pagerType: _type
            ,onSliderLoad:function(el){
                //�� bxslider onSliderLoad �대깽�� �섏젙
                // LazyLoad �듭뀡�� 耳쒖졇�덉쓣 寃쎌슦 �щ씪�대뱶 �대��� �대�吏��� data-original濡� �ㅼ젣 濡쒕뱶�섏� �딆쑝硫�
                // �щ씪�대뱶 濡쒕뱶�� �щ씪�대뱶 �대룞 吏곸쟾�� �먯떊怨� �ㅼ쓬�� �대�吏�瑜� 濡쒕뱶�쒕떎
                __globalBxslider.renderLazyImage(this);

                // �щ씪�대뱶 濡쒕뱶 �� �먮룞�뺤� �먮룞�쒖옉 �대깽�� 遺���
                /* controls , pager click �덉쓣�� auto 硫덉텛�� �꾩긽 媛쒖꽑 */
                if(!_autoBtn){
                    if( _auto && !isSingleImage ){
                        $(attr).on('mouseover',function(){

                            this.bxSlider.stopAuto()
                        });
                        $(attr).on('mouseout',function(){
                            this.bxSlider.startAuto()
                        });
                    }
                }
            }
            ,onSliderResize:function(){} // ...
            ,onSlideBefore:function(el, current, next){//�� bxslider onSliderBefore �대깽�� �섏젙
                var imageLoad = __globalBxslider.renderLazyImage(this, current, next);
                if (!imageLoad) {
                    return false;
                }

                // 諛깃렇�쇱슫�� �명똿
                if( !bgCacheCheck ) {
                    bgCacheCheck = true;

                    var $bxsliderDefault = $(el).closest('.bxslider-default');
                    if( !$bxsliderDefault.hasClass('bxslider-bgcolor') ) {
                        bgAvailable = false;
                        return;
                    }
                    $sliderLi.each(function() {
                        var color = $(this).css('backgroundColor');
                        bgColors.push(color);
                        if( !bgAvailable && color != 'rgba(0, 0, 0, 0)' && color != 'rgb(0, 0, 0)' ) {
                            bgAvailable = true;
                        }
                    });
                    bgTarget = $(el).closest('.bxslider-default').parent().parent();
                }

                if( bgAvailable && bgTarget) {
                    this.speed = 0;
                    bgTarget.css({
                        'backgroundColor': bgColors[next]
                    });
                }
            }
            ,onSlideNext: function(el) {
                if(el.context.className.indexOf("slide-type1") > 0){
                    $('.bxslider li').removeClass('on');
                    el.next('li').addClass('on');
                }
                if(el.context.className.indexOf("slide-type2") > 0){
                    ($('.bxslider li').removeClass('on'));
                    el.next('li').addClass('on');
                    el.next('li').next('li').addClass('on');
                    el.next('li').next('li').next('li').addClass('on');
                    el.next('li').next('li').next('li').next('li').addClass('on');
                }
                if(el.context.className.indexOf("slide-type3") > 0){
                    ($('.bxslider li').removeClass('off'));
                    el.prev('li').next('li').addClass('off');
                    el.prev('li').addClass('off');
                    el.prev('li').prev('li').addClass('off');
                    el.prev('li').prev('li').prev('li').addClass('off');
                    el.prev('li').prev('li').prev('li').prev('li').addClass('off');
                }
            }
            ,onSlidePrev: function(el) {
                if(el.context.className.indexOf("slide-type1") > 0){
                    $('.bxslider li').removeClass('on');
                    el.next('li').addClass('on');
                }
                if(el.context.className.indexOf("slide-type2") > 0){
                    $('.bxslider li').removeClass('on');
                    el.next('li').addClass('on');
                    el.next('li').next('li').addClass('on');
                    el.next('li').next('li').next('li').addClass('on');
                    el.next('li').next('li').next('li').next('li').addClass('on');
                }
            }
            //infiniteLoop: false
        });
        return true; // �щ씪�대뱶媛� �뺤긽�곸쑝濡� 珥덇린��
    },
    startAuto:function() {
        this.bxSlider.startAuto();
    },
    stopAuto:function() {
        this.bxSlider.stopAuto();
    },
    resize:function(){
        for(var i in this.bxList){
            if( $.isNumeric(i) === false )
                continue;
            try {
                this.bxList[i].redrawSlider();
            }
            catch(e) {
                console.warn('Should Remove Legacy Code in bxslider.js');
                continue;
            }
        }
    },
    init:function(selector){ // �� _globalBxslider.init �⑥닔 蹂�寃�
        var _this = this;
        $(selector).each(function (idx, slider) {
            var sliderObj = $(slider);

            // 釉뚮씪�곗�/紐⑤컮�� viewport 怨꾩궛 臾몄젣濡� visible 議곌굔 �쒓굅
            // if (sliderObj.hasClass('loaded') || !sliderObj.visible(true)) {
            if (sliderObj.hasClass('loaded')) {
                return true;
            }

            var lazyImage = sliderObj.find('.slider-lazy-image');
            if (lazyImage.length > 0) {
                var img = lazyImage.eq(0);
                _this.renderImage(img);
                // IE7,8�� 罹먯떛�� �대�吏�瑜� 濡쒕뱶�좉꼍�� load �대깽�멸� 諛쒖깮�섏� �딆쓬
                // �대�吏��� state瑜� 泥댄겕�� �꾨즺�곹깭�쇰㈃ �대깽�몃� 嫄대꼫�곌퀬 珥덇린�� �ㅽ뻾
                if (img.get(0).readyState && img.get(0).readyState == 'complete') {
                    __globalBxslider.setup(idx, slider);
                } else {
                    img.one('load', function () {
                        var imgObj = this;
                        if (this.readyState) { // IE7,8 珥덇린��
                            var loadInterval = setInterval(function () {
                                if (imgObj.readyState == 'complete') {
                                    __globalBxslider.setup(idx, slider);
                                    clearInterval(loadInterval);
                                }
                            }, 250);
                        } else { // 紐⑤뜕釉뚮씪�곗� 珥덇린��
                            __globalBxslider.setup(idx, slider);
                        }
                    });
                }
            } else {
                __globalBxslider.setup(idx, slider);
            }
            sliderObj.css("overflow","visible").addClass('loaded');
        });
    },
    reloadSlider: function($el) {
        var _this = this;
        $el.each(function(i, $this) {
            var idx = parseInt($('.bxslider-default').index($this));
            _this.bxList[idx].reloadSlider();
        });
    },
    renderImage: function (obj) {
        var img = $(obj);
        if (!img.hasClass('slider-lazy-image')) {
            return false;
        }
        var imgUrl = img.attr('data-original');
        img.attr('src', imgUrl).removeClass('slider-lazy-image');
        return true;

    },
    renderLazyImage: function (slideObj, current, next) { // ��__globalBxslider.renderLazyImage �⑥닔 異붽�

        var _this = this;
        var context = $(slideObj.context);
        var slidePerMove = context.attr('data-moves') || 1;
        var visibleSlideCount = context.attr('data-maxslides') || 1;

        var preRenderRange =  visibleSlideCount;
        var slideCount = slideObj.getSlideCount();
        var currentSlideIdx = slideObj.getCurrentSlide();

        // 蹂댁뿬吏� �ㅼ쓬 �щ씪�대뱶�� �대�吏� �뚮뜑留�
        for (var i = 0; i < preRenderRange; i++) {
            var slideIdx = currentSlideIdx + i;
            if (slideIdx + 1 > slideCount) {
                slideIdx = slideIdx - slideCount;
            }
            var nextElem = slideObj.getSlideElement(slideIdx);
            nextElem.find('.slider-lazy-image').each(function () {
                _this.renderImage(this);
            });
        }

        if (current === undefined || next === undefined) return;

        // �щ씪�대뱶 �④낵媛� �대룞�� 寃쎌슦 �앹꽦�섎뒗 bx-clone �곸뿭�� �대�吏� �뚮뜑留�
        context.find('.bx-clone').each(function () {
            $(this).find('.slider-lazy-image').each(function () {
                _this.renderImage(this);
            });
        });

        var imgLoad = true;
        for (var i = current; i < ((next + 1) * slidePerMove); i++) {
            var sliderElem = $(slideObj.getSlideElement(i));
            sliderElem.find('img').each(function () {
                _this.renderImage(this);
                // �대�吏�媛� 濡쒕뱶�섏� �딆븯怨� IE7,8 �섍꼍�� �꾨땺�뚮쭔 �대�吏� 濡쒕뱶 ��湲� 泥섎━
                if (!this.complete && !this.readyState) {
                    $(this).one('load', function () {
                        if (this.complete) {
                            slideObj.goToSlide(next);
                        }
                    });
                    imgLoad = false;
                }
            });
        }
        return imgLoad;
    }
};

// BXSLIDER-DEFAULT 珥덇린�� �덉쇅議곌굔
// �ㅼ쓬 �대옒�ㅺ� 議댁옱�쒕떎硫� 珥덇린�뷀븯吏� �딅뒗��
var exceptElements = [
    '.loaded',
    '.top_open_box',
    '.ly_movie_bx'
];
var sliderObserver = null;
$(function() {

    /* ie8,ie7 ���� forEach 湲곕뒫 異붽� */
    if (!('forEach' in Array.prototype)) {
        Array.prototype.forEach= function(action, that /*opt*/) {
            for (var i= 0, n= this.length; i<n; i++)
                if (i in this)
                    action.call(that, this[i], i, this);
        };
    }

    // �� document load媛� �꾨땶 window 濡쒕뱶 �댄썑 �щ씪�대뱶 �묐룞�쒖옉
    // IntersectionObserver �대옒�� 吏��먯뿬遺� �뺤씤
    if (typeof IntersectionObserver !== 'undefined') {
        $(window).on('load', function () {
            sliderObserver = new IntersectionObserver(function (entries) {
                for (var i in entries) {
                    var entry = entries[i];
                    if (entry.isIntersecting) {
                        var slideObj = $(entry.target).get(0);
                        __globalBxslider.init(slideObj);
                    }
                }
            }, { root : null });
            $('.bxslider-default').not(exceptElements.join(',')).each(function () {
                sliderObserver.observe(this);
            });
        });
    } else {
        $(window).on('load scroll', function () {
            __globalBxslider.init($('.bxslider-default').not(exceptElements.join(',')));
        });
    }

    $(window).on('load', function () {
        /* tab �대��� bxslider媛� �덉쓣�� �ъ슜 */
        $('[class*="js-tab"] a[href*="#"]').on('click', function () {
            __globalBxslider.resize();
            $(window).trigger('scroll'); // lazy load
        });
        $('[class*="js-tab-type1"] a[href*="#"]').on('click', function () {
            __globalBxslider.resize();
            $(window).trigger('scroll'); // lazy load
        });
        $('[class*="js-tab-type2"] a[href*="#"]').on('click', function () {
            __globalBxslider.resize();
            $(window).trigger('scroll'); // lazy load
        });
        $('[class*="js-tab-type3"] a[href*="#"]').on('click', function () {
            __globalBxslider.resize();
            $(window).trigger('scroll'); // lazy load
        });
    });
    // �� document load媛� �꾨땶 window 濡쒕뱶 �댄썑 �щ씪�대뱶 �묐룞 ��

    $(window).trigger('old-tab')

});


// �� $.fn.visible Jquery �ъ슜�� �⑥닔 異붽��쒖옉
(function($){

    /**
     * JQUERY 媛앹껜 �붾㈃�몄텧�щ� 寃���
     */
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        // IE7/8�� �뺤긽�곸쑝濡� 怨꾩궛�� 遺덇��섎�濡� ��긽 蹂댁씠�� �곹깭濡� 泥섎━
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('MSIE 7') > 0 || userAgent.indexOf('MSIE 8') > 0) {
            return true;
        }

        if (this.length < 1) return false;

        var result = true;
        if (typeof IntersectionObserver !== 'undefined') { // Class base viewport泥댄겕�� �댁쟾怨쇱젙�먯꽌 泥댄겕
            return true;
        } else {    // Window Base
            // Set direction default to 'both'.
            direction = direction || 'both';

            var $t          = this.length > 1 ? this.eq(0) : this,
                isContained = typeof container !== 'undefined' && container !== null,
                $c	  = isContained ? $(container) : $w,
                wPosition        = isContained ? $c.position() : 0,
                t          = $t.get(0),
                vpWidth    = $c.outerWidth(),
                vpHeight    = $c.outerHeight(),
                clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

            if (typeof t.getBoundingClientRect === 'function'){

                // Use this native browser method, if available.
                var rec = t.getBoundingClientRect(),
                    tViz = isContained ?
                        rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                        rec.top >= 0 && rec.top < vpHeight,
                    bViz = isContained ?
                        rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                        rec.bottom > 0 && rec.bottom <= vpHeight,
                    lViz = isContained ?
                        rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                        rec.left >= 0 && rec.left <  vpWidth,
                    rViz = isContained ?
                        rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                        rec.right > 0 && rec.right <= vpWidth,
                    vVisible  = partial ? tViz || bViz : tViz && bViz,
                    hVisible  = partial ? lViz || rViz : lViz && rViz,
                    vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                    hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

                if(direction === 'both')
                    result = clientSize && vVisible && hVisible;
                else if(direction === 'vertical')
                    result = clientSize && vVisible;
                else if(direction === 'horizontal')
                    result = clientSize && hVisible;
            } else {
                var viewTop = isContained ? 0 : wPosition,
                    viewBottom      = viewTop + vpHeight,
                    viewLeft        = $c.scrollLeft(),
                    viewRight      = viewLeft + vpWidth,
                    position          = $t.position(),
                    _top            = position.top,
                    _bottom        = _top + $t.height(),
                    _left          = position.left,
                    _right          = _left + $t.width(),
                    compareTop      = partial === true ? _bottom : _top,
                    compareBottom  = partial === true ? _top : _bottom,
                    compareLeft    = partial === true ? _right : _left,
                    compareRight    = partial === true ? _left : _right;

                if(direction === 'both')
                    result = !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
                else if(direction === 'vertical')
                    result = !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
                else if(direction === 'horizontal')
                    result = !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            }
            return result;
        }

    };

})(jQuery);
// �� $.fn.visible Jquery �ъ슜�� �⑥닔 異붽���