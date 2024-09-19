//Thu Sep 19 2024 13:04:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a7) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (aa) {
      return typeof aa;
    } : function (aa) {
      return aa && "function" == typeof Symbol && aa.constructor === Symbol && aa !== Symbol.prototype ? "symbol" : typeof aa;
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
            var ag = {
              done: !0
            };
            return ab >= a7.length ? ag : {
              done: !1,
              value: a7[ab++]
            };
          },
          e: function (ag) {
            throw ag;
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
      e: function (ai) {
        af = !0;
        ad = ai;
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
      var a9 = {}.toString.call(a7).slice(8, -1);
      "Object" === a9 && a7.constructor && (a9 = a7.constructor.name);
      return "Map" === a9 || "Set" === a9 ? Array.from(a7) : "Arguments" === a9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a9) ? h(a7, a8) : void 0;
    }
  }
  function h(a7, a8) {
    (null == a8 || a8 > a7.length) && (a8 = a7.length);
    for (var aa = 0, ab = Array(a8); aa < a8; aa++) {
      ab[aa] = a7[aa];
    }
    return ab;
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
      } catch (ak) {
        ah = !0;
        ac = ak;
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
      var aH = {
        value: aG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aE, aF, aH);
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
      var aL = aI && aI.prototype instanceof ap ? aI : ap,
        aM = Object.create(aL.prototype),
        aN = new aC(aK || []);
      ac(aM, "_invoke", {
        value: ay(aH, aJ, aN)
      });
      return aM;
    }
    function aj(aH, aI, aJ) {
      try {
        return {
          type: "normal",
          arg: aH.call(aI, aJ)
        };
      } catch (aN) {
        var aL = {
          type: "throw",
          arg: aN
        };
        return aL;
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
        ah(aH, aK, function (aM) {
          return this._invoke(aK, aM);
        });
      });
    }
    function ax(aH, aI) {
      function aM(aN, aO, aP, aQ) {
        var aS = aj(aH[aN], aH, aO);
        if ("throw" !== aS.type) {
          var aT = aS.arg,
            aU = aT.value;
          return aU && "object" == b(aU) && ab.call(aU, "__await") ? aI.resolve(aU.__await).then(function (aW) {
            aM("next", aW, aP, aQ);
          }, function (aW) {
            aM("throw", aW, aP, aQ);
          }) : aI.resolve(aU).then(function (aW) {
            aT.value = aW;
            aP(aT);
          }, function (aW) {
            return aM("throw", aW, aP, aQ);
          });
        }
        aQ(aS.arg);
      }
      var aK;
      ac(this, "_invoke", {
        value: function (aN, aO) {
          function aP() {
            return new aI(function (aR, aS) {
              aM(aN, aO, aR, aS);
            });
          }
          return aK = aK ? aK.then(aP, aP) : aP();
        }
      });
    }
    function ay(aH, aI, aJ) {
      var aL = ak;
      return function (aM, aN) {
        if (aL === am) {
          throw Error("Generator is already running");
        }
        if (aL === an) {
          if ("throw" === aM) {
            throw aN;
          }
          var aO = {
            value: a8,
            done: !0
          };
          return aO;
        }
        for (aJ.method = aM, aJ.arg = aN;;) {
          var aP = aJ.delegate;
          if (aP) {
            var aQ = az(aP, aJ);
            if (aQ) {
              if (aQ === ao) {
                continue;
              }
              return aQ;
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
          var aR = aj(aH, aI, aJ);
          if ("normal" === aR.type) {
            if (aL = aJ.done ? an : al, aR.arg === ao) {
              continue;
            }
            var aS = {};
            aS.value = aR.arg;
            aS.done = aJ.done;
            return aS;
          }
          "throw" === aR.type && (aL = an, aJ.method = "throw", aJ.arg = aR.arg);
        }
      };
    }
    function az(aH, aI) {
      var aO = aI.method,
        aP = aH.iterator[aO];
      if (aP === a8) {
        aI.delegate = null;
        "throw" === aO && aH.iterator.return && (aI.method = "return", aI.arg = a8, az(aH, aI), "throw" === aI.method) || "return" !== aO && (aI.method = "throw", aI.arg = new TypeError("The iterator does not provide a '" + aO + "' method"));
        return ao;
      }
      var aM = aj(aP, aH.iterator, aI.arg);
      if ("throw" === aM.type) {
        aI.method = "throw";
        aI.arg = aM.arg;
        aI.delegate = null;
        return ao;
      }
      var aN = aM.arg;
      return aN ? aN.done ? (aI[aH.resultName] = aN.value, aI.next = aH.nextLoc, "return" !== aI.method && (aI.method = "next", aI.arg = a8), aI.delegate = null, ao) : aN : (aI.method = "throw", aI.arg = new TypeError("iterator result is not an object"), aI.delegate = null, ao);
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
      var aJ = {
        tryLoc: "root"
      };
      this.tryEntries = [aJ];
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
            aL = function aP() {
              for (; ++aK < aH.length;) {
                if (ab.call(aH, aK)) {
                  aP.value = aH[aK];
                  aP.done = !1;
                  return aP;
                }
              }
              aP.value = a8;
              aP.done = !0;
              return aP;
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
      var aI = "function" == typeof aH && aH.constructor;
      return !!aI && (aI === aq || "GeneratorFunction" === (aI.displayName || aI.name));
    };
    a9.mark = function (aH) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aH, ar) : (aH.__proto__ = ar, ah(aH, ag, "GeneratorFunction"));
      aH.prototype = Object.create(av);
      return aH;
    };
    a9.awrap = function (aH) {
      var aJ = {
        __await: aH
      };
      return aJ;
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
          var aP = aK.pop();
          if (aP in aJ) {
            aN.value = aP;
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
          for (var aI in this) "t" === aI.charAt(0) && ab.call(this, aI) && !isNaN(+aI.slice(1)) && (this[aI] = a8);
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
        var aK = this;
        function aQ(aR, aS) {
          aN.type = "throw";
          aN.arg = aH;
          aK.next = aR;
          aS && (aK.method = "next", aK.arg = a8);
          return !!aS;
        }
        for (var aL = this.tryEntries.length - 1; aL >= 0; --aL) {
          var aM = this.tryEntries[aL],
            aN = aM.completion;
          if ("root" === aM.tryLoc) {
            return aQ("end");
          }
          if (aM.tryLoc <= this.prev) {
            var aO = ab.call(aM, "catchLoc"),
              aP = ab.call(aM, "finallyLoc");
            if (aO && aP) {
              if (this.prev < aM.catchLoc) {
                return aQ(aM.catchLoc, !0);
              }
              if (this.prev < aM.finallyLoc) {
                return aQ(aM.finallyLoc);
              }
            } else {
              if (aO) {
                if (this.prev < aM.catchLoc) {
                  return aQ(aM.catchLoc, !0);
                }
              } else {
                if (!aP) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aM.finallyLoc) {
                  return aQ(aM.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aH, aI) {
        for (var aL = this.tryEntries.length - 1; aL >= 0; --aL) {
          var aM = this.tryEntries[aL];
          if (aM.tryLoc <= this.prev && ab.call(aM, "finallyLoc") && this.prev < aM.finallyLoc) {
            var aN = aM;
            break;
          }
        }
        aN && ("break" === aH || "continue" === aH) && aN.tryLoc <= aI && aI <= aN.finallyLoc && (aN = null);
        var aO = aN ? aN.completion : {};
        aO.type = aH;
        aO.arg = aI;
        return aN ? (this.method = "next", this.next = aN.finallyLoc, ao) : this.complete(aO);
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
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc === aH) {
            var aK = aJ.completion;
            if ("throw" === aK.type) {
              var aL = aK.arg;
              aB(aJ);
            }
            return aL;
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
      var af = a7[ac](ad),
        ag = af.value;
    } catch (ai) {
      return void a9(ai);
    }
    af.done ? a8(ag) : Promise.resolve(ag).then(aa, ab);
  }
  function m(a7) {
    return function () {
      var a9 = this,
        aa = arguments;
      return new Promise(function (ab, ac) {
        var ae = a7.apply(a9, aa);
        function af(ah) {
          l(ae, ab, ac, af, ag, "next", ah);
        }
        function ag(ah) {
          l(ae, ab, ac, af, ag, "throw", ah);
        }
        af(void 0);
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
    H = m(k().mark(function a9() {
      var ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq;
      return k().wrap(function (br) {
        for (;;) {
          switch (br.prev = br.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                br.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              br.next = 5;
              return a5("先去boxjs填写账号密码");
            case 5:
              return br.abrupt("return");
            case 6:
              br.next = 8;
              return a3();
            case 8:
              p = br.sent;
              ab = n.split(" ");
              ac = c(ab);
              br.prev = 11;
              ac.s();
            case 13:
              if ((ad = ac.n()).done) {
                br.next = 297;
                break;
              }
              af = ad.value;
              console.log("随机生成UA");
              ag = a2();
              y = ag.ua;
              z = ag.commonUa;
              A = ag.uuid;
              console.log(y);
              console.log(z);
              w = af.split("&")[0];
              x = af.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              br.next = 28;
              return O("/api/account/init");
            case 28:
              ah = br.sent;
              s = ah.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              br.next = 34;
              return I("/web/init?client_id=".concat(v));
            case 34:
              ai = br.sent;
              q = ai.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              br.next = 40;
              return K("/web/oauth/credential_auth");
            case 40:
              if (aj = br.sent, aj.data) {
                br.next = 44;
                break;
              }
              console.log(aj.message);
              return br.abrupt("continue", 295);
            case 44:
              ak = aj.data.authorization_code.code;
              console.log(ak);
              console.log("登录");
              br.next = 49;
              return O("/api/zbtxz/login", "check_token=&code=".concat(ak, "&token=&type=-1&union_id="));
            case 49:
              if (al = br.sent, console.log("登录成功"), u = al.data.session.account_id, s = al.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), B) {
                br.next = 63;
                break;
              }
              br.next = 59;
              return M("/api/app_start_page/list/new?height=2260&launchType=1&width=1080");
            case 59:
              am = br.sent;
              an = /\/m-study-panan\/home\?id=(\d+)/;
              ao = JSON.stringify(am).match(an);
              ao && (B = ao[1]);
            case 63:
              if (B) {
                br.next = 66;
                break;
              }
              console.log("获取id失败");
              return br.abrupt("continue", 295);
            case 66:
              var bt = {};
              bt.debug = 0;
              bt.userId = "";
              console.log(B);
              console.log("获取key和token");
              br.next = 70;
              return Q("/api/member/login", bt);
            case 70:
              ap = br.sent;
              E = ap.data.key;
              C = "Bearer " + ap.data.token;
              console.log(E);
              console.log(C);
              console.log("获取抽奖id");
              br.next = 78;
              return S("/api/study/detail?id=".concat(B), {
                id: B
              });
            case 78:
              aq = br.sent;
              ar = aq.data.lottery.lottery_id;
              console.log(ar);
              console.log("开始阅读");
              br.next = 84;
              return S("/api/study/task/captcha?activityId=".concat(B), {
                activityId: B
              });
            case 84:
              if (as = br.sent, 10000 != as.code) {
                br.next = 150;
                break;
              }
              console.log(as.message);
              br.next = 89;
              return Q("/api/captcha/get", {
                activity_id: 0,
                module: "study"
              });
            case 89:
              if (ax = br.sent, ay = void 0, az = null == ax || null === (at = ax.data) || void 0 === at ? void 0 : at.secretKey, aA = null == ax || null === (au = ax.data) || void 0 === au ? void 0 : au.token, console.log("秘钥：".concat(az)), null == ax || null === (av = ax.data) || void 0 === av || !av.originalImageBase64) {
                br.next = 126;
                break;
              }
              aB = ax.data.wordList;
              aC = c(aB);
              try {
                for (aC.s(); !(aD = aC.n()).done;) {
                  aE = aD.value;
                  console.log("需要识别的字：".concat(aE));
                }
              } catch (bH) {
                aC.e(bH);
              } finally {
                aC.f();
              }
              var bu = {};
              bu.image = ax.data.originalImageBase64;
              br.next = 100;
              return U("".concat(o, "/select"), bu);
            case 100:
              if (getXpos = br.sent, getXpos) {
                br.next = 106;
                break;
              }
              console.log("ddddocr服务异常");
              br.next = 105;
              return a5("ddddocr服务异常");
            case 105:
              return br.abrupt("continue", 295);
            case 106:
              console.log(JSON.stringify(getXpos));
              ay = [];
              aF = c(aB);
              br.prev = 109;
              aH = k().mark(function bL() {
                var bM, bN, bO;
                return k().wrap(function (bQ) {
                  for (;;) {
                    switch (bQ.prev = bQ.next) {
                      case 0:
                        bM = aG.value;
                        bN = getXpos.find(function (bT) {
                          return Object.keys(bT)[0] === bM;
                        });
                        bN ? (bO = bN[bM], ay.push({
                          x: Math.floor((bO[0] + bO[2]) / 2),
                          y: Math.floor((bO[1] + bO[3]) / 2)
                        })) : console.log("未找到：".concat(bM));
                      case 3:
                      case "end":
                        return bQ.stop();
                    }
                  }
                }, bL);
              });
              aF.s();
            case 112:
              if ((aG = aF.n()).done) {
                br.next = 116;
                break;
              }
              return br.delegateYield(aH(), "t0", 114);
            case 114:
              br.next = 112;
              break;
            case 116:
              br.next = 121;
              break;
            case 118:
              br.prev = 118;
              br.t1 = br.catch(109);
              aF.e(br.t1);
            case 121:
              br.prev = 121;
              aF.f();
              return br.finish(121);
            case 124:
              br.next = 145;
              break;
            case 126:
              if (null == ax || null === (aw = ax.data) || void 0 === aw || !aw.jigsawImageUrl) {
                br.next = 143;
                break;
              }
              aI = ax.data.jigsawImageUrl;
              aJ = ax.data.originalImageUrl;
              console.log("滑块：".concat(aI));
              console.log("背景：".concat(aJ));
              br.next = 133;
              return U("".concat(o, "/capcode"), {
                slidingImage: aI,
                backImage: aJ
              });
            case 133:
              if (getXpos = br.sent, getXpos) {
                br.next = 139;
                break;
              }
              console.log("ddddocr服务异常");
              br.next = 138;
              return a5("ddddocr服务异常");
            case 138:
              return br.abrupt("continue", 295);
            case 139:
              console.log(JSON.stringify(getXpos));
              ay = {
                x: getXpos.result,
                y: 5
              };
              br.next = 145;
              break;
            case 143:
              console.log("不支持的图片验证类型");
              return br.abrupt("break", 297);
            case 145:
              aK = W(JSON.stringify(ay), az);
              br.next = 148;
              return Q("/api/captcha/check", {
                activity_id: 0,
                module: "study",
                cap_token: aA,
                point: aK
              });
            case 148:
              aL = br.sent;
              console.log("验证滑块：" + aL.message);
            case 150:
              aM = c(aq.data.levels);
              br.prev = 151;
              aM.s();
            case 153:
              if ((aN = aM.n()).done) {
                br.next = 196;
                break;
              }
              aO = aN.value;
              br.next = 157;
              return S("/api/study/level?id=".concat(aO.id), {
                id: aO.id
              });
            case 157:
              if (aP = br.sent, console.log(aP.data.level.name), aP.data.level.task_num != aP.data.completedTasks.length) {
                br.next = 162;
                break;
              }
              console.log("已完成");
              return br.abrupt("continue", 194);
            case 162:
              aQ = c(aP.data.tasks);
              br.prev = 163;
              aQ.s();
            case 165:
              if ((aR = aQ.n()).done) {
                br.next = 186;
                break;
              }
              for (aS = aR.value, aT = aS.link, aU = aT.split("?")[1], aV = {}, aW = aU.split("&"), aX = 0, aY = aW.length; aX < aY; aX++) {
                aZ = aW[aX].split("=");
                aV[aZ[0]] = aZ[1];
              }
              br.next = 174;
              return M("/api/article/detail?id=".concat(aV.id));
            case 174:
              b0 = br.sent;
              console.log("文章：".concat(b0.data.article.list_title));
              br.next = 178;
              return M("/api/article/read_time?channel_article_id=".concat(aV.id, "&read_time=5938"));
            case 178:
              var bv = {};
              bv.id = aS.id;
              b1 = br.sent;
              console.log("阅读：".concat(b1.message));
              br.next = 182;
              return Q("/api/study/task/complete", bv);
            case 182:
              b2 = br.sent;
              console.log("完成任务：".concat(b2.message));
            case 184:
              br.next = 165;
              break;
            case 186:
              br.next = 191;
              break;
            case 188:
              br.prev = 188;
              br.t2 = br.catch(163);
              aQ.e(br.t2);
            case 191:
              br.prev = 191;
              aQ.f();
              return br.finish(191);
            case 194:
              br.next = 153;
              break;
            case 196:
              br.next = 201;
              break;
            case 198:
              br.prev = 198;
              br.t3 = br.catch(151);
              aM.e(br.t3);
            case 201:
              br.prev = 201;
              aM.f();
              return br.finish(201);
            case 204:
              br.next = 206;
              return Q("/api/lotterybigwheel/_ac_lottery_count", {
                id: ar,
                module: "study"
              });
            case 206:
              b3 = br.sent;
              console.log("拥有".concat(b3.data.count, "次抽奖"));
              b4 = 0;
            case 209:
              if (!(b4 < b3.data.count)) {
                br.next = 295;
                break;
              }
              br.next = 212;
              return Q("/api/lotterybigwheel/_ac_lottery", {
                id: ar,
                app_id: D,
                module: "study",
                optionHash: ""
              });
            case 212:
              if (b5 = br.sent, 10000 != b5.code) {
                br.next = 291;
                break;
              }
              console.log(b5.message);
              b6 = 0;
            case 216:
              if (!(b6 < 3)) {
                br.next = 289;
                break;
              }
              br.next = 219;
              return Q("/api/captcha/get", {
                activity_id: ar,
                module: "bigWheel"
              });
            case 219:
              if (bb = br.sent, bc = void 0, bd = null == bb || null === (b7 = bb.data) || void 0 === b7 ? void 0 : b7.secretKey, bf = null == bb || null === (b8 = bb.data) || void 0 === b8 ? void 0 : b8.token, console.log("秘钥：".concat(bd)), null == bb || null === (b9 = bb.data) || void 0 === b9 || !b9.originalImageBase64) {
                br.next = 256;
                break;
              }
              bg = bb.data.wordList;
              bh = c(bg);
              try {
                for (bh.s(); !(bi = bh.n()).done;) {
                  bj = bi.value;
                  console.log("需要识别的字：".concat(bj));
                }
              } catch (bX) {
                bh.e(bX);
              } finally {
                bh.f();
              }
              var bw = {};
              bw.image = bb.data.originalImageBase64;
              br.next = 230;
              return U("".concat(o, "/select"), bw);
            case 230:
              if (getXpos = br.sent, getXpos) {
                br.next = 236;
                break;
              }
              console.log("ddddocr服务异常");
              br.next = 235;
              return a5("ddddocr服务异常");
            case 235:
              return br.abrupt("continue", 286);
            case 236:
              console.log(JSON.stringify(getXpos));
              bc = [];
              bk = c(bg);
              br.prev = 239;
              bm = k().mark(function c1() {
                var c3, c4, c5;
                return k().wrap(function (c6) {
                  for (;;) {
                    switch (c6.prev = c6.next) {
                      case 0:
                        c3 = bl.value;
                        c4 = getXpos.find(function (c9) {
                          return Object.keys(c9)[0] === c3;
                        });
                        c4 ? (c5 = c4[c3], bc.push({
                          x: Math.floor((c5[0] + c5[2]) / 2),
                          y: Math.floor((c5[1] + c5[3]) / 2)
                        })) : console.log("未找到：".concat(c3));
                      case 3:
                      case "end":
                        return c6.stop();
                    }
                  }
                }, c1);
              });
              bk.s();
            case 242:
              if ((bl = bk.n()).done) {
                br.next = 246;
                break;
              }
              return br.delegateYield(bm(), "t4", 244);
            case 244:
              br.next = 242;
              break;
            case 246:
              br.next = 251;
              break;
            case 248:
              br.prev = 248;
              br.t5 = br.catch(239);
              bk.e(br.t5);
            case 251:
              br.prev = 251;
              bk.f();
              return br.finish(251);
            case 254:
              br.next = 275;
              break;
            case 256:
              if (null == bb || null === (ba = bb.data) || void 0 === ba || !ba.jigsawImageUrl) {
                br.next = 273;
                break;
              }
              bn = bb.data.jigsawImageUrl;
              bo = bb.data.originalImageUrl;
              console.log("滑块：".concat(bn));
              console.log("背景：".concat(bo));
              br.next = 263;
              return U("".concat(o, "/capcode"), {
                slidingImage: bn,
                backImage: bo
              });
            case 263:
              if (getXpos = br.sent, getXpos) {
                br.next = 269;
                break;
              }
              console.log("ddddocr服务异常");
              br.next = 268;
              return a5("ddddocr服务异常");
            case 268:
              return br.abrupt("continue", 286);
            case 269:
              console.log(JSON.stringify(getXpos));
              bc = {
                x: getXpos.result,
                y: 5
              };
              br.next = 275;
              break;
            case 273:
              console.log("不支持的图片验证类型");
              return br.abrupt("break", 289);
            case 275:
              bp = W(JSON.stringify(bc), bd);
              br.next = 278;
              return Q("/api/captcha/check", {
                activity_id: ar,
                module: "bigWheel",
                cap_token: bf,
                point: bp
              });
            case 278:
              if (bq = br.sent, console.log("验证滑块：" + bq.message), "操作成功" != bq.message) {
                br.next = 286;
                break;
              }
              var bx = {};
              bx.id = ar;
              bx.app_id = D;
              bx.module = "study";
              bx.optionHash = "";
              br.next = 283;
              return Q("/api/lotterybigwheel/_ac_lottery", bx);
            case 283:
              b5 = br.sent;
              b5.data.code ? (console.log("抽奖获得：".concat(b5.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.title, "\n")) : (console.log("抽奖获得：".concat(b5.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.tip_title, "\n"));
              return br.abrupt("break", 289);
            case 286:
              b6++;
              br.next = 216;
              break;
            case 289:
              br.next = 292;
              break;
            case 291:
              b5.data.code ? (console.log("抽奖获得：".concat(b5.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.title, "\n")) : (console.log("抽奖获得：".concat(b5.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.tip_title, "\n"));
            case 292:
              b4++;
              br.next = 209;
              break;
            case 295:
              br.next = 13;
              break;
            case 297:
              br.next = 302;
              break;
            case 299:
              br.prev = 299;
              br.t6 = br.catch(11);
              ac.e(br.t6);
            case 302:
              br.prev = 302;
              ac.f();
              return br.finish(302);
            case 305:
              if (!r) {
                br.next = 308;
                break;
              }
              br.next = 308;
              return a5(r);
            case 308:
            case "end":
              return br.stop();
          }
        }
      }, a9, null, [[11, 299, 302, 305], [109, 118, 121, 124], [151, 198, 201, 204], [163, 188, 191, 194], [239, 248, 251, 254]]);
    }));
    return H.apply(this, arguments);
  }
  function I(a7) {
    return J.apply(this, arguments);
  }
  function J() {
    J = m(k().mark(function a8(a9) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(al));
                            } catch (an) {
                              $.logErr(an, ak);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a8);
    }));
    return J.apply(this, arguments);
  }
  function K(a7) {
    return L.apply(this, arguments);
  }
  function L() {
    L = m(k().mark(function a8(a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = X();
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ab.body
                };
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            try {
                              ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(am));
                            } catch (ap) {
                              $.logErr(ap, al);
                            } finally {
                              ae();
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
              return ac.stop();
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
    N = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Z(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": aa.time,
                  "X-SESSION-ID": s,
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "X-TENANT-ID": t,
                  "X-ACCOUNT-ID": u,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": z
                };
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: af
                };
                $.get(ag, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ad();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
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
              return ab.stop();
          }
        }
      }, a7);
    }));
    return N.apply(this, arguments);
  }
  function O(a7, a8) {
    return P.apply(this, arguments);
  }
  function P() {
    P = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Z(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
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
                  },
                  body: a9
                };
                $.post(ag, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
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
      }, a7);
    }));
    return P.apply(this, arguments);
  }
  function Q(a7, a8) {
    return R.apply(this, arguments);
  }
  function R() {
    R = m(k().mark(function a8(a9, aa) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = Y(aa);
              return ad.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a9),
                  headers: {
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
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(aa)
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
                            ae(JSON.parse(am));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, al);
                          case 14:
                            ao.prev = 14;
                            ae();
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
                var ah = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a9),
                  headers: {
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
                  }
                };
                $.get(ah, function () {
                  var aj = m(k().mark(function ak(al, am, an) {
                    return k().wrap(function (ao) {
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
    var a7 = new (p.loadJSEncrypt())();
    a7.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = a7.encrypt(x);
    var a8 = a0(),
      a9 = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(aa, q),
      ac = CryptoJS.enc.Hex.stringify(ab),
      ad = {
        uuid: a8,
        signature: ac,
        body: a9
      };
    return ad;
  }
  function Y(a7) {
    var ab = a0(),
      ac = Date.now(),
      ad = {
        app_id: D,
        device_id: A,
        nonce_str: ab,
        source_type: "app",
        timestamp: ac,
        auth_id: u,
        token: s
      };
    Object.entries(a7).forEach(function (ah) {
      var ai = d(ah, 2),
        aj = ai[0],
        ak = ai[1];
      ad[aj] = ak;
    });
    var ae = Object.keys(ad).sort(),
      af = ae.map(function (ah) {
        return "".concat(ah, "=").concat(ad[ah]);
      }).join("&&");
    af = af + "&&" + E;
    CryptoJS = p.createCryptoJS();
    var aa = CryptoJS.SHA256(af).toString();
    var ag = {};
    ag.uuid = ab;
    ag.time = ac;
    ag.signature = aa;
    return ag;
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
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a8) {
      var a9 = 16 * Math.random() | 0,
        aa = "x" === a8 ? a9 : 3 & a9 | 8;
      return aa.toString(16);
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
    a4 = m(k().mark(function a8() {
      var aa;
      return k().wrap(function ab(ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              if (aa = $.getdata("Utils_Code") || "", !aa || !Object.keys(aa).length) {
                ac.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aa);
              return ac.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ac.abrupt("return", new Promise(function () {
                var ag = m(k().mark(function ah(ai) {
                  return k().wrap(function ak(al) {
                    for (;;) {
                      switch (al.prev = al.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (am) {
                            $.setdata(am, "Utils_Code");
                            eval(am);
                            console.log("✅ Utils加载成功, 请继续");
                            ai(creatUtils());
                          });
                        case 1:
                        case "end":
                          return al.stop();
                      }
                    }
                  }, ah);
                }));
                return function (ai) {
                  return ag.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return a4.apply(this, arguments);
  }
  function a5(a7) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = m(k().mark(function a8(a9) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (!$.isNode()) {
                aa.next = 5;
                break;
              }
              aa.next = 3;
              return notify.sendNotify($.name, a9);
            case 3:
              aa.next = 6;
              break;
            case 5:
              $.msg($.name, "", a9);
            case 6:
            case "end":
              return aa.stop();
          }
        }
      }, a8);
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