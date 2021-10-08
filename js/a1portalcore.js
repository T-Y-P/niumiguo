var A1PORTAL_COL_DELIMITER = String['fromCharCode'](16);
var A1PORTAL_ROW_DELIMITER = String['fromCharCode'](15);
var __a1portal_m_bPageLoaded = false;
window['onload'] = __a1portal_Page_OnLoad;

function __a1portal_ClientAPIEnabled() {
    return typeof(a1portal) != 'undefined'
}
function __a1portal_Page_OnLoad() {
    if (__a1portal_ClientAPIEnabled()) {
        var _0x6a58x6 = a1portal['getVar']('__a1portal_pageload');
        if (_0x6a58x6 != null) {
            eval(_0x6a58x6)
        };
        a1portal['dom']['attachEvent'](window, 'onscroll', __a1portal_bodyscroll)
    };
    __a1portal_m_bPageLoaded = true
}
function __a1portal_KeyDown(_0x6a58x8, _0x6a58x9, _0x6a58xa) {
    if (_0x6a58xa == null) {
        _0x6a58xa = window['event']
    };
    if (_0x6a58xa['keyCode'] == _0x6a58x8) {
        eval(unescape(_0x6a58x9));
        return false
    }
}
function __a1portal_bodyscroll() {
    var _0x6a58xc = document['forms']['Form'];
    if (__a1portal_ClientAPIEnabled() && __a1portal_m_bPageLoaded) {
        _0x6a58xc['ScrollTop']['value'] = document['documentElement']['scrollTop'] ? document['documentElement']['scrollTop'] : a1portal['dom']['getByTagName']('body')[0]['scrollTop']
    }
}
function __a1portal_setScrollTop(_0x6a58xe) {
    if (__a1portal_ClientAPIEnabled()) {
        if (_0x6a58xe == null) {
            _0x6a58xe = document['forms']['Form']['ScrollTop']['value']
        };
        var _0x6a58xf = a1portal['getVar']('ScrollToControl');
        if (_0x6a58xf != null && _0x6a58xf['length'] > 0) {
            var _0x6a58x10 = a1portal['dom']['getById'](_0x6a58xf);
            if (_0x6a58x10 != null) {
                _0x6a58xe = a1portal['dom']['positioning']['elementTop'](_0x6a58x10);
                a1portal['setVar']('ScrollToControl', '')
            }
        };
        window['scrollTo'](0, _0x6a58xe)
    }
}
function __a1portal_SetInitialFocus(_0x6a58xf) {
    var _0x6a58x10 = a1portal['dom']['getById'](_0x6a58xf);
    if (_0x6a58x10 != null && __a1portal_CanReceiveFocus(_0x6a58x10)) {
        _0x6a58x10['focus']()
    }
}
function __a1portal_CanReceiveFocus(_0x6a58xa) {
    if (_0x6a58xa['style']['display'] != 'none' && _0x6a58xa['tabIndex'] > -1 && _0x6a58xa['disabled'] == false && _0x6a58xa['style']['visible'] != 'hidden') {
        var _0x6a58x13 = _0x6a58xa['parentElement'];
        while (_0x6a58x13 != null && _0x6a58x13['tagName'] != 'BODY') {
            if (_0x6a58x13['style']['display'] == 'none' || _0x6a58x13['disabled'] || _0x6a58x13['style']['visible'] == 'hidden') {
                return false
            };
            _0x6a58x13 = _0x6a58x13['parentElement']
        };
        return true
    } else {
        return false
    }
}
function __a1portal_ContainerMaxMin_OnClick(_0x6a58x15, _0x6a58x16) {
    var _0x6a58x17 = a1portal['dom']['getById'](_0x6a58x16);
    if (_0x6a58x17 != null) {
        var _0x6a58x18 = _0x6a58x15['childNodes'][0];
        var _0x6a58x19 = _0x6a58x15['getAttribute']('containerid');
        var _0x6a58x1a = _0x6a58x15['getAttribute']('cookieid');
        var _0x6a58x1b = _0x6a58x18['src']['toLowerCase']()['substr'](_0x6a58x18['src']['lastIndexOf']('/'));
        var _0x6a58x1c;
        var _0x6a58x1d;
        var _0x6a58x1e;
        if (a1portal['getVar']('min_icon_' + _0x6a58x19)) {
            _0x6a58x1e = a1portal['getVar']('min_icon_' + _0x6a58x19)
        } else {
            _0x6a58x1e = a1portal['getVar']('min_icon')
        };
        if (a1portal['getVar']('max_icon_' + _0x6a58x19)) {
            _0x6a58x1d = a1portal['getVar']('max_icon_' + _0x6a58x19)
        } else {
            _0x6a58x1d = a1portal['getVar']('max_icon')
        };
        _0x6a58x1c = _0x6a58x1d['toLowerCase']()['substr'](_0x6a58x1d['lastIndexOf']('/'));
        var _0x6a58x1f = 5;
        if (_0x6a58x15['getAttribute']('animf') != null) {
            _0x6a58x1f = new Number(_0x6a58x15['getAttribute']('animf'))
        };
        if (_0x6a58x1b == _0x6a58x1c) {
            _0x6a58x18['src'] = _0x6a58x1e;
            a1portal['dom']['expandElement'](_0x6a58x17, _0x6a58x1f);
            _0x6a58x18['title'] = a1portal['getVar']('min_text');
            if (_0x6a58x1a != null) {
                if (a1portal['getVar']('__a1portal_' + _0x6a58x19 + ':defminimized') == 'true') {
                    a1portal['dom']['setCookie'](_0x6a58x1a, 'true', 365)
                } else {
                    a1portal['dom']['deleteCookie'](_0x6a58x1a)
                }
            } else {
                a1portal['setVar']('__a1portal_' + _0x6a58x19 + '_Visible', 'true')
            }
        } else {
            _0x6a58x18['src'] = _0x6a58x1d;
            a1portal['dom']['collapseElement'](_0x6a58x17, _0x6a58x1f);
            _0x6a58x18['title'] = a1portal['getVar']('max_text');
            if (_0x6a58x1a != null) {
                if (a1portal['getVar']('__a1portal_' + _0x6a58x19 + ':defminimized') == 'true') {
                    a1portal['dom']['deleteCookie'](_0x6a58x1a)
                } else {
                    a1portal['dom']['setCookie'](_0x6a58x1a, 'false', 365)
                }
            } else {
                a1portal['setVar']('__a1portal_' + _0x6a58x19 + '_Visible', 'false')
            }
        };
        return true
    };
    return false
}
function __a1portal_Help_OnClick(_0x6a58x21) {
    var _0x6a58x22 = a1portal['dom']['getById'](_0x6a58x21);
    if (_0x6a58x22 != null) {
        if (_0x6a58x22['style']['display'] == 'none') {
            _0x6a58x22['style']['display'] = ''
        } else {
            _0x6a58x22['style']['display'] = 'none'
        };
        return true
    };
    return false
}
function __a1portal_SectionMaxMin(_0x6a58x18, _0x6a58x16) {
    var _0x6a58x17 = a1portal['dom']['getById'](_0x6a58x16);
    if (_0x6a58x17 != null) {
        var _0x6a58x1d = _0x6a58x18['getAttribute']('max_icon');
        var _0x6a58x1e = _0x6a58x18['getAttribute']('min_icon');
        var _0x6a58x24 = _0x6a58x18['getAttribute']('userctr') != null;
        var _0x6a58x25;
        if (_0x6a58x17['style']['display'] == 'none') {
            _0x6a58x18['src'] = _0x6a58x1e;
            _0x6a58x17['style']['display'] = '';
            if (_0x6a58x24) {
                _0x6a58x25 = 'True'
            } else {
                a1portal['setVar'](_0x6a58x18['id'] + ':exp', 1)
            }
        } else {
            _0x6a58x18['src'] = _0x6a58x1d;
            _0x6a58x17['style']['display'] = 'none';
            if (_0x6a58x24) {
                _0x6a58x25 = 'False'
            } else {
                a1portal['setVar'](_0x6a58x18['id'] + ':exp', 0)
            }
        };
        if (_0x6a58x24) {
            a1portalcore['setUserProp'](_0x6a58x18['getAttribute']('userctr'), _0x6a58x18['getAttribute']('userkey'), _0x6a58x25, null)
        };
        return true
    };
    return false
}
function __a1portal_enableDragDrop() {
    var _0x6a58x27 = a1portal['getVar']('__a1portal_dragDrop')['split'](';');
    var _0x6a58x28;
    a1portal['dom']['positioning']['disableSelectText']();
    var _0x6a58x29 = _0x6a58x27['length'];
    for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x29; _0x6a58x2a++) {
        _0x6a58x28 = _0x6a58x27[_0x6a58x2a]['split'](' ');
        if (_0x6a58x28[0]['length'] > 0) {
            var _0x6a58x2b = a1portal['dom']['getById'](_0x6a58x28[0]);
            var _0x6a58x2c = a1portal['dom']['getById'](_0x6a58x28[1]);
            if (_0x6a58x2c['modulePaneId'] == 'undefined' || _0x6a58x2c['modulePaneId'] == null) {
                _0x6a58x2c['modulePaneId'] = _0x6a58x28[3]
            };
            if (_0x6a58x2c['moveBlockId'] == 'undefined' || _0x6a58x2c['moveBlockId'] == null) {
                _0x6a58x2c['moveBlockId'] = _0x6a58x28[4]
            };
            if (_0x6a58x2c['pagePaneId'] == 'undefined' || _0x6a58x2c['pagePaneId'] == null) {
                _0x6a58x2c['pagePaneId'] = _0x6a58x28[5]
            };
            if (_0x6a58x2b != null && _0x6a58x2c != null) {
                a1portal['dom']['positioning']['enableDragAndDrop'](_0x6a58x2b, _0x6a58x2c)
            }
        }
    }
}
var __a1portal_oPrevSelPane = null;
var __a1portal_oPrevSelModule = null;
var __a1portal_dragPlaceholderId = 'a1portal_drag_placeholder';
var __a1portal_oPrevIIndex = null;
var __a1portal_dragPlaceholder = null;

