//Tue Oct 01 2024 06:01:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a7) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a9) {
      return typeof a9;
    } : function (a9) {
      return a9 && "function" == typeof Symbol && a9.constructor === Symbol && a9 !== Symbol.prototype ? "symbol" : typeof a9;
    };
    return b(a7);
  }
  function c(a7, a8) {
    var aa = "undefined" != typeof Symbol && a7[Symbol.iterator] || a7["@@iterator"];
    if (!aa) {
      if (Array.isArray(a7) || (aa = g(a7)) || a8 && a7 && "number" == typeof a7.length) {
        aa && (a7 = aa);
        var ab = 0,
          ac = function () {};
        return {
          s: ac,
          n: function () {
            var ai = {};
            ai.done = !0;
            return ab >= a7.length ? ai : {
              done: !1,
              value: a7[ab++]
            };
          },
          e: function (ai) {
            throw ai;
          },
          f: ac
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ad,
      ae = !0,
      af = !1;
    return {
      s: function () {
        aa = aa.call(a7);
      },
      n: function () {
        var aj = aa.next();
        ae = aj.done;
        return aj;
      },
      e: function (aj) {
        af = !0;
        ad = aj;
      },
      f: function () {
        try {
          ae || null == aa.return || aa.return();
        } finally {
          if (af) {
            throw ad;
          }
        }
      }
    };
  }
  function d(a7, a8) {
    return j(a7) || i(a7, a8) || g(a7, a8) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(a7, a8) {
    if (a7) {
      if ("string" == typeof a7) {
        return h(a7, a8);
      }
      var ab = {}.toString.call(a7).slice(8, -1);
      "Object" === ab && a7.constructor && (ab = a7.constructor.name);
      return "Map" === ab || "Set" === ab ? Array.from(a7) : "Arguments" === ab || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ab) ? h(a7, a8) : void 0;
    }
  }
  function h(a7, a8) {
    (null == a8 || a8 > a7.length) && (a8 = a7.length);
    for (var a9 = 0, aa = Array(a8); a9 < a8; a9++) {
      aa[a9] = a7[a9];
    }
    return aa;
  }
  function i(a7, a8) {
    var aa = null == a7 ? null : "undefined" != typeof Symbol && a7[Symbol.iterator] || a7["@@iterator"];
    if (null != aa) {
      var ab,
        ac,
        ad,
        ae,
        af = [],
        ag = !0,
        ah = !1;
      try {
        if (ad = (aa = aa.call(a7)).next, 0 === a8) {
          if (Object(aa) !== aa) {
            return;
          }
          ag = !1;
        } else {
          for (; !(ag = (ab = ad.call(aa)).done) && (af.push(ab.value), af.length !== a8); ag = !0) {}
        }
      } catch (am) {
        ah = !0;
        ac = am;
      } finally {
        try {
          if (!ag && null != aa.return && (ae = aa.return(), Object(ae) !== ae)) {
            return;
          }
        } finally {
          if (ah) {
            throw ac;
          }
        }
      }
      return af;
    }
  }
  function j(a7) {
    if (Array.isArray(a7)) {
      return a7;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return a9;
    };
    var a8,
      a9 = {},
      aa = Object.prototype,
      ab = aa.hasOwnProperty,
      ac = Object.defineProperty || function (aE, aF, aG) {
        aE[aF] = aG.value;
      },
      ad = "function" == typeof Symbol ? Symbol : {},
      ae = ad.iterator || "@@iterator",
      af = ad.asyncIterator || "@@asyncIterator",
      ag = ad.toStringTag || "@@toStringTag";
    function ah(aE, aF, aG) {
      var aI = {
        value: aG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aE, aF, aI);
      return aE[aF];
    }
    try {
      ah({}, "");
    } catch (aF) {
      ah = function (aG, aH, aI) {
        return aG[aH] = aI;
      };
    }
    function ai(aH, aI, aJ, aK) {
      var aM = aI && aI.prototype instanceof ap ? aI : ap,
        aN = Object.create(aM.prototype),
        aO = new aC(aK || []);
      ac(aN, "_invoke", {
        value: ay(aH, aJ, aO)
      });
      return aN;
    }
    function aj(aH, aI, aJ) {
      try {
        return {
          type: "normal",
          arg: aH.call(aI, aJ)
        };
      } catch (aM) {
        var aK = {
          type: "throw",
          arg: aM
        };
        return aK;
      }
    }
    a9.wrap = ai;
    var ak = "suspendedStart",
      al = "suspendedYield",
      am = "executing",
      an = "completed",
      ao = {};
    function ap() {}
    function aq() {}
    function ar() {}
    var as = {};
    ah(as, ae, function () {
      return this;
    });
    var at = Object.getPrototypeOf,
      au = at && at(at(aD([])));
    au && au !== aa && ab.call(au, ae) && (as = au);
    ar.prototype = ap.prototype = Object.create(as);
    var av = ar.prototype;
    function aw(aH) {
      ["next", "throw", "return"].forEach(function (aK) {
        ah(aH, aK, function (aN) {
          return this._invoke(aK, aN);
        });
      });
    }
    function ax(aH, aI) {
      function aM(aN, aO, aP, aQ) {
        var aS = aj(aH[aN], aH, aO);
        if ("throw" !== aS.type) {
          var aT = aS.arg,
            aU = aT.value;
          return aU && "object" == b(aU) && ab.call(aU, "__await") ? aI.resolve(aU.__await).then(function (aV) {
            aM("next", aV, aP, aQ);
          }, function (aV) {
            aM("throw", aV, aP, aQ);
          }) : aI.resolve(aU).then(function (aV) {
            aT.value = aV;
            aP(aT);
          }, function (aV) {
            return aM("throw", aV, aP, aQ);
          });
        }
        aQ(aS.arg);
      }
      var aK;
      ac(this, "_invoke", {
        value: function (aN, aO) {
          function aR() {
            return new aI(function (aU, aV) {
              aM(aN, aO, aU, aV);
            });
          }
          return aK = aK ? aK.then(aR, aR) : aR();
        }
      });
    }
    function ay(aH, aI, aJ) {
      var aL = ak;
      return function (aN, aO) {
        if (aL === am) {
          throw Error("Generator is already running");
        }
        if (aL === an) {
          if ("throw" === aN) {
            throw aO;
          }
          var aQ = {};
          aQ.value = a8;
          aQ.done = !0;
          return aQ;
        }
        for (aJ.method = aN, aJ.arg = aO;;) {
          var aR = aJ.delegate;
          if (aR) {
            var aS = az(aR, aJ);
            if (aS) {
              if (aS === ao) {
                continue;
              }
              return aS;
            }
          }
          if ("next" === aJ.method) {
            aJ.sent = aJ._sent = aJ.arg;
          } else {
            if ("throw" === aJ.method) {
              if (aL === ak) {
                throw aL = an, aJ.arg;
              }
              aJ.dispatchException(aJ.arg);
            } else {
              "return" === aJ.method && aJ.abrupt("return", aJ.arg);
            }
          }
          aL = am;
          var aT = aj(aH, aI, aJ);
          if ("normal" === aT.type) {
            if (aL = aJ.done ? an : al, aT.arg === ao) {
              continue;
            }
            var aU = {};
            aU.value = aT.arg;
            aU.done = aJ.done;
            return aU;
          }
          "throw" === aT.type && (aL = an, aJ.method = "throw", aJ.arg = aT.arg);
        }
      };
    }
    function az(aH, aI) {
      var aL = aI.method,
        aM = aH.iterator[aL];
      if (aM === a8) {
        aI.delegate = null;
        "throw" === aL && aH.iterator.return && (aI.method = "return", aI.arg = a8, az(aH, aI), "throw" === aI.method) || "return" !== aL && (aI.method = "throw", aI.arg = new TypeError("The iterator does not provide a '" + aL + "' method"));
        return ao;
      }
      var aN = aj(aM, aH.iterator, aI.arg);
      if ("throw" === aN.type) {
        aI.method = "throw";
        aI.arg = aN.arg;
        aI.delegate = null;
        return ao;
      }
      var aO = aN.arg;
      return aO ? aO.done ? (aI[aH.resultName] = aO.value, aI.next = aH.nextLoc, "return" !== aI.method && (aI.method = "next", aI.arg = a8), aI.delegate = null, ao) : aO : (aI.method = "throw", aI.arg = new TypeError("iterator result is not an object"), aI.delegate = null, ao);
    }
    function aA(aH) {
      var aI = {
        tryLoc: aH[0]
      };
      var aJ = aI;
      1 in aH && (aJ.catchLoc = aH[1]);
      2 in aH && (aJ.finallyLoc = aH[2], aJ.afterLoc = aH[3]);
      this.tryEntries.push(aJ);
    }
    function aB(aH) {
      var aJ = aH.completion || {};
      aJ.type = "normal";
      delete aJ.arg;
      aH.completion = aJ;
    }
    function aC(aH) {
      var aK = {
        tryLoc: "root"
      };
      this.tryEntries = [aK];
      aH.forEach(aA, this);
      this.reset(!0);
    }
    function aD(aH) {
      if (aH || "" === aH) {
        var aJ = aH[ae];
        if (aJ) {
          return aJ.call(aH);
        }
        if ("function" == typeof aH.next) {
          return aH;
        }
        if (!isNaN(aH.length)) {
          var aK = -1,
            aL = function aN() {
              for (; ++aK < aH.length;) {
                if (ab.call(aH, aK)) {
                  aN.value = aH[aK];
                  aN.done = !1;
                  return aN;
                }
              }
              aN.value = a8;
              aN.done = !0;
              return aN;
            };
          return aL.next = aL;
        }
      }
      throw new TypeError(b(aH) + " is not iterable");
    }
    aq.prototype = ar;
    ac(av, "constructor", {
      value: ar,
      configurable: !0
    });
    ac(ar, "constructor", {
      value: aq,
      configurable: !0
    });
    aq.displayName = ah(ar, ag, "GeneratorFunction");
    a9.isGeneratorFunction = function (aH) {
      var aJ = "function" == typeof aH && aH.constructor;
      return !!aJ && (aJ === aq || "GeneratorFunction" === (aJ.displayName || aJ.name));
    };
    a9.mark = function (aH) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aH, ar) : (aH.__proto__ = ar, ah(aH, ag, "GeneratorFunction"));
      aH.prototype = Object.create(av);
      return aH;
    };
    a9.awrap = function (aH) {
      var aI = {
        __await: aH
      };
      return aI;
    };
    aw(ax.prototype);
    ah(ax.prototype, af, function () {
      return this;
    });
    a9.AsyncIterator = ax;
    a9.async = function (aH, aI, aJ, aK, aL) {
      void 0 === aL && (aL = Promise);
      var aN = new ax(ai(aH, aI, aJ, aK), aL);
      return a9.isGeneratorFunction(aI) ? aN : aN.next().then(function (aP) {
        return aP.done ? aP.value : aN.next();
      });
    };
    aw(av);
    ah(av, ag, "Generator");
    ah(av, ae, function () {
      return this;
    });
    ah(av, "toString", function () {
      return "[object Generator]";
    });
    a9.keys = function (aH) {
      var aJ = Object(aH),
        aK = [];
      for (var aL in aJ) aK.push(aL);
      aK.reverse();
      return function aN() {
        for (; aK.length;) {
          var aO = aK.pop();
          if (aO in aJ) {
            aN.value = aO;
            aN.done = !1;
            return aN;
          }
        }
        aN.done = !0;
        return aN;
      };
    };
    a9.values = aD;
    aC.prototype = {
      constructor: aC,
      reset: function (aH) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a8, this.done = !1, this.delegate = null, this.method = "next", this.arg = a8, this.tryEntries.forEach(aB), !aH) {
          for (var aJ in this) "t" === aJ.charAt(0) && ab.call(this, aJ) && !isNaN(+aJ.slice(1)) && (this[aJ] = a8);
        }
      },
      stop: function () {
        this.done = !0;
        var aH = this.tryEntries[0].completion;
        if ("throw" === aH.type) {
          throw aH.arg;
        }
        return this.rval;
      },
      dispatchException: function (aH) {
        if (this.done) {
          throw aH;
        }
        var aJ = this;
        function aP(aQ, aR) {
          aM.type = "throw";
          aM.arg = aH;
          aJ.next = aQ;
          aR && (aJ.method = "next", aJ.arg = a8);
          return !!aR;
        }
        for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
          var aL = this.tryEntries[aK],
            aM = aL.completion;
          if ("root" === aL.tryLoc) {
            return aP("end");
          }
          if (aL.tryLoc <= this.prev) {
            var aN = ab.call(aL, "catchLoc"),
              aO = ab.call(aL, "finallyLoc");
            if (aN && aO) {
              if (this.prev < aL.catchLoc) {
                return aP(aL.catchLoc, !0);
              }
              if (this.prev < aL.finallyLoc) {
                return aP(aL.finallyLoc);
              }
            } else {
              if (aN) {
                if (this.prev < aL.catchLoc) {
                  return aP(aL.catchLoc, !0);
                }
              } else {
                if (!aO) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aL.finallyLoc) {
                  return aP(aL.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aH, aI) {
        for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
          var aL = this.tryEntries[aK];
          if (aL.tryLoc <= this.prev && ab.call(aL, "finallyLoc") && this.prev < aL.finallyLoc) {
            var aM = aL;
            break;
          }
        }
        aM && ("break" === aH || "continue" === aH) && aM.tryLoc <= aI && aI <= aM.finallyLoc && (aM = null);
        var aN = aM ? aM.completion : {};
        aN.type = aH;
        aN.arg = aI;
        return aM ? (this.method = "next", this.next = aM.finallyLoc, ao) : this.complete(aN);
      },
      complete: function (aH, aI) {
        if ("throw" === aH.type) {
          throw aH.arg;
        }
        "break" === aH.type || "continue" === aH.type ? this.next = aH.arg : "return" === aH.type ? (this.rval = this.arg = aH.arg, this.method = "return", this.next = "end") : "normal" === aH.type && aI && (this.next = aI);
        return ao;
      },
      finish: function (aH) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.finallyLoc === aH) {
            this.complete(aK.completion, aK.afterLoc);
            aB(aK);
            return ao;
          }
        }
      },
      catch: function (aH) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.tryLoc === aH) {
            var aL = aK.completion;
            if ("throw" === aL.type) {
              var aM = aL.arg;
              aB(aK);
            }
            return aM;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aH, aI, aJ) {
        this.delegate = {
          iterator: aD(aH),
          resultName: aI,
          nextLoc: aJ
        };
        "next" === this.method && (this.arg = a8);
        return ao;
      }
    };
    return a9;
  }
  function l(a7, a8, a9, aa, ab, ac, ad) {
    try {
      var ae = a7[ac](ad),
        af = ae.value;
    } catch (ai) {
      return void a9(ai);
    }
    ae.done ? a8(af) : Promise.resolve(af).then(aa, ab);
  }
  function m(a7) {
    return function () {
      var aa = this,
        ab = arguments;
      return new Promise(function (ac, ad) {
        var af = a7.apply(aa, ab);
        function ag(ai) {
          l(af, ac, ad, ag, ah, "next", ai);
        }
        function ah(ai) {
          l(af, ac, ad, ag, ah, "throw", ai);
        }
        ag(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.RongPanAn : $.getdata("RongPanAn")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = void 0,
    q = "",
    r = "",
    s = "",
    t = "30",
    u = "",
    v = "45",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "",
    D = "8gW3lUcknhBvjpENMTZJ",
    E = "35c782a2",
    F = "FR*r!isE5W";
  function G() {
    return H.apply(this, arguments);
  }
  function H() {
    H = m(k().mark(function a8() {
      var aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp;
      return k().wrap(function (bq) {
        for (;;) {
          switch (bq.prev = bq.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bq.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bq.next = 5;
              return a5("先去boxjs填写账号密码");
            case 5:
              return bq.abrupt("return");
            case 6:
              bq.next = 8;
              return a3();
            case 8:
              p = bq.sent;
              aa = n.split(" ");
              ab = c(aa);
              bq.prev = 11;
              ab.s();
            case 13:
              if ((ac = ab.n()).done) {
                bq.next = 300;
                break;
              }
              ad = ac.value;
              console.log("随机生成UA");
              af = a2();
              y = af.ua;
              z = af.commonUa;
              A = af.uuid;
              console.log(y);
              console.log(z);
              w = ad.split("&")[0];
              x = ad.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              bq.next = 28;
              return O("/api/account/init");
            case 28:
              ag = bq.sent;
              s = ag.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bq.next = 34;
              return I("/web/init?client_id=".concat(v));
            case 34:
              ah = bq.sent;
              q = ah.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bq.next = 40;
              return K("/web/oauth/credential_auth");
            case 40:
              if (ai = bq.sent, ai.data) {
                bq.next = 44;
                break;
              }
              console.log(ai.message);
              return bq.abrupt("continue", 298);
            case 44:
              aj = ai.data.authorization_code.code;
              console.log(aj);
              console.log("登录");
              bq.next = 49;
              return O("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
            case 49:
              if (ak = bq.sent, console.log("登录成功"), u = ak.data.session.account_id, s = ak.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), B) {
                bq.next = 63;
                break;
              }
              bq.next = 59;
              return M("/api/app_start_page/list/new?height=2260&launchType=1&width=1080");
            case 59:
              al = bq.sent;
              am = /\/m-study-panan\/home\?id=(\d+)/;
              an = JSON.stringify(al).match(am);
              an && (B = an[1]);
            case 63:
              if (B) {
                bq.next = 66;
                break;
              }
              console.log("获取id失败");
              return bq.abrupt("continue", 298);
            case 66:
              var bs = {};
              bs.debug = 0;
              bs.userId = "";
              console.log(B);
              console.log("获取key和token");
              bq.next = 70;
              return Q("/api/member/login", bs);
            case 70:
              if (ao = bq.sent, 0 == ao.code) {
                bq.next = 74;
                break;
              }
              console.log(ao.message);
              return bq.abrupt("continue", 298);
            case 74:
              E = ao.data.key;
              C = "Bearer " + ao.data.token;
              console.log(E);
              console.log(C);
              console.log("获取抽奖id");
              bq.next = 81;
              return S("/api/study/detail?id=".concat(B), {
                id: B
              });
            case 81:
              ap = bq.sent;
              aq = ap.data.lottery.lottery_id;
              console.log(aq);
              console.log("开始阅读");
              bq.next = 87;
              return S("/api/study/task/captcha?activityId=".concat(B), {
                activityId: B
              });
            case 87:
              if (ar = bq.sent, 10000 != ar.code) {
                bq.next = 153;
                break;
              }
              var bt = {};
              bt.activity_id = 0;
              bt.module = "study";
              console.log(ar.message);
              bq.next = 92;
              return Q("/api/captcha/get", bt);
            case 92:
              if (aw = bq.sent, ax = void 0, ay = null == aw || null === (as = aw.data) || void 0 === as ? void 0 : as.secretKey, az = null == aw || null === (at = aw.data) || void 0 === at ? void 0 : at.token, console.log("秘钥：".concat(ay)), null == aw || null === (au = aw.data) || void 0 === au || !au.originalImageBase64) {
                bq.next = 129;
                break;
              }
              aA = aw.data.wordList;
              aB = c(aA);
              try {
                for (aB.s(); !(aC = aB.n()).done;) {
                  aD = aC.value;
                  console.log("需要识别的字：".concat(aD));
                }
              } catch (bH) {
                aB.e(bH);
              } finally {
                aB.f();
              }
              var bu = {};
              bu.image = aw.data.originalImageBase64;
              bq.next = 103;
              return U("".concat(o, "/select"), bu);
            case 103:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 109;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 108;
              return a5("ddddocr服务异常");
            case 108:
              return bq.abrupt("continue", 298);
            case 109:
              console.log(JSON.stringify(getXpos));
              ax = [];
              aE = c(aA);
              bq.prev = 112;
              aG = k().mark(function bL() {
                var bM, bN, bO;
                return k().wrap(function (bP) {
                  for (;;) {
                    switch (bP.prev = bP.next) {
                      case 0:
                        bM = aF.value;
                        bN = getXpos.find(function (bS) {
                          return Object.keys(bS)[0] === bM;
                        });
                        bN ? (bO = bN[bM], ax.push({
                          x: Math.floor((bO[0] + bO[2]) / 2),
                          y: Math.floor((bO[1] + bO[3]) / 2)
                        })) : console.log("未找到：".concat(bM));
                      case 3:
                      case "end":
                        return bP.stop();
                    }
                  }
                }, bL);
              });
              aE.s();
            case 115:
              if ((aF = aE.n()).done) {
                bq.next = 119;
                break;
              }
              return bq.delegateYield(aG(), "t0", 117);
            case 117:
              bq.next = 115;
              break;
            case 119:
              bq.next = 124;
              break;
            case 121:
              bq.prev = 121;
              bq.t1 = bq.catch(112);
              aE.e(bq.t1);
            case 124:
              bq.prev = 124;
              aE.f();
              return bq.finish(124);
            case 127:
              bq.next = 148;
              break;
            case 129:
              if (null == aw || null === (av = aw.data) || void 0 === av || !av.jigsawImageUrl) {
                bq.next = 146;
                break;
              }
              aH = aw.data.jigsawImageUrl;
              aI = aw.data.originalImageUrl;
              console.log("滑块：".concat(aH));
              console.log("背景：".concat(aI));
              bq.next = 136;
              return U("".concat(o, "/capcode"), {
                slidingImage: aH,
                backImage: aI
              });
            case 136:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 142;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 141;
              return a5("ddddocr服务异常");
            case 141:
              return bq.abrupt("continue", 298);
            case 142:
              console.log(JSON.stringify(getXpos));
              ax = {
                x: getXpos.result,
                y: 5
              };
              bq.next = 148;
              break;
            case 146:
              console.log("不支持的图片验证类型");
              return bq.abrupt("break", 300);
            case 148:
              aJ = W(JSON.stringify(ax), ay);
              bq.next = 151;
              return Q("/api/captcha/check", {
                activity_id: 0,
                module: "study",
                cap_token: az,
                point: aJ
              });
            case 151:
              aK = bq.sent;
              console.log("验证滑块：" + aK.message);
            case 153:
              aL = c(ap.data.levels);
              bq.prev = 154;
              aL.s();
            case 156:
              if ((aM = aL.n()).done) {
                bq.next = 199;
                break;
              }
              aN = aM.value;
              bq.next = 160;
              return S("/api/study/level?id=".concat(aN.id), {
                id: aN.id
              });
            case 160:
              if (aO = bq.sent, console.log(aO.data.level.name), aO.data.level.task_num != aO.data.completedTasks.length) {
                bq.next = 165;
                break;
              }
              console.log("已完成");
              return bq.abrupt("continue", 197);
            case 165:
              aP = c(aO.data.tasks);
              bq.prev = 166;
              aP.s();
            case 168:
              if ((aQ = aP.n()).done) {
                bq.next = 189;
                break;
              }
              for (aR = aQ.value, aS = aR.link, aT = aS.split("?")[1], aU = {}, aV = aT.split("&"), aW = 0, aX = aV.length; aW < aX; aW++) {
                aY = aV[aW].split("=");
                aU[aY[0]] = aY[1];
              }
              bq.next = 177;
              return M("/api/article/detail?id=".concat(aU.id));
            case 177:
              aZ = bq.sent;
              console.log("文章：".concat(aZ.data.article.list_title));
              bq.next = 181;
              return M("/api/article/read_time?channel_article_id=".concat(aU.id, "&read_time=5938"));
            case 181:
              var bv = {};
              bv.id = aR.id;
              b0 = bq.sent;
              console.log("阅读：".concat(b0.message));
              bq.next = 185;
              return Q("/api/study/task/complete", bv);
            case 185:
              b1 = bq.sent;
              console.log("完成任务：".concat(b1.message));
            case 187:
              bq.next = 168;
              break;
            case 189:
              bq.next = 194;
              break;
            case 191:
              bq.prev = 191;
              bq.t2 = bq.catch(166);
              aP.e(bq.t2);
            case 194:
              bq.prev = 194;
              aP.f();
              return bq.finish(194);
            case 197:
              bq.next = 156;
              break;
            case 199:
              bq.next = 204;
              break;
            case 201:
              bq.prev = 201;
              bq.t3 = bq.catch(154);
              aL.e(bq.t3);
            case 204:
              bq.prev = 204;
              aL.f();
              return bq.finish(204);
            case 207:
              bq.next = 209;
              return Q("/api/lotterybigwheel/_ac_lottery_count", {
                id: aq,
                module: "study"
              });
            case 209:
              b2 = bq.sent;
              console.log("拥有".concat(b2.data.count, "次抽奖"));
              b3 = 0;
            case 212:
              if (!(b3 < b2.data.count)) {
                bq.next = 298;
                break;
              }
              bq.next = 215;
              return Q("/api/lotterybigwheel/_ac_lottery", {
                id: aq,
                app_id: D,
                module: "study",
                optionHash: ""
              });
            case 215:
              if (b4 = bq.sent, 10000 != b4.code) {
                bq.next = 294;
                break;
              }
              console.log(b4.message);
              b5 = 0;
            case 219:
              if (!(b5 < 3)) {
                bq.next = 292;
                break;
              }
              var bw = {};
              bw.activity_id = aq;
              bw.module = "bigWheel";
              bq.next = 222;
              return Q("/api/captcha/get", bw);
            case 222:
              if (ba = bq.sent, bb = void 0, bc = null == ba || null === (b6 = ba.data) || void 0 === b6 ? void 0 : b6.secretKey, bd = null == ba || null === (b7 = ba.data) || void 0 === b7 ? void 0 : b7.token, console.log("秘钥：".concat(bc)), null == ba || null === (b8 = ba.data) || void 0 === b8 || !b8.originalImageBase64) {
                bq.next = 259;
                break;
              }
              bf = ba.data.wordList;
              bg = c(bf);
              try {
                for (bg.s(); !(bh = bg.n()).done;) {
                  bi = bh.value;
                  console.log("需要识别的字：".concat(bi));
                }
              } catch (bX) {
                bg.e(bX);
              } finally {
                bg.f();
              }
              var bx = {};
              bx.image = ba.data.originalImageBase64;
              bq.next = 233;
              return U("".concat(o, "/select"), bx);
            case 233:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 239;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 238;
              return a5("ddddocr服务异常");
            case 238:
              return bq.abrupt("continue", 289);
            case 239:
              console.log(JSON.stringify(getXpos));
              bb = [];
              bj = c(bf);
              bq.prev = 242;
              bl = k().mark(function c1() {
                var c3, c4, c5;
                return k().wrap(function (c7) {
                  for (;;) {
                    switch (c7.prev = c7.next) {
                      case 0:
                        c3 = bk.value;
                        c4 = getXpos.find(function (ca) {
                          return Object.keys(ca)[0] === c3;
                        });
                        c4 ? (c5 = c4[c3], bb.push({
                          x: Math.floor((c5[0] + c5[2]) / 2),
                          y: Math.floor((c5[1] + c5[3]) / 2)
                        })) : console.log("未找到：".concat(c3));
                      case 3:
                      case "end":
                        return c7.stop();
                    }
                  }
                }, c1);
              });
              bj.s();
            case 245:
              if ((bk = bj.n()).done) {
                bq.next = 249;
                break;
              }
              return bq.delegateYield(bl(), "t4", 247);
            case 247:
              bq.next = 245;
              break;
            case 249:
              bq.next = 254;
              break;
            case 251:
              bq.prev = 251;
              bq.t5 = bq.catch(242);
              bj.e(bq.t5);
            case 254:
              bq.prev = 254;
              bj.f();
              return bq.finish(254);
            case 257:
              bq.next = 278;
              break;
            case 259:
              if (null == ba || null === (b9 = ba.data) || void 0 === b9 || !b9.jigsawImageUrl) {
                bq.next = 276;
                break;
              }
              bm = ba.data.jigsawImageUrl;
              bn = ba.data.originalImageUrl;
              console.log("滑块：".concat(bm));
              console.log("背景：".concat(bn));
              bq.next = 266;
              return U("".concat(o, "/capcode"), {
                slidingImage: bm,
                backImage: bn
              });
            case 266:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 272;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 271;
              return a5("ddddocr服务异常");
            case 271:
              return bq.abrupt("continue", 289);
            case 272:
              console.log(JSON.stringify(getXpos));
              bb = {
                x: getXpos.result,
                y: 5
              };
              bq.next = 278;
              break;
            case 276:
              console.log("不支持的图片验证类型");
              return bq.abrupt("break", 292);
            case 278:
              bo = W(JSON.stringify(bb), bc);
              bq.next = 281;
              return Q("/api/captcha/check", {
                activity_id: aq,
                module: "bigWheel",
                cap_token: bd,
                point: bo
              });
            case 281:
              if (bp = bq.sent, console.log("验证滑块：" + bp.message), "操作成功" != bp.message) {
                bq.next = 289;
                break;
              }
              bq.next = 286;
              return Q("/api/lotterybigwheel/_ac_lottery", {
                id: aq,
                app_id: D,
                module: "study",
                optionHash: ""
              });
            case 286:
              b4 = bq.sent;
              b4.data.code ? (console.log("抽奖获得：".concat(b4.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b4.data.title, "\n")) : (console.log("抽奖获得：".concat(b4.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b4.data.tip_title, "\n"));
              return bq.abrupt("break", 292);
            case 289:
              b5++;
              bq.next = 219;
              break;
            case 292:
              bq.next = 295;
              break;
            case 294:
              b4.data.code ? (console.log("抽奖获得：".concat(b4.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b4.data.title, "\n")) : (console.log("抽奖获得：".concat(b4.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b4.data.tip_title, "\n"));
            case 295:
              b3++;
              bq.next = 212;
              break;
            case 298:
              bq.next = 13;
              break;
            case 300:
              bq.next = 305;
              break;
            case 302:
              bq.prev = 302;
              bq.t6 = bq.catch(11);
              ab.e(bq.t6);
            case 305:
              bq.prev = 305;
              ab.f();
              return bq.finish(305);
            case 308:
              if (!r) {
                bq.next = 311;
                break;
              }
              bq.next = 311;
              return a5(r);
            case 311:
            case "end":
              return bq.stop();
          }
        }
      }, a8, null, [[11, 302, 305, 308], [112, 121, 124, 127], [154, 201, 204, 207], [166, 191, 194, 197], [242, 251, 254, 257]]);
    }));
    return H.apply(this, arguments);
  }
  function I(a7) {
    return J.apply(this, arguments);
  }
  function J() {
    J = m(k().mark(function a7(a8) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ad, function () {
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(aj));
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return J.apply(this, arguments);
  }
  function K(a7) {
    return L.apply(this, arguments);
  }
  function L() {
    L = m(k().mark(function a8(a9) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = X();
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ac.uuid,
                    "X-SIGNATURE": ac.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ac.body
                };
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            try {
                              ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : af(JSON.parse(am));
                            } catch (ap) {
                              $.logErr(ap, al);
                            } finally {
                              af();
                            }
                          case 1:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ad.stop();
          }
        }
      }, a8);
    }));
    return L.apply(this, arguments);
  }
  function M(a7) {
    return N.apply(this, arguments);
  }
  function N() {
    N = m(k().mark(function a8(a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Z(a9);
              return ac.abrupt("return", new Promise(function (ae) {
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ae();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return N.apply(this, arguments);
  }
  function O(a7, a8) {
    return P.apply(this, arguments);
  }
  function P() {
    P = m(k().mark(function a8(a9, aa) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = Z(a9);
              return ad.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://vapp.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ac.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ac.uuid,
                    "X-SIGNATURE": ac.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: aa
                };
                $.post(ah, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !ak) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(am));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, al);
                          case 14:
                            ao.prev = 14;
                            af();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ad.stop();
          }
        }
      }, a8);
    }));
    return P.apply(this, arguments);
  }
  function Q(a7, a8) {
    return R.apply(this, arguments);
  }
  function R() {
    R = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a9);
              return ac.abrupt("return", new Promise(function (ad) {
                var af = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": A,
                  "access-auth-id": u,
                  "access-api-signature": ab.signature,
                  "access-nonce-str": ab.uuid,
                  authorization: C,
                  "access-app-id": D,
                  "access-timestamp": ab.time,
                  "access-api-token": s,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_panan;xsb_panan;1.1.9;native_app;6.11.0",
                  "content-type": "application/json; charset=UTF-8",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: af,
                  body: JSON.stringify(a9)
                };
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !ak) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(am));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, al);
                          case 14:
                            ao.prev = 14;
                            ad();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return R.apply(this, arguments);
  }
  function S(a7, a8) {
    return T.apply(this, arguments);
  }
  function T() {
    T = m(k().mark(function a8(a9, aa) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = Y(aa);
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": A,
                  "access-auth-id": u,
                  "access-api-signature": ac.signature,
                  "access-nonce-str": ac.uuid,
                  authorization: C,
                  "access-app-id": D,
                  "access-timestamp": ac.time,
                  "access-api-token": s,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_panan;xsb_panan;1.1.9;native_app;6.11.0",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ah = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a9),
                  headers: ag
                };
                $.get(ah, function () {
                  var aj = m(k().mark(function ak(al, am, an) {
                    return k().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !al) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(an));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, am);
                          case 14:
                            ap.prev = 14;
                            af();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ad.stop();
          }
        }
      }, a8);
    }));
    return T.apply(this, arguments);
  }
  function U(a7, a8) {
    return V.apply(this, arguments);
  }
  function V() {
    V = m(k().mark(function a8(a9, aa) {
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (ae) {
                var af = {
                  "Content-Type": "application/json"
                };
                var ag = {
                  url: a9,
                  headers: af,
                  body: JSON.stringify(aa)
                };
                $.post(ag, function (ah, ai, aj) {
                  try {
                    ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(aj));
                  } catch (ak) {
                    $.logErr(ak, ai);
                  } finally {
                    ae();
                  }
                });
              }));
            case 1:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return V.apply(this, arguments);
  }
  function W(a7, a8) {
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.enc.Utf8.parse(a8),
      aa = CryptoJS.enc.Utf8.parse(a7),
      ab = CryptoJS.AES.encrypt(aa, a9, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return ab.toString();
  }
  function X() {
    var af = new (p.loadJSEncrypt())();
    af.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = af.encrypt(x);
    var a9 = a0(),
      aa = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ab = "post%%/web/oauth/credential_auth?".concat(aa, "%%").concat(a9, "%%");
    aa = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ac = CryptoJS.HmacSHA256(ab, q),
      ad = CryptoJS.enc.Hex.stringify(ac);
    var ae = {};
    ae.uuid = a9;
    ae.signature = ad;
    ae.body = aa;
    return ae;
  }
  function Y(a7) {
    var a8 = a0(),
      a9 = Date.now(),
      aa = {
        app_id: D,
        device_id: A,
        nonce_str: a8,
        source_type: "app",
        timestamp: a9,
        auth_id: u,
        token: s
      };
    Object.entries(a7).forEach(function (af) {
      var ag = d(af, 2),
        ah = ag[0],
        ai = ag[1];
      aa[ah] = ai;
    });
    var ab = Object.keys(aa).sort(),
      ac = ab.map(function (af) {
        return "".concat(af, "=").concat(aa[af]);
      }).join("&&");
    ac = ac + "&&" + E;
    CryptoJS = p.createCryptoJS();
    var ad = CryptoJS.SHA256(ac).toString(),
      ae = {
        uuid: a8,
        time: a9,
        signature: ad
      };
    return ae;
  }
  function Z(a7) {
    var a8 = a0(),
      a9 = Date.now();
    a7.indexOf("?") > 0 && (a7 = a7.substring(0, a7.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var aa = CryptoJS.SHA256("".concat(a7, "&&").concat(s, "&&").concat(a8, "&&").concat(a9, "&&").concat(F, "&&").concat(t)).toString(),
      ab = {
        uuid: a8,
        time: a9,
        signature: aa
      };
    return ab;
  }
  function a0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a7) {
      var a8 = 16 * Math.random() | 0,
        a9 = "x" === a7 ? a8 : 3 & a8 | 8;
      return a9.toString(16);
    });
  }
  function a1(a7) {
    return a7[Math.floor(Math.random() * a7.length)];
  }
  function a2() {
    var a7 = "1.1.9",
      a8 = a0(),
      a9 = a1(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      aa = "Xiaomi " + a9,
      ab = "Android",
      ac = "".concat(ab.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a7, ";1.0;null;").concat(a9),
      ad = "".concat(a7, ";").concat(a8, ";").concat(aa, ";").concat(ab, ";").concat("11", ";").concat("Release", ";").concat("6.11.0"),
      ae = {
        ua: ac,
        commonUa: ad,
        uuid: a8
      };
    return ae;
  }
  function a3() {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = m(k().mark(function a7() {
      var a9;
      return k().wrap(function aa(ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (a9 = $.getdata("Utils_Code") || "", !a9 || !Object.keys(a9).length) {
                ab.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a9);
              return ab.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ab.abrupt("return", new Promise(function () {
                var ae = m(k().mark(function af(ag) {
                  return k().wrap(function ai(aj) {
                    for (;;) {
                      switch (aj.prev = aj.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            ag(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aj.stop();
                      }
                    }
                  }, af);
                }));
                return function (ag) {
                  return ae.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a4.apply(this, arguments);
  }
  function a5(a7) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = m(k().mark(function a9(aa) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (!$.isNode()) {
                ab.next = 5;
                break;
              }
              ab.next = 3;
              return notify.sendNotify($.name, aa);
            case 3:
              ab.next = 6;
              break;
            case 5:
              $.msg($.name, "", aa);
            case 6:
            case "end":
              return ab.stop();
          }
        }
      }, a9);
    }));
    return a6.apply(this, arguments);
  }
  m(k().mark(function a7() {
    return k().wrap(function (a8) {
      for (;;) {
        switch (a8.prev = a8.next) {
          case 0:
            a8.next = 2;
            return G();
          case 2:
          case "end":
            return a8.stop();
        }
      }
    }, a7);
  }))().catch(function (a8) {
    $.log(a8);
  }).finally(function () {
    $.done({});
  });
})();