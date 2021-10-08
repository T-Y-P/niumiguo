;;
(function (_0xf1b8x1) {
    _0xf1b8x1['fn']['superfish'] = function (_0xf1b8x2) {
        var _0xf1b8x3 = _0xf1b8x1['fn']['superfish'],
            _0xf1b8x4 = _0xf1b8x3['c'],
            _0xf1b8x5 = _0xf1b8x1(['<span class="', _0xf1b8x4['arrowClass'], '"> &#187;</span>']['join']('')),
            _0xf1b8x6 = function () {
                var _0xf1b8xa = _0xf1b8x1(this),
                    _0xf1b8xb = _0xf1b8x8(_0xf1b8xa);
                clearTimeout(_0xf1b8xb['sfTimer']);
                _0xf1b8xa['showSuperfishUl']()['siblings']()['hideSuperfishUl']()
            },
            _0xf1b8x7 = function () {
                var _0xf1b8xa = _0xf1b8x1(this),
                    _0xf1b8xb = _0xf1b8x8(_0xf1b8xa),
                    _0xf1b8xc = _0xf1b8x3['op'];
                clearTimeout(_0xf1b8xb['sfTimer']);
                _0xf1b8xb['sfTimer'] = setTimeout(function () {
                        _0xf1b8xc['retainPath'] = (_0xf1b8x1['inArray'](_0xf1b8xa[0], _0xf1b8xc.$path) > -1);
                        _0xf1b8xa['hideSuperfishUl']();
                        if (_0xf1b8xc['$path']['length'] && _0xf1b8xa['parents'](['li.', _0xf1b8xc['hoverClass']]['join'](''))['length'] < 1) {
                            _0xf1b8x6['call'](_0xf1b8xc.$path)
                        }
                    }, _0xf1b8xc['delay'])
            },
            _0xf1b8x8 = function (_0xf1b8xd) {
                var _0xf1b8xb = _0xf1b8xd['parents'](['ul.', _0xf1b8x4['menuClass'], ':first']['join'](''))[0];
                _0xf1b8x3['op'] = _0xf1b8x3['o'][_0xf1b8xb['serial']];
                return _0xf1b8xb
            },
            _0xf1b8x9 = function (_0xf1b8xe) {
                _0xf1b8xe['addClass'](_0xf1b8x4['anchorClass'])['append'](_0xf1b8x5['clone']())
            };
        return this['each'](function () {
                var _0xf1b8x10 = this['serial'] = _0xf1b8x3['o']['length'];
                var _0xf1b8xc = _0xf1b8x1['extend']({}, _0xf1b8x3['defaults'], _0xf1b8x2);
                _0xf1b8xc['$path'] = _0xf1b8x1('li.' + _0xf1b8xc['pathClass'], this)['slice'](0, _0xf1b8xc['pathLevels'])['each'](function () {
                    _0xf1b8x1(this)['addClass']([_0xf1b8xc['hoverClass'], _0xf1b8x4['bcClass']]['join'](' '))['filter']('li:has(ul)')['removeClass'](_0xf1b8xc['pathClass'])
                });
                _0xf1b8x3['o'][_0xf1b8x10] = _0xf1b8x3['op'] = _0xf1b8xc;
                _0xf1b8x1('li:has(ul)', this)[(_0xf1b8x1['fn']['hoverIntent'] && !_0xf1b8xc['disableHI']) ? 'hoverIntent' : 'hover'](_0xf1b8x6, _0xf1b8x7)['each'](function () {
                    if (_0xf1b8xc['autoArrows']) {
                        _0xf1b8x9(_0xf1b8x1('>a:first-child', this))
                    }
                })['not']('.' + _0xf1b8x4['bcClass'])['hideSuperfishUl']();
                var _0xf1b8xe = _0xf1b8x1('a', this);
                _0xf1b8xe['each'](function (_0xf1b8x11) {
                    var _0xf1b8x12 = _0xf1b8xe['eq'](_0xf1b8x11)['parents']('li');
                    _0xf1b8xe['eq'](_0xf1b8x11)['focus'](function () {
                        _0xf1b8x6['call'](_0xf1b8x12)
                    })['blur'](function () {
                        _0xf1b8x7['call'](_0xf1b8x12)
                    })
                });
                _0xf1b8xc['onInit']['call'](this)
            })['each'](function () {
                var _0xf1b8xf = [_0xf1b8x4['menuClass']];
                if (_0xf1b8x3['op']['dropShadows'] && !(_0xf1b8x1['browser']['msie'] && _0xf1b8x1['browser']['version'] < 7)) {
                    _0xf1b8xf['push'](_0xf1b8x4['shadowClass'])
                };
                _0xf1b8x1(this)['addClass'](_0xf1b8xf['join'](' '))
            })
    };
    var _0xf1b8x3 = _0xf1b8x1['fn']['superfish'];
    _0xf1b8x3['o'] = [];
    _0xf1b8x3['op'] = {};
    _0xf1b8x3['IE7fix'] = function () {
        var _0xf1b8xc = _0xf1b8x3['op'];
        if (_0xf1b8x1['browser']['msie'] && _0xf1b8x1['browser']['version'] > 6 && _0xf1b8xc['dropShadows'] && _0xf1b8xc['animation']['opacity'] != undefined) {
            this['toggleClass'](_0xf1b8x3['c']['shadowClass'] + '-off')
        }
    };
    _0xf1b8x3['c'] = {
        bcClass: 'sf-breadcrumb',
        menuClass: 'sf-js-enabled',
        anchorClass: 'sf-with-ul',
        arrowClass: 'sf-sub-indicator',
        shadowClass: 'sf-shadow'
    };
    _0xf1b8x3['defaults'] = {
        hoverClass: 'sfHover',
        pathClass: 'overideThisToUse',
        pathLevels: 1,
        delay: 350,
        animation: {
            opacity: 'show'
        },
        speed: 'normal',
        autoArrows: true,
        dropShadows: true,
        disableHI: false,
        onInit: function () {},
        onBeforeShow: function () {},
        onShow: function () {},
        onHide: function () {}
    };
    _0xf1b8x1['fn']['extend']({
        hideSuperfishUl: function () {
            var _0xf1b8xc = _0xf1b8x3['op'],
                _0xf1b8x13 = (_0xf1b8xc['retainPath'] === true) ? _0xf1b8xc['$path'] : '';
            _0xf1b8xc['retainPath'] = false;
            var _0xf1b8x14 = _0xf1b8x1(['li.', _0xf1b8xc['hoverClass']]['join'](''), this)['add'](this)['not'](_0xf1b8x13)['removeClass'](_0xf1b8xc['hoverClass'])['find']('>ul')['hide']()['css']('visibility', 'hidden');
            _0xf1b8xc['onHide']['call'](_0xf1b8x14);
            return this
        },
        showSuperfishUl: function () {
            var _0xf1b8xc = _0xf1b8x3['op'],
                _0xf1b8x15 = _0xf1b8x3['c']['shadowClass'] + '-off',
                _0xf1b8x14 = this['addClass'](_0xf1b8xc['hoverClass'])['find']('>ul:hidden')['css']('visibility', 'visible');
            _0xf1b8x3['IE7fix']['call'](_0xf1b8x14);
            _0xf1b8xc['onBeforeShow']['call'](_0xf1b8x14);
            _0xf1b8x14['animate'](_0xf1b8xc['animation'], _0xf1b8xc['speed'], function () {
                    _0xf1b8x3['IE7fix']['call'](_0xf1b8x14);
                    _0xf1b8xc['onShow']['call'](_0xf1b8x14)
                });
            return this
        }
    })
})(jQuery);