function __a1portal_dragOver() {
    var _0x6a58x33 = a1portal['dom']['positioning']['dragCont'];
    var _0x6a58x34 = __a1portal_getMostSelectedPane();
    if (_0x6a58x34 != null) {
        var _0x6a58x35 = __a1portal_getPaneControlIndex(_0x6a58x33, _0x6a58x34);
        if (__a1portal_oPrevSelPane != null) {
            if (__a1portal_oPrevSelPane['id'] != _0x6a58x34['id']) {
                __a1portal_oPrevSelPane['pane']['style']['border'] = __a1portal_oPrevSelPane['origBorder']
            } else {
                if (__a1portal_oPrevIIndex == _0x6a58x35 && __a1portal_oPrevSelModule != null) {
                    return
                }
            }
        };
        a1portal['dom']['positioning']['removePlaceholder'](__a1portal_dragPlaceholder, __a1portal_dragPlaceholderId);
        if (__a1portal_oPrevSelPane != null) {
            __a1portal_RecalculatePaneControlDims(__a1portal_oPrevSelPane)
        };
        __a1portal_RecalculatePaneControlDims(_0x6a58x34);
        _0x6a58x34['pane']['style']['outline'] = '1px dotted ' + A1PORTAL_HIGHLIGHT_COLOR;
        var _0x6a58x36;
        var _0x6a58x37;
        var _0x6a58x38;
        var _0x6a58x39;
        var _0x6a58x3a = _0x6a58x34['controls']['length'];
        for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x3a; _0x6a58x2a++) {
            var _0x6a58x3b = _0x6a58x34['controls'][_0x6a58x2a]['id'];
            var _0x6a58x3c = _0x6a58x34['controls'][_0x6a58x2a];
            var _0x6a58x3d = _0x6a58x33['id'];
            if (_0x6a58x35 > _0x6a58x2a && _0x6a58x3b != _0x6a58x3d) {
                _0x6a58x36 = _0x6a58x3c
            };
            if (_0x6a58x35 <= _0x6a58x2a && _0x6a58x3b != _0x6a58x3d) {
                _0x6a58x37 = _0x6a58x3c;
                break
            }
        };
        if (__a1portal_dragPlaceholder == null) {
            __a1portal_dragPlaceholder = document['createElement']('div');
            __a1portal_dragPlaceholder['setAttribute']('id', __a1portal_dragPlaceholderId);
            __a1portal_dragPlaceholder['setAttribute']('class', 'moduleMovePlaceholder');
            __a1portal_dragPlaceholder['style']['border'] = '1px dotted red';
            __a1portal_dragPlaceholder['style']['margin'] = '4px 0px 4px 0px'
        };
        var _0x6a58x3e = a1portal['dom']['positioning']['elementWidth'](_0x6a58x34['pane']);
        if (_0x6a58x3e != null) {
            if (_0x6a58x3e <= _0x6a58x33['elementWidth']) {
                if (_0x6a58x37 != null) {
                    _0x6a58x3e = document['id'](_0x6a58x37['control'])['getSize']()['x']
                } else {
                    if (_0x6a58x36 != null) {
                        _0x6a58x3e = document['id'](_0x6a58x36['control'])['getSize']()['x']
                    }
                };
                __a1portal_dragPlaceholder['style']['width'] = (_0x6a58x3e - 2) + 'px'
            } else {
                __a1portal_dragPlaceholder['style']['width'] = ''
            }
        };
        __a1portal_dragPlaceholder['style']['height'] = '50px';
        if (_0x6a58x37 != null) {
            __a1portal_oPrevSelModule = _0x6a58x37;
            _0x6a58x38 = a1portal['dom']['getNonTextNode'](_0x6a58x37['control']);
            _0x6a58x38['parentNode']['insertBefore'](__a1portal_dragPlaceholder, _0x6a58x38)
        } else {
            if (_0x6a58x36 != null) {
                __a1portal_oPrevSelModule = _0x6a58x36;
                _0x6a58x38 = a1portal['dom']['getNonTextNode'](_0x6a58x36['control']);
                a1portal['dom']['insertAfter'](__a1portal_dragPlaceholder, _0x6a58x38)
            } else {
                _0x6a58x38 = a1portal['dom']['getById'](_0x6a58x34['id']);
                a1portal['dom']['appendChild'](_0x6a58x38, __a1portal_dragPlaceholder)
            }
        };
        __a1portal_oPrevIIndex = _0x6a58x35;
        __a1portal_RecalculatePaneDims()
    }
}
function __a1portal_dragComplete() {
    var _0x6a58x33 = a1portal['dom']['positioning']['dragCont'];
    var _0x6a58x40 = _0x6a58x33['getAttribute']('moduleid');
    var _0x6a58x41 = _0x6a58x33['getAttribute']('moduleidentifier');
    var _0x6a58x34 = __a1portal_getMostSelectedPane();
    var _0x6a58x35;
    if (_0x6a58x34 == null) {
        var _0x6a58x42 = __a1portal_Panes();
        var _0x6a58x43 = _0x6a58x42['length'];
        for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x43; _0x6a58x2a++) {
            if (_0x6a58x42[_0x6a58x2a]['id'] == _0x6a58x33['parentNode']['id']) {
                _0x6a58x34 = _0x6a58x42[_0x6a58x2a]
            }
        }
    };
    if (_0x6a58x34 != null) {
        _0x6a58x35 = __a1portal_getPaneControlIndex(_0x6a58x33, _0x6a58x34);
        __a1portal_MoveToPane(_0x6a58x34, _0x6a58x33, _0x6a58x35);
        a1portal['dom']['positioning']['destroyDragEvent']();
        showPageLoader('');
        a1portal['callPostBack']('MoveToPane', 'moduleid=' + _0x6a58x40, 'moduleidentifier=' + _0x6a58x41, 'pane=' + _0x6a58x34['paneName'], 'order=' + _0x6a58x35 * 2)
    }
}
function __a1portal_MoveToPane(_0x6a58x34, _0x6a58x33, _0x6a58x35) {
    if (_0x6a58x34 != null) {
        var _0x6a58x45 = new Array();
        var _0x6a58x3a = _0x6a58x34['controls']['length'];
        for (var _0x6a58x2a = _0x6a58x35; _0x6a58x2a < _0x6a58x3a; _0x6a58x2a++) {
            if (_0x6a58x34['controls'][_0x6a58x2a]['control']['id'] != _0x6a58x33['id']) {
                _0x6a58x45[_0x6a58x45['length']] = _0x6a58x34['controls'][_0x6a58x2a]['control']
            };
            a1portal['dom']['removeChild'](_0x6a58x34['controls'][_0x6a58x2a]['control'])
        };
        a1portal['dom']['appendChild'](_0x6a58x34['pane'], _0x6a58x33);
        _0x6a58x33['style']['top'] = 0;
        _0x6a58x33['style']['left'] = 0;
        _0x6a58x33['style']['position'] = 'relative';
        var _0x6a58x46 = _0x6a58x45['length'];
        for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x46; _0x6a58x2a++) {
            a1portal['dom']['appendChild'](_0x6a58x34['pane'], _0x6a58x45[_0x6a58x2a])
        };
        __a1portal_RefreshPanes()
    } else {
        _0x6a58x33['style']['top'] = 0;
        _0x6a58x33['style']['left'] = 0;
        _0x6a58x33['style']['position'] = 'relative'
    }
}
function __a1portal_RefreshPanes() {
    var _0x6a58x48 = a1portal['getVar']('__a1portal_Panes')['split'](';');
    var _0x6a58x49 = a1portal['getVar']('__a1portal_PaneNames')['split'](';');
    __a1portal_m_aryPanes = new Array();
    var _0x6a58x4a = _0x6a58x48['length'];
    for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x4a; _0x6a58x2a++) {
        if (_0x6a58x48[_0x6a58x2a]['length'] > 0) {
            __a1portal_m_aryPanes[__a1portal_m_aryPanes['length']] = new __a1portal_Pane(a1portal['dom']['getById'](_0x6a58x48[_0x6a58x2a]), _0x6a58x49[_0x6a58x2a])
        }
    }
}
var __a1portal_m_aryPanes;
var __a1portal_m_aryModules;

