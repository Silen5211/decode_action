//Sat Sep 07 2024 00:40:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ad) {
      return typeof ad;
    } : function (ad) {
      return ad && "function" == typeof Symbol && ad.constructor === Symbol && ad !== Symbol.prototype ? "symbol" : typeof ad;
    };
    return b(ab);
  }
  function c(ab, ac) {
    var ae = "undefined" != typeof Symbol && ab[Symbol.iterator] || ab["@@iterator"];
    if (!ae) {
      if (Array.isArray(ab) || (ae = d(ab)) || ac && ab && "number" == typeof ab.length) {
        ae && (ab = ae);
        var af = 0,
          ag = function () {};
        return {
          s: ag,
          n: function () {
            var am = {
              done: !0
            };
            return af >= ab.length ? am : {
              done: !1,
              value: ab[af++]
            };
          },
          e: function (am) {
            throw am;
          },
          f: ag
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ah,
      ai = !0,
      aj = !1;
    return {
      s: function () {
        ae = ae.call(ab);
      },
      n: function () {
        var am = ae.next();
        ai = am.done;
        return am;
      },
      e: function (am) {
        aj = !0;
        ah = am;
      },
      f: function () {
        try {
          ai || null == ae.return || ae.return();
        } finally {
          if (aj) {
            throw ah;
          }
        }
      }
    };
  }
  function d(ab, ac) {
    if (ab) {
      if ("string" == typeof ab) {
        return f(ab, ac);
      }
      var ae = {}.toString.call(ab).slice(8, -1);
      "Object" === ae && ab.constructor && (ae = ab.constructor.name);
      return "Map" === ae || "Set" === ae ? Array.from(ab) : "Arguments" === ae || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? f(ab, ac) : void 0;
    }
  }
  function f(ab, ac) {
    (null == ac || ac > ab.length) && (ac = ab.length);
    for (var ad = 0, ae = Array(ac); ad < ac; ad++) {
      ae[ad] = ab[ad];
    }
    return ae;
  }
  function g() {
    'use strict';

    g = function () {
      return ad;
    };
    var ac,
      ad = {},
      ae = Object.prototype,
      af = ae.hasOwnProperty,
      ag = Object.defineProperty || function (aI, aJ, aK) {
        aI[aJ] = aK.value;
      },
      ah = "function" == typeof Symbol ? Symbol : {},
      ai = ah.iterator || "@@iterator",
      aj = ah.asyncIterator || "@@asyncIterator",
      ak = ah.toStringTag || "@@toStringTag";
    function al(aI, aJ, aK) {
      var aN = {
        value: aK,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aI, aJ, aN);
      return aI[aJ];
    }
    try {
      al({}, "");
    } catch (aJ) {
      al = function (aK, aL, aM) {
        return aK[aL] = aM;
      };
    }
    function am(aL, aM, aN, aO) {
      var aQ = aM && aM.prototype instanceof at ? aM : at,
        aR = Object.create(aQ.prototype),
        aS = new aG(aO || []);
      ag(aR, "_invoke", {
        value: aC(aL, aN, aS)
      });
      return aR;
    }
    function an(aL, aM, aN) {
      try {
        return {
          type: "normal",
          arg: aL.call(aM, aN)
        };
      } catch (aR) {
        var aO = {
          type: "throw",
          arg: aR
        };
        return aO;
      }
    }
    ad.wrap = am;
    var ao = "suspendedStart",
      ap = "suspendedYield",
      aq = "executing",
      ar = "completed",
      as = {};
    function at() {}
    function au() {}
    function av() {}
    var aw = {};
    al(aw, ai, function () {
      return this;
    });
    var ax = Object.getPrototypeOf,
      ay = ax && ax(ax(aH([])));
    ay && ay !== ae && af.call(ay, ai) && (aw = ay);
    av.prototype = at.prototype = Object.create(aw);
    var az = av.prototype;
    function aA(aL) {
      ["next", "throw", "return"].forEach(function (aN) {
        al(aL, aN, function (aP) {
          return this._invoke(aN, aP);
        });
      });
    }
    function aB(aL, aM) {
      function aP(aQ, aR, aS, aT) {
        var aV = an(aL[aQ], aL, aR);
        if ("throw" !== aV.type) {
          var aW = aV.arg,
            aX = aW.value;
          return aX && "object" == b(aX) && af.call(aX, "__await") ? aM.resolve(aX.__await).then(function (b0) {
            aP("next", b0, aS, aT);
          }, function (b0) {
            aP("throw", b0, aS, aT);
          }) : aM.resolve(aX).then(function (b0) {
            aW.value = b0;
            aS(aW);
          }, function (b0) {
            return aP("throw", b0, aS, aT);
          });
        }
        aT(aV.arg);
      }
      var aO;
      ag(this, "_invoke", {
        value: function (aQ, aR) {
          function aU() {
            return new aM(function (aW, aX) {
              aP(aQ, aR, aW, aX);
            });
          }
          return aO = aO ? aO.then(aU, aU) : aU();
        }
      });
    }
    function aC(aL, aM, aN) {
      var aP = ao;
      return function (aQ, aR) {
        if (aP === aq) {
          throw Error("Generator is already running");
        }
        if (aP === ar) {
          if ("throw" === aQ) {
            throw aR;
          }
          var aT = {};
          aT.value = ac;
          aT.done = !0;
          return aT;
        }
        for (aN.method = aQ, aN.arg = aR;;) {
          var aU = aN.delegate;
          if (aU) {
            var aV = aD(aU, aN);
            if (aV) {
              if (aV === as) {
                continue;
              }
              return aV;
            }
          }
          if ("next" === aN.method) {
            aN.sent = aN._sent = aN.arg;
          } else {
            if ("throw" === aN.method) {
              if (aP === ao) {
                throw aP = ar, aN.arg;
              }
              aN.dispatchException(aN.arg);
            } else {
              "return" === aN.method && aN.abrupt("return", aN.arg);
            }
          }
          aP = aq;
          var aW = an(aL, aM, aN);
          if ("normal" === aW.type) {
            if (aP = aN.done ? ar : ap, aW.arg === as) {
              continue;
            }
            var aX = {};
            aX.value = aW.arg;
            aX.done = aN.done;
            return aX;
          }
          "throw" === aW.type && (aP = ar, aN.method = "throw", aN.arg = aW.arg);
        }
      };
    }
    function aD(aL, aM) {
      var aP = aM.method,
        aQ = aL.iterator[aP];
      if (aQ === ac) {
        aM.delegate = null;
        "throw" === aP && aL.iterator.return && (aM.method = "return", aM.arg = ac, aD(aL, aM), "throw" === aM.method) || "return" !== aP && (aM.method = "throw", aM.arg = new TypeError("The iterator does not provide a '" + aP + "' method"));
        return as;
      }
      var aR = an(aQ, aL.iterator, aM.arg);
      if ("throw" === aR.type) {
        aM.method = "throw";
        aM.arg = aR.arg;
        aM.delegate = null;
        return as;
      }
      var aS = aR.arg;
      return aS ? aS.done ? (aM[aL.resultName] = aS.value, aM.next = aL.nextLoc, "return" !== aM.method && (aM.method = "next", aM.arg = ac), aM.delegate = null, as) : aS : (aM.method = "throw", aM.arg = new TypeError("iterator result is not an object"), aM.delegate = null, as);
    }
    function aE(aL) {
      var aN = {
        tryLoc: aL[0]
      };
      var aO = aN;
      1 in aL && (aO.catchLoc = aL[1]);
      2 in aL && (aO.finallyLoc = aL[2], aO.afterLoc = aL[3]);
      this.tryEntries.push(aO);
    }
    function aF(aL) {
      var aM = aL.completion || {};
      aM.type = "normal";
      delete aM.arg;
      aL.completion = aM;
    }
    function aG(aL) {
      var aM = {
        tryLoc: "root"
      };
      this.tryEntries = [aM];
      aL.forEach(aE, this);
      this.reset(!0);
    }
    function aH(aL) {
      if (aL || "" === aL) {
        var aN = aL[ai];
        if (aN) {
          return aN.call(aL);
        }
        if ("function" == typeof aL.next) {
          return aL;
        }
        if (!isNaN(aL.length)) {
          var aO = -1,
            aP = function aT() {
              for (; ++aO < aL.length;) {
                if (af.call(aL, aO)) {
                  aT.value = aL[aO];
                  aT.done = !1;
                  return aT;
                }
              }
              aT.value = ac;
              aT.done = !0;
              return aT;
            };
          return aP.next = aP;
        }
      }
      throw new TypeError(b(aL) + " is not iterable");
    }
    au.prototype = av;
    ag(az, "constructor", {
      value: av,
      configurable: !0
    });
    ag(av, "constructor", {
      value: au,
      configurable: !0
    });
    au.displayName = al(av, ak, "GeneratorFunction");
    ad.isGeneratorFunction = function (aL) {
      var aM = "function" == typeof aL && aL.constructor;
      return !!aM && (aM === au || "GeneratorFunction" === (aM.displayName || aM.name));
    };
    ad.mark = function (aL) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aL, av) : (aL.__proto__ = av, al(aL, ak, "GeneratorFunction"));
      aL.prototype = Object.create(az);
      return aL;
    };
    ad.awrap = function (aL) {
      var aN = {
        __await: aL
      };
      return aN;
    };
    aA(aB.prototype);
    al(aB.prototype, aj, function () {
      return this;
    });
    ad.AsyncIterator = aB;
    ad.async = function (aL, aM, aN, aO, aP) {
      void 0 === aP && (aP = Promise);
      var aR = new aB(am(aL, aM, aN, aO), aP);
      return ad.isGeneratorFunction(aM) ? aR : aR.next().then(function (aT) {
        return aT.done ? aT.value : aR.next();
      });
    };
    aA(az);
    al(az, ak, "Generator");
    al(az, ai, function () {
      return this;
    });
    al(az, "toString", function () {
      return "[object Generator]";
    });
    ad.keys = function (aL) {
      var aN = Object(aL),
        aO = [];
      for (var aP in aN) aO.push(aP);
      aO.reverse();
      return function aQ() {
        for (; aO.length;) {
          var aT = aO.pop();
          if (aT in aN) {
            aQ.value = aT;
            aQ.done = !1;
            return aQ;
          }
        }
        aQ.done = !0;
        return aQ;
      };
    };
    ad.values = aH;
    aG.prototype = {
      constructor: aG,
      reset: function (aL) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ac, this.done = !1, this.delegate = null, this.method = "next", this.arg = ac, this.tryEntries.forEach(aF), !aL) {
          for (var aN in this) "t" === aN.charAt(0) && af.call(this, aN) && !isNaN(+aN.slice(1)) && (this[aN] = ac);
        }
      },
      stop: function () {
        this.done = !0;
        var aL = this.tryEntries[0].completion;
        if ("throw" === aL.type) {
          throw aL.arg;
        }
        return this.rval;
      },
      dispatchException: function (aL) {
        if (this.done) {
          throw aL;
        }
        var aN = this;
        function aU(aV, aW) {
          aQ.type = "throw";
          aQ.arg = aL;
          aN.next = aV;
          aW && (aN.method = "next", aN.arg = ac);
          return !!aW;
        }
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO],
            aQ = aP.completion;
          if ("root" === aP.tryLoc) {
            return aU("end");
          }
          if (aP.tryLoc <= this.prev) {
            var aR = af.call(aP, "catchLoc"),
              aS = af.call(aP, "finallyLoc");
            if (aR && aS) {
              if (this.prev < aP.catchLoc) {
                return aU(aP.catchLoc, !0);
              }
              if (this.prev < aP.finallyLoc) {
                return aU(aP.finallyLoc);
              }
            } else {
              if (aR) {
                if (this.prev < aP.catchLoc) {
                  return aU(aP.catchLoc, !0);
                }
              } else {
                if (!aS) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aP.finallyLoc) {
                  return aU(aP.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aL, aM) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc <= this.prev && af.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
            var aQ = aP;
            break;
          }
        }
        aQ && ("break" === aL || "continue" === aL) && aQ.tryLoc <= aM && aM <= aQ.finallyLoc && (aQ = null);
        var aR = aQ ? aQ.completion : {};
        aR.type = aL;
        aR.arg = aM;
        return aQ ? (this.method = "next", this.next = aQ.finallyLoc, as) : this.complete(aR);
      },
      complete: function (aL, aM) {
        if ("throw" === aL.type) {
          throw aL.arg;
        }
        "break" === aL.type || "continue" === aL.type ? this.next = aL.arg : "return" === aL.type ? (this.rval = this.arg = aL.arg, this.method = "return", this.next = "end") : "normal" === aL.type && aM && (this.next = aM);
        return as;
      },
      finish: function (aL) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.finallyLoc === aL) {
            this.complete(aO.completion, aO.afterLoc);
            aF(aO);
            return as;
          }
        }
      },
      catch: function (aL) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.tryLoc === aL) {
            var aP = aO.completion;
            if ("throw" === aP.type) {
              var aQ = aP.arg;
              aF(aO);
            }
            return aQ;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aL, aM, aN) {
        this.delegate = {
          iterator: aH(aL),
          resultName: aM,
          nextLoc: aN
        };
        "next" === this.method && (this.arg = ac);
        return as;
      }
    };
    return ad;
  }
  function h(ab, ac, ad, ae, af, ag, ah) {
    try {
      var ak = ab[ag](ah),
        al = ak.value;
    } catch (an) {
      return void ad(an);
    }
    ak.done ? ac(al) : Promise.resolve(al).then(ae, af);
  }
  function i(ab) {
    return function () {
      var ad = this,
        ae = arguments;
      return new Promise(function (af, ag) {
        var ai = ab.apply(ad, ae);
        function aj(al) {
          h(ai, af, ag, aj, ak, "next", al);
        }
        function ak(al) {
          h(ai, af, ag, aj, ak, "throw", al);
        }
        aj(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = void 0,
    l = "",
    m = "64",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "10019",
    x = "",
    y = "",
    z = "FR*r!isE5W";
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function ad() {
      var af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF;
      return g().wrap(function (aG) {
        for (;;) {
          switch (aG.prev = aG.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aG.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aG.next = 5;
              return a9("先去boxjs填写账号密码");
            case 5:
              return aG.abrupt("return");
            case 6:
              aG.next = 8;
              return a7();
            case 8:
              k = aG.sent;
              af = j.split(" ");
              ag = c(af);
              aG.prev = 11;
              ag.s();
            case 13:
              if ((ah = ag.n()).done) {
                aG.next = 161;
                break;
              }
              ai = ah.value;
              console.log("随机生成UA");
              aj = a5();
              n = aj.ua;
              o = aj.commonUa;
              p = aj.uuid;
              console.log(n);
              console.log(o);
              u = ai.split("&")[0];
              v = ai.split("&")[1];
              console.log("用户：".concat(u, "开始任务"));
              console.log("获取sessionId");
              aG.next = 28;
              return I("/api/account/init");
            case 28:
              ak = aG.sent;
              x = ak.data.session.id;
              console.log(x);
              console.log("获取signature_key");
              aG.next = 34;
              return C("/web/init?client_id=".concat(w));
            case 34:
              al = aG.sent;
              l = al.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              aG.next = 40;
              return E("/web/oauth/credential_auth");
            case 40:
              if (am = aG.sent, am.data) {
                aG.next = 44;
                break;
              }
              console.log(am.message);
              return aG.abrupt("continue", 159);
            case 44:
              an = am.data.authorization_code.code;
              console.log(an);
              console.log("登录");
              aG.next = 49;
              return I("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
            case 49:
              ao = aG.sent;
              console.log("登录成功");
              t = ao.data.session.account_id;
              x = ao.data.session.id;
              aG.next = 55;
              return G("/api/app_feature_switch/list");
            case 55:
              ap = aG.sent;
              console.log("进入app：".concat(ap.message));
              console.log("————————————");
              console.log("阅读抽奖");
              q = "";
              console.log("获取登录cookie");
              aG.next = 63;
              return K("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(x, "&deviceId=").concat(p));
            case 63:
              if (q = aG.sent, q) {
                aG.next = 66;
                break;
              }
              return aG.abrupt("continue", 159);
            case 66:
              console.log(q);
              aG.next = 69;
              return M("/prod-api/user-read/list/".concat(a4()));
            case 69:
              aq = aG.sent;
              ar = c(aq.data.articleIsReadList);
              aG.prev = 71;
              ar.s();
            case 73:
              if ((as = ar.n()).done) {
                aG.next = 89;
                break;
              }
              at = as.value;
              console.log("文章：".concat(at.title));
              aG.next = 78;
              return G("/api/article/detail?id=".concat(at.newsId));
            case 78:
              aG.sent;
              aG.next = 81;
              return G("/api/article/read_time?channel_article_id=".concat(at.newsId, "&is_end=true&read_time=7934"));
            case 81:
              aG.sent;
              au = JSON.stringify({
                timestamp: Date.now(),
                articleId: at.id,
                accountId: t
              });
              aG.next = 85;
              return M("/prod-api/already-read/article/new?signature=".concat(a0(au)), au);
            case 85:
              av = aG.sent;
              console.log("阅读：".concat(av.msg));
            case 87:
              aG.next = 73;
              break;
            case 89:
              aG.next = 94;
              break;
            case 91:
              aG.prev = 91;
              aG.t0 = aG.catch(71);
              ar.e(aG.t0);
            case 94:
              aG.prev = 94;
              ar.f();
              return aG.finish(94);
            case 97:
              aG.next = 99;
              return M("/prod-api/user-read-count/count/".concat(a4()));
            case 99:
              aw = aG.sent;
              s = "";
              aG.next = 103;
              return O("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(x));
            case 103:
              s = aG.sent;
              console.log("获取抽奖cookie");
              console.log(s);
              aG.next = 108;
              return Q("/tzrb/awardUpgrade/list?activityId=67");
            case 108:
              ax = aG.sent;
              ay = ax.data;
              az = g().mark(function aO() {
                var aP, aQ;
                return g().wrap(function (aR) {
                  for (;;) {
                    switch (aR.prev = aR.next) {
                      case 0:
                        aR.next = 2;
                        return S("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        aP = aR.sent;
                        aQ = ay.findIndex(function (aT) {
                          return aT.id == aP.data;
                        });
                        -1 != aQ ? (console.log("抽奖获得：".concat(ay[aQ].title)), y += "用户：".concat(u, " 抽奖获得：").concat(ay[aQ].title, "\n")) : console.log(JSON.stringify(aP));
                      case 5:
                      case "end":
                        return aR.stop();
                    }
                  }
                }, aO);
              });
              aA = 0;
            case 112:
              if (!(aA < aw.data)) {
                aG.next = 117;
                break;
              }
              return aG.delegateYield(az(), "t1", 114);
            case 114:
              aA++;
              aG.next = 112;
              break;
            case 117:
              console.log("————————————");
              console.log("答题抽奖");
              r = "";
              console.log("获取登录cookie");
              aG.next = 123;
              return U("/wcgames/WordFillGame/login/?accountId=".concat(t, "&sessionId=").concat(x));
            case 123:
              if (r = aG.sent, r) {
                aG.next = 126;
                break;
              }
              return aG.abrupt("continue", 159);
            case 126:
              console.log(r);
              aG.next = 129;
              return W("/wcgames/WordFillGame/get_user_info/");
            case 129:
              aB = aG.sent;
              console.log("当前答题进度：".concat(aB.data.level, "/5"));
              aC = aB.data.level;
            case 132:
              if (!(aC < 5)) {
                aG.next = 145;
                break;
              }
              console.log("获取题目");
              aG.next = 136;
              return W("/wcgames/WordFillGame/get_question/");
            case 136:
              aD = aG.sent;
              console.log("题目：".concat(aD.data.question, " 答案：").concat(aD.data.answer));
              aG.next = 140;
              return Y("/wcgames/WordFillGame/submit_answer/", "accountId=".concat(t));
            case 140:
              aE = aG.sent;
              console.log("答题：".concat(aE.message));
            case 142:
              aC++;
              aG.next = 132;
              break;
            case 145:
              aG.next = 147;
              return W("/wcgames/WordFillGame/get_user_info/");
            case 147:
              if (aB = aG.sent, 1 != aB.data.isGetRed) {
                aG.next = 151;
                break;
              }
              console.log("已领取支付宝红包");
              return aG.abrupt("continue", 159);
            case 151:
              if (1 == aB.data.alipayId_bind) {
                aG.next = 154;
                break;
              }
              console.log("未绑定支付宝");
              return aG.abrupt("continue", 159);
            case 154:
              aG.next = 156;
              return W("/wcgames/WordFillGame/generate_custom_redpacket/");
            case 156:
              aF = aG.sent;
              console.log("答题抽奖获得支付宝红包：".concat(aF.message, "元"));
              y += "用户：".concat(u, " 答题抽奖获得支付宝红包：").concat(aF.message, "元\n");
            case 159:
              aG.next = 13;
              break;
            case 161:
              aG.next = 166;
              break;
            case 163:
              aG.prev = 163;
              aG.t2 = aG.catch(11);
              ag.e(aG.t2);
            case 166:
              aG.prev = 166;
              ag.f();
              return aG.finish(166);
            case 169:
              if (!y) {
                aG.next = 172;
                break;
              }
              aG.next = 172;
              return a9(y);
            case 172:
            case "end":
              return aG.stop();
          }
        }
      }, ad, null, [[11, 163, 166, 169], [71, 91, 94, 97]]);
    }));
    return B.apply(this, arguments);
  }
  function C(ab) {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a3(),
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  }
                };
                $.get(aj, function () {
                  var am = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(ar));
                            } catch (ay) {
                              $.logErr(ay, aq);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return D.apply(this, arguments);
  }
  function E(ab) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ac(ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = a1();
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": af.uuid,
                    "X-SIGNATURE": af.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  },
                  body: af.body
                };
                $.post(ak, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ai(JSON.parse(ap));
                            } catch (av) {
                              $.logErr(av, ao);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return F.apply(this, arguments);
  }
  function G(ab) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = a2(ac);
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ae.time,
                  "X-SESSION-ID": x,
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "X-TENANT-ID": m,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": o
                };
                var aj = {
                  url: "https://vapp.taizhou.com.cn".concat(ac),
                  headers: ai
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ag();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return H.apply(this, arguments);
  }
  function I(ab, ac) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ac(ad, ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = a2(ad);
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://vapp.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  },
                  body: ae
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ai();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ac);
    }));
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://xmt.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 16;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ao).code) {
                              aq.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ao).msg);
                            y += "用户：".concat(u, " ").concat(JSON.parse(ao).msg, "\n");
                            ag("");
                            return aq.abrupt("return");
                          case 13:
                            q = $.isNode() ? an.headers["set-cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            ag(q);
                          case 16:
                            aq.next = 21;
                            break;
                          case 18:
                            aq.prev = 18;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 21:
                            aq.prev = 21;
                            ag();
                            return aq.finish(21);
                          case 24:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 18, 21, 24]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return L.apply(this, arguments);
  }
  function M(ab) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://xmt.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 11;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? an.headers["set-cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            ag(s);
                          case 11:
                            ap.next = 16;
                            break;
                          case 13:
                            ap.prev = 13;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 16:
                            ap.prev = 16;
                            ag();
                            return ap.finish(16);
                          case 19:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 13, 16, 19]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return P.apply(this, arguments);
  }
  function Q(ab) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ac(ad) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var aj = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ai();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return R.apply(this, arguments);
  }
  function S(ab, ac) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ad(ae, af) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://srv-app.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: af
                };
                $.post(am, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ad);
    }));
    return T.apply(this, arguments);
  }
  function U(ab) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ac(ad) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 16;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ap).code) {
                              ar.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ap).msg);
                            y += "用户：".concat(u, " ").concat(JSON.parse(ap).msg, "\n");
                            ai("");
                            return ar.abrupt("return");
                          case 13:
                            r = $.isNode() ? ao.headers["set-cookie"][0] || ao.headers["Set-Cookie"][0] : ao.headers["set-cookie"] || ao.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ai(r);
                          case 16:
                            ar.next = 21;
                            break;
                          case 18:
                            ar.prev = 18;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 21:
                            ar.prev = 21;
                            ai();
                            return ar.finish(21);
                          case 24:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 18, 21, 24]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return V.apply(this, arguments);
  }
  function W(ab) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return X.apply(this, arguments);
  }
  function Y(ab, ac) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ae
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return Z.apply(this, arguments);
  }
  function a0(ab) {
    var ac = k.loadSM2();
    return ac.doEncrypt(ab, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function a1() {
    var aj = new (k.loadJSEncrypt())();
    aj.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = aj.encrypt(v);
    var ag = a3(),
      ah = "client_id=".concat(w, "&password=").concat(v, "&phone_number=").concat(u),
      ai = "post%%/web/oauth/credential_auth?".concat(ah, "%%").concat(ag, "%%");
    ah = "client_id=".concat(w, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = k.createCryptoJS();
    var ad = CryptoJS.HmacSHA256(ai, l),
      ae = CryptoJS.enc.Hex.stringify(ad);
    var af = {};
    af.uuid = ag;
    af.signature = ae;
    af.body = ah;
    return af;
  }
  function a2(ab) {
    var ac = a3(),
      ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(x, "&&").concat(ac, "&&").concat(ad, "&&").concat(z, "&&").concat(m)).toString(),
      af = {
        uuid: ac,
        time: ad,
        signature: ae
      };
    return af;
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ab) {
      var ac = 16 * Math.random() | 0,
        ad = "x" === ab ? ac : 3 & ac | 8;
      return ad.toString(16);
    });
  }
  function a4() {
    var ab = new Date(),
      ac = ab.getFullYear(),
      ad = String(ab.getMonth() + 1).padStart(2, "0"),
      ae = String(ab.getDate()).padStart(2, "0");
    return "".concat(ac).concat(ad).concat(ae);
  }
  function a5() {
    var ab = "6.0.2",
      ac = a3(),
      ad = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ae = "Xiaomi " + ad,
      af = "Android",
      ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ab, ";1.0;null;").concat(ad),
      ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      ai = {
        ua: ag,
        commonUa: ah,
        uuid: ac
      };
    return ai;
  }
  function a6(ab) {
    return ab[Math.floor(Math.random() * ab.length)];
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ac() {
      var ae;
      return g().wrap(function af(ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (ae = $.getdata("Utils_Code") || "", !ae || !Object.keys(ae).length) {
                ag.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ae);
              return ag.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ag.abrupt("return", new Promise(function () {
                var ai = i(g().mark(function aj(ak) {
                  return g().wrap(function am(an) {
                    for (;;) {
                      switch (an.prev = an.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ao) {
                            $.setdata(ao, "Utils_Code");
                            eval(ao);
                            console.log("✅ Utils加载成功, 请继续");
                            ak(creatUtils());
                          });
                        case 1:
                        case "end":
                          return an.stop();
                      }
                    }
                  }, aj);
                }));
                return function (ak) {
                  return ai.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ab) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ac(ad) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (!$.isNode()) {
                ag.next = 5;
                break;
              }
              ag.next = 3;
              return notify.sendNotify($.name, ad);
            case 3:
              ag.next = 6;
              break;
            case 5:
              $.msg($.name, "", ad);
            case 6:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return aa.apply(this, arguments);
  }
  i(g().mark(function ab() {
    return g().wrap(function (ac) {
      for (;;) {
        switch (ac.prev = ac.next) {
          case 0:
            ac.next = 2;
            return A();
          case 2:
          case "end":
            return ac.stop();
        }
      }
    }, ab);
  }))().catch(function (ac) {
    $.log(ac);
  }).finally(function () {
    $.done({});
  });
})();