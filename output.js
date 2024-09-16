//Mon Sep 16 2024 06:16:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(Y) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Z) {
      return typeof Z;
    } : function (Z) {
      return Z && "function" == typeof Symbol && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z;
    };
    return b(Y);
  }
  function c(Y, Z) {
    var a1 = "undefined" != typeof Symbol && Y[Symbol.iterator] || Y["@@iterator"];
    if (!a1) {
      if (Array.isArray(Y) || (a1 = d(Y)) || Z && Y && "number" == typeof Y.length) {
        a1 && (Y = a1);
        var a2 = 0,
          a3 = function () {};
        return {
          s: a3,
          n: function () {
            var a7 = {
              done: !0
            };
            return a2 >= Y.length ? a7 : {
              done: !1,
              value: Y[a2++]
            };
          },
          e: function (a7) {
            throw a7;
          },
          f: a3
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a4,
      a5 = !0,
      a6 = !1;
    return {
      s: function () {
        a1 = a1.call(Y);
      },
      n: function () {
        var a9 = a1.next();
        a5 = a9.done;
        return a9;
      },
      e: function (a9) {
        a6 = !0;
        a4 = a9;
      },
      f: function () {
        try {
          a5 || null == a1.return || a1.return();
        } finally {
          if (a6) {
            throw a4;
          }
        }
      }
    };
  }
  function d(Y, Z) {
    if (Y) {
      if ("string" == typeof Y) {
        return f(Y, Z);
      }
      var a1 = {}.toString.call(Y).slice(8, -1);
      "Object" === a1 && Y.constructor && (a1 = Y.constructor.name);
      return "Map" === a1 || "Set" === a1 ? Array.from(Y) : "Arguments" === a1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a1) ? f(Y, Z) : void 0;
    }
  }
  function f(Y, Z) {
    (null == Z || Z > Y.length) && (Z = Y.length);
    for (var a1 = 0, a2 = Array(Z); a1 < Z; a1++) {
      a2[a1] = Y[a1];
    }
    return a2;
  }
  function g() {
    'use strict';

    g = function () {
      return a0;
    };
    var Z,
      a0 = {},
      a1 = Object.prototype,
      a2 = a1.hasOwnProperty,
      a3 = Object.defineProperty || function (av, aw, ax) {
        av[aw] = ax.value;
      },
      a4 = "function" == typeof Symbol ? Symbol : {},
      a5 = a4.iterator || "@@iterator",
      a6 = a4.asyncIterator || "@@asyncIterator",
      a7 = a4.toStringTag || "@@toStringTag";
    function a8(av, aw, ax) {
      var az = {
        value: ax,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(av, aw, az);
      return av[aw];
    }
    try {
      a8({}, "");
    } catch (aw) {
      a8 = function (ay, az, aA) {
        return ay[az] = aA;
      };
    }
    function a9(ay, az, aA, aB) {
      var aC = az && az.prototype instanceof ag ? az : ag,
        aD = Object.create(aC.prototype),
        aE = new at(aB || []);
      a3(aD, "_invoke", {
        value: ap(ay, aA, aE)
      });
      return aD;
    }
    function aa(ay, az, aA) {
      try {
        return {
          type: "normal",
          arg: ay.call(az, aA)
        };
      } catch (aE) {
        var aB = {
          type: "throw",
          arg: aE
        };
        return aB;
      }
    }
    a0.wrap = a9;
    var ab = "suspendedStart",
      ac = "suspendedYield",
      ad = "executing",
      ae = "completed",
      af = {};
    function ag() {}
    function ah() {}
    function ai() {}
    var aj = {};
    a8(aj, a5, function () {
      return this;
    });
    var ak = Object.getPrototypeOf,
      al = ak && ak(ak(au([])));
    al && al !== a1 && a2.call(al, a5) && (aj = al);
    ai.prototype = ag.prototype = Object.create(aj);
    var am = ai.prototype;
    function an(ay) {
      ["next", "throw", "return"].forEach(function (aB) {
        a8(ay, aB, function (aE) {
          return this._invoke(aB, aE);
        });
      });
    }
    function ao(ay, az) {
      function aC(aD, aE, aF, aG) {
        var aI = aa(ay[aD], ay, aE);
        if ("throw" !== aI.type) {
          var aJ = aI.arg,
            aK = aJ.value;
          return aK && "object" == b(aK) && a2.call(aK, "__await") ? az.resolve(aK.__await).then(function (aL) {
            aC("next", aL, aF, aG);
          }, function (aL) {
            aC("throw", aL, aF, aG);
          }) : az.resolve(aK).then(function (aL) {
            aJ.value = aL;
            aF(aJ);
          }, function (aL) {
            return aC("throw", aL, aF, aG);
          });
        }
        aG(aI.arg);
      }
      var aB;
      a3(this, "_invoke", {
        value: function (aD, aE) {
          function aG() {
            return new az(function (aJ, aK) {
              aC(aD, aE, aJ, aK);
            });
          }
          return aB = aB ? aB.then(aG, aG) : aG();
        }
      });
    }
    function ap(ay, az, aA) {
      var aC = ab;
      return function (aE, aF) {
        if (aC === ad) {
          throw Error("Generator is already running");
        }
        if (aC === ae) {
          if ("throw" === aE) {
            throw aF;
          }
          var aG = {
            value: Z,
            done: !0
          };
          return aG;
        }
        for (aA.method = aE, aA.arg = aF;;) {
          var aH = aA.delegate;
          if (aH) {
            var aI = aq(aH, aA);
            if (aI) {
              if (aI === af) {
                continue;
              }
              return aI;
            }
          }
          if ("next" === aA.method) {
            aA.sent = aA._sent = aA.arg;
          } else {
            if ("throw" === aA.method) {
              if (aC === ab) {
                throw aC = ae, aA.arg;
              }
              aA.dispatchException(aA.arg);
            } else {
              "return" === aA.method && aA.abrupt("return", aA.arg);
            }
          }
          aC = ad;
          var aJ = aa(ay, az, aA);
          if ("normal" === aJ.type) {
            if (aC = aA.done ? ae : ac, aJ.arg === af) {
              continue;
            }
            var aK = {};
            aK.value = aJ.arg;
            aK.done = aA.done;
            return aK;
          }
          "throw" === aJ.type && (aC = ae, aA.method = "throw", aA.arg = aJ.arg);
        }
      };
    }
    function aq(ay, az) {
      var aB = az.method,
        aC = ay.iterator[aB];
      if (aC === Z) {
        az.delegate = null;
        "throw" === aB && ay.iterator.return && (az.method = "return", az.arg = Z, aq(ay, az), "throw" === az.method) || "return" !== aB && (az.method = "throw", az.arg = new TypeError("The iterator does not provide a '" + aB + "' method"));
        return af;
      }
      var aD = aa(aC, ay.iterator, az.arg);
      if ("throw" === aD.type) {
        az.method = "throw";
        az.arg = aD.arg;
        az.delegate = null;
        return af;
      }
      var aE = aD.arg;
      return aE ? aE.done ? (az[ay.resultName] = aE.value, az.next = ay.nextLoc, "return" !== az.method && (az.method = "next", az.arg = Z), az.delegate = null, af) : aE : (az.method = "throw", az.arg = new TypeError("iterator result is not an object"), az.delegate = null, af);
    }
    function ar(ay) {
      var az = {
        tryLoc: ay[0]
      };
      var aA = az;
      1 in ay && (aA.catchLoc = ay[1]);
      2 in ay && (aA.finallyLoc = ay[2], aA.afterLoc = ay[3]);
      this.tryEntries.push(aA);
    }
    function as(ay) {
      var az = ay.completion || {};
      az.type = "normal";
      delete az.arg;
      ay.completion = az;
    }
    function at(ay) {
      var az = {
        tryLoc: "root"
      };
      this.tryEntries = [az];
      ay.forEach(ar, this);
      this.reset(!0);
    }
    function au(ay) {
      if (ay || "" === ay) {
        var aA = ay[a5];
        if (aA) {
          return aA.call(ay);
        }
        if ("function" == typeof ay.next) {
          return ay;
        }
        if (!isNaN(ay.length)) {
          var aB = -1,
            aC = function aE() {
              for (; ++aB < ay.length;) {
                if (a2.call(ay, aB)) {
                  aE.value = ay[aB];
                  aE.done = !1;
                  return aE;
                }
              }
              aE.value = Z;
              aE.done = !0;
              return aE;
            };
          return aC.next = aC;
        }
      }
      throw new TypeError(b(ay) + " is not iterable");
    }
    ah.prototype = ai;
    a3(am, "constructor", {
      value: ai,
      configurable: !0
    });
    a3(ai, "constructor", {
      value: ah,
      configurable: !0
    });
    ah.displayName = a8(ai, a7, "GeneratorFunction");
    a0.isGeneratorFunction = function (ay) {
      var az = "function" == typeof ay && ay.constructor;
      return !!az && (az === ah || "GeneratorFunction" === (az.displayName || az.name));
    };
    a0.mark = function (ay) {
      Object.setPrototypeOf ? Object.setPrototypeOf(ay, ai) : (ay.__proto__ = ai, a8(ay, a7, "GeneratorFunction"));
      ay.prototype = Object.create(am);
      return ay;
    };
    a0.awrap = function (ay) {
      var az = {
        __await: ay
      };
      return az;
    };
    an(ao.prototype);
    a8(ao.prototype, a6, function () {
      return this;
    });
    a0.AsyncIterator = ao;
    a0.async = function (ay, az, aA, aB, aC) {
      void 0 === aC && (aC = Promise);
      var aE = new ao(a9(ay, az, aA, aB), aC);
      return a0.isGeneratorFunction(az) ? aE : aE.next().then(function (aF) {
        return aF.done ? aF.value : aE.next();
      });
    };
    an(am);
    a8(am, a7, "Generator");
    a8(am, a5, function () {
      return this;
    });
    a8(am, "toString", function () {
      return "[object Generator]";
    });
    a0.keys = function (ay) {
      var aA = Object(ay),
        aB = [];
      for (var aC in aA) aB.push(aC);
      aB.reverse();
      return function aD() {
        for (; aB.length;) {
          var aF = aB.pop();
          if (aF in aA) {
            aD.value = aF;
            aD.done = !1;
            return aD;
          }
        }
        aD.done = !0;
        return aD;
      };
    };
    a0.values = au;
    at.prototype = {
      constructor: at,
      reset: function (ay) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = Z, this.done = !1, this.delegate = null, this.method = "next", this.arg = Z, this.tryEntries.forEach(as), !ay) {
          for (var aA in this) "t" === aA.charAt(0) && a2.call(this, aA) && !isNaN(+aA.slice(1)) && (this[aA] = Z);
        }
      },
      stop: function () {
        this.done = !0;
        var ay = this.tryEntries[0].completion;
        if ("throw" === ay.type) {
          throw ay.arg;
        }
        return this.rval;
      },
      dispatchException: function (ay) {
        if (this.done) {
          throw ay;
        }
        var aA = this;
        function aH(aI, aJ) {
          aD.type = "throw";
          aD.arg = ay;
          aA.next = aI;
          aJ && (aA.method = "next", aA.arg = Z);
          return !!aJ;
        }
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB],
            aD = aC.completion;
          if ("root" === aC.tryLoc) {
            return aH("end");
          }
          if (aC.tryLoc <= this.prev) {
            var aE = a2.call(aC, "catchLoc"),
              aF = a2.call(aC, "finallyLoc");
            if (aE && aF) {
              if (this.prev < aC.catchLoc) {
                return aH(aC.catchLoc, !0);
              }
              if (this.prev < aC.finallyLoc) {
                return aH(aC.finallyLoc);
              }
            } else {
              if (aE) {
                if (this.prev < aC.catchLoc) {
                  return aH(aC.catchLoc, !0);
                }
              } else {
                if (!aF) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aC.finallyLoc) {
                  return aH(aC.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (ay, az) {
        for (var aA = this.tryEntries.length - 1; aA >= 0; --aA) {
          var aB = this.tryEntries[aA];
          if (aB.tryLoc <= this.prev && a2.call(aB, "finallyLoc") && this.prev < aB.finallyLoc) {
            var aC = aB;
            break;
          }
        }
        aC && ("break" === ay || "continue" === ay) && aC.tryLoc <= az && az <= aC.finallyLoc && (aC = null);
        var aD = aC ? aC.completion : {};
        aD.type = ay;
        aD.arg = az;
        return aC ? (this.method = "next", this.next = aC.finallyLoc, af) : this.complete(aD);
      },
      complete: function (ay, az) {
        if ("throw" === ay.type) {
          throw ay.arg;
        }
        "break" === ay.type || "continue" === ay.type ? this.next = ay.arg : "return" === ay.type ? (this.rval = this.arg = ay.arg, this.method = "return", this.next = "end") : "normal" === ay.type && az && (this.next = az);
        return af;
      },
      finish: function (ay) {
        for (var az = this.tryEntries.length - 1; az >= 0; --az) {
          var aA = this.tryEntries[az];
          if (aA.finallyLoc === ay) {
            this.complete(aA.completion, aA.afterLoc);
            as(aA);
            return af;
          }
        }
      },
      catch: function (ay) {
        for (var aA = this.tryEntries.length - 1; aA >= 0; --aA) {
          var aB = this.tryEntries[aA];
          if (aB.tryLoc === ay) {
            var aC = aB.completion;
            if ("throw" === aC.type) {
              var aD = aC.arg;
              as(aB);
            }
            return aD;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ay, az, aA) {
        this.delegate = {
          iterator: au(ay),
          resultName: az,
          nextLoc: aA
        };
        "next" === this.method && (this.arg = Z);
        return af;
      }
    };
    return a0;
  }
  function h(Y, Z, a0, a1, a2, a3, a4) {
    try {
      var a5 = Y[a3](a4),
        a6 = a5.value;
    } catch (a9) {
      return void a0(a9);
    }
    a5.done ? Z(a6) : Promise.resolve(a6).then(a1, a2);
  }
  function i(Y) {
    return function () {
      var a1 = this,
        a2 = arguments;
      return new Promise(function (a3, a4) {
        var a5 = Y.apply(a1, a2);
        function a6(a8) {
          h(a5, a3, a4, a6, a7, "next", a8);
        }
        function a7(a8) {
          h(a5, a3, a4, a6, a7, "throw", a8);
        }
        a6(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.JiaShan : $.getdata("JiaShan")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "0c3eafb13e9f1ac110a432798b021862";
  function w() {
    return x.apply(this, arguments);
  }
  function x() {
    x = i(g().mark(function Y() {
      var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ;
      return g().wrap(function (b0) {
        for (;;) {
          switch (b0.prev = b0.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                b0.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b0.next = 5;
              return W("先去boxjs填写账号密码");
            case 5:
              return b0.abrupt("return");
            case 6:
              b0.next = 8;
              return U();
            case 8:
              l = b0.sent;
              a1 = j.split(" ");
              a2 = c(a1);
              b0.prev = 11;
              a2.s();
            case 13:
              if ((a3 = a2.n()).done) {
                b0.next = 238;
                break;
              }
              a4 = a3.value;
              console.log("随机生成clientId");
              n = O();
              console.log(n);
              p = a4.split("&")[0];
              q = a4.split("&")[1];
              console.log("用户：".concat(p, "开始任务"));
              console.log("登录");
              b0.next = 24;
              return F("/login", {
                username: p,
                password: q
              });
            case 24:
              if (a5 = b0.sent, console.log(a5.msg), 0 == a5.code) {
                b0.next = 28;
                break;
              }
              return b0.abrupt("continue", 236);
            case 28:
              if (t = a5.data.token, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), u) {
                b0.next = 39;
                break;
              }
              b0.next = 35;
              return D("/app/layout/dynamic/component/data?layoutId=7853114638635438077&layoutDatasourceId=7853114638635438096&pageNo=1&pageSize=20");
            case 35:
              a6 = b0.sent;
              a7 = /\/module-study\/home\/home\?hide_back=1&id=(\d+)/;
              a8 = JSON.stringify(a6).match(a7);
              a8 && (u = a8[1]);
            case 39:
              if (u) {
                b0.next = 42;
                break;
              }
              console.log("获取id失败");
              return b0.abrupt("continue", 236);
            case 42:
              console.log(u);
              console.log("获取apiDt");
              b0.next = 46;
              return A("/aosbase/_auth_dt");
            case 46:
              a9 = b0.sent;
              o = a9.data.substring(32, 68);
              console.log(o);
              r = "0";
              b0.next = 52;
              return H("/admin/_service_custom_jsxww_getaccesstoken?access_t_id=1&access_t_id_in=1");
            case 52:
              aa = b0.sent;
              b0.next = 55;
              return y("/auth/openid?access_token=".concat(aa.data, "&app_token=").concat(t));
            case 55:
              ab = b0.sent;
              ac = ab.data.openid + "." + ab.data.ticket;
              console.log("阅读登录");
              ad = {
                app_user_token: ac,
                appid: "jsxww",
                noncestr: T(6, !1),
                phone: p,
                portrait_url: "https://oss.injs.jsxww.cn".concat(a5.data.userinfo.avatarUrl),
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: a5.data.userinfo.id,
                user_name: a5.data.userinfo.nickname,
                wx_openid: "",
                wx_unionid: ""
              };
              ad.signature = l.md5(P(ad) + "&appkey=".concat(v));
              b0.next = 62;
              return J("/aosbase/_auth_appuserinit", ad);
            case 62:
              af = b0.sent;
              s = af.data.access_token;
              r = af.data.data.user_id;
              console.log("阅读token：".concat(s));
              ag = "";
              ah = Date.now() + "" + Math.floor(10000000 * Math.random());
              b0.next = 70;
              return H("/aoslearnfoot/_optionp_list?activity_id=".concat(u));
            case 70:
              ai = b0.sent;
              aj = c(ai.data);
              b0.prev = 72;
              aj.s();
            case 74:
              if ((ak = aj.n()).done) {
                b0.next = 158;
                break;
              }
              al = ak.value;
              am = al.id;
              console.log(al.title);
              b0.next = 80;
              return H("/aoslearnfoot/optionp_detail?id=".concat(al.id));
            case 80:
              if (an = b0.sent, an.data.task_num != an.data.user_done_num) {
                b0.next = 84;
                break;
              }
              console.log("已完成");
              return b0.abrupt("continue", 156);
            case 84:
              if (ag) {
                b0.next = 125;
                break;
              }
              console.log("获取滑块token");
              ao = 0;
            case 87:
              if (!(ao < 3)) {
                b0.next = 125;
                break;
              }
              ap = T(10, !1);
              aq = Math.round(new Date().getTime() / 1000).toString();
              ar = "https://jsxww.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(am);
              as = N({
                once: ap,
                referer: ar,
                timestamp: aq,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              b0.next = 94;
              return H("/basemodule/_captcha_get?once=".concat(ap, "&referer=").concat(ar, "&timestamp=").concat(aq, "&type=1&signature=").concat(encodeURIComponent(as)));
            case 94:
              at = b0.sent;
              console.log("滑块：".concat(at.data.block));
              console.log("背景：".concat(at.data.background));
              b0.next = 99;
              return L({
                slidingImage: at.data.block,
                backImage: at.data.background
              });
            case 99:
              if (au = b0.sent, au) {
                b0.next = 105;
                break;
              }
              console.log("ddddocr服务异常");
              b0.next = 104;
              return W("ddddocr服务异常");
            case 104:
              return b0.abrupt("continue", 122);
            case 105:
              console.log(au);
              av = au.result;
              aw = N({
                x: av,
                width: 384,
                track: [{
                  x: Math.floor(av / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(av / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(av / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(av / 4),
                  y: 0,
                  time: 100
                }, {
                  x: av / 2,
                  y: 0,
                  time: 100
                }, {
                  x: av,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              b0.next = 111;
              return J("/basemodule/_captcha_check", {
                token: at.data.token,
                data: aw,
                referer: ar,
                type: at.data.type
              });
            case 111:
              if (ax = b0.sent, !ax.data.result) {
                b0.next = 121;
                break;
              }
              b0.next = 115;
              return J("/aosbasemodule/intelverifcode_check", {
                validate: ax.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 115:
              ay = b0.sent;
              ag = ay.data.tokenid;
              console.log("滑块token：".concat(ag));
              return b0.abrupt("break", 125);
            case 121:
              console.log("验证失败");
            case 122:
              ao++;
              b0.next = 87;
              break;
            case 125:
              if (ag) {
                b0.next = 127;
                break;
              }
              return b0.abrupt("break", 158);
            case 127:
              b0.next = 129;
              return H("/aosbasemodule/_task_list?offset=0&count=".concat(al.task_num, "&module_id=").concat(al.m_id, "&activity_id=").concat(al.id));
            case 129:
              az = b0.sent;
              aA = c(az.data);
              b0.prev = 131;
              aA.s();
            case 133:
              if ((aB = aA.n()).done) {
                b0.next = 148;
                break;
              }
              if (aC = aB.value, console.log("文章：".concat(aC.title)), 1 != aC.user_done) {
                b0.next = 139;
                break;
              }
              console.log("已完成");
              return b0.abrupt("continue", 146);
            case 139:
              var b2 = {};
              b2.task_id = aC.id;
              b0.next = 141;
              return J("/aosbasemodule/task_create", b2);
            case 141:
              aD = b0.sent;
              b0.next = 144;
              return J("/aosbasemodule/task_done", {
                task_record_id: aD.data.task_record_id,
                collect_info: "",
                afs_tokenid: ag,
                device_token: "17230268182134089961"
              });
            case 144:
              aE = b0.sent;
              console.log("阅读：".concat(aE.msg));
            case 146:
              b0.next = 133;
              break;
            case 148:
              b0.next = 153;
              break;
            case 150:
              b0.prev = 150;
              b0.t0 = b0.catch(131);
              aA.e(b0.t0);
            case 153:
              b0.prev = 153;
              aA.f();
              return b0.finish(153);
            case 156:
              b0.next = 74;
              break;
            case 158:
              b0.next = 163;
              break;
            case 160:
              b0.prev = 160;
              b0.t1 = b0.catch(72);
              aj.e(b0.t1);
            case 163:
              b0.prev = 163;
              aj.f();
              return b0.finish(163);
            case 166:
              b0.next = 168;
              return H("/aoslearnfoot/_ac_detail?id=".concat(u));
            case 168:
              aF = b0.sent;
              aG = JSON.parse(aF.data.other_set).lottery.id;
              b0.next = 172;
              return H("/aoslottery/ac_lottery_times?id=".concat(aG));
            case 172:
              if (aH = b0.sent, console.log("拥有".concat(aH.data.all_remain, "次抽奖")), !(aH.data.all_remain > 0)) {
                b0.next = 236;
                break;
              }
              console.log("获取抽奖滑块token");
              aI = "";
              aJ = 0;
            case 178:
              if (!(aJ < 3)) {
                b0.next = 216;
                break;
              }
              aK = T(10, !1);
              aL = Math.round(new Date().getTime() / 1000).toString();
              aM = "https://jsxww.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              aN = N({
                once: aK,
                referer: aM,
                timestamp: aL,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              b0.next = 185;
              return H("/basemodule/_captcha_get?once=".concat(aK, "&referer=").concat(aM, "&timestamp=").concat(aL, "&type=1&signature=").concat(encodeURIComponent(aN)));
            case 185:
              aO = b0.sent;
              console.log("滑块：".concat(aO.data.block));
              console.log("背景：".concat(aO.data.background));
              b0.next = 190;
              return L({
                slidingImage: aO.data.block,
                backImage: aO.data.background
              });
            case 190:
              if (aP = b0.sent, aP) {
                b0.next = 196;
                break;
              }
              console.log("ddddocr服务异常");
              b0.next = 195;
              return W("ddddocr服务异常");
            case 195:
              return b0.abrupt("continue", 213);
            case 196:
              console.log(aP);
              aQ = aP.result;
              aR = N({
                x: aQ,
                width: 384,
                track: [{
                  x: Math.floor(aQ / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aQ / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aQ / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aQ / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aQ / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aQ,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              b0.next = 202;
              return J("/basemodule/_captcha_check", {
                token: aO.data.token,
                data: aR,
                referer: aM,
                type: aO.data.type
              });
            case 202:
              if (aS = b0.sent, !aS.data.result) {
                b0.next = 212;
                break;
              }
              b0.next = 206;
              return J("/aosbasemodule/intelverifcode_check", {
                validate: aS.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 206:
              aT = b0.sent;
              aI = aT.data.tokenid;
              console.log("抽奖滑块token：".concat(aI));
              return b0.abrupt("break", 216);
            case 212:
              console.log("验证失败");
            case 213:
              aJ++;
              b0.next = 178;
              break;
            case 216:
              if (aI) {
                b0.next = 218;
                break;
              }
              return b0.abrupt("continue", 236);
            case 218:
              b0.next = 220;
              return H("/aoslottery/_ac_detail?id=".concat(aG));
            case 220:
              aU = b0.sent;
              aV = 0;
            case 222:
              if (!(aV < aH.data.all_remain)) {
                b0.next = 236;
                break;
              }
              b0.next = 225;
              return J("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: aU.data.m_id,
                content_id: aU.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: aU.data.title,
                device_token: ah,
                user_id: af.data.data.user_id,
                user_name: af.data.data.user_name,
                phone_num: p,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 225:
              if (aW = b0.sent, console.log("抽奖提交：".concat(aW.msg)), 0 == aW.code) {
                b0.next = 229;
                break;
              }
              return b0.abrupt("continue", 233);
            case 229:
              var b3 = {};
              b3.id = aG;
              b3.verif_uuid = "";
              b3.verif_code = "";
              b3.afs_tokenid = aI;
              b3.collect_info = "";
              b3.longitude = 0;
              b3.latitude = 0;
              b3.device_token = ah;
              b0.next = 231;
              return J("/aoslottery/ac_sub", b3);
            case 231:
              aX = b0.sent;
              0 == aX.code ? (console.log("抽奖获得：".concat(null == aX || null === (aY = aX.data) || void 0 === aY ? void 0 : aY.title)), m += "用户：".concat(p, " 抽奖获得：").concat(null == aX || null === (aZ = aX.data) || void 0 === aZ ? void 0 : aZ.title, "\n")) : "o d w" == aX.msg ? console.log("谢谢参与") : console.log(aX.msg);
            case 233:
              aV++;
              b0.next = 222;
              break;
            case 236:
              b0.next = 13;
              break;
            case 238:
              b0.next = 243;
              break;
            case 240:
              b0.prev = 240;
              b0.t2 = b0.catch(11);
              a2.e(b0.t2);
            case 243:
              b0.prev = 243;
              a2.f();
              return b0.finish(243);
            case 246:
              if (!m) {
                b0.next = 249;
                break;
              }
              b0.next = 249;
              return W(m);
            case 249:
            case "end":
              return b0.stop();
          }
        }
      }, Y, null, [[11, 240, 243, 246], [72, 160, 163, 166], [131, 150, 153, 156]]);
    }));
    return x.apply(this, arguments);
  }
  function y(Y) {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function Y(Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a3) {
                var a5 = {
                  url: "https://oapi.injs.jsxww.cn".concat(Z),
                  headers: {
                    Connection: "Keep-Alive",
                    ClientId: n,
                    Authorization: t,
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n,
                    "Accept-Encoding": "gzip"
                  }
                };
                $.get(a5, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a8) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a3(JSON.parse(aa));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, a9);
                          case 14:
                            ac.prev = 14;
                            a3();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, Y);
    }));
    return z.apply(this, arguments);
  }
  function A(Y) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function Z(a0) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a3) {
                var a5 = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "49",
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n + ";Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "49",
                    Accept: "*/*",
                    Origin: "https://jsxww.y-h5.iyunxh.com",
                    "X-Requested-With": "info.ltit.www.cloudjiashan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jsxww.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a5, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a8) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a3(JSON.parse(aa));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, a9);
                          case 14:
                            ac.prev = 14;
                            a3();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, Z);
    }));
    return B.apply(this, arguments);
  }
  function D(Y) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function Z(a0) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a3) {
                var a5 = {
                  url: "https://api.app.injs.jsxww.cn".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    ClientId: n,
                    Authorization: t,
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n,
                    "Content-Type": "application/json; charset=utf-8",
                    "Accept-Encoding": "gzip"
                  }
                };
                $.get(a5, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a9) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a9)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a3(JSON.parse(ab));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, aa);
                          case 14:
                            ac.prev = 14;
                            a3();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a8, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, Z);
    }));
    return E.apply(this, arguments);
  }
  function F(Y, Z) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function Z(a0, a1) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  url: "https://api.app.injs.jsxww.cn".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    ClientId: n,
                    Authorization: t,
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n,
                    "Content-Type": "application/json; charset=utf-8",
                    "Accept-Encoding": "gzip"
                  },
                  body: JSON.stringify(a1)
                };
                $.post(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !aa) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ac));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ab);
                          case 14:
                            ae.prev = 14;
                            a5();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, a9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, Z);
    }));
    return G.apply(this, arguments);
  }
  function H(Y) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function Y(Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(Z),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": r,
                    "Access-Api-Signature": R(),
                    "Access-T-Id-In": "49",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n + ";Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36",
                    "Access-Token": s,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": o,
                    "Access-T-Id": "49",
                    Accept: "*/*",
                    Origin: "https://jsxww.y-h5.iyunxh.com",
                    "X-Requested-With": "info.ltit.www.cloudjiashan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jsxww.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a4, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a7) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ab.next = 9;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(a9));
                          case 9:
                            ab.next = 14;
                            break;
                          case 11:
                            ab.prev = 11;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a8);
                          case 14:
                            ab.prev = 14;
                            a2();
                            return ab.finish(14);
                          case 17:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, Y);
    }));
    return I.apply(this, arguments);
  }
  function J(Y, Z) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function Z(a0, a1) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a5 = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(a0),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": r,
                    "Access-Api-Signature": R(),
                    "Access-T-Id-In": "49",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "injs;android:11;version:1.1.12;clientid:" + n + ";Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36",
                    "Access-Token": s,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": o,
                    "Access-T-Id": "49",
                    Accept: "*/*",
                    Origin: "https://jsxww.y-h5.iyunxh.com",
                    "X-Requested-With": "info.ltit.www.cloudjiashan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jsxww.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a1)
                };
                $.post(a5, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a9) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a9)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a4(JSON.parse(ab));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, aa);
                          case 14:
                            ac.prev = 14;
                            a4();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a8, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, Z);
    }));
    return K.apply(this, arguments);
  }
  function L(Y) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function Y(Z) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  "Content-Type": "application/json"
                };
                var a7 = {
                  url: "".concat(k, "/capcode"),
                  headers: a6,
                  body: JSON.stringify(Z)
                };
                $.post(a7, function (a8, a9, aa) {
                  try {
                    a8 ? (console.log("".concat(JSON.stringify(a8))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a5(JSON.parse(aa));
                  } catch (ab) {
                    $.logErr(ab, a9);
                  } finally {
                    a5();
                  }
                });
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, Y);
    }));
    return M.apply(this, arguments);
  }
  function N(Y, Z, a0) {
    cryptojs = l.createCryptoJS();
    var a1 = cryptojs.enc.Utf8.parse(Z),
      a2 = cryptojs.enc.Utf8.parse(a0),
      a3 = cryptojs.enc.Utf8.parse(JSON.stringify(Y)),
      a4 = cryptojs.AES.encrypt(a3, a1, {
        iv: a2,
        mode: cryptojs.mode.CBC,
        padding: cryptojs.pad.Pkcs7
      });
    return cryptojs.enc.Base64.stringify(a4.ciphertext);
  }
  function O() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (Z) {
      var a0 = 16 * Math.random() | 0,
        a1 = "x" === Z ? a0 : 3 & a0 | 8;
      return a1.toString(16);
    }).replace(/-/g, "");
  }
  function P() {
    var Y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      Z = [];
    for (var a0 in Y) {
      var a1 = Y[a0];
      Z.push(a0 + "=" + Q(a1));
    }
    return Z.length ? "" + Z.join("&") : "";
  }
  function Q(Y) {
    Y = (Y + "").toString();
    return encodeURIComponent(Y).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function R() {
    var Y = Date.now(),
      Z = T(32, !1),
      a0 = "jsxww".concat(Z).concat(Y, "3a82b6ac78145c2a6c4ff1f7d3dced1b"),
      a1 = l.md5(a0);
    return "jsxww;".concat(Z, ";").concat(Y, ";").concat(a1);
  }
  function T() {
    var Y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      Z = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      a0 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      a1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      a2 = [];
    if (a0 = a0 || a1.length, Y) {
      for (var a3 = 0; a3 < Y; a3++) {
        a2[a3] = a1[0 | Math.random() * a0];
      }
    } else {
      var a4;
      a2[8] = a2[13] = a2[18] = a2[23] = "-";
      a2[14] = "4";
      for (var a5 = 0; a5 < 36; a5++) {
        a2[a5] || (a4 = 0 | 16 * Math.random(), a2[a5] = a1[19 == a5 ? 3 & a4 | 8 : a4]);
      }
    }
    return Z ? (a2.shift(), "u" + a2.join("")) : a2.join("");
  }
  function U() {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function Z() {
      var a0;
      return g().wrap(function a1(a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              if (a0 = $.getdata("Utils_Code") || "", !a0 || !Object.keys(a0).length) {
                a2.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a0);
              return a2.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a2.abrupt("return", new Promise(function () {
                var a5 = i(g().mark(function a6(a7) {
                  return g().wrap(function a9(aa) {
                    for (;;) {
                      switch (aa.prev = aa.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ab) {
                            $.setdata(ab, "Utils_Code");
                            eval(ab);
                            console.log("✅ Utils加载成功, 请继续");
                            a7(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aa.stop();
                      }
                    }
                  }, a6);
                }));
                return function (a7) {
                  return a5.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a2.stop();
          }
        }
      }, Z);
    }));
    return V.apply(this, arguments);
  }
  function W(Y) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function a0(a1) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              if (!$.isNode()) {
                a2.next = 5;
                break;
              }
              a2.next = 3;
              return notify.sendNotify($.name, a1);
            case 3:
              a2.next = 6;
              break;
            case 5:
              $.msg($.name, "", a1);
            case 6:
            case "end":
              return a2.stop();
          }
        }
      }, a0);
    }));
    return X.apply(this, arguments);
  }
  i(g().mark(function Y() {
    return g().wrap(function (a0) {
      for (;;) {
        switch (a0.prev = a0.next) {
          case 0:
            a0.next = 2;
            return w();
          case 2:
          case "end":
            return a0.stop();
        }
      }
    }, Y);
  }))().catch(function (Z) {
    $.log(Z);
  }).finally(function () {
    $.done({});
  });
})();