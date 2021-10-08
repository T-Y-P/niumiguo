function goTop() {
    $(window)['scroll'](function (_0x7b7ax2) {
        if ($(window)['scrollTop']() > 100) {
            $('.gotop')['fadeIn'](350)['css']('display', 'block')
        } else {
            $('.gotop')['fadeOut'](350)['css']('display', 'none')
        }
    });
    $('.gotop')['click'](function (_0x7b7ax2) {
        $('body,html')['animate']({
            scrollTop: 0
        }, 500);
        return false
    })
}
$(document)['ready'](function () {
    if ($('.fixed-bottom')['is'](':visible')) {
        $('#wrapper')['css']('paddingBottom', $('.fixed-bottom')['height']())
    } else {};
    goTop();
    dataAnimate();
    $('.language ul.sf-menu')['superfish']({
        delay: 500,
        animation: {
            opacity: 'fast',
            height: 'show'
        },
        speed: 'fast',
        autoArrows: true,
        dropShadows: false
    });
    $('.main-nav ul.sf-menu')['superfish']({
        delay: 500,
        animation: {
            opacity: 'fast',
            height: 'show'
        },
        speed: 'fast',
        autoArrows: true,
        dropShadows: false
    });
    $('.main-nav ul.sf-menu > li')['last']()['addClass']('last')['end']()['hover'](function () {
        $(this)['addClass']('nav-hover')
    }, function () {
        $(this)['removeClass']('nav-hover')
    });
    $('.main-nav li a, .logo a')['click'](function () {
        if ($(this)['attr']('target') != '_blank') {
            if ($(this)['attr']('href') != 'javascript:;' && $(this)['attr']('href') != '#') {
                return _0x7b7ax3($(this)['attr']('href'))
            }
        }
    });

    function _0x7b7ax3(_0x7b7ax4) {
        $('#wrapper')['css']({
            "\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E": 'bounceIn 0.5s .25s ease both',
            "\x2D\x6D\x6F\x7A\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E": 'bounceIn 1s .25s ease both',
            "\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E": 'bounceIn 0.5s .25s ease both'
        });
        $('body')['append']('<div class=\'page-cover\'></div>')['css']('position', 'relative');
        $('.page-cover')['delay'](600)['animate']({
            "\x68\x65\x69\x67\x68\x74": $(document)['height']()
        }, 800, null, function () {
            location['href'] = _0x7b7ax4
        });
        return false
    }
    $('.tabs-nav')['tabs'](' > .tabs-panes > div');
    $('.tabs-nav > li > a')['click'](function () {
        var _0x7b7ax5 = $(this)['parents']('.tabs-nav')['find']('li')['index']($(this)['parent']());
        if ($(this)['parents']('.tabs-default')['find']('.tab-box')['eq'](_0x7b7ax5)['find']('.scrollable-default')['length'] > 0) {
            $('.scrollable-default')['carouFredSel']({
                width: '100%',
                infinite: false,
                circular: false,
                auto: {
                    pauseOnHover: true,
                    timeoutDuration: 3500
                },
                swipe: {
                    onTouch: true,
                    onMouse: true
                },
                prev: {
                    button: function () {
                        return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-prev')
                    }
                },
                next: {
                    button: function () {
                        return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-next')
                    }
                }
            });
            $('.scrollable-default')['parents']('.scrollable')['css']('overflow', 'visible')
        };
        if ($(this)['parents']('.tabs-default')['find']('.tab-box')['eq'](_0x7b7ax5)['find']('.full-scrollable-default')['length'] > 0) {
            $('.full-scrollable-default')['carouFredSel']({
                infinite: false,
                circular: false,
                auto: false,
                swipe: {
                    onTouch: true,
                    onMouse: true
                },
                responsive: true,
                items: {
                    visible: {
                        min: 2,
                        max: 8
                    }
                },
                prev: {
                    button: function () {
                        return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-prev')
                    }
                },
                next: {
                    button: function () {
                        return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-next')
                    }
                }
            })
        };
        if ($(this)['parents']('.tabs-default')['find']('.tab-box')['eq'](_0x7b7ax5)['find']('.pgwSlideshow-gallery')['length'] > 0) {
            $('.pgwSlideshow-gallery ')['find']('.ps-next')['click']()
        }
    });
    $('.accordion')['tabs']('.accordion .accordion-pane', {
        tabs: '.accordion-handle',
        effect: 'slide',
        initialIndex: 0
    });
    $['tools']['tabs']['addEffect']('slide', function (_0x7b7ax6, _0x7b7ax7) {
        this['getPanes']()['slideUp']('fast')['eq'](_0x7b7ax6)['slideDown']('fast');
        _0x7b7ax7['call']()
    });
    $('.tab-round > .tabs-nav > li > a')['click'](function () {
        $(this)['nextAll']('.line-v')['addClass']('line-v-c');
        $(this)['parent']('li')['siblings']('li')['find']('.line-v')['removeClass']('line-v-c')
    });
    $('.pgwSlideshow-gallery')['pgwSlideshow']({
        mainClassName: 'pgwSlideshow-gallery pgwSlideshow'
    });
    $('.pgwSlideshow-gallery-simple')['pgwSlideshow']({
        mainClassName: 'pgwSlideshow-gallery-simple pgwSlideshow',
        displayList: false
    });
    $('.pgwSlideshow-gallery-zoom')['pgwSlideshow']({
        mainClassName: 'pgwSlideshow-gallery-zoom pgwSlideshow',
        displayControls: false
    });
    $('.qhd-content table tbody>tr')['hover'](function () {
        $(this)['addClass']('trhover')
    }, function () {
        $(this)['removeClass']('trhover')
    });
    $('.qhd-content table')['each'](function () {
        if (!$(this)['parent']()['hasClass']('table-responsive')) {
            $(this)['wrap']('<div class=\'table-responsive\'></div>')
        }
    });
    $('.fixed-left')['fixed']({
        halfTop: true
    });
    $('.fixed-right')['fixed']({
        halfTop: true
    });
    $('.service-close-btn')['click'](function () {
        var _0x7b7ax8 = $(this)['parents']('.service-max'),
            _0x7b7ax9 = _0x7b7ax8['next']('.service-min');
        _0x7b7ax9['show']();
        _0x7b7ax8['hide']()
    });
    $('.service-open-btn')['click'](function () {
        var _0x7b7ax8 = $(this)['prev']('.service-max'),
            _0x7b7axa = $(this)['parents']('.fixed');
        $(this)['hide']();
        _0x7b7ax8['show']()
    });
    $('.link-fixed-side > ul > li')['each'](function () {
        $(this)['hover'](function () {
            $(this)['addClass']('active')['find']('.link-summary')['show']()
        }, function () {
            $(this)['removeClass']('active')['find']('.link-summary')['hide']()
        });
        if ($(this)['find']('a')['attr']('href')['indexOf']('#popup') != -1) {
            $(this)['find']('a')['addClass']('popup-show-btn')
        }
    });
    $('.fancybox-video-play')['fancybox']({
        "\x61\x75\x74\x6F\x53\x63\x61\x6C\x65": false,
        "\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x49\x6E": 'elastic',
        "\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x4F\x75\x74": 'elastic',
        "\x68\x69\x64\x65\x4F\x6E\x4F\x76\x65\x72\x6C\x61\x79\x43\x6C\x69\x63\x6B": false,
        "\x63\x65\x6E\x74\x65\x72\x4F\x6E\x53\x63\x72\x6F\x6C\x6C": true,
        "\x6F\x76\x65\x72\x6C\x61\x79\x43\x6F\x6C\x6F\x72": '#000',
        "\x70\x61\x64\x64\x69\x6E\x67": '5'
    });
    $('a')['each'](function () {
        if (typeof($(this)['attr']('href')) != 'undefined' && $(this)['attr']('href')['indexOf']('#popup') != -1) {
            $(this)['addClass']('popup-show-btn')
        }
    });
    $('.popup-show-btn')['click'](function () {
        $('.popup')['show']();
        $('.popup-overlay')['height']($(document)['height']());
        $('.popup-content')['css']({
            marginLeft: -($('.popup-content')['outerWidth']() / 2),
            marginTop: -($('.popup-content')['outerHeight']() / 2)
        });
        $('.popup-close-btn')['click'](function () {
            $(this)['parents']('.popup')['hide']()
        });
        return false
    });
    var _0x7b7axb = $(window)['width']();
    if (_0x7b7axb < 1000) {
        $('.article-detail-fancybox')['css']('width', _0x7b7axb - 80)
    };
    var _0x7b7axc = device['mobile'](),
        _0x7b7axd = device['tablet'](),
        _0x7b7axe = device['iphone'](),
        _0x7b7axf = device['ipad']();
    if (_0x7b7axc || _0x7b7axd || _0x7b7axe || _0x7b7axf) {
            $('a')['not']('[data-mobile-target="_blank"]')['removeAttr']('target')
        }
});
$(window)['load'](function () {
    $('.scrollable-default')['carouFredSel']({
        width: '100%',
        infinite: false,
        auto: {
            pauseOnHover: true,
            timeoutDuration: 3500
        },
        swipe: {
            onTouch: true,
            onMouse: true
        },
        prev: {
            button: function () {
                return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-prev')
            }
        },
        next: {
            button: function () {
                return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-next')
            }
        }
    });
    $('.scrollable-default')['parents']('.scrollable')['css']('overflow', 'visible');
    $('.full-scrollable-default')['carouFredSel']({
        infinite: false,
        circular: false,
        auto: false,
        swipe: {
            onTouch: true,
            onMouse: true
        },
        responsive: true,
        items: {
            visible: {
                min: 2,
                max: 8
            }
        },
        prev: {
            button: function () {
                return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-prev')
            }
        },
        next: {
            button: function () {
                return $(this)['parent']()['next']('.carousel-direction')['find']('.carousel-next')
            }
        }
    });
    $('.full-scrollable-default')['parents']('.caroufredsel_wrapper')['css']({
        "\x68\x65\x69\x67\x68\x74": ($('.full-scrollable-default')['find']('li')['outerHeight']()) + 'px'
    });
    if ($('.izotope-container')['length']) {
        $('.izotope-container')['isotope']({
            itemSelector: '.izotope-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        })
    }
});
$(window)['bind']('load resize', function () {
    var _0x7b7ax10 = $('.post-list');
    _0x7b7ax10['each'](function () {
        var _0x7b7ax11 = $(this)['find']('.post-img');
        var _0x7b7ax12 = $(this)['find']('.post-text-box');
        var _0x7b7ax13 = $(this)['find']('.post-text');
        var _0x7b7ax14 = $(this)['find']('.post-text-summary');
        var _0x7b7ax15 = _0x7b7ax11['eq'](0)['height']();
        var _0x7b7ax16 = 0;
        _0x7b7ax11['each'](function () {
            _0x7b7ax15 = $(this)['height']() > _0x7b7ax15 ? $(this)['height']() : _0x7b7ax15
        })['find']('img')['height'](_0x7b7ax15);
        _0x7b7ax12['each'](function () {
            $(this)['height'](_0x7b7ax15 - parseInt($(this)['css']('paddingTop')) - parseInt($(this)['css']('paddingBottom')))
        });
        _0x7b7ax14['each'](function () {
            _0x7b7ax16 = _0x7b7ax15 - $(this)['prev']('h2')['height']() - parseInt($(this)['prev']('h2')['css']('marginBottom')) - parseInt($(this)['parent']('.post-text')['css']('paddingBottom')) * 2 - $(this)['next']('.post-text-detail')['height']() - 10;
            if ($(this)['height']() > _0x7b7ax16) {
                $(this)['height'](_0x7b7ax16)
            }
        });
        if ($(this)['hasClass']('post-list-3col')) {
            $(this)['find']('.post-list-item-spec')['find']('.post-img')['css']('top', _0x7b7ax15);
            $(this)['find']('.post-list-item-spec')['find']('.post-text-box')['css']('top', -_0x7b7ax15)
        }
    })
});
