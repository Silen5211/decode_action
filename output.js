//Wed Aug 07 2024 07:03:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a3) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a5) {
      return typeof a5;
    } : function (a5) {
      return a5 && "function" == typeof Symbol && a5.constructor === Symbol && a5 !== Symbol.prototype ? "symbol" : typeof a5;
    };
    return b(a3);
  }
  function c(a3, a4) {
    var a6 = "undefined" != typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
    if (!a6) {
      if (Array.isArray(a3) || (a6 = d(a3)) || a4 && a3 && "number" == typeof a3.length) {
        a6 && (a3 = a6);
        var a7 = 0,
          a8 = function () {};
        return {
          s: a8,
          n: function () {
            var af = {
              done: !0
            };
            return a7 >= a3.length ? af : {
              done: !1,
              value: a3[a7++]
            };
          },
          e: function (ae) {
            throw ae;
          },
          f: a8
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a9,
      aa = !0,
      ab = !1;
    return {
      s: function () {
        a6 = a6.call(a3);
      },
      n: function () {
        var af = a6.next();
        aa = af.done;
        return af;
      },
      e: function (af) {
        ab = !0;
        a9 = af;
      },
      f: function () {
        try {
          aa || null == a6.return || a6.return();
        } finally {
          if (ab) {
            throw a9;
          }
        }
      }
    };
  }
  function d(a3, a4) {
    if (a3) {
      if ("string" == typeof a3) {
        return f(a3, a4);
      }
      var a6 = {}.toString.call(a3).slice(8, -1);
      "Object" === a6 && a3.constructor && (a6 = a3.constructor.name);
      return "Map" === a6 || "Set" === a6 ? Array.from(a3) : "Arguments" === a6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a6) ? f(a3, a4) : void 0;
    }
  }
  function f(a3, a4) {
    (null == a4 || a4 > a3.length) && (a4 = a3.length);
    for (var a5 = 0, a6 = Array(a4); a5 < a4; a5++) {
      a6[a5] = a3[a5];
    }
    return a6;
  }
  function g() {
    'use strict';

    g = function () {
      return a5;
    };
    var a4,
      a5 = {},
      a6 = Object.prototype,
      a7 = a6.hasOwnProperty,
      a8 = Object.defineProperty || function (aA, aB, aC) {
        aA[aB] = aC.value;
      },
      a9 = "function" == typeof Symbol ? Symbol : {},
      aa = a9.iterator || "@@iterator",
      ab = a9.asyncIterator || "@@asyncIterator",
      ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      var aD = {
        value: aC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aA, aB, aD);
      return aA[aB];
    }
    try {
      ad({}, "");
    } catch (aB) {
      ad = function (aC, aD, aE) {
        return aC[aD] = aE;
      };
    }
    function ae(aD, aE, aF, aG) {
      var aH = aE && aE.prototype instanceof al ? aE : al,
        aI = Object.create(aH.prototype),
        aJ = new ay(aG || []);
      a8(aI, "_invoke", {
        value: au(aD, aF, aJ)
      });
      return aI;
    }
    function af(aD, aE, aF) {
      try {
        return {
          type: "normal",
          arg: aD.call(aE, aF)
        };
      } catch (aJ) {
        var aH = {
          type: "throw",
          arg: aJ
        };
        return aH;
      }
    }
    a5.wrap = ae;
    var ag = "suspendedStart",
      ah = "suspendedYield",
      ai = "executing",
      aj = "completed",
      ak = {};
    function al() {}
    function am() {}
    function an() {}
    var ao = {};
    ad(ao, aa, function () {
      return this;
    });
    var ap = Object.getPrototypeOf,
      aq = ap && ap(ap(az([])));
    aq && aq !== a6 && a7.call(aq, aa) && (ao = aq);
    an.prototype = al.prototype = Object.create(ao);
    var ar = an.prototype;
    function as(aD) {
      ["next", "throw", "return"].forEach(function (aE) {
        ad(aD, aE, function (aG) {
          return this._invoke(aE, aG);
        });
      });
    }
    function at(aD, aE) {
      function aI(aJ, aK, aL, aM) {
        var aO = af(aD[aJ], aD, aK);
        if ("throw" !== aO.type) {
          var aP = aO.arg,
            aQ = aP.value;
          return aQ && "object" == b(aQ) && a7.call(aQ, "__await") ? aE.resolve(aQ.__await).then(function (aT) {
            aI("next", aT, aL, aM);
          }, function (aT) {
            aI("throw", aT, aL, aM);
          }) : aE.resolve(aQ).then(function (aT) {
            aP.value = aT;
            aL(aP);
          }, function (aT) {
            return aI("throw", aT, aL, aM);
          });
        }
        aM(aO.arg);
      }
      var aG;
      a8(this, "_invoke", {
        value: function (aJ, aK) {
          function aM() {
            return new aE(function (aN, aO) {
              aI(aJ, aK, aN, aO);
            });
          }
          return aG = aG ? aG.then(aM, aM) : aM();
        }
      });
    }
    function au(aD, aE, aF) {
      var aH = ag;
      return function (aI, aJ) {
        if (aH === ai) {
          throw Error("Generator is already running");
        }
        if (aH === aj) {
          if ("throw" === aI) {
            throw aJ;
          }
          var aL = {};
          aL.value = a4;
          aL.done = !0;
          return aL;
        }
        for (aF.method = aI, aF.arg = aJ;;) {
          var aM = aF.delegate;
          if (aM) {
            var aN = av(aM, aF);
            if (aN) {
              if (aN === ak) {
                continue;
              }
              return aN;
            }
          }
          if ("next" === aF.method) {
            aF.sent = aF._sent = aF.arg;
          } else {
            if ("throw" === aF.method) {
              if (aH === ag) {
                throw aH = aj, aF.arg;
              }
              aF.dispatchException(aF.arg);
            } else {
              "return" === aF.method && aF.abrupt("return", aF.arg);
            }
          }
          aH = ai;
          var aO = af(aD, aE, aF);
          if ("normal" === aO.type) {
            if (aH = aF.done ? aj : ah, aO.arg === ak) {
              continue;
            }
            var aP = {};
            aP.value = aO.arg;
            aP.done = aF.done;
            return aP;
          }
          "throw" === aO.type && (aH = aj, aF.method = "throw", aF.arg = aO.arg);
        }
      };
    }
    function av(aD, aE) {
      var aJ = aE.method,
        aK = aD.iterator[aJ];
      if (aK === a4) {
        aE.delegate = null;
        "throw" === aJ && aD.iterator.return && (aE.method = "return", aE.arg = a4, av(aD, aE), "throw" === aE.method) || "return" !== aJ && (aE.method = "throw", aE.arg = new TypeError("The iterator does not provide a '" + aJ + "' method"));
        return ak;
      }
      var aI = af(aK, aD.iterator, aE.arg);
      if ("throw" === aI.type) {
        aE.method = "throw";
        aE.arg = aI.arg;
        aE.delegate = null;
        return ak;
      }
      var aL = aI.arg;
      return aL ? aL.done ? (aE[aD.resultName] = aL.value, aE.next = aD.nextLoc, "return" !== aE.method && (aE.method = "next", aE.arg = a4), aE.delegate = null, ak) : aL : (aE.method = "throw", aE.arg = new TypeError("iterator result is not an object"), aE.delegate = null, ak);
    }
    function aw(aD) {
      var aE = {
        tryLoc: aD[0]
      };
      var aF = aE;
      1 in aD && (aF.catchLoc = aD[1]);
      2 in aD && (aF.finallyLoc = aD[2], aF.afterLoc = aD[3]);
      this.tryEntries.push(aF);
    }
    function ax(aD) {
      var aE = aD.completion || {};
      aE.type = "normal";
      delete aE.arg;
      aD.completion = aE;
    }
    function ay(aD) {
      var aF = {
        tryLoc: "root"
      };
      this.tryEntries = [aF];
      aD.forEach(aw, this);
      this.reset(!0);
    }
    function az(aD) {
      if (aD || "" === aD) {
        var aF = aD[aa];
        if (aF) {
          return aF.call(aD);
        }
        if ("function" == typeof aD.next) {
          return aD;
        }
        if (!isNaN(aD.length)) {
          var aG = -1,
            aH = function aK() {
              for (; ++aG < aD.length;) {
                if (a7.call(aD, aG)) {
                  aK.value = aD[aG];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a4;
              aK.done = !0;
              return aK;
            };
          return aH.next = aH;
        }
      }
      throw new TypeError(b(aD) + " is not iterable");
    }
    am.prototype = an;
    a8(ar, "constructor", {
      value: an,
      configurable: !0
    });
    a8(an, "constructor", {
      value: am,
      configurable: !0
    });
    am.displayName = ad(an, ac, "GeneratorFunction");
    a5.isGeneratorFunction = function (aD) {
      var aE = "function" == typeof aD && aD.constructor;
      return !!aE && (aE === am || "GeneratorFunction" === (aE.displayName || aE.name));
    };
    a5.mark = function (aD) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
      aD.prototype = Object.create(ar);
      return aD;
    };
    a5.awrap = function (aD) {
      var aE = {};
      aE.__await = aD;
      return aE;
    };
    as(at.prototype);
    ad(at.prototype, ab, function () {
      return this;
    });
    a5.AsyncIterator = at;
    a5.async = function (aD, aE, aF, aG, aH) {
      void 0 === aH && (aH = Promise);
      var aJ = new at(ae(aD, aE, aF, aG), aH);
      return a5.isGeneratorFunction(aE) ? aJ : aJ.next().then(function (aK) {
        return aK.done ? aK.value : aJ.next();
      });
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      return this;
    });
    ad(ar, "toString", function () {
      return "[object Generator]";
    });
    a5.keys = function (aD) {
      var aF = Object(aD),
        aG = [];
      for (var aH in aF) aG.push(aH);
      aG.reverse();
      return function aJ() {
        for (; aG.length;) {
          var aL = aG.pop();
          if (aL in aF) {
            aJ.value = aL;
            aJ.done = !1;
            return aJ;
          }
        }
        aJ.done = !0;
        return aJ;
      };
    };
    a5.values = az;
    ay.prototype = {
      constructor: ay,
      reset: function (aD) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a4, this.done = !1, this.delegate = null, this.method = "next", this.arg = a4, this.tryEntries.forEach(ax), !aD) {
          for (var aE in this) "t" === aE.charAt(0) && a7.call(this, aE) && !isNaN(+aE.slice(1)) && (this[aE] = a4);
        }
      },
      stop: function () {
        this.done = !0;
        var aD = this.tryEntries[0].completion;
        if ("throw" === aD.type) {
          throw aD.arg;
        }
        return this.rval;
      },
      dispatchException: function (aD) {
        if (this.done) {
          throw aD;
        }
        var aF = this;
        function aL(aM, aN) {
          aI.type = "throw";
          aI.arg = aD;
          aF.next = aM;
          aN && (aF.method = "next", aF.arg = a4);
          return !!aN;
        }
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG],
            aI = aH.completion;
          if ("root" === aH.tryLoc) {
            return aL("end");
          }
          if (aH.tryLoc <= this.prev) {
            var aJ = a7.call(aH, "catchLoc"),
              aK = a7.call(aH, "finallyLoc");
            if (aJ && aK) {
              if (this.prev < aH.catchLoc) {
                return aL(aH.catchLoc, !0);
              }
              if (this.prev < aH.finallyLoc) {
                return aL(aH.finallyLoc);
              }
            } else {
              if (aJ) {
                if (this.prev < aH.catchLoc) {
                  return aL(aH.catchLoc, !0);
                }
              } else {
                if (!aK) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aH.finallyLoc) {
                  return aL(aH.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aD, aE) {
        for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
          var aG = this.tryEntries[aF];
          if (aG.tryLoc <= this.prev && a7.call(aG, "finallyLoc") && this.prev < aG.finallyLoc) {
            var aH = aG;
            break;
          }
        }
        aH && ("break" === aD || "continue" === aD) && aH.tryLoc <= aE && aE <= aH.finallyLoc && (aH = null);
        var aI = aH ? aH.completion : {};
        aI.type = aD;
        aI.arg = aE;
        return aH ? (this.method = "next", this.next = aH.finallyLoc, ak) : this.complete(aI);
      },
      complete: function (aD, aE) {
        if ("throw" === aD.type) {
          throw aD.arg;
        }
        "break" === aD.type || "continue" === aD.type ? this.next = aD.arg : "return" === aD.type ? (this.rval = this.arg = aD.arg, this.method = "return", this.next = "end") : "normal" === aD.type && aE && (this.next = aE);
        return ak;
      },
      finish: function (aD) {
        for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
          var aG = this.tryEntries[aF];
          if (aG.finallyLoc === aD) {
            this.complete(aG.completion, aG.afterLoc);
            ax(aG);
            return ak;
          }
        }
      },
      catch: function (aD) {
        for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
          var aG = this.tryEntries[aF];
          if (aG.tryLoc === aD) {
            var aH = aG.completion;
            if ("throw" === aH.type) {
              var aI = aH.arg;
              ax(aG);
            }
            return aI;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aD, aE, aF) {
        this.delegate = {
          iterator: az(aD),
          resultName: aE,
          nextLoc: aF
        };
        "next" === this.method && (this.arg = a4);
        return ak;
      }
    };
    return a5;
  }
  function h(a3, a4, a5, a6, a7, a8, a9) {
    try {
      var ab = a3[a8](a9),
        ac = ab.value;
    } catch (ae) {
      return void a5(ae);
    }
    ab.done ? a4(ac) : Promise.resolve(ac).then(a6, a7);
  }
  function i(a3) {
    return function () {
      var a6 = this,
        a7 = arguments;
      return new Promise(function (a8, a9) {
        var ab = a3.apply(a6, a7);
        function ac(ae) {
          h(ab, a8, a9, ac, ad, "next", ae);
        }
        function ad(ae) {
          h(ab, a8, a9, ac, ad, "throw", ae);
        }
        ac(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.LanJingLing : $.getdata("LanJingLing")) || "",
    k = void 0,
    l = "",
    m = "",
    n = "",
    o = "72",
    p = "",
    q = "10026",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "FR*r!isE5W";
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a4() {
      var a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN;
      return g().wrap(function (aP) {
        for (;;) {
          switch (aP.prev = aP.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aP.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aP.next = 5;
              return a1("先去boxjs填写账号密码");
            case 5:
              return aP.abrupt("return");
            case 6:
              aP.next = 8;
              return Z();
            case 8:
              k = aP.sent;
              a6 = j.split(" ");
              a7 = c(a6);
              aP.prev = 11;
              a7.s();
            case 13:
              if ((a8 = a7.n()).done) {
                aP.next = 213;
                break;
              }
              ab = a8.value;
              console.log("随机生成UA");
              ac = Y();
              v = ac.ua;
              w = ac.commonUa;
              x = ac.uuid;
              console.log(v);
              console.log(w);
              r = ab.split("&")[0];
              s = ab.split("&")[1];
              t = ab.split("&")[2];
              u = ab.split("&")[3] || r;
              console.log("用户：".concat(r, "开始任务"));
              console.log("获取sessionId");
              aP.next = 30;
              return J("/api/account/init");
            case 30:
              ad = aP.sent;
              n = ad.data.session.id;
              console.log(n);
              console.log("获取signature_key");
              aP.next = 36;
              return D("/web/init?client_id=".concat(q));
            case 36:
              ae = aP.sent;
              l = ae.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              aP.next = 42;
              return F("/web/oauth/credential_auth");
            case 42:
              if (af = aP.sent, af.data) {
                aP.next = 46;
                break;
              }
              console.log(af.message);
              return aP.abrupt("continue", 211);
            case 46:
              ag = af.data.authorization_code.code;
              console.log(ag);
              console.log("登录");
              aP.next = 51;
              return J("/api/zbtxz/login", "check_token=&code=".concat(ag, "&token=&type=-1&union_id="));
            case 51:
              ah = aP.sent;
              console.log("登录成功");
              p = ah.data.session.account_id;
              n = ah.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取token");
              aP.next = 60;
              return P("/auth/userinfo_with_account?accountId=".concat(p, "&sessionId=").concat(n));
            case 60:
              ai = aP.sent;
              y = "Bearer " + ai.result.userinfo.token;
              console.log(y);
              console.log("获取id");
              aP.next = 66;
              return P("/tasks");
            case 66:
              if (aj = aP.sent, ak = V(), z = null === (a9 = aj.result[ak.month][ak.day]) || void 0 === a9 ? void 0 : a9.id, z) {
                aP.next = 72;
                break;
              }
              console.log("未找到活动");
              return aP.abrupt("continue", 211);
            case 72:
              if (console.log(z), null === (aa = aj.result[ak.month][ak.day]) || void 0 === aa || !aa.is_fin) {
                aP.next = 76;
                break;
              }
              console.log("阅读已完成");
              return aP.abrupt("continue", 211);
            case 76:
              console.log("开始阅读");
              aP.next = 79;
              return P("/news?task_id=".concat(z, "&account_id=").concat(p, "&session_id=").concat(n, "&device=").concat(x));
            case 79:
              al = aP.sent;
              am = c(al.result);
              aP.prev = 81;
              am.s();
            case 83:
              if ((an = am.n()).done) {
                aP.next = 139;
                break;
              }
              if (ao = an.value, console.log(ao.name), !ao.is_fin) {
                aP.next = 89;
                break;
              }
              console.log("已完成");
              return aP.abrupt("continue", 137);
            case 89:
              ap = ao.task_config;
              aq = c(ao.news);
              aP.prev = 91;
              aq.s();
            case 93:
              if ((ar = aq.n()).done) {
                aP.next = 129;
                break;
              }
              if (as = ar.value, console.log("文章：".concat(as.title)), !ap.includes("read")) {
                aP.next = 109;
                break;
              }
              av = String(Date.parse(new Date()) / 1000);
              aP.next = 100;
              return R({
                time: av
              });
            case 100:
              if (aw = aP.sent, null !== (at = aw) && void 0 !== at && at.sign) {
                aP.next = 105;
                break;
              }
              var aR = {};
              aR.time = av;
              aP.next = 104;
              return R(aR);
            case 104:
              aw = aP.sent;
            case 105:
              aP.next = 107;
              return P("/news/record?t=am&news_id=".concat(as.id, "&timestamp=").concat(av, "&sign=").concat(null === (au = aw) || void 0 === au ? void 0 : au.sign, "&session_id=").concat(n, "&device=").concat(x, ")"));
            case 107:
              ax = aP.sent;
              console.log("阅读：".concat(ax.msg));
            case 109:
              if (!ap.includes("like")) {
                aP.next = 114;
                break;
              }
              aP.next = 112;
              return J("/api/favorite/like", "action=true&id=".concat(as.news_id));
            case 112:
              ay = aP.sent;
              console.log("点赞：".concat(ay.message));
            case 114:
              if (!ap.includes("share")) {
                aP.next = 119;
                break;
              }
              aP.next = 117;
              return J("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id=".concat(as.news_id));
            case 117:
              az = aP.sent;
              console.log("分享：".concat(az.message));
            case 119:
              if (!ap.includes("comment")) {
                aP.next = 124;
                break;
              }
              var aS = {};
              aS.channel_article_id = as.news_id;
              aS.content = "好";
              aP.next = 122;
              return L("/api/comment/create/v2", aS);
            case 122:
              aA = aP.sent;
              console.log("评论：".concat(aA.message));
            case 124:
              aP.next = 126;
              return P("/news?task_id=".concat(z, "&account_id=").concat(p, "&session_id=").concat(n, "&device=").concat(x));
            case 126:
              aP.sent;
            case 127:
              aP.next = 93;
              break;
            case 129:
              aP.next = 134;
              break;
            case 131:
              aP.prev = 131;
              aP.t0 = aP.catch(91);
              aq.e(aP.t0);
            case 134:
              aP.prev = 134;
              aq.f();
              return aP.finish(134);
            case 137:
              aP.next = 83;
              break;
            case 139:
              aP.next = 144;
              break;
            case 141:
              aP.prev = 141;
              aP.t1 = aP.catch(81);
              am.e(aP.t1);
            case 144:
              aP.prev = 144;
              am.f();
              return aP.finish(144);
            case 147:
              aP.next = 149;
              return P("/draw/code");
            case 149:
              aB = aP.sent;
              console.log("拥有".concat(aB.result.length, "次抽奖"));
              aC = c(aB.result);
              aP.prev = 152;
              aC.s();
            case 154:
              if ((aD = aC.n()).done) {
                aP.next = 162;
                break;
              }
              aE = aD.value;
              aP.next = 158;
              return N("/draw/lottery", {
                code: aE.code
              });
            case 158:
              aF = aP.sent;
              0 == aF.result ? console.log("抽奖获得红包") : console.log("谢谢参与");
            case 160:
              aP.next = 154;
              break;
            case 162:
              aP.next = 167;
              break;
            case 164:
              aP.prev = 164;
              aP.t2 = aP.catch(152);
              aC.e(aP.t2);
            case 167:
              aP.prev = 167;
              aC.f();
              return aP.finish(167);
            case 170:
              if (console.log("开始提现"), u && t) {
                aP.next = 174;
                break;
              }
              console.log("请填写支付宝信息");
              return aP.abrupt("continue", 211);
            case 174:
              aP.next = 176;
              return P("/order/profile");
            case 176:
              if (aG = aP.sent, aG.result.alipay_account) {
                aP.next = 182;
                break;
              }
              var aT = {};
              aT.order_id = 0;
              aT.alipay_account = u;
              aT.username = t;
              aP.next = 180;
              return N("/order/bind", aT);
            case 180:
              aH = aP.sent;
              console.log("绑定支付宝：".concat(aH.result));
            case 182:
              if (console.log("余额：".concat(aG.result.unreceived)), !(aG.result.unreceived > 0)) {
                aP.next = 189;
                break;
              }
              var aU = {};
              aU.order_id = 0;
              aU.alipay_account = u;
              aU.username = t;
              aP.next = 186;
              return N("/order/receive", aU);
            case 186:
              aI = aP.sent;
              console.log("提现：".concat(aI.result));
              aI.msg && (m += "用户".concat(r, " 提现成功：").concat(aG.result.unreceived, "元\n"));
            case 189:
              aP.next = 191;
              return H("/api/account_comment/comment_list?size=20");
            case 191:
              aJ = aP.sent;
              aK = c(aJ.data.comment_list);
              aP.prev = 193;
              aK.s();
            case 195:
              if ((aL = aK.n()).done) {
                aP.next = 203;
                break;
              }
              aM = aL.value;
              aP.next = 199;
              return J("/api/comment/delete", "comment_id=".concat(aM.id));
            case 199:
              aN = aP.sent;
              console.log("删除评论：".concat(aN.message));
            case 201:
              aP.next = 195;
              break;
            case 203:
              aP.next = 208;
              break;
            case 205:
              aP.prev = 205;
              aP.t3 = aP.catch(193);
              aK.e(aP.t3);
            case 208:
              aP.prev = 208;
              aK.f();
              return aP.finish(208);
            case 211:
              aP.next = 13;
              break;
            case 213:
              aP.next = 218;
              break;
            case 215:
              aP.prev = 215;
              aP.t4 = aP.catch(11);
              a7.e(aP.t4);
            case 218:
              aP.prev = 218;
              a7.f();
              return aP.finish(218);
            case 221:
              if (!m) {
                aP.next = 224;
                break;
              }
              aP.next = 224;
              return a1(m);
            case 224:
            case "end":
              return aP.stop();
          }
        }
      }, a4, null, [[11, 215, 218, 221], [81, 141, 144, 147], [91, 131, 134, 137], [152, 164, 167, 170], [193, 205, 208, 211]]);
    }));
    return C.apply(this, arguments);
  }
  function D(a3) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a4),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": W(),
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(ag));
                            } catch (am) {
                              $.logErr(am, af);
                            } finally {
                              a8();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ad);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a3);
    }));
    return E.apply(this, arguments);
  }
  function F(a3) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = T();
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: a7.body
                };
                $.post(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (ak) {
                              $.logErr(ak, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return G.apply(this, arguments);
  }
  function H(a3) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a3(a4) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = U(a4);
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://vapp.tmuyun.com".concat(a4),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a6.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ah));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return I.apply(this, arguments);
  }
  function J(a3, a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: a6
                };
                $.post(ad, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ag) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(ai));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ah);
                          case 14:
                            ak.prev = 14;
                            ab();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a4);
    }));
    return K.apply(this, arguments);
  }
  function L(a3, a4) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json; charset=utf-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
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
                            ab(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ab();
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
              return a9.stop();
          }
        }
      }, a4);
    }));
    return M.apply(this, arguments);
  }
  function N(a3, a4) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a5),
                  headers: {
                    Connection: "keep-alive",
                    Authorization: y,
                    accept: "*/*",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                    "x-requested-with": "com.shixian.lanxi",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ah));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return O.apply(this, arguments);
  }
  function P(a3) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a4),
                  headers: {
                    Connection: "keep-alive",
                    Authorization: y,
                    accept: "*/*",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                    "x-requested-with": "com.shixian.lanxi",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a8(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a8();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a3);
    }));
    return Q.apply(this, arguments);
  }
  function R(a3) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a5(a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (aa) {
                var ac = {
                  "Content-Type": "application/json"
                };
                var ad = {
                  url: "https://lanjingling.xzxxn7.live/md5",
                  headers: ac,
                  body: JSON.stringify(a6)
                };
                $.post(ad, function (ae, af, ag) {
                  try {
                    ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ag));
                  } catch (ah) {
                    $.logErr(ah, af);
                  } finally {
                    aa();
                  }
                });
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a5);
    }));
    return S.apply(this, arguments);
  }
  function T() {
    var a8 = new (k.loadJSEncrypt())();
    a8.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    s = a8.encrypt(s);
    var a9 = W(),
      aa = "client_id=".concat(q, "&password=").concat(s, "&phone_number=").concat(r),
      ab = "post%%/web/oauth/credential_auth?".concat(aa, "%%").concat(a9, "%%");
    aa = "client_id=".concat(q, "&password=").concat(encodeURIComponent(s), "&phone_number=").concat(r);
    CryptoJS = k.createCryptoJS();
    var a5 = CryptoJS.HmacSHA256(ab, l),
      a6 = CryptoJS.enc.Hex.stringify(a5);
    var a7 = {};
    a7.uuid = a9;
    a7.signature = a6;
    a7.body = aa;
    return a7;
  }
  function U(a3) {
    var a4 = W(),
      a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(n, "&&").concat(a4, "&&").concat(a5, "&&").concat(A, "&&").concat(o)).toString(),
      a7 = {
        uuid: a4,
        time: a5,
        signature: a6
      };
    return a7;
  }
  function V() {
    var a3 = new Date(),
      a4 = a3.getFullYear(),
      a5 = String(a3.getMonth() + 1).padStart(2, "0"),
      a6 = String(a3.getDate()).padStart(2, "0");
    return {
      month: "".concat(a4, "-").concat(a5),
      day: "".concat(a4, "-").concat(a5, "-").concat(a6)
    };
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a3) {
      var a4 = 16 * Math.random() | 0,
        a5 = "x" === a3 ? a4 : 3 & a4 | 8;
      return a5.toString(16);
    });
  }
  function X(a3) {
    return a3[Math.floor(Math.random() * a3.length)];
  }
  function Y() {
    var a3 = "1.1.9",
      a4 = W(),
      a5 = X(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a6 = "Xiaomi " + a5,
      a7 = "Android",
      a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(q, ";").concat(a3, ";1.0;null;").concat(a5),
      a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";").concat("Release", ";").concat("6.11.0"),
      aa = {
        ua: a8,
        commonUa: a9,
        uuid: a4
      };
    return aa;
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a4() {
      var a6;
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (a6 = $.getdata("Utils_Code") || "", !a6 || !Object.keys(a6).length) {
                a8.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a6);
              return a8.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a8.abrupt("return", new Promise(function () {
                var aa = i(g().mark(function ab(ac) {
                  return g().wrap(function ae(af) {
                    for (;;) {
                      switch (af.prev = af.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ag) {
                            $.setdata(ag, "Utils_Code");
                            eval(ag);
                            console.log("✅ Utils加载成功, 请继续");
                            ac(creatUtils());
                          });
                        case 1:
                        case "end":
                          return af.stop();
                      }
                    }
                  }, ab);
                }));
                return function (ac) {
                  return aa.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return a0.apply(this, arguments);
  }
  function a1(a3) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a4(a5) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a5);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a5);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a4) {
      for (;;) {
        switch (a4.prev = a4.next) {
          case 0:
            a4.next = 2;
            return B();
          case 2:
          case "end":
            return a4.stop();
        }
      }
    }, a3);
  }))().catch(function (a4) {
    $.log(a4);
  }).finally(function () {
    $.done({});
  });
})();