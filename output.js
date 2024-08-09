//Fri Aug 09 2024 11:47:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(aa) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ad) {
      return typeof ad;
    } : function (ad) {
      return ad && "function" == typeof Symbol && ad.constructor === Symbol && ad !== Symbol.prototype ? "symbol" : typeof ad;
    };
    return b(aa);
  }
  function c(aa, ab) {
    var ad = "undefined" != typeof Symbol && aa[Symbol.iterator] || aa["@@iterator"];
    if (!ad) {
      if (Array.isArray(aa) || (ad = d(aa)) || ab && aa && "number" == typeof aa.length) {
        ad && (aa = ad);
        var ae = 0,
          af = function () {};
        return {
          s: af,
          n: function () {
            var ak = {
              done: !0
            };
            return ae >= aa.length ? ak : {
              done: !1,
              value: aa[ae++]
            };
          },
          e: function (ak) {
            throw ak;
          },
          f: af
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ag,
      ah = !0,
      ai = !1;
    return {
      s: function () {
        ad = ad.call(aa);
      },
      n: function () {
        var am = ad.next();
        ah = am.done;
        return am;
      },
      e: function (al) {
        ai = !0;
        ag = al;
      },
      f: function () {
        try {
          ah || null == ad.return || ad.return();
        } finally {
          if (ai) {
            throw ag;
          }
        }
      }
    };
  }
  function d(aa, ab) {
    if (aa) {
      if ("string" == typeof aa) {
        return f(aa, ab);
      }
      var ac = {}.toString.call(aa).slice(8, -1);
      "Object" === ac && aa.constructor && (ac = aa.constructor.name);
      return "Map" === ac || "Set" === ac ? Array.from(aa) : "Arguments" === ac || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ac) ? f(aa, ab) : void 0;
    }
  }
  function f(aa, ab) {
    (null == ab || ab > aa.length) && (ab = aa.length);
    for (var ad = 0, ae = Array(ab); ad < ab; ad++) {
      ae[ad] = aa[ad];
    }
    return ae;
  }
  function g() {
    'use strict';

    g = function () {
      return ac;
    };
    var ab,
      ac = {},
      ad = Object.prototype,
      ae = ad.hasOwnProperty,
      af = Object.defineProperty || function (aH, aI, aJ) {
        aH[aI] = aJ.value;
      },
      ag = "function" == typeof Symbol ? Symbol : {},
      ah = ag.iterator || "@@iterator",
      ai = ag.asyncIterator || "@@asyncIterator",
      aj = ag.toStringTag || "@@toStringTag";
    function ak(aH, aI, aJ) {
      var aK = {
        value: aJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aH, aI, aK);
      return aH[aI];
    }
    try {
      ak({}, "");
    } catch (aI) {
      ak = function (aK, aL, aM) {
        return aK[aL] = aM;
      };
    }
    function al(aK, aL, aM, aN) {
      var aP = aL && aL.prototype instanceof as ? aL : as,
        aQ = Object.create(aP.prototype),
        aR = new aF(aN || []);
      af(aQ, "_invoke", {
        value: aB(aK, aM, aR)
      });
      return aQ;
    }
    function am(aK, aL, aM) {
      try {
        return {
          type: "normal",
          arg: aK.call(aL, aM)
        };
      } catch (aR) {
        var aO = {};
        aO.type = "throw";
        aO.arg = aR;
        return aO;
      }
    }
    ac.wrap = al;
    var an = "suspendedStart",
      ao = "suspendedYield",
      ap = "executing",
      aq = "completed",
      ar = {};
    function as() {}
    function at() {}
    function au() {}
    var av = {};
    ak(av, ah, function () {
      return this;
    });
    var aw = Object.getPrototypeOf,
      ax = aw && aw(aw(aG([])));
    ax && ax !== ad && ae.call(ax, ah) && (av = ax);
    au.prototype = as.prototype = Object.create(av);
    var ay = au.prototype;
    function az(aK) {
      ["next", "throw", "return"].forEach(function (aN) {
        ak(aK, aN, function (aQ) {
          return this._invoke(aN, aQ);
        });
      });
    }
    function aA(aK, aL) {
      function aO(aP, aQ, aR, aS) {
        var aU = am(aK[aP], aK, aQ);
        if ("throw" !== aU.type) {
          var aV = aU.arg,
            aW = aV.value;
          return aW && "object" == b(aW) && ae.call(aW, "__await") ? aL.resolve(aW.__await).then(function (aY) {
            aO("next", aY, aR, aS);
          }, function (aY) {
            aO("throw", aY, aR, aS);
          }) : aL.resolve(aW).then(function (aY) {
            aV.value = aY;
            aR(aV);
          }, function (aY) {
            return aO("throw", aY, aR, aS);
          });
        }
        aS(aU.arg);
      }
      var aN;
      af(this, "_invoke", {
        value: function (aP, aQ) {
          function aT() {
            return new aL(function (aW, aX) {
              aO(aP, aQ, aW, aX);
            });
          }
          return aN = aN ? aN.then(aT, aT) : aT();
        }
      });
    }
    function aB(aK, aL, aM) {
      var aO = an;
      return function (aP, aQ) {
        if (aO === ap) {
          throw Error("Generator is already running");
        }
        if (aO === aq) {
          if ("throw" === aP) {
            throw aQ;
          }
          var aT = {
            value: ab,
            done: !0
          };
          return aT;
        }
        for (aM.method = aP, aM.arg = aQ;;) {
          var aU = aM.delegate;
          if (aU) {
            var aV = aC(aU, aM);
            if (aV) {
              if (aV === ar) {
                continue;
              }
              return aV;
            }
          }
          if ("next" === aM.method) {
            aM.sent = aM._sent = aM.arg;
          } else {
            if ("throw" === aM.method) {
              if (aO === an) {
                throw aO = aq, aM.arg;
              }
              aM.dispatchException(aM.arg);
            } else {
              "return" === aM.method && aM.abrupt("return", aM.arg);
            }
          }
          aO = ap;
          var aW = am(aK, aL, aM);
          if ("normal" === aW.type) {
            if (aO = aM.done ? aq : ao, aW.arg === ar) {
              continue;
            }
            var aX = {};
            aX.value = aW.arg;
            aX.done = aM.done;
            return aX;
          }
          "throw" === aW.type && (aO = aq, aM.method = "throw", aM.arg = aW.arg);
        }
      };
    }
    function aC(aK, aL) {
      var aQ = aL.method,
        aR = aK.iterator[aQ];
      if (aR === ab) {
        aL.delegate = null;
        "throw" === aQ && aK.iterator.return && (aL.method = "return", aL.arg = ab, aC(aK, aL), "throw" === aL.method) || "return" !== aQ && (aL.method = "throw", aL.arg = new TypeError("The iterator does not provide a '" + aQ + "' method"));
        return ar;
      }
      var aP = am(aR, aK.iterator, aL.arg);
      if ("throw" === aP.type) {
        aL.method = "throw";
        aL.arg = aP.arg;
        aL.delegate = null;
        return ar;
      }
      var aO = aP.arg;
      return aO ? aO.done ? (aL[aK.resultName] = aO.value, aL.next = aK.nextLoc, "return" !== aL.method && (aL.method = "next", aL.arg = ab), aL.delegate = null, ar) : aO : (aL.method = "throw", aL.arg = new TypeError("iterator result is not an object"), aL.delegate = null, ar);
    }
    function aD(aK) {
      var aL = {
        tryLoc: aK[0]
      };
      var aM = aL;
      1 in aK && (aM.catchLoc = aK[1]);
      2 in aK && (aM.finallyLoc = aK[2], aM.afterLoc = aK[3]);
      this.tryEntries.push(aM);
    }
    function aE(aK) {
      var aL = aK.completion || {};
      aL.type = "normal";
      delete aL.arg;
      aK.completion = aL;
    }
    function aF(aK) {
      var aL = {
        tryLoc: "root"
      };
      this.tryEntries = [aL];
      aK.forEach(aD, this);
      this.reset(!0);
    }
    function aG(aK) {
      if (aK || "" === aK) {
        var aM = aK[ah];
        if (aM) {
          return aM.call(aK);
        }
        if ("function" == typeof aK.next) {
          return aK;
        }
        if (!isNaN(aK.length)) {
          var aN = -1,
            aO = function aP() {
              for (; ++aN < aK.length;) {
                if (ae.call(aK, aN)) {
                  aP.value = aK[aN];
                  aP.done = !1;
                  return aP;
                }
              }
              aP.value = ab;
              aP.done = !0;
              return aP;
            };
          return aO.next = aO;
        }
      }
      throw new TypeError(b(aK) + " is not iterable");
    }
    at.prototype = au;
    af(ay, "constructor", {
      value: au,
      configurable: !0
    });
    af(au, "constructor", {
      value: at,
      configurable: !0
    });
    at.displayName = ak(au, aj, "GeneratorFunction");
    ac.isGeneratorFunction = function (aK) {
      var aL = "function" == typeof aK && aK.constructor;
      return !!aL && (aL === at || "GeneratorFunction" === (aL.displayName || aL.name));
    };
    ac.mark = function (aK) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aK, au) : (aK.__proto__ = au, ak(aK, aj, "GeneratorFunction"));
      aK.prototype = Object.create(ay);
      return aK;
    };
    ac.awrap = function (aK) {
      var aL = {
        __await: aK
      };
      return aL;
    };
    az(aA.prototype);
    ak(aA.prototype, ai, function () {
      return this;
    });
    ac.AsyncIterator = aA;
    ac.async = function (aK, aL, aM, aN, aO) {
      void 0 === aO && (aO = Promise);
      var aP = new aA(al(aK, aL, aM, aN), aO);
      return ac.isGeneratorFunction(aL) ? aP : aP.next().then(function (aR) {
        return aR.done ? aR.value : aP.next();
      });
    };
    az(ay);
    ak(ay, aj, "Generator");
    ak(ay, ah, function () {
      return this;
    });
    ak(ay, "toString", function () {
      return "[object Generator]";
    });
    ac.keys = function (aK) {
      var aM = Object(aK),
        aN = [];
      for (var aO in aM) aN.push(aO);
      aN.reverse();
      return function aP() {
        for (; aN.length;) {
          var aR = aN.pop();
          if (aR in aM) {
            aP.value = aR;
            aP.done = !1;
            return aP;
          }
        }
        aP.done = !0;
        return aP;
      };
    };
    ac.values = aG;
    aF.prototype = {
      constructor: aF,
      reset: function (aK) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ab, this.done = !1, this.delegate = null, this.method = "next", this.arg = ab, this.tryEntries.forEach(aE), !aK) {
          for (var aL in this) "t" === aL.charAt(0) && ae.call(this, aL) && !isNaN(+aL.slice(1)) && (this[aL] = ab);
        }
      },
      stop: function () {
        this.done = !0;
        var aK = this.tryEntries[0].completion;
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        return this.rval;
      },
      dispatchException: function (aK) {
        if (this.done) {
          throw aK;
        }
        var aM = this;
        function aT(aU, aV) {
          aP.type = "throw";
          aP.arg = aK;
          aM.next = aU;
          aV && (aM.method = "next", aM.arg = ab);
          return !!aV;
        }
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN],
            aP = aO.completion;
          if ("root" === aO.tryLoc) {
            return aT("end");
          }
          if (aO.tryLoc <= this.prev) {
            var aQ = ae.call(aO, "catchLoc"),
              aR = ae.call(aO, "finallyLoc");
            if (aQ && aR) {
              if (this.prev < aO.catchLoc) {
                return aT(aO.catchLoc, !0);
              }
              if (this.prev < aO.finallyLoc) {
                return aT(aO.finallyLoc);
              }
            } else {
              if (aQ) {
                if (this.prev < aO.catchLoc) {
                  return aT(aO.catchLoc, !0);
                }
              } else {
                if (!aR) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aO.finallyLoc) {
                  return aT(aO.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aK, aL) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.tryLoc <= this.prev && ae.call(aO, "finallyLoc") && this.prev < aO.finallyLoc) {
            var aP = aO;
            break;
          }
        }
        aP && ("break" === aK || "continue" === aK) && aP.tryLoc <= aL && aL <= aP.finallyLoc && (aP = null);
        var aQ = aP ? aP.completion : {};
        aQ.type = aK;
        aQ.arg = aL;
        return aP ? (this.method = "next", this.next = aP.finallyLoc, ar) : this.complete(aQ);
      },
      complete: function (aK, aL) {
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        "break" === aK.type || "continue" === aK.type ? this.next = aK.arg : "return" === aK.type ? (this.rval = this.arg = aK.arg, this.method = "return", this.next = "end") : "normal" === aK.type && aL && (this.next = aL);
        return ar;
      },
      finish: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.finallyLoc === aK) {
            this.complete(aN.completion, aN.afterLoc);
            aE(aN);
            return ar;
          }
        }
      },
      catch: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.tryLoc === aK) {
            var aO = aN.completion;
            if ("throw" === aO.type) {
              var aP = aO.arg;
              aE(aN);
            }
            return aP;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aK, aL, aM) {
        this.delegate = {
          iterator: aG(aK),
          resultName: aL,
          nextLoc: aM
        };
        "next" === this.method && (this.arg = ab);
        return ar;
      }
    };
    return ac;
  }
  function h(aa, ab, ac, ad, ae, af, ag) {
    try {
      var ai = aa[af](ag),
        aj = ai.value;
    } catch (am) {
      return void ac(am);
    }
    ai.done ? ab(aj) : Promise.resolve(aj).then(ad, ae);
  }
  function i(aa) {
    return function () {
      var ad = this,
        ae = arguments;
      return new Promise(function (af, ag) {
        var ai = aa.apply(ad, ae);
        function aj(al) {
          h(ai, af, ag, aj, ak, "next", al);
        }
        function ak(al) {
          h(ai, af, ag, aj, ak, "throw", al);
        }
        aj(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiHaiYan : $.getdata("AiHaiYan")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "60",
    v = "10018",
    w = "FR*r!isE5W",
    x = "0be39bb836a0d86aa76761af779aa93e",
    y = "",
    z = "",
    A = "",
    B = "";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ab() {
      var ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh;
      return g().wrap(function (bi) {
        for (;;) {
          switch (bi.prev = bi.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bi.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bi.next = 5;
              return a8("先去boxjs填写账号密码");
            case 5:
              return bi.abrupt("return");
            case 6:
              bi.next = 8;
              return a6();
            case 8:
              l = bi.sent;
              ad = j.split(" ");
              af = c(ad);
              bi.prev = 11;
              af.s();
            case 13:
              if ((ag = af.n()).done) {
                bi.next = 250;
                break;
              }
              ah = ag.value;
              console.log("随机生成UA");
              ai = a2();
              s = ai.ua;
              t = ai.commonUa;
              console.log(s);
              console.log(t);
              q = ah.split("&")[0];
              r = ah.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bi.next = 27;
              return L("/api/account/init");
            case 27:
              aj = bi.sent;
              o = aj.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bi.next = 33;
              return F("/web/init?client_id=".concat(v));
            case 33:
              ak = bi.sent;
              m = ak.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bi.next = 39;
              return H("/web/oauth/credential_auth");
            case 39:
              if (al = bi.sent, al.data) {
                bi.next = 43;
                break;
              }
              console.log(al.message);
              return bi.abrupt("continue", 248);
            case 43:
              am = al.data.authorization_code.code;
              console.log(am);
              console.log("登录");
              bi.next = 48;
              return L("/api/zbtxz/login", "check_token=&code=".concat(am, "&token=&type=-1&union_id="));
            case 48:
              if (an = bi.sent, console.log("登录成功"), p = an.data.session.account_id, o = an.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), y) {
                bi.next = 65;
                break;
              }
              bi.next = 58;
              return J("/api/buoy/list");
            case 58:
              for (ao = bi.sent, ap = decodeURIComponent(ao.data.new_up.icon_list[0].turn_to.url), aq = ap.split("?")[1], ar = {}, as = aq.split("&"), at = 0, au = as.length; at < au; at++) {
                av = as[at].split("=");
                ar[av[0]] = av[1];
              }
              y = ar.id;
            case 65:
              if (y) {
                bi.next = 68;
                break;
              }
              console.log("获取id失败");
              return bi.abrupt("continue", 248);
            case 68:
              console.log(y);
              console.log("获取apiDt");
              bi.next = 72;
              return N("/aosbase/_auth_dt");
            case 72:
              aw = bi.sent;
              z = aw.data.substring(32, 68);
              console.log(z);
              A = "0";
              ax = {
                app_user_token: o,
                appid: "haiyan",
                noncestr: a5(6, !1),
                phone: q,
                portrait_url: an.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: an.data.account.id,
                user_name: an.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              ax.signature = l.md5(a3(ax) + "&appkey=".concat(x));
              bi.next = 80;
              return R("/aosbase/_auth_appuserinit", ax);
            case 80:
              ay = bi.sent;
              B = ay.data.access_token;
              A = ay.data.data.user_id;
              console.log("阅读token：".concat(B));
              az = "";
              aA = Date.now() + "" + Math.floor(10000000 * Math.random());
              bi.next = 88;
              return P("/aoslearnfoot/_optionp_list?activity_id=".concat(y));
            case 88:
              aB = bi.sent;
              aC = c(aB.data);
              bi.prev = 90;
              aC.s();
            case 92:
              if ((aD = aC.n()).done) {
                bi.next = 179;
                break;
              }
              aE = aD.value;
              aF = aE.id;
              console.log(aE.title);
              bi.next = 98;
              return P("/aoslearnfoot/optionp_detail?id=".concat(aE.id));
            case 98:
              if (aG = bi.sent, aG.data.task_num != aG.data.user_done_num) {
                bi.next = 102;
                break;
              }
              console.log("已完成");
              return bi.abrupt("continue", 177);
            case 102:
              if (az) {
                bi.next = 143;
                break;
              }
              console.log("获取滑块token");
              aH = 0;
            case 105:
              if (!(aH < 10)) {
                bi.next = 143;
                break;
              }
              aI = a5(10, !1);
              aJ = Math.round(new Date().getTime() / 1000).toString();
              aK = "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aF);
              aL = a0({
                once: aI,
                referer: aK,
                timestamp: aJ,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bi.next = 112;
              return P("/basemodule/_captcha_get?once=".concat(aI, "&referer=").concat(aK, "&timestamp=").concat(aJ, "&type=1&signature=").concat(encodeURIComponent(aL)));
            case 112:
              aM = bi.sent;
              console.log("滑块：".concat(aM.data.block));
              console.log("背景：".concat(aM.data.background));
              bi.next = 117;
              return U({
                slidingImage: aM.data.block,
                backImage: aM.data.background
              });
            case 117:
              if (aN = bi.sent, aN) {
                bi.next = 123;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 122;
              return a8("ddddocr服务异常");
            case 122:
              return bi.abrupt("continue", 140);
            case 123:
              console.log(aN);
              aO = aN.result - 40;
              aP = a0({
                x: aO,
                width: 324,
                track: [{
                  x: Math.floor(aO / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aO / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aO,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bi.next = 129;
              return R("/basemodule/_captcha_check", {
                token: aM.data.token,
                data: aP,
                referer: aK,
                type: aM.data.type
              });
            case 129:
              if (aQ = bi.sent, !aQ.data.result) {
                bi.next = 139;
                break;
              }
              bi.next = 133;
              return R("/aosbasemodule/intelverifcode_check", {
                validate: aQ.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 133:
              aR = bi.sent;
              az = aR.data.tokenid;
              console.log("滑块token：".concat(az));
              return bi.abrupt("break", 143);
            case 139:
              console.log("验证失败");
            case 140:
              aH++;
              bi.next = 105;
              break;
            case 143:
              if (az) {
                bi.next = 145;
                break;
              }
              return bi.abrupt("break", 179);
            case 145:
              bi.next = 147;
              return P("/aosbasemodule/_task_list?offset=0&count=".concat(aE.task_num, "&module_id=").concat(aE.m_id, "&activity_id=").concat(aE.id));
            case 147:
              aS = bi.sent;
              aT = c(aS.data);
              bi.prev = 149;
              aT.s();
            case 151:
              if ((aU = aT.n()).done) {
                bi.next = 169;
                break;
              }
              if (aV = aU.value, console.log("文章：".concat(aV.title)), 1 != aV.user_done) {
                bi.next = 157;
                break;
              }
              console.log("已完成");
              return bi.abrupt("continue", 167);
            case 157:
              var bk = {};
              bk.task_id = aV.id;
              bi.next = 159;
              return R("/aosbasemodule/task_create", bk);
            case 159:
              aW = bi.sent;
              bi.next = 162;
              return J("/api/article/detail?id=".concat(JSON.parse(aV.rule).news_id));
            case 162:
              var bl = {};
              bl.task_record_id = aW.data.task_record_id;
              bl.collect_info = "";
              bl.afs_tokenid = az;
              bl.device_token = aA;
              bi.sent;
              bi.next = 165;
              return R("/aosbasemodule/task_done", bl);
            case 165:
              aX = bi.sent;
              console.log("阅读：".concat(aX.msg));
            case 167:
              bi.next = 151;
              break;
            case 169:
              bi.next = 174;
              break;
            case 171:
              bi.prev = 171;
              bi.t0 = bi.catch(149);
              aT.e(bi.t0);
            case 174:
              bi.prev = 174;
              aT.f();
              return bi.finish(174);
            case 177:
              bi.next = 92;
              break;
            case 179:
              bi.next = 184;
              break;
            case 181:
              bi.prev = 181;
              bi.t1 = bi.catch(90);
              aC.e(bi.t1);
            case 184:
              bi.prev = 184;
              aC.f();
              return bi.finish(184);
            case 187:
              bi.next = 189;
              return P("/aoslearnfoot/_ac_detail?id=".concat(y));
            case 189:
              aY = bi.sent;
              aZ = JSON.parse(aY.data.other_set).lottery.id;
              bi.next = 193;
              return P("/aoslottery/ac_lottery_times?id=".concat(aZ));
            case 193:
              if (b0 = bi.sent, console.log("拥有".concat(b0.data.all_remain, "次抽奖")), !(b0.data.all_remain > 0)) {
                bi.next = 248;
                break;
              }
              console.log("获取抽奖滑块token");
              b1 = "";
              b2 = 0;
            case 199:
              if (!(b2 < 10)) {
                bi.next = 237;
                break;
              }
              b3 = a5(10, !1);
              b4 = Math.round(new Date().getTime() / 1000).toString();
              b5 = "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              b6 = a0({
                once: b3,
                referer: b5,
                timestamp: b4,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bi.next = 206;
              return P("/basemodule/_captcha_get?once=".concat(b3, "&referer=").concat(b5, "&timestamp=").concat(b4, "&type=1&signature=").concat(encodeURIComponent(b6)));
            case 206:
              b7 = bi.sent;
              console.log("滑块：".concat(b7.data.block));
              console.log("背景：".concat(b7.data.background));
              bi.next = 211;
              return U({
                slidingImage: b7.data.block,
                backImage: b7.data.background
              });
            case 211:
              if (b8 = bi.sent, b8) {
                bi.next = 217;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 216;
              return a8("ddddocr服务异常");
            case 216:
              return bi.abrupt("continue", 234);
            case 217:
              console.log(b8);
              b9 = b8.result - 40;
              ba = a0({
                x: b9,
                width: 324,
                track: [{
                  x: Math.floor(b9 / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 4),
                  y: 0,
                  time: 100
                }, {
                  x: b9 / 2,
                  y: 0,
                  time: 100
                }, {
                  x: b9,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bi.next = 223;
              return R("/basemodule/_captcha_check", {
                token: b7.data.token,
                data: ba,
                referer: b5,
                type: b7.data.type
              });
            case 223:
              if (bb = bi.sent, !bb.data.result) {
                bi.next = 233;
                break;
              }
              bi.next = 227;
              return R("/aosbasemodule/intelverifcode_check", {
                validate: bb.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 227:
              bc = bi.sent;
              b1 = bc.data.tokenid;
              console.log("抽奖滑块token：".concat(b1));
              return bi.abrupt("break", 237);
            case 233:
              console.log("验证失败");
            case 234:
              b2++;
              bi.next = 199;
              break;
            case 237:
              if (b1) {
                bi.next = 239;
                break;
              }
              return bi.abrupt("continue", 248);
            case 239:
              bd = 0;
            case 240:
              if (!(bd < b0.data.all_remain)) {
                bi.next = 248;
                break;
              }
              var bm = {};
              bm.id = aZ;
              bm.verif_uuid = "";
              bm.verif_code = "";
              bm.afs_tokenid = b1;
              bm.collect_info = "";
              bm.longitude = 0;
              bm.latitude = 0;
              bm.device_token = aA;
              bi.next = 243;
              return R("/aoslottery/ac_sub", bm);
            case 243:
              be = bi.sent;
              0 == be.code ? (console.log("抽奖获得：".concat(null == be || null === (bf = be.data) || void 0 === bf ? void 0 : bf.title)), 3 == (null == be || null === (bg = be.data) || void 0 === bg ? void 0 : bg.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == be || null === (bh = be.data) || void 0 === bh ? void 0 : bh.title, "\n"))) : console.log(be.msg);
            case 245:
              bd++;
              bi.next = 240;
              break;
            case 248:
              bi.next = 13;
              break;
            case 250:
              bi.next = 255;
              break;
            case 252:
              bi.prev = 252;
              bi.t2 = bi.catch(11);
              af.e(bi.t2);
            case 255:
              bi.prev = 255;
              af.f();
              return bi.finish(255);
            case 258:
              if (!n) {
                bi.next = 261;
                break;
              }
              bi.next = 261;
              return a8(n);
            case 261:
            case "end":
              return bi.stop();
          }
        }
      }, ab, null, [[11, 252, 255, 258], [90, 181, 184, 187], [149, 171, 174, 177]]);
    }));
    return E.apply(this, arguments);
  }
  function F(aa) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(ap));
                            } catch (au) {
                              $.logErr(au, ao);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return G.apply(this, arguments);
  }
  function H(aa) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ab(ac) {
      var ad;
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              ad = W();
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ad.uuid,
                    "X-SIGNATURE": ad.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  },
                  body: ad.body
                };
                $.post(ai, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(an));
                            } catch (aq) {
                              $.logErr(aq, am);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return I.apply(this, arguments);
  }
  function J(aa) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X(ac);
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ae.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": t
                };
                var aj = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: ai
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return K.apply(this, arguments);
  }
  function L(aa, ab) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ab(ac, ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = X(ac);
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": af.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": af.uuid,
                  "X-SIGNATURE": af.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": t
                };
                var al = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: ak,
                  body: ad
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ai();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ag.stop();
          }
        }
      }, ab);
    }));
    return M.apply(this, arguments);
  }
  function N(aa) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function aa(ab) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ab),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "69",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, aa);
    }));
    return O.apply(this, arguments);
  }
  function P(aa) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ab(ac) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !al) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            af();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, ab);
    }));
    return Q.apply(this, arguments);
  }
  function R(aa, ab) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function aa(ab, ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ab),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ac)
                };
                $.post(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, aa);
    }));
    return T.apply(this, arguments);
  }
  function U(aa) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ad)
                };
                $.post(ai, function (aj, ak, al) {
                  try {
                    aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(al));
                  } catch (am) {
                    $.logErr(am, ak);
                  } finally {
                    ah();
                  }
                });
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return V.apply(this, arguments);
  }
  function W() {
    var ag = new (l.loadJSEncrypt())();
    ag.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ag.encrypt(r);
    var ac = Z(),
      ad = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q),
      ae = "post%%/web/oauth/credential_auth?".concat(ad, "%%").concat(ac, "%%");
    ad = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.HmacSHA256(ae, m),
      ai = CryptoJS.enc.Hex.stringify(ah);
    var af = {};
    af.uuid = ac;
    af.signature = ai;
    af.body = ad;
    return af;
  }
  function X(aa) {
    var ab = Z(),
      ac = Date.now();
    aa.indexOf("?") > 0 && (aa = aa.substring(0, aa.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ad = CryptoJS.SHA256("".concat(aa, "&&").concat(o, "&&").concat(ab, "&&").concat(ac, "&&").concat(w, "&&").concat(u)).toString(),
      ae = {
        uuid: ab,
        time: ac,
        signature: ad
      };
    return ae;
  }
  function Y() {
    var aa = Date.now(),
      ab = a5(32, !1),
      ac = "haiyan".concat(ab).concat(aa, "2803cb8d50798c80b66ecd70da7e5fb1"),
      ad = l.md5(ac);
    return "haiyan;".concat(ab, ";").concat(aa, ";").concat(ad);
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (aa) {
      var ab = 16 * Math.random() | 0,
        ac = "x" === aa ? ab : 3 & ab | 8;
      return ac.toString(16);
    });
  }
  function a0(aa, ab, ac) {
    var ad = l.createCryptoJS(),
      ae = ad.enc.Utf8.parse(ab),
      af = ad.enc.Utf8.parse(ac),
      ag = ad.enc.Utf8.parse(JSON.stringify(aa)),
      ah = ad.AES.encrypt(ag, ae, {
        iv: af,
        mode: ad.mode.CBC,
        padding: ad.pad.Pkcs7
      });
    return ad.enc.Base64.stringify(ah.ciphertext);
  }
  function a1(aa) {
    return aa[Math.floor(Math.random() * aa.length)];
  }
  function a2() {
    var aa = "5.0.3",
      ab = Z(),
      ac = a1(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ad = "Xiaomi " + ac,
      ae = "Android",
      af = "".concat(ae.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(aa, ";1.0;null;").concat(ac),
      ag = "".concat(aa, ";").concat(ab, ";").concat(ad, ";").concat(ae, ";").concat("11", ";Release;").concat("6.8.0"),
      ah = {
        ua: af,
        commonUa: ag
      };
    return ah;
  }
  function a3() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ab = [];
    for (var ac in aa) {
      var ad = aa[ac];
      ab.push(ac + "=" + a4(ad));
    }
    return ab.length ? "" + ab.join("&") : "";
  }
  function a4(aa) {
    aa = (aa + "").toString();
    return encodeURIComponent(aa).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a5() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ac = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ad = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ae = [];
    if (ac = ac || ad.length, aa) {
      for (var af = 0; af < aa; af++) {
        ae[af] = ad[0 | Math.random() * ac];
      }
    } else {
      var ag;
      ae[8] = ae[13] = ae[18] = ae[23] = "-";
      ae[14] = "4";
      for (var ah = 0; ah < 36; ah++) {
        ae[ah] || (ag = 0 | 16 * Math.random(), ae[ah] = ad[19 == ah ? 3 & ag | 8 : ag]);
      }
    }
    return ab ? (ae.shift(), "u" + ae.join("")) : ae.join("");
  }
  function a6() {
    return a7.apply(this, arguments);
  }
  function a7() {
    a7 = i(g().mark(function ab() {
      var ac;
      return g().wrap(function ad(ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              if (ac = $.getdata("Utils_Code") || "", !ac || !Object.keys(ac).length) {
                ae.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ac);
              return ae.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ae.abrupt("return", new Promise(function () {
                var ah = i(g().mark(function ai(aj) {
                  return g().wrap(function ak(al) {
                    for (;;) {
                      switch (al.prev = al.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (an) {
                            $.setdata(an, "Utils_Code");
                            eval(an);
                            console.log("✅ Utils加载成功, 请继续");
                            aj(creatUtils());
                          });
                        case 1:
                        case "end":
                          return al.stop();
                      }
                    }
                  }, ai);
                }));
                return function (aj) {
                  return ah.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return a7.apply(this, arguments);
  }
  function a8(aa) {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function aa(ab) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              if (!$.isNode()) {
                ae.next = 5;
                break;
              }
              ae.next = 3;
              return notify.sendNotify($.name, ab);
            case 3:
              ae.next = 6;
              break;
            case 5:
              $.msg($.name, "", ab);
            case 6:
            case "end":
              return ae.stop();
          }
        }
      }, aa);
    }));
    return a9.apply(this, arguments);
  }
  i(g().mark(function aa() {
    return g().wrap(function (ab) {
      for (;;) {
        switch (ab.prev = ab.next) {
          case 0:
            ab.next = 2;
            return D();
          case 2:
          case "end":
            return ab.stop();
        }
      }
    }, aa);
  }))().catch(function (ab) {
    $.log(ab);
  }).finally(function () {
    $.done({});
  });
})();