function __a1portal_Panes() {
    if (__a1portal_m_aryPanes == null) {
        __a1portal_m_aryPanes = new Array();
        __a1portal_RefreshPanes()
    };
    return __a1portal_m_aryPanes
}
function __a1portal_RecalculatePaneDims() {
    var _0x6a58x42 = __a1portal_Panes();
    var _0x6a58x4f = _0x6a58x42['length'];
    for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x4f; _0x6a58x2a++) {
        var _0x6a58x34 = _0x6a58x42[_0x6a58x2a];
        _0x6a58x34['dims'] = a1portal['dom']['positioning']['dims2'](_0x6a58x34['pane'])
    }
}
function __a1portal_RecalculatePaneControlDims(_0x6a58x34) {
    if (_0x6a58x34 != null) {
        var _0x6a58x3c = _0x6a58x34['controls'];
        var _0x6a58x3a = _0x6a58x3c['length'];
        var _0x6a58x33 = null;
        for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x3a; _0x6a58x2a++) {
            _0x6a58x33 = _0x6a58x3c[_0x6a58x2a];
            _0x6a58x33['dims'] = a1portal['dom']['positioning']['dims2'](_0x6a58x33['control'])
        }
    }
}
function __a1portal_Modules(_0x6a58x40) {
    if (__a1portal_m_aryModules == null) {
        __a1portal_RefreshPanes()
    };
    return __a1portal_m_aryModules[_0x6a58x40]
}
function __a1portal_getMostSelectedPane() {
    var _0x6a58x53 = new Array();
    var _0x6a58x54 = a1portal['dom']['event']['object'];
    var _0x6a58x55 = document['documentElement'];
    var _0x6a58x56 = document['body'];
    var _0x6a58x57 = _0x6a58x54['pageX'] || (_0x6a58x54['clientX'] + (_0x6a58x55['scrollLeft'] || _0x6a58x56['scrollLeft']));
    var _0x6a58x58 = _0x6a58x54['pageY'] || (_0x6a58x54['clientY'] + (_0x6a58x55['scrollTop'] || _0x6a58x56['scrollTop']));
    if (__a1portal_oPrevSelPane != null) {
        var _0x6a58x59 = __a1portal_oPrevSelPane['dims'];
        if ((_0x6a58x57 > _0x6a58x59['l']) && (_0x6a58x58 > _0x6a58x59['t']) && (_0x6a58x57 < (_0x6a58x59['l'] + _0x6a58x59['w'])) && (_0x6a58x58 < (_0x6a58x59['t'] + _0x6a58x59['h']))) {
            _0x6a58x53[0] = __a1portal_oPrevSelPane
        }
    };
    if (_0x6a58x53['length'] == 0) {
        var _0x6a58x42 = __a1portal_Panes();
        var _0x6a58x4f = _0x6a58x42['length'];
        for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x4f; _0x6a58x2a++) {
            var _0x6a58x34 = _0x6a58x42[_0x6a58x2a];
            var _0x6a58x59 = _0x6a58x34['dims'];
            if ((_0x6a58x57 > _0x6a58x59['l']) && (_0x6a58x58 > _0x6a58x59['t']) && (_0x6a58x57 < (_0x6a58x59['l'] + _0x6a58x59['w'])) && (_0x6a58x58 < (_0x6a58x59['t'] + _0x6a58x59['h']))) {
                _0x6a58x53[_0x6a58x53['length'] + 1] = _0x6a58x34
            }
        }
    };
    return _0x6a58x53[_0x6a58x53['length'] - 1]
}
function __a1portal_getPaneControlIndex(_0x6a58x17, _0x6a58x34) {
    if (_0x6a58x34 == null) {
        return
    };
    var _0x6a58x5b = _0x6a58x17['getOffsets']()['y'];
    var _0x6a58x33;
    if (_0x6a58x34['controls']['length'] == 0) {
        return 0
    };
    var _0x6a58x3a = _0x6a58x34['controls']['length'];
    for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x3a; _0x6a58x2a++) {
        _0x6a58x33 = _0x6a58x34['controls'][_0x6a58x2a];
        var _0x6a58x5c = _0x6a58x33['dims'];
        if (_0x6a58x33['control'] != _0x6a58x17 && _0x6a58x5b < _0x6a58x5c['t'] + 50) {
            return _0x6a58x33['index']
        }
    };
    if (_0x6a58x33 != null) {
        return _0x6a58x33['index'] + 1
    } else {
        return 0
    }
}
function __a1portal_getPaneControlIndex2(_0x6a58x17, _0x6a58x34) {
    if (_0x6a58x34 == null) {
        return
    };
    var _0x6a58x5b = _0x6a58x17['getOffsets']()['y'];
    var _0x6a58x33;
    var _0x6a58x3a = _0x6a58x34['controls']['length'];
    if (_0x6a58x3a == 0) {
        return 0
    };
    var _0x6a58x2a = 0;
    for (_0x6a58x2a; _0x6a58x2a < _0x6a58x3a; _0x6a58x2a++) {
        _0x6a58x33 = _0x6a58x34['controls'][_0x6a58x2a];
        if (_0x6a58x33['control'] == _0x6a58x17) {
            break
        }
    };
    var _0x6a58x5e = null;
    var _0x6a58x5f = null;
    if (_0x6a58x2a == 0) {
        if (_0x6a58x3a > 1) {
            _0x6a58x5f = _0x6a58x34['controls'][1]
        } else {
            return 0
        }
    } else {
        if (_0x6a58x2a == _0x6a58x3a - 1) {
            _0x6a58x5e = _0x6a58x34['controls'][_0x6a58x2a - 1]
        } else {
            _0x6a58x5e = _0x6a58x34['controls'][_0x6a58x2a - 1];
            _0x6a58x5f = _0x6a58x34['controls'][_0x6a58x2a + 1]
        }
    };
    if (_0x6a58x5e != null && _0x6a58x5b < _0x6a58x5e['dims']['t']) {
        return _0x6a58x5e['index']
    };
    if (_0x6a58x5f != null && _0x6a58x5b > _0x6a58x5f['dims']['t']) {
        return _0x6a58x5f['index']
    }
}
function __a1portal_Pane(_0x6a58x61, _0x6a58x62) {
    this['pane'] = _0x6a58x61;
    this['id'] = _0x6a58x61['id'];
    this['controls'] = new Array();
    this['origBorder'] = _0x6a58x61['style']['border'];
    this['paneName'] = _0x6a58x62;
    var _0x6a58x35 = 0;
    var _0x6a58x63 = '';
    var _0x6a58x64 = _0x6a58x61['childNodes']['length'];
    for (var _0x6a58x2a = 0; _0x6a58x2a < _0x6a58x64; _0x6a58x2a++) {
        var _0x6a58x65 = _0x6a58x61['childNodes'][_0x6a58x2a];
        if (a1portal['dom']['isNonTextNode'](_0x6a58x65)) {
            if (__a1portal_m_aryModules == null) {
                __a1portal_m_aryModules = new Array()
            };
            var _0x6a58x40 = _0x6a58x65['getAttribute']('moduleid');
            if (_0x6a58x40 != null && _0x6a58x40['length'] > 0) {
                _0x6a58x63 += _0x6a58x40 + '~';
                this['controls'][this['controls']['length']] = new __a1portal_PaneControl(_0x6a58x65, _0x6a58x35);
                __a1portal_m_aryModules[_0x6a58x40] = _0x6a58x65['id'];
                _0x6a58x35 += 1
            }
        }
    };
    this['moduleOrder'] = _0x6a58x63;
    this['dims'] = a1portal['dom']['positioning']['dims2'](this['pane'])
}
function __a1portal_PaneControl(_0x6a58x61, _0x6a58x35) {
    this['control'] = _0x6a58x61;
    this['id'] = _0x6a58x61['id'];
    this['index'] = _0x6a58x35;
    this['origBorder'] = _0x6a58x61['style']['border'];
    this['dims'] = a1portal['dom']['positioning']['dims2'](this['control'])
}
function __a1portalcore() {
    this['GetUserVal'] = 0;
    this['SetUserVal'] = 1
}
__a1portalcore['prototype'] = {
    getUserProp: function (_0x6a58x68, _0x6a58x69, _0x6a58x6a) {
        this._doUserCallBack(a1portalcore.GetUserVal, _0x6a58x68, _0x6a58x69, null, new a1portalcore.UserPropArgs(_0x6a58x68, _0x6a58x69, _0x6a58x6a))
    },
    setUserProp: function (_0x6a58x68, _0x6a58x69, _0x6a58x25, _0x6a58x6a) {
        this._doUserCallBack(a1portalcore.SetUserVal, _0x6a58x68, _0x6a58x69, _0x6a58x25, new a1portalcore.UserPropArgs(_0x6a58x68, _0x6a58x69, _0x6a58x6a))
    },
    _doUserCallBack: function (_0x6a58x6b, _0x6a58x68, _0x6a58x69, _0x6a58x25, _0x6a58x6a) {
        if (a1portal && a1portal['xmlhttp']) {
            var _0x6a58x6c = _0x6a58x6b + COL_DELIMITER + _0x6a58x68 + COL_DELIMITER + _0x6a58x69 + COL_DELIMITER + _0x6a58x25;
            a1portal['xmlhttp']['doCallBack']('__Page', _0x6a58x6c, a1portalcore._callBackSuccess, _0x6a58x6a, a1portalcore._callBackFail, null, true, null, 0)
        } else {
            alert('Client Personalization not enabled')
        }
    },
    _callBackSuccess: function (_0x6a58x6d, _0x6a58x6e, _0x6a58x6f) {
        if (_0x6a58x6e['pFunc']) {
            _0x6a58x6e['pFunc'](_0x6a58x6e['namingCtr'], _0x6a58x6e['key'], _0x6a58x6d)
        }
    },
    _callBackFail: function (_0x6a58x6d, _0x6a58x6e) {
        window['status'] = _0x6a58x6d
    }
};
__a1portalcore['prototype']['UserPropArgs'] = function (_0x6a58x68, _0x6a58x69, _0x6a58x6a) {
    this['namingCtr'] = _0x6a58x68;
    this['key'] = _0x6a58x69;
    this['pFunc'] = _0x6a58x6a
};
var a1portalcore = new __a1portalcore();

