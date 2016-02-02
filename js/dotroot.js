	/*services*/
	var txt_orig = $("#services h1").html();

	$("#grid li").bind("mouseenter", function () {

	    the_img = $(this).find("img");
	    the_txt = the_img.attr("alt");
	    $(this).css({
	        "z-index": 100
	    }).animate({
	        "width": "+=150",
	        "margin-left": "-=10",
	        "margin-top": "-=20"
	    }, 250);
	    $("#services h1").html(the_txt);

	}).bind("mouseleave", function () {

	    the_img = $(this).find("img");
	    the_txt = the_img.attr("alt");
	    $(this).css({
	        "z-index": 10
	    }).animate({
	        "width": "-=150",
	        "margin-left": "+=10",
	        "margin-top": "+=20"
	    }, 250);
	    $("#services h1").html(txt_orig);
	});


	$(document).ready(function () {
	    $(window).scroll(function () {
	        if ($(document).scrollTop() > 50) {
	            $(".navbar-fixed-top").css("background-color", "rgb(34,29,28)");
	        } else {
	            $(".navbar-fixed-top").css("background-color", "rgba(34,29,28,.3)");
	        }
	    });
	});

	//Popout
	// preload images
	$('.modal-thumb').each(function () {
	    img = new Image();
	    img.src = $(this).data('modal-src');

	});


	$('.modal-thumb').on('click', function () {
	    var title = $(this).data('modal-title'),
	        src = $(this).data('modal-src'),
	        captiontext = $(this).data('modal-caption'),
	        newimage = $(this).data('modal-newimage'); //added


	    $('#modal h4').text(title);
	    $('#modal #firstimage').attr('src', src);
	    $('#modal h5').text(captiontext);
	    $('#modal #anotherimage').attr('src', newimage); //added

	    $('#modal').modal('show');
	});


	$('#modal').on('show.bs.modal', function () {
	    $(this).find('.modal-body').css({
	        width: 'auto', //not needed
	        height: 'auto', //not needed 
	        'max-height': '30%'
	    });
	    $(this).find('.modal-src').css({
	        width: '30px', //not needed

	    });
	});
	//end popout

	//Modernizr.custom
	;
	window.Modernizr = function (a, b, c) {
	        function w(a) {
	            j.cssText = a
	        }

	        function x(a, b) {
	            return w(m.join(a + ";") + (b || ""))
	        }

	        function y(a, b) {
	            return typeof a === b
	        }

	        function z(a, b) {
	            return !!~("" + a).indexOf(b)
	        }

	        function A(a, b, d) {
	            for (var e in a) {
	                var f = b[a[e]];
	                if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
	            }
	            return !1
	        }
	        var d = "2.6.2",
	            e = {},
	            f = !0,
	            g = b.documentElement,
	            h = "modernizr",
	            i = b.createElement(h),
	            j = i.style,
	            k, l = {}.toString,
	            m = " -webkit- -moz- -o- -ms- ".split(" "),
	            n = {},
	            o = {},
	            p = {},
	            q = [],
	            r = q.slice,
	            s, t = function (a, c, d, e) {
	                var f, i, j, k, l = b.createElement("div"),
	                    m = b.body,
	                    n = m || b.createElement("body");
	                if (parseInt(d, 10))
	                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
	                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
	            },
	            u = {}.hasOwnProperty,
	            v;
	        !y(u, "undefined") && !y(u.call, "undefined") ? v = function (a, b) {
	            return u.call(a, b)
	        } : v = function (a, b) {
	            return b in a && y(a.constructor.prototype[b], "undefined")
	        }, Function.prototype.bind || (Function.prototype.bind = function (b) {
	            var c = this;
	            if (typeof c != "function") throw new TypeError;
	            var d = r.call(arguments, 1),
	                e = function () {
	                    if (this instanceof e) {
	                        var a = function () {};
	                        a.prototype = c.prototype;
	                        var f = new a,
	                            g = c.apply(f, d.concat(r.call(arguments)));
	                        return Object(g) === g ? g : f
	                    }
	                    return c.apply(b, d.concat(r.call(arguments)))
	                };
	            return e
	        }), n.touch = function () {
	            var c;
	            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
	                c = a.offsetTop === 9
	            }), c
	        };
	        for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
	        return e.addTest = function (a, b) {
	                if (typeof a == "object")
	                    for (var d in a) v(a, d) && e.addTest(d, a[d]);
	                else {
	                    a = a.toLowerCase();
	                    if (e[a] !== c) return e;
	                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
	                }
	                return e
	            }, w(""), i = k = null,
	            function (a, b) {
	                function k(a, b) {
	                    var c = a.createElement("p"),
	                        d = a.getElementsByTagName("head")[0] || a.documentElement;
	                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
	                }

	                function l() {
	                    var a = r.elements;
	                    return typeof a == "string" ? a.split(" ") : a
	                }

	                function m(a) {
	                    var b = i[a[g]];
	                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
	                }

	                function n(a, c, f) {
	                    c || (c = b);
	                    if (j) return c.createElement(a);
	                    f || (f = m(c));
	                    var g;
	                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
	                }

	                function o(a, c) {
	                    a || (a = b);
	                    if (j) return a.createDocumentFragment();
	                    c = c || m(a);
	                    var d = c.frag.cloneNode(),
	                        e = 0,
	                        f = l(),
	                        g = f.length;
	                    for (; e < g; e++) d.createElement(f[e]);
	                    return d
	                }

	                function p(a, b) {
	                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
	                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
	                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
	                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
	                    }) + ");return n}")(r, b.frag)
	                }

	                function q(a) {
	                    a || (a = b);
	                    var c = m(a);
	                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
	                }
	                var c = a.html5 || {},
	                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
	                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
	                    f, g = "_html5shiv",
	                    h = 0,
	                    i = {},
	                    j;
	                (function () {
	                    try {
	                        var a = b.createElement("a");
	                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
	                            b.createElement("a");
	                            var a = b.createDocumentFragment();
	                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
	                        }()
	                    } catch (c) {
	                        f = !0, j = !0
	                    }
	                })();
	                var r = {
	                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
	                    shivCSS: c.shivCSS !== !1,
	                    supportsUnknownElements: j,
	                    shivMethods: c.shivMethods !== !1,
	                    type: "default",
	                    shivDocument: q,
	                    createElement: n,
	                    createDocumentFragment: o
	                };
	                a.html5 = r, q(b)
	            }(this, b), e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
	    }(this, this.document),
	    function (a, b, c) {
	        function d(a) {
	            return "[object Function]" == o.call(a)
	        }

	        function e(a) {
	            return "string" == typeof a
	        }

	        function f() {}

	        function g(a) {
	            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	        }

	        function h() {
	            var a = p.shift();
	            q = 1, a ? a.t ? m(function () {
	                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
	            }, 0) : (a(), h()) : q = 0
	        }

	        function i(a, c, d, e, f, i, j) {
	            function k(b) {
	                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
	                    "img" != a && m(function () {
	                        t.removeChild(l)
	                    }, 50);
	                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
	                }
	            }
	            var j = j || B.errorTimeout,
	                l = b.createElement(a),
	                o = 0,
	                r = 0,
	                u = {
	                    t: d,
	                    s: c,
	                    e: f,
	                    a: i,
	                    x: j
	                };
	            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
	                k.call(this, r)
	            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	        }

	        function j(a, b, c, d, f) {
	            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	        }

	        function k() {
	            var a = B;
	            return a.loader = {
	                load: j,
	                i: 0
	            }, a
	        }
	        var l = b.documentElement,
	            m = a.setTimeout,
	            n = b.getElementsByTagName("script")[0],
	            o = {}.toString,
	            p = [],
	            q = 0,
	            r = "MozAppearance" in l.style,
	            s = r && !!b.createRange().compareNode,
	            t = s ? l : n.parentNode,
	            l = a.opera && "[object Opera]" == o.call(a.opera),
	            l = !!b.attachEvent && !l,
	            u = r ? "object" : l ? "script" : "img",
	            v = l ? "script" : u,
	            w = Array.isArray || function (a) {
	                return "[object Array]" == o.call(a)
	            },
	            x = [],
	            y = {},
	            z = {
	                timeout: function (a, b) {
	                    return b.length && (a.timeout = b[0]), a
	                }
	            },
	            A, B;
	        B = function (a) {
	            function b(a) {
	                var a = a.split("!"),
	                    b = x.length,
	                    c = a.pop(),
	                    d = a.length,
	                    c = {
	                        url: c,
	                        origUrl: c,
	                        prefixes: a
	                    },
	                    e, f, g;
	                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
	                for (f = 0; f < b; f++) c = x[f](c);
	                return c
	            }

	            function g(a, e, f, g, h) {
	                var i = b(a),
	                    j = i.autoCallback;
	                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
	                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
	                })))
	            }

	            function h(a, b) {
	                function c(a, c) {
	                    if (a) {
	                        if (e(a)) c || (j = function () {
	                            var a = [].slice.call(arguments);
	                            k.apply(this, a), l()
	                        }), g(a, j, b, 0, h);
	                        else if (Object(a) === a)
	                            for (n in m = function () {
	                                    var b = 0,
	                                        c;
	                                    for (c in a) a.hasOwnProperty(c) && b++;
	                                    return b
	                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
	                                var a = [].slice.call(arguments);
	                                k.apply(this, a), l()
	                            } : j[n] = function (a) {
	                                return function () {
	                                    var b = [].slice.call(arguments);
	                                    a && a.apply(this, b), l()
	                                }
	                            }(k[n])), g(a[n], j, b, n, h))
	                    } else !c && l()
	                }
	                var h = !!a.test,
	                    i = a.load || a.both,
	                    j = a.callback || f,
	                    k = j,
	                    l = a.complete || f,
	                    m, n;
	                c(h ? a.yep : a.nope, !!i), i && c(i)
	            }
	            var i, j, l = this.yepnope.loader;
	            if (e(a)) g(a, 0, l, 0);
	            else if (w(a))
	                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
	            else Object(a) === a && h(a, l)
	        }, B.addPrefix = function (a, b) {
	            z[a] = b
	        }, B.addFilter = function (a) {
	            x.push(a)
	        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
	            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
	            var k = b.createElement("script"),
	                l, o, e = e || B.errorTimeout;
	            k.src = a;
	            for (o in d) k.setAttribute(o, d[o]);
	            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
	                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
	            }, m(function () {
	                l || (l = 1, c(1))
	            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
	            var e = b.createElement("link"),
	                j, c = i ? h : c || f;
	            e.href = a, e.rel = "stylesheet", e.type = "text/css";
	            for (j in d) e.setAttribute(j, d[j]);
	            g || (n.parentNode.insertBefore(e, n), m(c, 0))
	        }
	    }(this, document), Modernizr.load = function () {
	        yepnope.apply(window, [].slice.call(arguments, 0))
	    };
	//end Modernizr.custom

	//Toucheffects
	(function (window) {

	    if (Modernizr.touch) {


	        function classReg(className) {
	            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	        }

	        var hasClass, addClass, removeClass;

	        if ('classList' in document.documentElement) {
	            hasClass = function (elem, c) {
	                return elem.classList.contains(c);
	            };
	            addClass = function (elem, c) {
	                elem.classList.add(c);
	            };
	            removeClass = function (elem, c) {
	                elem.classList.remove(c);
	            };
	        } else {
	            hasClass = function (elem, c) {
	                return classReg(c).test(elem.className);
	            };
	            addClass = function (elem, c) {
	                if (!hasClass(elem, c)) {
	                    elem.className = elem.className + ' ' + c;
	                }
	            };
	            removeClass = function (elem, c) {
	                elem.className = elem.className.replace(classReg(c), ' ');
	            };
	        }

	        function toggleClass(elem, c) {
	            var fn = hasClass(elem, c) ? removeClass : addClass;
	            fn(elem, c);
	        }

	        var classie = {
	            // full names
	            hasClass: hasClass,
	            addClass: addClass,
	            removeClass: removeClass,
	            toggleClass: toggleClass,
	            // short names
	            has: hasClass,
	            add: addClass,
	            remove: removeClass,
	            toggle: toggleClass
	        };

	        // transport
	        if (typeof define === 'function' && define.amd) {
	            // AMD
	            define(classie);
	        } else {
	            // browser global
	            window.classie = classie;
	        }

		[].slice.call(document.querySelectorAll('ul.grid > li > figure')).forEach(function (el, i) {
	            el.querySelector('figcaption > a').addEventListener('touchstart', function (e) {
	                e.stopPropagation();
	            }, false);
	            el.addEventListener('touchstart', function (e) {
	                classie.toggle(this, 'cs-hover');
	            }, false);
	        });

	    }

	})(window);
	//End Toucheffects

	//Jquery.easing.min
	jQuery.easing.jswing = jQuery.easing.swing;
	jQuery.extend(jQuery.easing, {
	    def: "easeOutQuad",
	    swing: function (e, f, a, h, g) {
	        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	    },
	    easeInQuad: function (e, f, a, h, g) {
	        return h * (f /= g) * f + a
	    },
	    easeOutQuad: function (e, f, a, h, g) {
	        return -h * (f /= g) * (f - 2) + a
	    },
	    easeInOutQuad: function (e, f, a, h, g) {
	        if ((f /= g / 2) < 1) {
	            return h / 2 * f * f + a
	        }
	        return -h / 2 * ((--f) * (f - 2) - 1) + a
	    },
	    easeInCubic: function (e, f, a, h, g) {
	        return h * (f /= g) * f * f + a
	    },
	    easeOutCubic: function (e, f, a, h, g) {
	        return h * ((f = f / g - 1) * f * f + 1) + a
	    },
	    easeInOutCubic: function (e, f, a, h, g) {
	        if ((f /= g / 2) < 1) {
	            return h / 2 * f * f * f + a
	        }
	        return h / 2 * ((f -= 2) * f * f + 2) + a
	    },
	    easeInQuart: function (e, f, a, h, g) {
	        return h * (f /= g) * f * f * f + a
	    },
	    easeOutQuart: function (e, f, a, h, g) {
	        return -h * ((f = f / g - 1) * f * f * f - 1) + a
	    },
	    easeInOutQuart: function (e, f, a, h, g) {
	        if ((f /= g / 2) < 1) {
	            return h / 2 * f * f * f * f + a
	        }
	        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	    },
	    easeInQuint: function (e, f, a, h, g) {
	        return h * (f /= g) * f * f * f * f + a
	    },
	    easeOutQuint: function (e, f, a, h, g) {
	        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	    },
	    easeInOutQuint: function (e, f, a, h, g) {
	        if ((f /= g / 2) < 1) {
	            return h / 2 * f * f * f * f * f + a
	        }
	        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	    },
	    easeInSine: function (e, f, a, h, g) {
	        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	    },
	    easeOutSine: function (e, f, a, h, g) {
	        return h * Math.sin(f / g * (Math.PI / 2)) + a
	    },
	    easeInOutSine: function (e, f, a, h, g) {
	        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	    },
	    easeInExpo: function (e, f, a, h, g) {
	        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	    },
	    easeOutExpo: function (e, f, a, h, g) {
	        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	    },
	    easeInOutExpo: function (e, f, a, h, g) {
	        if (f == 0) {
	            return a
	        }
	        if (f == g) {
	            return a + h
	        }
	        if ((f /= g / 2) < 1) {
	            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
	        }
	        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	    },
	    easeInCirc: function (e, f, a, h, g) {
	        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	    },
	    easeOutCirc: function (e, f, a, h, g) {
	        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	    },
	    easeInOutCirc: function (e, f, a, h, g) {
	        if ((f /= g / 2) < 1) {
	            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
	        }
	        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	    },
	    easeInElastic: function (f, h, e, l, k) {
	        var i = 1.70158;
	        var j = 0;
	        var g = l;
	        if (h == 0) {
	            return e
	        }
	        if ((h /= k) == 1) {
	            return e + l
	        }
	        if (!j) {
	            j = k * 0.3
	        }
	        if (g < Math.abs(l)) {
	            g = l;
	            var i = j / 4
	        } else {
	            var i = j / (2 * Math.PI) * Math.asin(l / g)
	        }
	        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	    },
	    easeOutElastic: function (f, h, e, l, k) {
	        var i = 1.70158;
	        var j = 0;
	        var g = l;
	        if (h == 0) {
	            return e
	        }
	        if ((h /= k) == 1) {
	            return e + l
	        }
	        if (!j) {
	            j = k * 0.3
	        }
	        if (g < Math.abs(l)) {
	            g = l;
	            var i = j / 4
	        } else {
	            var i = j / (2 * Math.PI) * Math.asin(l / g)
	        }
	        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	    },
	    easeInOutElastic: function (f, h, e, l, k) {
	        var i = 1.70158;
	        var j = 0;
	        var g = l;
	        if (h == 0) {
	            return e
	        }
	        if ((h /= k / 2) == 2) {
	            return e + l
	        }
	        if (!j) {
	            j = k * (0.3 * 1.5)
	        }
	        if (g < Math.abs(l)) {
	            g = l;
	            var i = j / 4
	        } else {
	            var i = j / (2 * Math.PI) * Math.asin(l / g)
	        }
	        if (h < 1) {
	            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	        }
	        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	    },
	    easeInBack: function (e, f, a, i, h, g) {
	        if (g == undefined) {
	            g = 1.70158
	        }
	        return i * (f /= h) * f * ((g + 1) * f - g) + a
	    },
	    easeOutBack: function (e, f, a, i, h, g) {
	        if (g == undefined) {
	            g = 1.70158
	        }
	        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	    },
	    easeInOutBack: function (e, f, a, i, h, g) {
	        if (g == undefined) {
	            g = 1.70158
	        }
	        if ((f /= h / 2) < 1) {
	            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
	        }
	        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	    },
	    easeInBounce: function (e, f, a, h, g) {
	        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	    },
	    easeOutBounce: function (e, f, a, h, g) {
	        if ((f /= g) < (1 / 2.75)) {
	            return h * (7.5625 * f * f) + a
	        } else {
	            if (f < (2 / 2.75)) {
	                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
	            } else {
	                if (f < (2.5 / 2.75)) {
	                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
	                } else {
	                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
	                }
	            }
	        }
	    },
	    easeInOutBounce: function (e, f, a, h, g) {
	        if (f < g / 2) {
	            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
	        }
	        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	    }
	});
	//end jquery.easing.min

	//scrolling-nav
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function () {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function () {
	    $('a.page-scroll').bind('click', function (event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
	//end scrolling-nav

	//Tabs

	$(function () {
	    $('.tabs nav a').on('click', function () {
	        show_content($(this).index());
	    });

	    show_content(0);

	    function show_content(index) {
	        // Make the content visible
	        $('.tabs .content.visible').removeClass('visible');
	        $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

	        // Set the tab to selected
	        $('.tabs nav a.selected').removeClass('selected');
	        $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
	    }
	});
	//end tabs

	//accordion
	$("section.aw-accordion div").mouseover(function () {
	    $(this).css('width', '50%');
	    $(this).siblings('div').css('width', '14%');
	});
	//end accordion