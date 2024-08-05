//Mon Aug 05 2024 15:13:22 GMT+0000 (Coordinated Universal Time)
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
        var ai = a9.next();
        ad = ai.done;
        return ai;
      },
      e: function (ai) {
        ae = !0;
        ac = ai;
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
      } catch (aN) {
        var aK = {};
        aK.type = "throw";
        aK.arg = aN;
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
      ["next", "throw", "return"].forEach(function (aH) {
        ag(aG, aH, function (aJ) {
          return this._invoke(aH, aJ);
        });
      });
    }
    function aw(aG, aH) {
      function aL(aM, aN, aO, aP) {
        var aR = ai(aG[aM], aG, aN);
        if ("throw" !== aR.type) {
          var aS = aR.arg,
            aT = aS.value;
          return aT && "object" == b(aT) && aa.call(aT, "__await") ? aH.resolve(aT.__await).then(function (aU) {
            aL("next", aU, aO, aP);
          }, function (aU) {
            aL("throw", aU, aO, aP);
          }) : aH.resolve(aT).then(function (aU) {
            aS.value = aU;
            aO(aS);
          }, function (aU) {
            return aL("throw", aU, aO, aP);
          });
        }
        aP(aR.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aM, aN) {
          function aQ() {
            return new aH(function (aS, aT) {
              aL(aM, aN, aS, aT);
            });
          }
          return aJ = aJ ? aJ.then(aQ, aQ) : aQ();
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
      var aM = aH.method,
        aN = aG.iterator[aM];
      if (aN === a7) {
        aH.delegate = null;
        "throw" === aM && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aM && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aM + "' method"));
        return an;
      }
      var aK = ai(aN, aG.iterator, aH.arg);
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
      var aI = {
        tryLoc: aG[0]
      };
      var aJ = aI;
      1 in aG && (aJ.catchLoc = aG[1]);
      2 in aG && (aJ.finallyLoc = aG[2], aJ.afterLoc = aG[3]);
      this.tryEntries.push(aJ);
    }
    function aA(aG) {
      var aI = aG.completion || {};
      aI.type = "normal";
      delete aI.arg;
      aG.completion = aI;
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
      return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aO) {
        return aO.done ? aO.value : aM.next();
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
      var aJ = Object(aG),
        aK = [];
      for (var aL in aJ) aK.push(aL);
      aK.reverse();
      return function aM() {
        for (; aK.length;) {
          var aN = aK.pop();
          if (aN in aJ) {
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
      var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3;
      return k().wrap(function (b5) {
        for (;;) {
          switch (b5.prev = b5.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                b5.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b5.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return b5.abrupt("return");
            case 6:
              b5.next = 8;
              return a2();
            case 8:
              p = b5.sent;
              aa = n.split(" ");
              ab = c(aa);
              b5.prev = 11;
              ab.s();
            case 13:
              if ((ac = ab.n()).done) {
                b5.next = 208;
                break;
              }
              ae = ac.value;
              console.log("随机生成UA");
              af = a1();
              y = af.ua;
              z = af.commonUa;
              A = af.uuid;
              console.log(y);
              console.log(z);
              w = ae.split("&")[0];
              x = ae.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              b5.next = 28;
              return N("/api/account/init");
            case 28:
              ag = b5.sent;
              s = ag.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              b5.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ah = b5.sent;
              q = ah.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              b5.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ai = b5.sent, ai.data) {
                b5.next = 44;
                break;
              }
              console.log(ai.message);
              return b5.abrupt("continue", 206);
            case 44:
              aj = ai.data.authorization_code.code;
              console.log(aj);
              console.log("登录");
              b5.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
            case 49:
              ak = b5.sent;
              console.log("登录成功");
              u = ak.data.session.account_id;
              s = ak.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              b5.next = 58;
              return L("/api/bullet_frame/detail");
            case 58:
              for (al = b5.sent, am = al.data.detail.jump_url, an = am.split("?")[1], ao = {}, ap = an.split("&"), aq = 0, ar = ap.length; aq < ar; aq++) {
                as = ap[aq].split("=");
                ao[as[0]] = as[1];
              }
              var b7 = {};
              b7.debug = 0;
              b7.userId = "";
              at = ao.id;
              console.log(at);
              console.log("获取key和token");
              b5.next = 69;
              return P("/api/member/login", b7);
            case 69:
              au = b5.sent;
              D = au.data.key;
              B = "Bearer " + au.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              b5.next = 77;
              return R("/api/study/detail?id=".concat(at), {
                id: at
              });
            case 77:
              av = b5.sent;
              aw = av.data.lottery.lottery_id;
              console.log(aw);
              console.log("开始阅读");
              ax = c(av.data.levels);
              b5.prev = 82;
              ax.s();
            case 84:
              if ((ay = ax.n()).done) {
                b5.next = 127;
                break;
              }
              az = ay.value;
              b5.next = 88;
              return R("/api/study/level?id=".concat(az.id), {
                id: az.id
              });
            case 88:
              if (aA = b5.sent, console.log(aA.data.level.name), aA.data.level.task_num != aA.data.completedTasks.length) {
                b5.next = 93;
                break;
              }
              console.log("已完成");
              return b5.abrupt("continue", 125);
            case 93:
              aB = c(aA.data.tasks);
              b5.prev = 94;
              aB.s();
            case 96:
              if ((aC = aB.n()).done) {
                b5.next = 117;
                break;
              }
              for (aD = aC.value, aE = aD.link, aF = aE.split("?")[1], aG = {}, aH = aF.split("&"), aI = 0, aJ = aH.length; aI < aJ; aI++) {
                aK = aH[aI].split("=");
                aG[aK[0]] = aK[1];
              }
              b5.next = 105;
              return L("/api/article/detail?id=".concat(aG.id));
            case 105:
              aL = b5.sent;
              console.log("文章：".concat(aL.data.article.list_title));
              b5.next = 109;
              return L("/api/article/read_time?channel_article_id=".concat(aG.id, "&read_time=5938"));
            case 109:
              var b8 = {};
              b8.id = aD.id;
              aM = b5.sent;
              console.log("阅读：".concat(aM.message));
              b5.next = 113;
              return P("/api/study/task/complete", b8);
            case 113:
              aN = b5.sent;
              console.log("完成任务：".concat(aN.message));
            case 115:
              b5.next = 96;
              break;
            case 117:
              b5.next = 122;
              break;
            case 119:
              b5.prev = 119;
              b5.t0 = b5.catch(94);
              aB.e(b5.t0);
            case 122:
              b5.prev = 122;
              aB.f();
              return b5.finish(122);
            case 125:
              b5.next = 84;
              break;
            case 127:
              b5.next = 132;
              break;
            case 129:
              b5.prev = 129;
              b5.t1 = b5.catch(82);
              ax.e(b5.t1);
            case 132:
              b5.prev = 132;
              ax.f();
              return b5.finish(132);
            case 135:
              b5.next = 137;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: aw,
                module: "study"
              });
            case 137:
              aO = b5.sent;
              console.log("拥有".concat(aO.data.count, "次抽奖"));
              aP = 0;
            case 140:
              if (!(aP < aO.data.count)) {
                b5.next = 181;
                break;
              }
              b5.next = 143;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: aw,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 143:
              if (aQ = b5.sent, 10000 != aQ.code) {
                b5.next = 177;
                break;
              }
              console.log(aQ.message);
              b5.next = 148;
              return P("/api/captcha/get", {
                activity_id: aw,
                module: "bigWheel"
              });
            case 148:
              aR = b5.sent;
              aS = aR.data.jigsawImageUrl;
              aT = aR.data.originalImageUrl;
              console.log("滑块：".concat(aS));
              console.log("背景：".concat(aT));
              aU = aR.data.token;
              aV = aR.data.secretKey;
              console.log("秘钥：".concat(aV));
              b5.next = 158;
              return T({
                slidingImage: aS,
                backImage: aT
              });
            case 158:
              if (aW = b5.sent, aW) {
                b5.next = 164;
                break;
              }
              console.log("ddddocr服务异常");
              b5.next = 163;
              return a4("ddddocr服务异常");
            case 163:
              return b5.abrupt("continue", 178);
            case 164:
              console.log(aW);
              aX = V(JSON.stringify({
                x: aW.result,
                y: 5
              }), aV);
              b5.next = 168;
              return P("/api/captcha/check", {
                activity_id: aw,
                module: "bigWheel",
                cap_token: aU,
                point: aX
              });
            case 168:
              if (aY = b5.sent, console.log("验证滑块：" + aY.message), "操作成功" != aY.message) {
                b5.next = 175;
                break;
              }
              b5.next = 173;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: aw,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 173:
              aQ = b5.sent;
              aQ.data.code ? console.log("抽奖获得：".concat(aQ.data.title)) : console.log("抽奖获得：".concat(aQ.data.tip_title));
            case 175:
              b5.next = 178;
              break;
            case 177:
              aQ.data.code ? console.log("抽奖获得：".concat(aQ.data.title)) : console.log("抽奖获得：".concat(aQ.data.tip_title));
            case 178:
              aP++;
              b5.next = 140;
              break;
            case 181:
              b5.next = 183;
              return P("/api/lotterybigwheel/_ac_lottery_records", {
                id: aw,
                module: "study"
              });
            case 183:
              if (aZ = b5.sent, null === (ad = aZ.data) || void 0 === ad || !ad.list) {
                b5.next = 206;
                break;
              }
              b0 = c(aZ.data.list);
              b5.prev = 186;
              b0.s();
            case 188:
              if ((b1 = b0.n()).done) {
                b5.next = 198;
                break;
              }
              if (b2 = b1.value, 3 != b2.type || 5 != b2.state) {
                b5.next = 196;
                break;
              }
              console.log("奖品：".concat(b2.title));
              b5.next = 194;
              return P("/api/lotterybigwheel/_ac_url_scheme", {
                platform: "app",
                record_id: b2.id
              });
            case 194:
              b3 = b5.sent;
              b3.data.data ? (console.log("领取链接：".concat(b3.data.data)), r += "用户：".concat(w, " 奖品：").concat(b2.title, " 微信领取链接：").concat(b3.data.data, "\n")) : console.log(b3.data.msg);
            case 196:
              b5.next = 188;
              break;
            case 198:
              b5.next = 203;
              break;
            case 200:
              b5.prev = 200;
              b5.t2 = b5.catch(186);
              b0.e(b5.t2);
            case 203:
              b5.prev = 203;
              b0.f();
              return b5.finish(203);
            case 206:
              b5.next = 13;
              break;
            case 208:
              b5.next = 213;
              break;
            case 210:
              b5.prev = 210;
              b5.t3 = b5.catch(11);
              ab.e(b5.t3);
            case 213:
              b5.prev = 213;
              ab.f();
              return b5.finish(213);
            case 216:
              if (!r) {
                b5.next = 219;
                break;
              }
              b5.next = 219;
              return a4(r);
            case 219:
            case "end":
              return b5.stop();
          }
        }
      }, a8, null, [[11, 210, 213, 216], [82, 129, 132, 135], [94, 119, 122, 125], [186, 200, 203, 206]]);
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
              return aa.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(af, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(am));
                            } catch (at) {
                              $.logErr(at, al);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, aj);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
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
    M = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
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
      }, a6);
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
    return S.apply(this, arguments);
  }
  function T(a6) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a6(a7) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ac = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ac, function (ad, ae, af) {
                  try {
                    ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(af));
                  } catch (ag) {
                    $.logErr(ag, ae);
                  } finally {
                    ab();
                  }
                });
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
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
    var a8 = Z(),
      a9 = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(aa, q),
      ac = CryptoJS.enc.Hex.stringify(ab);
    var ae = {};
    ae.uuid = a8;
    ae.signature = ac;
    ae.body = a9;
    return ae;
  }
  function X(a6) {
    var aa = Z(),
      ab = Date.now(),
      ac = {
        app_id: C,
        device_id: A,
        nonce_str: aa,
        source_type: "app",
        timestamp: ab,
        auth_id: u,
        token: s
      };
    Object.entries(a6).forEach(function (ag) {
      var ah = d(ag, 2),
        ai = ah[0],
        aj = ah[1];
      ac[ai] = aj;
    });
    var ad = Object.keys(ac).sort(),
      ae = ad.map(function (ag) {
        return "".concat(ag, "=").concat(ac[ag]);
      }).join("&&");
    ae = ae + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256(ae).toString();
    var af = {};
    af.uuid = aa;
    af.time = ab;
    af.signature = a9;
    return af;
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
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function a6(a7) {
      return k().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a7);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a7);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return a5.apply(this, arguments);
  }
  m(k().mark(function a6() {
    return k().wrap(function (a9) {
      for (;;) {
        switch (a9.prev = a9.next) {
          case 0:
            a9.next = 2;
            return F();
          case 2:
          case "end":
            return a9.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();