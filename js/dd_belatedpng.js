var DD_belatedPNG = {
    ns: 'DD_belatedPNG',
    imgSize: {},
    delay: 10,
    nodesFixed: 0,
    createVmlNameSpace: function () {
        if (document['namespaces'] && !document['namespaces'][this['ns']]) {
            document['namespaces']['add'](this['ns'], 'urn:schemas-microsoft-com:vml')
        }
    },
    createVmlStyleSheet: function () {
        var _0xb214x2, _0xb214x3;
        _0xb214x2 = document['createElement']('style');
        _0xb214x2['setAttribute']('media', 'screen');
        document['documentElement']['firstChild']['insertBefore'](_0xb214x2, document['documentElement']['firstChild']['firstChild']);
        if (_0xb214x2['styleSheet']) {
            _0xb214x2 = _0xb214x2['styleSheet'];
            _0xb214x2['addRule'](this['ns'] + '\:*', '{behavior:url(#default#VML)}');
            _0xb214x2['addRule'](this['ns'] + '\:shape', 'position:absolute;');
            _0xb214x2['addRule']('img.' + this['ns'] + '_sizeFinder', 'behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;');
            this['screenStyleSheet'] = _0xb214x2;
            _0xb214x3 = document['createElement']('style');
            _0xb214x3['setAttribute']('media', 'print');
            document['documentElement']['firstChild']['insertBefore'](_0xb214x3, document['documentElement']['firstChild']['firstChild']);
            _0xb214x3 = _0xb214x3['styleSheet'];
            _0xb214x3['addRule'](this['ns'] + '\:*', '{display: none !important;}');
            _0xb214x3['addRule']('img.' + this['ns'] + '_sizeFinder', '{display: none !important;}')
        }
    },
    readPropertyChange: function () {
        var _0xb214x2, _0xb214x4, _0xb214x3;
        _0xb214x2 = event['srcElement'];
        if (!_0xb214x2['vmlInitiated']) {
            return
        };
        if (event['propertyName']['search']('background') != -1 || event['propertyName']['search']('border') != -1) {
            DD_belatedPNG['applyVML'](_0xb214x2)
        };
        if (event['propertyName'] == 'style.display') {
            _0xb214x4 = (_0xb214x2['currentStyle']['display'] == 'none') ? 'none' : 'block';
            for (_0xb214x3 in _0xb214x2['vml']) {
                if (_0xb214x2['vml']['hasOwnProperty'](_0xb214x3)) {
                    _0xb214x2['vml'][_0xb214x3]['shape']['style']['display'] = _0xb214x4
                }
            }
        };
        if (event['propertyName']['search']('filter') != -1) {
            DD_belatedPNG['vmlOpacity'](_0xb214x2)
        }
    },
    vmlOpacity: function (_0xb214x2) {
        if (_0xb214x2['currentStyle']['filter']['search']('lpha') != -1) {
            var _0xb214x3 = _0xb214x2['currentStyle']['filter'];
            _0xb214x3 = parseInt(_0xb214x3['substring'](_0xb214x3['lastIndexOf']('=') + 1, _0xb214x3['lastIndexOf'](')')), 10) / 100;
            _0xb214x2['vml']['color']['shape']['style']['filter'] = _0xb214x2['currentStyle']['filter'];
            _0xb214x2['vml']['image']['fill']['opacity'] = _0xb214x3
        }
    },
    handlePseudoHover: function (_0xb214x3) {
        setTimeout(function () {
            DD_belatedPNG['applyVML'](_0xb214x3)
        }, 1)
    },
    fix: function (_0xb214x3) {
        if (this['screenStyleSheet']) {
            var _0xb214x4, _0xb214x2;
            _0xb214x4 = _0xb214x3['split'](',');
            for (_0xb214x2 = 0; _0xb214x2 < _0xb214x4['length']; _0xb214x2++) {
                this['screenStyleSheet']['addRule'](_0xb214x4[_0xb214x2], 'behavior:expression(DD_belatedPNG.fixPng(this))')
            }
        }
    },
    applyVML: function (_0xb214x3) {
        _0xb214x3['runtimeStyle']['cssText'] = '';
        this['vmlFill'](_0xb214x3);
        this['vmlOffsets'](_0xb214x3);
        this['vmlOpacity'](_0xb214x3);
        if (_0xb214x3['isImg']) {
            this['copyImageBorders'](_0xb214x3)
        }
    },
    attachHandlers: function (_0xb214x5) {
        var _0xb214x6, _0xb214x4, _0xb214x7, _0xb214x8, _0xb214x2, _0xb214x9;
        _0xb214x6 = this;
        _0xb214x4 = {
            resize: 'vmlOffsets',
            move: 'vmlOffsets'
        };
        if (_0xb214x5['nodeName'] == 'A') {
            _0xb214x8 = {
                mouseleave: 'handlePseudoHover',
                mouseenter: 'handlePseudoHover',
                focus: 'handlePseudoHover',
                blur: 'handlePseudoHover'
            };
            for (_0xb214x2 in _0xb214x8) {
                if (_0xb214x8['hasOwnProperty'](_0xb214x2)) {
                    _0xb214x4[_0xb214x2] = _0xb214x8[_0xb214x2]
                }
            }
        };
        for (_0xb214x9 in _0xb214x4) {
            if (_0xb214x4['hasOwnProperty'](_0xb214x9)) {
                _0xb214x7 = function () {
                    _0xb214x6[_0xb214x4[_0xb214x9]](_0xb214x5)
                };
                _0xb214x5['attachEvent']('on' + _0xb214x9, _0xb214x7)
            }
        };
        _0xb214x5['attachEvent']('onpropertychange', this['readPropertyChange'])
    },
    giveLayout: function (_0xb214x3) {
        _0xb214x3['style']['zoom'] = 1;
        if (_0xb214x3['currentStyle']['position'] == 'static') {
            _0xb214x3['style']['position'] = 'relative'
        }
    },
    copyImageBorders: function (_0xb214x2) {
        var _0xb214x4, _0xb214x3;
        _0xb214x4 = {
            borderStyle: true,
            borderWidth: true,
            borderColor: true
        };
        for (_0xb214x3 in _0xb214x4) {
            if (_0xb214x4['hasOwnProperty'](_0xb214x3)) {
                _0xb214x2['vml']['color']['shape']['style'][_0xb214x3] = _0xb214x2['currentStyle'][_0xb214x3]
            }
        }
    },
    vmlFill: function (_0xb214x8) {
        if (!_0xb214x8['currentStyle']) {
            return
        } else {
            var _0xb214x6, _0xb214x9, _0xb214x7, _0xb214x2, _0xb214x3, _0xb214x4;
            _0xb214x6 = _0xb214x8['currentStyle']
        };
        for (_0xb214x2 in _0xb214x8['vml']) {
            if (_0xb214x8['vml']['hasOwnProperty'](_0xb214x2)) {
                _0xb214x8['vml'][_0xb214x2]['shape']['style']['zIndex'] = _0xb214x6['zIndex']
            }
        };
        _0xb214x8['runtimeStyle']['backgroundColor'] = '';
        _0xb214x8['runtimeStyle']['backgroundImage'] = '';
        _0xb214x9 = true;
        if (_0xb214x6['backgroundImage'] != 'none' || _0xb214x8['isImg']) {
            if (!_0xb214x8['isImg']) {
                _0xb214x8['vmlBg'] = _0xb214x6['backgroundImage'];
                _0xb214x8['vmlBg'] = _0xb214x8['vmlBg']['substr'](5, _0xb214x8['vmlBg']['lastIndexOf']('")') - 5)
            } else {
                _0xb214x8['vmlBg'] = _0xb214x8['src']
            };
            _0xb214x7 = this;
            if (!_0xb214x7['imgSize'][_0xb214x8['vmlBg']]) {
                _0xb214x3 = document['createElement']('img');
                _0xb214x7['imgSize'][_0xb214x8['vmlBg']] = _0xb214x3;
                _0xb214x3['className'] = _0xb214x7['ns'] + '_sizeFinder';
                _0xb214x3['runtimeStyle']['cssText'] = 'behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;';
                _0xb214x4 = function () {
                    this['width'] = this['offsetWidth'];
                    this['height'] = this['offsetHeight'];
                    _0xb214x7['vmlOffsets'](_0xb214x8)
                };
                _0xb214x3['attachEvent']('onload', _0xb214x4);
                _0xb214x3['src'] = _0xb214x8['vmlBg'];
                _0xb214x3['removeAttribute']('width');
                _0xb214x3['removeAttribute']('height');
                document['body']['insertBefore'](_0xb214x3, document['body']['firstChild'])
            };
            _0xb214x8['vml']['image']['fill']['src'] = _0xb214x8['vmlBg'];
            _0xb214x9 = false
        };
        _0xb214x8['vml']['image']['fill']['on'] = !_0xb214x9;
        _0xb214x8['vml']['image']['fill']['color'] = 'none';
        _0xb214x8['vml']['color']['shape']['style']['backgroundColor'] = _0xb214x6['backgroundColor'];
        _0xb214x8['runtimeStyle']['backgroundImage'] = 'none';
        _0xb214x8['runtimeStyle']['backgroundColor'] = 'transparent'
    },
    vmlOffsets: function (_0xb214x6) {
        var _0xb214xa, _0xb214xb, _0xb214x3, _0xb214x8, _0xb214x7, _0xb214xc, _0xb214x9, _0xb214xd, _0xb214xe, _0xb214x5, _0xb214xf;
        _0xb214xa = _0xb214x6['currentStyle'];
        _0xb214xb = {
            W: _0xb214x6['clientWidth'] + 1,
            H: _0xb214x6['clientHeight'] + 1,
            w: this['imgSize'][_0xb214x6['vmlBg']]['width'],
            h: this['imgSize'][_0xb214x6['vmlBg']]['height'],
            L: _0xb214x6['offsetLeft'],
            T: _0xb214x6['offsetTop'],
            bLW: _0xb214x6['clientLeft'],
            bTW: _0xb214x6['clientTop']
        };
        _0xb214x3 = (_0xb214xb['L'] + _0xb214xb['bLW'] == 1) ? 1 : 0;
        _0xb214x8 = function (_0xb214x2, _0xb214x10, _0xb214x11, _0xb214x4, _0xb214x12, _0xb214x13) {
            _0xb214x2['coordsize'] = _0xb214x4 + ',' + _0xb214x12;
            _0xb214x2['coordorigin'] = _0xb214x13 + ',' + _0xb214x13;
            _0xb214x2['path'] = 'm0,0l' + _0xb214x4 + ',0l' + _0xb214x4 + ',' + _0xb214x12 + 'l0,' + _0xb214x12 + ' xe';
            _0xb214x2['style']['width'] = _0xb214x4 + 'px';
            _0xb214x2['style']['height'] = _0xb214x12 + 'px';
            _0xb214x2['style']['left'] = _0xb214x10 + 'px';
            _0xb214x2['style']['top'] = _0xb214x11 + 'px'
        };
        _0xb214x8(_0xb214x6['vml']['color']['shape'], (_0xb214xb['L'] + (_0xb214x6['isImg'] ? 0 : _0xb214xb['bLW'])), (_0xb214xb['T'] + (_0xb214x6['isImg'] ? 0 : _0xb214xb['bTW'])), (_0xb214xb['W'] - 1), (_0xb214xb['H'] - 1), 0);
        _0xb214x8(_0xb214x6['vml']['image']['shape'], (_0xb214xb['L'] + _0xb214xb['bLW']), (_0xb214xb['T'] + _0xb214xb['bTW']), (_0xb214xb['W']), (_0xb214xb['H']), 1);
        _0xb214x7 = {
            X: 0,
            Y: 0
        };
        if (_0xb214x6['isImg']) {
            _0xb214x7['X'] = parseInt(_0xb214xa['paddingLeft'], 10) + 1;
            _0xb214x7['Y'] = parseInt(_0xb214xa['paddingTop'], 10) + 1
        } else {
            for (_0xb214xe in _0xb214x7) {
                if (_0xb214x7['hasOwnProperty'](_0xb214xe)) {
                    this['figurePercentage'](_0xb214x7, _0xb214xb, _0xb214xe, _0xb214xa['backgroundPosition' + _0xb214xe])
                }
            }
        };
        _0xb214x6['vml']['image']['fill']['position'] = (_0xb214x7['X'] / _0xb214xb['W']) + ',' + (_0xb214x7['Y'] / _0xb214xb['H']);
        _0xb214xc = _0xb214xa['backgroundRepeat'];
        _0xb214x9 = {
            T: 1,
            R: _0xb214xb['W'] + _0xb214x3,
            B: _0xb214xb['H'],
            L: 1 + _0xb214x3
        };
        _0xb214xd = {
            X: {
                b1: 'L',
                b2: 'R',
                d: 'W'
            },
            Y: {
                b1: 'T',
                b2: 'B',
                d: 'H'
            }
        };
        if (_0xb214xc != 'repeat' || _0xb214x6['isImg']) {
            _0xb214x5 = {
                T: (_0xb214x7['Y']),
                R: (_0xb214x7['X'] + _0xb214xb['w']),
                B: (_0xb214x7['Y'] + _0xb214xb['h']),
                L: (_0xb214x7['X'])
            };
            if (_0xb214xc['search']('repeat-') != -1) {
                _0xb214xf = _0xb214xc['split']('repeat-')[1]['toUpperCase']();
                _0xb214x5[_0xb214xd[_0xb214xf]['b1']] = 1;
                _0xb214x5[_0xb214xd[_0xb214xf]['b2']] = _0xb214xb[_0xb214xd[_0xb214xf]['d']]
            };
            if (_0xb214x5['B'] > _0xb214xb['H']) {
                _0xb214x5['B'] = _0xb214xb['H']
            };
            _0xb214x6['vml']['image']['shape']['style']['clip'] = 'rect(' + _0xb214x5['T'] + 'px ' + (_0xb214x5['R'] + _0xb214x3) + 'px ' + _0xb214x5['B'] + 'px ' + (_0xb214x5['L'] + _0xb214x3) + 'px)'
        } else {
            _0xb214x6['vml']['image']['shape']['style']['clip'] = 'rect(' + _0xb214x9['T'] + 'px ' + _0xb214x9['R'] + 'px ' + _0xb214x9['B'] + 'px ' + _0xb214x9['L'] + 'px)'
        }
    },
    figurePercentage: function (_0xb214x6, _0xb214x4, _0xb214x9, _0xb214x3) {
        var _0xb214x2, _0xb214x8;
        _0xb214x8 = true;
        _0xb214x2 = (_0xb214x9 == 'X');
        switch (_0xb214x3) {
        case 'left':
            ;
        case 'top':
            _0xb214x6[_0xb214x9] = 0;
            break;
        case 'center':
            _0xb214x6[_0xb214x9] = 0.5;
            break;
        case 'right':
            ;
        case 'bottom':
            _0xb214x6[_0xb214x9] = 1;
            break;
        default:
            if (_0xb214x3['search']('%') != -1) {
                _0xb214x6[_0xb214x9] = parseInt(_0xb214x3, 10) / 100
            } else {
                _0xb214x8 = false
            }
        };
        _0xb214x6[_0xb214x9] = Math['ceil'](_0xb214x8 ? ((_0xb214x4[_0xb214x2 ? 'W' : 'H'] * _0xb214x6[_0xb214x9]) - (_0xb214x4[_0xb214x2 ? 'w' : 'h'] * _0xb214x6[_0xb214x9])) : parseInt(_0xb214x3, 10));
        if (_0xb214x6[_0xb214x9] % 2 === 0) {
            _0xb214x6[_0xb214x9]++
        };
        return _0xb214x6[_0xb214x9]
    },
    fixPng: function (_0xb214x4) {
        _0xb214x4['style']['behavior'] = 'none';
        var _0xb214x7, _0xb214x2, _0xb214x9, _0xb214x3, _0xb214x6;
        if (_0xb214x4['nodeName'] == 'BODY' || _0xb214x4['nodeName'] == 'TD' || _0xb214x4['nodeName'] == 'TR') {
            return
        };
        _0xb214x4['isImg'] = false;
        if (_0xb214x4['nodeName'] == 'IMG') {
            if (_0xb214x4['src']['toLowerCase']()['search'](/\.png$/) != -1) {
                _0xb214x4['isImg'] = true;
                _0xb214x4['style']['visibility'] = 'hidden'
            } else {
                return
            }
        } else {
            if (_0xb214x4['currentStyle']['backgroundImage']['toLowerCase']()['search']('.png') == -1) {
                return
            }
        };
        _0xb214x7 = DD_belatedPNG;
        _0xb214x4['vml'] = {
            color: {},
            image: {}
        };
        _0xb214x2 = {
            shape: {},
            fill: {}
        };
        for (_0xb214x3 in _0xb214x4['vml']) {
            if (_0xb214x4['vml']['hasOwnProperty'](_0xb214x3)) {
                for (_0xb214x6 in _0xb214x2) {
                    if (_0xb214x2['hasOwnProperty'](_0xb214x6)) {
                        _0xb214x9 = _0xb214x7['ns'] + ':' + _0xb214x6;
                        _0xb214x4['vml'][_0xb214x3][_0xb214x6] = document['createElement'](_0xb214x9)
                    }
                };
                _0xb214x4['vml'][_0xb214x3]['shape']['stroked'] = false;
                _0xb214x4['vml'][_0xb214x3]['shape']['appendChild'](_0xb214x4['vml'][_0xb214x3]['fill']);
                _0xb214x4['parentNode']['insertBefore'](_0xb214x4['vml'][_0xb214x3]['shape'], _0xb214x4)
            }
        };
        _0xb214x4['vml']['image']['shape']['fillcolor'] = 'none';
        _0xb214x4['vml']['image']['fill']['type'] = 'tile';
        _0xb214x4['vml']['color']['fill']['on'] = false;
        _0xb214x7['attachHandlers'](_0xb214x4);
        _0xb214x7['giveLayout'](_0xb214x4);
        _0xb214x7['giveLayout'](_0xb214x4['offsetParent']);
        _0xb214x4['vmlInitiated'] = true;
        _0xb214x7['applyVML'](_0xb214x4)
    }
};
try {
    document['execCommand']('BackgroundImageCache', false, true)
} catch (r) {};
DD_belatedPNG['createVmlNameSpace']();
DD_belatedPNG['createVmlStyleSheet']();
