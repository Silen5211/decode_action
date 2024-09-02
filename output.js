//Mon Sep 02 2024 08:09:56 GMT+0000 (Coordinated Universal Time)
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
            var ah = {
              done: !0
            };
            return ab >= a7.length ? ah : {
              done: !1,
              value: a7[ab++]
            };
          },
          e: function (ah) {
            throw ah;
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
        var ai = aa.next();
        ae = ai.done;
        return ai;
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
      } catch (al) {
        ah = !0;
        ac = al;
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
      ah = function (aH, aI, aJ) {
        return aH[aI] = aJ;
      };
    }
    function ai(aH, aI, aJ, aK) {
      var aN = aI && aI.prototype instanceof ap ? aI : ap,
        aO = Object.create(aN.prototype),
        aP = new aC(aK || []);
      ac(aO, "_invoke", {
        value: ay(aH, aJ, aP)
      });
      return aO;
    }
    function aj(aH, aI, aJ) {
      try {
        return {
          type: "normal",
          arg: aH.call(aI, aJ)
        };
      } catch (aN) {
        var aL = {};
        aL.type = "throw";
        aL.arg = aN;
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
      ["next", "throw", "return"].forEach(function (aI) {
        ah(aH, aI, function (aK) {
          return this._invoke(aI, aK);
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
          function aQ() {
            return new aI(function (aR, aS) {
              aM(aN, aO, aR, aS);
            });
          }
          return aK = aK ? aK.then(aQ, aQ) : aQ();
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
          var aP = {
            value: a8,
            done: !0
          };
          return aP;
        }
        for (aJ.method = aM, aJ.arg = aN;;) {
          var aQ = aJ.delegate;
          if (aQ) {
            var aR = az(aQ, aJ);
            if (aR) {
              if (aR === ao) {
                continue;
              }
              return aR;
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
          var aS = aj(aH, aI, aJ);
          if ("normal" === aS.type) {
            if (aL = aJ.done ? an : al, aS.arg === ao) {
              continue;
            }
            var aT = {};
            aT.value = aS.arg;
            aT.done = aJ.done;
            return aT;
          }
          "throw" === aS.type && (aL = an, aJ.method = "throw", aJ.arg = aS.arg);
        }
      };
    }
    function az(aH, aI) {
      var aN = aI.method,
        aO = aH.iterator[aN];
      if (aO === a8) {
        aI.delegate = null;
        "throw" === aN && aH.iterator.return && (aI.method = "return", aI.arg = a8, az(aH, aI), "throw" === aI.method) || "return" !== aN && (aI.method = "throw", aI.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
        return ao;
      }
      var aL = aj(aO, aH.iterator, aI.arg);
      if ("throw" === aL.type) {
        aI.method = "throw";
        aI.arg = aL.arg;
        aI.delegate = null;
        return ao;
      }
      var aM = aL.arg;
      return aM ? aM.done ? (aI[aH.resultName] = aM.value, aI.next = aH.nextLoc, "return" !== aI.method && (aI.method = "next", aI.arg = a8), aI.delegate = null, ao) : aM : (aI.method = "throw", aI.arg = new TypeError("iterator result is not an object"), aI.delegate = null, ao);
    }
    function aA(aH) {
      var aJ = {
        tryLoc: aH[0]
      };
      var aK = aJ;
      1 in aH && (aK.catchLoc = aH[1]);
      2 in aH && (aK.finallyLoc = aH[2], aK.afterLoc = aH[3]);
      this.tryEntries.push(aK);
    }
    function aB(aH) {
      var aI = aH.completion || {};
      aI.type = "normal";
      delete aI.arg;
      aH.completion = aI;
    }
    function aC(aH) {
      var aI = {
        tryLoc: "root"
      };
      this.tryEntries = [aI];
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
            aL = function aO() {
              for (; ++aK < aH.length;) {
                if (ab.call(aH, aK)) {
                  aO.value = aH[aK];
                  aO.done = !1;
                  return aO;
                }
              }
              aO.value = a8;
              aO.done = !0;
              return aO;
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
      var aK = "function" == typeof aH && aH.constructor;
      return !!aK && (aK === aq || "GeneratorFunction" === (aK.displayName || aK.name));
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
      return function aM() {
        for (; aK.length;) {
          var aO = aK.pop();
          if (aO in aJ) {
            aM.value = aO;
            aM.done = !1;
            return aM;
          }
        }
        aM.done = !0;
        return aM;
      };
    };
    a9.values = aD;
    aC.prototype = {
      constructor: aC,
      reset: function (aH) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a8, this.done = !1, this.delegate = null, this.method = "next", this.arg = a8, this.tryEntries.forEach(aB), !aH) {
          for (var aK in this) "t" === aK.charAt(0) && ab.call(this, aK) && !isNaN(+aK.slice(1)) && (this[aK] = a8);
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
        function aQ(aR, aS) {
          aM.type = "throw";
          aM.arg = aH;
          aJ.next = aR;
          aS && (aJ.method = "next", aJ.arg = a8);
          return !!aS;
        }
        for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
          var aL = this.tryEntries[aK],
            aM = aL.completion;
          if ("root" === aL.tryLoc) {
            return aQ("end");
          }
          if (aL.tryLoc <= this.prev) {
            var aN = ab.call(aL, "catchLoc"),
              aO = ab.call(aL, "finallyLoc");
            if (aN && aO) {
              if (this.prev < aL.catchLoc) {
                return aQ(aL.catchLoc, !0);
              }
              if (this.prev < aL.finallyLoc) {
                return aQ(aL.finallyLoc);
              }
            } else {
              if (aN) {
                if (this.prev < aL.catchLoc) {
                  return aQ(aL.catchLoc, !0);
                }
              } else {
                if (!aO) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aL.finallyLoc) {
                  return aQ(aL.finallyLoc);
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
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.finallyLoc === aH) {
            this.complete(aJ.completion, aJ.afterLoc);
            aB(aJ);
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
      var af = a7[ac](ad),
        ag = af.value;
    } catch (aj) {
      return void a9(aj);
    }
    af.done ? a8(ag) : Promise.resolve(ag).then(aa, ab);
  }
  function m(a7) {
    return function () {
      var aa = this,
        ab = arguments;
      return new Promise(function (ac, ad) {
        var ae = a7.apply(aa, ab);
        function af(ah) {
          l(ae, ac, ad, af, ag, "next", ah);
        }
        function ag(ah) {
          l(ae, ac, ad, af, ag, "throw", ah);
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
      var ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp;
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
              ab = n.split(" ");
              ac = c(ab);
              bq.prev = 11;
              ac.s();
            case 13:
              if ((ad = ac.n()).done) {
                bq.next = 291;
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
              bq.next = 28;
              return O("/api/account/init");
            case 28:
              ah = bq.sent;
              s = ah.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bq.next = 34;
              return I("/web/init?client_id=".concat(v));
            case 34:
              ai = bq.sent;
              q = ai.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bq.next = 40;
              return K("/web/oauth/credential_auth");
            case 40:
              if (aj = bq.sent, aj.data) {
                bq.next = 44;
                break;
              }
              console.log(aj.message);
              return bq.abrupt("continue", 289);
            case 44:
              ak = aj.data.authorization_code.code;
              console.log(ak);
              console.log("登录");
              bq.next = 49;
              return O("/api/zbtxz/login", "check_token=&code=".concat(ak, "&token=&type=-1&union_id="));
            case 49:
              if (al = bq.sent, console.log("登录成功"), u = al.data.session.account_id, s = al.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), B) {
                bq.next = 63;
                break;
              }
              bq.next = 59;
              return M("/api/app_start_page/list/new?height=2260&launchType=1&width=1080");
            case 59:
              am = bq.sent;
              an = /\/m-study-panan\/home\?id=(\d+)/;
              ao = JSON.stringify(am).match(an);
              ao && (B = ao[1]);
            case 63:
              if (B) {
                bq.next = 66;
                break;
              }
              console.log("获取id失败");
              return bq.abrupt("continue", 289);
            case 66:
              var bs = {};
              bs.debug = 0;
              bs.userId = "";
              console.log(B);
              console.log("获取key和token");
              bq.next = 70;
              return Q("/api/member/login", bs);
            case 70:
              ap = bq.sent;
              E = ap.data.key;
              C = "Bearer " + ap.data.token;
              console.log(E);
              console.log(C);
              console.log("获取抽奖id");
              bq.next = 78;
              return S("/api/study/detail?id=".concat(B), {
                id: B
              });
            case 78:
              aq = bq.sent;
              ar = aq.data.lottery.lottery_id;
              console.log(ar);
              console.log("开始阅读");
              bq.next = 84;
              return S("/api/study/task/captcha?activityId=".concat(B), {
                activityId: B
              });
            case 84:
              if (as = bq.sent, 10000 != as.code) {
                bq.next = 150;
                break;
              }
              var bt = {};
              bt.activity_id = 0;
              bt.module = "study";
              console.log(as.message);
              bq.next = 89;
              return Q("/api/captcha/get", bt);
            case 89:
              if (ax = bq.sent, ay = void 0, az = null == ax || null === (at = ax.data) || void 0 === at ? void 0 : at.secretKey, aA = null == ax || null === (au = ax.data) || void 0 === au ? void 0 : au.token, console.log("秘钥：".concat(az)), null == ax || null === (av = ax.data) || void 0 === av || !av.originalImageBase64) {
                bq.next = 126;
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
              bq.next = 100;
              return U("".concat(o, "/select"), bu);
            case 100:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 106;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 105;
              return a5("ddddocr服务异常");
            case 105:
              return bq.abrupt("continue", 289);
            case 106:
              console.log(JSON.stringify(getXpos));
              ay = [];
              aF = c(aB);
              bq.prev = 109;
              aH = k().mark(function bL() {
                var bN, bO, bP;
                return k().wrap(function (bQ) {
                  for (;;) {
                    switch (bQ.prev = bQ.next) {
                      case 0:
                        bN = aG.value;
                        bO = getXpos.find(function (bT) {
                          return Object.keys(bT)[0] === bN;
                        });
                        bO ? (bP = bO[bN], ay.push({
                          x: Math.floor((bP[0] + bP[2]) / 2),
                          y: Math.floor((bP[1] + bP[3]) / 2)
                        })) : console.log("未找到：".concat(bN));
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
                bq.next = 116;
                break;
              }
              return bq.delegateYield(aH(), "t0", 114);
            case 114:
              bq.next = 112;
              break;
            case 116:
              bq.next = 121;
              break;
            case 118:
              bq.prev = 118;
              bq.t1 = bq.catch(109);
              aF.e(bq.t1);
            case 121:
              bq.prev = 121;
              aF.f();
              return bq.finish(121);
            case 124:
              bq.next = 145;
              break;
            case 126:
              if (null == ax || null === (aw = ax.data) || void 0 === aw || !aw.jigsawImageUrl) {
                bq.next = 143;
                break;
              }
              aI = ax.data.jigsawImageUrl;
              aJ = ax.data.originalImageUrl;
              console.log("滑块：".concat(aI));
              console.log("背景：".concat(aJ));
              bq.next = 133;
              return U("".concat(o, "/capcode"), {
                slidingImage: aI,
                backImage: aJ
              });
            case 133:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 139;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 138;
              return a5("ddddocr服务异常");
            case 138:
              return bq.abrupt("continue", 289);
            case 139:
              console.log(JSON.stringify(getXpos));
              ay = {
                x: getXpos.result,
                y: 5
              };
              bq.next = 145;
              break;
            case 143:
              console.log("不支持的图片验证类型");
              return bq.abrupt("break", 291);
            case 145:
              aK = W(JSON.stringify(ay), az);
              bq.next = 148;
              return Q("/api/captcha/check", {
                activity_id: 0,
                module: "study",
                cap_token: aA,
                point: aK
              });
            case 148:
              aL = bq.sent;
              console.log("验证滑块：" + aL.message);
            case 150:
              aM = c(aq.data.levels);
              bq.prev = 151;
              aM.s();
            case 153:
              if ((aN = aM.n()).done) {
                bq.next = 196;
                break;
              }
              aO = aN.value;
              bq.next = 157;
              return S("/api/study/level?id=".concat(aO.id), {
                id: aO.id
              });
            case 157:
              if (aP = bq.sent, console.log(aP.data.level.name), aP.data.level.task_num != aP.data.completedTasks.length) {
                bq.next = 162;
                break;
              }
              console.log("已完成");
              return bq.abrupt("continue", 194);
            case 162:
              aQ = c(aP.data.tasks);
              bq.prev = 163;
              aQ.s();
            case 165:
              if ((aR = aQ.n()).done) {
                bq.next = 186;
                break;
              }
              for (aS = aR.value, aT = aS.link, aU = aT.split("?")[1], aV = {}, aW = aU.split("&"), aX = 0, aY = aW.length; aX < aY; aX++) {
                aZ = aW[aX].split("=");
                aV[aZ[0]] = aZ[1];
              }
              bq.next = 174;
              return M("/api/article/detail?id=".concat(aV.id));
            case 174:
              b0 = bq.sent;
              console.log("文章：".concat(b0.data.article.list_title));
              bq.next = 178;
              return M("/api/article/read_time?channel_article_id=".concat(aV.id, "&read_time=5938"));
            case 178:
              var bv = {};
              bv.id = aS.id;
              b1 = bq.sent;
              console.log("阅读：".concat(b1.message));
              bq.next = 182;
              return Q("/api/study/task/complete", bv);
            case 182:
              b2 = bq.sent;
              console.log("完成任务：".concat(b2.message));
            case 184:
              bq.next = 165;
              break;
            case 186:
              bq.next = 191;
              break;
            case 188:
              bq.prev = 188;
              bq.t2 = bq.catch(163);
              aQ.e(bq.t2);
            case 191:
              bq.prev = 191;
              aQ.f();
              return bq.finish(191);
            case 194:
              bq.next = 153;
              break;
            case 196:
              bq.next = 201;
              break;
            case 198:
              bq.prev = 198;
              bq.t3 = bq.catch(151);
              aM.e(bq.t3);
            case 201:
              bq.prev = 201;
              aM.f();
              return bq.finish(201);
            case 204:
              bq.next = 206;
              return Q("/api/lotterybigwheel/_ac_lottery_count", {
                id: ar,
                module: "study"
              });
            case 206:
              b3 = bq.sent;
              console.log("拥有".concat(b3.data.count, "次抽奖"));
              b4 = 0;
            case 209:
              if (!(b4 < b3.data.count)) {
                bq.next = 289;
                break;
              }
              var bw = {};
              bw.id = ar;
              bw.app_id = D;
              bw.module = "study";
              bw.optionHash = "";
              bq.next = 212;
              return Q("/api/lotterybigwheel/_ac_lottery", bw);
            case 212:
              if (b5 = bq.sent, 10000 != b5.code) {
                bq.next = 285;
                break;
              }
              console.log(b5.message);
              bq.next = 217;
              return Q("/api/captcha/get", {
                activity_id: ar,
                module: "bigWheel"
              });
            case 217:
              if (ba = bq.sent, bb = void 0, bc = null == ba || null === (b6 = ba.data) || void 0 === b6 ? void 0 : b6.secretKey, bd = null == ba || null === (b7 = ba.data) || void 0 === b7 ? void 0 : b7.token, console.log("秘钥：".concat(bc)), null == ba || null === (b8 = ba.data) || void 0 === b8 || !b8.originalImageBase64) {
                bq.next = 254;
                break;
              }
              bf = ba.data.wordList;
              bg = c(bf);
              try {
                for (bg.s(); !(bh = bg.n()).done;) {
                  bi = bh.value;
                  console.log("需要识别的字：".concat(bi));
                }
              } catch (bW) {
                bg.e(bW);
              } finally {
                bg.f();
              }
              var bx = {};
              bx.image = ba.data.originalImageBase64;
              bq.next = 228;
              return U("".concat(o, "/select"), bx);
            case 228:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 234;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 233;
              return a5("ddddocr服务异常");
            case 233:
              return bq.abrupt("continue", 286);
            case 234:
              console.log(JSON.stringify(getXpos));
              bb = [];
              bj = c(bf);
              bq.prev = 237;
              bl = k().mark(function c0() {
                var c2, c3, c4;
                return k().wrap(function (c6) {
                  for (;;) {
                    switch (c6.prev = c6.next) {
                      case 0:
                        c2 = bk.value;
                        c3 = getXpos.find(function (c7) {
                          return Object.keys(c7)[0] === c2;
                        });
                        c3 ? (c4 = c3[c2], bb.push({
                          x: Math.floor((c4[0] + c4[2]) / 2),
                          y: Math.floor((c4[1] + c4[3]) / 2)
                        })) : console.log("未找到：".concat(c2));
                      case 3:
                      case "end":
                        return c6.stop();
                    }
                  }
                }, c0);
              });
              bj.s();
            case 240:
              if ((bk = bj.n()).done) {
                bq.next = 244;
                break;
              }
              return bq.delegateYield(bl(), "t4", 242);
            case 242:
              bq.next = 240;
              break;
            case 244:
              bq.next = 249;
              break;
            case 246:
              bq.prev = 246;
              bq.t5 = bq.catch(237);
              bj.e(bq.t5);
            case 249:
              bq.prev = 249;
              bj.f();
              return bq.finish(249);
            case 252:
              bq.next = 273;
              break;
            case 254:
              if (null == ba || null === (b9 = ba.data) || void 0 === b9 || !b9.jigsawImageUrl) {
                bq.next = 271;
                break;
              }
              bm = ba.data.jigsawImageUrl;
              bn = ba.data.originalImageUrl;
              console.log("滑块：".concat(bm));
              console.log("背景：".concat(bn));
              bq.next = 261;
              return U("".concat(o, "/capcode"), {
                slidingImage: bm,
                backImage: bn
              });
            case 261:
              if (getXpos = bq.sent, getXpos) {
                bq.next = 267;
                break;
              }
              console.log("ddddocr服务异常");
              bq.next = 266;
              return a5("ddddocr服务异常");
            case 266:
              return bq.abrupt("continue", 286);
            case 267:
              console.log(JSON.stringify(getXpos));
              bb = {
                x: getXpos.result,
                y: 5
              };
              bq.next = 273;
              break;
            case 271:
              console.log("不支持的图片验证类型");
              return bq.abrupt("break", 289);
            case 273:
              bo = W(JSON.stringify(bb), bc);
              bq.next = 276;
              return Q("/api/captcha/check", {
                activity_id: ar,
                module: "bigWheel",
                cap_token: bd,
                point: bo
              });
            case 276:
              if (bp = bq.sent, console.log("验证滑块：" + bp.message), "操作成功" != bp.message) {
                bq.next = 283;
                break;
              }
              bq.next = 281;
              return Q("/api/lotterybigwheel/_ac_lottery", {
                id: ar,
                app_id: D,
                module: "study",
                optionHash: ""
              });
            case 281:
              b5 = bq.sent;
              b5.data.code ? (console.log("抽奖获得：".concat(b5.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.title, "\n")) : (console.log("抽奖获得：".concat(b5.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.tip_title, "\n"));
            case 283:
              bq.next = 286;
              break;
            case 285:
              b5.data.code ? (console.log("抽奖获得：".concat(b5.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.title, "\n")) : (console.log("抽奖获得：".concat(b5.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(b5.data.tip_title, "\n"));
            case 286:
              b4++;
              bq.next = 209;
              break;
            case 289:
              bq.next = 13;
              break;
            case 291:
              bq.next = 296;
              break;
            case 293:
              bq.prev = 293;
              bq.t6 = bq.catch(11);
              ac.e(bq.t6);
            case 296:
              bq.prev = 296;
              ac.f();
              return bq.finish(296);
            case 299:
              if (!r) {
                bq.next = 302;
                break;
              }
              bq.next = 302;
              return a5(r);
            case 302:
            case "end":
              return bq.stop();
          }
        }
      }, a9, null, [[11, 293, 296, 299], [109, 118, 121, 124], [151, 198, 201, 204], [163, 188, 191, 194], [237, 246, 249, 252]]);
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
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
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
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X();
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: aa.body
                };
                $.post(af, function () {
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
            case 2:
            case "end":
              return ab.stop();
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
                };
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a9),
                  headers: af
                };
                $.get(ag, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !aj) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, ak);
                          case 14:
                            ao.prev = 14;
                            ae();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
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
    P = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Z(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
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
                };
                var ah = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: ag,
                  body: a9
                };
                $.post(ah, function () {
                  var ak = m(k().mark(function al(am, an, ao) {
                    return k().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !am) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(ao));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, an);
                          case 14:
                            ar.prev = 14;
                            ae();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
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
    return R.apply(this, arguments);
  }
  function S(a7, a8) {
    return T.apply(this, arguments);
  }
  function T() {
    T = m(k().mark(function a8(a9, aa) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(aa);
              return ac.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a9),
                  headers: {
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
              return ac.stop();
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
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  "Content-Type": "application/json"
                };
                var af = {
                  url: a9,
                  headers: ae,
                  body: JSON.stringify(aa)
                };
                $.post(af, function (ag, ah, ai) {
                  try {
                    ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(ai));
                  } catch (aj) {
                    $.logErr(aj, ah);
                  } finally {
                    ad();
                  }
                });
              }));
            case 1:
            case "end":
              return ab.stop();
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
    var ad = a0(),
      ae = Date.now(),
      af = {
        app_id: D,
        device_id: A,
        nonce_str: ad,
        source_type: "app",
        timestamp: ae,
        auth_id: u,
        token: s
      };
    Object.entries(a7).forEach(function (ah) {
      var ai = d(ah, 2),
        aj = ai[0],
        ak = ai[1];
      af[aj] = ak;
    });
    var ab = Object.keys(af).sort(),
      ac = ab.map(function (ah) {
        return "".concat(ah, "=").concat(af[ah]);
      }).join("&&");
    ac = ac + "&&" + E;
    CryptoJS = p.createCryptoJS();
    var aa = CryptoJS.SHA256(ac).toString();
    var ag = {};
    ag.uuid = ad;
    ag.time = ae;
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
                var ad = m(k().mark(function ae(af) {
                  return k().wrap(function ah(ai) {
                    for (;;) {
                      switch (ai.prev = ai.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            af(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ai.stop();
                      }
                    }
                  }, ae);
                }));
                return function (af) {
                  return ad.apply(this, arguments);
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
    a6 = m(k().mark(function a7(a8) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (!$.isNode()) {
                a9.next = 5;
                break;
              }
              a9.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              a9.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
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