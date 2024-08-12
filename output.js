//Mon Aug 12 2024 05:09:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ae) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
      return typeof ah;
    } : function (ah) {
      return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
    };
    return b(ae);
  }
  function c(ae, af) {
    var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
    if (!ah) {
      if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
        ah && (ae = ah);
        var ai = 0,
          aj = function () {};
        return {
          s: aj,
          n: function () {
            var ao = {
              done: !0
            };
            return ai >= ae.length ? ao : {
              done: !1,
              value: ae[ai++]
            };
          },
          e: function (ao) {
            throw ao;
          },
          f: aj
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ak,
      al = !0,
      am = !1;
    return {
      s: function () {
        ah = ah.call(ae);
      },
      n: function () {
        var ap = ah.next();
        al = ap.done;
        return ap;
      },
      e: function (ap) {
        am = !0;
        ak = ap;
      },
      f: function () {
        try {
          al || null == ah.return || ah.return();
        } finally {
          if (am) {
            throw ak;
          }
        }
      }
    };
  }
  function d(ae, af) {
    if (ae) {
      if ("string" == typeof ae) {
        return f(ae, af);
      }
      var ah = {}.toString.call(ae).slice(8, -1);
      "Object" === ah && ae.constructor && (ah = ae.constructor.name);
      return "Map" === ah || "Set" === ah ? Array.from(ae) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(ae, af) : void 0;
    }
  }
  function f(ae, af) {
    (null == af || af > ae.length) && (af = ae.length);
    for (var ag = 0, ah = Array(af); ag < af; ag++) {
      ah[ag] = ae[ag];
    }
    return ah;
  }
  function g() {
    'use strict';

    g = function () {
      return ag;
    };
    var af,
      ag = {},
      ah = Object.prototype,
      ai = ah.hasOwnProperty,
      aj = Object.defineProperty || function (aL, aM, aN) {
        aL[aM] = aN.value;
      },
      ak = "function" == typeof Symbol ? Symbol : {},
      al = ak.iterator || "@@iterator",
      am = ak.asyncIterator || "@@asyncIterator",
      an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      var aO = {
        value: aN,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aL, aM, aO);
      return aL[aM];
    }
    try {
      ao({}, "");
    } catch (aM) {
      ao = function (aN, aO, aP) {
        return aN[aO] = aP;
      };
    }
    function ap(aO, aP, aQ, aR) {
      var aS = aP && aP.prototype instanceof aw ? aP : aw,
        aT = Object.create(aS.prototype),
        aU = new aJ(aR || []);
      aj(aT, "_invoke", {
        value: aF(aO, aQ, aU)
      });
      return aT;
    }
    function aq(aO, aP, aQ) {
      try {
        return {
          type: "normal",
          arg: aO.call(aP, aQ)
        };
      } catch (aV) {
        var aS = {};
        aS.type = "throw";
        aS.arg = aV;
        return aS;
      }
    }
    ag.wrap = ap;
    var ar = "suspendedStart",
      as = "suspendedYield",
      at = "executing",
      au = "completed",
      av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      return this;
    });
    var aA = Object.getPrototypeOf,
      aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      ["next", "throw", "return"].forEach(function (aQ) {
        ao(aO, aQ, function (aS) {
          return this._invoke(aQ, aS);
        });
      });
    }
    function aE(aO, aP) {
      function aS(aT, aU, aV, aW) {
        var aY = aq(aO[aT], aO, aU);
        if ("throw" !== aY.type) {
          var aZ = aY.arg,
            b0 = aZ.value;
          return b0 && "object" == b(b0) && ai.call(b0, "__await") ? aP.resolve(b0.__await).then(function (b1) {
            aS("next", b1, aV, aW);
          }, function (b1) {
            aS("throw", b1, aV, aW);
          }) : aP.resolve(b0).then(function (b1) {
            aZ.value = b1;
            aV(aZ);
          }, function (b1) {
            return aS("throw", b1, aV, aW);
          });
        }
        aW(aY.arg);
      }
      var aR;
      aj(this, "_invoke", {
        value: function (aT, aU) {
          function aX() {
            return new aP(function (aZ, b0) {
              aS(aT, aU, aZ, b0);
            });
          }
          return aR = aR ? aR.then(aX, aX) : aX();
        }
      });
    }
    function aF(aO, aP, aQ) {
      var aS = ar;
      return function (aU, aV) {
        if (aS === at) {
          throw Error("Generator is already running");
        }
        if (aS === au) {
          if ("throw" === aU) {
            throw aV;
          }
          var aW = {
            value: af,
            done: !0
          };
          return aW;
        }
        for (aQ.method = aU, aQ.arg = aV;;) {
          var aX = aQ.delegate;
          if (aX) {
            var aY = aG(aX, aQ);
            if (aY) {
              if (aY === av) {
                continue;
              }
              return aY;
            }
          }
          if ("next" === aQ.method) {
            aQ.sent = aQ._sent = aQ.arg;
          } else {
            if ("throw" === aQ.method) {
              if (aS === ar) {
                throw aS = au, aQ.arg;
              }
              aQ.dispatchException(aQ.arg);
            } else {
              "return" === aQ.method && aQ.abrupt("return", aQ.arg);
            }
          }
          aS = at;
          var aZ = aq(aO, aP, aQ);
          if ("normal" === aZ.type) {
            if (aS = aQ.done ? au : as, aZ.arg === av) {
              continue;
            }
            var b0 = {};
            b0.value = aZ.arg;
            b0.done = aQ.done;
            return b0;
          }
          "throw" === aZ.type && (aS = au, aQ.method = "throw", aQ.arg = aZ.arg);
        }
      };
    }
    function aG(aO, aP) {
      var aQ = aP.method,
        aR = aO.iterator[aQ];
      if (aR === af) {
        aP.delegate = null;
        "throw" === aQ && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aQ && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aQ + "' method"));
        return av;
      }
      var aS = aq(aR, aO.iterator, aP.arg);
      if ("throw" === aS.type) {
        aP.method = "throw";
        aP.arg = aS.arg;
        aP.delegate = null;
        return av;
      }
      var aT = aS.arg;
      return aT ? aT.done ? (aP[aO.resultName] = aT.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aT : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
    }
    function aH(aO) {
      var aP = {
        tryLoc: aO[0]
      };
      var aQ = aP;
      1 in aO && (aQ.catchLoc = aO[1]);
      2 in aO && (aQ.finallyLoc = aO[2], aQ.afterLoc = aO[3]);
      this.tryEntries.push(aQ);
    }
    function aI(aO) {
      var aQ = aO.completion || {};
      aQ.type = "normal";
      delete aQ.arg;
      aO.completion = aQ;
    }
    function aJ(aO) {
      var aP = {
        tryLoc: "root"
      };
      this.tryEntries = [aP];
      aO.forEach(aH, this);
      this.reset(!0);
    }
    function aK(aO) {
      if (aO || "" === aO) {
        var aR = aO[al];
        if (aR) {
          return aR.call(aO);
        }
        if ("function" == typeof aO.next) {
          return aO;
        }
        if (!isNaN(aO.length)) {
          var aS = -1,
            aT = function aV() {
              for (; ++aS < aO.length;) {
                if (ai.call(aO, aS)) {
                  aV.value = aO[aS];
                  aV.done = !1;
                  return aV;
                }
              }
              aV.value = af;
              aV.done = !0;
              return aV;
            };
          return aT.next = aT;
        }
      }
      throw new TypeError(b(aO) + " is not iterable");
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: !0
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: !0
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    ag.isGeneratorFunction = function (aO) {
      var aP = "function" == typeof aO && aO.constructor;
      return !!aP && (aP === ax || "GeneratorFunction" === (aP.displayName || aP.name));
    };
    ag.mark = function (aO) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
      aO.prototype = Object.create(aC);
      return aO;
    };
    ag.awrap = function (aO) {
      var aR = {
        __await: aO
      };
      return aR;
    };
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      return this;
    });
    ag.AsyncIterator = aE;
    ag.async = function (aO, aP, aQ, aR, aS) {
      void 0 === aS && (aS = Promise);
      var aU = new aE(ap(aO, aP, aQ, aR), aS);
      return ag.isGeneratorFunction(aP) ? aU : aU.next().then(function (aW) {
        return aW.done ? aW.value : aU.next();
      });
    };
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      return this;
    });
    ao(aC, "toString", function () {
      return "[object Generator]";
    });
    ag.keys = function (aO) {
      var aQ = Object(aO),
        aR = [];
      for (var aS in aQ) aR.push(aS);
      aR.reverse();
      return function aU() {
        for (; aR.length;) {
          var aV = aR.pop();
          if (aV in aQ) {
            aU.value = aV;
            aU.done = !1;
            return aU;
          }
        }
        aU.done = !0;
        return aU;
      };
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = !1, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
          for (var aP in this) "t" === aP.charAt(0) && ai.call(this, aP) && !isNaN(+aP.slice(1)) && (this[aP] = af);
        }
      },
      stop: function () {
        this.done = !0;
        var aO = this.tryEntries[0].completion;
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        return this.rval;
      },
      dispatchException: function (aO) {
        if (this.done) {
          throw aO;
        }
        var aQ = this;
        function aW(aX, aY) {
          aT.type = "throw";
          aT.arg = aO;
          aQ.next = aX;
          aY && (aQ.method = "next", aQ.arg = af);
          return !!aY;
        }
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR],
            aT = aS.completion;
          if ("root" === aS.tryLoc) {
            return aW("end");
          }
          if (aS.tryLoc <= this.prev) {
            var aU = ai.call(aS, "catchLoc"),
              aV = ai.call(aS, "finallyLoc");
            if (aU && aV) {
              if (this.prev < aS.catchLoc) {
                return aW(aS.catchLoc, !0);
              }
              if (this.prev < aS.finallyLoc) {
                return aW(aS.finallyLoc);
              }
            } else {
              if (aU) {
                if (this.prev < aS.catchLoc) {
                  return aW(aS.catchLoc, !0);
                }
              } else {
                if (!aV) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aS.finallyLoc) {
                  return aW(aS.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aO, aP) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.tryLoc <= this.prev && ai.call(aR, "finallyLoc") && this.prev < aR.finallyLoc) {
            var aS = aR;
            break;
          }
        }
        aS && ("break" === aO || "continue" === aO) && aS.tryLoc <= aP && aP <= aS.finallyLoc && (aS = null);
        var aT = aS ? aS.completion : {};
        aT.type = aO;
        aT.arg = aP;
        return aS ? (this.method = "next", this.next = aS.finallyLoc, av) : this.complete(aT);
      },
      complete: function (aO, aP) {
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
        return av;
      },
      finish: function (aO) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.finallyLoc === aO) {
            this.complete(aS.completion, aS.afterLoc);
            aI(aS);
            return av;
          }
        }
      },
      catch: function (aO) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.tryLoc === aO) {
            var aR = aQ.completion;
            if ("throw" === aR.type) {
              var aS = aR.arg;
              aI(aQ);
            }
            return aS;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aO, aP, aQ) {
        this.delegate = {
          iterator: aK(aO),
          resultName: aP,
          nextLoc: aQ
        };
        "next" === this.method && (this.arg = af);
        return av;
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    try {
      var am = ae[aj](ak),
        an = am.value;
    } catch (aq) {
      return void ag(aq);
    }
    am.done ? af(an) : Promise.resolve(an).then(ah, ai);
  }
  function i(ae) {
    return function () {
      var ah = this,
        ai = arguments;
      return new Promise(function (aj, ak) {
        var am = ae.apply(ah, ai);
        function an(ap) {
          h(am, aj, ak, an, ao, "next", ap);
        }
        function ao(ap) {
          h(am, aj, ak, an, ao, "throw", ap);
        }
        an(void 0);
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
    v = "",
    w = "23",
    x = "34",
    y = "FR*r!isE5W",
    z = "9080827ac7bea8dd4f8987a4bfc85b15",
    A = "",
    B = "0",
    D = "",
    E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ag() {
      var ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4;
      return g().wrap(function (b6) {
        for (;;) {
          switch (b6.prev = b6.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                b6.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b6.next = 5;
              return ac("先去boxjs填写账号密码");
            case 5:
              return b6.abrupt("return");
            case 6:
              b6.next = 8;
              return aa();
            case 8:
              l = b6.sent;
              ai = j.split(" ");
              aj = c(ai);
              b6.prev = 11;
              aj.s();
            case 13:
              if ((ak = aj.n()).done) {
                b6.next = 188;
                break;
              }
              al = ak.value;
              console.log("随机生成UA");
              am = a6();
              t = am.ua;
              u = am.commonUa;
              v = am.uuid;
              console.log(t);
              console.log(u);
              q = al.split("&")[0];
              r = al.split("&")[1];
              s = al.split("&")[2];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              b6.next = 29;
              return N("/api/account/init");
            case 29:
              an = b6.sent;
              o = an.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              b6.next = 35;
              return H("/web/init?client_id=".concat(x));
            case 35:
              ao = b6.sent;
              m = ao.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              b6.next = 41;
              return J("/web/oauth/credential_auth");
            case 41:
              if (ap = b6.sent, ap.data) {
                b6.next = 45;
                break;
              }
              console.log(ap.message);
              return b6.abrupt("continue", 186);
            case 45:
              aq = ap.data.authorization_code.code;
              console.log(aq);
              console.log("登录");
              b6.next = 50;
              return N("/api/zbtxz/login", "check_token=&code=".concat(aq, "&token=&type=-1&union_id="));
            case 50:
              if (ar = b6.sent, console.log("登录成功"), p = ar.data.session.account_id, o = ar.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                b6.next = 67;
                break;
              }
              b6.next = 60;
              return L("/api/app_start_page/list/new?height=2260&width=1080");
            case 60:
              for (as = b6.sent, at = decodeURIComponent(as.data.app_start_page_list[1].url), au = at.split("?")[1], av = {}, aw = au.split("&"), ax = 0, ay = aw.length; ax < ay; ax++) {
                az = aw[ax].split("=");
                av[az[0]] = az[1];
              }
              E = av.id;
            case 67:
              if (E) {
                b6.next = 70;
                break;
              }
              console.log("获取id失败");
              return b6.abrupt("continue", 186);
            case 70:
              console.log(E);
              console.log("获取apiDt");
              b6.next = 74;
              return P("/aosbase/_auth_dt");
            case 74:
              aA = b6.sent;
              A = aA.data.substring(32, 68);
              console.log(A);
              aB = {
                app_user_token: o,
                appid: "jiaojiang",
                noncestr: a9(6, !1),
                phone: q,
                portrait_url: ar.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ar.data.account.id,
                user_name: ar.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              aB.signature = l.md5(a7(aB) + "&appkey=".concat(z));
              b6.next = 81;
              return W("/aosbase/_auth_appuserinit", aB);
            case 81:
              aC = b6.sent;
              D = aC.data.access_token;
              B = aC.data.data.user_id;
              aD = Date.now() + "" + Math.floor(10000000 * Math.random());
              aE = E;
              b6.next = 88;
              return R("/aoslottery/ac_lottery_times?id=".concat(aE));
            case 88:
              if (aF = b6.sent, console.log("拥有".concat(aF.data.day_remain, "次抽奖")), !(aF.data.day_remain > 0)) {
                b6.next = 153;
                break;
              }
              console.log("获取抽奖滑块token");
              aG = "";
              aH = 0;
            case 94:
              if (!(aH < 3)) {
                b6.next = 133;
                break;
              }
              aI = a9(10, !1);
              aJ = Math.round(new Date().getTime() / 1000).toString();
              aK = "https://jiaojiang.y-h5.iyunxh.com/module-lottery/home/home?hide_back=1";
              aL = a4({
                once: aI,
                referer: aK,
                timestamp: aJ,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              b6.next = 101;
              return R("/basemodule/_captcha_get?once=".concat(aI, "&referer=").concat(aK, "&timestamp=").concat(aJ, "&type=1&signature=").concat(encodeURIComponent(aL)));
            case 101:
              aM = b6.sent;
              console.log("滑块：".concat(aM.data.block));
              console.log("背景：".concat(aM.data.background));
              b6.next = 106;
              return Y({
                slidingImage: aM.data.block,
                backImage: aM.data.background
              });
            case 106:
              if (aN = b6.sent, aN) {
                b6.next = 112;
                break;
              }
              console.log("ddddocr服务异常");
              b6.next = 111;
              return ac("ddddocr服务异常");
            case 111:
              return b6.abrupt("continue", 130);
            case 112:
              console.log(aN);
              aO = aN.result;
              aP = a4({
                x: aO,
                width: 384,
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
              b6.next = 118;
              return W("/basemodule/_captcha_check", {
                token: aM.data.token,
                data: aP,
                referer: aK,
                type: aM.data.type
              });
            case 118:
              if (aQ = b6.sent, !aQ.data.result) {
                b6.next = 129;
                break;
              }
              console.log("验证成功");
              b6.next = 123;
              return W("/aosbasemodule/intelverifcode_check", {
                validate: aQ.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 123:
              aR = b6.sent;
              aG = aR.data.tokenid;
              console.log("滑块token：".concat(aG));
              return b6.abrupt("break", 133);
            case 129:
              console.log("验证失败");
            case 130:
              aH++;
              b6.next = 94;
              break;
            case 133:
              if (aG) {
                b6.next = 135;
                break;
              }
              return b6.abrupt("continue", 186);
            case 135:
              b6.next = 137;
              return R("/aoslottery/_ac_detail?id=".concat(aE));
            case 137:
              aS = b6.sent;
              aT = 0;
            case 139:
              if (!(aT < aF.data.day_remain)) {
                b6.next = 153;
                break;
              }
              b6.next = 142;
              return W("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 3,
                module_id: aS.data.m_id,
                content_id: aS.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: aS.data.title,
                device_token: aD,
                user_id: aC.data.data.user_id,
                user_name: aC.data.data.user_name,
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
            case 142:
              if (aU = b6.sent, console.log("抽奖提交：".concat(aU.msg)), 0 == aU.code) {
                b6.next = 146;
                break;
              }
              return b6.abrupt("continue", 150);
            case 146:
              var b8 = {};
              b8.id = aE;
              b8.verif_uuid = "";
              b8.verif_code = "";
              b8.afs_tokenid = aG;
              b8.collect_info = "";
              b8.longitude = 0;
              b8.latitude = 0;
              b8.device_token = aD;
              b6.next = 148;
              return W("/aoslottery/ac_sub", b8);
            case 148:
              aV = b6.sent;
              0 == aV.code ? (console.log("抽奖获得：".concat(null == aV || null === (aW = aV.data) || void 0 === aW ? void 0 : aW.title)), 3 == (null == aV || null === (aX = aV.data) || void 0 === aX ? void 0 : aX.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == aV || null === (aY = aV.data) || void 0 === aY ? void 0 : aY.title, "\n"))) : "o d w" == aV.msg ? console.log("谢谢参与") : console.log(aV.msg);
            case 150:
              aT++;
              b6.next = 139;
              break;
            case 153:
              b6.next = 155;
              return R("/aoslottery/_ac_detail?id=".concat(aE));
            case 155:
              aZ = b6.sent;
              b6.next = 158;
              return R("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(aE, "&module_id=").concat(aZ.data.m_id));
            case 158:
              if (b0 = b6.sent, !b0.data) {
                b6.next = 186;
                break;
              }
              b1 = c(b0.data);
              b6.prev = 161;
              b1.s();
            case 163:
              if ((b2 = b1.n()).done) {
                b6.next = 178;
                break;
              }
              if (b3 = b2.value, 3 != b3.type || 0 != b3.state) {
                b6.next = 176;
                break;
              }
              if (console.log("奖品：".concat(b3.title)), !s) {
                b6.next = 175;
                break;
              }
              console.log("领取奖品");
              b6.next = 171;
              return U("/aosbasemodule/cash_send?module_id=".concat(b3.module_id, "&activity_id=").concat(b3.id, "&cash_code=").concat(b3.code, "&cash_sign=").concat(b3.cash_data.cash_sign));
            case 171:
              b4 = b6.sent;
              0 == b4.code ? console.log("领取成功") : console.log(b4.msg);
              b6.next = 176;
              break;
            case 175:
              console.log("请配置wxToken");
            case 176:
              b6.next = 163;
              break;
            case 178:
              b6.next = 183;
              break;
            case 180:
              b6.prev = 180;
              b6.t0 = b6.catch(161);
              b1.e(b6.t0);
            case 183:
              b6.prev = 183;
              b1.f();
              return b6.finish(183);
            case 186:
              b6.next = 13;
              break;
            case 188:
              b6.next = 193;
              break;
            case 190:
              b6.prev = 190;
              b6.t1 = b6.catch(11);
              aj.e(b6.t1);
            case 193:
              b6.prev = 193;
              aj.f();
              return b6.finish(193);
            case 196:
              if (!n) {
                b6.next = 199;
                break;
              }
              b6.next = 199;
              return ac(n);
            case 199:
            case "end":
              return b6.stop();
          }
        }
      }, ag, null, [[11, 190, 193, 196], [161, 180, 183, 186]]);
    }));
    return G.apply(this, arguments);
  }
  function H(ae) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a3(),
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(am, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(at));
                            } catch (az) {
                              $.logErr(az, as);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return I.apply(this, arguments);
  }
  function J(ae) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a0();
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ah.body
                };
                $.post(am, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ar));
                            } catch (aw) {
                              $.logErr(aw, aq);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a1(af);
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ah.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": ah.uuid,
                  "X-SIGNATURE": ah.signature,
                  "X-TENANT-ID": w,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": u
                };
                var am = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: al
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            aj();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function af(ag, ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a1(ag);
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ah
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !ar) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(at));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, as);
                          case 14:
                            av.prev = 14;
                            al();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, af);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
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
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
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
      }, af);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
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
                $.get(ak, function () {
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
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return T.apply(this, arguments);
  }
  function U(ae) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://ya.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "1",
                    "Access-Wxclient-Type": "wx_minipro",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": s,
                    "Access-Api-Unique-Token": "1",
                    "Access-T-Id": "1",
                    Accept: "*/*",
                    Referer: "https://servicewechat.com/wx57d3a2086852ddcd/14/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate"
                  }
                };
                $.get(am, function () {
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
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
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
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return V.apply(this, arguments);
  }
  function W(ae, af) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
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
                  body: JSON.stringify(ah)
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return X.apply(this, arguments);
  }
  function Y(ae) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (am) {
                var ao = {
                  "Content-Type": "application/json"
                };
                var ap = {
                  url: "".concat(k, "/capcode"),
                  headers: ao,
                  body: JSON.stringify(ag)
                };
                $.post(ap, function (aq, ar, as) {
                  try {
                    aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(as));
                  } catch (at) {
                    $.logErr(at, ar);
                  } finally {
                    am();
                  }
                });
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return Z.apply(this, arguments);
  }
  function a0() {
    var ag = new (l.loadJSEncrypt())();
    ag.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ag.encrypt(r);
    var ak = a3(),
      al = "client_id=".concat(x, "&password=").concat(r, "&phone_number=").concat(q),
      am = "post%%/web/oauth/credential_auth?".concat(al, "%%").concat(ak, "%%");
    al = "client_id=".concat(x, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ai = CryptoJS.HmacSHA256(am, m),
      aj = CryptoJS.enc.Hex.stringify(ai);
    var ah = {};
    ah.uuid = ak;
    ah.signature = aj;
    ah.body = al;
    return ah;
  }
  function a1(ae) {
    var af = a3(),
      ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(o, "&&").concat(af, "&&").concat(ag, "&&").concat(y, "&&").concat(w)).toString(),
      ai = {
        uuid: af,
        time: ag,
        signature: ah
      };
    return ai;
  }
  function a2() {
    var ae = Date.now(),
      af = a9(32, !1),
      ag = "jiaojiang".concat(af).concat(ae, "60b56a9e29ea4cdbe7e6544bee4b6f9c"),
      ah = l.md5(ag);
    return "jiaojiang;".concat(af, ";").concat(ae, ";").concat(ah);
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0,
        ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a4(ae, af, ag) {
    var ah = l.createCryptoJS(),
      ai = ah.enc.Utf8.parse(af),
      aj = ah.enc.Utf8.parse(ag),
      ak = ah.enc.Utf8.parse(JSON.stringify(ae)),
      al = ah.AES.encrypt(ak, ai, {
        iv: aj,
        mode: ah.mode.CBC,
        padding: ah.pad.Pkcs7
      });
    return ah.enc.Base64.stringify(al.ciphertext);
  }
  function a5(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a6() {
    var ae = "1.2.4",
      af = a3(),
      ag = a5(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ah = "Xiaomi " + ag,
      ai = "Android",
      aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(x, ";").concat(ae, ";1.0;null;").concat(ag),
      ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";Release;").concat("6.8.0"),
      al = {
        ua: aj,
        commonUa: ak,
        uuid: af
      };
    return al;
  }
  function a7() {
    var ae = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      af = [];
    for (var ag in ae) {
      var ah = ae[ag];
      af.push(ag + "=" + a8(ah));
    }
    return af.length ? "" + af.join("&") : "";
  }
  function a8(ae) {
    ae = (ae + "").toString();
    return encodeURIComponent(ae).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a9() {
    var ae = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      af = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ag = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ah = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ai = [];
    if (ag = ag || ah.length, ae) {
      for (var aj = 0; aj < ae; aj++) {
        ai[aj] = ah[0 | Math.random() * ag];
      }
    } else {
      var ak;
      ai[8] = ai[13] = ai[18] = ai[23] = "-";
      ai[14] = "4";
      for (var al = 0; al < 36; al++) {
        ai[al] || (ak = 0 | 16 * Math.random(), ai[al] = ah[19 == al ? 3 & ak | 8 : ak]);
      }
    }
    return af ? (ai.shift(), "u" + ai.join("")) : ai.join("");
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ae() {
      var ag;
      return g().wrap(function ah(ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (ag = $.getdata("Utils_Code") || "", !ag || !Object.keys(ag).length) {
                ai.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ag);
              return ai.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ai.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (!$.isNode()) {
                ah.next = 5;
                break;
              }
              ah.next = 3;
              return notify.sendNotify($.name, ag);
            case 3:
              ah.next = 6;
              break;
            case 5:
              $.msg($.name, "", ag);
            case 6:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (af) {
      for (;;) {
        switch (af.prev = af.next) {
          case 0:
            af.next = 2;
            return F();
          case 2:
          case "end":
            return af.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
  }).finally(function () {
    $.done({});
  });
})();