//Fri Nov 22 2024 04:53:45 GMT+0000 (Coordinated Universal Time)
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
    var ai = "undefined" != typeof Symbol && af[Symbol.iterator] || af["@@iterator"];
    if (!ai) {
      if (Array.isArray(af) || (ai = d(af)) || ag && af && "number" == typeof af.length) {
        ai && (af = ai);
        var aj = 0,
          ak = function () {};
        return {
          s: ak,
          n: function () {
            var aq = {
              done: !0
            };
            return aj >= af.length ? aq : {
              done: !1,
              value: af[aj++]
            };
          },
          e: function (aq) {
            throw aq;
          },
          f: ak
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var al,
      am = !0,
      an = !1;
    return {
      s: function () {
        ai = ai.call(af);
      },
      n: function () {
        var ar = ai.next();
        am = ar.done;
        return ar;
      },
      e: function (aq) {
        an = !0;
        al = aq;
      },
      f: function () {
        try {
          am || null == ai.return || ai.return();
        } finally {
          if (an) {
            throw al;
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
    for (var ah = 0, ai = Array(ag); ah < ag; ah++) {
      ai[ah] = af[ah];
    }
    return ai;
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
      } catch (aV) {
        var aT = {};
        aT.type = "throw";
        aT.arg = aV;
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
          return b1 && "object" == b(b1) && aj.call(b1, "__await") ? aQ.resolve(b1.__await).then(function (b3) {
            aT("next", b3, aW, aX);
          }, function (b3) {
            aT("throw", b3, aW, aX);
          }) : aQ.resolve(b1).then(function (b3) {
            b0.value = b3;
            aW(b0);
          }, function (b3) {
            return aT("throw", b3, aW, aX);
          });
        }
        aX(aZ.arg);
      }
      var aS;
      ak(this, "_invoke", {
        value: function (aU, aV) {
          function aX() {
            return new aQ(function (b0, b1) {
              aT(aU, aV, b0, b1);
            });
          }
          return aS = aS ? aS.then(aX, aX) : aX();
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
      var aT = aQ.method,
        aU = aP.iterator[aT];
      if (aU === ag) {
        aQ.delegate = null;
        "throw" === aT && aP.iterator.return && (aQ.method = "return", aQ.arg = ag, aH(aP, aQ), "throw" === aQ.method) || "return" !== aT && (aQ.method = "throw", aQ.arg = new TypeError("The iterator does not provide a '" + aT + "' method"));
        return aw;
      }
      var aV = ar(aU, aP.iterator, aQ.arg);
      if ("throw" === aV.type) {
        aQ.method = "throw";
        aQ.arg = aV.arg;
        aQ.delegate = null;
        return aw;
      }
      var aW = aV.arg;
      return aW ? aW.done ? (aQ[aP.resultName] = aW.value, aQ.next = aP.nextLoc, "return" !== aQ.method && (aQ.method = "next", aQ.arg = ag), aQ.delegate = null, aw) : aW : (aQ.method = "throw", aQ.arg = new TypeError("iterator result is not an object"), aQ.delegate = null, aw);
    }
    function aI(aP) {
      var aR = {};
      aR.tryLoc = aP[0];
      var aS = aR;
      1 in aP && (aS.catchLoc = aP[1]);
      2 in aP && (aS.finallyLoc = aP[2], aS.afterLoc = aP[3]);
      this.tryEntries.push(aS);
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
        var aQ = aP[am];
        if (aQ) {
          return aQ.call(aP);
        }
        if ("function" == typeof aP.next) {
          return aP;
        }
        if (!isNaN(aP.length)) {
          var aR = -1,
            aS = function aW() {
              for (; ++aR < aP.length;) {
                if (aj.call(aP, aR)) {
                  aW.value = aP[aR];
                  aW.done = !1;
                  return aW;
                }
              }
              aW.value = ag;
              aW.done = !0;
              return aW;
            };
          return aS.next = aS;
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
          for (var aR in this) "t" === aR.charAt(0) && aj.call(this, aR) && !isNaN(+aR.slice(1)) && (this[aR] = ag);
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
        function aX(aY, aZ) {
          aU.type = "throw";
          aU.arg = aP;
          aR.next = aY;
          aZ && (aR.method = "next", aR.arg = ag);
          return !!aZ;
        }
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS],
            aU = aT.completion;
          if ("root" === aT.tryLoc) {
            return aX("end");
          }
          if (aT.tryLoc <= this.prev) {
            var aV = aj.call(aT, "catchLoc"),
              aW = aj.call(aT, "finallyLoc");
            if (aV && aW) {
              if (this.prev < aT.catchLoc) {
                return aX(aT.catchLoc, !0);
              }
              if (this.prev < aT.finallyLoc) {
                return aX(aT.finallyLoc);
              }
            } else {
              if (aV) {
                if (this.prev < aT.catchLoc) {
                  return aX(aT.catchLoc, !0);
                }
              } else {
                if (!aW) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aT.finallyLoc) {
                  return aX(aT.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aP, aQ) {
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS];
          if (aT.tryLoc <= this.prev && aj.call(aT, "finallyLoc") && this.prev < aT.finallyLoc) {
            var aU = aT;
            break;
          }
        }
        aU && ("break" === aP || "continue" === aP) && aU.tryLoc <= aQ && aQ <= aU.finallyLoc && (aU = null);
        var aV = aU ? aU.completion : {};
        aV.type = aP;
        aV.arg = aQ;
        return aU ? (this.method = "next", this.next = aU.finallyLoc, aw) : this.complete(aV);
      },
      complete: function (aP, aQ) {
        if ("throw" === aP.type) {
          throw aP.arg;
        }
        "break" === aP.type || "continue" === aP.type ? this.next = aP.arg : "return" === aP.type ? (this.rval = this.arg = aP.arg, this.method = "return", this.next = "end") : "normal" === aP.type && aQ && (this.next = aQ);
        return aw;
      },
      finish: function (aP) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.finallyLoc === aP) {
            this.complete(aR.completion, aR.afterLoc);
            aJ(aR);
            return aw;
          }
        }
      },
      catch: function (aP) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.tryLoc === aP) {
            var aT = aS.completion;
            if ("throw" === aT.type) {
              var aU = aT.arg;
              aJ(aS);
            }
            return aU;
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
                bx.next = 300;
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
              return bx.abrupt("continue", 298);
            case 44:
              ar = aq.data.authorization_code.code;
              console.log(ar);
              console.log("登录");
              bx.next = 49;
              return M("/api/zbtxz/login", "check_token=&code=".concat(ar, "&token=&type=-1&union_id="));
            case 49:
              if (as = bx.sent, console.log("登录成功"), p = as.data.session.account_id, o = as.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), z) {
                bx.next = 72;
                break;
              }
              bx.next = 59;
              return K("/api/article/channel_list?channel_id=5bab3aa283c76634cb49f62e&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 59:
              if (at = bx.sent, au = /https:\/\/jiaxing\.y-h5\.iyunxh\.com\/dl\/([a-zA-Z0-9]+)/, av = JSON.stringify(at).match(au), !av) {
                bx.next = 72;
                break;
              }
              aw = av[0];
              bx.next = 66;
              return O(aw);
            case 66:
              for (aw = bx.sent, ax = aw.split("?")[1], ay = {}, az = ax.split("&"), aA = 0, aB = az.length; aA < aB; aA++) {
                aC = az[aA].split("=");
                ay[aC[0]] = aC[1];
              }
              z = ay.id;
            case 72:
              if (z) {
                bx.next = 75;
                break;
              }
              console.log("获取id失败");
              return bx.abrupt("continue", 298);
            case 75:
              console.log(z);
              console.log("获取apiDt");
              bx.next = 79;
              return Q("/aosbase/_auth_dt");
            case 79:
              aD = bx.sent;
              A = aD.data.substring(32, 68);
              console.log(A);
              B = "0";
              aE = {
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
              aE.signature = l.md5(a8(aE) + "&appkey=".concat(y));
              bx.next = 87;
              return X("/aosbase/_auth_appuserinit", aE);
            case 87:
              aF = bx.sent;
              D = aF.data.access_token;
              B = aF.data.data.user_id;
              console.log("阅读token：".concat(D));
              aG = "";
              aH = Date.now() + "" + Math.floor(10000000 * Math.random());
              bx.next = 95;
              return T("/aoslearnfoot/_optionp_list?activity_id=".concat(z));
            case 95:
              aI = bx.sent;
              aJ = c(aI.data);
              bx.prev = 97;
              aJ.s();
            case 99:
              if ((aK = aJ.n()).done) {
                bx.next = 186;
                break;
              }
              aL = aK.value;
              aM = aL.id;
              console.log(aL.title);
              bx.next = 105;
              return T("/aoslearnfoot/optionp_detail?id=".concat(aL.id));
            case 105:
              if (aN = bx.sent, aN.data.task_num != aN.data.user_done_num) {
                bx.next = 109;
                break;
              }
              console.log("已完成");
              return bx.abrupt("continue", 184);
            case 109:
              if (aG) {
                bx.next = 150;
                break;
              }
              console.log("获取滑块token");
              aO = 0;
            case 112:
              if (!(aO < 3)) {
                bx.next = 150;
                break;
              }
              aP = aa(10, !1);
              aQ = Math.round(new Date().getTime() / 1000).toString();
              aR = "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aM);
              aS = a5({
                once: aP,
                referer: aR,
                timestamp: aQ,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bx.next = 119;
              return T("/basemodule/_captcha_get?once=".concat(aP, "&referer=").concat(aR, "&timestamp=").concat(aQ, "&type=1&signature=").concat(encodeURIComponent(aS)));
            case 119:
              aT = bx.sent;
              console.log("滑块：".concat(aT.data.block));
              console.log("背景：".concat(aT.data.background));
              bx.next = 124;
              return Z({
                slidingImage: aT.data.block,
                backImage: aT.data.background
              });
            case 124:
              if (aU = bx.sent, aU) {
                bx.next = 130;
                break;
              }
              console.log("ddddocr服务异常");
              bx.next = 129;
              return ad("ddddocr服务异常");
            case 129:
              return bx.abrupt("continue", 147);
            case 130:
              console.log(aU);
              aV = aU.result;
              aW = a5({
                x: aV,
                width: 384,
                track: [{
                  x: Math.floor(aV / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aV / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aV / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aV / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aV / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aV,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bx.next = 136;
              return X("/basemodule/_captcha_check", {
                token: aT.data.token,
                data: aW,
                referer: aR,
                type: aT.data.type
              });
            case 136:
              if (aX = bx.sent, !aX.data.result) {
                bx.next = 146;
                break;
              }
              bx.next = 140;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: aX.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 140:
              aY = bx.sent;
              aG = aY.data.tokenid;
              console.log("滑块token：".concat(aG));
              return bx.abrupt("break", 150);
            case 146:
              console.log("验证失败");
            case 147:
              aO++;
              bx.next = 112;
              break;
            case 150:
              if (aG) {
                bx.next = 152;
                break;
              }
              return bx.abrupt("break", 186);
            case 152:
              bx.next = 154;
              return T("/aosbasemodule/_task_list?offset=0&count=".concat(aL.task_num, "&module_id=").concat(aL.m_id, "&activity_id=").concat(aL.id));
            case 154:
              aZ = bx.sent;
              b0 = c(aZ.data);
              bx.prev = 156;
              b0.s();
            case 158:
              if ((b1 = b0.n()).done) {
                bx.next = 176;
                break;
              }
              if (b2 = b1.value, console.log("文章：".concat(b2.title)), 1 != b2.user_done) {
                bx.next = 164;
                break;
              }
              console.log("已完成");
              return bx.abrupt("continue", 174);
            case 164:
              var bz = {};
              bz.task_id = b2.id;
              bx.next = 166;
              return X("/aosbasemodule/task_create", bz);
            case 166:
              b3 = bx.sent;
              bx.next = 169;
              return K("/api/article/detail?id=".concat(JSON.parse(b2.rule).news_id));
            case 169:
              var bA = {};
              bA.task_record_id = b3.data.task_record_id;
              bA.collect_info = "";
              bA.afs_tokenid = aG;
              bA.device_token = aH;
              bx.sent;
              bx.next = 172;
              return X("/aosbasemodule/task_done", bA);
            case 172:
              b4 = bx.sent;
              console.log("阅读：".concat(b4.msg));
            case 174:
              bx.next = 158;
              break;
            case 176:
              bx.next = 181;
              break;
            case 178:
              bx.prev = 178;
              bx.t0 = bx.catch(156);
              b0.e(bx.t0);
            case 181:
              bx.prev = 181;
              b0.f();
              return bx.finish(181);
            case 184:
              bx.next = 99;
              break;
            case 186:
              bx.next = 191;
              break;
            case 188:
              bx.prev = 188;
              bx.t1 = bx.catch(97);
              aJ.e(bx.t1);
            case 191:
              bx.prev = 191;
              aJ.f();
              return bx.finish(191);
            case 194:
              bx.next = 196;
              return T("/aoslearnfoot/_ac_detail?id=".concat(z));
            case 196:
              b5 = bx.sent;
              b6 = JSON.parse(b5.data.other_set).lottery.id;
              bx.next = 200;
              return T("/aoslottery/ac_lottery_times?id=".concat(b6));
            case 200:
              if (b7 = bx.sent, console.log("拥有".concat(b7.data.all_remain, "次抽奖")), !(b7.data.all_remain > 0)) {
                bx.next = 264;
                break;
              }
              console.log("获取抽奖滑块token");
              b8 = "";
              b9 = 0;
            case 206:
              if (!(b9 < 3)) {
                bx.next = 244;
                break;
              }
              ba = aa(10, !1);
              bb = Math.round(new Date().getTime() / 1000).toString();
              bc = "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              bd = a5({
                once: ba,
                referer: bc,
                timestamp: bb,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bx.next = 213;
              return T("/basemodule/_captcha_get?once=".concat(ba, "&referer=").concat(bc, "&timestamp=").concat(bb, "&type=1&signature=").concat(encodeURIComponent(bd)));
            case 213:
              bf = bx.sent;
              console.log("滑块：".concat(bf.data.block));
              console.log("背景：".concat(bf.data.background));
              bx.next = 218;
              return Z({
                slidingImage: bf.data.block,
                backImage: bf.data.background
              });
            case 218:
              if (bg = bx.sent, bg) {
                bx.next = 224;
                break;
              }
              console.log("ddddocr服务异常");
              bx.next = 223;
              return ad("ddddocr服务异常");
            case 223:
              return bx.abrupt("continue", 241);
            case 224:
              console.log(bg);
              bh = bg.result;
              bi = a5({
                x: bh,
                width: 384,
                track: [{
                  x: Math.floor(bh / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bh / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bh / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bh / 4),
                  y: 0,
                  time: 100
                }, {
                  x: bh / 2,
                  y: 0,
                  time: 100
                }, {
                  x: bh,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bx.next = 230;
              return X("/basemodule/_captcha_check", {
                token: bf.data.token,
                data: bi,
                referer: bc,
                type: bf.data.type
              });
            case 230:
              if (bj = bx.sent, !bj.data.result) {
                bx.next = 240;
                break;
              }
              bx.next = 234;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: bj.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 234:
              bk = bx.sent;
              b8 = bk.data.tokenid;
              console.log("抽奖滑块token：".concat(b8));
              return bx.abrupt("break", 244);
            case 240:
              console.log("验证失败");
            case 241:
              b9++;
              bx.next = 206;
              break;
            case 244:
              if (b8) {
                bx.next = 246;
                break;
              }
              return bx.abrupt("continue", 298);
            case 246:
              bx.next = 248;
              return T("/aoslottery/_ac_detail?id=".concat(b6));
            case 248:
              bl = bx.sent;
              bm = 0;
            case 250:
              if (!(bm < b7.data.all_remain)) {
                bx.next = 264;
                break;
              }
              bx.next = 253;
              return X("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: bl.data.m_id,
                content_id: bl.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: bl.data.title,
                device_token: aH,
                user_id: aF.data.data.user_id,
                user_name: aF.data.data.user_name,
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
            case 253:
              if (bn = bx.sent, console.log("抽奖提交：".concat(bn.msg)), 0 == bn.code) {
                bx.next = 257;
                break;
              }
              return bx.abrupt("continue", 261);
            case 257:
              var bB = {};
              bB.id = b6;
              bB.verif_uuid = "";
              bB.verif_code = "";
              bB.afs_tokenid = b8;
              bB.collect_info = "";
              bB.longitude = 0;
              bB.latitude = 0;
              bB.device_token = aH;
              bx.next = 259;
              return X("/aoslottery/ac_sub", bB);
            case 259:
              bo = bx.sent;
              0 == bo.code ? console.log("抽奖获得：".concat(null == bo || null === (bp = bo.data) || void 0 === bp ? void 0 : bp.title)) : "o d w" == bo.msg ? console.log("谢谢参与") : console.log(bo.msg);
            case 261:
              bm++;
              bx.next = 250;
              break;
            case 264:
              bx.next = 266;
              return T("/aoslottery/_ac_detail?id=".concat(b6));
            case 266:
              bq = bx.sent;
              bx.next = 269;
              return T("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(b6, "&module_id=").concat(bq.data.m_id));
            case 269:
              if (br = bx.sent, !br.data) {
                bx.next = 298;
                break;
              }
              bs = c(br.data);
              bx.prev = 272;
              bs.s();
            case 274:
              if ((bt = bs.n()).done) {
                bx.next = 290;
                break;
              }
              if (bu = bt.value, 3 != bu.type || 0 != bu.state) {
                bx.next = 288;
                break;
              }
              if (console.log("奖品：".concat(bu.title)), !s) {
                bx.next = 286;
                break;
              }
              console.log("领取奖品");
              bx.next = 282;
              return V("/aosbasemodule/cash_send?module_id=".concat(bu.module_id, "&activity_id=").concat(bu.id, "&cash_code=").concat(bu.code, "&cash_sign=").concat(bu.cash_data.cash_sign));
            case 282:
              bv = bx.sent;
              0 == bv.code ? (console.log("领取成功"), n += "用户：".concat(q, " 抽奖获得：").concat(bu.title, " 领取结果：领取成功\n")) : (console.log(bv.msg), n += "用户：".concat(q, " 抽奖获得：").concat(bu.title, " 领取结果：").concat(bv.msg, "\n"));
              bx.next = 288;
              break;
            case 286:
              console.log("请配置wxToken");
              n += "用户：".concat(q, " 请配置wxToken\n");
            case 288:
              bx.next = 274;
              break;
            case 290:
              bx.next = 295;
              break;
            case 292:
              bx.prev = 292;
              bx.t2 = bx.catch(272);
              bs.e(bx.t2);
            case 295:
              bx.prev = 295;
              bs.f();
              return bx.finish(295);
            case 298:
              bx.next = 13;
              break;
            case 300:
              bx.next = 305;
              break;
            case 302:
              bx.prev = 302;
              bx.t3 = bx.catch(11);
              ak.e(bx.t3);
            case 305:
              bx.prev = 305;
              ak.f();
              return bx.finish(305);
            case 308:
              if (!n) {
                bx.next = 311;
                break;
              }
              bx.next = 311;
              return ad(n);
            case 311:
            case "end":
              return bx.stop();
          }
        }
      }, ah, null, [[11, 302, 305, 308], [97, 188, 191, 194], [156, 178, 181, 184], [272, 292, 295, 298]]);
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
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                            } catch (ay) {
                              $.logErr(ay, ar);
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
    J = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a1();
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ai.body
                };
                $.post(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(as));
                            } catch (av) {
                              $.logErr(av, ar);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return J.apply(this, arguments);
  }
  function K(af) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ag(ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a2(ah);
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
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
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
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
              return ak.stop();
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
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a2(ah);
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ai
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
            case 2:
            case "end":
              return ak.stop();
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
    P = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
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
                var an = {
                  url: "".concat(ah),
                  headers: am,
                  followRedirect: !1
                };
                $.get(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    var au;
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !aq) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 10;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            au = ar.headers.location || ar.headers.Location;
                            ak(au);
                          case 10:
                            av.next = 15;
                            break;
                          case 12:
                            av.prev = 12;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, ar);
                          case 15:
                            av.prev = 15;
                            ak();
                            return av.finish(15);
                          case 18:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ap, null, [[0, 12, 15, 18]]);
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
    return P.apply(this, arguments);
  }
  function Q(af) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ag(ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ah),
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
              return aj.stop();
          }
        }
      }, ag);
    }));
    return R.apply(this, arguments);
  }
  function T(af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
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
      }, af);
    }));
    return U.apply(this, arguments);
  }
  function V(af) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ag(ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://ya.iyunxh.com/api".concat(ah),
                  headers: {
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
                  }
                };
                $.get(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
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
    return W.apply(this, arguments);
  }
  function X(af, ag) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ag(ah, ai) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
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
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
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
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  "Content-Type": "application/json"
                };
                var ao = {
                  url: "".concat(k, "/capcode"),
                  headers: an,
                  body: JSON.stringify(ah)
                };
                $.post(ao, function (ap, aq, ar) {
                  try {
                    ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(ar));
                  } catch (as) {
                    $.logErr(as, aq);
                  } finally {
                    am();
                  }
                });
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    var an = new (l.loadJSEncrypt())();
    an.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = an.encrypt(r);
    var ak = a4(),
      al = "client_id=".concat(w, "&password=").concat(r, "&phone_number=").concat(q),
      am = "post%%/web/oauth/credential_auth?".concat(al, "%%").concat(ak, "%%");
    al = "client_id=".concat(w, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.HmacSHA256(am, m),
      ai = CryptoJS.enc.Hex.stringify(ah);
    var aj = {};
    aj.uuid = ak;
    aj.signature = ai;
    aj.body = al;
    return aj;
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
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (!$.isNode()) {
                ah.next = 5;
                break;
              }
              ah.next = 3;
              return notify.sendNotify($.name, ag);
            case 3:
              ah.next = 6;
              break;
            case 5:
              $.msg($.name, "", ag);
            case 6:
            case "end":
              return ah.stop();
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