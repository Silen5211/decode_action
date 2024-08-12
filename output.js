//Mon Aug 12 2024 05:02:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(af) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
      return typeof ah;
    } : function (ah) {
      return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
    };
    return b(af);
  }
  function c(af, ag) {
    var aj = "undefined" != typeof Symbol && af[Symbol.iterator] || af["@@iterator"];
    if (!aj) {
      if (Array.isArray(af) || (aj = d(af)) || ag && af && "number" == typeof af.length) {
        aj && (af = aj);
        var ak = 0,
          al = function () {};
        return {
          s: al,
          n: function () {
            var aq = {
              done: !0
            };
            return ak >= af.length ? aq : {
              done: !1,
              value: af[ak++]
            };
          },
          e: function (aq) {
            throw aq;
          },
          f: al
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var am,
      an = !0,
      ao = !1;
    return {
      s: function () {
        aj = aj.call(af);
      },
      n: function () {
        var as = aj.next();
        an = as.done;
        return as;
      },
      e: function (ar) {
        ao = !0;
        am = ar;
      },
      f: function () {
        try {
          an || null == aj.return || aj.return();
        } finally {
          if (ao) {
            throw am;
          }
        }
      }
    };
  }
  function d(af, ag) {
    if (af) {
      if ("string" == typeof af) {
        return f(af, ag);
      }
      var ah = {}.toString.call(af).slice(8, -1);
      "Object" === ah && af.constructor && (ah = af.constructor.name);
      return "Map" === ah || "Set" === ah ? Array.from(af) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(af, ag) : void 0;
    }
  }
  function f(af, ag) {
    (null == ag || ag > af.length) && (ag = af.length);
    for (var ai = 0, aj = Array(ag); ai < ag; ai++) {
      aj[ai] = af[ai];
    }
    return aj;
  }
  function g() {
    'use strict';

    g = function () {
      return ah;
    };
    var ag,
      ah = {},
      ai = Object.prototype,
      aj = ai.hasOwnProperty,
      ak = Object.defineProperty || function (aM, aN, aO) {
        aM[aN] = aO.value;
      },
      al = "function" == typeof Symbol ? Symbol : {},
      am = al.iterator || "@@iterator",
      an = al.asyncIterator || "@@asyncIterator",
      ao = al.toStringTag || "@@toStringTag";
    function ap(aM, aN, aO) {
      var aP = {
        value: aO,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aM, aN, aP);
      return aM[aN];
    }
    try {
      ap({}, "");
    } catch (aN) {
      ap = function (aO, aP, aQ) {
        return aO[aP] = aQ;
      };
    }
    function aq(aP, aQ, aR, aS) {
      var aT = aQ && aQ.prototype instanceof ax ? aQ : ax,
        aU = Object.create(aT.prototype),
        aV = new aK(aS || []);
      ak(aU, "_invoke", {
        value: aG(aP, aR, aV)
      });
      return aU;
    }
    function ar(aP, aQ, aR) {
      try {
        return {
          type: "normal",
          arg: aP.call(aQ, aR)
        };
      } catch (aW) {
        var aT = {};
        aT.type = "throw";
        aT.arg = aW;
        return aT;
      }
    }
    ah.wrap = aq;
    var as = "suspendedStart",
      at = "suspendedYield",
      au = "executing",
      av = "completed",
      aw = {};
    function ax() {}
    function ay() {}
    function az() {}
    var aA = {};
    ap(aA, am, function () {
      return this;
    });
    var aB = Object.getPrototypeOf,
      aC = aB && aB(aB(aL([])));
    aC && aC !== ai && aj.call(aC, am) && (aA = aC);
    az.prototype = ax.prototype = Object.create(aA);
    var aD = az.prototype;
    function aE(aP) {
      ["next", "throw", "return"].forEach(function (aR) {
        ap(aP, aR, function (aT) {
          return this._invoke(aR, aT);
        });
      });
    }
    function aF(aP, aQ) {
      function aT(aU, aV, aW, aX) {
        var aZ = ar(aP[aU], aP, aV);
        if ("throw" !== aZ.type) {
          var b0 = aZ.arg,
            b1 = b0.value;
          return b1 && "object" == b(b1) && aj.call(b1, "__await") ? aQ.resolve(b1.__await).then(function (b4) {
            aT("next", b4, aW, aX);
          }, function (b4) {
            aT("throw", b4, aW, aX);
          }) : aQ.resolve(b1).then(function (b4) {
            b0.value = b4;
            aW(b0);
          }, function (b4) {
            return aT("throw", b4, aW, aX);
          });
        }
        aX(aZ.arg);
      }
      var aS;
      ak(this, "_invoke", {
        value: function (aU, aV) {
          function aY() {
            return new aQ(function (b0, b1) {
              aT(aU, aV, b0, b1);
            });
          }
          return aS = aS ? aS.then(aY, aY) : aY();
        }
      });
    }
    function aG(aP, aQ, aR) {
      var aT = as;
      return function (aU, aV) {
        if (aT === au) {
          throw Error("Generator is already running");
        }
        if (aT === av) {
          if ("throw" === aU) {
            throw aV;
          }
          var aX = {
            value: ag,
            done: !0
          };
          return aX;
        }
        for (aR.method = aU, aR.arg = aV;;) {
          var aY = aR.delegate;
          if (aY) {
            var aZ = aH(aY, aR);
            if (aZ) {
              if (aZ === aw) {
                continue;
              }
              return aZ;
            }
          }
          if ("next" === aR.method) {
            aR.sent = aR._sent = aR.arg;
          } else {
            if ("throw" === aR.method) {
              if (aT === as) {
                throw aT = av, aR.arg;
              }
              aR.dispatchException(aR.arg);
            } else {
              "return" === aR.method && aR.abrupt("return", aR.arg);
            }
          }
          aT = au;
          var b0 = ar(aP, aQ, aR);
          if ("normal" === b0.type) {
            if (aT = aR.done ? av : at, b0.arg === aw) {
              continue;
            }
            var b1 = {};
            b1.value = b0.arg;
            b1.done = aR.done;
            return b1;
          }
          "throw" === b0.type && (aT = av, aR.method = "throw", aR.arg = b0.arg);
        }
      };
    }
    function aH(aP, aQ) {
      var aV = aQ.method,
        aW = aP.iterator[aV];
      if (aW === ag) {
        aQ.delegate = null;
        "throw" === aV && aP.iterator.return && (aQ.method = "return", aQ.arg = ag, aH(aP, aQ), "throw" === aQ.method) || "return" !== aV && (aQ.method = "throw", aQ.arg = new TypeError("The iterator does not provide a '" + aV + "' method"));
        return aw;
      }
      var aU = ar(aW, aP.iterator, aQ.arg);
      if ("throw" === aU.type) {
        aQ.method = "throw";
        aQ.arg = aU.arg;
        aQ.delegate = null;
        return aw;
      }
      var aT = aU.arg;
      return aT ? aT.done ? (aQ[aP.resultName] = aT.value, aQ.next = aP.nextLoc, "return" !== aQ.method && (aQ.method = "next", aQ.arg = ag), aQ.delegate = null, aw) : aT : (aQ.method = "throw", aQ.arg = new TypeError("iterator result is not an object"), aQ.delegate = null, aw);
    }
    function aI(aP) {
      var aQ = {
        tryLoc: aP[0]
      };
      var aR = aQ;
      1 in aP && (aR.catchLoc = aP[1]);
      2 in aP && (aR.finallyLoc = aP[2], aR.afterLoc = aP[3]);
      this.tryEntries.push(aR);
    }
    function aJ(aP) {
      var aQ = aP.completion || {};
      aQ.type = "normal";
      delete aQ.arg;
      aP.completion = aQ;
    }
    function aK(aP) {
      var aQ = {
        tryLoc: "root"
      };
      this.tryEntries = [aQ];
      aP.forEach(aI, this);
      this.reset(!0);
    }
    function aL(aP) {
      if (aP || "" === aP) {
        var aR = aP[am];
        if (aR) {
          return aR.call(aP);
        }
        if ("function" == typeof aP.next) {
          return aP;
        }
        if (!isNaN(aP.length)) {
          var aS = -1,
            aT = function aW() {
              for (; ++aS < aP.length;) {
                if (aj.call(aP, aS)) {
                  aW.value = aP[aS];
                  aW.done = !1;
                  return aW;
                }
              }
              aW.value = ag;
              aW.done = !0;
              return aW;
            };
          return aT.next = aT;
        }
      }
      throw new TypeError(b(aP) + " is not iterable");
    }
    ay.prototype = az;
    ak(aD, "constructor", {
      value: az,
      configurable: !0
    });
    ak(az, "constructor", {
      value: ay,
      configurable: !0
    });
    ay.displayName = ap(az, ao, "GeneratorFunction");
    ah.isGeneratorFunction = function (aP) {
      var aQ = "function" == typeof aP && aP.constructor;
      return !!aQ && (aQ === ay || "GeneratorFunction" === (aQ.displayName || aQ.name));
    };
    ah.mark = function (aP) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aP, az) : (aP.__proto__ = az, ap(aP, ao, "GeneratorFunction"));
      aP.prototype = Object.create(aD);
      return aP;
    };
    ah.awrap = function (aP) {
      var aQ = {
        __await: aP
      };
      return aQ;
    };
    aE(aF.prototype);
    ap(aF.prototype, an, function () {
      return this;
    });
    ah.AsyncIterator = aF;
    ah.async = function (aP, aQ, aR, aS, aT) {
      void 0 === aT && (aT = Promise);
      var aV = new aF(aq(aP, aQ, aR, aS), aT);
      return ah.isGeneratorFunction(aQ) ? aV : aV.next().then(function (aX) {
        return aX.done ? aX.value : aV.next();
      });
    };
    aE(aD);
    ap(aD, ao, "Generator");
    ap(aD, am, function () {
      return this;
    });
    ap(aD, "toString", function () {
      return "[object Generator]";
    });
    ah.keys = function (aP) {
      var aR = Object(aP),
        aS = [];
      for (var aT in aR) aS.push(aT);
      aS.reverse();
      return function aU() {
        for (; aS.length;) {
          var aV = aS.pop();
          if (aV in aR) {
            aU.value = aV;
            aU.done = !1;
            return aU;
          }
        }
        aU.done = !0;
        return aU;
      };
    };
    ah.values = aL;
    aK.prototype = {
      constructor: aK,
      reset: function (aP) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ag, this.done = !1, this.delegate = null, this.method = "next", this.arg = ag, this.tryEntries.forEach(aJ), !aP) {
          for (var aQ in this) "t" === aQ.charAt(0) && aj.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = ag);
        }
      },
      stop: function () {
        this.done = !0;
        var aP = this.tryEntries[0].completion;
        if ("throw" === aP.type) {
          throw aP.arg;
        }
        return this.rval;
      },
      dispatchException: function (aP) {
        if (this.done) {
          throw aP;
        }
        var aR = this;
        function aY(aZ, b0) {
          aU.type = "throw";
          aU.arg = aP;
          aR.next = aZ;
          b0 && (aR.method = "next", aR.arg = ag);
          return !!b0;
        }
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS],
            aU = aT.completion;
          if ("root" === aT.tryLoc) {
            return aY("end");
          }
          if (aT.tryLoc <= this.prev) {
            var aV = aj.call(aT, "catchLoc"),
              aW = aj.call(aT, "finallyLoc");
            if (aV && aW) {
              if (this.prev < aT.catchLoc) {
                return aY(aT.catchLoc, !0);
              }
              if (this.prev < aT.finallyLoc) {
                return aY(aT.finallyLoc);
              }
            } else {
              if (aV) {
                if (this.prev < aT.catchLoc) {
                  return aY(aT.catchLoc, !0);
                }
              } else {
                if (!aW) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aT.finallyLoc) {
                  return aY(aT.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aP, aQ) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.tryLoc <= this.prev && aj.call(aS, "finallyLoc") && this.prev < aS.finallyLoc) {
            var aT = aS;
            break;
          }
        }
        aT && ("break" === aP || "continue" === aP) && aT.tryLoc <= aQ && aQ <= aT.finallyLoc && (aT = null);
        var aU = aT ? aT.completion : {};
        aU.type = aP;
        aU.arg = aQ;
        return aT ? (this.method = "next", this.next = aT.finallyLoc, aw) : this.complete(aU);
      },
      complete: function (aP, aQ) {
        if ("throw" === aP.type) {
          throw aP.arg;
        }
        "break" === aP.type || "continue" === aP.type ? this.next = aP.arg : "return" === aP.type ? (this.rval = this.arg = aP.arg, this.method = "return", this.next = "end") : "normal" === aP.type && aQ && (this.next = aQ);
        return aw;
      },
      finish: function (aP) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.finallyLoc === aP) {
            this.complete(aS.completion, aS.afterLoc);
            aJ(aS);
            return aw;
          }
        }
      },
      catch: function (aP) {
        var aQ = {};
        aQ.AjcNh = function (aW, aX) {
          return aW === aX;
        };
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS];
          if (aT.tryLoc === aP) {
            var aU = aT.completion;
            if ("throw" === aU.type) {
              var aV = aU.arg;
              aJ(aT);
            }
            return aV;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aP, aQ, aR) {
        this.delegate = {
          iterator: aL(aP),
          resultName: aQ,
          nextLoc: aR
        };
        "next" === this.method && (this.arg = ag);
        return aw;
      }
    };
    return ah;
  }
  function h(af, ag, ah, ai, aj, ak, al) {
    try {
      var an = af[ak](al),
        ao = an.value;
    } catch (ar) {
      return void ah(ar);
    }
    an.done ? ag(ao) : Promise.resolve(ao).then(ai, aj);
  }
  function i(af) {
    return function () {
      var ah = this,
        ai = arguments;
      return new Promise(function (aj, ak) {
        var am = af.apply(ah, ai);
        function an(ap) {
          h(am, aj, ak, an, ao, "next", ap);
        }
        function ao(ap) {
          h(am, aj, ak, an, ao, "throw", ap);
        }
        an(void 0);
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
    u = "",
    v = "46",
    w = "10020",
    x = "FR*r!isE5W",
    y = "7200328065bd807fe056fbaadd92deed",
    z = "",
    A = "",
    B = "",
    D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ah() {
      var aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv;
      return g().wrap(function (bx) {
        for (;;) {
          switch (bx.prev = bx.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bx.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bx.next = 5;
              return ad("先去boxjs填写账号密码");
            case 5:
              return bx.abrupt("return");
            case 6:
              bx.next = 8;
              return ab();
            case 8:
              l = bx.sent;
              aj = j.split(" ");
              ak = c(aj);
              bx.prev = 11;
              ak.s();
            case 13:
              if ((al = ak.n()).done) {
                bx.next = 296;
                break;
              }
              am = al.value;
              console.log("随机生成UA");
              an = a7();
              t = an.ua;
              u = an.commonUa;
              console.log(t);
              console.log(u);
              q = am.split("&")[0];
              r = am.split("&")[1];
              s = am.split("&")[2];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bx.next = 28;
              return M("/api/account/init");
            case 28:
              ao = bx.sent;
              o = ao.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bx.next = 34;
              return G("/web/init?client_id=".concat(w));
            case 34:
              ap = bx.sent;
              m = ap.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bx.next = 40;
              return I("/web/oauth/credential_auth");
            case 40:
              if (aq = bx.sent, aq.data) {
                bx.next = 44;
                break;
              }
              console.log(aq.message);
              return bx.abrupt("continue", 294);
            case 44:
              ar = aq.data.authorization_code.code;
              console.log(ar);
              console.log("登录");
              bx.next = 49;
              return M("/api/zbtxz/login", "check_token=&code=".concat(ar, "&token=&type=-1&union_id="));
            case 49:
              if (as = bx.sent, console.log("登录成功"), p = as.data.session.account_id, o = as.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), z) {
                bx.next = 69;
                break;
              }
              bx.next = 59;
              return K("/api/buoy/list");
            case 59:
              at = bx.sent;
              au = decodeURIComponent(at.data.new_down.icon_list[2].turn_to.url);
              bx.next = 63;
              return O(au);
            case 63:
              for (au = bx.sent, av = au.split("?")[1], aw = {}, ax = av.split("&"), ay = 0, az = ax.length; ay < az; ay++) {
                aA = ax[ay].split("=");
                aw[aA[0]] = aA[1];
              }
              z = aw.id;
            case 69:
              if (z) {
                bx.next = 72;
                break;
              }
              console.log("获取id失败");
              return bx.abrupt("continue", 294);
            case 72:
              console.log(z);
              console.log("获取apiDt");
              bx.next = 76;
              return Q("/aosbase/_auth_dt");
            case 76:
              aB = bx.sent;
              A = aB.data.substring(32, 68);
              console.log(A);
              B = "0";
              aC = {
                app_user_token: o,
                appid: "jiaxing",
                noncestr: aa(6, !1),
                phone: q,
                portrait_url: as.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: as.data.account.id,
                user_name: as.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              aC.signature = l.md5(a8(aC) + "&appkey=".concat(y));
              bx.next = 84;
              return X("/aosbase/_auth_appuserinit", aC);
            case 84:
              aD = bx.sent;
              D = aD.data.access_token;
              B = aD.data.data.user_id;
              console.log("阅读token：".concat(D));
              aE = "";
              aF = Date.now() + "" + Math.floor(10000000 * Math.random());
              bx.next = 92;
              return T("/aoslearnfoot/_optionp_list?activity_id=".concat(z));
            case 92:
              aG = bx.sent;
              aH = c(aG.data);
              bx.prev = 94;
              aH.s();
            case 96:
              if ((aI = aH.n()).done) {
                bx.next = 183;
                break;
              }
              aJ = aI.value;
              aK = aJ.id;
              console.log(aJ.title);
              bx.next = 102;
              return T("/aoslearnfoot/optionp_detail?id=".concat(aJ.id));
            case 102:
              if (aL = bx.sent, aL.data.task_num != aL.data.user_done_num) {
                bx.next = 106;
                break;
              }
              console.log("已完成");
              return bx.abrupt("continue", 181);
            case 106:
              if (aE) {
                bx.next = 147;
                break;
              }
              console.log("获取滑块token");
              aM = 0;
            case 109:
              if (!(aM < 3)) {
                bx.next = 147;
                break;
              }
              aN = aa(10, !1);
              aO = Math.round(new Date().getTime() / 1000).toString();
              aP = "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aK);
              aQ = a5({
                once: aN,
                referer: aP,
                timestamp: aO,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bx.next = 116;
              return T("/basemodule/_captcha_get?once=".concat(aN, "&referer=").concat(aP, "&timestamp=").concat(aO, "&type=1&signature=").concat(encodeURIComponent(aQ)));
            case 116:
              aR = bx.sent;
              console.log("滑块：".concat(aR.data.block));
              console.log("背景：".concat(aR.data.background));
              bx.next = 121;
              return Z({
                slidingImage: aR.data.block,
                backImage: aR.data.background
              });
            case 121:
              if (aS = bx.sent, aS) {
                bx.next = 127;
                break;
              }
              console.log("ddddocr服务异常");
              bx.next = 126;
              return ad("ddddocr服务异常");
            case 126:
              return bx.abrupt("continue", 144);
            case 127:
              console.log(aS);
              aT = aS.result;
              aU = a5({
                x: aT,
                width: 384,
                track: [{
                  x: Math.floor(aT / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aT / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aT / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aT / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aT / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aT,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bx.next = 133;
              return X("/basemodule/_captcha_check", {
                token: aR.data.token,
                data: aU,
                referer: aP,
                type: aR.data.type
              });
            case 133:
              if (aV = bx.sent, !aV.data.result) {
                bx.next = 143;
                break;
              }
              bx.next = 137;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: aV.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 137:
              aW = bx.sent;
              aE = aW.data.tokenid;
              console.log("滑块token：".concat(aE));
              return bx.abrupt("break", 147);
            case 143:
              console.log("验证失败");
            case 144:
              aM++;
              bx.next = 109;
              break;
            case 147:
              if (aE) {
                bx.next = 149;
                break;
              }
              return bx.abrupt("break", 183);
            case 149:
              bx.next = 151;
              return T("/aosbasemodule/_task_list?offset=0&count=".concat(aJ.task_num, "&module_id=").concat(aJ.m_id, "&activity_id=").concat(aJ.id));
            case 151:
              aX = bx.sent;
              aY = c(aX.data);
              bx.prev = 153;
              aY.s();
            case 155:
              if ((aZ = aY.n()).done) {
                bx.next = 173;
                break;
              }
              if (b0 = aZ.value, console.log("文章：".concat(b0.title)), 1 != b0.user_done) {
                bx.next = 161;
                break;
              }
              console.log("已完成");
              return bx.abrupt("continue", 171);
            case 161:
              var bz = {};
              bz.task_id = b0.id;
              bx.next = 163;
              return X("/aosbasemodule/task_create", bz);
            case 163:
              b1 = bx.sent;
              bx.next = 166;
              return K("/api/article/detail?id=".concat(JSON.parse(b0.rule).news_id));
            case 166:
              var bA = {};
              bA.task_record_id = b1.data.task_record_id;
              bA.collect_info = "";
              bA.afs_tokenid = aE;
              bA.device_token = aF;
              bx.sent;
              bx.next = 169;
              return X("/aosbasemodule/task_done", bA);
            case 169:
              b2 = bx.sent;
              console.log("阅读：".concat(b2.msg));
            case 171:
              bx.next = 155;
              break;
            case 173:
              bx.next = 178;
              break;
            case 175:
              bx.prev = 175;
              bx.t0 = bx.catch(153);
              aY.e(bx.t0);
            case 178:
              bx.prev = 178;
              aY.f();
              return bx.finish(178);
            case 181:
              bx.next = 96;
              break;
            case 183:
              bx.next = 188;
              break;
            case 185:
              bx.prev = 185;
              bx.t1 = bx.catch(94);
              aH.e(bx.t1);
            case 188:
              bx.prev = 188;
              aH.f();
              return bx.finish(188);
            case 191:
              bx.next = 193;
              return T("/aoslearnfoot/_ac_detail?id=".concat(z));
            case 193:
              b3 = bx.sent;
              b4 = JSON.parse(b3.data.other_set).lottery.id;
              bx.next = 197;
              return T("/aoslottery/ac_lottery_times?id=".concat(b4));
            case 197:
              if (b5 = bx.sent, console.log("拥有".concat(b5.data.all_remain, "次抽奖")), !(b5.data.all_remain > 0)) {
                bx.next = 261;
                break;
              }
              console.log("获取抽奖滑块token");
              b6 = "";
              b7 = 0;
            case 203:
              if (!(b7 < 3)) {
                bx.next = 241;
                break;
              }
              b8 = aa(10, !1);
              b9 = Math.round(new Date().getTime() / 1000).toString();
              ba = "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              bb = a5({
                once: b8,
                referer: ba,
                timestamp: b9,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bx.next = 210;
              return T("/basemodule/_captcha_get?once=".concat(b8, "&referer=").concat(ba, "&timestamp=").concat(b9, "&type=1&signature=").concat(encodeURIComponent(bb)));
            case 210:
              bc = bx.sent;
              console.log("滑块：".concat(bc.data.block));
              console.log("背景：".concat(bc.data.background));
              bx.next = 215;
              return Z({
                slidingImage: bc.data.block,
                backImage: bc.data.background
              });
            case 215:
              if (bd = bx.sent, bd) {
                bx.next = 221;
                break;
              }
              console.log("ddddocr服务异常");
              bx.next = 220;
              return ad("ddddocr服务异常");
            case 220:
              return bx.abrupt("continue", 238);
            case 221:
              console.log(bd);
              bf = bd.result;
              bg = a5({
                x: bf,
                width: 384,
                track: [{
                  x: Math.floor(bf / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bf / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bf / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bf / 4),
                  y: 0,
                  time: 100
                }, {
                  x: bf / 2,
                  y: 0,
                  time: 100
                }, {
                  x: bf,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bx.next = 227;
              return X("/basemodule/_captcha_check", {
                token: bc.data.token,
                data: bg,
                referer: ba,
                type: bc.data.type
              });
            case 227:
              if (bh = bx.sent, !bh.data.result) {
                bx.next = 237;
                break;
              }
              bx.next = 231;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: bh.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 231:
              bi = bx.sent;
              b6 = bi.data.tokenid;
              console.log("抽奖滑块token：".concat(b6));
              return bx.abrupt("break", 241);
            case 237:
              console.log("验证失败");
            case 238:
              b7++;
              bx.next = 203;
              break;
            case 241:
              if (b6) {
                bx.next = 243;
                break;
              }
              return bx.abrupt("continue", 294);
            case 243:
              bx.next = 245;
              return T("/aoslottery/_ac_detail?id=".concat(b4));
            case 245:
              bj = bx.sent;
              bk = 0;
            case 247:
              if (!(bk < b5.data.all_remain)) {
                bx.next = 261;
                break;
              }
              bx.next = 250;
              return X("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: bj.data.m_id,
                content_id: bj.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: bj.data.title,
                device_token: aF,
                user_id: aD.data.data.user_id,
                user_name: aD.data.data.user_name,
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
            case 250:
              if (bl = bx.sent, console.log("抽奖提交：".concat(bl.msg)), 0 == bl.code) {
                bx.next = 254;
                break;
              }
              return bx.abrupt("continue", 258);
            case 254:
              var bB = {};
              bB.id = b4;
              bB.verif_uuid = "";
              bB.verif_code = "";
              bB.afs_tokenid = b6;
              bB.collect_info = "";
              bB.longitude = 0;
              bB.latitude = 0;
              bB.device_token = aF;
              bx.next = 256;
              return X("/aoslottery/ac_sub", bB);
            case 256:
              bm = bx.sent;
              0 == bm.code ? (console.log("抽奖获得：".concat(null == bm || null === (bn = bm.data) || void 0 === bn ? void 0 : bn.title)), 3 == (null == bm || null === (bo = bm.data) || void 0 === bo ? void 0 : bo.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == bm || null === (bp = bm.data) || void 0 === bp ? void 0 : bp.title, "\n"))) : "o d w" == bm.msg ? console.log("谢谢参与") : console.log(bm.msg);
            case 258:
              bk++;
              bx.next = 247;
              break;
            case 261:
              bx.next = 263;
              return T("/aoslottery/_ac_detail?id=".concat(b4));
            case 263:
              bq = bx.sent;
              bx.next = 266;
              return T("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(b4, "&module_id=").concat(bq.data.m_id));
            case 266:
              if (br = bx.sent, !br.data) {
                bx.next = 294;
                break;
              }
              bs = c(br.data);
              bx.prev = 269;
              bs.s();
            case 271:
              if ((bt = bs.n()).done) {
                bx.next = 286;
                break;
              }
              if (bu = bt.value, 3 != bu.type || 0 != bu.state) {
                bx.next = 284;
                break;
              }
              if (console.log("奖品：".concat(bu.title)), !s) {
                bx.next = 283;
                break;
              }
              console.log("领取奖品");
              bx.next = 279;
              return V("/aosbasemodule/cash_send?module_id=".concat(bu.module_id, "&activity_id=").concat(bu.id, "&cash_code=").concat(bu.code, "&cash_sign=").concat(bu.cash_data.cash_sign));
            case 279:
              bv = bx.sent;
              0 == bv.code ? console.log("领取成功") : console.log(bv.msg);
              bx.next = 284;
              break;
            case 283:
              console.log("请配置wxToken");
            case 284:
              bx.next = 271;
              break;
            case 286:
              bx.next = 291;
              break;
            case 288:
              bx.prev = 288;
              bx.t2 = bx.catch(269);
              bs.e(bx.t2);
            case 291:
              bx.prev = 291;
              bs.f();
              return bx.finish(291);
            case 294:
              bx.next = 13;
              break;
            case 296:
              bx.next = 301;
              break;
            case 298:
              bx.prev = 298;
              bx.t3 = bx.catch(11);
              ak.e(bx.t3);
            case 301:
              bx.prev = 301;
              ak.f();
              return bx.finish(301);
            case 304:
              if (!n) {
                bx.next = 307;
                break;
              }
              bx.next = 307;
              return ad(n);
            case 307:
            case "end":
              return bx.stop();
          }
        }
      }, ah, null, [[11, 298, 301, 304], [94, 185, 188, 191], [153, 175, 178, 181], [269, 288, 291, 294]]);
    }));
    return F.apply(this, arguments);
  }
  function G(af) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a4(),
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(am, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(at));
                            } catch (ay) {
                              $.logErr(ay, as);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return H.apply(this, arguments);
  }
  function I(af) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ag(ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a1();
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: aj.body
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(at));
                            } catch (av) {
                              $.logErr(av, as);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return J.apply(this, arguments);
  }
  function K(af) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ag(ah) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a2(ah);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ag);
    }));
    return L.apply(this, arguments);
  }
  function M(af, ag) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ag(ah, ai) {
      var al;
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              al = a2(ah);
              return am.abrupt("return", new Promise(function (ao) {
                var ap = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": al.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": al.uuid,
                    "X-SIGNATURE": al.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ai
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !at) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            ao(JSON.parse(av));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, au);
                          case 14:
                            ax.prev = 14;
                            ao();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return am.stop();
          }
        }
      }, ag);
    }));
    return N.apply(this, arguments);
  }
  function O(af) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ah(ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
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
                var ao = {
                  url: "".concat(ai),
                  headers: an,
                  followRedirect: !1
                };
                $.get(ao, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    var av;
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !ar) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 10;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            av = as.headers.location || as.headers.Location;
                            al(av);
                          case 10:
                            aw.next = 15;
                            break;
                          case 12:
                            aw.prev = 12;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, as);
                          case 15:
                            aw.prev = 15;
                            al();
                            return aw.finish(15);
                          case 18:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, aq, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return P.apply(this, arguments);
  }
  function Q(af) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
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
                $.get(al, function () {
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
      }, af);
    }));
    return R.apply(this, arguments);
  }
  function T(af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a3(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
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
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return U.apply(this, arguments);
  }
  function V(af) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ah(ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  Connection: "Keep-Alive",
                  "Access-T-Id-In": "1",
                  "Access-Wxclient-Type": "wx_minipro",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                  "Access-Token": s,
                  "Access-Api-Unique-Token": "1",
                  "Access-T-Id": "1",
                  Accept: "*/*",
                  Referer: "https://servicewechat.com/wx57d3a2086852ddcd/14/page-frame.html",
                  "Accept-Encoding": "gzip,compress,br,deflate"
                };
                var ao = {
                  url: "https://ya.iyunxh.com/api".concat(ai),
                  headers: an
                };
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return W.apply(this, arguments);
  }
  function X(af, ag) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ag(ah, ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a3(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
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
                  body: JSON.stringify(ai)
                };
                $.post(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return Y.apply(this, arguments);
  }
  function Z(af) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(am, function (an, ao, ap) {
                  try {
                    an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ap));
                  } catch (aq) {
                    $.logErr(aq, ao);
                  } finally {
                    ak();
                  }
                });
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    var af = new (l.loadJSEncrypt())();
    af.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = af.encrypt(r);
    var ag = a4(),
      ah = "client_id=".concat(w, "&password=").concat(r, "&phone_number=").concat(q),
      ai = "post%%/web/oauth/credential_auth?".concat(ah, "%%").concat(ag, "%%");
    ah = "client_id=".concat(w, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var aj = CryptoJS.HmacSHA256(ai, m),
      ak = CryptoJS.enc.Hex.stringify(aj),
      al = {
        uuid: ag,
        signature: ak,
        body: ah
      };
    return al;
  }
  function a2(af) {
    var ag = a4(),
      ah = Date.now();
    af.indexOf("?") > 0 && (af = af.substring(0, af.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ai = CryptoJS.SHA256("".concat(af, "&&").concat(o, "&&").concat(ag, "&&").concat(ah, "&&").concat(x, "&&").concat(v)).toString(),
      aj = {
        uuid: ag,
        time: ah,
        signature: ai
      };
    return aj;
  }
  function a3() {
    var af = Date.now(),
      ag = aa(32, !1),
      ah = "jiaxing".concat(ag).concat(af, "bdcd70c1c7c3544a34c1a1d45b1fdef0"),
      ai = l.md5(ah);
    return "jiaxing;".concat(ag, ";").concat(af, ";").concat(ai);
  }
  function a4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ag) {
      var ah = 16 * Math.random() | 0,
        ai = "x" === ag ? ah : 3 & ah | 8;
      return ai.toString(16);
    });
  }
  function a5(af, ag, ah) {
    var ai = l.createCryptoJS(),
      aj = ai.enc.Utf8.parse(ag),
      ak = ai.enc.Utf8.parse(ah),
      al = ai.enc.Utf8.parse(JSON.stringify(af)),
      am = ai.AES.encrypt(al, aj, {
        iv: ak,
        mode: ai.mode.CBC,
        padding: ai.pad.Pkcs7
      });
    return ai.enc.Base64.stringify(am.ciphertext);
  }
  function a6(af) {
    return af[Math.floor(Math.random() * af.length)];
  }
  function a7() {
    var af = "8.1.1",
      ag = a4(),
      ah = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ai = "Xiaomi " + ah,
      aj = "Android",
      ak = "".concat(aj.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(af, ";1.0;null;").concat(ah),
      al = "".concat(af, ";").concat(ag, ";").concat(ai, ";").concat(aj, ";").concat("11", ";Release;").concat("6.12.0"),
      am = {
        ua: ak,
        commonUa: al
      };
    return am;
  }
  function a8() {
    var af = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ag = [];
    for (var ah in af) {
      var ai = af[ah];
      ag.push(ah + "=" + a9(ai));
    }
    return ag.length ? "" + ag.join("&") : "";
  }
  function a9(af) {
    af = (af + "").toString();
    return encodeURIComponent(af).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function aa() {
    var af = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ag = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ah = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ai = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      aj = [];
    if (ah = ah || ai.length, af) {
      for (var ak = 0; ak < af; ak++) {
        aj[ak] = ai[0 | Math.random() * ah];
      }
    } else {
      var al;
      aj[8] = aj[13] = aj[18] = aj[23] = "-";
      aj[14] = "4";
      for (var am = 0; am < 36; am++) {
        aj[am] || (al = 0 | 16 * Math.random(), aj[am] = ai[19 == am ? 3 & al | 8 : al]);
      }
    }
    return ag ? (aj.shift(), "u" + aj.join("")) : aj.join("");
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ag() {
      var ai;
      return g().wrap(function aj(ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              if (ai = $.getdata("Utils_Code") || "", !ai || !Object.keys(ai).length) {
                ak.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ai);
              return ak.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ak.abrupt("return", new Promise(function () {
                var am = i(g().mark(function an(ao) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (as) {
                            $.setdata(as, "Utils_Code");
                            eval(as);
                            console.log("✅ Utils加载成功, 请继续");
                            ao(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, an);
                }));
                return function (ao) {
                  return am.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return ac.apply(this, arguments);
  }
  function ad(af) {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (!$.isNode()) {
                aj.next = 5;
                break;
              }
              aj.next = 3;
              return notify.sendNotify($.name, ag);
            case 3:
              aj.next = 6;
              break;
            case 5:
              $.msg($.name, "", ag);
            case 6:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return ae.apply(this, arguments);
  }
  i(g().mark(function af() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return E();
          case 2:
          case "end":
            return ag.stop();
        }
      }
    }, af);
  }))().catch(function (ag) {
    $.log(ag);
  }).finally(function () {
    $.done({});
  });
})();