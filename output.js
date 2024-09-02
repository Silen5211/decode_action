//Mon Sep 02 2024 08:14:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(A) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (C) {
      return typeof C;
    } : function (C) {
      return C && "function" == typeof Symbol && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
    };
    return b(A);
  }
  function c(A, B) {
    var D = "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
    if (!D) {
      if (Array.isArray(A) || (D = d(A)) || B && A && "number" == typeof A.length) {
        D && (A = D);
        var E = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            var L = {
              done: !0
            };
            return E >= A.length ? L : {
              done: !1,
              value: A[E++]
            };
          },
          e: function (K) {
            throw K;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var G,
      H = !0,
      I = !1;
    return {
      s: function () {
        D = D.call(A);
      },
      n: function () {
        var L = D.next();
        H = L.done;
        return L;
      },
      e: function (L) {
        I = !0;
        G = L;
      },
      f: function () {
        try {
          H || null == D.return || D.return();
        } finally {
          if (I) {
            throw G;
          }
        }
      }
    };
  }
  function d(A, B) {
    if (A) {
      if ("string" == typeof A) {
        return e(A, B);
      }
      var D = {}.toString.call(A).slice(8, -1);
      "Object" === D && A.constructor && (D = A.constructor.name);
      return "Map" === D || "Set" === D ? Array.from(A) : "Arguments" === D || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D) ? e(A, B) : void 0;
    }
  }
  function e(A, B) {
    (null == B || B > A.length) && (B = A.length);
    for (var D = 0, E = Array(B); D < B; D++) {
      E[D] = A[D];
    }
    return E;
  }
  function f() {
    'use strict';

    f = function () {
      return D;
    };
    var C,
      D = {},
      F = Object.prototype,
      G = F.hasOwnProperty,
      H = Object.defineProperty || function (af, ag, ah) {
        af[ag] = ah.value;
      },
      J = "function" == typeof Symbol ? Symbol : {},
      K = J.iterator || "@@iterator",
      M = J.asyncIterator || "@@asyncIterator",
      Q = J.toStringTag || "@@toStringTag";
    function R(af, ag, ah) {
      var ai = {
        value: ah,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(af, ag, ai);
      return af[ag];
    }
    try {
      R({}, "");
    } catch (ag) {
      R = function (ah, ai, aj) {
        return ah[ai] = aj;
      };
    }
    function T(ai, aj, ak, al) {
      var ao = aj && aj.prototype instanceof a0 ? aj : a0,
        ap = Object.create(ao.prototype),
        aq = new ad(al || []);
      H(ap, "_invoke", {
        value: a9(ai, ak, aq)
      });
      return ap;
    }
    function U(ai, aj, ak) {
      try {
        return {
          type: "normal",
          arg: ai.call(aj, ak)
        };
      } catch (ao) {
        var al = {
          type: "throw",
          arg: ao
        };
        return al;
      }
    }
    D.wrap = T;
    var V = "suspendedStart",
      W = "suspendedYield",
      X = "executing",
      Y = "completed",
      Z = {};
    function a0() {}
    function a1() {}
    function a2() {}
    var a3 = {};
    R(a3, K, function () {
      return this;
    });
    var a4 = Object.getPrototypeOf,
      a5 = a4 && a4(a4(ae([])));
    a5 && a5 !== F && G.call(a5, K) && (a3 = a5);
    a2.prototype = a0.prototype = Object.create(a3);
    var a6 = a2.prototype;
    function a7(ai) {
      ["next", "throw", "return"].forEach(function (al) {
        R(ai, al, function (an) {
          return this._invoke(al, an);
        });
      });
    }
    function a8(ai, aj) {
      function an(ao, ap, aq, ar) {
        var at = U(ai[ao], ai, ap);
        if ("throw" !== at.type) {
          var au = at.arg,
            av = au.value;
          return av && "object" == b(av) && G.call(av, "__await") ? aj.resolve(av.__await).then(function (aw) {
            an("next", aw, aq, ar);
          }, function (aw) {
            an("throw", aw, aq, ar);
          }) : aj.resolve(av).then(function (aw) {
            au.value = aw;
            aq(au);
          }, function (aw) {
            return an("throw", aw, aq, ar);
          });
        }
        ar(at.arg);
      }
      var al;
      H(this, "_invoke", {
        value: function (ao, ap) {
          function as() {
            return new aj(function (av, aw) {
              an(ao, ap, av, aw);
            });
          }
          return al = al ? al.then(as, as) : as();
        }
      });
    }
    function a9(ai, aj, ak) {
      var am = V;
      return function (an, ao) {
        if (am === X) {
          throw Error("Generator is already running");
        }
        if (am === Y) {
          if ("throw" === an) {
            throw ao;
          }
          var aq = {
            value: C,
            done: !0
          };
          return aq;
        }
        for (ak.method = an, ak.arg = ao;;) {
          var ar = ak.delegate;
          if (ar) {
            var as = aa(ar, ak);
            if (as) {
              if (as === Z) {
                continue;
              }
              return as;
            }
          }
          if ("next" === ak.method) {
            ak.sent = ak._sent = ak.arg;
          } else {
            if ("throw" === ak.method) {
              if (am === V) {
                throw am = Y, ak.arg;
              }
              ak.dispatchException(ak.arg);
            } else {
              "return" === ak.method && ak.abrupt("return", ak.arg);
            }
          }
          am = X;
          var at = U(ai, aj, ak);
          if ("normal" === at.type) {
            if (am = ak.done ? Y : W, at.arg === Z) {
              continue;
            }
            var au = {};
            au.value = at.arg;
            au.done = ak.done;
            return au;
          }
          "throw" === at.type && (am = Y, ak.method = "throw", ak.arg = at.arg);
        }
      };
    }
    function aa(ai, aj) {
      var an = aj.method,
        ao = ai.iterator[an];
      if (ao === C) {
        aj.delegate = null;
        "throw" === an && ai.iterator.return && (aj.method = "return", aj.arg = C, aa(ai, aj), "throw" === aj.method) || "return" !== an && (aj.method = "throw", aj.arg = new TypeError("The iterator does not provide a '" + an + "' method"));
        return Z;
      }
      var am = U(ao, ai.iterator, aj.arg);
      if ("throw" === am.type) {
        aj.method = "throw";
        aj.arg = am.arg;
        aj.delegate = null;
        return Z;
      }
      var ap = am.arg;
      return ap ? ap.done ? (aj[ai.resultName] = ap.value, aj.next = ai.nextLoc, "return" !== aj.method && (aj.method = "next", aj.arg = C), aj.delegate = null, Z) : ap : (aj.method = "throw", aj.arg = new TypeError("iterator result is not an object"), aj.delegate = null, Z);
    }
    function ab(ai) {
      var ak = {};
      ak.tryLoc = ai[0];
      var al = ak;
      1 in ai && (al.catchLoc = ai[1]);
      2 in ai && (al.finallyLoc = ai[2], al.afterLoc = ai[3]);
      this.tryEntries.push(al);
    }
    function ac(ai) {
      var aj = ai.completion || {};
      aj.type = "normal";
      delete aj.arg;
      ai.completion = aj;
    }
    function ad(ai) {
      var ak = {};
      ak.tryLoc = "root";
      this.tryEntries = [ak];
      ai.forEach(ab, this);
      this.reset(!0);
    }
    function ae(ai) {
      if (ai || "" === ai) {
        var ak = ai[K];
        if (ak) {
          return ak.call(ai);
        }
        if ("function" == typeof ai.next) {
          return ai;
        }
        if (!isNaN(ai.length)) {
          var al = -1,
            am = function ao() {
              for (; ++al < ai.length;) {
                if (G.call(ai, al)) {
                  ao.value = ai[al];
                  ao.done = !1;
                  return ao;
                }
              }
              ao.value = C;
              ao.done = !0;
              return ao;
            };
          return am.next = am;
        }
      }
      throw new TypeError(b(ai) + " is not iterable");
    }
    a1.prototype = a2;
    H(a6, "constructor", {
      value: a2,
      configurable: !0
    });
    H(a2, "constructor", {
      value: a1,
      configurable: !0
    });
    a1.displayName = R(a2, Q, "GeneratorFunction");
    D.isGeneratorFunction = function (ai) {
      var aj = "function" == typeof ai && ai.constructor;
      return !!aj && (aj === a1 || "GeneratorFunction" === (aj.displayName || aj.name));
    };
    D.mark = function (ai) {
      Object.setPrototypeOf ? Object.setPrototypeOf(ai, a2) : (ai.__proto__ = a2, R(ai, Q, "GeneratorFunction"));
      ai.prototype = Object.create(a6);
      return ai;
    };
    D.awrap = function (ai) {
      var aj = {};
      aj.__await = ai;
      return aj;
    };
    a7(a8.prototype);
    R(a8.prototype, M, function () {
      return this;
    });
    D.AsyncIterator = a8;
    D.async = function (ai, aj, ak, al, am) {
      void 0 === am && (am = Promise);
      var an = new a8(T(ai, aj, ak, al), am);
      return D.isGeneratorFunction(aj) ? an : an.next().then(function (ao) {
        return ao.done ? ao.value : an.next();
      });
    };
    a7(a6);
    R(a6, Q, "Generator");
    R(a6, K, function () {
      return this;
    });
    R(a6, "toString", function () {
      return "[object Generator]";
    });
    D.keys = function (ai) {
      var ak = Object(ai),
        al = [];
      for (var am in ak) al.push(am);
      al.reverse();
      return function an() {
        for (; al.length;) {
          var ap = al.pop();
          if (ap in ak) {
            an.value = ap;
            an.done = !1;
            return an;
          }
        }
        an.done = !0;
        return an;
      };
    };
    D.values = ae;
    ad.prototype = {
      constructor: ad,
      reset: function (ai) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = C, this.done = !1, this.delegate = null, this.method = "next", this.arg = C, this.tryEntries.forEach(ac), !ai) {
          for (var ak in this) "t" === ak.charAt(0) && G.call(this, ak) && !isNaN(+ak.slice(1)) && (this[ak] = C);
        }
      },
      stop: function () {
        this.done = !0;
        var ai = this.tryEntries[0].completion;
        if ("throw" === ai.type) {
          throw ai.arg;
        }
        return this.rval;
      },
      dispatchException: function (ai) {
        if (this.done) {
          throw ai;
        }
        var ak = this;
        function ar(as, at) {
          an.type = "throw";
          an.arg = ai;
          ak.next = as;
          at && (ak.method = "next", ak.arg = C);
          return !!at;
        }
        for (var al = this.tryEntries.length - 1; al >= 0; --al) {
          var am = this.tryEntries[al],
            an = am.completion;
          if ("root" === am.tryLoc) {
            return ar("end");
          }
          if (am.tryLoc <= this.prev) {
            var ao = G.call(am, "catchLoc"),
              ap = G.call(am, "finallyLoc");
            if (ao && ap) {
              if (this.prev < am.catchLoc) {
                return ar(am.catchLoc, !0);
              }
              if (this.prev < am.finallyLoc) {
                return ar(am.finallyLoc);
              }
            } else {
              if (ao) {
                if (this.prev < am.catchLoc) {
                  return ar(am.catchLoc, !0);
                }
              } else {
                if (!ap) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < am.finallyLoc) {
                  return ar(am.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (ai, aj) {
        for (var am = this.tryEntries.length - 1; am >= 0; --am) {
          var an = this.tryEntries[am];
          if (an.tryLoc <= this.prev && G.call(an, "finallyLoc") && this.prev < an.finallyLoc) {
            var ao = an;
            break;
          }
        }
        ao && ("break" === ai || "continue" === ai) && ao.tryLoc <= aj && aj <= ao.finallyLoc && (ao = null);
        var ap = ao ? ao.completion : {};
        ap.type = ai;
        ap.arg = aj;
        return ao ? (this.method = "next", this.next = ao.finallyLoc, Z) : this.complete(ap);
      },
      complete: function (ai, aj) {
        if ("throw" === ai.type) {
          throw ai.arg;
        }
        "break" === ai.type || "continue" === ai.type ? this.next = ai.arg : "return" === ai.type ? (this.rval = this.arg = ai.arg, this.method = "return", this.next = "end") : "normal" === ai.type && aj && (this.next = aj);
        return Z;
      },
      finish: function (ai) {
        for (var ak = this.tryEntries.length - 1; ak >= 0; --ak) {
          var al = this.tryEntries[ak];
          if (al.finallyLoc === ai) {
            this.complete(al.completion, al.afterLoc);
            ac(al);
            return Z;
          }
        }
      },
      catch: function (ai) {
        for (var aj = this.tryEntries.length - 1; aj >= 0; --aj) {
          var ak = this.tryEntries[aj];
          if (ak.tryLoc === ai) {
            var al = ak.completion;
            if ("throw" === al.type) {
              var am = al.arg;
              ac(ak);
            }
            return am;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ai, aj, ak) {
        this.delegate = {
          iterator: ae(ai),
          resultName: aj,
          nextLoc: ak
        };
        "next" === this.method && (this.arg = C);
        return Z;
      }
    };
    return D;
  }
  function g(A, B, C, D, E, F, G) {
    try {
      var I = A[F](G),
        J = I.value;
    } catch (L) {
      return void C(L);
    }
    I.done ? B(J) : Promise.resolve(J).then(D, E);
  }
  function h(A) {
    return function () {
      var C = this,
        D = arguments;
      return new Promise(function (E, F) {
        var H = A.apply(C, D);
        function I(K) {
          g(H, E, F, I, J, "next", K);
        }
        function J(K) {
          g(H, E, F, I, J, "throw", K);
        }
        I(void 0);
      });
    };
  }
  var i = ($.isNode() ? process.env.HaiXing : $.getdata("HaiXing")) || "",
    j = void 0,
    k = "",
    l = [100, 101, 102],
    m = "";
  function n() {
    return o.apply(this, arguments);
  }
  function o() {
    o = h(f().mark(function B() {
      var C, D, F, G, H, I, J, K, M, N, O, P, Q, R, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5;
      return f().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), i) {
                a6.next = 6;
                break;
              }
              console.log("先去boxjs填写token");
              a6.next = 5;
              return y("先去boxjs填写token");
            case 5:
              return a6.abrupt("return");
            case 6:
              a6.next = 8;
              return w();
            case 8:
              j = a6.sent;
              C = i.split(" ");
              D = c(C);
              a6.prev = 11;
              D.s();
            case 13:
              if ((F = D.n()).done) {
                a6.next = 111;
                break;
              }
              var a7 = {};
              a7.taskClass = l[0];
              G = F.value;
              id = G.split("&")[0];
              k = G.split("&")[1];
              console.log("用户：".concat(id, "开始任务"));
              a6.next = 20;
              return p("/integral/task/detail/list", a7);
            case 20:
              if (H = a6.sent, 200 == H.code) {
                a6.next = 26;
                break;
              }
              console.log("用户：".concat(id, " ").concat(H.msg));
              a6.next = 25;
              return y("用户：".concat(id, " ").concat(H.msg));
            case 25:
              return a6.abrupt("continue", 109);
            case 26:
              I = c(l);
              a6.prev = 27;
              I.s();
            case 29:
              if ((J = I.n()).done) {
                a6.next = 93;
                break;
              }
              K = J.value;
              a6.next = 33;
              return p("/integral/task/detail/list", {
                taskClass: K
              });
            case 33:
              M = a6.sent;
              M.data && (M = JSON.parse(decodeURIComponent(M.data)));
              N = c(M.taskRspList);
              a6.prev = 36;
              N.s();
            case 38:
              if ((O = N.n()).done) {
                a6.next = 83;
                break;
              }
              if (P = O.value, "参与抽奖" != P.taskName) {
                a6.next = 62;
                break;
              }
              for (Q = P.appUrl, R = Q.split("?")[1], T = {}, U = R.split("&"), V = 0, W = U.length; V < W; V++) {
                X = U[V].split("=");
                T[X[0]] = X[1];
              }
              Y = T.activityCode;
              a6.next = 49;
              return p("/integral/activity/draw/home", {
                activityCode: Y
              });
            case 49:
              Z = a6.sent;
              Z.data && (Z = JSON.parse(decodeURIComponent(Z.data)));
              a0 = 0;
            case 52:
              if (!(a0 < Z.feeLuckDrawNum)) {
                a6.next = 60;
                break;
              }
              var a8 = {};
              a8.activityCode = Y;
              a6.next = 55;
              return p("/integral/activity/draw", a8);
            case 55:
              a1 = a6.sent;
              a1.data ? (a1 = JSON.parse(decodeURIComponent(a1.data)), console.log("抽奖获得：".concat(a1.name))) : console.log(a1.msg);
            case 57:
              a0++;
              a6.next = 52;
              break;
            case 60:
              a6.next = 81;
              break;
            case 62:
              if ("完成签到" != P.taskName) {
                a6.next = 69;
                break;
              }
              a6.next = 65;
              return p("/integral/sign/day", {});
            case 65:
              a2 = a6.sent;
              a2.data ? (a2 = JSON.parse(decodeURIComponent(a2.data)), console.log("签到成功，获得".concat(a2.integralNum, "积分"))) : console.log(a2.msg);
              a6.next = 81;
              break;
            case 69:
              if (1 !== P.completeStatus) {
                a6.next = 72;
                break;
              }
              console.log("".concat(P.taskName, "：已完成"));
              return a6.abrupt("continue", 81);
            case 72:
              a3 = P.alreadyComplete;
            case 73:
              if (!(a3 < P.allNum)) {
                a6.next = 81;
                break;
              }
              var a9 = {};
              a9.dataId = "";
              a9.taskType = P.taskType;
              a6.next = 76;
              return r("/integral/task/type", a9);
            case 76:
              a4 = a6.sent;
              console.log("".concat(P.taskName, "：").concat(a4.msg));
            case 78:
              a3++;
              a6.next = 73;
              break;
            case 81:
              a6.next = 38;
              break;
            case 83:
              a6.next = 88;
              break;
            case 85:
              a6.prev = 85;
              a6.t0 = a6.catch(36);
              N.e(a6.t0);
            case 88:
              a6.prev = 88;
              N.f();
              return a6.finish(88);
            case 91:
              a6.next = 29;
              break;
            case 93:
              a6.next = 98;
              break;
            case 95:
              a6.prev = 95;
              a6.t1 = a6.catch(27);
              I.e(a6.t1);
            case 98:
              a6.prev = 98;
              I.f();
              return a6.finish(98);
            case 101:
              var aa = {};
              aa.taskClass = l[0];
              console.log("————————————");
              console.log("积分查询");
              a6.next = 105;
              return p("/integral/task/detail/list", aa);
            case 105:
              a5 = a6.sent;
              a5.data && (a5 = JSON.parse(decodeURIComponent(a5.data)));
              console.log("拥有积分: ".concat(a5.integralNum, "\n"));
              m += "用户：".concat(id, " 拥有积分: ").concat(a5.integralNum, "\n");
            case 109:
              a6.next = 13;
              break;
            case 111:
              a6.next = 116;
              break;
            case 113:
              a6.prev = 113;
              a6.t2 = a6.catch(11);
              D.e(a6.t2);
            case 116:
              a6.prev = 116;
              D.f();
              return a6.finish(116);
            case 119:
              if (!m) {
                a6.next = 122;
                break;
              }
              a6.next = 122;
              return y(m);
            case 122:
            case "end":
              return a6.stop();
          }
        }
      }, B, null, [[11, 113, 116, 119], [27, 95, 98, 101], [36, 85, 88, 91]]);
    }));
    return o.apply(this, arguments);
  }
  function p(A) {
    return q.apply(this, arguments);
  }
  function q() {
    q = h(f().mark(function B(C) {
      var D,
        E = arguments;
      return f().wrap(function (F) {
        for (;;) {
          switch (F.prev = F.next) {
            case 0:
              D = E.length > 1 && void 0 !== E[1] ? E[1] : {};
              return F.abrupt("return", new Promise(function (H) {
                var J = {
                  url: "https://hxapi-prod.mhaixing.cn".concat(C),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    appversion: "2.6.00",
                    accept: "application/json, text/plain, */*",
                    channelcode: "hxxiaomi",
                    token: k,
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36",
                    clienttype: "3",
                    "content-type": "application/json;charset=UTF-8",
                    origin: "https://app-web.yooucai.store",
                    "x-requested-with": "com.mhaixing.hx",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    referer: "https://app-web.yooucai.store/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify({
                    content: u(JSON.stringify(D))
                  })
                };
                $.post(J, function () {
                  var K = h(f().mark(function L(M, N, O) {
                    return f().wrap(function (Q) {
                      for (;;) {
                        switch (Q.prev = Q.next) {
                          case 0:
                            if (Q.prev = 0, !M) {
                              Q.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(M)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            Q.next = 9;
                            break;
                          case 6:
                            Q.next = 8;
                            return $.wait(2000);
                          case 8:
                            H(JSON.parse(O));
                          case 9:
                            Q.next = 14;
                            break;
                          case 11:
                            Q.prev = 11;
                            Q.t0 = Q.catch(0);
                            $.logErr(Q.t0, N);
                          case 14:
                            Q.prev = 14;
                            H();
                            return Q.finish(14);
                          case 17:
                          case "end":
                            return Q.stop();
                        }
                      }
                    }, L, null, [[0, 11, 14, 17]]);
                  }));
                  return function (M, N, O) {
                    return K.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return F.stop();
          }
        }
      }, B);
    }));
    return q.apply(this, arguments);
  }
  function r(A) {
    return s.apply(this, arguments);
  }
  function s() {
    s = h(f().mark(function B(C) {
      var E,
        F = arguments;
      return f().wrap(function (G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              E = F.length > 1 && void 0 !== F[1] ? F[1] : {};
              return G.abrupt("return", new Promise(function (I) {
                var K = {
                  appversion: "2.6.00",
                  channelcode: "hxxiaomi",
                  token: k,
                  "user-agent": "okhttp/5.0.0-alpha.2",
                  clienttype: "2",
                  "content-type": "application/json;charset=UTF-8",
                  "accept-encoding": "gzip"
                };
                var L = {
                  url: "https://hxapi-prod.mhaixing.cn".concat(C),
                  headers: K,
                  body: JSON.stringify({
                    content: v(JSON.stringify(E))
                  })
                };
                $.post(L, function () {
                  var N = h(f().mark(function O(P, Q, R) {
                    return f().wrap(function (T) {
                      for (;;) {
                        switch (T.prev = T.next) {
                          case 0:
                            if (T.prev = 0, !P) {
                              T.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(P)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            T.next = 9;
                            break;
                          case 6:
                            T.next = 8;
                            return $.wait(2000);
                          case 8:
                            I(JSON.parse(R));
                          case 9:
                            T.next = 14;
                            break;
                          case 11:
                            T.prev = 11;
                            T.t0 = T.catch(0);
                            $.logErr(T.t0, Q);
                          case 14:
                            T.prev = 14;
                            I();
                            return T.finish(14);
                          case 17:
                          case "end":
                            return T.stop();
                        }
                      }
                    }, O, null, [[0, 11, 14, 17]]);
                  }));
                  return function (P, Q, R) {
                    return N.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return G.stop();
          }
        }
      }, B);
    }));
    return s.apply(this, arguments);
  }
  function u(A) {
    var B = new (j.loadJSEncrypt())();
    B.setPublicKey("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2bQf7RFl40YXkXRwGqGhU4OVzVA/8PMXylw7zLIlQd3ksvagUTPtd024AbjWgbNaVzMJBmFHxq9Y3YFgsf7JYiCHKtIVaHMLqh9RX1vIEYzqbbLOX3tpmpqGQlCThrqLHit7Di1NP8DlF/t5Xp7jP8HfnyEuJ+xHX0xjiLZ9WiB9WkHc1SIZqsg/pceaAYishg3I4kUI/a0QeO1/zJRv44JETGkGTxgJI1PQK4hCawjFeZfnLinp7udHS/3V+f0EHJoWO7EdfN7hd/YgTdmga7jR0VsjQejbV6c1O9eVwUOEwz2xNNqyV5zgH6gLlEOIBRfBnqB1rcjO+Kqg3fbeQwIDAQAB");
    var C = B.encrypt(A);
    return C;
  }
  function v(A) {
    var B = new (j.loadJSEncrypt())();
    B.setPublicKey("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv+lowpA9zvejDkfs9l8PI7tsPoZgpN44tgenEWihhWryjxTmgNgSgaAoU+sWslqadobTk0egmFQIMQ7DPqjyjo5BF5J/T3VxlYVTyh8todJAvS2oUnEu74ORPAFqN7/x8FAGrEqngUO8+BUk7tnldPLt9h/GM88n1VM3ISXEbdiRnlkF32Jn8LJm8AbOAP3hSOXMuhjs/HfUWL2ppqhZZxEr2T42IKiCWLRbMF98Ng72PBj7Rooa5I8qMJ/GkFlde724vk1YWRq8BzKM7yYvZAwte9/hLLtTz4DsC31vInAmeH2j7zDinhqBuaAqWz3thaRnJJrdPiWNKNBBWU6RpwIDAQAB");
    var C = B.encrypt(A);
    return C;
  }
  function w() {
    return x.apply(this, arguments);
  }
  function x() {
    x = h(f().mark(function B() {
      var D;
      return f().wrap(function E(F) {
        for (;;) {
          switch (F.prev = F.next) {
            case 0:
              if (D = $.getdata("Utils_Code") || "", !D || !Object.keys(D).length) {
                F.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(D);
              return F.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return F.abrupt("return", new Promise(function () {
                var J = h(f().mark(function K(L) {
                  return f().wrap(function N(O) {
                    for (;;) {
                      switch (O.prev = O.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (P) {
                            $.setdata(P, "Utils_Code");
                            eval(P);
                            console.log("✅ Utils加载成功, 请继续");
                            L(creatUtils());
                          });
                        case 1:
                        case "end":
                          return O.stop();
                      }
                    }
                  }, K);
                }));
                return function (L) {
                  return J.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return F.stop();
          }
        }
      }, B);
    }));
    return x.apply(this, arguments);
  }
  function y(A) {
    return z.apply(this, arguments);
  }
  function z() {
    z = h(f().mark(function B(C) {
      return f().wrap(function (F) {
        for (;;) {
          switch (F.prev = F.next) {
            case 0:
              if (!$.isNode()) {
                F.next = 5;
                break;
              }
              F.next = 3;
              return notify.sendNotify($.name, C);
            case 3:
              F.next = 6;
              break;
            case 5:
              $.msg($.name, "", C);
            case 6:
            case "end":
              return F.stop();
          }
        }
      }, B);
    }));
    return z.apply(this, arguments);
  }
  h(f().mark(function A() {
    return f().wrap(function (B) {
      for (;;) {
        switch (B.prev = B.next) {
          case 0:
            B.next = 2;
            return n();
          case 2:
          case "end":
            return B.stop();
        }
      }
    }, A);
  }))().catch(function (B) {
    $.log(B);
  }).finally(function () {
    $.done({});
  });
})();