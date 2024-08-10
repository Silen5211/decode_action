//Sat Aug 10 2024 13:38:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ae) {
      return typeof ae;
    } : function (ae) {
      return ae && "function" == typeof Symbol && ae.constructor === Symbol && ae !== Symbol.prototype ? "symbol" : typeof ae;
    };
    return b(ab);
  }
  function c(ab, ac) {
    var ae = "undefined" != typeof Symbol && ab[Symbol.iterator] || ab["@@iterator"];
    if (!ae) {
      if (Array.isArray(ab) || (ae = d(ab)) || ac && ab && "number" == typeof ab.length) {
        ae && (ab = ae);
        var af = 0,
          ag = function () {};
        return {
          s: ag,
          n: function () {
            var am = {
              done: !0
            };
            return af >= ab.length ? am : {
              done: !1,
              value: ab[af++]
            };
          },
          e: function (am) {
            throw am;
          },
          f: ag
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ah,
      ai = !0,
      aj = !1;
    return {
      s: function () {
        ae = ae.call(ab);
      },
      n: function () {
        var an = ae.next();
        ai = an.done;
        return an;
      },
      e: function (an) {
        aj = !0;
        ah = an;
      },
      f: function () {
        try {
          ai || null == ae.return || ae.return();
        } finally {
          if (aj) {
            throw ah;
          }
        }
      }
    };
  }
  function d(ab, ac) {
    if (ab) {
      if ("string" == typeof ab) {
        return f(ab, ac);
      }
      var ae = {}.toString.call(ab).slice(8, -1);
      "Object" === ae && ab.constructor && (ae = ab.constructor.name);
      return "Map" === ae || "Set" === ae ? Array.from(ab) : "Arguments" === ae || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? f(ab, ac) : void 0;
    }
  }
  function f(ab, ac) {
    (null == ac || ac > ab.length) && (ac = ab.length);
    for (var ae = 0, af = Array(ac); ae < ac; ae++) {
      af[ae] = ab[ae];
    }
    return af;
  }
  function g() {
    'use strict';

    g = function () {
      return ad;
    };
    var ac,
      ad = {},
      ae = Object.prototype,
      af = ae.hasOwnProperty,
      ag = Object.defineProperty || function (aI, aJ, aK) {
        aI[aJ] = aK.value;
      },
      ah = "function" == typeof Symbol ? Symbol : {},
      ai = ah.iterator || "@@iterator",
      aj = ah.asyncIterator || "@@asyncIterator",
      ak = ah.toStringTag || "@@toStringTag";
    function al(aI, aJ, aK) {
      var aL = {
        value: aK,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aI, aJ, aL);
      return aI[aJ];
    }
    try {
      al({}, "");
    } catch (aJ) {
      al = function (aL, aM, aN) {
        return aL[aM] = aN;
      };
    }
    function am(aL, aM, aN, aO) {
      var aP = aM && aM.prototype instanceof at ? aM : at,
        aQ = Object.create(aP.prototype),
        aR = new aG(aO || []);
      ag(aQ, "_invoke", {
        value: aC(aL, aN, aR)
      });
      return aQ;
    }
    function an(aL, aM, aN) {
      try {
        return {
          type: "normal",
          arg: aL.call(aM, aN)
        };
      } catch (aS) {
        var aP = {};
        aP.type = "throw";
        aP.arg = aS;
        return aP;
      }
    }
    ad.wrap = am;
    var ao = "suspendedStart",
      ap = "suspendedYield",
      aq = "executing",
      ar = "completed",
      as = {};
    function at() {}
    function au() {}
    function av() {}
    var aw = {};
    al(aw, ai, function () {
      return this;
    });
    var ax = Object.getPrototypeOf,
      ay = ax && ax(ax(aH([])));
    ay && ay !== ae && af.call(ay, ai) && (aw = ay);
    av.prototype = at.prototype = Object.create(aw);
    var az = av.prototype;
    function aA(aL) {
      ["next", "throw", "return"].forEach(function (aN) {
        al(aL, aN, function (aO) {
          return this._invoke(aN, aO);
        });
      });
    }
    function aB(aL, aM) {
      function aQ(aR, aS, aT, aU) {
        var aW = an(aL[aR], aL, aS);
        if ("throw" !== aW.type) {
          var aX = aW.arg,
            aY = aX.value;
          return aY && "object" == b(aY) && af.call(aY, "__await") ? aM.resolve(aY.__await).then(function (b0) {
            aQ("next", b0, aT, aU);
          }, function (b0) {
            aQ("throw", b0, aT, aU);
          }) : aM.resolve(aY).then(function (b0) {
            aX.value = b0;
            aT(aX);
          }, function (b0) {
            return aQ("throw", b0, aT, aU);
          });
        }
        aU(aW.arg);
      }
      var aO;
      ag(this, "_invoke", {
        value: function (aR, aS) {
          function aU() {
            return new aM(function (aW, aX) {
              aQ(aR, aS, aW, aX);
            });
          }
          return aO = aO ? aO.then(aU, aU) : aU();
        }
      });
    }
    function aC(aL, aM, aN) {
      var aP = ao;
      return function (aR, aS) {
        if (aP === aq) {
          throw Error("Generator is already running");
        }
        if (aP === ar) {
          if ("throw" === aR) {
            throw aS;
          }
          var aU = {
            value: ac,
            done: !0
          };
          return aU;
        }
        for (aN.method = aR, aN.arg = aS;;) {
          var aV = aN.delegate;
          if (aV) {
            var aW = aD(aV, aN);
            if (aW) {
              if (aW === as) {
                continue;
              }
              return aW;
            }
          }
          if ("next" === aN.method) {
            aN.sent = aN._sent = aN.arg;
          } else {
            if ("throw" === aN.method) {
              if (aP === ao) {
                throw aP = ar, aN.arg;
              }
              aN.dispatchException(aN.arg);
            } else {
              "return" === aN.method && aN.abrupt("return", aN.arg);
            }
          }
          aP = aq;
          var aX = an(aL, aM, aN);
          if ("normal" === aX.type) {
            if (aP = aN.done ? ar : ap, aX.arg === as) {
              continue;
            }
            var aY = {};
            aY.value = aX.arg;
            aY.done = aN.done;
            return aY;
          }
          "throw" === aX.type && (aP = ar, aN.method = "throw", aN.arg = aX.arg);
        }
      };
    }
    function aD(aL, aM) {
      var aR = aM.method,
        aS = aL.iterator[aR];
      if (aS === ac) {
        aM.delegate = null;
        "throw" === aR && aL.iterator.return && (aM.method = "return", aM.arg = ac, aD(aL, aM), "throw" === aM.method) || "return" !== aR && (aM.method = "throw", aM.arg = new TypeError("The iterator does not provide a '" + aR + "' method"));
        return as;
      }
      var aP = an(aS, aL.iterator, aM.arg);
      if ("throw" === aP.type) {
        aM.method = "throw";
        aM.arg = aP.arg;
        aM.delegate = null;
        return as;
      }
      var aQ = aP.arg;
      return aQ ? aQ.done ? (aM[aL.resultName] = aQ.value, aM.next = aL.nextLoc, "return" !== aM.method && (aM.method = "next", aM.arg = ac), aM.delegate = null, as) : aQ : (aM.method = "throw", aM.arg = new TypeError("iterator result is not an object"), aM.delegate = null, as);
    }
    function aE(aL) {
      var aM = {
        tryLoc: aL[0]
      };
      var aN = aM;
      1 in aL && (aN.catchLoc = aL[1]);
      2 in aL && (aN.finallyLoc = aL[2], aN.afterLoc = aL[3]);
      this.tryEntries.push(aN);
    }
    function aF(aL) {
      var aM = aL.completion || {};
      aM.type = "normal";
      delete aM.arg;
      aL.completion = aM;
    }
    function aG(aL) {
      var aM = {
        tryLoc: "root"
      };
      this.tryEntries = [aM];
      aL.forEach(aE, this);
      this.reset(!0);
    }
    function aH(aL) {
      if (aL || "" === aL) {
        var aN = aL[ai];
        if (aN) {
          return aN.call(aL);
        }
        if ("function" == typeof aL.next) {
          return aL;
        }
        if (!isNaN(aL.length)) {
          var aO = -1,
            aP = function aR() {
              for (; ++aO < aL.length;) {
                if (af.call(aL, aO)) {
                  aR.value = aL[aO];
                  aR.done = !1;
                  return aR;
                }
              }
              aR.value = ac;
              aR.done = !0;
              return aR;
            };
          return aP.next = aP;
        }
      }
      throw new TypeError(b(aL) + " is not iterable");
    }
    au.prototype = av;
    ag(az, "constructor", {
      value: av,
      configurable: !0
    });
    ag(av, "constructor", {
      value: au,
      configurable: !0
    });
    au.displayName = al(av, ak, "GeneratorFunction");
    ad.isGeneratorFunction = function (aL) {
      var aM = "function" == typeof aL && aL.constructor;
      return !!aM && (aM === au || "GeneratorFunction" === (aM.displayName || aM.name));
    };
    ad.mark = function (aL) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aL, av) : (aL.__proto__ = av, al(aL, ak, "GeneratorFunction"));
      aL.prototype = Object.create(az);
      return aL;
    };
    ad.awrap = function (aL) {
      var aM = {
        __await: aL
      };
      return aM;
    };
    aA(aB.prototype);
    al(aB.prototype, aj, function () {
      return this;
    });
    ad.AsyncIterator = aB;
    ad.async = function (aL, aM, aN, aO, aP) {
      void 0 === aP && (aP = Promise);
      var aR = new aB(am(aL, aM, aN, aO), aP);
      return ad.isGeneratorFunction(aM) ? aR : aR.next().then(function (aS) {
        return aS.done ? aS.value : aR.next();
      });
    };
    aA(az);
    al(az, ak, "Generator");
    al(az, ai, function () {
      return this;
    });
    al(az, "toString", function () {
      return "[object Generator]";
    });
    ad.keys = function (aL) {
      var aN = Object(aL),
        aO = [];
      for (var aP in aN) aO.push(aP);
      aO.reverse();
      return function aQ() {
        for (; aO.length;) {
          var aS = aO.pop();
          if (aS in aN) {
            aQ.value = aS;
            aQ.done = !1;
            return aQ;
          }
        }
        aQ.done = !0;
        return aQ;
      };
    };
    ad.values = aH;
    aG.prototype = {
      constructor: aG,
      reset: function (aL) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ac, this.done = !1, this.delegate = null, this.method = "next", this.arg = ac, this.tryEntries.forEach(aF), !aL) {
          for (var aM in this) "t" === aM.charAt(0) && af.call(this, aM) && !isNaN(+aM.slice(1)) && (this[aM] = ac);
        }
      },
      stop: function () {
        this.done = !0;
        var aL = this.tryEntries[0].completion;
        if ("throw" === aL.type) {
          throw aL.arg;
        }
        return this.rval;
      },
      dispatchException: function (aL) {
        if (this.done) {
          throw aL;
        }
        var aN = this;
        function aT(aU, aV) {
          aQ.type = "throw";
          aQ.arg = aL;
          aN.next = aU;
          aV && (aN.method = "next", aN.arg = ac);
          return !!aV;
        }
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO],
            aQ = aP.completion;
          if ("root" === aP.tryLoc) {
            return aT("end");
          }
          if (aP.tryLoc <= this.prev) {
            var aR = af.call(aP, "catchLoc"),
              aS = af.call(aP, "finallyLoc");
            if (aR && aS) {
              if (this.prev < aP.catchLoc) {
                return aT(aP.catchLoc, !0);
              }
              if (this.prev < aP.finallyLoc) {
                return aT(aP.finallyLoc);
              }
            } else {
              if (aR) {
                if (this.prev < aP.catchLoc) {
                  return aT(aP.catchLoc, !0);
                }
              } else {
                if (!aS) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aP.finallyLoc) {
                  return aT(aP.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aL, aM) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc <= this.prev && af.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
            var aQ = aP;
            break;
          }
        }
        aQ && ("break" === aL || "continue" === aL) && aQ.tryLoc <= aM && aM <= aQ.finallyLoc && (aQ = null);
        var aR = aQ ? aQ.completion : {};
        aR.type = aL;
        aR.arg = aM;
        return aQ ? (this.method = "next", this.next = aQ.finallyLoc, as) : this.complete(aR);
      },
      complete: function (aL, aM) {
        if ("throw" === aL.type) {
          throw aL.arg;
        }
        "break" === aL.type || "continue" === aL.type ? this.next = aL.arg : "return" === aL.type ? (this.rval = this.arg = aL.arg, this.method = "return", this.next = "end") : "normal" === aL.type && aM && (this.next = aM);
        return as;
      },
      finish: function (aL) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.finallyLoc === aL) {
            this.complete(aO.completion, aO.afterLoc);
            aF(aO);
            return as;
          }
        }
      },
      catch: function (aL) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.tryLoc === aL) {
            var aO = aN.completion;
            if ("throw" === aO.type) {
              var aP = aO.arg;
              aF(aN);
            }
            return aP;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aL, aM, aN) {
        this.delegate = {
          iterator: aH(aL),
          resultName: aM,
          nextLoc: aN
        };
        "next" === this.method && (this.arg = ac);
        return as;
      }
    };
    return ad;
  }
  function h(ab, ac, ad, ae, af, ag, ah) {
    try {
      var ak = ab[ag](ah),
        al = ak.value;
    } catch (ao) {
      return void ad(ao);
    }
    ak.done ? ac(al) : Promise.resolve(al).then(ae, af);
  }
  function i(ab) {
    return function () {
      var ae = this,
        af = arguments;
      return new Promise(function (ag, ah) {
        var aj = ab.apply(ae, af);
        function ak(am) {
          h(aj, ag, ah, ak, al, "next", am);
        }
        function al(am) {
          h(aj, ag, ah, ak, al, "throw", am);
        }
        ak(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.QingJiao : $.getdata("QingJiao")) || "",
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
    u = "",
    v = "23",
    w = "34",
    x = "FR*r!isE5W",
    y = "9080827ac7bea8dd4f8987a4bfc85b15",
    z = "",
    A = "0",
    B = "",
    D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ad() {
      var af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV;
      return g().wrap(function (aX) {
        for (;;) {
          switch (aX.prev = aX.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aX.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aX.next = 5;
              return a9("先去boxjs填写账号密码");
            case 5:
              return aX.abrupt("return");
            case 6:
              aX.next = 8;
              return a7();
            case 8:
              l = aX.sent;
              af = j.split(" ");
              ag = c(af);
              aX.prev = 11;
              ag.s();
            case 13:
              if ((ah = ag.n()).done) {
                aX.next = 154;
                break;
              }
              ai = ah.value;
              console.log("随机生成UA");
              aj = a3();
              s = aj.ua;
              t = aj.commonUa;
              u = aj.uuid;
              console.log(s);
              console.log(t);
              q = ai.split("&")[0];
              r = ai.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              aX.next = 28;
              return M("/api/account/init");
            case 28:
              ak = aX.sent;
              o = ak.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              aX.next = 34;
              return G("/web/init?client_id=".concat(w));
            case 34:
              al = aX.sent;
              m = al.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              aX.next = 40;
              return I("/web/oauth/credential_auth");
            case 40:
              if (am = aX.sent, am.data) {
                aX.next = 44;
                break;
              }
              console.log(am.message);
              return aX.abrupt("continue", 152);
            case 44:
              an = am.data.authorization_code.code;
              console.log(an);
              console.log("登录");
              aX.next = 49;
              return M("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
            case 49:
              if (ao = aX.sent, console.log("登录成功"), p = ao.data.session.account_id, o = ao.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), D) {
                aX.next = 66;
                break;
              }
              aX.next = 59;
              return K("/api/app_start_page/list/new?height=2260&width=1080");
            case 59:
              for (ap = aX.sent, aq = decodeURIComponent(ap.data.app_start_page_list[1].url), ar = aq.split("?")[1], as = {}, at = ar.split("&"), au = 0, av = at.length; au < av; au++) {
                aw = at[au].split("=");
                as[aw[0]] = aw[1];
              }
              D = as.id;
            case 66:
              if (D) {
                aX.next = 69;
                break;
              }
              console.log("获取id失败");
              return aX.abrupt("continue", 152);
            case 69:
              console.log(D);
              console.log("获取apiDt");
              aX.next = 73;
              return O("/aosbase/_auth_dt");
            case 73:
              ax = aX.sent;
              z = ax.data.substring(32, 68);
              console.log(z);
              ay = {
                app_user_token: o,
                appid: "jiaojiang",
                noncestr: a6(6, !1),
                phone: q,
                portrait_url: ao.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ao.data.account.id,
                user_name: ao.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              ay.signature = l.md5(a4(ay) + "&appkey=".concat(y));
              aX.next = 80;
              return T("/aosbase/_auth_appuserinit", ay);
            case 80:
              az = aX.sent;
              B = az.data.access_token;
              A = az.data.data.user_id;
              aA = Date.now() + "" + Math.floor(10000000 * Math.random());
              aB = D;
              aX.next = 87;
              return Q("/aoslottery/ac_lottery_times?id=".concat(aB));
            case 87:
              if (aC = aX.sent, console.log("拥有".concat(aC.data.day_remain, "次抽奖")), !(aC.data.day_remain > 0)) {
                aX.next = 152;
                break;
              }
              console.log("获取抽奖滑块token");
              aD = "";
              aE = 0;
            case 93:
              if (!(aE < 3)) {
                aX.next = 132;
                break;
              }
              aF = a6(10, !1);
              aG = Math.round(new Date().getTime() / 1000).toString();
              aH = "https://jiaojiang.y-h5.iyunxh.com/module-lottery/home/home?hide_back=1";
              aI = a1({
                once: aF,
                referer: aH,
                timestamp: aG,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              aX.next = 100;
              return Q("/basemodule/_captcha_get?once=".concat(aF, "&referer=").concat(aH, "&timestamp=").concat(aG, "&type=1&signature=").concat(encodeURIComponent(aI)));
            case 100:
              aJ = aX.sent;
              console.log("滑块：".concat(aJ.data.block));
              console.log("背景：".concat(aJ.data.background));
              aX.next = 105;
              return V({
                slidingImage: aJ.data.block,
                backImage: aJ.data.background
              });
            case 105:
              if (aK = aX.sent, aK) {
                aX.next = 111;
                break;
              }
              console.log("ddddocr服务异常");
              aX.next = 110;
              return a9("ddddocr服务异常");
            case 110:
              return aX.abrupt("continue", 129);
            case 111:
              console.log(aK);
              aL = aK.result;
              aM = a1({
                x: aL,
                width: 384,
                track: [{
                  x: Math.floor(aL / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aL / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aL / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aL / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aL / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aL,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              aX.next = 117;
              return T("/basemodule/_captcha_check", {
                token: aJ.data.token,
                data: aM,
                referer: aH,
                type: aJ.data.type
              });
            case 117:
              if (aN = aX.sent, !aN.data.result) {
                aX.next = 128;
                break;
              }
              console.log("验证成功");
              aX.next = 122;
              return T("/aosbasemodule/intelverifcode_check", {
                validate: aN.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 122:
              aO = aX.sent;
              aD = aO.data.tokenid;
              console.log("滑块token：".concat(aD));
              return aX.abrupt("break", 132);
            case 128:
              console.log("验证失败");
            case 129:
              aE++;
              aX.next = 93;
              break;
            case 132:
              if (aD) {
                aX.next = 134;
                break;
              }
              return aX.abrupt("continue", 152);
            case 134:
              aX.next = 136;
              return Q("/aoslottery/_ac_detail?id=".concat(aB));
            case 136:
              aP = aX.sent;
              aQ = 0;
            case 138:
              if (!(aQ < aC.data.day_remain)) {
                aX.next = 152;
                break;
              }
              aX.next = 141;
              return T("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 3,
                module_id: aP.data.m_id,
                content_id: aP.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: aP.data.title,
                device_token: aA,
                user_id: az.data.data.user_id,
                user_name: az.data.data.user_name,
                phone_num: q,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 141:
              if (aR = aX.sent, console.log("抽奖提交：".concat(aR.msg)), 0 == aR.code) {
                aX.next = 145;
                break;
              }
              return aX.abrupt("continue", 149);
            case 145:
              var aZ = {};
              aZ.id = aB;
              aZ.verif_uuid = "";
              aZ.verif_code = "";
              aZ.afs_tokenid = aD;
              aZ.collect_info = "";
              aZ.longitude = 0;
              aZ.latitude = 0;
              aZ.device_token = aA;
              aX.next = 147;
              return T("/aoslottery/ac_sub", aZ);
            case 147:
              aS = aX.sent;
              0 == aS.code ? (console.log("抽奖获得：".concat(null == aS || null === (aT = aS.data) || void 0 === aT ? void 0 : aT.title)), 3 == (null == aS || null === (aU = aS.data) || void 0 === aU ? void 0 : aU.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == aS || null === (aV = aS.data) || void 0 === aV ? void 0 : aV.title, "\n"))) : "o d w" == aS.msg ? console.log("谢谢参与") : console.log(aS.msg);
            case 149:
              aQ++;
              aX.next = 138;
              break;
            case 152:
              aX.next = 13;
              break;
            case 154:
              aX.next = 159;
              break;
            case 156:
              aX.prev = 156;
              aX.t0 = aX.catch(11);
              ag.e(aX.t0);
            case 159:
              aX.prev = 159;
              ag.f();
              return aX.finish(159);
            case 162:
              if (!n) {
                aX.next = 165;
                break;
              }
              aX.next = 165;
              return a9(n);
            case 165:
            case "end":
              return aX.stop();
          }
        }
      }, ad, null, [[11, 156, 159, 162]]);
    }));
    return F.apply(this, arguments);
  }
  function G(ab) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://passport.tmuyun.com".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aj(JSON.parse(ar));
                            } catch (ax) {
                              $.logErr(ax, aq);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return H.apply(this, arguments);
  }
  function I(ab) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ac(ad) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X();
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": s
                };
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: aj,
                  body: ae.body
                };
                $.post(ak, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(ap));
                            } catch (av) {
                              $.logErr(av, ao);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am);
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
      }, ac);
    }));
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ac(ad) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = Y(ad);
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://vapp.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ae.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
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
      }, ac);
    }));
    return L.apply(this, arguments);
  }
  function M(ab, ac) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ac(ad, ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = Y(ad);
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://vapp.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ae
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ai();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ac);
    }));
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "2414",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ai, function () {
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
              return af.stop();
          }
        }
      }, ac);
    }));
    return P.apply(this, arguments);
  }
  function Q(ab) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ai, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ag();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
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
    return R.apply(this, arguments);
  }
  function T(ab, ac) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ae)
                };
                $.post(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
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
              return af.stop();
          }
        }
      }, ac);
    }));
    return U.apply(this, arguments);
  }
  function V(ab) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ac)
                };
                $.post(ah, function (ai, aj, ak) {
                  try {
                    ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : af(JSON.parse(ak));
                  } catch (al) {
                    $.logErr(al, aj);
                  } finally {
                    af();
                  }
                });
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return W.apply(this, arguments);
  }
  function X() {
    var ag = new (l.loadJSEncrypt())();
    ag.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ag.encrypt(r);
    var ad = a0(),
      ae = "client_id=".concat(w, "&password=").concat(r, "&phone_number=").concat(q),
      af = "post%%/web/oauth/credential_auth?".concat(ae, "%%").concat(ad, "%%");
    ae = "client_id=".concat(w, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.HmacSHA256(af, m),
      ai = CryptoJS.enc.Hex.stringify(ah);
    var aj = {};
    aj.uuid = ad;
    aj.signature = ai;
    aj.body = ae;
    return aj;
  }
  function Y(ab) {
    var ac = a0(),
      ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(o, "&&").concat(ac, "&&").concat(ad, "&&").concat(x, "&&").concat(v)).toString(),
      af = {
        uuid: ac,
        time: ad,
        signature: ae
      };
    return af;
  }
  function Z() {
    var ab = Date.now(),
      ac = a6(32, !1),
      ad = "jiaojiang".concat(ac).concat(ab, "60b56a9e29ea4cdbe7e6544bee4b6f9c"),
      ae = l.md5(ad);
    return "jiaojiang;".concat(ac, ";").concat(ab, ";").concat(ae);
  }
  function a0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ab) {
      var ac = 16 * Math.random() | 0,
        ad = "x" === ab ? ac : 3 & ac | 8;
      return ad.toString(16);
    });
  }
  function a1(ab, ac, ad) {
    var ae = l.createCryptoJS(),
      af = ae.enc.Utf8.parse(ac),
      ag = ae.enc.Utf8.parse(ad),
      ah = ae.enc.Utf8.parse(JSON.stringify(ab)),
      ai = ae.AES.encrypt(ah, af, {
        iv: ag,
        mode: ae.mode.CBC,
        padding: ae.pad.Pkcs7
      });
    return ae.enc.Base64.stringify(ai.ciphertext);
  }
  function a2(ab) {
    return ab[Math.floor(Math.random() * ab.length)];
  }
  function a3() {
    var ab = "1.2.4",
      ac = a0(),
      ad = a2(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ae = "Xiaomi " + ad,
      af = "Android",
      ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ab, ";1.0;null;").concat(ad),
      ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";Release;").concat("6.8.0"),
      ai = {
        ua: ag,
        commonUa: ah,
        uuid: ac
      };
    return ai;
  }
  function a4() {
    var ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ac = [];
    for (var ad in ab) {
      var ae = ab[ad];
      ac.push(ad + "=" + a5(ae));
    }
    return ac.length ? "" + ac.join("&") : "";
  }
  function a5(ab) {
    ab = (ab + "").toString();
    return encodeURIComponent(ab).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a6() {
    var ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ac = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ad = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ae = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      af = [];
    if (ad = ad || ae.length, ab) {
      for (var ag = 0; ag < ab; ag++) {
        af[ag] = ae[0 | Math.random() * ad];
      }
    } else {
      var ah;
      af[8] = af[13] = af[18] = af[23] = "-";
      af[14] = "4";
      for (var ai = 0; ai < 36; ai++) {
        af[ai] || (ah = 0 | 16 * Math.random(), af[ai] = ae[19 == ai ? 3 & ah | 8 : ah]);
      }
    }
    return ac ? (af.shift(), "u" + af.join("")) : af.join("");
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ac() {
      var ae;
      return g().wrap(function af(ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (ae = $.getdata("Utils_Code") || "", !ae || !Object.keys(ae).length) {
                ag.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ae);
              return ag.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ag.abrupt("return", new Promise(function () {
                var ai = i(g().mark(function aj(ak) {
                  return g().wrap(function am(an) {
                    for (;;) {
                      switch (an.prev = an.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ap) {
                            $.setdata(ap, "Utils_Code");
                            eval(ap);
                            console.log("✅ Utils加载成功, 请继续");
                            ak(creatUtils());
                          });
                        case 1:
                        case "end":
                          return an.stop();
                      }
                    }
                  }, aj);
                }));
                return function (ak) {
                  return ai.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ab) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              if (!$.isNode()) {
                ae.next = 5;
                break;
              }
              ae.next = 3;
              return notify.sendNotify($.name, ad);
            case 3:
              ae.next = 6;
              break;
            case 5:
              $.msg($.name, "", ad);
            case 6:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return aa.apply(this, arguments);
  }
  i(g().mark(function ab() {
    return g().wrap(function (ae) {
      for (;;) {
        switch (ae.prev = ae.next) {
          case 0:
            ae.next = 2;
            return E();
          case 2:
          case "end":
            return ae.stop();
        }
      }
    }, ab);
  }))().catch(function (ac) {
    $.log(ac);
  }).finally(function () {
    $.done({});
  });
})();