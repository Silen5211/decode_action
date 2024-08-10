//Sat Aug 10 2024 13:27:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ac) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (af) {
      return typeof af;
    } : function (af) {
      return af && "function" == typeof Symbol && af.constructor === Symbol && af !== Symbol.prototype ? "symbol" : typeof af;
    };
    return b(ac);
  }
  function c(ac, ad) {
    var af = "undefined" != typeof Symbol && ac[Symbol.iterator] || ac["@@iterator"];
    if (!af) {
      if (Array.isArray(ac) || (af = d(ac)) || ad && ac && "number" == typeof ac.length) {
        af && (ac = af);
        var ag = 0,
          ah = function () {};
        return {
          s: ah,
          n: function () {
            var an = {
              done: !0
            };
            return ag >= ac.length ? an : {
              done: !1,
              value: ac[ag++]
            };
          },
          e: function (am) {
            throw am;
          },
          f: ah
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ai,
      aj = !0,
      ak = !1;
    return {
      s: function () {
        af = af.call(ac);
      },
      n: function () {
        var an = af.next();
        aj = an.done;
        return an;
      },
      e: function (an) {
        ak = !0;
        ai = an;
      },
      f: function () {
        try {
          aj || null == af.return || af.return();
        } finally {
          if (ak) {
            throw ai;
          }
        }
      }
    };
  }
  function d(ac, ad) {
    if (ac) {
      if ("string" == typeof ac) {
        return f(ac, ad);
      }
      var af = {}.toString.call(ac).slice(8, -1);
      "Object" === af && ac.constructor && (af = ac.constructor.name);
      return "Map" === af || "Set" === af ? Array.from(ac) : "Arguments" === af || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(af) ? f(ac, ad) : void 0;
    }
  }
  function f(ac, ad) {
    (null == ad || ad > ac.length) && (ad = ac.length);
    for (var ag = 0, ah = Array(ad); ag < ad; ag++) {
      ah[ag] = ac[ag];
    }
    return ah;
  }
  function g() {
    'use strict';

    g = function () {
      return ae;
    };
    var ad,
      ae = {},
      af = Object.prototype,
      ag = af.hasOwnProperty,
      ah = Object.defineProperty || function (aJ, aK, aL) {
        aJ[aK] = aL.value;
      },
      ai = "function" == typeof Symbol ? Symbol : {},
      aj = ai.iterator || "@@iterator",
      ak = ai.asyncIterator || "@@asyncIterator",
      al = ai.toStringTag || "@@toStringTag";
    function am(aJ, aK, aL) {
      var aM = {
        value: aL,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aJ, aK, aM);
      return aJ[aK];
    }
    try {
      am({}, "");
    } catch (aK) {
      am = function (aM, aN, aO) {
        return aM[aN] = aO;
      };
    }
    function an(aM, aN, aO, aP) {
      var aQ = aN && aN.prototype instanceof au ? aN : au,
        aR = Object.create(aQ.prototype),
        aS = new aH(aP || []);
      ah(aR, "_invoke", {
        value: aD(aM, aO, aS)
      });
      return aR;
    }
    function ao(aM, aN, aO) {
      try {
        return {
          type: "normal",
          arg: aM.call(aN, aO)
        };
      } catch (aS) {
        var aP = {
          type: "throw",
          arg: aS
        };
        return aP;
      }
    }
    ae.wrap = an;
    var ap = "suspendedStart",
      aq = "suspendedYield",
      ar = "executing",
      as = "completed",
      at = {};
    function au() {}
    function av() {}
    function aw() {}
    var ax = {};
    am(ax, aj, function () {
      return this;
    });
    var ay = Object.getPrototypeOf,
      az = ay && ay(ay(aI([])));
    az && az !== af && ag.call(az, aj) && (ax = az);
    aw.prototype = au.prototype = Object.create(ax);
    var aA = aw.prototype;
    function aB(aM) {
      ["next", "throw", "return"].forEach(function (aO) {
        am(aM, aO, function (aQ) {
          return this._invoke(aO, aQ);
        });
      });
    }
    function aC(aM, aN) {
      function aQ(aR, aS, aT, aU) {
        var aW = ao(aM[aR], aM, aS);
        if ("throw" !== aW.type) {
          var aX = aW.arg,
            aY = aX.value;
          return aY && "object" == b(aY) && ag.call(aY, "__await") ? aN.resolve(aY.__await).then(function (aZ) {
            aQ("next", aZ, aT, aU);
          }, function (aZ) {
            aQ("throw", aZ, aT, aU);
          }) : aN.resolve(aY).then(function (aZ) {
            aX.value = aZ;
            aT(aX);
          }, function (aZ) {
            return aQ("throw", aZ, aT, aU);
          });
        }
        aU(aW.arg);
      }
      var aP;
      ah(this, "_invoke", {
        value: function (aR, aS) {
          function aU() {
            return new aN(function (aX, aY) {
              aQ(aR, aS, aX, aY);
            });
          }
          return aP = aP ? aP.then(aU, aU) : aU();
        }
      });
    }
    function aD(aM, aN, aO) {
      var aQ = ap;
      return function (aR, aS) {
        if (aQ === ar) {
          throw Error("Generator is already running");
        }
        if (aQ === as) {
          if ("throw" === aR) {
            throw aS;
          }
          var aU = {
            value: ad,
            done: !0
          };
          return aU;
        }
        for (aO.method = aR, aO.arg = aS;;) {
          var aV = aO.delegate;
          if (aV) {
            var aW = aE(aV, aO);
            if (aW) {
              if (aW === at) {
                continue;
              }
              return aW;
            }
          }
          if ("next" === aO.method) {
            aO.sent = aO._sent = aO.arg;
          } else {
            if ("throw" === aO.method) {
              if (aQ === ap) {
                throw aQ = as, aO.arg;
              }
              aO.dispatchException(aO.arg);
            } else {
              "return" === aO.method && aO.abrupt("return", aO.arg);
            }
          }
          aQ = ar;
          var aX = ao(aM, aN, aO);
          if ("normal" === aX.type) {
            if (aQ = aO.done ? as : aq, aX.arg === at) {
              continue;
            }
            var aY = {};
            aY.value = aX.arg;
            aY.done = aO.done;
            return aY;
          }
          "throw" === aX.type && (aQ = as, aO.method = "throw", aO.arg = aX.arg);
        }
      };
    }
    function aE(aM, aN) {
      var aR = aN.method,
        aS = aM.iterator[aR];
      if (aS === ad) {
        aN.delegate = null;
        "throw" === aR && aM.iterator.return && (aN.method = "return", aN.arg = ad, aE(aM, aN), "throw" === aN.method) || "return" !== aR && (aN.method = "throw", aN.arg = new TypeError("The iterator does not provide a '" + aR + "' method"));
        return at;
      }
      var aT = ao(aS, aM.iterator, aN.arg);
      if ("throw" === aT.type) {
        aN.method = "throw";
        aN.arg = aT.arg;
        aN.delegate = null;
        return at;
      }
      var aU = aT.arg;
      return aU ? aU.done ? (aN[aM.resultName] = aU.value, aN.next = aM.nextLoc, "return" !== aN.method && (aN.method = "next", aN.arg = ad), aN.delegate = null, at) : aU : (aN.method = "throw", aN.arg = new TypeError("iterator result is not an object"), aN.delegate = null, at);
    }
    function aF(aM) {
      var aN = {
        tryLoc: aM[0]
      };
      var aO = aN;
      1 in aM && (aO.catchLoc = aM[1]);
      2 in aM && (aO.finallyLoc = aM[2], aO.afterLoc = aM[3]);
      this.tryEntries.push(aO);
    }
    function aG(aM) {
      var aN = aM.completion || {};
      aN.type = "normal";
      delete aN.arg;
      aM.completion = aN;
    }
    function aH(aM) {
      var aN = {
        tryLoc: "root"
      };
      this.tryEntries = [aN];
      aM.forEach(aF, this);
      this.reset(!0);
    }
    function aI(aM) {
      if (aM || "" === aM) {
        var aO = aM[aj];
        if (aO) {
          return aO.call(aM);
        }
        if ("function" == typeof aM.next) {
          return aM;
        }
        if (!isNaN(aM.length)) {
          var aP = -1,
            aQ = function aT() {
              for (; ++aP < aM.length;) {
                if (ag.call(aM, aP)) {
                  aT.value = aM[aP];
                  aT.done = !1;
                  return aT;
                }
              }
              aT.value = ad;
              aT.done = !0;
              return aT;
            };
          return aQ.next = aQ;
        }
      }
      throw new TypeError(b(aM) + " is not iterable");
    }
    av.prototype = aw;
    ah(aA, "constructor", {
      value: aw,
      configurable: !0
    });
    ah(aw, "constructor", {
      value: av,
      configurable: !0
    });
    av.displayName = am(aw, al, "GeneratorFunction");
    ae.isGeneratorFunction = function (aM) {
      var aO = "function" == typeof aM && aM.constructor;
      return !!aO && (aO === av || "GeneratorFunction" === (aO.displayName || aO.name));
    };
    ae.mark = function (aM) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aM, aw) : (aM.__proto__ = aw, am(aM, al, "GeneratorFunction"));
      aM.prototype = Object.create(aA);
      return aM;
    };
    ae.awrap = function (aM) {
      var aO = {};
      aO.__await = aM;
      return aO;
    };
    aB(aC.prototype);
    am(aC.prototype, ak, function () {
      return this;
    });
    ae.AsyncIterator = aC;
    ae.async = function (aM, aN, aO, aP, aQ) {
      void 0 === aQ && (aQ = Promise);
      var aS = new aC(an(aM, aN, aO, aP), aQ);
      return ae.isGeneratorFunction(aN) ? aS : aS.next().then(function (aU) {
        return aU.done ? aU.value : aS.next();
      });
    };
    aB(aA);
    am(aA, al, "Generator");
    am(aA, aj, function () {
      return this;
    });
    am(aA, "toString", function () {
      return "[object Generator]";
    });
    ae.keys = function (aM) {
      var aN = Object(aM),
        aO = [];
      for (var aP in aN) aO.push(aP);
      aO.reverse();
      return function aQ() {
        for (; aO.length;) {
          var aR = aO.pop();
          if (aR in aN) {
            aQ.value = aR;
            aQ.done = !1;
            return aQ;
          }
        }
        aQ.done = !0;
        return aQ;
      };
    };
    ae.values = aI;
    aH.prototype = {
      constructor: aH,
      reset: function (aM) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ad, this.done = !1, this.delegate = null, this.method = "next", this.arg = ad, this.tryEntries.forEach(aG), !aM) {
          for (var aO in this) "t" === aO.charAt(0) && ag.call(this, aO) && !isNaN(+aO.slice(1)) && (this[aO] = ad);
        }
      },
      stop: function () {
        this.done = !0;
        var aM = this.tryEntries[0].completion;
        if ("throw" === aM.type) {
          throw aM.arg;
        }
        return this.rval;
      },
      dispatchException: function (aM) {
        if (this.done) {
          throw aM;
        }
        var aO = this;
        function aV(aW, aX) {
          aR.type = "throw";
          aR.arg = aM;
          aO.next = aW;
          aX && (aO.method = "next", aO.arg = ad);
          return !!aX;
        }
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP],
            aR = aQ.completion;
          if ("root" === aQ.tryLoc) {
            return aV("end");
          }
          if (aQ.tryLoc <= this.prev) {
            var aS = ag.call(aQ, "catchLoc"),
              aT = ag.call(aQ, "finallyLoc");
            if (aS && aT) {
              if (this.prev < aQ.catchLoc) {
                return aV(aQ.catchLoc, !0);
              }
              if (this.prev < aQ.finallyLoc) {
                return aV(aQ.finallyLoc);
              }
            } else {
              if (aS) {
                if (this.prev < aQ.catchLoc) {
                  return aV(aQ.catchLoc, !0);
                }
              } else {
                if (!aT) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aQ.finallyLoc) {
                  return aV(aQ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aM, aN) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc <= this.prev && ag.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
            var aQ = aP;
            break;
          }
        }
        aQ && ("break" === aM || "continue" === aM) && aQ.tryLoc <= aN && aN <= aQ.finallyLoc && (aQ = null);
        var aR = aQ ? aQ.completion : {};
        aR.type = aM;
        aR.arg = aN;
        return aQ ? (this.method = "next", this.next = aQ.finallyLoc, at) : this.complete(aR);
      },
      complete: function (aM, aN) {
        if ("throw" === aM.type) {
          throw aM.arg;
        }
        "break" === aM.type || "continue" === aM.type ? this.next = aM.arg : "return" === aM.type ? (this.rval = this.arg = aM.arg, this.method = "return", this.next = "end") : "normal" === aM.type && aN && (this.next = aN);
        return at;
      },
      finish: function (aM) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.finallyLoc === aM) {
            this.complete(aP.completion, aP.afterLoc);
            aG(aP);
            return at;
          }
        }
      },
      catch: function (aM) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc === aM) {
            var aQ = aP.completion;
            if ("throw" === aQ.type) {
              var aR = aQ.arg;
              aG(aP);
            }
            return aR;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aM, aN, aO) {
        this.delegate = {
          iterator: aI(aM),
          resultName: aN,
          nextLoc: aO
        };
        "next" === this.method && (this.arg = ad);
        return at;
      }
    };
    return ae;
  }
  function h(ac, ad, ae, af, ag, ah, ai) {
    try {
      var aj = ac[ah](ai),
        ak = aj.value;
    } catch (an) {
      return void ae(an);
    }
    aj.done ? ad(ak) : Promise.resolve(ak).then(af, ag);
  }
  function i(ac) {
    return function () {
      var af = this,
        ag = arguments;
      return new Promise(function (ah, ai) {
        var ak = ac.apply(af, ag);
        function al(an) {
          h(ak, ah, ai, al, am, "next", an);
        }
        function am(an) {
          h(ak, ah, ai, al, am, "throw", an);
        }
        al(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.DuJia : $.getdata("DuJia")) || "",
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
    u = "46",
    v = "10020",
    w = "FR*r!isE5W",
    x = "7200328065bd807fe056fbaadd92deed",
    y = "",
    z = "",
    A = "",
    B = "";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ad() {
      var ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl;
      return g().wrap(function (bm) {
        for (;;) {
          switch (bm.prev = bm.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bm.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bm.next = 5;
              return aa("先去boxjs填写账号密码");
            case 5:
              return bm.abrupt("return");
            case 6:
              bm.next = 8;
              return a8();
            case 8:
              l = bm.sent;
              ag = j.split(" ");
              ah = c(ag);
              bm.prev = 11;
              ah.s();
            case 13:
              if ((ai = ah.n()).done) {
                bm.next = 262;
                break;
              }
              aj = ai.value;
              console.log("随机生成UA");
              ak = a4();
              s = ak.ua;
              t = ak.commonUa;
              console.log(s);
              console.log(t);
              q = aj.split("&")[0];
              r = aj.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bm.next = 27;
              return L("/api/account/init");
            case 27:
              al = bm.sent;
              o = al.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bm.next = 33;
              return F("/web/init?client_id=".concat(v));
            case 33:
              am = bm.sent;
              m = am.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bm.next = 39;
              return H("/web/oauth/credential_auth");
            case 39:
              if (an = bm.sent, an.data) {
                bm.next = 43;
                break;
              }
              console.log(an.message);
              return bm.abrupt("continue", 260);
            case 43:
              ao = an.data.authorization_code.code;
              console.log(ao);
              console.log("登录");
              bm.next = 48;
              return L("/api/zbtxz/login", "check_token=&code=".concat(ao, "&token=&type=-1&union_id="));
            case 48:
              if (ap = bm.sent, console.log("登录成功"), p = ap.data.session.account_id, o = ap.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), y) {
                bm.next = 68;
                break;
              }
              bm.next = 58;
              return J("/api/buoy/list");
            case 58:
              aq = bm.sent;
              ar = decodeURIComponent(aq.data.new_down.icon_list[2].turn_to.url);
              bm.next = 62;
              return N(ar);
            case 62:
              for (ar = bm.sent, as = ar.split("?")[1], at = {}, au = as.split("&"), av = 0, aw = au.length; av < aw; av++) {
                ax = au[av].split("=");
                at[ax[0]] = ax[1];
              }
              y = at.id;
            case 68:
              if (y) {
                bm.next = 71;
                break;
              }
              console.log("获取id失败");
              return bm.abrupt("continue", 260);
            case 71:
              console.log(y);
              console.log("获取apiDt");
              bm.next = 75;
              return P("/aosbase/_auth_dt");
            case 75:
              ay = bm.sent;
              z = ay.data.substring(32, 68);
              console.log(z);
              A = "0";
              az = {
                app_user_token: o,
                appid: "jiaxing",
                noncestr: a7(6, !1),
                phone: q,
                portrait_url: ap.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ap.data.account.id,
                user_name: ap.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              az.signature = l.md5(a5(az) + "&appkey=".concat(x));
              bm.next = 83;
              return U("/aosbase/_auth_appuserinit", az);
            case 83:
              aA = bm.sent;
              B = aA.data.access_token;
              A = aA.data.data.user_id;
              console.log("阅读token：".concat(B));
              aB = "";
              aC = Date.now() + "" + Math.floor(10000000 * Math.random());
              bm.next = 91;
              return R("/aoslearnfoot/_optionp_list?activity_id=".concat(y));
            case 91:
              aD = bm.sent;
              aE = c(aD.data);
              bm.prev = 93;
              aE.s();
            case 95:
              if ((aF = aE.n()).done) {
                bm.next = 182;
                break;
              }
              aG = aF.value;
              aH = aG.id;
              console.log(aG.title);
              bm.next = 101;
              return R("/aoslearnfoot/optionp_detail?id=".concat(aG.id));
            case 101:
              if (aI = bm.sent, aI.data.task_num != aI.data.user_done_num) {
                bm.next = 105;
                break;
              }
              console.log("已完成");
              return bm.abrupt("continue", 180);
            case 105:
              if (aB) {
                bm.next = 146;
                break;
              }
              console.log("获取滑块token");
              aJ = 0;
            case 108:
              if (!(aJ < 3)) {
                bm.next = 146;
                break;
              }
              aK = a7(10, !1);
              aL = Math.round(new Date().getTime() / 1000).toString();
              aM = "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aH);
              aN = a2({
                once: aK,
                referer: aM,
                timestamp: aL,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bm.next = 115;
              return R("/basemodule/_captcha_get?once=".concat(aK, "&referer=").concat(aM, "&timestamp=").concat(aL, "&type=1&signature=").concat(encodeURIComponent(aN)));
            case 115:
              aO = bm.sent;
              console.log("滑块：".concat(aO.data.block));
              console.log("背景：".concat(aO.data.background));
              bm.next = 120;
              return W({
                slidingImage: aO.data.block,
                backImage: aO.data.background
              });
            case 120:
              if (aP = bm.sent, aP) {
                bm.next = 126;
                break;
              }
              console.log("ddddocr服务异常");
              bm.next = 125;
              return aa("ddddocr服务异常");
            case 125:
              return bm.abrupt("continue", 143);
            case 126:
              console.log(aP);
              aQ = aP.result;
              aR = a2({
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
              bm.next = 132;
              return U("/basemodule/_captcha_check", {
                token: aO.data.token,
                data: aR,
                referer: aM,
                type: aO.data.type
              });
            case 132:
              if (aS = bm.sent, !aS.data.result) {
                bm.next = 142;
                break;
              }
              bm.next = 136;
              return U("/aosbasemodule/intelverifcode_check", {
                validate: aS.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 136:
              aT = bm.sent;
              aB = aT.data.tokenid;
              console.log("滑块token：".concat(aB));
              return bm.abrupt("break", 146);
            case 142:
              console.log("验证失败");
            case 143:
              aJ++;
              bm.next = 108;
              break;
            case 146:
              if (aB) {
                bm.next = 148;
                break;
              }
              return bm.abrupt("break", 182);
            case 148:
              bm.next = 150;
              return R("/aosbasemodule/_task_list?offset=0&count=".concat(aG.task_num, "&module_id=").concat(aG.m_id, "&activity_id=").concat(aG.id));
            case 150:
              aU = bm.sent;
              aV = c(aU.data);
              bm.prev = 152;
              aV.s();
            case 154:
              if ((aW = aV.n()).done) {
                bm.next = 172;
                break;
              }
              if (aX = aW.value, console.log("文章：".concat(aX.title)), 1 != aX.user_done) {
                bm.next = 160;
                break;
              }
              console.log("已完成");
              return bm.abrupt("continue", 170);
            case 160:
              var bo = {};
              bo.task_id = aX.id;
              bm.next = 162;
              return U("/aosbasemodule/task_create", bo);
            case 162:
              aY = bm.sent;
              bm.next = 165;
              return J("/api/article/detail?id=".concat(JSON.parse(aX.rule).news_id));
            case 165:
              var bp = {};
              bp.task_record_id = aY.data.task_record_id;
              bp.collect_info = "";
              bp.afs_tokenid = aB;
              bp.device_token = aC;
              bm.sent;
              bm.next = 168;
              return U("/aosbasemodule/task_done", bp);
            case 168:
              aZ = bm.sent;
              console.log("阅读：".concat(aZ.msg));
            case 170:
              bm.next = 154;
              break;
            case 172:
              bm.next = 177;
              break;
            case 174:
              bm.prev = 174;
              bm.t0 = bm.catch(152);
              aV.e(bm.t0);
            case 177:
              bm.prev = 177;
              aV.f();
              return bm.finish(177);
            case 180:
              bm.next = 95;
              break;
            case 182:
              bm.next = 187;
              break;
            case 184:
              bm.prev = 184;
              bm.t1 = bm.catch(93);
              aE.e(bm.t1);
            case 187:
              bm.prev = 187;
              aE.f();
              return bm.finish(187);
            case 190:
              bm.next = 192;
              return R("/aoslearnfoot/_ac_detail?id=".concat(y));
            case 192:
              b0 = bm.sent;
              b1 = JSON.parse(b0.data.other_set).lottery.id;
              bm.next = 196;
              return R("/aoslottery/ac_lottery_times?id=".concat(b1));
            case 196:
              if (b2 = bm.sent, console.log("拥有".concat(b2.data.all_remain, "次抽奖")), !(b2.data.all_remain > 0)) {
                bm.next = 260;
                break;
              }
              console.log("获取抽奖滑块token");
              b3 = "";
              b4 = 0;
            case 202:
              if (!(b4 < 3)) {
                bm.next = 240;
                break;
              }
              b5 = a7(10, !1);
              b6 = Math.round(new Date().getTime() / 1000).toString();
              b7 = "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              b8 = a2({
                once: b5,
                referer: b7,
                timestamp: b6,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bm.next = 209;
              return R("/basemodule/_captcha_get?once=".concat(b5, "&referer=").concat(b7, "&timestamp=").concat(b6, "&type=1&signature=").concat(encodeURIComponent(b8)));
            case 209:
              b9 = bm.sent;
              console.log("滑块：".concat(b9.data.block));
              console.log("背景：".concat(b9.data.background));
              bm.next = 214;
              return W({
                slidingImage: b9.data.block,
                backImage: b9.data.background
              });
            case 214:
              if (ba = bm.sent, ba) {
                bm.next = 220;
                break;
              }
              console.log("ddddocr服务异常");
              bm.next = 219;
              return aa("ddddocr服务异常");
            case 219:
              return bm.abrupt("continue", 237);
            case 220:
              console.log(ba);
              bb = ba.result;
              bc = a2({
                x: bb,
                width: 384,
                track: [{
                  x: Math.floor(bb / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bb / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bb / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bb / 4),
                  y: 0,
                  time: 100
                }, {
                  x: bb / 2,
                  y: 0,
                  time: 100
                }, {
                  x: bb,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bm.next = 226;
              return U("/basemodule/_captcha_check", {
                token: b9.data.token,
                data: bc,
                referer: b7,
                type: b9.data.type
              });
            case 226:
              if (bd = bm.sent, !bd.data.result) {
                bm.next = 236;
                break;
              }
              bm.next = 230;
              return U("/aosbasemodule/intelverifcode_check", {
                validate: bd.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 230:
              be = bm.sent;
              b3 = be.data.tokenid;
              console.log("抽奖滑块token：".concat(b3));
              return bm.abrupt("break", 240);
            case 236:
              console.log("验证失败");
            case 237:
              b4++;
              bm.next = 202;
              break;
            case 240:
              if (b3) {
                bm.next = 242;
                break;
              }
              return bm.abrupt("continue", 260);
            case 242:
              bm.next = 244;
              return R("/aoslottery/_ac_detail?id=".concat(b1));
            case 244:
              bf = bm.sent;
              bg = 0;
            case 246:
              if (!(bg < b2.data.all_remain)) {
                bm.next = 260;
                break;
              }
              bm.next = 249;
              return U("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: bf.data.m_id,
                content_id: bf.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: bf.data.title,
                device_token: aC,
                user_id: aA.data.data.user_id,
                user_name: aA.data.data.user_name,
                phone_num: q,
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
            case 249:
              if (bh = bm.sent, console.log("抽奖提交：".concat(bh.msg)), 0 == bh.code) {
                bm.next = 253;
                break;
              }
              return bm.abrupt("continue", 257);
            case 253:
              var bq = {};
              bq.id = b1;
              bq.verif_uuid = "";
              bq.verif_code = "";
              bq.afs_tokenid = b3;
              bq.collect_info = "";
              bq.longitude = 0;
              bq.latitude = 0;
              bq.device_token = aC;
              bm.next = 255;
              return U("/aoslottery/ac_sub", bq);
            case 255:
              bi = bm.sent;
              0 == bi.code ? (console.log("抽奖获得：".concat(null == bi || null === (bj = bi.data) || void 0 === bj ? void 0 : bj.title)), 3 == (null == bi || null === (bk = bi.data) || void 0 === bk ? void 0 : bk.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == bi || null === (bl = bi.data) || void 0 === bl ? void 0 : bl.title, "\n"))) : "o d w" == bi.msg ? console.log("谢谢参与") : console.log(bi.msg);
            case 257:
              bg++;
              bm.next = 246;
              break;
            case 260:
              bm.next = 13;
              break;
            case 262:
              bm.next = 267;
              break;
            case 264:
              bm.prev = 264;
              bm.t2 = bm.catch(11);
              ah.e(bm.t2);
            case 267:
              bm.prev = 267;
              ah.f();
              return bm.finish(267);
            case 270:
              if (!n) {
                bm.next = 273;
                break;
              }
              bm.next = 273;
              return aa(n);
            case 273:
            case "end":
              return bm.stop();
          }
        }
      }, ad, null, [[11, 264, 267, 270], [93, 184, 187, 190], [152, 174, 177, 180]]);
    }));
    return E.apply(this, arguments);
  }
  function F(ac) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a1(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                            } catch (az) {
                              $.logErr(az, ar);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ap);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return G.apply(this, arguments);
  }
  function H(ac) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ac(ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = Y();
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
                    "user-agent": s
                  },
                  body: af.body
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ai(JSON.parse(aq));
                            } catch (as) {
                              $.logErr(as, ap);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
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
    return I.apply(this, arguments);
  }
  function J(ac) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ad(ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = Z(ae);
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ag.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": ag.uuid,
                  "X-SIGNATURE": ag.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": t
                };
                var am = {
                  url: "https://vapp.jiaxingren.com".concat(ae),
                  headers: al
                };
                $.get(am, function () {
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
                            aj(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            aj();
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
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return K.apply(this, arguments);
  }
  function L(ac, ad) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ac(ad, ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = Z(ad);
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://vapp.jiaxingren.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ae
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
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
    return M.apply(this, arguments);
  }
  function N(ac) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  Connection: "Keep-Alive",
                  "Upgrade-Insecure-Requests": "1",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "X-Requested-With": "com.hoge.android.app.hdd",
                  "Sec-Fetch-Site": "none",
                  "Sec-Fetch-Mode": "navigate",
                  "Sec-Fetch-User": "?1",
                  "Sec-Fetch-Dest": "document",
                  Referer: "https://jiaxing.y-h5.iyunxh.com/",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var al = {
                  url: "".concat(ae),
                  headers: ak,
                  followRedirect: !1
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    var as;
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
                            at.next = 10;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            as = aq.headers.location || aq.headers.Location;
                            aj(as);
                          case 10:
                            at.next = 15;
                            break;
                          case 12:
                            at.prev = 12;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 15:
                            at.prev = 15;
                            aj();
                            return at.finish(15);
                          case 18:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return O.apply(this, arguments);
  }
  function P(ac) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "41",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
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
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
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
    return Q.apply(this, arguments);
  }
  function R(ac) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ad(ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": a0(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
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
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
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
      }, ad);
    }));
    return T.apply(this, arguments);
  }
  function U(ac, ad) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ad(ae, af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": a0(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(af)
                };
                $.post(al, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return V.apply(this, arguments);
  }
  function W(ac) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ae)
                };
                $.post(ak, function (al, am, an) {
                  try {
                    al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aj(JSON.parse(an));
                  } catch (ao) {
                    $.logErr(ao, am);
                  } finally {
                    aj();
                  }
                });
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return X.apply(this, arguments);
  }
  function Y() {
    var ac = new (l.loadJSEncrypt())();
    ac.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ac.encrypt(r);
    var ad = a1(),
      ae = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q),
      af = "post%%/web/oauth/credential_auth?".concat(ae, "%%").concat(ad, "%%");
    ae = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ag = CryptoJS.HmacSHA256(af, m),
      ah = CryptoJS.enc.Hex.stringify(ag),
      ai = {
        uuid: ad,
        signature: ah,
        body: ae
      };
    return ai;
  }
  function Z(ac) {
    var ad = a1(),
      ae = Date.now();
    ac.indexOf("?") > 0 && (ac = ac.substring(0, ac.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var af = CryptoJS.SHA256("".concat(ac, "&&").concat(o, "&&").concat(ad, "&&").concat(ae, "&&").concat(w, "&&").concat(u)).toString(),
      ag = {
        uuid: ad,
        time: ae,
        signature: af
      };
    return ag;
  }
  function a0() {
    var ac = Date.now(),
      ad = a7(32, !1),
      ae = "jiaxing".concat(ad).concat(ac, "bdcd70c1c7c3544a34c1a1d45b1fdef0"),
      af = l.md5(ae);
    return "jiaxing;".concat(ad, ";").concat(ac, ";").concat(af);
  }
  function a1() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ad) {
      var ae = 16 * Math.random() | 0,
        af = "x" === ad ? ae : 3 & ae | 8;
      return af.toString(16);
    });
  }
  function a2(ac, ad, ae) {
    var af = l.createCryptoJS(),
      ag = af.enc.Utf8.parse(ad),
      ah = af.enc.Utf8.parse(ae),
      ai = af.enc.Utf8.parse(JSON.stringify(ac)),
      aj = af.AES.encrypt(ai, ag, {
        iv: ah,
        mode: af.mode.CBC,
        padding: af.pad.Pkcs7
      });
    return af.enc.Base64.stringify(aj.ciphertext);
  }
  function a3(ac) {
    return ac[Math.floor(Math.random() * ac.length)];
  }
  function a4() {
    var ac = "8.1.1",
      ad = a1(),
      ae = a3(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      af = "Xiaomi " + ae,
      ag = "Android",
      ah = "".concat(ag.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(ac, ";1.0;null;").concat(ae),
      ai = "".concat(ac, ";").concat(ad, ";").concat(af, ";").concat(ag, ";").concat("11", ";Release;").concat("6.12.0"),
      aj = {
        ua: ah,
        commonUa: ai
      };
    return aj;
  }
  function a5() {
    var ac = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ad = [];
    for (var ae in ac) {
      var af = ac[ae];
      ad.push(ae + "=" + a6(af));
    }
    return ad.length ? "" + ad.join("&") : "";
  }
  function a6(ac) {
    ac = (ac + "").toString();
    return encodeURIComponent(ac).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a7() {
    var ac = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ad = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ae = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      af = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ag = [];
    if (ae = ae || af.length, ac) {
      for (var ah = 0; ah < ac; ah++) {
        ag[ah] = af[0 | Math.random() * ae];
      }
    } else {
      var ai;
      ag[8] = ag[13] = ag[18] = ag[23] = "-";
      ag[14] = "4";
      for (var aj = 0; aj < 36; aj++) {
        ag[aj] || (ai = 0 | 16 * Math.random(), ag[aj] = af[19 == aj ? 3 & ai | 8 : ai]);
      }
    }
    return ad ? (ag.shift(), "u" + ag.join("")) : ag.join("");
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function ad() {
      var af;
      return g().wrap(function ag(ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (af = $.getdata("Utils_Code") || "", !af || !Object.keys(af).length) {
                ah.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(af);
              return ah.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ah.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return a9.apply(this, arguments);
  }
  function aa(ac) {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (!$.isNode()) {
                ah.next = 5;
                break;
              }
              ah.next = 3;
              return notify.sendNotify($.name, ae);
            case 3:
              ah.next = 6;
              break;
            case 5:
              $.msg($.name, "", ae);
            case 6:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return ab.apply(this, arguments);
  }
  i(g().mark(function ac() {
    return g().wrap(function (ad) {
      for (;;) {
        switch (ad.prev = ad.next) {
          case 0:
            ad.next = 2;
            return D();
          case 2:
          case "end":
            return ad.stop();
        }
      }
    }, ac);
  }))().catch(function (ad) {
    $.log(ad);
  }).finally(function () {
    $.done({});
  });
})();