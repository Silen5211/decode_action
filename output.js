//Tue Sep 17 2024 13:22:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(F) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (H) {
      return typeof H;
    } : function (H) {
      return H && "function" == typeof Symbol && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
    };
    return b(F);
  }
  function c(F, G) {
    var I = "undefined" != typeof Symbol && F[Symbol.iterator] || F["@@iterator"];
    if (!I) {
      if (Array.isArray(F) || (I = d(F)) || G && F && "number" == typeof F.length) {
        I && (F = I);
        var J = 0,
          K = function () {};
        return {
          s: K,
          n: function () {
            var Q = {
              done: !0
            };
            return J >= F.length ? Q : {
              done: !1,
              value: F[J++]
            };
          },
          e: function (Q) {
            throw Q;
          },
          f: K
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var L,
      M = !0,
      N = !1;
    return {
      s: function () {
        I = I.call(F);
      },
      n: function () {
        var S = I.next();
        M = S.done;
        return S;
      },
      e: function (Q) {
        N = !0;
        L = Q;
      },
      f: function () {
        try {
          M || null == I.return || I.return();
        } finally {
          if (N) {
            throw L;
          }
        }
      }
    };
  }
  function d(F, G) {
    if (F) {
      if ("string" == typeof F) {
        return f(F, G);
      }
      var H = {}.toString.call(F).slice(8, -1);
      "Object" === H && F.constructor && (H = F.constructor.name);
      return "Map" === H || "Set" === H ? Array.from(F) : "Arguments" === H || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H) ? f(F, G) : void 0;
    }
  }
  function f(F, G) {
    (null == G || G > F.length) && (G = F.length);
    for (var H = 0, I = Array(G); H < G; H++) {
      I[H] = F[H];
    }
    return I;
  }
  function g() {
    'use strict';

    g = function () {
      return J;
    };
    var H,
      J = {},
      K = Object.prototype,
      M = K.hasOwnProperty,
      N = Object.defineProperty || function (aj, ak, al) {
        aj[ak] = al.value;
      },
      O = "function" == typeof Symbol ? Symbol : {},
      P = O.iterator || "@@iterator",
      Q = O.asyncIterator || "@@asyncIterator",
      V = O.toStringTag || "@@toStringTag";
    function W(aj, ak, al) {
      var am = {};
      am.value = al;
      am.enumerable = !0;
      am.configurable = !0;
      am.writable = !0;
      Object.defineProperty(aj, ak, am);
      return aj[ak];
    }
    try {
      W({}, "");
    } catch (ak) {
      W = function (al, am, an) {
        return al[am] = an;
      };
    }
    function X(am, an, ao, ap) {
      var ar = an && an.prototype instanceof a4 ? an : a4,
        as = Object.create(ar.prototype),
        at = new ah(ap || []);
      N(as, "_invoke", {
        value: ad(am, ao, at)
      });
      return as;
    }
    function Y(am, an, ao) {
      try {
        return {
          type: "normal",
          arg: am.call(an, ao)
        };
      } catch (as) {
        var aq = {
          type: "throw",
          arg: as
        };
        return aq;
      }
    }
    J.wrap = X;
    var Z = "suspendedStart",
      a0 = "suspendedYield",
      a1 = "executing",
      a2 = "completed",
      a3 = {};
    function a4() {}
    function a5() {}
    function a6() {}
    var a7 = {};
    W(a7, P, function () {
      return this;
    });
    var a8 = Object.getPrototypeOf,
      a9 = a8 && a8(a8(ai([])));
    a9 && a9 !== K && M.call(a9, P) && (a7 = a9);
    a6.prototype = a4.prototype = Object.create(a7);
    var aa = a6.prototype;
    function ab(am) {
      ["next", "throw", "return"].forEach(function (ao) {
        W(am, ao, function (aq) {
          return this._invoke(ao, aq);
        });
      });
    }
    function ac(am, an) {
      function ar(as, at, au, av) {
        var ax = Y(am[as], am, at);
        if ("throw" !== ax.type) {
          var ay = ax.arg,
            az = ay.value;
          return az && "object" == b(az) && M.call(az, "__await") ? an.resolve(az.__await).then(function (aA) {
            ar("next", aA, au, av);
          }, function (aA) {
            ar("throw", aA, au, av);
          }) : an.resolve(az).then(function (aA) {
            ay.value = aA;
            au(ay);
          }, function (aA) {
            return ar("throw", aA, au, av);
          });
        }
        av(ax.arg);
      }
      var ap;
      N(this, "_invoke", {
        value: function (as, at) {
          function aw() {
            return new an(function (ay, az) {
              ar(as, at, ay, az);
            });
          }
          return ap = ap ? ap.then(aw, aw) : aw();
        }
      });
    }
    function ad(am, an, ao) {
      var aq = Z;
      return function (as, at) {
        if (aq === a1) {
          throw Error("Generator is already running");
        }
        if (aq === a2) {
          if ("throw" === as) {
            throw at;
          }
          var av = {
            value: H,
            done: !0
          };
          return av;
        }
        for (ao.method = as, ao.arg = at;;) {
          var aw = ao.delegate;
          if (aw) {
            var ax = ae(aw, ao);
            if (ax) {
              if (ax === a3) {
                continue;
              }
              return ax;
            }
          }
          if ("next" === ao.method) {
            ao.sent = ao._sent = ao.arg;
          } else {
            if ("throw" === ao.method) {
              if (aq === Z) {
                throw aq = a2, ao.arg;
              }
              ao.dispatchException(ao.arg);
            } else {
              "return" === ao.method && ao.abrupt("return", ao.arg);
            }
          }
          aq = a1;
          var ay = Y(am, an, ao);
          if ("normal" === ay.type) {
            if (aq = ao.done ? a2 : a0, ay.arg === a3) {
              continue;
            }
            var az = {};
            az.value = ay.arg;
            az.done = ao.done;
            return az;
          }
          "throw" === ay.type && (aq = a2, ao.method = "throw", ao.arg = ay.arg);
        }
      };
    }
    function ae(am, an) {
      var ao = an.method,
        ap = am.iterator[ao];
      if (ap === H) {
        an.delegate = null;
        "throw" === ao && am.iterator.return && (an.method = "return", an.arg = H, ae(am, an), "throw" === an.method) || "return" !== ao && (an.method = "throw", an.arg = new TypeError("The iterator does not provide a '" + ao + "' method"));
        return a3;
      }
      var aq = Y(ap, am.iterator, an.arg);
      if ("throw" === aq.type) {
        an.method = "throw";
        an.arg = aq.arg;
        an.delegate = null;
        return a3;
      }
      var ar = aq.arg;
      return ar ? ar.done ? (an[am.resultName] = ar.value, an.next = am.nextLoc, "return" !== an.method && (an.method = "next", an.arg = H), an.delegate = null, a3) : ar : (an.method = "throw", an.arg = new TypeError("iterator result is not an object"), an.delegate = null, a3);
    }
    function af(am) {
      var ao = {
        tryLoc: am[0]
      };
      var ap = ao;
      1 in am && (ap.catchLoc = am[1]);
      2 in am && (ap.finallyLoc = am[2], ap.afterLoc = am[3]);
      this.tryEntries.push(ap);
    }
    function ag(am) {
      var an = am.completion || {};
      an.type = "normal";
      delete an.arg;
      am.completion = an;
    }
    function ah(am) {
      var an = {
        tryLoc: "root"
      };
      this.tryEntries = [an];
      am.forEach(af, this);
      this.reset(!0);
    }
    function ai(am) {
      if (am || "" === am) {
        var ao = am[P];
        if (ao) {
          return ao.call(am);
        }
        if ("function" == typeof am.next) {
          return am;
        }
        if (!isNaN(am.length)) {
          var ap = -1,
            aq = function at() {
              for (; ++ap < am.length;) {
                if (M.call(am, ap)) {
                  at.value = am[ap];
                  at.done = !1;
                  return at;
                }
              }
              at.value = H;
              at.done = !0;
              return at;
            };
          return aq.next = aq;
        }
      }
      throw new TypeError(b(am) + " is not iterable");
    }
    a5.prototype = a6;
    N(aa, "constructor", {
      value: a6,
      configurable: !0
    });
    N(a6, "constructor", {
      value: a5,
      configurable: !0
    });
    a5.displayName = W(a6, V, "GeneratorFunction");
    J.isGeneratorFunction = function (am) {
      var an = "function" == typeof am && am.constructor;
      return !!an && (an === a5 || "GeneratorFunction" === (an.displayName || an.name));
    };
    J.mark = function (am) {
      Object.setPrototypeOf ? Object.setPrototypeOf(am, a6) : (am.__proto__ = a6, W(am, V, "GeneratorFunction"));
      am.prototype = Object.create(aa);
      return am;
    };
    J.awrap = function (am) {
      var ao = {
        __await: am
      };
      return ao;
    };
    ab(ac.prototype);
    W(ac.prototype, Q, function () {
      return this;
    });
    J.AsyncIterator = ac;
    J.async = function (am, an, ao, ap, aq) {
      void 0 === aq && (aq = Promise);
      var ar = new ac(X(am, an, ao, ap), aq);
      return J.isGeneratorFunction(an) ? ar : ar.next().then(function (at) {
        return at.done ? at.value : ar.next();
      });
    };
    ab(aa);
    W(aa, V, "Generator");
    W(aa, P, function () {
      return this;
    });
    W(aa, "toString", function () {
      return "[object Generator]";
    });
    J.keys = function (am) {
      var ao = Object(am),
        ap = [];
      for (var aq in ao) ap.push(aq);
      ap.reverse();
      return function as() {
        for (; ap.length;) {
          var au = ap.pop();
          if (au in ao) {
            as.value = au;
            as.done = !1;
            return as;
          }
        }
        as.done = !0;
        return as;
      };
    };
    J.values = ai;
    ah.prototype = {
      constructor: ah,
      reset: function (am) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = H, this.done = !1, this.delegate = null, this.method = "next", this.arg = H, this.tryEntries.forEach(ag), !am) {
          for (var an in this) "t" === an.charAt(0) && M.call(this, an) && !isNaN(+an.slice(1)) && (this[an] = H);
        }
      },
      stop: function () {
        this.done = !0;
        var an = this.tryEntries[0].completion;
        if ("throw" === an.type) {
          throw an.arg;
        }
        return this.rval;
      },
      dispatchException: function (am) {
        if (this.done) {
          throw am;
        }
        var ao = this;
        function av(aw, ax) {
          ar.type = "throw";
          ar.arg = am;
          ao.next = aw;
          ax && (ao.method = "next", ao.arg = H);
          return !!ax;
        }
        for (var ap = this.tryEntries.length - 1; ap >= 0; --ap) {
          var aq = this.tryEntries[ap],
            ar = aq.completion;
          if ("root" === aq.tryLoc) {
            return av("end");
          }
          if (aq.tryLoc <= this.prev) {
            var as = M.call(aq, "catchLoc"),
              at = M.call(aq, "finallyLoc");
            if (as && at) {
              if (this.prev < aq.catchLoc) {
                return av(aq.catchLoc, !0);
              }
              if (this.prev < aq.finallyLoc) {
                return av(aq.finallyLoc);
              }
            } else {
              if (as) {
                if (this.prev < aq.catchLoc) {
                  return av(aq.catchLoc, !0);
                }
              } else {
                if (!at) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aq.finallyLoc) {
                  return av(aq.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (am, an) {
        for (var ao = this.tryEntries.length - 1; ao >= 0; --ao) {
          var ap = this.tryEntries[ao];
          if (ap.tryLoc <= this.prev && M.call(ap, "finallyLoc") && this.prev < ap.finallyLoc) {
            var aq = ap;
            break;
          }
        }
        aq && ("break" === am || "continue" === am) && aq.tryLoc <= an && an <= aq.finallyLoc && (aq = null);
        var ar = aq ? aq.completion : {};
        ar.type = am;
        ar.arg = an;
        return aq ? (this.method = "next", this.next = aq.finallyLoc, a3) : this.complete(ar);
      },
      complete: function (am, an) {
        if ("throw" === am.type) {
          throw am.arg;
        }
        "break" === am.type || "continue" === am.type ? this.next = am.arg : "return" === am.type ? (this.rval = this.arg = am.arg, this.method = "return", this.next = "end") : "normal" === am.type && an && (this.next = an);
        return a3;
      },
      finish: function (am) {
        for (var an = this.tryEntries.length - 1; an >= 0; --an) {
          var ao = this.tryEntries[an];
          if (ao.finallyLoc === am) {
            this.complete(ao.completion, ao.afterLoc);
            ag(ao);
            return a3;
          }
        }
      },
      catch: function (am) {
        for (var an = this.tryEntries.length - 1; an >= 0; --an) {
          var ao = this.tryEntries[an];
          if (ao.tryLoc === am) {
            var ap = ao.completion;
            if ("throw" === ap.type) {
              var aq = ap.arg;
              ag(ao);
            }
            return aq;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (am, an, ao) {
        this.delegate = {
          iterator: ai(am),
          resultName: an,
          nextLoc: ao
        };
        "next" === this.method && (this.arg = H);
        return a3;
      }
    };
    return J;
  }
  function h(F, G, H, I, J, K, L) {
    try {
      var N = F[K](L),
        O = N.value;
    } catch (Q) {
      return void H(Q);
    }
    N.done ? G(O) : Promise.resolve(O).then(I, J);
  }
  function i(F) {
    return function () {
      var H = this,
        I = arguments;
      return new Promise(function (J, K) {
        var M = F.apply(H, I);
        function N(P) {
          h(M, J, K, N, O, "next", P);
        }
        function O(P) {
          h(M, J, K, N, O, "throw", P);
        }
        N(void 0);
      });
    };
  }
  var j = $.getdata("CiXiao") || "",
    k = void 0,
    l = "",
    m = "",
    n = "",
    o = "";
  function p() {
    return q.apply(this, arguments);
  }
  function q() {
    q = i(g().mark(function G() {
      var K, Q, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az;
      return g().wrap(function (aA) {
        for (;;) {
          switch (aA.prev = aA.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aA.next = 6;
                break;
              }
              console.log("先去boxjs填写账号token");
              aA.next = 5;
              return D("先去boxjs填写账号token");
            case 5:
              return aA.abrupt("return");
            case 6:
              aA.next = 8;
              return B();
            case 8:
              k = aA.sent;
              K = j.split(" ");
              Q = c(K);
              aA.prev = 11;
              Q.s();
            case 13:
              if ((V = Q.n()).done) {
                aA.next = 144;
                break;
              }
              W = V.value;
              console.log("随机生成device");
              m = A();
              console.log(m);
              phone_number = W.split("&")[0];
              o = W.split("&")[1];
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取userinfoId");
              X = Date.now().toString() + w(5) + x();
              Y = k.md5("@#@$AXdm123%)(ds".concat(X, "api/UserInfo/GetRedNumberModel"));
              aA.next = 26;
              return t("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(Y, "&stamp=").concat(X));
            case 26:
              if (Z = aA.sent, Z.success) {
                aA.next = 31;
                break;
              }
              aA.next = 30;
              return D("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 30:
              return aA.abrupt("continue", 142);
            case 31:
              n = Z.data.userinfo.Id;
              console.log(n);
              aA.next = 35;
              return r("/ReadActivityTaskList?json=true");
            case 35:
              a0 = aA.sent;
              a1 = c(a0.data);
              aA.prev = 37;
              a1.s();
            case 39:
              if ((a2 = a1.n()).done) {
                aA.next = 107;
                break;
              }
              a3 = a2.value;
              console.log(a3.activityTypeName);
              aA.next = 44;
              return r("/ReadActivityTaskData?yunyingActivityTaskId=".concat(a3.yunyingActivityTaskId, "&json=true"));
            case 44:
              if (a4 = aA.sent, a4) {
                aA.next = 47;
                break;
              }
              return aA.abrupt("continue", 105);
            case 47:
              if (a4.data.totalCount != a4.data.completedCount) {
                aA.next = 50;
                break;
              }
              console.log("已完成");
              return aA.abrupt("continue", 105);
            case 50:
              a5 = c(a4.data.taskDetails);
              aA.prev = 51;
              a5.s();
            case 53:
              if ((a6 = a5.n()).done) {
                aA.next = 74;
                break;
              }
              if (a7 = a6.value, !a7.isComplete) {
                aA.next = 57;
                break;
              }
              return aA.abrupt("continue", 72);
            case 57:
              for (console.log("文章：".concat(a7.title)), a8 = a7.url.split("?")[1], a9 = {}, aa = a8.split("&"), ab = 0, ac = aa.length; ab < ac; ab++) {
                ad = aa[ab].split("=");
                a9[ad[0]] = ad[1];
              }
              ae = Date.now().toString() + w(5) + x();
              af = k.md5("@#@$AXdm123%)(ds".concat(ae, "api/Yunying/ReadArticle"));
              aA.next = 66;
              return t("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(a9.NewspaperGroupId, "&sign=").concat(af, "&stamp=").concat(ae, "&ArticleId=").concat(a7.articleId, "&taskDetailId=").concat(a7.taskDetailId));
            case 66:
              ag = aA.sent;
              console.log(ag.message);
              aA.next = 70;
              return r("/ChceckCompleteTaskDetail?taskDetailId=".concat(a7.taskDetailId, "&yunyingActivityTaskId=").concat(a3.yunyingActivityTaskId, "&round=").concat(a3.round, "&json=true"));
            case 70:
              ah = aA.sent;
              console.log(ah.success);
            case 72:
              aA.next = 53;
              break;
            case 74:
              aA.next = 79;
              break;
            case 76:
              aA.prev = 76;
              aA.t0 = aA.catch(51);
              a5.e(aA.t0);
            case 79:
              aA.prev = 79;
              a5.f();
              return aA.finish(79);
            case 82:
              aA.next = 84;
              return r("/CanDrawPrizeList?json=true");
            case 84:
              ai = aA.sent;
              console.log("拥有".concat(ai.data.length, "次抽奖"));
              aj = c(ai.data);
              aA.prev = 87;
              aj.s();
            case 89:
              if ((ak = aj.n()).done) {
                aA.next = 97;
                break;
              }
              al = ak.value;
              aA.next = 93;
              return r("/DrawAward?awardRecordId=".concat(al.awardRecordId, "&json=true"));
            case 93:
              am = aA.sent;
              1 == am.data.awardType ? (console.log("抽奖获得：".concat(null == am || null === (an = am.data) || void 0 === an ? void 0 : an.award).concat(null == am || null === (ao = am.data) || void 0 === ao ? void 0 : ao.name)), l += "用户：".concat(phone_number, " 抽奖获得：").concat(null == am || null === (ap = am.data) || void 0 === ap ? void 0 : ap.award).concat(null == am || null === (aq = am.data) || void 0 === aq ? void 0 : aq.name, "\n")) : 2 == am.data.awardType ? (console.log("抽奖获得：".concat(null == am || null === (ar = am.data) || void 0 === ar ? void 0 : ar.scoreAward).concat(null == am || null === (as = am.data) || void 0 === as ? void 0 : as.name)), l += "用户：".concat(phone_number, " 抽奖获得：").concat(null == am || null === (at = am.data) || void 0 === at ? void 0 : at.scoreAward).concat(null == am || null === (au = am.data) || void 0 === au ? void 0 : au.name, "\n")) : (console.log("谢谢参与"), l += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 95:
              aA.next = 89;
              break;
            case 97:
              aA.next = 102;
              break;
            case 99:
              aA.prev = 99;
              aA.t1 = aA.catch(87);
              aj.e(aA.t1);
            case 102:
              aA.prev = 102;
              aj.f();
              return aA.finish(102);
            case 105:
              aA.next = 39;
              break;
            case 107:
              aA.next = 112;
              break;
            case 109:
              aA.prev = 109;
              aA.t2 = aA.catch(37);
              a1.e(aA.t2);
            case 112:
              aA.prev = 112;
              a1.f();
              return aA.finish(112);
            case 115:
              aA.next = 117;
              return r("/MyAwardList?page=1&json=true");
            case 117:
              if (av = aA.sent, null == av || !av.data) {
                aA.next = 142;
                break;
              }
              aw = c(av.data);
              aA.prev = 120;
              aw.s();
            case 122:
              if ((ax = aw.n()).done) {
                aA.next = 134;
                break;
              }
              if (ay = ax.value, 1 != ay.awardType || 4 == ay.awardState) {
                aA.next = 132;
                break;
              }
              console.log("奖品：".concat(ay.award).concat(ay.name));
              console.log("领取奖品");
              aA.next = 129;
              return r("/GrantAward?awardRecordId=".concat(ay.awardRecordId, "&json=true"));
            case 129:
              az = aA.sent;
              console.log("领取结果：".concat(az.message));
              l += "用户：".concat(phone_number, " 奖品：").concat(ay.award).concat(ay.name, " 领取结果：").concat(az.message, "\n");
            case 132:
              aA.next = 122;
              break;
            case 134:
              aA.next = 139;
              break;
            case 136:
              aA.prev = 136;
              aA.t3 = aA.catch(120);
              aw.e(aA.t3);
            case 139:
              aA.prev = 139;
              aw.f();
              return aA.finish(139);
            case 142:
              aA.next = 13;
              break;
            case 144:
              aA.next = 149;
              break;
            case 146:
              aA.prev = 146;
              aA.t4 = aA.catch(11);
              Q.e(aA.t4);
            case 149:
              aA.prev = 149;
              Q.f();
              return aA.finish(149);
            case 152:
              if (!l) {
                aA.next = 155;
                break;
              }
              aA.next = 155;
              return D(l);
            case 155:
            case "end":
              return aA.stop();
          }
        }
      }, G, null, [[11, 146, 149, 152], [37, 109, 112, 115], [51, 76, 79, 82], [87, 99, 102, 105], [120, 136, 139, 142]]);
    }));
    return q.apply(this, arguments);
  }
  function r(F) {
    return s.apply(this, arguments);
  }
  function s() {
    s = i(g().mark(function F(G) {
      return g().wrap(function (I) {
        for (;;) {
          switch (I.prev = I.next) {
            case 0:
              return I.abrupt("return", new Promise(function (K) {
                var M = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(G),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": o,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + o + "];x-userinfoId:[" + n + "];x-device:[" + m + "]"
                  }
                };
                $.get(M, function () {
                  var O = i(g().mark(function P(Q, R, S) {
                    return g().wrap(function (T) {
                      for (;;) {
                        switch (T.prev = T.next) {
                          case 0:
                            if (T.prev = 0, !Q) {
                              T.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Q)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            T.next = 9;
                            break;
                          case 6:
                            T.next = 8;
                            return $.wait(2000);
                          case 8:
                            K(JSON.parse(S));
                          case 9:
                            T.next = 14;
                            break;
                          case 11:
                            T.prev = 11;
                            T.t0 = T.catch(0);
                            $.logErr(T.t0, R);
                          case 14:
                            T.prev = 14;
                            K();
                            return T.finish(14);
                          case 17:
                          case "end":
                            return T.stop();
                        }
                      }
                    }, P, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Q, R, S) {
                    return O.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return I.stop();
          }
        }
      }, F);
    }));
    return s.apply(this, arguments);
  }
  function t(F) {
    return u.apply(this, arguments);
  }
  function u() {
    u = i(g().mark(function G(H) {
      return g().wrap(function (J) {
        for (;;) {
          switch (J.prev = J.next) {
            case 0:
              return J.abrupt("return", new Promise(function (L) {
                var N = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(H),
                  headers: {
                    "accept-version": "200",
                    "x-version": "730",
                    version: "7.17.7",
                    "x-token": o,
                    Connection: "Keep-Alive",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/3.11.0"
                  }
                };
                $.get(N, function () {
                  var P = i(g().mark(function Q(R, S, T) {
                    return g().wrap(function (V) {
                      for (;;) {
                        switch (V.prev = V.next) {
                          case 0:
                            if (V.prev = 0, !R) {
                              V.next = 12;
                              break;
                            }
                            if (!T) {
                              V.next = 8;
                              break;
                            }
                            V.next = 5;
                            return $.wait(2000);
                          case 5:
                            L(JSON.parse(T));
                            V.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(R)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            V.next = 15;
                            break;
                          case 12:
                            V.next = 14;
                            return $.wait(2000);
                          case 14:
                            L(JSON.parse(T));
                          case 15:
                            V.next = 20;
                            break;
                          case 17:
                            V.prev = 17;
                            V.t0 = V.catch(0);
                            $.logErr(V.t0, S);
                          case 20:
                            V.prev = 20;
                            L();
                            return V.finish(20);
                          case 23:
                          case "end":
                            return V.stop();
                        }
                      }
                    }, Q, null, [[0, 17, 20, 23]]);
                  }));
                  return function (R, S, T) {
                    return P.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return J.stop();
          }
        }
      }, G);
    }));
    return u.apply(this, arguments);
  }
  function v() {
    var F = new Date(),
      G = function (N) {
        return N.toString().padStart(2, "0");
      },
      H = F.getFullYear(),
      I = G(F.getMonth() + 1),
      J = G(F.getDate()),
      K = G(F.getHours()),
      L = G(F.getMinutes()),
      M = G(F.getSeconds());
    return "".concat(H).concat(I).concat(J).concat(K).concat(L).concat(M);
  }
  function w(F) {
    for (var G = "abcdefghijklmnopqrstuvwxyz0123456789", H = "", I = 0; I < F; I++) {
      H += G.charAt(Math.floor(36 * Math.random()));
    }
    return H;
  }
  function x() {
    var F = v();
    F || (F = w(8));
    return w(2) + F.substring(3) + w(3);
  }
  function y() {
    for (var F = "", G = 0; G < 16; G++) {
      var H = Math.floor(16 * Math.random());
      F += "0123456789abcdef"[H];
    }
    return F;
  }
  function z() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (F) {
      var G = 16 * Math.random() | 0,
        H = "x" === F ? G : 3 & G | 8;
      return H.toString(16);
    });
  }
  function A() {
    var F = y(),
      G = z().replace(/-/g, "");
    CryptoJS = k.createCryptoJS();
    return CryptoJS.SHA1("".concat(F, "|unknown|").concat(G)).toString().toUpperCase();
  }
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function F() {
      var H;
      return g().wrap(function I(J) {
        for (;;) {
          switch (J.prev = J.next) {
            case 0:
              if (H = $.getdata("Utils_Code") || "", !H || !Object.keys(H).length) {
                J.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(H);
              return J.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return J.abrupt("return", new Promise(function () {
                var L = i(g().mark(function M(N) {
                  return g().wrap(function O(P) {
                    for (;;) {
                      switch (P.prev = P.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (R) {
                            $.setdata(R, "Utils_Code");
                            eval(R);
                            console.log("✅ Utils加载成功, 请继续");
                            N(creatUtils());
                          });
                        case 1:
                        case "end":
                          return P.stop();
                      }
                    }
                  }, M);
                }));
                return function (N) {
                  return L.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return J.stop();
          }
        }
      }, F);
    }));
    return C.apply(this, arguments);
  }
  function D(F) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function G(H) {
      return g().wrap(function (K) {
        for (;;) {
          switch (K.prev = K.next) {
            case 0:
              $.msg($.name, "", H);
            case 1:
            case "end":
              return K.stop();
          }
        }
      }, G);
    }));
    return E.apply(this, arguments);
  }
  i(g().mark(function F() {
    return g().wrap(function (G) {
      for (;;) {
        switch (G.prev = G.next) {
          case 0:
            G.next = 2;
            return p();
          case 2:
          case "end":
            return G.stop();
        }
      }
    }, F);
  }))().catch(function (G) {
    $.log(G);
  }).finally(function () {
    $.done({});
  });
})();