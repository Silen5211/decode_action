//Tue Aug 13 2024 07:58:33 GMT+0000 (Coordinated Universal Time)
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
            var ai = {
              done: !0
            };
            return aa >= a6.length ? ai : {
              done: !1,
              value: a6[aa++]
            };
          },
          e: function (ah) {
            throw ah;
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
      var a8 = {}.toString.call(a6).slice(8, -1);
      "Object" === a8 && a6.constructor && (a8 = a6.constructor.name);
      return "Map" === a8 || "Set" === a8 ? Array.from(a6) : "Arguments" === a8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a8) ? h(a6, a7) : void 0;
    }
  }
  function h(a6, a7) {
    (null == a7 || a7 > a6.length) && (a7 = a6.length);
    for (var a8 = 0, a9 = Array(a7); a8 < a7; a8++) {
      a9[a8] = a6[a8];
    }
    return a9;
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
      var aI = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aI);
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
      var aK = aH && aH.prototype instanceof ao ? aH : ao,
        aL = Object.create(aK.prototype),
        aM = new aB(aJ || []);
      ab(aL, "_invoke", {
        value: ax(aG, aI, aM)
      });
      return aL;
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
        ag(aG, aJ, function (aL) {
          return this._invoke(aJ, aL);
        });
      });
    }
    function aw(aG, aH) {
      function aK(aL, aM, aN, aO) {
        var aQ = ai(aG[aL], aG, aM);
        if ("throw" !== aQ.type) {
          var aR = aQ.arg,
            aS = aR.value;
          return aS && "object" == b(aS) && aa.call(aS, "__await") ? aH.resolve(aS.__await).then(function (aU) {
            aK("next", aU, aN, aO);
          }, function (aU) {
            aK("throw", aU, aN, aO);
          }) : aH.resolve(aS).then(function (aU) {
            aR.value = aU;
            aN(aR);
          }, function (aU) {
            return aK("throw", aU, aN, aO);
          });
        }
        aO(aQ.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aL, aM) {
          function aO() {
            return new aH(function (aR, aS) {
              aK(aL, aM, aR, aS);
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
          var aO = {
            value: a7,
            done: !0
          };
          return aO;
        }
        for (aI.method = aM, aI.arg = aN;;) {
          var aP = aI.delegate;
          if (aP) {
            var aQ = ay(aP, aI);
            if (aQ) {
              if (aQ === an) {
                continue;
              }
              return aQ;
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
          var aR = ai(aG, aH, aI);
          if ("normal" === aR.type) {
            if (aK = aI.done ? am : ak, aR.arg === an) {
              continue;
            }
            var aS = {};
            aS.value = aR.arg;
            aS.done = aI.done;
            return aS;
          }
          "throw" === aR.type && (aK = am, aI.method = "throw", aI.arg = aR.arg);
        }
      };
    }
    function ay(aG, aH) {
      var aI = aH.method,
        aJ = aG.iterator[aI];
      if (aJ === a7) {
        aH.delegate = null;
        "throw" === aI && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aI && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aI + "' method"));
        return an;
      }
      var aK = ai(aJ, aG.iterator, aH.arg);
      if ("throw" === aK.type) {
        aH.method = "throw";
        aH.arg = aK.arg;
        aH.delegate = null;
        return an;
      }
      var aL = aK.arg;
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
        var aI = aG[ad];
        if (aI) {
          return aI.call(aG);
        }
        if ("function" == typeof aG.next) {
          return aG;
        }
        if (!isNaN(aG.length)) {
          var aJ = -1,
            aK = function aM() {
              for (; ++aJ < aG.length;) {
                if (aa.call(aG, aJ)) {
                  aM.value = aG[aJ];
                  aM.done = !1;
                  return aM;
                }
              }
              aM.value = a7;
              aM.done = !0;
              return aM;
            };
          return aK.next = aK;
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
      var aH = {
        __await: aG
      };
      return aH;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aM = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aN) {
        return aN.done ? aN.value : aM.next();
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
      return function aM() {
        for (; aJ.length;) {
          var aN = aJ.pop();
          if (aN in aI) {
            aM.value = aN;
            aM.done = !1;
            return aM;
          }
        }
        aM.done = !0;
        return aM;
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
        function aO(aP, aQ) {
          aL.type = "throw";
          aL.arg = aG;
          aI.next = aP;
          aQ && (aI.method = "next", aI.arg = a7);
          return !!aQ;
        }
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ],
            aL = aK.completion;
          if ("root" === aK.tryLoc) {
            return aO("end");
          }
          if (aK.tryLoc <= this.prev) {
            var aM = aa.call(aK, "catchLoc"),
              aN = aa.call(aK, "finallyLoc");
            if (aM && aN) {
              if (this.prev < aK.catchLoc) {
                return aO(aK.catchLoc, !0);
              }
              if (this.prev < aK.finallyLoc) {
                return aO(aK.finallyLoc);
              }
            } else {
              if (aM) {
                if (this.prev < aK.catchLoc) {
                  return aO(aK.catchLoc, !0);
                }
              } else {
                if (!aN) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aK.finallyLoc) {
                  return aO(aK.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.tryLoc <= this.prev && aa.call(aK, "finallyLoc") && this.prev < aK.finallyLoc) {
            var aL = aK;
            break;
          }
        }
        aL && ("break" === aG || "continue" === aG) && aL.tryLoc <= aH && aH <= aL.finallyLoc && (aL = null);
        var aM = aL ? aL.completion : {};
        aM.type = aG;
        aM.arg = aH;
        return aL ? (this.method = "next", this.next = aL.finallyLoc, an) : this.complete(aM);
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
      var ad = a6[ab](ac),
        ae = ad.value;
    } catch (ah) {
      return void a8(ah);
    }
    ad.done ? a7(ae) : Promise.resolve(ae).then(a9, aa);
  }
  function m(a6) {
    return function () {
      var aa = this,
        ab = arguments;
      return new Promise(function (ac, ad) {
        var af = a6.apply(aa, ab);
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
    C = "8gW3lUcknhBvjpENMTZJ",
    D = "35c782a2",
    E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = m(k().mark(function a7() {
      var a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8;
      return k().wrap(function (ba) {
        for (;;) {
          switch (ba.prev = ba.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                ba.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              ba.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return ba.abrupt("return");
            case 6:
              ba.next = 8;
              return a2();
            case 8:
              p = ba.sent;
              a9 = n.split(" ");
              aa = c(a9);
              ba.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                ba.next = 222;
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
              ba.next = 28;
              return N("/api/account/init");
            case 28:
              af = ba.sent;
              s = af.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              ba.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ag = ba.sent;
              q = ag.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              ba.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ah = ba.sent, ah.data) {
                ba.next = 44;
                break;
              }
              console.log(ah.message);
              return ba.abrupt("continue", 220);
            case 44:
              ai = ah.data.authorization_code.code;
              console.log(ai);
              console.log("登录");
              ba.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ai, "&token=&type=-1&union_id="));
            case 49:
              aj = ba.sent;
              console.log("登录成功");
              u = aj.data.session.account_id;
              s = aj.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              ba.next = 58;
              return L("/api/bullet_frame/detail");
            case 58:
              for (ak = ba.sent, al = ak.data.detail.jump_url, am = al.split("?")[1], an = {}, ao = am.split("&"), ap = 0, aq = ao.length; ap < aq; ap++) {
                ar = ao[ap].split("=");
                an[ar[0]] = ar[1];
              }
              var bc = {};
              bc.debug = 0;
              bc.userId = "";
              as = an.id;
              console.log(as);
              console.log("获取key和token");
              ba.next = 69;
              return P("/api/member/login", bc);
            case 69:
              at = ba.sent;
              D = at.data.key;
              B = "Bearer " + at.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              ba.next = 77;
              return R("/api/study/detail?id=".concat(as), {
                id: as
              });
            case 77:
              au = ba.sent;
              av = au.data.lottery.lottery_id;
              console.log(av);
              console.log("开始阅读");
              aw = c(au.data.levels);
              ba.prev = 82;
              aw.s();
            case 84:
              if ((ax = aw.n()).done) {
                ba.next = 127;
                break;
              }
              ay = ax.value;
              ba.next = 88;
              return R("/api/study/level?id=".concat(ay.id), {
                id: ay.id
              });
            case 88:
              if (az = ba.sent, console.log(az.data.level.name), az.data.level.task_num != az.data.completedTasks.length) {
                ba.next = 93;
                break;
              }
              console.log("已完成");
              return ba.abrupt("continue", 125);
            case 93:
              aA = c(az.data.tasks);
              ba.prev = 94;
              aA.s();
            case 96:
              if ((aB = aA.n()).done) {
                ba.next = 117;
                break;
              }
              for (aC = aB.value, aD = aC.link, aE = aD.split("?")[1], aF = {}, aG = aE.split("&"), aH = 0, aI = aG.length; aH < aI; aH++) {
                aJ = aG[aH].split("=");
                aF[aJ[0]] = aJ[1];
              }
              ba.next = 105;
              return L("/api/article/detail?id=".concat(aF.id));
            case 105:
              aK = ba.sent;
              console.log("文章：".concat(aK.data.article.list_title));
              ba.next = 109;
              return L("/api/article/read_time?channel_article_id=".concat(aF.id, "&read_time=5938"));
            case 109:
              var bd = {};
              bd.id = aC.id;
              aL = ba.sent;
              console.log("阅读：".concat(aL.message));
              ba.next = 113;
              return P("/api/study/task/complete", bd);
            case 113:
              aM = ba.sent;
              console.log("完成任务：".concat(aM.message));
            case 115:
              ba.next = 96;
              break;
            case 117:
              ba.next = 122;
              break;
            case 119:
              ba.prev = 119;
              ba.t0 = ba.catch(94);
              aA.e(ba.t0);
            case 122:
              ba.prev = 122;
              aA.f();
              return ba.finish(122);
            case 125:
              ba.next = 84;
              break;
            case 127:
              ba.next = 132;
              break;
            case 129:
              ba.prev = 129;
              ba.t1 = ba.catch(82);
              aw.e(ba.t1);
            case 132:
              ba.prev = 132;
              aw.f();
              return ba.finish(132);
            case 135:
              ba.next = 137;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: av,
                module: "study"
              });
            case 137:
              aN = ba.sent;
              console.log("拥有".concat(aN.data.count, "次抽奖"));
              aO = 0;
            case 140:
              if (!(aO < aN.data.count)) {
                ba.next = 220;
                break;
              }
              ba.next = 143;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 143:
              if (aP = ba.sent, 10000 != aP.code) {
                ba.next = 216;
                break;
              }
              var be = {};
              be.activity_id = av;
              be.module = "bigWheel";
              console.log(aP.message);
              ba.next = 148;
              return P("/api/captcha/get", be);
            case 148:
              if (aU = ba.sent, aV = void 0, aW = null == aU || null === (aQ = aU.data) || void 0 === aQ ? void 0 : aQ.secretKey, aX = null == aU || null === (aR = aU.data) || void 0 === aR ? void 0 : aR.token, console.log("秘钥：".concat(aW)), null == aU || null === (aS = aU.data) || void 0 === aS || !aS.originalImageBase64) {
                ba.next = 185;
                break;
              }
              aY = aU.data.wordList;
              aZ = c(aY);
              try {
                for (aZ.s(); !(b0 = aZ.n()).done;) {
                  b1 = b0.value;
                  console.log("需要识别的字：".concat(b1));
                }
              } catch (br) {
                aZ.e(br);
              } finally {
                aZ.f();
              }
              var bf = {};
              bf.image = aU.data.originalImageBase64;
              ba.next = 159;
              return T("".concat(o, "/select"), bf);
            case 159:
              if (getXpos = ba.sent, getXpos) {
                ba.next = 165;
                break;
              }
              console.log("ddddocr服务异常");
              ba.next = 164;
              return a4("ddddocr服务异常");
            case 164:
              return ba.abrupt("continue", 217);
            case 165:
              console.log(JSON.stringify(getXpos));
              aV = [];
              b2 = c(aY);
              ba.prev = 168;
              b4 = k().mark(function bv() {
                var bx, by, bz;
                return k().wrap(function (bB) {
                  for (;;) {
                    switch (bB.prev = bB.next) {
                      case 0:
                        bx = b3.value;
                        by = getXpos.find(function (bE) {
                          return Object.keys(bE)[0] === bx;
                        });
                        by ? (bz = by[bx], aV.push({
                          x: Math.floor((bz[0] + bz[2]) / 2),
                          y: Math.floor((bz[1] + bz[3]) / 2)
                        })) : console.log("未找到：".concat(bx));
                      case 3:
                      case "end":
                        return bB.stop();
                    }
                  }
                }, bv);
              });
              b2.s();
            case 171:
              if ((b3 = b2.n()).done) {
                ba.next = 175;
                break;
              }
              return ba.delegateYield(b4(), "t2", 173);
            case 173:
              ba.next = 171;
              break;
            case 175:
              ba.next = 180;
              break;
            case 177:
              ba.prev = 177;
              ba.t3 = ba.catch(168);
              b2.e(ba.t3);
            case 180:
              ba.prev = 180;
              b2.f();
              return ba.finish(180);
            case 183:
              ba.next = 204;
              break;
            case 185:
              if (null == aU || null === (aT = aU.data) || void 0 === aT || !aT.jigsawImageUrl) {
                ba.next = 202;
                break;
              }
              b5 = aU.data.jigsawImageUrl;
              b6 = aU.data.originalImageUrl;
              console.log("滑块：".concat(b5));
              console.log("背景：".concat(b6));
              ba.next = 192;
              return T("".concat(o, "/capcode"), {
                slidingImage: b5,
                backImage: b6
              });
            case 192:
              if (getXpos = ba.sent, getXpos) {
                ba.next = 198;
                break;
              }
              console.log("ddddocr服务异常");
              ba.next = 197;
              return a4("ddddocr服务异常");
            case 197:
              return ba.abrupt("continue", 217);
            case 198:
              console.log(JSON.stringify(getXpos));
              aV = {
                x: getXpos.result,
                y: 5
              };
              ba.next = 204;
              break;
            case 202:
              console.log("不支持的图片验证类型");
              return ba.abrupt("break", 220);
            case 204:
              b7 = V(JSON.stringify(aV), aW);
              ba.next = 207;
              return P("/api/captcha/check", {
                activity_id: av,
                module: "bigWheel",
                cap_token: aX,
                point: b7
              });
            case 207:
              if (b8 = ba.sent, console.log("验证滑块：" + b8.message), "操作成功" != b8.message) {
                ba.next = 214;
                break;
              }
              ba.next = 212;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 212:
              aP = ba.sent;
              aP.data.code ? (console.log("抽奖获得：".concat(aP.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aP.data.title, "\n")) : console.log("抽奖获得：".concat(aP.data.tip_title));
            case 214:
              ba.next = 217;
              break;
            case 216:
              aP.data.code ? (console.log("抽奖获得：".concat(aP.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aP.data.title, "\n")) : console.log("抽奖获得：".concat(aP.data.tip_title));
            case 217:
              aO++;
              ba.next = 140;
              break;
            case 220:
              ba.next = 13;
              break;
            case 222:
              ba.next = 227;
              break;
            case 224:
              ba.prev = 224;
              ba.t4 = ba.catch(11);
              aa.e(ba.t4);
            case 227:
              ba.prev = 227;
              aa.f();
              return ba.finish(227);
            case 230:
              if (!r) {
                ba.next = 233;
                break;
              }
              ba.next = 233;
              return a4(r);
            case 233:
            case "end":
              return ba.stop();
          }
        }
      }, a7, null, [[11, 224, 227, 230], [82, 129, 132, 135], [94, 119, 122, 125], [168, 177, 180, 183]]);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function a6(a7) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://passport.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ad, function () {
                  var af = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(ak));
                            } catch (ar) {
                              $.logErr(ar, aj);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W();
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://passport.tmuyun.com".concat(a8),
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
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = m(k().mark(function a6(a7) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = Y(a7);
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a9.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SIGNATURE": a9.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(ad, function () {
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a7(a8, a9) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = Y(a8);
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
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
                };
                var ah = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: ag,
                  body: a9
                };
                $.post(ah, function () {
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
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a6(a7, a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a7),
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
                  body: JSON.stringify(a8)
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
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
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
              return ab.stop();
          }
        }
      }, a6);
    }));
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function a7(a8, a9) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = X(a9);
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ac.signature,
                    "access-nonce-str": ac.uuid,
                    authorization: B,
                    "access-app-id": C,
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
                $.get(ag, function () {
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
      }, a7);
    }));
    return S.apply(this, arguments);
  }
  function T(a6, a7) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a8(a9, aa) {
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (ad) {
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
                    ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(aj));
                  } catch (ak) {
                    $.logErr(ak, ai);
                  } finally {
                    ad();
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
    var a8 = new (p.loadJSEncrypt())();
    a8.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = a8.encrypt(x);
    var a9 = Z(),
      aa = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ab = "post%%/web/oauth/credential_auth?".concat(aa, "%%").concat(a9, "%%");
    aa = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ad = CryptoJS.HmacSHA256(ab, q),
      ae = CryptoJS.enc.Hex.stringify(ad);
    var ac = {};
    ac.uuid = a9;
    ac.signature = ae;
    ac.body = aa;
    return ac;
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
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0,
        a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "1.1.9",
      a7 = Z(),
      a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a9 = "Xiaomi " + a8,
      aa = "Android",
      ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a6, ";1.0;null;").concat(a8),
      ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.11.0"),
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
      var a8;
      return k().wrap(function a9(aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (a8 = $.getdata("Utils_Code") || "", !a8 || !Object.keys(a8).length) {
                aa.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a8);
              return aa.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aa.abrupt("return", new Promise(function () {
                var ac = m(k().mark(function ad(ae) {
                  return k().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            ae(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ad);
                }));
                return function (ae) {
                  return ac.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aa.stop();
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
    a5 = m(k().mark(function a8(a9) {
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