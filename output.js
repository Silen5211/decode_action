//Thu Sep 19 2024 12:46:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a9) {
      return typeof a9;
    } : function (a9) {
      return a9 && "function" == typeof Symbol && a9.constructor === Symbol && a9 !== Symbol.prototype ? "symbol" : typeof a9;
    };
    return b(a6);
  }
  function c(a6, a7) {
    var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (!a9) {
      if (Array.isArray(a6) || (a9 = g(a6)) || a7 && a6 && "number" == typeof a6.length) {
        a9 && (a6 = a9);
        var aa = 0,
          ab = function () {};
        return {
          s: ab,
          n: function () {
            var ah = {
              done: !0
            };
            return aa >= a6.length ? ah : {
              done: !1,
              value: a6[aa++]
            };
          },
          e: function (ag) {
            throw ag;
          },
          f: ab
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ac,
      ad = !0,
      ae = !1;
    return {
      s: function () {
        a9 = a9.call(a6);
      },
      n: function () {
        var ah = a9.next();
        ad = ah.done;
        return ah;
      },
      e: function (ah) {
        ae = !0;
        ac = ah;
      },
      f: function () {
        try {
          ad || null == a9.return || a9.return();
        } finally {
          if (ae) {
            throw ac;
          }
        }
      }
    };
  }
  function d(a6, a7) {
    return j(a6) || i(a6, a7) || g(a6, a7) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(a6, a7) {
    if (a6) {
      if ("string" == typeof a6) {
        return h(a6, a7);
      }
      var aa = {}.toString.call(a6).slice(8, -1);
      "Object" === aa && a6.constructor && (aa = a6.constructor.name);
      return "Map" === aa || "Set" === aa ? Array.from(a6) : "Arguments" === aa || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aa) ? h(a6, a7) : void 0;
    }
  }
  function h(a6, a7) {
    (null == a7 || a7 > a6.length) && (a7 = a6.length);
    for (var a9 = 0, aa = Array(a7); a9 < a7; a9++) {
      aa[a9] = a6[a9];
    }
    return aa;
  }
  function i(a6, a7) {
    var a9 = null == a6 ? null : "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (null != a9) {
      var aa,
        ab,
        ac,
        ad,
        ae = [],
        af = !0,
        ag = !1;
      try {
        if (ac = (a9 = a9.call(a6)).next, 0 === a7) {
          if (Object(a9) !== a9) {
            return;
          }
          af = !1;
        } else {
          for (; !(af = (aa = ac.call(a9)).done) && (ae.push(aa.value), ae.length !== a7); af = !0) {}
        }
      } catch (ak) {
        ag = !0;
        ab = ak;
      } finally {
        try {
          if (!af && null != a9.return && (ad = a9.return(), Object(ad) !== ad)) {
            return;
          }
        } finally {
          if (ag) {
            throw ab;
          }
        }
      }
      return ae;
    }
  }
  function j(a6) {
    if (Array.isArray(a6)) {
      return a6;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return a8;
    };
    var a7,
      a8 = {},
      a9 = Object.prototype,
      aa = a9.hasOwnProperty,
      ab = Object.defineProperty || function (aD, aE, aF) {
        aD[aE] = aF.value;
      },
      ac = "function" == typeof Symbol ? Symbol : {},
      ad = ac.iterator || "@@iterator",
      ae = ac.asyncIterator || "@@asyncIterator",
      af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      var aG = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aG);
      return aD[aE];
    }
    try {
      ag({}, "");
    } catch (aE) {
      ag = function (aG, aH, aI) {
        return aG[aH] = aI;
      };
    }
    function ah(aG, aH, aI, aJ) {
      var aL = aH && aH.prototype instanceof ao ? aH : ao,
        aM = Object.create(aL.prototype),
        aN = new aB(aJ || []);
      ab(aM, "_invoke", {
        value: ax(aG, aI, aN)
      });
      return aM;
    }
    function ai(aG, aH, aI) {
      try {
        return {
          type: "normal",
          arg: aG.call(aH, aI)
        };
      } catch (aM) {
        var aK = {
          type: "throw",
          arg: aM
        };
        return aK;
      }
    }
    a8.wrap = ah;
    var aj = "suspendedStart",
      ak = "suspendedYield",
      al = "executing",
      am = "completed",
      an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf,
      at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      ["next", "throw", "return"].forEach(function (aJ) {
        ag(aG, aJ, function (aM) {
          return this._invoke(aJ, aM);
        });
      });
    }
    function aw(aG, aH) {
      function aK(aL, aM, aN, aO) {
        var aQ = ai(aG[aL], aG, aM);
        if ("throw" !== aQ.type) {
          var aR = aQ.arg,
            aS = aR.value;
          return aS && "object" == b(aS) && aa.call(aS, "__await") ? aH.resolve(aS.__await).then(function (aV) {
            aK("next", aV, aN, aO);
          }, function (aV) {
            aK("throw", aV, aN, aO);
          }) : aH.resolve(aS).then(function (aV) {
            aR.value = aV;
            aN(aR);
          }, function (aV) {
            return aK("throw", aV, aN, aO);
          });
        }
        aO(aQ.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aL, aM) {
          function aO() {
            return new aH(function (aS, aT) {
              aK(aL, aM, aS, aT);
            });
          }
          return aJ = aJ ? aJ.then(aO, aO) : aO();
        }
      });
    }
    function ax(aG, aH, aI) {
      var aK = aj;
      return function (aM, aN) {
        if (aK === al) {
          throw Error("Generator is already running");
        }
        if (aK === am) {
          if ("throw" === aM) {
            throw aN;
          }
          var aP = {
            value: a7,
            done: !0
          };
          return aP;
        }
        for (aI.method = aM, aI.arg = aN;;) {
          var aQ = aI.delegate;
          if (aQ) {
            var aR = ay(aQ, aI);
            if (aR) {
              if (aR === an) {
                continue;
              }
              return aR;
            }
          }
          if ("next" === aI.method) {
            aI.sent = aI._sent = aI.arg;
          } else {
            if ("throw" === aI.method) {
              if (aK === aj) {
                throw aK = am, aI.arg;
              }
              aI.dispatchException(aI.arg);
            } else {
              "return" === aI.method && aI.abrupt("return", aI.arg);
            }
          }
          aK = al;
          var aS = ai(aG, aH, aI);
          if ("normal" === aS.type) {
            if (aK = aI.done ? am : ak, aS.arg === an) {
              continue;
            }
            var aT = {};
            aT.value = aS.arg;
            aT.done = aI.done;
            return aT;
          }
          "throw" === aS.type && (aK = am, aI.method = "throw", aI.arg = aS.arg);
        }
      };
    }
    function ay(aG, aH) {
      var aN = aH.method,
        aO = aG.iterator[aN];
      if (aO === a7) {
        aH.delegate = null;
        "throw" === aN && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aN && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
        return an;
      }
      var aM = ai(aO, aG.iterator, aH.arg);
      if ("throw" === aM.type) {
        aH.method = "throw";
        aH.arg = aM.arg;
        aH.delegate = null;
        return an;
      }
      var aL = aM.arg;
      return aL ? aL.done ? (aH[aG.resultName] = aL.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aL : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
    }
    function az(aG) {
      var aH = {
        tryLoc: aG[0]
      };
      var aI = aH;
      1 in aG && (aI.catchLoc = aG[1]);
      2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
      this.tryEntries.push(aI);
    }
    function aA(aG) {
      var aH = aG.completion || {};
      aH.type = "normal";
      delete aH.arg;
      aG.completion = aH;
    }
    function aB(aG) {
      var aH = {
        tryLoc: "root"
      };
      this.tryEntries = [aH];
      aG.forEach(az, this);
      this.reset(!0);
    }
    function aC(aG) {
      if (aG || "" === aG) {
        var aH = aG[ad];
        if (aH) {
          return aH.call(aG);
        }
        if ("function" == typeof aG.next) {
          return aG;
        }
        if (!isNaN(aG.length)) {
          var aI = -1,
            aJ = function aL() {
              for (; ++aI < aG.length;) {
                if (aa.call(aG, aI)) {
                  aL.value = aG[aI];
                  aL.done = !1;
                  return aL;
                }
              }
              aL.value = a7;
              aL.done = !0;
              return aL;
            };
          return aJ.next = aJ;
        }
      }
      throw new TypeError(b(aG) + " is not iterable");
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: !0
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: !0
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      var aH = "function" == typeof aG && aG.constructor;
      return !!aH && (aH === ap || "GeneratorFunction" === (aH.displayName || aH.name));
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      var aI = {
        __await: aG
      };
      return aI;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aL = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aL : aL.next().then(function (aN) {
        return aN.done ? aN.value : aL.next();
      });
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      return this;
    });
    ag(au, "toString", function () {
      return "[object Generator]";
    });
    a8.keys = function (aG) {
      var aI = Object(aG),
        aJ = [];
      for (var aK in aI) aJ.push(aK);
      aJ.reverse();
      return function aL() {
        for (; aJ.length;) {
          var aO = aJ.pop();
          if (aO in aI) {
            aL.value = aO;
            aL.done = !1;
            return aL;
          }
        }
        aL.done = !0;
        return aL;
      };
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = !1, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
          for (var aH in this) "t" === aH.charAt(0) && aa.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a7);
        }
      },
      stop: function () {
        this.done = !0;
        var aG = this.tryEntries[0].completion;
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        return this.rval;
      },
      dispatchException: function (aG) {
        if (this.done) {
          throw aG;
        }
        var aI = this;
        function aP(aQ, aR) {
          aL.type = "throw";
          aL.arg = aG;
          aI.next = aQ;
          aR && (aI.method = "next", aI.arg = a7);
          return !!aR;
        }
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ],
            aL = aK.completion;
          if ("root" === aK.tryLoc) {
            return aP("end");
          }
          if (aK.tryLoc <= this.prev) {
            var aM = aa.call(aK, "catchLoc"),
              aN = aa.call(aK, "finallyLoc");
            if (aM && aN) {
              if (this.prev < aK.catchLoc) {
                return aP(aK.catchLoc, !0);
              }
              if (this.prev < aK.finallyLoc) {
                return aP(aK.finallyLoc);
              }
            } else {
              if (aM) {
                if (this.prev < aK.catchLoc) {
                  return aP(aK.catchLoc, !0);
                }
              } else {
                if (!aN) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aK.finallyLoc) {
                  return aP(aK.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
          var aL = this.tryEntries[aK];
          if (aL.tryLoc <= this.prev && aa.call(aL, "finallyLoc") && this.prev < aL.finallyLoc) {
            var aM = aL;
            break;
          }
        }
        aM && ("break" === aG || "continue" === aG) && aM.tryLoc <= aH && aH <= aM.finallyLoc && (aM = null);
        var aN = aM ? aM.completion : {};
        aN.type = aG;
        aN.arg = aH;
        return aM ? (this.method = "next", this.next = aM.finallyLoc, an) : this.complete(aN);
      },
      complete: function (aG, aH) {
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
        return an;
      },
      finish: function (aG) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.finallyLoc === aG) {
            this.complete(aJ.completion, aJ.afterLoc);
            aA(aJ);
            return an;
          }
        }
      },
      catch: function (aG) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc === aG) {
            var aK = aJ.completion;
            if ("throw" === aK.type) {
              var aL = aK.arg;
              aA(aJ);
            }
            return aL;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aG, aH, aI) {
        this.delegate = {
          iterator: aC(aG),
          resultName: aH,
          nextLoc: aI
        };
        "next" === this.method && (this.arg = a7);
        return an;
      }
    };
    return a8;
  }
  function l(a6, a7, a8, a9, aa, ab, ac) {
    try {
      var ae = a6[ab](ac),
        af = ae.value;
    } catch (ah) {
      return void a8(ah);
    }
    ae.done ? a7(af) : Promise.resolve(af).then(a9, aa);
  }
  function m(a6) {
    return function () {
      var a8 = this,
        a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a6.apply(a8, a9);
        function ae(ag) {
          l(ad, aa, ab, ae, af, "next", ag);
        }
        function af(ag) {
          l(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.ZSWY : $.getdata("ZSWY")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = void 0,
    q = "",
    r = "",
    s = "",
    t = "73",
    u = "",
    v = "10024",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "vKmnytOp9GrPa7kLbWTx",
    D = "35c782a2",
    E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = m(k().mark(function a7() {
      var a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV;
      return k().wrap(function (bW) {
        for (;;) {
          switch (bW.prev = bW.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bW.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bW.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return bW.abrupt("return");
            case 6:
              bW.next = 8;
              return a2();
            case 8:
              p = bW.sent;
              a9 = n.split(" ");
              aa = c(a9);
              bW.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                bW.next = 389;
                break;
              }
              ac = ab.value;
              console.log("随机生成UA");
              ad = a1();
              y = ad.ua;
              z = ad.commonUa;
              A = ad.uuid;
              console.log(y);
              console.log(z);
              w = ac.split("&")[0];
              x = ac.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              bW.next = 28;
              return N("/api/account/init");
            case 28:
              af = bW.sent;
              s = af.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bW.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ag = bW.sent;
              q = ag.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bW.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ah = bW.sent, ah.data) {
                bW.next = 44;
                break;
              }
              console.log(ah.message);
              return bW.abrupt("continue", 387);
            case 44:
              ai = ah.data.authorization_code.code;
              console.log(ai);
              console.log("登录");
              bW.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ai, "&token=&type=-1&union_id="));
            case 49:
              aj = bW.sent;
              console.log("登录成功");
              u = aj.data.session.account_id;
              s = aj.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              bW.next = 58;
              return L("/api/article/channel_list?channel_id=657a5b3d79f6be03b8fd7fb1&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 58:
              for (ak = bW.sent, al = ak.data.article_list[0].column_news_list[0].url, am = al.split("?")[1], an = {}, ao = am.split("&"), ap = 0, aq = ao.length; ap < aq; ap++) {
                ar = ao[ap].split("=");
                an[ar[0]] = ar[1];
              }
              var bY = {};
              bY.debug = 0;
              bY.userId = "";
              as = an.id;
              console.log(as);
              console.log("获取key和token");
              bW.next = 69;
              return P("/api/member/login", bY);
            case 69:
              at = bW.sent;
              D = at.data.key;
              B = "Bearer " + at.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              bW.next = 77;
              return R("/api/study/detail?id=".concat(as), {
                id: as
              });
            case 77:
              au = bW.sent;
              av = au.data.lottery.lottery_id;
              console.log(av);
              console.log("开始阅读");
              bW.next = 83;
              return R("/api/study/task/captcha?activityId=".concat(as), {
                activityId: as
              });
            case 83:
              if (aw = bW.sent, 10000 != aw.code) {
                bW.next = 156;
                break;
              }
              console.log(aw.message);
              ax = 0;
            case 87:
              if (!(ax < 3)) {
                bW.next = 156;
                break;
              }
              var bZ = {};
              bZ.activity_id = 0;
              bZ.module = "study";
              bW.next = 90;
              return P("/api/captcha/get", bZ);
            case 90:
              if (aC = bW.sent, aD = void 0, aE = null == aC || null === (ay = aC.data) || void 0 === ay ? void 0 : ay.secretKey, aF = null == aC || null === (az = aC.data) || void 0 === az ? void 0 : az.token, console.log("秘钥：".concat(aE)), null == aC || null === (aA = aC.data) || void 0 === aA || !aA.originalImageBase64) {
                bW.next = 127;
                break;
              }
              aG = aC.data.wordList;
              aH = c(aG);
              try {
                for (aH.s(); !(aI = aH.n()).done;) {
                  aJ = aI.value;
                  console.log("需要识别的字：".concat(aJ));
                }
              } catch (ca) {
                aH.e(ca);
              } finally {
                aH.f();
              }
              var c0 = {};
              c0.image = aC.data.originalImageBase64;
              bW.next = 101;
              return T("".concat(o, "/select"), c0);
            case 101:
              if (aK = bW.sent, aK) {
                bW.next = 107;
                break;
              }
              console.log("ddddocr服务异常");
              bW.next = 106;
              return a4("ddddocr服务异常");
            case 106:
              return bW.abrupt("continue", 153);
            case 107:
              console.log(JSON.stringify(aK));
              aD = [];
              aL = c(aG);
              bW.prev = 110;
              aN = k().mark(function cf() {
                var ch, ci, cj;
                return k().wrap(function (ck) {
                  for (;;) {
                    switch (ck.prev = ck.next) {
                      case 0:
                        ch = aM.value;
                        ci = aK.find(function (co) {
                          return Object.keys(co)[0] === ch;
                        });
                        ci ? (cj = ci[ch], aD.push({
                          x: Math.floor((cj[0] + cj[2]) / 2),
                          y: Math.floor((cj[1] + cj[3]) / 2)
                        })) : console.log("未找到：".concat(ch));
                      case 3:
                      case "end":
                        return ck.stop();
                    }
                  }
                }, cf);
              });
              aL.s();
            case 113:
              if ((aM = aL.n()).done) {
                bW.next = 117;
                break;
              }
              return bW.delegateYield(aN(), "t0", 115);
            case 115:
              bW.next = 113;
              break;
            case 117:
              bW.next = 122;
              break;
            case 119:
              bW.prev = 119;
              bW.t1 = bW.catch(110);
              aL.e(bW.t1);
            case 122:
              bW.prev = 122;
              aL.f();
              return bW.finish(122);
            case 125:
              bW.next = 146;
              break;
            case 127:
              if (null == aC || null === (aB = aC.data) || void 0 === aB || !aB.jigsawImageUrl) {
                bW.next = 144;
                break;
              }
              aO = aC.data.jigsawImageUrl;
              aP = aC.data.originalImageUrl;
              console.log("滑块：".concat(aO));
              console.log("背景：".concat(aP));
              bW.next = 134;
              return T("".concat(o, "/capcode"), {
                slidingImage: aO,
                backImage: aP
              });
            case 134:
              if (aQ = bW.sent, aQ) {
                bW.next = 140;
                break;
              }
              console.log("ddddocr服务异常");
              bW.next = 139;
              return a4("ddddocr服务异常");
            case 139:
              return bW.abrupt("continue", 153);
            case 140:
              console.log(JSON.stringify(aQ));
              aD = {
                x: aQ.result,
                y: 5
              };
              bW.next = 146;
              break;
            case 144:
              console.log("不支持的图片验证类型");
              return bW.abrupt("break", 156);
            case 146:
              aR = V(JSON.stringify(aD), aE);
              bW.next = 149;
              return P("/api/captcha/check", {
                activity_id: 0,
                module: "study",
                cap_token: aF,
                point: aR
              });
            case 149:
              if (aS = bW.sent, console.log("验证滑块：" + aS.message), "操作成功" != aS.message) {
                bW.next = 153;
                break;
              }
              return bW.abrupt("break", 156);
            case 153:
              ax++;
              bW.next = 87;
              break;
            case 156:
              aT = c(au.data.levels);
              bW.prev = 157;
              aT.s();
            case 159:
              if ((aU = aT.n()).done) {
                bW.next = 206;
                break;
              }
              aV = aU.value;
              bW.next = 163;
              return R("/api/study/level?id=".concat(aV.id), {
                id: aV.id
              });
            case 163:
              if (aW = bW.sent, console.log(aW.data.level.name), aW.data.level.task_num != aW.data.completedTasks.length) {
                bW.next = 168;
                break;
              }
              console.log("已完成");
              return bW.abrupt("continue", 204);
            case 168:
              aX = c(aW.data.tasks);
              bW.prev = 169;
              aX.s();
            case 171:
              if ((aY = aX.n()).done) {
                bW.next = 196;
                break;
              }
              for (aZ = aY.value, b0 = aZ.link, b1 = b0.split("?")[1], b2 = {}, b3 = b1.split("&"), b4 = 0, b5 = b3.length; b4 < b5; b4++) {
                b6 = b3[b4].split("=");
                b2[b6[0]] = b6[1];
              }
              bW.next = 180;
              return L("/api/article/detail?id=".concat(b2.id));
            case 180:
              b7 = bW.sent;
              console.log("文章：".concat(b7.data.article.list_title));
              bW.next = 184;
              return N("/api/favorite/like", "action=true&id=".concat(b2.id));
            case 184:
              b8 = bW.sent;
              console.log("点赞：".concat(b8.message));
              bW.next = 188;
              return L("/api/article/read_time?channel_article_id=".concat(b2.id, "&read_time=5938"));
            case 188:
              var c1 = {};
              c1.id = aZ.id;
              b9 = bW.sent;
              console.log("阅读：".concat(b9.message));
              bW.next = 192;
              return P("/api/study/task/complete", c1);
            case 192:
              ba = bW.sent;
              console.log("完成任务：".concat(ba.message));
            case 194:
              bW.next = 171;
              break;
            case 196:
              bW.next = 201;
              break;
            case 198:
              bW.prev = 198;
              bW.t2 = bW.catch(169);
              aX.e(bW.t2);
            case 201:
              bW.prev = 201;
              aX.f();
              return bW.finish(201);
            case 204:
              bW.next = 159;
              break;
            case 206:
              bW.next = 211;
              break;
            case 208:
              bW.prev = 208;
              bW.t3 = bW.catch(157);
              aT.e(bW.t3);
            case 211:
              bW.prev = 211;
              aT.f();
              return bW.finish(211);
            case 214:
              bW.next = 216;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: av,
                module: "study"
              });
            case 216:
              bb = bW.sent;
              console.log("拥有".concat(bb.data.count, "次抽奖"));
              bc = 0;
            case 219:
              if (!(bc < bb.data.count)) {
                bW.next = 305;
                break;
              }
              bW.next = 222;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 222:
              if (bd = bW.sent, 10000 != bd.code) {
                bW.next = 301;
                break;
              }
              console.log(bd.message);
              bf = 0;
            case 226:
              if (!(bf < 3)) {
                bW.next = 299;
                break;
              }
              bW.next = 229;
              return P("/api/captcha/get", {
                activity_id: av,
                module: "bigWheel"
              });
            case 229:
              if (bk = bW.sent, bl = void 0, bm = null == bk || null === (bg = bk.data) || void 0 === bg ? void 0 : bg.secretKey, bn = null == bk || null === (bh = bk.data) || void 0 === bh ? void 0 : bh.token, console.log("秘钥：".concat(bm)), null == bk || null === (bi = bk.data) || void 0 === bi || !bi.originalImageBase64) {
                bW.next = 266;
                break;
              }
              bo = bk.data.wordList;
              bp = c(bo);
              try {
                for (bp.s(); !(bq = bp.n()).done;) {
                  br = bq.value;
                  console.log("需要识别的字：".concat(br));
                }
              } catch (cs) {
                bp.e(cs);
              } finally {
                bp.f();
              }
              var c2 = {};
              c2.image = bk.data.originalImageBase64;
              bW.next = 240;
              return T("".concat(o, "/select"), c2);
            case 240:
              if (bs = bW.sent, bs) {
                bW.next = 246;
                break;
              }
              console.log("ddddocr服务异常");
              bW.next = 245;
              return a4("ddddocr服务异常");
            case 245:
              return bW.abrupt("continue", 296);
            case 246:
              console.log(JSON.stringify(bs));
              bl = [];
              bt = c(bo);
              bW.prev = 249;
              bv = k().mark(function cw() {
                var cy, cz, cA;
                return k().wrap(function (cC) {
                  for (;;) {
                    switch (cC.prev = cC.next) {
                      case 0:
                        cy = bu.value;
                        cz = bs.find(function (cE) {
                          return Object.keys(cE)[0] === cy;
                        });
                        cz ? (cA = cz[cy], bl.push({
                          x: Math.floor((cA[0] + cA[2]) / 2),
                          y: Math.floor((cA[1] + cA[3]) / 2)
                        })) : console.log("未找到：".concat(cy));
                      case 3:
                      case "end":
                        return cC.stop();
                    }
                  }
                }, cw);
              });
              bt.s();
            case 252:
              if ((bu = bt.n()).done) {
                bW.next = 256;
                break;
              }
              return bW.delegateYield(bv(), "t4", 254);
            case 254:
              bW.next = 252;
              break;
            case 256:
              bW.next = 261;
              break;
            case 258:
              bW.prev = 258;
              bW.t5 = bW.catch(249);
              bt.e(bW.t5);
            case 261:
              bW.prev = 261;
              bt.f();
              return bW.finish(261);
            case 264:
              bW.next = 285;
              break;
            case 266:
              if (null == bk || null === (bj = bk.data) || void 0 === bj || !bj.jigsawImageUrl) {
                bW.next = 283;
                break;
              }
              bw = bk.data.jigsawImageUrl;
              bx = bk.data.originalImageUrl;
              console.log("滑块：".concat(bw));
              console.log("背景：".concat(bx));
              bW.next = 273;
              return T("".concat(o, "/capcode"), {
                slidingImage: bw,
                backImage: bx
              });
            case 273:
              if (by = bW.sent, by) {
                bW.next = 279;
                break;
              }
              console.log("ddddocr服务异常");
              bW.next = 278;
              return a4("ddddocr服务异常");
            case 278:
              return bW.abrupt("continue", 296);
            case 279:
              console.log(JSON.stringify(by));
              bl = {
                x: by.result,
                y: 5
              };
              bW.next = 285;
              break;
            case 283:
              console.log("不支持的图片验证类型");
              return bW.abrupt("break", 299);
            case 285:
              bz = V(JSON.stringify(bl), bm);
              bW.next = 288;
              return P("/api/captcha/check", {
                activity_id: av,
                module: "bigWheel",
                cap_token: bn,
                point: bz
              });
            case 288:
              if (bA = bW.sent, console.log("验证滑块：" + bA.message), "操作成功" != bA.message) {
                bW.next = 296;
                break;
              }
              bW.next = 293;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 293:
              bd = bW.sent;
              bd.data.code ? (console.log("抽奖获得：".concat(bd.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.title, "\n")) : (console.log("抽奖获得：".concat(bd.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.tip_title, "\n"));
              return bW.abrupt("break", 299);
            case 296:
              bf++;
              bW.next = 226;
              break;
            case 299:
              bW.next = 302;
              break;
            case 301:
              bd.data.code ? (console.log("抽奖获得：".concat(bd.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.title, "\n")) : (console.log("抽奖获得：".concat(bd.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.tip_title, "\n"));
            case 302:
              bc++;
              bW.next = 219;
              break;
            case 305:
              console.log("————————————");
              console.log("开始任务");
              bB = !0;
              bC = !0;
              bD = !0;
              bW.next = 312;
              return L("/api/user_center/task?type=1&current=1&size=20");
            case 312:
              bE = bW.sent;
              bF = c(bE.data.list);
              bW.prev = 314;
              bF.s();
            case 316:
              if ((bG = bF.n()).done) {
                bW.next = 338;
                break;
              }
              if (bH = bG.value, console.log("任务：".concat(bH.name)), 1 != bH.completed) {
                bW.next = 322;
                break;
              }
              console.log("任务已完成");
              return bW.abrupt("continue", 336);
            case 322:
              if (console.log("任务进度：".concat(bH.finish_times, "/").concat(bH.frequency)), "使用本地服务" != bH.name) {
                bW.next = 333;
                break;
              }
              bI = bH.finish_times;
            case 325:
              if (!(bI < bH.frequency)) {
                bW.next = 333;
                break;
              }
              bW.next = 328;
              return N("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 328:
              bJ = bW.sent;
              console.log("任务完成获得：".concat(bJ.data.score_notify.integral, "积分"));
            case 330:
              bI++;
              bW.next = 325;
              break;
            case 333:
              "新闻资讯阅读" == bH.name && (bB = !1);
              "新闻资讯点赞" == bH.name && (bC = !1);
              "分享资讯给好友" == bH.name && (bD = !1);
            case 336:
              bW.next = 316;
              break;
            case 338:
              bW.next = 343;
              break;
            case 340:
              bW.prev = 340;
              bW.t6 = bW.catch(314);
              bF.e(bW.t6);
            case 343:
              bW.prev = 343;
              bF.f();
              return bW.finish(343);
            case 346:
              if (bB && bC && bD) {
                bW.next = 381;
                break;
              }
              bW.next = 349;
              return L("/api/article/channel_list?channel_id=6423f0a579f6be58d033d816&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 349:
              bK = bW.sent;
              bL = c(bK.data.article_list);
              bW.prev = 351;
              bL.s();
            case 353:
              if ((bM = bL.n()).done) {
                bW.next = 373;
                break;
              }
              if (bN = bM.value, bO = bN.id, bB) {
                bW.next = 361;
                break;
              }
              bW.next = 359;
              return L("/api/article/read_time?channel_article_id=".concat(bO, "&is_end=true&read_time=3051"));
            case 359:
              bP = bW.sent;
              bP.data.score_notify ? console.log("阅读获得：".concat(null === (bQ = bP.data) || void 0 === bQ || null === (bQ = bQ.score_notify) || void 0 === bQ ? void 0 : bQ.integral, "积分")) : console.log("文章已经阅读过了");
            case 361:
              if (bC) {
                bW.next = 366;
                break;
              }
              bW.next = 364;
              return N("/api/favorite/like", "action=true&id=".concat(bO));
            case 364:
              bR = bW.sent;
              bR.data ? console.log("点赞获得：".concat(null === (bS = bR.data) || void 0 === bS || null === (bS = bS.score_notify) || void 0 === bS ? void 0 : bS.integral, "积分")) : console.log("文章已经点赞过了");
            case 366:
              if (bD) {
                bW.next = 371;
                break;
              }
              bW.next = 369;
              return N("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(bO));
            case 369:
              bT = bW.sent;
              bT.data.score_notify ? console.log("分享获得：".concat(null === (bU = bT.data) || void 0 === bU || null === (bU = bU.score_notify) || void 0 === bU ? void 0 : bU.integral, "积分")) : console.log("文章已经分享过了");
            case 371:
              bW.next = 353;
              break;
            case 373:
              bW.next = 378;
              break;
            case 375:
              bW.prev = 375;
              bW.t7 = bW.catch(351);
              bL.e(bW.t7);
            case 378:
              bW.prev = 378;
              bL.f();
              return bW.finish(378);
            case 381:
              console.log("————————————");
              console.log("查询积分");
              bW.next = 385;
              return L("/api/user_mumber/account_detail");
            case 385:
              bV = bW.sent;
              console.log("拥有积分：".concat(bV.data.rst.total_integral, "\n"));
            case 387:
              bW.next = 13;
              break;
            case 389:
              bW.next = 394;
              break;
            case 391:
              bW.prev = 391;
              bW.t8 = bW.catch(11);
              aa.e(bW.t8);
            case 394:
              bW.prev = 394;
              aa.f();
              return bW.finish(394);
            case 397:
              if (!r) {
                bW.next = 400;
                break;
              }
              bW.next = 400;
              return a4(r);
            case 400:
            case "end":
              return bW.stop();
          }
        }
      }, a7, null, [[11, 391, 394, 397], [110, 119, 122, 125], [157, 208, 211, 214], [169, 198, 201, 204], [249, 258, 261, 264], [314, 340, 343, 346], [351, 375, 378, 381]]);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function a7(a8) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ae, function () {
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(aj));
                            } catch (am) {
                              $.logErr(am, ai);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
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
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = m(k().mark(function a7(a8) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = W();
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a9.uuid,
                  "X-SIGNATURE": a9.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: ad,
                  body: a9.body
                };
                $.post(ae, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(al));
                            } catch (an) {
                              $.logErr(an, ak);
                            } finally {
                              ac();
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
              return aa.stop();
          }
        }
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
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
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
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
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var af = {
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
                $.post(af, function () {
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
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a7(a8, a9) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a9);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": aa.signature,
                    "access-nonce-str": aa.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": aa.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1",
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
                  body: JSON.stringify(a9)
                };
                $.post(af, function () {
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
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = X(a9);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1",
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
    return S.apply(this, arguments);
  }
  function T(a6, a7) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a7(a8, a9) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  "Content-Type": "application/json"
                };
                var ae = {
                  url: a8,
                  headers: ad,
                  body: JSON.stringify(a9)
                };
                $.post(ae, function (af, ag, ah) {
                  try {
                    af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ah));
                  } catch (ai) {
                    $.logErr(ai, ag);
                  } finally {
                    ac();
                  }
                });
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return U.apply(this, arguments);
  }
  function V(a6, a7) {
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.enc.Utf8.parse(a7),
      a9 = CryptoJS.enc.Utf8.parse(a6),
      aa = CryptoJS.AES.encrypt(a9, a8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return aa.toString();
  }
  function W() {
    var ae = new (p.loadJSEncrypt())();
    ae.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = ae.encrypt(x);
    var ab = Z(),
      ac = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ad = "post%%/web/oauth/credential_auth?".concat(ac, "%%").concat(ab, "%%");
    ac = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(ad, q),
      aa = CryptoJS.enc.Hex.stringify(a9);
    var a8 = {};
    a8.uuid = ab;
    a8.signature = aa;
    a8.body = ac;
    return a8;
  }
  function X(a6) {
    var a8 = Z(),
      a9 = Date.now(),
      aa = {
        app_id: C,
        device_id: A,
        nonce_str: a8,
        source_type: "app",
        timestamp: a9,
        auth_id: u,
        token: s
      };
    Object.entries(a6).forEach(function (af) {
      var ag = d(af, 2),
        ah = ag[0],
        ai = ag[1];
      aa[ah] = ai;
    });
    var ab = Object.keys(aa).sort(),
      ac = ab.map(function (af) {
        return "".concat(af, "=").concat(aa[af]);
      }).join("&&");
    ac = ac + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var ad = CryptoJS.SHA256(ac).toString(),
      ae = {
        uuid: a8,
        time: a9,
        signature: ad
      };
    return ae;
  }
  function Y(a6) {
    var a7 = Z(),
      a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(s, "&&").concat(a7, "&&").concat(a8, "&&").concat(E, "&&").concat(t)).toString(),
      aa = {
        uuid: a7,
        time: a8,
        signature: a9
      };
    return aa;
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a7) {
      var a8 = 16 * Math.random() | 0,
        a9 = "x" === a7 ? a8 : 3 & a8 | 8;
      return a9.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "3.1.0",
      a7 = Z(),
      a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a9 = "Xiaomi " + a8,
      aa = "Android",
      ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a6, ";1.0;null;").concat(a8),
      ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.6.1"),
      ad = {
        ua: ab,
        commonUa: ac,
        uuid: a7
      };
    return ad;
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = m(k().mark(function a7() {
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
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function a7(a8) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (!$.isNode()) {
                ab.next = 5;
                break;
              }
              ab.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              ab.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a5.apply(this, arguments);
  }
  m(k().mark(function a6() {
    return k().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return F();
          case 2:
          case "end":
            return a7.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();