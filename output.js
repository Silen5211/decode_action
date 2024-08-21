//Wed Aug 21 2024 01:33:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a8) {
      return typeof a8;
    } : function (a8) {
      return a8 && "function" == typeof Symbol && a8.constructor === Symbol && a8 !== Symbol.prototype ? "symbol" : typeof a8;
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
            var ag = {
              done: !0
            };
            return aa >= a6.length ? ag : {
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
      var a9 = {}.toString.call(a6).slice(8, -1);
      "Object" === a9 && a6.constructor && (a9 = a6.constructor.name);
      return "Map" === a9 || "Set" === a9 ? Array.from(a6) : "Arguments" === a9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a9) ? h(a6, a7) : void 0;
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
      } catch (al) {
        ag = !0;
        ab = al;
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
      ag = function (aF, aG, aH) {
        return aF[aG] = aH;
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
      } catch (aL) {
        var aJ = {
          type: "throw",
          arg: aL
        };
        return aJ;
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
      ["next", "throw", "return"].forEach(function (aI) {
        ag(aG, aI, function (aL) {
          return this._invoke(aI, aL);
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
      return function (aL, aM) {
        if (aK === al) {
          throw Error("Generator is already running");
        }
        if (aK === am) {
          if ("throw" === aL) {
            throw aM;
          }
          var aO = {
            value: a7,
            done: !0
          };
          return aO;
        }
        for (aI.method = aL, aI.arg = aM;;) {
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
      var aL = aH.method,
        aM = aG.iterator[aL];
      if (aM === a7) {
        aH.delegate = null;
        "throw" === aL && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aL && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aL + "' method"));
        return an;
      }
      var aN = ai(aM, aG.iterator, aH.arg);
      if ("throw" === aN.type) {
        aH.method = "throw";
        aH.arg = aN.arg;
        aH.delegate = null;
        return an;
      }
      var aO = aN.arg;
      return aO ? aO.done ? (aH[aG.resultName] = aO.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aO : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
    }
    function az(aG) {
      var aJ = {
        tryLoc: aG[0]
      };
      var aK = aJ;
      1 in aG && (aK.catchLoc = aG[1]);
      2 in aG && (aK.finallyLoc = aG[2], aK.afterLoc = aG[3]);
      this.tryEntries.push(aK);
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
      var aI = "function" == typeof aG && aG.constructor;
      return !!aI && (aI === ap || "GeneratorFunction" === (aI.displayName || aI.name));
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      var aJ = {
        __await: aG
      };
      return aJ;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aL = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aL : aL.next().then(function (aM) {
        return aM.done ? aM.value : aL.next();
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
          var aN = aJ.pop();
          if (aN in aI) {
            aL.value = aN;
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
          for (var aI in this) "t" === aI.charAt(0) && aa.call(this, aI) && !isNaN(+aI.slice(1)) && (this[aI] = a7);
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
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc <= this.prev && aa.call(aJ, "finallyLoc") && this.prev < aJ.finallyLoc) {
            var aK = aJ;
            break;
          }
        }
        aK && ("break" === aG || "continue" === aG) && aK.tryLoc <= aH && aH <= aK.finallyLoc && (aK = null);
        var aL = aK ? aK.completion : {};
        aL.type = aG;
        aL.arg = aH;
        return aK ? (this.method = "next", this.next = aK.finallyLoc, an) : this.complete(aL);
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
    } catch (ag) {
      return void a8(ag);
    }
    ad.done ? a7(ae) : Promise.resolve(ae).then(a9, aa);
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
      var a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx;
      return k().wrap(function (bz) {
        for (;;) {
          switch (bz.prev = bz.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bz.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bz.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return bz.abrupt("return");
            case 6:
              bz.next = 8;
              return a2();
            case 8:
              p = bz.sent;
              a9 = n.split(" ");
              aa = c(a9);
              bz.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                bz.next = 308;
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
              bz.next = 28;
              return N("/api/account/init");
            case 28:
              af = bz.sent;
              s = af.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bz.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ag = bz.sent;
              q = ag.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bz.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ah = bz.sent, ah.data) {
                bz.next = 44;
                break;
              }
              console.log(ah.message);
              return bz.abrupt("continue", 306);
            case 44:
              ai = ah.data.authorization_code.code;
              console.log(ai);
              console.log("登录");
              bz.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ai, "&token=&type=-1&union_id="));
            case 49:
              aj = bz.sent;
              console.log("登录成功");
              u = aj.data.session.account_id;
              s = aj.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              bz.next = 58;
              return L("/api/article/channel_list?channel_id=657a5b3d79f6be03b8fd7fb1&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 58:
              for (ak = bz.sent, al = ak.data.article_list[0].column_news_list[0].url, am = al.split("?")[1], an = {}, ao = am.split("&"), ap = 0, aq = ao.length; ap < aq; ap++) {
                ar = ao[ap].split("=");
                an[ar[0]] = ar[1];
              }
              var bB = {};
              bB.debug = 0;
              bB.userId = "";
              as = an.id;
              console.log(as);
              console.log("获取key和token");
              bz.next = 69;
              return P("/api/member/login", bB);
            case 69:
              at = bz.sent;
              D = at.data.key;
              B = "Bearer " + at.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              bz.next = 77;
              return R("/api/study/detail?id=".concat(as), {
                id: as
              });
            case 77:
              au = bz.sent;
              av = au.data.lottery.lottery_id;
              console.log(av);
              console.log("开始阅读");
              aw = c(au.data.levels);
              bz.prev = 82;
              aw.s();
            case 84:
              if ((ax = aw.n()).done) {
                bz.next = 131;
                break;
              }
              ay = ax.value;
              bz.next = 88;
              return R("/api/study/level?id=".concat(ay.id), {
                id: ay.id
              });
            case 88:
              if (az = bz.sent, console.log(az.data.level.name), az.data.level.task_num != az.data.completedTasks.length) {
                bz.next = 93;
                break;
              }
              console.log("已完成");
              return bz.abrupt("continue", 129);
            case 93:
              aA = c(az.data.tasks);
              bz.prev = 94;
              aA.s();
            case 96:
              if ((aB = aA.n()).done) {
                bz.next = 121;
                break;
              }
              for (aC = aB.value, aD = aC.link, aE = aD.split("?")[1], aF = {}, aG = aE.split("&"), aH = 0, aI = aG.length; aH < aI; aH++) {
                aJ = aG[aH].split("=");
                aF[aJ[0]] = aJ[1];
              }
              bz.next = 105;
              return L("/api/article/detail?id=".concat(aF.id));
            case 105:
              aK = bz.sent;
              console.log("文章：".concat(aK.data.article.list_title));
              bz.next = 109;
              return N("/api/favorite/like", "action=true&id=".concat(aF.id));
            case 109:
              aL = bz.sent;
              console.log("点赞：".concat(aL.message));
              bz.next = 113;
              return L("/api/article/read_time?channel_article_id=".concat(aF.id, "&read_time=5938"));
            case 113:
              var bC = {};
              bC.id = aC.id;
              aM = bz.sent;
              console.log("阅读：".concat(aM.message));
              bz.next = 117;
              return P("/api/study/task/complete", bC);
            case 117:
              aN = bz.sent;
              console.log("完成任务：".concat(aN.message));
            case 119:
              bz.next = 96;
              break;
            case 121:
              bz.next = 126;
              break;
            case 123:
              bz.prev = 123;
              bz.t0 = bz.catch(94);
              aA.e(bz.t0);
            case 126:
              bz.prev = 126;
              aA.f();
              return bz.finish(126);
            case 129:
              bz.next = 84;
              break;
            case 131:
              bz.next = 136;
              break;
            case 133:
              bz.prev = 133;
              bz.t1 = bz.catch(82);
              aw.e(bz.t1);
            case 136:
              bz.prev = 136;
              aw.f();
              return bz.finish(136);
            case 139:
              bz.next = 141;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: av,
                module: "study"
              });
            case 141:
              aO = bz.sent;
              console.log("拥有".concat(aO.data.count, "次抽奖"));
              aP = 0;
            case 144:
              if (!(aP < aO.data.count)) {
                bz.next = 224;
                break;
              }
              bz.next = 147;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 147:
              if (aQ = bz.sent, 10000 != aQ.code) {
                bz.next = 220;
                break;
              }
              var bD = {};
              bD.activity_id = av;
              bD.module = "bigWheel";
              console.log(aQ.message);
              bz.next = 152;
              return P("/api/captcha/get", bD);
            case 152:
              if (aV = bz.sent, aW = void 0, aX = null == aV || null === (aR = aV.data) || void 0 === aR ? void 0 : aR.secretKey, aY = null == aV || null === (aS = aV.data) || void 0 === aS ? void 0 : aS.token, console.log("秘钥：".concat(aX)), null == aV || null === (aT = aV.data) || void 0 === aT || !aT.originalImageBase64) {
                bz.next = 189;
                break;
              }
              aZ = aV.data.wordList;
              b0 = c(aZ);
              try {
                for (b0.s(); !(b1 = b0.n()).done;) {
                  b2 = b1.value;
                  console.log("需要识别的字：".concat(b2));
                }
              } catch (bQ) {
                b0.e(bQ);
              } finally {
                b0.f();
              }
              var bE = {};
              bE.image = aV.data.originalImageBase64;
              bz.next = 163;
              return T("".concat(o, "/select"), bE);
            case 163:
              if (b3 = bz.sent, b3) {
                bz.next = 169;
                break;
              }
              console.log("ddddocr服务异常");
              bz.next = 168;
              return a4("ddddocr服务异常");
            case 168:
              return bz.abrupt("continue", 221);
            case 169:
              console.log(JSON.stringify(b3));
              aW = [];
              b4 = c(aZ);
              bz.prev = 172;
              b6 = k().mark(function bU() {
                var bW, bX, bY;
                return k().wrap(function (bZ) {
                  for (;;) {
                    switch (bZ.prev = bZ.next) {
                      case 0:
                        bW = b5.value;
                        bX = b3.find(function (c0) {
                          return Object.keys(c0)[0] === bW;
                        });
                        bX ? (bY = bX[bW], aW.push({
                          x: Math.floor((bY[0] + bY[2]) / 2),
                          y: Math.floor((bY[1] + bY[3]) / 2)
                        })) : console.log("未找到：".concat(bW));
                      case 3:
                      case "end":
                        return bZ.stop();
                    }
                  }
                }, bU);
              });
              b4.s();
            case 175:
              if ((b5 = b4.n()).done) {
                bz.next = 179;
                break;
              }
              return bz.delegateYield(b6(), "t2", 177);
            case 177:
              bz.next = 175;
              break;
            case 179:
              bz.next = 184;
              break;
            case 181:
              bz.prev = 181;
              bz.t3 = bz.catch(172);
              b4.e(bz.t3);
            case 184:
              bz.prev = 184;
              b4.f();
              return bz.finish(184);
            case 187:
              bz.next = 208;
              break;
            case 189:
              if (null == aV || null === (aU = aV.data) || void 0 === aU || !aU.jigsawImageUrl) {
                bz.next = 206;
                break;
              }
              b7 = aV.data.jigsawImageUrl;
              b8 = aV.data.originalImageUrl;
              console.log("滑块：".concat(b7));
              console.log("背景：".concat(b8));
              bz.next = 196;
              return T("".concat(o, "/capcode"), {
                slidingImage: b7,
                backImage: b8
              });
            case 196:
              if (b9 = bz.sent, b9) {
                bz.next = 202;
                break;
              }
              console.log("ddddocr服务异常");
              bz.next = 201;
              return a4("ddddocr服务异常");
            case 201:
              return bz.abrupt("continue", 221);
            case 202:
              console.log(JSON.stringify(b9));
              aW = {
                x: b9.result,
                y: 5
              };
              bz.next = 208;
              break;
            case 206:
              console.log("不支持的图片验证类型");
              return bz.abrupt("break", 224);
            case 208:
              ba = V(JSON.stringify(aW), aX);
              bz.next = 211;
              return P("/api/captcha/check", {
                activity_id: av,
                module: "bigWheel",
                cap_token: aY,
                point: ba
              });
            case 211:
              if (bb = bz.sent, console.log("验证滑块：" + bb.message), "操作成功" != bb.message) {
                bz.next = 218;
                break;
              }
              bz.next = 216;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 216:
              aQ = bz.sent;
              aQ.data.code ? (console.log("抽奖获得：".concat(aQ.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.title, "\n")) : (console.log("抽奖获得：".concat(aQ.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.tip_title, "\n"));
            case 218:
              bz.next = 221;
              break;
            case 220:
              aQ.data.code ? (console.log("抽奖获得：".concat(aQ.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.title, "\n")) : (console.log("抽奖获得：".concat(aQ.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.tip_title, "\n"));
            case 221:
              aP++;
              bz.next = 144;
              break;
            case 224:
              console.log("————————————");
              console.log("开始任务");
              bc = !0;
              bd = !0;
              bf = !0;
              bz.next = 231;
              return L("/api/user_center/task?type=1&current=1&size=20");
            case 231:
              bg = bz.sent;
              bh = c(bg.data.list);
              bz.prev = 233;
              bh.s();
            case 235:
              if ((bi = bh.n()).done) {
                bz.next = 257;
                break;
              }
              if (bj = bi.value, console.log("任务：".concat(bj.name)), 1 != bj.completed) {
                bz.next = 241;
                break;
              }
              console.log("任务已完成");
              return bz.abrupt("continue", 255);
            case 241:
              if (console.log("任务进度：".concat(bj.finish_times, "/").concat(bj.frequency)), "使用本地服务" != bj.name) {
                bz.next = 252;
                break;
              }
              bk = bj.finish_times;
            case 244:
              if (!(bk < bj.frequency)) {
                bz.next = 252;
                break;
              }
              bz.next = 247;
              return N("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 247:
              bl = bz.sent;
              console.log("任务完成获得：".concat(bl.data.score_notify.integral, "积分"));
            case 249:
              bk++;
              bz.next = 244;
              break;
            case 252:
              "新闻资讯阅读" == bj.name && (bc = !1);
              "新闻资讯点赞" == bj.name && (bd = !1);
              "分享资讯给好友" == bj.name && (bf = !1);
            case 255:
              bz.next = 235;
              break;
            case 257:
              bz.next = 262;
              break;
            case 259:
              bz.prev = 259;
              bz.t4 = bz.catch(233);
              bh.e(bz.t4);
            case 262:
              bz.prev = 262;
              bh.f();
              return bz.finish(262);
            case 265:
              if (bc && bd && bf) {
                bz.next = 300;
                break;
              }
              bz.next = 268;
              return L("/api/article/channel_list?channel_id=6423f0a579f6be58d033d816&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 268:
              bm = bz.sent;
              bn = c(bm.data.article_list);
              bz.prev = 270;
              bn.s();
            case 272:
              if ((bo = bn.n()).done) {
                bz.next = 292;
                break;
              }
              if (bp = bo.value, bq = bp.id, bc) {
                bz.next = 280;
                break;
              }
              bz.next = 278;
              return L("/api/article/read_time?channel_article_id=".concat(bq, "&is_end=true&read_time=3051"));
            case 278:
              br = bz.sent;
              br.data.score_notify ? console.log("阅读获得：".concat(null === (bs = br.data) || void 0 === bs || null === (bs = bs.score_notify) || void 0 === bs ? void 0 : bs.integral, "积分")) : console.log("文章已经阅读过了");
            case 280:
              if (bd) {
                bz.next = 285;
                break;
              }
              bz.next = 283;
              return N("/api/favorite/like", "action=true&id=".concat(bq));
            case 283:
              bt = bz.sent;
              bt.data ? console.log("点赞获得：".concat(null === (bu = bt.data) || void 0 === bu || null === (bu = bu.score_notify) || void 0 === bu ? void 0 : bu.integral, "积分")) : console.log("文章已经点赞过了");
            case 285:
              if (bf) {
                bz.next = 290;
                break;
              }
              bz.next = 288;
              return N("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(bq));
            case 288:
              bv = bz.sent;
              bv.data.score_notify ? console.log("分享获得：".concat(null === (bw = bv.data) || void 0 === bw || null === (bw = bw.score_notify) || void 0 === bw ? void 0 : bw.integral, "积分")) : console.log("文章已经分享过了");
            case 290:
              bz.next = 272;
              break;
            case 292:
              bz.next = 297;
              break;
            case 294:
              bz.prev = 294;
              bz.t5 = bz.catch(270);
              bn.e(bz.t5);
            case 297:
              bz.prev = 297;
              bn.f();
              return bz.finish(297);
            case 300:
              console.log("————————————");
              console.log("查询积分");
              bz.next = 304;
              return L("/api/user_mumber/account_detail");
            case 304:
              bx = bz.sent;
              console.log("拥有积分：".concat(bx.data.rst.total_integral, "\n"));
            case 306:
              bz.next = 13;
              break;
            case 308:
              bz.next = 313;
              break;
            case 310:
              bz.prev = 310;
              bz.t6 = bz.catch(11);
              aa.e(bz.t6);
            case 313:
              bz.prev = 313;
              aa.f();
              return bz.finish(313);
            case 316:
              if (!r) {
                bz.next = 319;
                break;
              }
              bz.next = 319;
              return a4(r);
            case 319:
            case "end":
              return bz.stop();
          }
        }
      }, a7, null, [[11, 310, 313, 316], [82, 133, 136, 139], [94, 123, 126, 129], [172, 181, 184, 187], [233, 259, 262, 265], [270, 294, 297, 300]]);
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
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ab();
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
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
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
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a8);
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
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: af
                };
                $.get(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
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
            case 2:
            case "end":
              return ac.stop();
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
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
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
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: ae,
                  body: a9
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
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a7(a8, a9) {
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
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
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
            case 2:
            case "end":
              return ac.stop();
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
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a9);
              return ab.abrupt("return", new Promise(function (ae) {
                var ag = {
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
              return ab.stop();
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
    var aa = new (p.loadJSEncrypt())();
    aa.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = aa.encrypt(x);
    var ab = Z(),
      ac = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ad = "post%%/web/oauth/credential_auth?".concat(ac, "%%").concat(ab, "%%");
    ac = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.HmacSHA256(ad, q),
      a9 = CryptoJS.enc.Hex.stringify(a8);
    var ae = {};
    ae.uuid = ab;
    ae.signature = a9;
    ae.body = ac;
    return ae;
  }
  function X(a6) {
    var ad = Z(),
      ae = Date.now(),
      af = {
        app_id: C,
        device_id: A,
        nonce_str: ad,
        source_type: "app",
        timestamp: ae,
        auth_id: u,
        token: s
      };
    Object.entries(a6).forEach(function (ag) {
      var ah = d(ag, 2),
        ai = ah[0],
        aj = ah[1];
      af[ai] = aj;
    });
    var a9 = Object.keys(af).sort(),
      aa = a9.map(function (ag) {
        return "".concat(ag, "=").concat(af[ag]);
      }).join("&&");
    aa = aa + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var ab = CryptoJS.SHA256(aa).toString();
    var ac = {};
    ac.uuid = ad;
    ac.time = ae;
    ac.signature = ab;
    return ac;
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
    a3 = m(k().mark(function a6() {
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
      }, a6);
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