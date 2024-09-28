//Sat Sep 28 2024 08:21:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(V) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (X) {
      return typeof X;
    } : function (X) {
      return X && "function" == typeof Symbol && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X;
    };
    return b(V);
  }
  function c(V, W) {
    var Y = "undefined" != typeof Symbol && V[Symbol.iterator] || V["@@iterator"];
    if (!Y) {
      if (Array.isArray(V) || (Y = d(V)) || W && V && "number" == typeof V.length) {
        Y && (V = Y);
        var Z = 0,
          a0 = function () {};
        return {
          s: a0,
          n: function () {
            var a6 = {};
            a6.done = !0;
            return Z >= V.length ? a6 : {
              done: !1,
              value: V[Z++]
            };
          },
          e: function (a6) {
            throw a6;
          },
          f: a0
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a1,
      a2 = !0,
      a3 = !1;
    return {
      s: function () {
        Y = Y.call(V);
      },
      n: function () {
        var a7 = Y.next();
        a2 = a7.done;
        return a7;
      },
      e: function (a7) {
        a3 = !0;
        a1 = a7;
      },
      f: function () {
        try {
          a2 || null == Y.return || Y.return();
        } finally {
          if (a3) {
            throw a1;
          }
        }
      }
    };
  }
  function d(V, W) {
    if (V) {
      if ("string" == typeof V) {
        return f(V, W);
      }
      var X = {}.toString.call(V).slice(8, -1);
      "Object" === X && V.constructor && (X = V.constructor.name);
      return "Map" === X || "Set" === X ? Array.from(V) : "Arguments" === X || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X) ? f(V, W) : void 0;
    }
  }
  function f(V, W) {
    (null == W || W > V.length) && (W = V.length);
    for (var X = 0, Y = Array(W); X < W; X++) {
      Y[X] = V[X];
    }
    return Y;
  }
  function g() {
    'use strict';

    g = function () {
      return X;
    };
    var W,
      X = {},
      Y = Object.prototype,
      Z = Y.hasOwnProperty,
      a0 = Object.defineProperty || function (as, at, au) {
        as[at] = au.value;
      },
      a1 = "function" == typeof Symbol ? Symbol : {},
      a2 = a1.iterator || "@@iterator",
      a3 = a1.asyncIterator || "@@asyncIterator",
      a4 = a1.toStringTag || "@@toStringTag";
    function a5(as, at, au) {
      var av = {
        value: au,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(as, at, av);
      return as[at];
    }
    try {
      a5({}, "");
    } catch (at) {
      a5 = function (au, av, aw) {
        return au[av] = aw;
      };
    }
    function a6(av, aw, ax, ay) {
      var az = aw && aw.prototype instanceof ad ? aw : ad,
        aA = Object.create(az.prototype),
        aB = new aq(ay || []);
      a0(aA, "_invoke", {
        value: am(av, ax, aB)
      });
      return aA;
    }
    function a7(av, aw, ax) {
      try {
        return {
          type: "normal",
          arg: av.call(aw, ax)
        };
      } catch (aC) {
        var az = {
          type: "throw",
          arg: aC
        };
        return az;
      }
    }
    X.wrap = a6;
    var a8 = "suspendedStart",
      a9 = "suspendedYield",
      aa = "executing",
      ab = "completed",
      ac = {};
    function ad() {}
    function ae() {}
    function af() {}
    var ag = {};
    a5(ag, a2, function () {
      return this;
    });
    var ah = Object.getPrototypeOf,
      ai = ah && ah(ah(ar([])));
    ai && ai !== Y && Z.call(ai, a2) && (ag = ai);
    af.prototype = ad.prototype = Object.create(ag);
    var aj = af.prototype;
    function ak(av) {
      ["next", "throw", "return"].forEach(function (ay) {
        a5(av, ay, function (aA) {
          return this._invoke(ay, aA);
        });
      });
    }
    function al(av, aw) {
      function aA(aB, aC, aD, aE) {
        var aG = a7(av[aB], av, aC);
        if ("throw" !== aG.type) {
          var aH = aG.arg,
            aI = aH.value;
          return aI && "object" == b(aI) && Z.call(aI, "__await") ? aw.resolve(aI.__await).then(function (aK) {
            aA("next", aK, aD, aE);
          }, function (aK) {
            aA("throw", aK, aD, aE);
          }) : aw.resolve(aI).then(function (aK) {
            aH.value = aK;
            aD(aH);
          }, function (aK) {
            return aA("throw", aK, aD, aE);
          });
        }
        aE(aG.arg);
      }
      var ay;
      a0(this, "_invoke", {
        value: function (aB, aC) {
          function aF() {
            return new aw(function (aH, aI) {
              aA(aB, aC, aH, aI);
            });
          }
          return ay = ay ? ay.then(aF, aF) : aF();
        }
      });
    }
    function am(av, aw, ax) {
      var az = a8;
      return function (aB, aC) {
        if (az === aa) {
          throw Error("Generator is already running");
        }
        if (az === ab) {
          if ("throw" === aB) {
            throw aC;
          }
          var aE = {
            value: W,
            done: !0
          };
          return aE;
        }
        for (ax.method = aB, ax.arg = aC;;) {
          var aF = ax.delegate;
          if (aF) {
            var aG = an(aF, ax);
            if (aG) {
              if (aG === ac) {
                continue;
              }
              return aG;
            }
          }
          if ("next" === ax.method) {
            ax.sent = ax._sent = ax.arg;
          } else {
            if ("throw" === ax.method) {
              if (az === a8) {
                throw az = ab, ax.arg;
              }
              ax.dispatchException(ax.arg);
            } else {
              "return" === ax.method && ax.abrupt("return", ax.arg);
            }
          }
          az = aa;
          var aH = a7(av, aw, ax);
          if ("normal" === aH.type) {
            if (az = ax.done ? ab : a9, aH.arg === ac) {
              continue;
            }
            var aI = {};
            aI.value = aH.arg;
            aI.done = ax.done;
            return aI;
          }
          "throw" === aH.type && (az = ab, ax.method = "throw", ax.arg = aH.arg);
        }
      };
    }
    function an(av, aw) {
      var aB = aw.method,
        aC = av.iterator[aB];
      if (aC === W) {
        aw.delegate = null;
        "throw" === aB && av.iterator.return && (aw.method = "return", aw.arg = W, an(av, aw), "throw" === aw.method) || "return" !== aB && (aw.method = "throw", aw.arg = new TypeError("The iterator does not provide a '" + aB + "' method"));
        return ac;
      }
      var az = a7(aC, av.iterator, aw.arg);
      if ("throw" === az.type) {
        aw.method = "throw";
        aw.arg = az.arg;
        aw.delegate = null;
        return ac;
      }
      var aA = az.arg;
      return aA ? aA.done ? (aw[av.resultName] = aA.value, aw.next = av.nextLoc, "return" !== aw.method && (aw.method = "next", aw.arg = W), aw.delegate = null, ac) : aA : (aw.method = "throw", aw.arg = new TypeError("iterator result is not an object"), aw.delegate = null, ac);
    }
    function ao(av) {
      var aw = {
        tryLoc: av[0]
      };
      var ax = aw;
      1 in av && (ax.catchLoc = av[1]);
      2 in av && (ax.finallyLoc = av[2], ax.afterLoc = av[3]);
      this.tryEntries.push(ax);
    }
    function ap(av) {
      var aw = av.completion || {};
      aw.type = "normal";
      delete aw.arg;
      av.completion = aw;
    }
    function aq(av) {
      var aw = {
        tryLoc: "root"
      };
      this.tryEntries = [aw];
      av.forEach(ao, this);
      this.reset(!0);
    }
    function ar(av) {
      if (av || "" === av) {
        var ax = av[a2];
        if (ax) {
          return ax.call(av);
        }
        if ("function" == typeof av.next) {
          return av;
        }
        if (!isNaN(av.length)) {
          var ay = -1,
            az = function aC() {
              for (; ++ay < av.length;) {
                if (Z.call(av, ay)) {
                  aC.value = av[ay];
                  aC.done = !1;
                  return aC;
                }
              }
              aC.value = W;
              aC.done = !0;
              return aC;
            };
          return az.next = az;
        }
      }
      throw new TypeError(b(av) + " is not iterable");
    }
    ae.prototype = af;
    a0(aj, "constructor", {
      value: af,
      configurable: !0
    });
    a0(af, "constructor", {
      value: ae,
      configurable: !0
    });
    ae.displayName = a5(af, a4, "GeneratorFunction");
    X.isGeneratorFunction = function (av) {
      var ax = "function" == typeof av && av.constructor;
      return !!ax && (ax === ae || "GeneratorFunction" === (ax.displayName || ax.name));
    };
    X.mark = function (av) {
      Object.setPrototypeOf ? Object.setPrototypeOf(av, af) : (av.__proto__ = af, a5(av, a4, "GeneratorFunction"));
      av.prototype = Object.create(aj);
      return av;
    };
    X.awrap = function (av) {
      var aw = {
        __await: av
      };
      return aw;
    };
    ak(al.prototype);
    a5(al.prototype, a3, function () {
      return this;
    });
    X.AsyncIterator = al;
    X.async = function (av, aw, ax, ay, az) {
      void 0 === az && (az = Promise);
      var aB = new al(a6(av, aw, ax, ay), az);
      return X.isGeneratorFunction(aw) ? aB : aB.next().then(function (aD) {
        return aD.done ? aD.value : aB.next();
      });
    };
    ak(aj);
    a5(aj, a4, "Generator");
    a5(aj, a2, function () {
      return this;
    });
    a5(aj, "toString", function () {
      return "[object Generator]";
    });
    X.keys = function (av) {
      var ax = Object(av),
        ay = [];
      for (var az in ax) ay.push(az);
      ay.reverse();
      return function aA() {
        for (; ay.length;) {
          var aC = ay.pop();
          if (aC in ax) {
            aA.value = aC;
            aA.done = !1;
            return aA;
          }
        }
        aA.done = !0;
        return aA;
      };
    };
    X.values = ar;
    aq.prototype = {
      constructor: aq,
      reset: function (av) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = W, this.done = !1, this.delegate = null, this.method = "next", this.arg = W, this.tryEntries.forEach(ap), !av) {
          for (var aw in this) "t" === aw.charAt(0) && Z.call(this, aw) && !isNaN(+aw.slice(1)) && (this[aw] = W);
        }
      },
      stop: function () {
        this.done = !0;
        var aw = this.tryEntries[0].completion;
        if ("throw" === aw.type) {
          throw aw.arg;
        }
        return this.rval;
      },
      dispatchException: function (av) {
        if (this.done) {
          throw av;
        }
        var ax = this;
        function aE(aF, aG) {
          aA.type = "throw";
          aA.arg = av;
          ax.next = aF;
          aG && (ax.method = "next", ax.arg = W);
          return !!aG;
        }
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay],
            aA = az.completion;
          if ("root" === az.tryLoc) {
            return aE("end");
          }
          if (az.tryLoc <= this.prev) {
            var aB = Z.call(az, "catchLoc"),
              aC = Z.call(az, "finallyLoc");
            if (aB && aC) {
              if (this.prev < az.catchLoc) {
                return aE(az.catchLoc, !0);
              }
              if (this.prev < az.finallyLoc) {
                return aE(az.finallyLoc);
              }
            } else {
              if (aB) {
                if (this.prev < az.catchLoc) {
                  return aE(az.catchLoc, !0);
                }
              } else {
                if (!aC) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < az.finallyLoc) {
                  return aE(az.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (av, aw) {
        for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
          var az = this.tryEntries[ay];
          if (az.tryLoc <= this.prev && Z.call(az, "finallyLoc") && this.prev < az.finallyLoc) {
            var aA = az;
            break;
          }
        }
        aA && ("break" === av || "continue" === av) && aA.tryLoc <= aw && aw <= aA.finallyLoc && (aA = null);
        var aB = aA ? aA.completion : {};
        aB.type = av;
        aB.arg = aw;
        return aA ? (this.method = "next", this.next = aA.finallyLoc, ac) : this.complete(aB);
      },
      complete: function (av, aw) {
        if ("throw" === av.type) {
          throw av.arg;
        }
        "break" === av.type || "continue" === av.type ? this.next = av.arg : "return" === av.type ? (this.rval = this.arg = av.arg, this.method = "return", this.next = "end") : "normal" === av.type && aw && (this.next = aw);
        return ac;
      },
      finish: function (av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.finallyLoc === av) {
            this.complete(ay.completion, ay.afterLoc);
            ap(ay);
            return ac;
          }
        }
      },
      catch: function (av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.tryLoc === av) {
            var az = ay.completion;
            if ("throw" === az.type) {
              var aA = az.arg;
              ap(ay);
            }
            return aA;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (av, aw, ax) {
        this.delegate = {
          iterator: ar(av),
          resultName: aw,
          nextLoc: ax
        };
        "next" === this.method && (this.arg = W);
        return ac;
      }
    };
    return X;
  }
  function h(V, W, X, Y, Z, a0, a1) {
    try {
      var a3 = V[a0](a1),
        a4 = a3.value;
    } catch (a7) {
      return void X(a7);
    }
    a3.done ? W(a4) : Promise.resolve(a4).then(Y, Z);
  }
  function i(V) {
    return function () {
      var X = this,
        Y = arguments;
      return new Promise(function (Z, a0) {
        var a2 = V.apply(X, Y);
        function a3(a5) {
          h(a2, Z, a0, a3, a4, "next", a5);
        }
        function a4(a5) {
          h(a2, Z, a0, a3, a4, "throw", a5);
        }
        a3(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.TongLu : $.getdata("TongLu")) || "",
    k = void 0,
    l = "",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "59",
    v = "10017",
    w = "636b478cad61a40b77d4c057",
    x = "FR*r!isE5W";
  function y() {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function W() {
      var a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR;
      return g().wrap(function (aS) {
        for (;;) {
          switch (aS.prev = aS.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aS.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aS.next = 5;
              return T("先去boxjs填写账号密码");
            case 5:
              return aS.abrupt("return");
            case 6:
              aS.next = 8;
              return R();
            case 8:
              k = aS.sent;
              a2 = j.split(" ");
              a3 = c(a2);
              aS.prev = 11;
              a3.s();
            case 13:
              if ((a4 = a3.n()).done) {
                aS.next = 227;
                break;
              }
              a5 = a4.value;
              console.log("随机生成UA");
              a6 = Q();
              r = a6.ua;
              s = a6.commonUa;
              t = a6.uuid;
              console.log(r);
              console.log(s);
              p = a5.split("&")[0];
              q = a5.split("&")[1];
              console.log("用户：".concat(p, "开始任务"));
              console.log("获取sessionId");
              aS.next = 28;
              return G("/api/account/init");
            case 28:
              a7 = aS.sent;
              n = a7.data.session.id;
              console.log(n);
              console.log("获取signature_key");
              aS.next = 34;
              return A("/web/init?client_id=".concat(v));
            case 34:
              a8 = aS.sent;
              l = a8.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              aS.next = 40;
              return C("/web/oauth/credential_auth");
            case 40:
              if (a9 = aS.sent, a9.data) {
                aS.next = 44;
                break;
              }
              console.log(a9.message);
              return aS.abrupt("continue", 225);
            case 44:
              aa = a9.data.authorization_code.code;
              console.log(aa);
              console.log("登录");
              aS.next = 49;
              return G("/api/zbtxz/login", "check_token=&code=".concat(aa, "&token=&type=-1&union_id="));
            case 49:
              ab = aS.sent;
              console.log("登录成功");
              o = ab.data.session.account_id;
              n = ab.data.session.id;
              console.log("————————————");
              console.log("开始阅读");
              aS.next = 57;
              return E("/api/user_mumber/account_detail");
            case 57:
              var aU = {};
              aU.id = 1;
              aU.channelId = "6530daf779f6be358bba1522";
              var aV = {};
              aV.id = 2;
              aV.channelId = "6530dae171a9ed74577e4689";
              var aW = {};
              aW.id = 3;
              aW.channelId = "6530db1e71a9ed74577e468e";
              var aX = {};
              aX.id = 4;
              aX.channelId = "657fe99979f6be03b8fd7fb8";
              var aY = {};
              aY.id = 5;
              aY.channelId = "657fe9ad79f6be03b8fd7fb9";
              var aZ = {};
              aZ.id = 6;
              aZ.channelId = "65a9e12879f6be03b8fd807d";
              var b0 = {};
              b0.id = 7;
              b0.channelId = "65a9e13b79f6be03b8fd807e";
              var b1 = {};
              b1.id = 8;
              b1.channelId = "65baf8d979f6be5b358ba618";
              var b2 = {};
              b2.id = 9;
              b2.channelId = "65baf8ed79f6be5b358ba619";
              ac = aS.sent;
              ad = ac.data.nick_name;
              ae = [aU, aV, aW, aX, aY, aZ, b0, b1, b2];
              af = 0;
              ag = ae;
            case 61:
              if (!(af < ag.length)) {
                aS.next = 136;
                break;
              }
              aj = ag[af];
              aS.next = 65;
              return I("/home/TmApi/channelList&channelId=".concat(aj.channelId, "&userId=").concat(o, "&sessionId=").concat(n));
            case 65:
              if (ak = aS.sent, 0 != (null == ak ? void 0 : ak.length)) {
                aS.next = 68;
                break;
              }
              return aS.abrupt("continue", 133);
            case 68:
              console.log("当前第".concat(aj.id, "轮阅读"));
              aS.next = 71;
              return I("/home/TmApi/getUserInformation&accountId=".concat(o, "&username=").concat(encodeURI(ad), "&type=jsonp"));
            case 71:
              al = aS.sent;
              am = c(ak);
              aS.prev = 73;
              am.s();
            case 75:
              if ((an = am.n()).done) {
                aS.next = 102;
                break;
              }
              ao = an.value;
              aS.next = 79;
              return E("/api/article/detail?id=".concat(ao.id));
            case 79:
              if (ap = aS.sent, console.log("文章：".concat(ap.data.article.list_title)), "ok" != ao.is_read) {
                aS.next = 85;
                break;
              }
              console.log("已阅读");
              aS.next = 100;
              break;
            case 85:
              aS.next = 87;
              return E("/api/article/read_time?channel_article_id=".concat(ao.id, "&read_time=3000"));
            case 87:
              aq = aS.sent;
              console.log("阅读：".concat(aq.message));
              aS.next = 91;
              return I("/home/TmApi/getUserRead&accountId=".concat(o, "&articleId=").concat(ao.id, "&type=jsonp"));
            case 91:
              if (ar = aS.sent, 1 != (null == ar ? void 0 : ar.read_effective)) {
                aS.next = 99;
                break;
              }
              aS.next = 95;
              return I("home/baoming/postBaoming/&activityId=428&name=".concat(o, "&city=").concat(ao.id, "&gender=").concat(aj.id, "&cellphone=").concat(p, "&type=jsonp"));
            case 95:
              as = aS.sent;
              console.log("完成任务：".concat(null == as ? void 0 : as.msg));
              aS.next = 100;
              break;
            case 99:
              console.log(ar);
            case 100:
              aS.next = 75;
              break;
            case 102:
              aS.next = 107;
              break;
            case 104:
              aS.prev = 104;
              aS.t0 = aS.catch(73);
              am.e(aS.t0);
            case 107:
              aS.prev = 107;
              am.f();
              return aS.finish(107);
            case 110:
              aS.next = 112;
              return I("/home/TmApi/addPrizenum&accountId=".concat(o, "&round=").concat(aj.id, "&num=").concat(ak.length, "&type=jsonp"));
            case 112:
              at = aS.sent;
              console.log(null == at ? void 0 : at.msg);
              aS.next = 116;
              return I("/home/TmApi/getUserInformation&accountId=".concat(o, "&username=").concat(encodeURI(ad), "&type=jsonp"));
            case 116:
              if (al = aS.sent, console.log("拥有".concat(null === (ah = al) || void 0 === ah || null === (ah = ah.data) || void 0 === ah ? void 0 : ah.cnum, "次抽奖次数")), null === (ai = al) || void 0 === ai || null === (ai = ai.data) || void 0 === ai || !ai.userid) {
                aS.next = 131;
                break;
              }
              au = 0;
            case 120:
              if (!(au < parseInt(null === (av = al) || void 0 === av || null === (av = av.data) || void 0 === av ? void 0 : av.cnum))) {
                aS.next = 129;
                break;
              }
              aS.next = 123;
              return K("/Home/ChoujiangNew/apiChoujiang&openId=".concat(o, "&action=cj&typeId=122&address=&userid=").concat(al.data.userid, "&_=").concat(Date.now()));
            case 123:
              aw = aS.sent;
              ax = JSON.parse(aw.toString().substring(1, aw.toString().length - 1));
              1 == ax.code ? (console.log("抽奖获得：".concat(ax.prizename)), m += "用户：".concat(p, " 抽奖获得：").concat(ax.prizename, "\n")) : console.log(ax.msg);
            case 126:
              au++;
              aS.next = 120;
              break;
            case 129:
              aS.next = 133;
              break;
            case 131:
              aS.next = 133;
              return T("用户：".concat(p, "\n先绑定微信"));
            case 133:
              af++;
              aS.next = 61;
              break;
            case 136:
              console.log("————————————");
              console.log("开始签到");
              aS.next = 140;
              return E("/api/user_mumber/sign");
            case 140:
              ay = aS.sent;
              console.log("签到获得：".concat(ay.data.signIntegral, "积分"));
              console.log("————————————");
              console.log("开始任务");
              az = !0;
              aA = !0;
              aB = !0;
              aS.next = 149;
              return E("/api/user_center/task?type=1&current=1&size=20");
            case 149:
              aC = aS.sent;
              aD = c(aC.data.list);
              aS.prev = 151;
              aD.s();
            case 153:
              if ((aE = aD.n()).done) {
                aS.next = 175;
                break;
              }
              if (aF = aE.value, console.log("任务：".concat(aF.name)), 1 != aF.completed) {
                aS.next = 159;
                break;
              }
              console.log("任务已完成");
              return aS.abrupt("continue", 173);
            case 159:
              if (console.log("任务进度：".concat(aF.finish_times, "/").concat(aF.frequency)), "使用本地服务" != aF.name) {
                aS.next = 170;
                break;
              }
              aG = aF.finish_times;
            case 162:
              if (!(aG < aF.frequency)) {
                aS.next = 170;
                break;
              }
              aS.next = 165;
              return G("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 165:
              aH = aS.sent;
              console.log("任务完成获得：".concat(aH.data.score_notify.integral, "积分"));
            case 167:
              aG++;
              aS.next = 162;
              break;
            case 170:
              "新闻资讯阅读" == aF.name && (az = !1);
              "新闻资讯点赞" == aF.name && (aA = !1);
              "分享资讯给好友" == aF.name && (aB = !1);
            case 173:
              aS.next = 153;
              break;
            case 175:
              aS.next = 180;
              break;
            case 177:
              aS.prev = 177;
              aS.t1 = aS.catch(151);
              aD.e(aS.t1);
            case 180:
              aS.prev = 180;
              aD.f();
              return aS.finish(180);
            case 183:
              if (az && aA && aB) {
                aS.next = 218;
                break;
              }
              aS.next = 186;
              return E("/api/article/channel_list?channel_id=".concat(w, "&isDiFangHao=false&is_new=true&list_count=0&size=20"));
            case 186:
              aI = aS.sent;
              aJ = c(aI.data.article_list);
              aS.prev = 188;
              aJ.s();
            case 190:
              if ((aK = aJ.n()).done) {
                aS.next = 210;
                break;
              }
              if (aL = aK.value, aM = aL.id, az) {
                aS.next = 198;
                break;
              }
              aS.next = 196;
              return E("/api/article/read_time?channel_article_id=".concat(aM, "&is_end=true&read_time=3051"));
            case 196:
              aN = aS.sent;
              aN.data ? console.log("阅读成功") : console.log("文章已经阅读过了");
            case 198:
              if (aA) {
                aS.next = 203;
                break;
              }
              aS.next = 201;
              return G("/api/favorite/like", "action=true&id=".concat(aM));
            case 201:
              aO = aS.sent;
              aO.data ? (console.log("点赞成功"), null !== (aP = aO.data) && void 0 !== aP && null !== (aP = aP.score_notify) && void 0 !== aP && aP.integral && (aA = !0)) : console.log("文章已经点赞过了");
            case 203:
              if (aB) {
                aS.next = 208;
                break;
              }
              aS.next = 206;
              return G("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(aM));
            case 206:
              aQ = aS.sent;
              aQ.data ? (console.log("分享成功"), null !== (aR = aQ.data) && void 0 !== aR && null !== (aR = aR.score_notify) && void 0 !== aR && aR.integral && (aB = !0)) : console.log("文章已经分享过了");
            case 208:
              aS.next = 190;
              break;
            case 210:
              aS.next = 215;
              break;
            case 212:
              aS.prev = 212;
              aS.t2 = aS.catch(188);
              aJ.e(aS.t2);
            case 215:
              aS.prev = 215;
              aJ.f();
              return aS.finish(215);
            case 218:
              console.log("————————————");
              console.log("查询积分");
              aS.next = 222;
              return E("/api/user_mumber/account_detail");
            case 222:
              ac = aS.sent;
              console.log("拥有积分：".concat(ac.data.rst.total_integral, "\n"));
              m += "用户：".concat(p, " 积分：").concat(ac.data.rst.total_integral, "\n");
            case 225:
              aS.next = 13;
              break;
            case 227:
              aS.next = 232;
              break;
            case 229:
              aS.prev = 229;
              aS.t3 = aS.catch(11);
              a3.e(aS.t3);
            case 232:
              aS.prev = 232;
              a3.f();
              return aS.finish(232);
            case 235:
              if (!m) {
                aS.next = 238;
                break;
              }
              aS.next = 238;
              return T(m);
            case 238:
            case "end":
              return aS.stop();
          }
        }
      }, W, null, [[11, 229, 232, 235], [73, 104, 107, 110], [151, 177, 180, 183], [188, 212, 215, 218]]);
    }));
    return z.apply(this, arguments);
  }
  function A(V) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function X(Y) {
      return g().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              return a0.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://passport.tmuyun.com".concat(Y),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": O(),
                    "Accept-Encoding": "gzip",
                    "user-agent": r
                  }
                };
                $.get(a3, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            try {
                              a7 ? (console.log("".concat(JSON.stringify(a7))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a1(JSON.parse(a9));
                            } catch (ab) {
                              $.logErr(ab, a8);
                            } finally {
                              a1();
                            }
                          case 1:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a6);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a0.stop();
          }
        }
      }, X);
    }));
    return B.apply(this, arguments);
  }
  function C(V) {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function W(X) {
      var Y;
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              Y = M();
              return Z.abrupt("return", new Promise(function (a1) {
                var a2 = {
                  url: "https://passport.tmuyun.com".concat(X),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": Y.uuid,
                    "X-SIGNATURE": Y.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": r
                  },
                  body: Y.body
                };
                $.post(a2, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            try {
                              a6 ? (console.log("".concat(JSON.stringify(a6))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a1(JSON.parse(a8));
                            } catch (aa) {
                              $.logErr(aa, a7);
                            } finally {
                              a1();
                            }
                          case 1:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return D.apply(this, arguments);
  }
  function E(V) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function W(X) {
      var Z;
      return g().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              Z = N(X);
              return a0.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": Z.time,
                  "X-SESSION-ID": n,
                  "X-REQUEST-ID": Z.uuid,
                  "X-SIGNATURE": Z.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": o,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": s
                };
                var a5 = {
                  url: "https://vapp.tmuyun.com".concat(X),
                  headers: a4
                };
                $.get(a5, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !a9) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a9)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 9;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(ab));
                          case 9:
                            ad.next = 14;
                            break;
                          case 11:
                            ad.prev = 11;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, aa);
                          case 14:
                            ad.prev = 14;
                            a2();
                            return ad.finish(14);
                          case 17:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a8, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a0.stop();
          }
        }
      }, W);
    }));
    return F.apply(this, arguments);
  }
  function G(V, W) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function V(W, X) {
      var Z;
      return g().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              Z = N(W);
              return a0.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://vapp.tmuyun.com".concat(W),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": Z.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": Z.uuid,
                    "X-SIGNATURE": Z.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  },
                  body: X
                };
                $.post(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a8) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ab.next = 9;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(aa));
                          case 9:
                            ab.next = 14;
                            break;
                          case 11:
                            ab.prev = 11;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a9);
                          case 14:
                            ab.prev = 14;
                            a2();
                            return ab.finish(14);
                          case 17:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a0.stop();
          }
        }
      }, V);
    }));
    return H.apply(this, arguments);
  }
  function I(V) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function W(X) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://wxapi.hoolo.tv/event/dtqp/index.php?s=".concat(X),
                  headers: {
                    accept: "application/json, text/javascript, */*; q=0.01",
                    origin: "https://tp.hoolo.tv",
                    "x-requested-with": "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://tp.hoolo.tv/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.70;native_app;6.8.0"
                  }
                };
                $.get(a3, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a6) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(a8 ? JSON.parse(a8) : "");
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a7);
                          case 14:
                            aa.prev = 14;
                            a1();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return J.apply(this, arguments);
  }
  function K(V) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function V(W) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://wxapi.hoolo.tv/event/dtqp/index.php?s=".concat(W),
                  headers: {
                    accept: "application/json, text/javascript, */*; q=0.01",
                    origin: "https://tp.hoolo.tv",
                    "x-requested-with": "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://tp.hoolo.tv/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.70;native_app;6.8.0"
                  }
                };
                $.get(a2, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a5) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(a7);
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a6);
                          case 14:
                            a9.prev = 14;
                            a0();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, V);
    }));
    return L.apply(this, arguments);
  }
  function M() {
    var X = new (k.loadJSEncrypt())();
    X.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    q = X.encrypt(q);
    var Y = O(),
      Z = "client_id=".concat(v, "&password=").concat(q, "&phone_number=").concat(p),
      a0 = "post%%/web/oauth/credential_auth?".concat(Z, "%%").concat(Y, "%%");
    Z = "client_id=".concat(v, "&password=").concat(encodeURIComponent(q), "&phone_number=").concat(p);
    CryptoJS = k.createCryptoJS();
    var a2 = CryptoJS.HmacSHA256(a0, l),
      a3 = CryptoJS.enc.Hex.stringify(a2);
    var a1 = {};
    a1.uuid = Y;
    a1.signature = a3;
    a1.body = Z;
    return a1;
  }
  function N(V) {
    var W = O(),
      X = Date.now();
    V.indexOf("?") > 0 && (V = V.substring(0, V.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var Y = CryptoJS.SHA256("".concat(V, "&&").concat(n, "&&").concat(W, "&&").concat(X, "&&").concat(x, "&&").concat(u)).toString(),
      Z = {
        uuid: W,
        time: X,
        signature: Y
      };
    return Z;
  }
  function O() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (W) {
      var X = 16 * Math.random() | 0,
        Y = "x" === W ? X : 3 & X | 8;
      return Y.toString(16);
    });
  }
  function P(V) {
    return V[Math.floor(Math.random() * V.length)];
  }
  function Q() {
    var V = "1.0.70",
      W = O(),
      X = P(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      Y = "Xiaomi " + X,
      Z = "Android",
      a0 = "".concat(Z.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(V, ";1.0;null;").concat(X),
      a1 = "".concat(V, ";").concat(W, ";").concat(Y, ";").concat(Z, ";").concat("11", ";").concat("Release", ";").concat("6.8.0"),
      a2 = {
        ua: a0,
        commonUa: a1,
        uuid: W
      };
    return a2;
  }
  function R() {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function W() {
      var X;
      return g().wrap(function Y(Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              if (X = $.getdata("Utils_Code") || "", !X || !Object.keys(X).length) {
                Z.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(X);
              return Z.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return Z.abrupt("return", new Promise(function () {
                var a1 = i(g().mark(function a2(a3) {
                  return g().wrap(function a5(a6) {
                    for (;;) {
                      switch (a6.prev = a6.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a8) {
                            $.setdata(a8, "Utils_Code");
                            eval(a8);
                            console.log("✅ Utils加载成功, 请继续");
                            a3(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a6.stop();
                      }
                    }
                  }, a2);
                }));
                return function (a3) {
                  return a1.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return S.apply(this, arguments);
  }
  function T(V) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function X(Y) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              if (!$.isNode()) {
                Z.next = 5;
                break;
              }
              Z.next = 3;
              return notify.sendNotify($.name, Y);
            case 3:
              Z.next = 6;
              break;
            case 5:
              $.msg($.name, "", Y);
            case 6:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return U.apply(this, arguments);
  }
  i(g().mark(function V() {
    return g().wrap(function (W) {
      for (;;) {
        switch (W.prev = W.next) {
          case 0:
            W.next = 2;
            return y();
          case 2:
          case "end":
            return W.stop();
        }
      }
    }, V);
  }))().catch(function (W) {
    $.log(W);
  }).finally(function () {
    $.done({});
  });
})();