function __a1portal_GetRelatedTarget(_0x6a58xa) {
    if (!_0x6a58xa) {
        return null
    };
    return _0x6a58xa['relatedTarget'] || (_0x6a58xa['type'] == 'mouseout' ? _0x6a58xa['toElement'] : _0x6a58xa['fromElement'])
}
function __a1portal_IsChildOf(_0x6a58x73, _0x6a58x74) {
    if (_0x6a58x74 == _0x6a58x73) {
        return false
    };
    while (_0x6a58x74 && (_0x6a58x74 != document['body'])) {
        if (_0x6a58x74 == _0x6a58x73) {
            return true
        };
        try {
            _0x6a58x74 = _0x6a58x74['parentNode']
        } catch (e) {
            return false
        }
    };
    return false
}
function __a1portal_isElementOver(_0x6a58x74, _0x6a58x76) {
    var _0x6a58x77 = __a1portal_GetRelatedTarget(_0x6a58x76);
    if (__a1portal_IsChildOf(_0x6a58x74, _0x6a58x77) || _0x6a58x74 == _0x6a58x77) {
        return true
    };
    return false
}
function __a1portal_isElementOut(_0x6a58x74, _0x6a58x76) {
    var _0x6a58x77 = __a1portal_GetRelatedTarget(_0x6a58x76);
    if (_0x6a58x77 && (__a1portal_IsChildOf(_0x6a58x74, _0x6a58x77) || _0x6a58x74 == _0x6a58x77)) {
        return true
    };
    return false
}
function toggleDiv(_0x6a58x74) {
    if (document['getElementById'](_0x6a58x74)['style']['display'] == 'none') {
        document['getElementById'](_0x6a58x74)['style']['display'] = 'block'
    } else {
        if (document['getElementById'](_0x6a58x74)['style']['display'] == 'block') {
            document['getElementById'](_0x6a58x74)['style']['display'] = 'none'
        }
    }
}
