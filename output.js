//Wed Apr 02 2025 13:35:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(W) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
      return typeof Y;
    } : function (Y) {
      return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
    };
    return b(W);
  }
  function c(W, X) {
    var Z = "undefined" != typeof Symbol && W[Symbol.iterator] || W["@@iterator"];
    if (!Z) {
      if (Array.isArray(W) || (Z = d(W)) || X && W && "number" == typeof W.length) {
        Z && (W = Z);
        var a0 = 0,
          a1 = function () {};
        return {
          s: a1,
          n: function () {
            var a8 = {
              done: !0
            };
            return a0 >= W.length ? a8 : {
              done: !1,
              value: W[a0++]
            };
          },
          e: function (a7) {
            throw a7;
          },
          f: a1
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a2,
      a3 = !0,
      a4 = !1;
    return {
      s: function () {
        Z = Z.call(W);
      },
      n: function () {
        var a9 = Z.next();
        a3 = a9.done;
        return a9;
      },
      e: function (a8) {
        a4 = !0;
        a2 = a8;
      },
      f: function () {
        try {
          a3 || null == Z.return || Z.return();
        } finally {
          if (a4) {
            throw a2;
          }
        }
      }
    };
  }
  function d(W, X) {
    if (W) {
      if ("string" == typeof W) {
        return f(W, X);
      }
      var Y = {}.toString.call(W).slice(8, -1);
      "Object" === Y && W.constructor && (Y = W.constructor.name);
      return "Map" === Y || "Set" === Y ? Array.from(W) : "Arguments" === Y || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y) ? f(W, X) : void 0;
    }
  }
  function f(W, X) {
    (null == X || X > W.length) && (X = W.length);
    for (var Y = 0, Z = Array(X); Y < X; Y++) {
      Z[Y] = W[Y];
    }
    return Z;
  }
  function g() {
    'use strict';

    g = function () {
      return Y;
    };
    var X,
      Y = {},
      Z = Object.prototype,
      a0 = Z.hasOwnProperty,
      a1 = Object.defineProperty || function (at, au, av) {
        at[au] = av.value;
      },
      a2 = "function" == typeof Symbol ? Symbol : {},
      a3 = a2.iterator || "@@iterator",
      a4 = a2.asyncIterator || "@@asyncIterator",
      a5 = a2.toStringTag || "@@toStringTag";
    function a6(at, au, av) {
      var aw = {
        value: av,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(at, au, aw);
      return at[au];
    }
    try {
      a6({}, "");
    } catch (au) {
      a6 = function (aw, ax, ay) {
        return aw[ax] = ay;
      };
    }
    function a7(aw, ax, ay, az) {
      var aB = ax && ax.prototype instanceof ae ? ax : ae,
        aC = Object.create(aB.prototype),
        aD = new ar(az || []);
      a1(aC, "_invoke", {
        value: an(aw, ay, aD)
      });
      return aC;
    }
    function a8(aw, ax, ay) {
      try {
        return {
          type: "normal",
          arg: aw.call(ax, ay)
        };
      } catch (aC) {
        var aA = {
          type: "throw",
          arg: aC
        };
        return aA;
      }
    }
    Y.wrap = a7;
    var a9 = "suspendedStart",
      aa = "suspendedYield",
      ab = "executing",
      ac = "completed",
      ad = {};
    function ae() {}
    function af() {}
    function ag() {}
    var ah = {};
    a6(ah, a3, function () {
      return this;
    });
    var ai = Object.getPrototypeOf,
      aj = ai && ai(ai(as([])));
    aj && aj !== Z && a0.call(aj, a3) && (ah = aj);
    ag.prototype = ae.prototype = Object.create(ah);
    var ak = ag.prototype;
    function al(aw) {
      ["next", "throw", "return"].forEach(function (ay) {
        a6(aw, ay, function (aA) {
          return this._invoke(ay, aA);
        });
      });
    }
    function am(aw, ax) {
      function aB(aC, aD, aE, aF) {
        var aH = a8(aw[aC], aw, aD);
        if ("throw" !== aH.type) {
          var aI = aH.arg,
            aJ = aI.value;
          return aJ && "object" == b(aJ) && a0.call(aJ, "__await") ? ax.resolve(aJ.__await).then(function (aK) {
            aB("next", aK, aE, aF);
          }, function (aK) {
            aB("throw", aK, aE, aF);
          }) : ax.resolve(aJ).then(function (aK) {
            aI.value = aK;
            aE(aI);
          }, function (aK) {
            return aB("throw", aK, aE, aF);
          });
        }
        aF(aH.arg);
      }
      var az;
      a1(this, "_invoke", {
        value: function (aC, aD) {
          function aF() {
            return new ax(function (aH, aI) {
              aB(aC, aD, aH, aI);
            });
          }
          return az = az ? az.then(aF, aF) : aF();
        }
      });
    }
    function an(aw, ax, ay) {
      var aA = a9;
      return function (aC, aD) {
        if (aA === ab) {
          throw Error("Generator is already running");
        }
        if (aA === ac) {
          if ("throw" === aC) {
            throw aD;
          }
          var aF = {
            value: X,
            done: !0
          };
          return aF;
        }
        for (ay.method = aC, ay.arg = aD;;) {
          var aG = ay.delegate;
          if (aG) {
            var aH = ao(aG, ay);
            if (aH) {
              if (aH === ad) {
                continue;
              }
              return aH;
            }
          }
          if ("next" === ay.method) {
            ay.sent = ay._sent = ay.arg;
          } else {
            if ("throw" === ay.method) {
              if (aA === a9) {
                throw aA = ac, ay.arg;
              }
              ay.dispatchException(ay.arg);
            } else {
              "return" === ay.method && ay.abrupt("return", ay.arg);
            }
          }
          aA = ab;
          var aI = a8(aw, ax, ay);
          if ("normal" === aI.type) {
            if (aA = ay.done ? ac : aa, aI.arg === ad) {
              continue;
            }
            var aJ = {};
            aJ.value = aI.arg;
            aJ.done = ay.done;
            return aJ;
          }
          "throw" === aI.type && (aA = ac, ay.method = "throw", ay.arg = aI.arg);
        }
      };
    }
    function ao(aw, ax) {
      var aC = ax.method,
        aD = aw.iterator[aC];
      if (aD === X) {
        ax.delegate = null;
        "throw" === aC && aw.iterator.return && (ax.method = "return", ax.arg = X, ao(aw, ax), "throw" === ax.method) || "return" !== aC && (ax.method = "throw", ax.arg = new TypeError("The iterator does not provide a '" + aC + "' method"));
        return ad;
      }
      var aA = a8(aD, aw.iterator, ax.arg);
      if ("throw" === aA.type) {
        ax.method = "throw";
        ax.arg = aA.arg;
        ax.delegate = null;
        return ad;
      }
      var aB = aA.arg;
      return aB ? aB.done ? (ax[aw.resultName] = aB.value, ax.next = aw.nextLoc, "return" !== ax.method && (ax.method = "next", ax.arg = X), ax.delegate = null, ad) : aB : (ax.method = "throw", ax.arg = new TypeError("iterator result is not an object"), ax.delegate = null, ad);
    }
    function ap(aw) {
      var ax = {
        tryLoc: aw[0]
      };
      var ay = ax;
      1 in aw && (ay.catchLoc = aw[1]);
      2 in aw && (ay.finallyLoc = aw[2], ay.afterLoc = aw[3]);
      this.tryEntries.push(ay);
    }
    function aq(aw) {
      var ay = aw.completion || {};
      ay.type = "normal";
      delete ay.arg;
      aw.completion = ay;
    }
    function ar(aw) {
      var ax = {
        tryLoc: "root"
      };
      this.tryEntries = [ax];
      aw.forEach(ap, this);
      this.reset(!0);
    }
    function as(aw) {
      if (aw || "" === aw) {
        var ay = aw[a3];
        if (ay) {
          return ay.call(aw);
        }
        if ("function" == typeof aw.next) {
          return aw;
        }
        if (!isNaN(aw.length)) {
          var az = -1,
            aA = function aB() {
              for (; ++az < aw.length;) {
                if (a0.call(aw, az)) {
                  aB.value = aw[az];
                  aB.done = !1;
                  return aB;
                }
              }
              aB.value = X;
              aB.done = !0;
              return aB;
            };
          return aA.next = aA;
        }
      }
      throw new TypeError(b(aw) + " is not iterable");
    }
    af.prototype = ag;
    a1(ak, "constructor", {
      value: ag,
      configurable: !0
    });
    a1(ag, "constructor", {
      value: af,
      configurable: !0
    });
    af.displayName = a6(ag, a5, "GeneratorFunction");
    Y.isGeneratorFunction = function (aw) {
      var ax = "function" == typeof aw && aw.constructor;
      return !!ax && (ax === af || "GeneratorFunction" === (ax.displayName || ax.name));
    };
    Y.mark = function (aw) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aw, ag) : (aw.__proto__ = ag, a6(aw, a5, "GeneratorFunction"));
      aw.prototype = Object.create(ak);
      return aw;
    };
    Y.awrap = function (aw) {
      var ax = {
        __await: aw
      };
      return ax;
    };
    al(am.prototype);
    a6(am.prototype, a4, function () {
      return this;
    });
    Y.AsyncIterator = am;
    Y.async = function (aw, ax, ay, az, aA) {
      void 0 === aA && (aA = Promise);
      var aC = new am(a7(aw, ax, ay, az), aA);
      return Y.isGeneratorFunction(ax) ? aC : aC.next().then(function (aD) {
        return aD.done ? aD.value : aC.next();
      });
    };
    al(ak);
    a6(ak, a5, "Generator");
    a6(ak, a3, function () {
      return this;
    });
    a6(ak, "toString", function () {
      return "[object Generator]";
    });
    Y.keys = function (aw) {
      var ay = Object(aw),
        az = [];
      for (var aA in ay) az.push(aA);
      az.reverse();
      return function aB() {
        for (; az.length;) {
          var aD = az.pop();
          if (aD in ay) {
            aB.value = aD;
            aB.done = !1;
            return aB;
          }
        }
        aB.done = !0;
        return aB;
      };
    };
    Y.values = as;
    ar.prototype = {
      constructor: ar,
      reset: function (aw) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = X, this.done = !1, this.delegate = null, this.method = "next", this.arg = X, this.tryEntries.forEach(aq), !aw) {
          for (var ax in this) "t" === ax.charAt(0) && a0.call(this, ax) && !isNaN(+ax.slice(1)) && (this[ax] = X);
        }
      },
      stop: function () {
        this.done = !0;
        var aw = this.tryEntries[0].completion;
        if ("throw" === aw.type) {
          throw aw.arg;
        }
        return this.rval;
      },
      dispatchException: function (aw) {
        if (this.done) {
          throw aw;
        }
        var ay = this;
        function aE(aF, aG) {
          aB.type = "throw";
          aB.arg = aw;
          ay.next = aF;
          aG && (ay.method = "next", ay.arg = X);
          return !!aG;
        }
        for (var az = this.tryEntries.length - 1; az >= 0; --az) {
          var aA = this.tryEntries[az],
            aB = aA.completion;
          if ("root" === aA.tryLoc) {
            return aE("end");
          }
          if (aA.tryLoc <= this.prev) {
            var aC = a0.call(aA, "catchLoc"),
              aD = a0.call(aA, "finallyLoc");
            if (aC && aD) {
              if (this.prev < aA.catchLoc) {
                return aE(aA.catchLoc, !0);
              }
              if (this.prev < aA.finallyLoc) {
                return aE(aA.finallyLoc);
              }
            } else {
              if (aC) {
                if (this.prev < aA.catchLoc) {
                  return aE(aA.catchLoc, !0);
                }
              } else {
                if (!aD) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aA.finallyLoc) {
                  return aE(aA.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aw, ax) {
        for (var az = this.tryEntries.length - 1; az >= 0; --az) {
          var aA = this.tryEntries[az];
          if (aA.tryLoc <= this.prev && a0.call(aA, "finallyLoc") && this.prev < aA.finallyLoc) {
            var aB = aA;
            break;
          }
        }
        aB && ("break" === aw || "continue" === aw) && aB.tryLoc <= ax && ax <= aB.finallyLoc && (aB = null);
        var aC = aB ? aB.completion : {};
        aC.type = aw;
        aC.arg = ax;
        return aB ? (this.method = "next", this.next = aB.finallyLoc, ad) : this.complete(aC);
      },
      complete: function (aw, ax) {
        if ("throw" === aw.type) {
          throw aw.arg;
        }
        "break" === aw.type || "continue" === aw.type ? this.next = aw.arg : "return" === aw.type ? (this.rval = this.arg = aw.arg, this.method = "return", this.next = "end") : "normal" === aw.type && ax && (this.next = ax);
        return ad;
      },
      finish: function (aw) {
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay];
          if (az.finallyLoc === aw) {
            this.complete(az.completion, az.afterLoc);
            aq(az);
            return ad;
          }
        }
      },
      catch: function (aw) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.tryLoc === aw) {
            var az = ay.completion;
            if ("throw" === az.type) {
              var aA = az.arg;
              aq(ay);
            }
            return aA;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aw, ax, ay) {
        this.delegate = {
          iterator: as(aw),
          resultName: ax,
          nextLoc: ay
        };
        "next" === this.method && (this.arg = X);
        return ad;
      }
    };
    return Y;
  }
  function h(W, X, Y, Z, a0, a1, a2) {
    try {
      var a4 = W[a1](a2),
        a5 = a4.value;
    } catch (a7) {
      return void Y(a7);
    }
    a4.done ? X(a5) : Promise.resolve(a5).then(Z, a0);
  }
  function i(W) {
    return function () {
      var Y = this,
        Z = arguments;
      return new Promise(function (a0, a1) {
        var a3 = W.apply(Y, Z);
        function a4(a6) {
          h(a3, a0, a1, a4, a5, "next", a6);
        }
        function a5(a6) {
          h(a3, a0, a1, a4, a5, "throw", a6);
        }
        a4(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.YongPai : $.getdata("YongPai")) || "";
  window = {};
  var k = "",
    l = "",
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
    w = "";
  function x() {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function W() {
      var Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU;
      return g().wrap(function aV(aW) {
        for (;;) {
          switch (aW.prev = aW.next) {
            case 0:
              if (j) {
                aW.next = 5;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aW.next = 4;
              return U("先去boxjs填写账号密码");
            case 4:
              return aW.abrupt("return");
            case 5:
              Y = j.split(" ");
              Z = c(Y);
              aW.prev = 7;
              Z.s();
            case 9:
              if ((a0 = Z.n()).done) {
                aW.next = 246;
                break;
              }
              a1 = a0.value;
              console.log("随机生成设备");
              o = a1.split("&")[0];
              p = a1.split("&")[1];
              q = a1.split("&")[2];
              r = a1.split("&")[3];
              k = a1.split("&")[4];
              a2 = O();
              k || (k = a2.deviceId);
              v = a2.model;
              console.log(k);
              console.log(v);
              console.log("用户：".concat(o, "开始任务"));
              console.log("登录");
              a3 = Date.now();
              aW.next = 27;
              return z("username=".concat(o, "&password=").concat(encodeURI(p), "&deviceId=").concat(k, "&globalDatetime=").concat(a3, "&sign=").concat(md5("globalDatetime".concat(a3, "username").concat(o, "test_123456679890123456")).toUpperCase()));
            case 27:
              if (a4 = aW.sent, 0 == a4.code) {
                aW.next = 31;
                break;
              }
              console.log(a4.message);
              return aW.abrupt("continue", 244);
            case 31:
              console.log("获取userId：".concat(a4.data.userId));
              s = a4.data.userId;
              console.log("获取name：".concat(a4.data.nickname));
              a5 = a4.data.token;
              u = a4.data.nickname;
              aW.next = 38;
              return B("userId=".concat(s, "&loginName=").concat(o, "&name=").concat(encodeURI(u), "&phone=").concat(o));
            case 38:
              if (a6 = aW.sent, 200 == a6.code) {
                aW.next = 42;
                break;
              }
              console.log(a6.message);
              return aW.abrupt("continue", 244);
            case 42:
              console.log("登录成功");
              l = a6.data;
              console.log("————————————");
              console.log("开始任务");
              a7 = !0;
              a8 = !0;
              a9 = !0;
              aW.next = 51;
              return D("/yongpai-user/api/user/my_level?userId=".concat(s));
            case 51:
              aa = aW.sent;
              ab = c(aa.data.scoreRule);
              aW.prev = 53;
              ab.s();
            case 55:
              if ((ac = ab.n()).done) {
                aW.next = 67;
                break;
              }
              if (ad = ac.value, console.log("任务：".concat(ad.type)), ad.dayscore != ad.usedScore) {
                aW.next = 61;
                break;
              }
              console.log("任务已完成");
              return aW.abrupt("continue", 65);
            case 61:
              console.log("任务进度：".concat(ad.usedScore, "/").concat(ad.dayscore));
              "阅读新闻" == ad.type && (a7 = !1);
              "点赞" == ad.type && (a8 = !1);
              "分享新闻" == ad.type && (a9 = !1);
            case 65:
              aW.next = 55;
              break;
            case 67:
              aW.next = 72;
              break;
            case 69:
              aW.prev = 69;
              aW.t0 = aW.catch(53);
              ab.e(aW.t0);
            case 72:
              aW.prev = 72;
              ab.f();
              return aW.finish(72);
            case 75:
              if (a7 && a8 && a9) {
                aW.next = 123;
                break;
              }
              ae = [0, 2, 20183, 20184, 4, 32];
              af = 30;
              ag = 0;
              ah = ae;
            case 79:
              if (!(ag < ah.length)) {
                aW.next = 123;
                break;
              }
              ai = ah[ag];
              aW.next = 83;
              return D("/yongpai-news/api/news/list?channelId=".concat(ai, "&currentPage=1&timestamp=0"));
            case 83:
              aj = aW.sent;
              ak = c(aj.data.content);
              aW.prev = 85;
              ak.s();
            case 87:
              if ((al = ak.n()).done) {
                aW.next = 112;
                break;
              }
              if (am = al.value, R(am.sourcetime)) {
                aW.next = 91;
                break;
              }
              return aW.abrupt("continue", 110);
            case 91:
              if (0 != af) {
                aW.next = 93;
                break;
              }
              return aW.abrupt("break", 112);
            case 93:
              if (console.log("文章：".concat(am.title)), an = am.id, a7) {
                aW.next = 100;
                break;
              }
              aW.next = 98;
              return D("/yongpai-news/api/news/detail?newsId=".concat(an, "&userId=").concat(s, "&deviceId=").concat(k));
            case 98:
              ao = aW.sent;
              console.log("阅读：".concat(ao.message));
            case 100:
              if (a8) {
                aW.next = 105;
                break;
              }
              aW.next = 103;
              return D("/yongpai-ugc/api/praise/save_news?userId=".concat(s, "&newsId=").concat(an, "&deviceId=").concat(k));
            case 103:
              ap = aW.sent;
              0 == ap.code ? (af--, console.log("点赞获得：".concat(null == ap || null === (aq = ap.data) || void 0 === aq ? void 0 : aq.score, "积分"))) : console.log(ap.message);
            case 105:
              if (a9) {
                aW.next = 110;
                break;
              }
              aW.next = 108;
              return D("/yongpai-ugc/api/forward/news?userId=".concat(s, "&newsId=").concat(an, "&source=4"));
            case 108:
              ar = aW.sent;
              0 == ar.code ? console.log("分享获得：".concat(null == ar ? void 0 : ar.data, "积分")) : console.log(ar.message);
            case 110:
              aW.next = 87;
              break;
            case 112:
              aW.next = 117;
              break;
            case 114:
              aW.prev = 114;
              aW.t1 = aW.catch(85);
              ak.e(aW.t1);
            case 117:
              aW.prev = 117;
              ak.f();
              return aW.finish(117);
            case 120:
              ag++;
              aW.next = 79;
              break;
            case 123:
              as = "";
              aW.next = 126;
              return D("/yongpai-news/api/news/list?channelId=4&currentPage=1&timestamp=0");
            case 126:
              at = aW.sent;
              au = c(at.data.content);
              aW.prev = 128;
              au.s();
            case 130:
              if ((av = au.n()).done) {
                aW.next = 138;
                break;
              }
              if (aw = av.value, !aw.title.includes("转盘") && !aw.subtitle.includes("转盘") || !aw.keywords.includes("客户端")) {
                aW.next = 136;
                break;
              }
              console.log("抽奖活动：".concat(aw.title));
              as = aw.id;
              return aW.abrupt("break", 138);
            case 136:
              aW.next = 130;
              break;
            case 138:
              aW.next = 143;
              break;
            case 140:
              aW.prev = 140;
              aW.t2 = aW.catch(128);
              au.e(aW.t2);
            case 143:
              aW.prev = 143;
              au.f();
              return aW.finish(143);
            case 146:
              if (console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), as) {
                aW.next = 153;
                break;
              }
              console.log("未找到id");
              aW.next = 238;
              break;
            case 153:
              console.log(as);
              console.log("获取抽奖id");
              aW.next = 157;
              return D("/yongpai-news/api/news/detail?newsId=".concat(as, "&userId=").concat(s, "&deviceId=").concat(k));
            case 157:
              ax = aW.sent;
              ay = ax.data.body.match(/id=\d+/);
              ay && (n = ay[0].split("=")[1]);
              console.log(n);
              console.log("阅读登录");
              aW.next = 164;
              return F("userId=".concat(s, "&dbredirect=https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=").concat(n, "&dbnewopen"));
            case 164:
              az = aW.sent;
              m = "";
              aW.next = 168;
              return H(az.data);
            case 168:
              m = aW.sent;
              console.log("获取抽奖key");
              aW.next = 172;
              return L("https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"));
            case 172:
              aA = aW.sent;
              aW.next = 175;
              return J("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(n, "&adslotId="));
            case 175:
              aB = aW.sent;
              lotteryCount = aB.element.freeLimit;
              console.log("拥有".concat(lotteryCount, "次抽奖"));
              aC = 0;
            case 179:
              if (!(aC < aB.element.freeLimit)) {
                aW.next = 238;
                break;
              }
              aW.next = 182;
              return J("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(n, "&activityType=hdtool&consumerId=").concat(t));
            case 182:
              aD = aW.sent;
              eval(aD.token);
              aE = window[aA];
              aW.next = 187;
              return J("/hdtool/doJoin?dpm=92722.3.1.0&activityId=".concat(n, "&_=").concat(Date.now()), "actId=".concat(n, "&oaId=").concat(n, "&activityType=hdtool&consumerId=").concat(t, "&token=").concat(aE));
            case 187:
              if (aF = aW.sent, !aF.success) {
                aW.next = 234;
                break;
              }
              if (aF.orderId) {
                aW.next = 192;
                break;
              }
              console.log(aF.message);
              return aW.abrupt("break", 238);
            case 192:
              aG = aF.orderId;
              aH = 0;
            case 194:
              if (0 != aH) {
                aW.next = 232;
                break;
              }
              aW.next = 197;
              return J("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(aG, "&adslotId="));
            case 197:
              if (aI = aW.sent, aH = aI.result, 0 != aH) {
                aW.next = 203;
                break;
              }
              console.log(aI.message);
              aW.next = 230;
              break;
            case 203:
              if ("thanks" == aI.lottery.type && (console.log("谢谢参与"), w += "用户：".concat(o, " 抽奖获得：谢谢参与\n")), "alipay" != aI.lottery.type) {
                aW.next = 230;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(aI.lottery.title)), aJ = aI.lottery.link, aK = aJ.split("?")[1], aL = {}, aM = aK.split("&"), aN = 0, aO = aM.length; aN < aO; aN++) {
                aP = aM[aN].split("=");
                aL[aP[0]] = aP[1];
              }
              if (aQ = aL.recordId, !q || !r) {
                aW.next = 229;
                break;
              }
              console.log("获取兑换key");
              aW.next = 216;
              return L("https://92722.activity-12.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aQ, "&dbnewopen"));
            case 216:
              aA = aW.sent;
              aW.next = 219;
              return J("/ctoken/getToken.do");
            case 219:
              aR = aW.sent;
              eval(aR.token);
              aS = window[aA];
              aW.next = 224;
              return J("/activity/doTakePrize", "alipay=".concat(r, "&realname=").concat(encodeURI(q), "&recordId=").concat(aQ, "&token=").concat(aS));
            case 224:
              aT = aW.sent;
              console.log(aT.message);
              w += "用户：".concat(o, " 抽奖获得：").concat(aI.lottery.title, " 领取结果：").concat(aT.message, "\n");
              aW.next = 230;
              break;
            case 229:
              console.log("请设置支付宝姓名和账号");
            case 230:
              aW.next = 194;
              break;
            case 232:
              aW.next = 235;
              break;
            case 234:
              console.log(aF.message);
            case 235:
              aC++;
              aW.next = 179;
              break;
            case 238:
              console.log("————————————");
              console.log("查询积分");
              aW.next = 242;
              return D("/yongpai-user/api/user/client?userId=".concat(s, "&deviceId=").concat(k, "&token=").concat(a5));
            case 242:
              aU = aW.sent;
              console.log("拥有积分：".concat(aU.data.score, "\n"));
            case 244:
              aW.next = 9;
              break;
            case 246:
              aW.next = 251;
              break;
            case 248:
              aW.prev = 248;
              aW.t3 = aW.catch(7);
              Z.e(aW.t3);
            case 251:
              aW.prev = 251;
              Z.f();
              return aW.finish(251);
            case 254:
              if (!w) {
                aW.next = 257;
                break;
              }
              aW.next = 257;
              return U(w);
            case 257:
            case "end":
              return aW.stop();
          }
        }
      }, W, null, [[7, 248, 251, 254], [53, 69, 72, 75], [85, 114, 117, 120], [128, 140, 143, 146]]);
    }));
    return y.apply(this, arguments);
  }
  function z(W) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function X(Y) {
      return g().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              return a0.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?".concat(Y),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: "",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a3, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a7) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(a9));
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a8);
                          case 14:
                            aa.prev = 14;
                            a1();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a0.stop();
          }
        }
      }, X);
    }));
    return A.apply(this, arguments);
  }
  function B(W) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function X(Y) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://ypapp.cnnb.com.cn/web-nbcc/member/login?".concat(Y),
                  headers: {
                    "content-type": "application/json",
                    module: "web-member",
                    sign: md5("/member/login{loginName:".concat(o, ",name:").concat(u, ",phone:").concat(o, ",userId:").concat(s)),
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a3, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a7) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(a9));
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a8);
                          case 14:
                            aa.prev = 14;
                            a1();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return C.apply(this, arguments);
  }
  function D(W) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function W(X) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://ypapp.cnnb.com.cn".concat(X),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: l,
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a2, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a6) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(JSON.parse(a8));
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a7);
                          case 14:
                            a9.prev = 14;
                            a0();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return E.apply(this, arguments);
  }
  function F(W) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function Y(Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/duiba/autologin?".concat(Z),
                  headers: {
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a8) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ab.next = 9;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(aa));
                          case 9:
                            ab.next = 14;
                            break;
                          case 11:
                            ab.prev = 11;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a9);
                          case 14:
                            ab.prev = 14;
                            a2();
                            return ab.finish(14);
                          case 17:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, Y);
    }));
    return G.apply(this, arguments);
  }
  function H(W) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function X(Y) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var a4 = {
                  url: "".concat(Y),
                  headers: a3,
                  followRedirect: !1
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    var ab, ac;
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !a8) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 10;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (ab = a9.headers["set-cookie"] || a9.headers["Set-Cookie"], ac = 0; ac < ab.length; ac++) {
                                m += ab[ac].split(";")[0] + ";";
                              }
                            } else {
                              m = a9.headers["set-cookie"] || a9.headers["Set-Cookie"];
                              m = N(m);
                            }
                            a1(m);
                          case 10:
                            ad.next = 15;
                            break;
                          case 12:
                            ad.prev = 12;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, a9);
                          case 15:
                            ad.prev = 15;
                            a1();
                            return ad.finish(15);
                          case 18:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a7, null, [[0, 12, 15, 18]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return I.apply(this, arguments);
  }
  function J(W, X) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function X(Y, Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://92722.activity-12.m.duiba.com.cn".concat(Y),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92722.activity-12.m.duiba.com.cn",
                    cookie: m,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: Z
                };
                $.post(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a8) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(aa));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, a9);
                          case 14:
                            ac.prev = 14;
                            a2();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, X);
    }));
    return K.apply(this, arguments);
  }
  function L(W) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function Y(Z) {
      return g().wrap(function a1(a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a3) {
                var a5 = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: m
                };
                var a6 = {
                  url: Z,
                  headers: a5
                };
                $.get(a6, function () {
                  var a9 = i(g().mark(function aa(ab, ac, ad) {
                    var ae, af, ag, ah;
                    return g().wrap(function ai(aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !ab) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 18;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(ad)[1];
                            eval(ae);
                            af = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(af);
                            console.log("获取consumerId");
                            ag = /consumerId:'(\d+)'/;
                            ah = ad.match(ag);
                            t = ah ? ah[1] : "4136126583";
                            console.log(t);
                            a3(af);
                          case 18:
                            aj.next = 23;
                            break;
                          case 20:
                            aj.prev = 20;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ac);
                          case 23:
                            aj.prev = 23;
                            a3();
                            return aj.finish(23);
                          case 26:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, aa, null, [[0, 20, 23, 26]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, Y);
    }));
    return M.apply(this, arguments);
  }
  function N(W) {
    var X = W.split(", "),
      Y = X.map(function (Z) {
        var a0 = Z.split(";")[0];
        return a0.trim();
      });
    return Y.join(";");
  }
  function O() {
    var W = Q(),
      X = P(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      Y = {
        deviceId: W,
        model: X
      };
    return Y;
  }
  function P(W) {
    return W[Math.floor(Math.random() * W.length)];
  }
  function Q() {
    for (var W = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, X = "abcdefghijklmnopqrstuvwxyz0123456789", Y = "", Z = 0; Z < W; Z++) {
      Y += X.charAt(Math.floor(36 * Math.random()));
    }
    return Y;
  }
  function R(W) {
    var X = new Date(W),
      Y = new Date();
    return X.getFullYear() === Y.getFullYear() && X.getMonth() === Y.getMonth() && X.getDate() === Y.getDate();
  }
  function S() {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function W() {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a2, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            try {
                              a5 ? (console.log("".concat(JSON.stringify(a5))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a7).notice);
                            } catch (aa) {
                              $.logErr(aa, a6);
                            } finally {
                              a0();
                            }
                          case 1:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a4);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, W);
    }));
    return T.apply(this, arguments);
  }
  function U(W) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function W(X) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              if (!$.isNode()) {
                Y.next = 5;
                break;
              }
              Y.next = 3;
              return notify.sendNotify($.name, X);
            case 3:
              Y.next = 6;
              break;
            case 5:
              $.msg($.name, "", X);
            case 6:
            case "end":
              return Y.stop();
          }
        }
      }, W);
    }));
    return V.apply(this, arguments);
  }
  i(g().mark(function W() {
    return g().wrap(function (X) {
      for (;;) {
        switch (X.prev = X.next) {
          case 0:
            X.next = 2;
            return S();
          case 2:
            X.next = 4;
            return x();
          case 4:
          case "end":
            return X.stop();
        }
      }
    }, W);
  }))().catch(function (X) {
    $.log(X);
  }).finally(function () {
    $.done({});
  });
})();