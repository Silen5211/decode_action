//Thu Aug 15 2024 13:22:16 GMT+0000 (Coordinated Universal Time)
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
            var ah = {
              done: !0
            };
            return aa >= a6.length ? ah : {
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
      var aH = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aH);
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
      } catch (aO) {
        var aL = {
          type: "throw",
          arg: aO
        };
        return aL;
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
      ["next", "throw", "return"].forEach(function (aH) {
        ag(aG, aH, function (aK) {
          return this._invoke(aH, aK);
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
            return new aH(function (aQ, aR) {
              aK(aL, aM, aQ, aR);
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
      var aN = aH.method,
        aO = aG.iterator[aN];
      if (aO === a7) {
        aH.delegate = null;
        "throw" === aN && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aN && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
        return an;
      }
      var aL = ai(aO, aG.iterator, aH.arg);
      if ("throw" === aL.type) {
        aH.method = "throw";
        aH.arg = aL.arg;
        aH.delegate = null;
        return an;
      }
      var aM = aL.arg;
      return aM ? aM.done ? (aH[aG.resultName] = aM.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aM : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
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
            aK = function aN() {
              for (; ++aJ < aG.length;) {
                if (aa.call(aG, aJ)) {
                  aN.value = aG[aJ];
                  aN.done = !1;
                  return aN;
                }
              }
              aN.value = a7;
              aN.done = !0;
              return aN;
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
          for (var aJ in this) "t" === aJ.charAt(0) && aa.call(this, aJ) && !isNaN(+aJ.slice(1)) && (this[aJ] = a7);
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
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.finallyLoc === aG) {
            this.complete(aI.completion, aI.afterLoc);
            aA(aI);
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
      var a9 = this,
        aa = arguments;
      return new Promise(function (ab, ac) {
        var af = a6.apply(a9, aa);
        function ag(ai) {
          l(af, ab, ac, ag, ah, "next", ai);
        }
        function ah(ai) {
          l(af, ab, ac, ag, ah, "throw", ai);
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
    G = m(k().mark(function a8() {
      var aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9;
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
              aa = n.split(" ");
              ab = c(aa);
              ba.prev = 11;
              ab.s();
            case 13:
              if ((ac = ab.n()).done) {
                ba.next = 222;
                break;
              }
              ad = ac.value;
              console.log("随机生成UA");
              af = a1();
              y = af.ua;
              z = af.commonUa;
              A = af.uuid;
              console.log(y);
              console.log(z);
              w = ad.split("&")[0];
              x = ad.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              ba.next = 28;
              return N("/api/account/init");
            case 28:
              ag = ba.sent;
              s = ag.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              ba.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ah = ba.sent;
              q = ah.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              ba.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ai = ba.sent, ai.data) {
                ba.next = 44;
                break;
              }
              console.log(ai.message);
              return ba.abrupt("continue", 220);
            case 44:
              aj = ai.data.authorization_code.code;
              console.log(aj);
              console.log("登录");
              ba.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
            case 49:
              ak = ba.sent;
              console.log("登录成功");
              u = ak.data.session.account_id;
              s = ak.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              ba.next = 58;
              return L("/api/bullet_frame/detail");
            case 58:
              for (al = ba.sent, am = al.data.detail.jump_url, an = am.split("?")[1], ao = {}, ap = an.split("&"), aq = 0, ar = ap.length; aq < ar; aq++) {
                as = ap[aq].split("=");
                ao[as[0]] = as[1];
              }
              var bc = {};
              bc.debug = 0;
              bc.userId = "";
              at = ao.id;
              console.log(at);
              console.log("获取key和token");
              ba.next = 69;
              return P("/api/member/login", bc);
            case 69:
              au = ba.sent;
              D = au.data.key;
              B = "Bearer " + au.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              ba.next = 77;
              return R("/api/study/detail?id=".concat(at), {
                id: at
              });
            case 77:
              av = ba.sent;
              aw = av.data.lottery.lottery_id;
              console.log(aw);
              console.log("开始阅读");
              ax = c(av.data.levels);
              ba.prev = 82;
              ax.s();
            case 84:
              if ((ay = ax.n()).done) {
                ba.next = 127;
                break;
              }
              az = ay.value;
              ba.next = 88;
              return R("/api/study/level?id=".concat(az.id), {
                id: az.id
              });
            case 88:
              if (aA = ba.sent, console.log(aA.data.level.name), aA.data.level.task_num != aA.data.completedTasks.length) {
                ba.next = 93;
                break;
              }
              console.log("已完成");
              return ba.abrupt("continue", 125);
            case 93:
              aB = c(aA.data.tasks);
              ba.prev = 94;
              aB.s();
            case 96:
              if ((aC = aB.n()).done) {
                ba.next = 117;
                break;
              }
              for (aD = aC.value, aE = aD.link, aF = aE.split("?")[1], aG = {}, aH = aF.split("&"), aI = 0, aJ = aH.length; aI < aJ; aI++) {
                aK = aH[aI].split("=");
                aG[aK[0]] = aK[1];
              }
              ba.next = 105;
              return L("/api/article/detail?id=".concat(aG.id));
            case 105:
              aL = ba.sent;
              console.log("文章：".concat(aL.data.article.list_title));
              ba.next = 109;
              return L("/api/article/read_time?channel_article_id=".concat(aG.id, "&read_time=5938"));
            case 109:
              var bd = {};
              bd.id = aD.id;
              aM = ba.sent;
              console.log("阅读：".concat(aM.message));
              ba.next = 113;
              return P("/api/study/task/complete", bd);
            case 113:
              aN = ba.sent;
              console.log("完成任务：".concat(aN.message));
            case 115:
              ba.next = 96;
              break;
            case 117:
              ba.next = 122;
              break;
            case 119:
              ba.prev = 119;
              ba.t0 = ba.catch(94);
              aB.e(ba.t0);
            case 122:
              ba.prev = 122;
              aB.f();
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
              ax.e(ba.t1);
            case 132:
              ba.prev = 132;
              ax.f();
              return ba.finish(132);
            case 135:
              var be = {};
              be.id = aw;
              be.module = "study";
              ba.next = 137;
              return P("/api/lotterybigwheel/_ac_lottery_count", be);
            case 137:
              aO = ba.sent;
              console.log("拥有".concat(aO.data.count, "次抽奖"));
              aP = 0;
            case 140:
              if (!(aP < aO.data.count)) {
                ba.next = 220;
                break;
              }
              ba.next = 143;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: aw,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 143:
              if (aQ = ba.sent, 10000 != aQ.code) {
                ba.next = 216;
                break;
              }
              console.log(aQ.message);
              ba.next = 148;
              return P("/api/captcha/get", {
                activity_id: aw,
                module: "bigWheel"
              });
            case 148:
              if (aV = ba.sent, aW = void 0, aX = null == aV || null === (aR = aV.data) || void 0 === aR ? void 0 : aR.secretKey, aY = null == aV || null === (aS = aV.data) || void 0 === aS ? void 0 : aS.token, console.log("秘钥：".concat(aX)), null == aV || null === (aT = aV.data) || void 0 === aT || !aT.originalImageBase64) {
                ba.next = 185;
                break;
              }
              aZ = aV.data.wordList;
              b0 = c(aZ);
              try {
                for (b0.s(); !(b1 = b0.n()).done;) {
                  b2 = b1.value;
                  console.log("需要识别的字：".concat(b2));
                }
              } catch (br) {
                b0.e(br);
              } finally {
                b0.f();
              }
              var bf = {};
              bf.image = aV.data.originalImageBase64;
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
              aW = [];
              b3 = c(aZ);
              ba.prev = 168;
              b5 = k().mark(function bv() {
                var bw, bx, by;
                return k().wrap(function (bz) {
                  for (;;) {
                    switch (bz.prev = bz.next) {
                      case 0:
                        bw = b4.value;
                        bx = getXpos.find(function (bC) {
                          return Object.keys(bC)[0] === bw;
                        });
                        bx ? (by = bx[bw], aW.push({
                          x: Math.floor((by[0] + by[2]) / 2),
                          y: Math.floor((by[1] + by[3]) / 2)
                        })) : console.log("未找到：".concat(bw));
                      case 3:
                      case "end":
                        return bz.stop();
                    }
                  }
                }, bv);
              });
              b3.s();
            case 171:
              if ((b4 = b3.n()).done) {
                ba.next = 175;
                break;
              }
              return ba.delegateYield(b5(), "t2", 173);
            case 173:
              ba.next = 171;
              break;
            case 175:
              ba.next = 180;
              break;
            case 177:
              ba.prev = 177;
              ba.t3 = ba.catch(168);
              b3.e(ba.t3);
            case 180:
              ba.prev = 180;
              b3.f();
              return ba.finish(180);
            case 183:
              ba.next = 204;
              break;
            case 185:
              if (null == aV || null === (aU = aV.data) || void 0 === aU || !aU.jigsawImageUrl) {
                ba.next = 202;
                break;
              }
              b6 = aV.data.jigsawImageUrl;
              b7 = aV.data.originalImageUrl;
              console.log("滑块：".concat(b6));
              console.log("背景：".concat(b7));
              ba.next = 192;
              return T("".concat(o, "/capcode"), {
                slidingImage: b6,
                backImage: b7
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
              aW = {
                x: getXpos.result,
                y: 5
              };
              ba.next = 204;
              break;
            case 202:
              console.log("不支持的图片验证类型");
              return ba.abrupt("break", 220);
            case 204:
              b8 = V(JSON.stringify(aW), aX);
              ba.next = 207;
              return P("/api/captcha/check", {
                activity_id: aw,
                module: "bigWheel",
                cap_token: aY,
                point: b8
              });
            case 207:
              if (b9 = ba.sent, console.log("验证滑块：" + b9.message), "操作成功" != b9.message) {
                ba.next = 214;
                break;
              }
              ba.next = 212;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: aw,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 212:
              aQ = ba.sent;
              aQ.data.code ? (console.log("抽奖获得：".concat(aQ.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.title, "\n")) : (console.log("抽奖获得：".concat(aQ.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.tip_title, "\n"));
            case 214:
              ba.next = 217;
              break;
            case 216:
              aQ.data.code ? (console.log("抽奖获得：".concat(aQ.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.title, "\n")) : (console.log("抽奖获得：".concat(aQ.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(aQ.data.tip_title, "\n"));
            case 217:
              aP++;
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
              ab.e(ba.t4);
            case 227:
              ba.prev = 227;
              ab.f();
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
      }, a8, null, [[11, 224, 227, 230], [82, 129, 132, 135], [94, 119, 122, 125], [168, 177, 180, 183]]);
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
                  var ah = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            try {
                              ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(am));
                            } catch (as) {
                              $.logErr(as, al);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj);
                  }));
                  return function (ak, al, am) {
                    return ah.apply(this, arguments);
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
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W();
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var af = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: ae,
                  body: aa.body
                };
                $.post(af, function () {
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
    M = m(k().mark(function a7(a8) {
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
                  headers: ae
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
      }, a7);
    }));
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a6(a7, a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a7);
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
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: af,
                  body: a8
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
      }, a6);
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
                var ae = {
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
                };
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: ae,
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
                $.get(af, function () {
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
    return S.apply(this, arguments);
  }
  function T(a6, a7) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a7(a8, a9) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  "Content-Type": "application/json"
                };
                var af = {
                  url: a8,
                  headers: ae,
                  body: JSON.stringify(a9)
                };
                $.post(af, function (ag, ah, ai) {
                  try {
                    ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ai));
                  } catch (aj) {
                    $.logErr(aj, ah);
                  } finally {
                    ac();
                  }
                });
              }));
            case 1:
            case "end":
              return ab.stop();
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
    var ad = new (p.loadJSEncrypt())();
    ad.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = ad.encrypt(x);
    var aa = Z(),
      ab = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ac = "post%%/web/oauth/credential_auth?".concat(ab, "%%").concat(aa, "%%");
    ab = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.HmacSHA256(ac, q),
      a9 = CryptoJS.enc.Hex.stringify(a8);
    var ae = {};
    ae.uuid = aa;
    ae.signature = a9;
    ae.body = ab;
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
    Object.entries(a6).forEach(function (ah) {
      var ai = d(ah, 2),
        aj = ai[0],
        ak = ai[1];
      af[aj] = ak;
    });
    var aa = Object.keys(af).sort(),
      ab = aa.map(function (ah) {
        return "".concat(ah, "=").concat(af[ah]);
      }).join("&&");
    ab = ab + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256(ab).toString();
    var ag = {};
    ag.uuid = ad;
    ag.time = ae;
    ag.signature = a9;
    return ag;
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
                var af = m(k().mark(function ag(ah) {
                  return k().wrap(function ai(aj) {
                    for (;;) {
                      switch (aj.prev = aj.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (al) {
                            $.setdata(al, "Utils_Code");
                            eval(al);
                            console.log("✅ Utils加载成功, 请继续");
                            ah(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aj.stop();
                      }
                    }
                  }, ag);
                }));
                return function (ah) {
                  return af.apply(this, arguments);
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