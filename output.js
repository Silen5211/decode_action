//Thu Aug 15 2024 08:54:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ad) {
      return typeof ad;
    } : function (ad) {
      return ad && "function" == typeof Symbol && ad.constructor === Symbol && ad !== Symbol.prototype ? "symbol" : typeof ad;
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
            var al = {
              done: !0
            };
            return af >= ab.length ? al : {
              done: !1,
              value: ab[af++]
            };
          },
          e: function (al) {
            throw al;
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
        var am = ae.next();
        ai = am.done;
        return am;
      },
      e: function (am) {
        aj = !0;
        ah = am;
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
      } catch (aQ) {
        var aO = {
          type: "throw",
          arg: aQ
        };
        return aO;
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
        al(aL, aN, function (aQ) {
          return this._invoke(aN, aQ);
        });
      });
    }
    function aB(aL, aM) {
      function aQ(aR, aS, aT, aU) {
        var aW = an(aL[aR], aL, aS);
        if ("throw" !== aW.type) {
          var aX = aW.arg,
            aY = aX.value;
          return aY && "object" == b(aY) && af.call(aY, "__await") ? aM.resolve(aY.__await).then(function (b1) {
            aQ("next", b1, aT, aU);
          }, function (b1) {
            aQ("throw", b1, aT, aU);
          }) : aM.resolve(aY).then(function (b1) {
            aX.value = b1;
            aT(aX);
          }, function (b1) {
            return aQ("throw", b1, aT, aU);
          });
        }
        aU(aW.arg);
      }
      var aO;
      ag(this, "_invoke", {
        value: function (aR, aS) {
          function aU() {
            return new aM(function (aX, aY) {
              aQ(aR, aS, aX, aY);
            });
          }
          return aO = aO ? aO.then(aU, aU) : aU();
        }
      });
    }
    function aC(aL, aM, aN) {
      var aP = ao;
      return function (aQ, aR) {
        if (aP === aq) {
          throw Error("Generator is already running");
        }
        if (aP === ar) {
          if ("throw" === aQ) {
            throw aR;
          }
          var aT = {};
          aT.value = ac;
          aT.done = !0;
          return aT;
        }
        for (aN.method = aQ, aN.arg = aR;;) {
          var aU = aN.delegate;
          if (aU) {
            var aV = aD(aU, aN);
            if (aV) {
              if (aV === as) {
                continue;
              }
              return aV;
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
          var aW = an(aL, aM, aN);
          if ("normal" === aW.type) {
            if (aP = aN.done ? ar : ap, aW.arg === as) {
              continue;
            }
            var aX = {};
            aX.value = aW.arg;
            aX.done = aN.done;
            return aX;
          }
          "throw" === aW.type && (aP = ar, aN.method = "throw", aN.arg = aW.arg);
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
      var aT = an(aS, aL.iterator, aM.arg);
      if ("throw" === aT.type) {
        aM.method = "throw";
        aM.arg = aT.arg;
        aM.delegate = null;
        return as;
      }
      var aQ = aT.arg;
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
      var aN = {
        tryLoc: "root"
      };
      this.tryEntries = [aN];
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
      var aQ = new aB(am(aL, aM, aN, aO), aP);
      return ad.isGeneratorFunction(aM) ? aQ : aQ.next().then(function (aR) {
        return aR.done ? aR.value : aQ.next();
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
          var aR = aO.pop();
          if (aR in aN) {
            aQ.value = aR;
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
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.tryLoc <= this.prev && af.call(aO, "finallyLoc") && this.prev < aO.finallyLoc) {
            var aP = aO;
            break;
          }
        }
        aP && ("break" === aL || "continue" === aL) && aP.tryLoc <= aM && aM <= aP.finallyLoc && (aP = null);
        var aQ = aP ? aP.completion : {};
        aQ.type = aL;
        aQ.arg = aM;
        return aP ? (this.method = "next", this.next = aP.finallyLoc, as) : this.complete(aQ);
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
        var aM = {};
        aM.bsWQh = function (aS, aT) {
          return aS < aT;
        };
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc === aL) {
            var aQ = aP.completion;
            if ("throw" === aQ.type) {
              var aR = aQ.arg;
              aF(aP);
            }
            return aR;
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
      var aj = ab[ag](ah),
        ak = aj.value;
    } catch (an) {
      return void ad(an);
    }
    aj.done ? ac(ak) : Promise.resolve(ak).then(ae, af);
  }
  function i(ab) {
    return function () {
      var ae = this,
        af = arguments;
      return new Promise(function (ag, ah) {
        var ai = ab.apply(ae, af);
        function aj(al) {
          h(ai, ag, ah, aj, ak, "next", al);
        }
        function ak(al) {
          h(ai, ag, ah, aj, ak, "throw", al);
        }
        aj(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.JingZhou : $.getdata("JingZhou")) || "",
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
    u = "92",
    v = "10046",
    w = "FR*r!isE5W",
    x = "f91a1cb01788cc566f646246917c836c",
    y = "28",
    z = "",
    A = "",
    B = "",
    D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ad() {
      var ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be;
      return g().wrap(function (bg) {
        for (;;) {
          switch (bg.prev = bg.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bg.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bg.next = 5;
              return a9("先去boxjs填写账号密码");
            case 5:
              return bg.abrupt("return");
            case 6:
              bg.next = 8;
              return a7();
            case 8:
              l = bg.sent;
              ag = j.split(" ");
              ah = c(ag);
              bg.prev = 11;
              ah.s();
            case 13:
              if ((ai = ah.n()).done) {
                bg.next = 256;
                break;
              }
              aj = ai.value;
              console.log("随机生成UA");
              ak = a3();
              s = ak.ua;
              t = ak.commonUa;
              console.log(s);
              console.log(t);
              q = aj.split("&")[0];
              r = aj.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bg.next = 27;
              return M("/api/account/init");
            case 27:
              al = bg.sent;
              o = al.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bg.next = 33;
              return G("/web/init?client_id=".concat(v));
            case 33:
              am = bg.sent;
              m = am.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bg.next = 39;
              return I("/web/oauth/credential_auth");
            case 39:
              if (an = bg.sent, an.data) {
                bg.next = 43;
                break;
              }
              console.log(an.message);
              return bg.abrupt("continue", 254);
            case 43:
              ao = an.data.authorization_code.code;
              console.log(ao);
              console.log("登录");
              bg.next = 48;
              return M("/api/zbtxz/login", "check_token=&code=".concat(ao, "&token=&type=-1&union_id="));
            case 48:
              if (ap = bg.sent, console.log("登录成功"), p = ap.data.session.account_id, o = ap.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), z) {
                bg.next = 62;
                break;
              }
              bg.next = 58;
              return K("/api/article/channel_list?channel_id=652c1cfd79f6be647c218fc4&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 58:
              aq = bg.sent;
              ar = /\/module-study\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/;
              as = JSON.stringify(aq).match(ar);
              as && (z = as[1]);
            case 62:
              if (z) {
                bg.next = 65;
                break;
              }
              console.log("获取id失败");
              return bg.abrupt("continue", 254);
            case 65:
              console.log(z);
              console.log("获取apiDt");
              bg.next = 69;
              return O("/aosbase/_auth_dt");
            case 69:
              at = bg.sent;
              A = at.data.substring(32, 68);
              console.log(A);
              B = "0";
              au = {
                app_user_token: o,
                appid: "wifizs",
                noncestr: a6(6, !1),
                phone: q,
                portrait_url: ap.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ap.data.account.id,
                user_name: ap.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              au.signature = l.md5(a4(au) + "&appkey=".concat(x));
              bg.next = 77;
              return T("/aosbase/_auth_appuserinit", au);
            case 77:
              av = bg.sent;
              D = av.data.access_token;
              B = av.data.data.user_id;
              console.log("阅读token：".concat(D));
              aw = "";
              ax = Date.now() + "" + Math.floor(10000000 * Math.random());
              bg.next = 85;
              return Q("/aoslearnfoot/_optionp_list?activity_id=".concat(z));
            case 85:
              ay = bg.sent;
              az = c(ay.data);
              bg.prev = 87;
              az.s();
            case 89:
              if ((aA = az.n()).done) {
                bg.next = 176;
                break;
              }
              aB = aA.value;
              aC = aB.id;
              console.log(aB.title);
              bg.next = 95;
              return Q("/aoslearnfoot/optionp_detail?id=".concat(aB.id));
            case 95:
              if (aD = bg.sent, !(aD.data.task_num <= aD.data.user_done_num)) {
                bg.next = 99;
                break;
              }
              console.log("已完成");
              return bg.abrupt("continue", 174);
            case 99:
              if (aw) {
                bg.next = 140;
                break;
              }
              console.log("获取滑块token");
              aE = 0;
            case 102:
              if (!(aE < 3)) {
                bg.next = 140;
                break;
              }
              aF = a6(10, !1);
              aG = Math.round(new Date().getTime() / 1000).toString();
              aH = "https://wifizs.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aC);
              aI = a1({
                once: aF,
                referer: aH,
                timestamp: aG,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bg.next = 109;
              return Q("/basemodule/_captcha_get?once=".concat(aF, "&referer=").concat(aH, "&timestamp=").concat(aG, "&type=1&signature=").concat(encodeURIComponent(aI)));
            case 109:
              aJ = bg.sent;
              console.log("滑块：".concat(aJ.data.block));
              console.log("背景：".concat(aJ.data.background));
              bg.next = 114;
              return V({
                slidingImage: aJ.data.block,
                backImage: aJ.data.background
              });
            case 114:
              if (aK = bg.sent, aK) {
                bg.next = 120;
                break;
              }
              console.log("ddddocr服务异常");
              bg.next = 119;
              return a9("ddddocr服务异常");
            case 119:
              return bg.abrupt("continue", 137);
            case 120:
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
              bg.next = 126;
              return T("/basemodule/_captcha_check", {
                token: aJ.data.token,
                data: aM,
                referer: aH,
                type: aJ.data.type
              });
            case 126:
              if (aN = bg.sent, !aN.data.result) {
                bg.next = 136;
                break;
              }
              bg.next = 130;
              return T("/aosbasemodule/intelverifcode_check", {
                validate: aN.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 130:
              aO = bg.sent;
              aw = aO.data.tokenid;
              console.log("滑块token：".concat(aw));
              return bg.abrupt("break", 140);
            case 136:
              console.log("验证失败");
            case 137:
              aE++;
              bg.next = 102;
              break;
            case 140:
              if (aw) {
                bg.next = 142;
                break;
              }
              return bg.abrupt("break", 176);
            case 142:
              bg.next = 144;
              return Q("/aosbasemodule/_task_list?offset=0&count=".concat(aB.task_num, "&module_id=").concat(aB.m_id, "&activity_id=").concat(aB.id));
            case 144:
              aP = bg.sent;
              aQ = c(aP.data);
              bg.prev = 146;
              aQ.s();
            case 148:
              if ((aR = aQ.n()).done) {
                bg.next = 166;
                break;
              }
              if (aS = aR.value, console.log("文章：".concat(aS.title)), 1 != aS.user_done) {
                bg.next = 154;
                break;
              }
              console.log("已完成");
              return bg.abrupt("continue", 164);
            case 154:
              var bi = {};
              bi.task_id = aS.id;
              bg.next = 156;
              return T("/aosbasemodule/task_create", bi);
            case 156:
              aT = bg.sent;
              bg.next = 159;
              return K("/api/article/detail?id=".concat(JSON.parse(aS.rule).news_id));
            case 159:
              var bj = {};
              bj.task_record_id = aT.data.task_record_id;
              bj.collect_info = "";
              bj.afs_tokenid = aw;
              bj.device_token = ax;
              bg.sent;
              bg.next = 162;
              return T("/aosbasemodule/task_done", bj);
            case 162:
              aU = bg.sent;
              console.log("阅读：".concat(aU.msg));
            case 164:
              bg.next = 148;
              break;
            case 166:
              bg.next = 171;
              break;
            case 168:
              bg.prev = 168;
              bg.t0 = bg.catch(146);
              aQ.e(bg.t0);
            case 171:
              bg.prev = 171;
              aQ.f();
              return bg.finish(171);
            case 174:
              bg.next = 89;
              break;
            case 176:
              bg.next = 181;
              break;
            case 178:
              bg.prev = 178;
              bg.t1 = bg.catch(87);
              az.e(bg.t1);
            case 181:
              bg.prev = 181;
              az.f();
              return bg.finish(181);
            case 184:
              bg.next = 186;
              return Q("/aoslearnfoot/_ac_detail?id=".concat(z));
            case 186:
              aV = bg.sent;
              aW = JSON.parse(aV.data.other_set).lottery.id;
              bg.next = 190;
              return Q("/aoslottery/ac_lottery_times?id=".concat(aW));
            case 190:
              if (aX = bg.sent, console.log("拥有".concat(aX.data.day_remain, "次抽奖")), !(aX.data.day_remain > 0)) {
                bg.next = 254;
                break;
              }
              if (aw) {
                bg.next = 234;
                break;
              }
              console.log("获取抽奖滑块token");
              aY = 0;
            case 196:
              if (!(aY < 3)) {
                bg.next = 234;
                break;
              }
              aZ = a6(10, !1);
              b0 = Math.round(new Date().getTime() / 1000).toString();
              b1 = "https://wifizs.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              b2 = a1({
                once: aZ,
                referer: b1,
                timestamp: b0,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bg.next = 203;
              return Q("/basemodule/_captcha_get?once=".concat(aZ, "&referer=").concat(b1, "&timestamp=").concat(b0, "&type=1&signature=").concat(encodeURIComponent(b2)));
            case 203:
              b3 = bg.sent;
              console.log("滑块：".concat(b3.data.block));
              console.log("背景：".concat(b3.data.background));
              bg.next = 208;
              return V({
                slidingImage: b3.data.block,
                backImage: b3.data.background
              });
            case 208:
              if (b4 = bg.sent, b4) {
                bg.next = 214;
                break;
              }
              console.log("ddddocr服务异常");
              bg.next = 213;
              return a9("ddddocr服务异常");
            case 213:
              return bg.abrupt("continue", 231);
            case 214:
              console.log(b4);
              b5 = b4.result;
              b6 = a1({
                x: b5,
                width: 384,
                track: [{
                  x: Math.floor(b5 / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b5 / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b5 / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b5 / 4),
                  y: 0,
                  time: 100
                }, {
                  x: b5 / 2,
                  y: 0,
                  time: 100
                }, {
                  x: b5,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bg.next = 220;
              return T("/basemodule/_captcha_check", {
                token: b3.data.token,
                data: b6,
                referer: b1,
                type: b3.data.type
              });
            case 220:
              if (b7 = bg.sent, !b7.data.result) {
                bg.next = 230;
                break;
              }
              bg.next = 224;
              return T("/aosbasemodule/intelverifcode_check", {
                validate: b7.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 224:
              b8 = bg.sent;
              aw = b8.data.tokenid;
              console.log("抽奖滑块token：".concat(aw));
              return bg.abrupt("break", 234);
            case 230:
              console.log("验证失败");
            case 231:
              aY++;
              bg.next = 196;
              break;
            case 234:
              if (aw) {
                bg.next = 236;
                break;
              }
              return bg.abrupt("continue", 254);
            case 236:
              bg.next = 238;
              return Q("/aoslottery/_ac_detail?id=".concat(aW));
            case 238:
              b9 = bg.sent;
              ba = 0;
            case 240:
              if (!(ba < aX.data.day_remain)) {
                bg.next = 254;
                break;
              }
              bg.next = 243;
              return T("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: b9.data.m_id,
                content_id: b9.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: b9.data.title,
                device_token: ax,
                user_id: av.data.data.user_id,
                user_name: av.data.data.user_name,
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
            case 243:
              if (bb = bg.sent, console.log("抽奖提交：".concat(bb.msg)), 0 == bb.code) {
                bg.next = 247;
                break;
              }
              return bg.abrupt("continue", 251);
            case 247:
              var bk = {};
              bk.id = aW;
              bk.verif_uuid = "";
              bk.verif_code = "";
              bk.afs_tokenid = aw;
              bk.collect_info = "";
              bk.longitude = 0;
              bk.latitude = 0;
              bk.device_token = ax;
              bg.next = 249;
              return T("/aoslottery/ac_sub", bk);
            case 249:
              bc = bg.sent;
              0 == bc.code ? (console.log("抽奖获得：".concat(null == bc || null === (bd = bc.data) || void 0 === bd ? void 0 : bd.title)), n += "用户：".concat(q, " 抽奖获得：").concat(null == bc || null === (be = bc.data) || void 0 === be ? void 0 : be.title, "\n")) : "o d w" == bc.msg ? console.log("谢谢参与") : console.log(bc.msg);
            case 251:
              ba++;
              bg.next = 240;
              break;
            case 254:
              bg.next = 13;
              break;
            case 256:
              bg.next = 261;
              break;
            case 258:
              bg.prev = 258;
              bg.t2 = bg.catch(11);
              ah.e(bg.t2);
            case 261:
              bg.prev = 261;
              ah.f();
              return bg.finish(261);
            case 264:
              if (!n) {
                bg.next = 267;
                break;
              }
              bg.next = 267;
              return a9(n);
            case 267:
            case "end":
              return bg.stop();
          }
        }
      }, ad, null, [[11, 258, 261, 264], [87, 178, 181, 184], [146, 168, 171, 174]]);
    }));
    return F.apply(this, arguments);
  }
  function G(ab) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(ao));
                            } catch (au) {
                              $.logErr(au, an);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, al);
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
      }, ac);
    }));
    return H.apply(this, arguments);
  }
  function I(ab) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X();
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  },
                  body: ae.body
                };
                $.post(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            try {
                              am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(ao));
                            } catch (ar) {
                              $.logErr(ar, an);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
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
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ac(ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = Y(ad);
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
                  url: "https://vapp.tmuyun.com".concat(ad),
                  headers: ak
                };
                $.get(al, function () {
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
      }, ac);
    }));
    return L.apply(this, arguments);
  }
  function M(ab, ac) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ab(ac, ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = Y(ac);
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
                  "Content-Type": "application/x-www-form-urlencoded",
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
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": y,
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jingzhou;xsb_jingzhou;2.23.815;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": y,
                    Accept: "*/*",
                    Origin: "https://wifizs.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.zhoushan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://wifizs.y-h5.iyunxh.com/",
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
                            ag(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            ag();
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
              return ae.stop();
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
    R = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": y,
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jingzhou;xsb_jingzhou;2.23.815;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
                    "Access-T-Id": y,
                    Accept: "*/*",
                    Origin: "https://wifizs.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.zhoushan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://wifizs.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(aj, function () {
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
    return R.apply(this, arguments);
  }
  function T(ab, ac) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": Z(),
                    "Access-T-Id-In": y,
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jingzhou;xsb_jingzhou;2.23.815;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
                    "Access-T-Id": y,
                    Accept: "*/*",
                    Origin: "https://wifizs.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.zhoushan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://wifizs.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ad)
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
                            ah(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ah();
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
      }, ab);
    }));
    return U.apply(this, arguments);
  }
  function V(ab) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  "Content-Type": "application/json"
                };
                var aj = {
                  url: "".concat(k, "/capcode"),
                  headers: ai,
                  body: JSON.stringify(ad)
                };
                $.post(aj, function (ak, al, am) {
                  try {
                    ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(am));
                  } catch (an) {
                    $.logErr(an, al);
                  } finally {
                    ah();
                  }
                });
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return W.apply(this, arguments);
  }
  function X() {
    var ad = new (l.loadJSEncrypt())();
    ad.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ad.encrypt(r);
    var ah = a0(),
      ai = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q),
      aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var af = CryptoJS.HmacSHA256(aj, m),
      ag = CryptoJS.enc.Hex.stringify(af);
    var ae = {};
    ae.uuid = ah;
    ae.signature = ag;
    ae.body = ai;
    return ae;
  }
  function Y(ab) {
    var ac = a0(),
      ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(o, "&&").concat(ac, "&&").concat(ad, "&&").concat(w, "&&").concat(u)).toString(),
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
      ad = "wifizs".concat(ac).concat(ab, "b3636a66846297bf4c35bb4d10977182"),
      ae = l.md5(ad);
    return "wifizs;".concat(ac, ";").concat(ab, ";").concat(ae);
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
    var ab = "2.23.815",
      ac = a0(),
      ad = a2(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ae = "Xiaomi " + ad,
      af = "Android",
      ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(ab, ";1.0;null;").concat(ad),
      ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";Release;").concat("6.12.0"),
      ai = {
        ua: ag,
        commonUa: ah
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
    a8 = i(g().mark(function ab() {
      var ad;
      return g().wrap(function ae(af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (ad = $.getdata("Utils_Code") || "", !ad || !Object.keys(ad).length) {
                af.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ad);
              return af.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return af.abrupt("return", new Promise(function () {
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
              return af.stop();
          }
        }
      }, ab);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ab) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ab(ac) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (!$.isNode()) {
                af.next = 5;
                break;
              }
              af.next = 3;
              return notify.sendNotify($.name, ac);
            case 3:
              af.next = 6;
              break;
            case 5:
              $.msg($.name, "", ac);
            case 6:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return aa.apply(this, arguments);
  }
  i(g().mark(function ab() {
    return g().wrap(function (ac) {
      for (;;) {
        switch (ac.prev = ac.next) {
          case 0:
            ac.next = 2;
            return E();
          case 2:
          case "end":
            return ac.stop();
        }
      }
    }, ab);
  }))().catch(function (ac) {
    $.log(ac);
  }).finally(function () {
    $.done({});
  });
})();