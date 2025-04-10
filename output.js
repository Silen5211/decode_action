//Thu Apr 10 2025 12:24:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ao) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ar) {
      return typeof ar;
    } : function (ar) {
      return ar && "function" == typeof Symbol && ar.constructor === Symbol && ar !== Symbol.prototype ? "symbol" : typeof ar;
    };
    return b(ao);
  }
  function c(ao, ap) {
    var ar = "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
    if (!ar) {
      if (Array.isArray(ao) || (ar = d(ao)) || ap && ao && "number" == typeof ao.length) {
        ar && (ao = ar);
        var as = 0,
          at = function () {};
        return {
          s: at,
          n: function () {
            var az = {
              done: !0
            };
            return as >= ao.length ? az : {
              done: !1,
              value: ao[as++]
            };
          },
          e: function (az) {
            throw az;
          },
          f: at
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var au,
      av = !0,
      aw = !1;
    return {
      s: function () {
        ar = ar.call(ao);
      },
      n: function () {
        var aA = ar.next();
        av = aA.done;
        return aA;
      },
      e: function (aA) {
        aw = !0;
        au = aA;
      },
      f: function () {
        try {
          av || null == ar.return || ar.return();
        } finally {
          if (aw) {
            throw au;
          }
        }
      }
    };
  }
  function d(ao, ap) {
    if (ao) {
      if ("string" == typeof ao) {
        return f(ao, ap);
      }
      var ar = {}.toString.call(ao).slice(8, -1);
      "Object" === ar && ao.constructor && (ar = ao.constructor.name);
      return "Map" === ar || "Set" === ar ? Array.from(ao) : "Arguments" === ar || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ar) ? f(ao, ap) : void 0;
    }
  }
  function f(ao, ap) {
    (null == ap || ap > ao.length) && (ap = ao.length);
    for (var aq = 0, ar = Array(ap); aq < ap; aq++) {
      ar[aq] = ao[aq];
    }
    return ar;
  }
  function g() {
    'use strict';

    g = function () {
      return aq;
    };
    var ap,
      aq = {},
      ar = Object.prototype,
      as = ar.hasOwnProperty,
      at = Object.defineProperty || function (aV, aW, aX) {
        aV[aW] = aX.value;
      },
      au = "function" == typeof Symbol ? Symbol : {},
      av = au.iterator || "@@iterator",
      aw = au.asyncIterator || "@@asyncIterator",
      ax = au.toStringTag || "@@toStringTag";
    function ay(aV, aW, aX) {
      var aZ = {};
      aZ.value = aX;
      aZ.enumerable = !0;
      aZ.configurable = !0;
      aZ.writable = !0;
      Object.defineProperty(aV, aW, aZ);
      return aV[aW];
    }
    try {
      ay({}, "");
    } catch (aW) {
      ay = function (aY, aZ, b0) {
        return aY[aZ] = b0;
      };
    }
    function az(aY, aZ, b0, b1) {
      var b2 = aZ && aZ.prototype instanceof aG ? aZ : aG,
        b3 = Object.create(b2.prototype),
        b4 = new aT(b1 || []);
      at(b3, "_invoke", {
        value: aP(aY, b0, b4)
      });
      return b3;
    }
    function aA(aY, aZ, b0) {
      try {
        return {
          type: "normal",
          arg: aY.call(aZ, b0)
        };
      } catch (b4) {
        var b1 = {
          type: "throw",
          arg: b4
        };
        return b1;
      }
    }
    aq.wrap = az;
    var aB = "suspendedStart",
      aC = "suspendedYield",
      aD = "executing",
      aE = "completed",
      aF = {};
    function aG() {}
    function aH() {}
    function aI() {}
    var aJ = {};
    ay(aJ, av, function () {
      return this;
    });
    var aK = Object.getPrototypeOf,
      aL = aK && aK(aK(aU([])));
    aL && aL !== ar && as.call(aL, av) && (aJ = aL);
    aI.prototype = aG.prototype = Object.create(aJ);
    var aM = aI.prototype;
    function aN(aY) {
      ["next", "throw", "return"].forEach(function (aZ) {
        ay(aY, aZ, function (b2) {
          return this._invoke(aZ, b2);
        });
      });
    }
    function aO(aY, aZ) {
      function b2(b3, b4, b5, b6) {
        var b8 = aA(aY[b3], aY, b4);
        if ("throw" !== b8.type) {
          var b9 = b8.arg,
            ba = b9.value;
          return ba && "object" == b(ba) && as.call(ba, "__await") ? aZ.resolve(ba.__await).then(function (bc) {
            b2("next", bc, b5, b6);
          }, function (bc) {
            b2("throw", bc, b5, b6);
          }) : aZ.resolve(ba).then(function (bc) {
            b9.value = bc;
            b5(b9);
          }, function (bc) {
            return b2("throw", bc, b5, b6);
          });
        }
        b6(b8.arg);
      }
      var b1;
      at(this, "_invoke", {
        value: function (b3, b4) {
          function b7() {
            return new aZ(function (b8, b9) {
              b2(b3, b4, b8, b9);
            });
          }
          return b1 = b1 ? b1.then(b7, b7) : b7();
        }
      });
    }
    function aP(aY, aZ, b0) {
      var b2 = aB;
      return function (b4, b5) {
        if (b2 === aD) {
          throw Error("Generator is already running");
        }
        if (b2 === aE) {
          if ("throw" === b4) {
            throw b5;
          }
          var b7 = {};
          b7.value = ap;
          b7.done = !0;
          return b7;
        }
        for (b0.method = b4, b0.arg = b5;;) {
          var b8 = b0.delegate;
          if (b8) {
            var b9 = aQ(b8, b0);
            if (b9) {
              if (b9 === aF) {
                continue;
              }
              return b9;
            }
          }
          if ("next" === b0.method) {
            b0.sent = b0._sent = b0.arg;
          } else {
            if ("throw" === b0.method) {
              if (b2 === aB) {
                throw b2 = aE, b0.arg;
              }
              b0.dispatchException(b0.arg);
            } else {
              "return" === b0.method && b0.abrupt("return", b0.arg);
            }
          }
          b2 = aD;
          var ba = aA(aY, aZ, b0);
          if ("normal" === ba.type) {
            if (b2 = b0.done ? aE : aC, ba.arg === aF) {
              continue;
            }
            var bb = {};
            bb.value = ba.arg;
            bb.done = b0.done;
            return bb;
          }
          "throw" === ba.type && (b2 = aE, b0.method = "throw", b0.arg = ba.arg);
        }
      };
    }
    function aQ(aY, aZ) {
      var b4 = aZ.method,
        b5 = aY.iterator[b4];
      if (b5 === ap) {
        aZ.delegate = null;
        "throw" === b4 && aY.iterator.return && (aZ.method = "return", aZ.arg = ap, aQ(aY, aZ), "throw" === aZ.method) || "return" !== b4 && (aZ.method = "throw", aZ.arg = new TypeError("The iterator does not provide a '" + b4 + "' method"));
        return aF;
      }
      var b2 = aA(b5, aY.iterator, aZ.arg);
      if ("throw" === b2.type) {
        aZ.method = "throw";
        aZ.arg = b2.arg;
        aZ.delegate = null;
        return aF;
      }
      var b3 = b2.arg;
      return b3 ? b3.done ? (aZ[aY.resultName] = b3.value, aZ.next = aY.nextLoc, "return" !== aZ.method && (aZ.method = "next", aZ.arg = ap), aZ.delegate = null, aF) : b3 : (aZ.method = "throw", aZ.arg = new TypeError("iterator result is not an object"), aZ.delegate = null, aF);
    }
    function aR(aY) {
      var b0 = {
        tryLoc: aY[0]
      };
      var b1 = b0;
      1 in aY && (b1.catchLoc = aY[1]);
      2 in aY && (b1.finallyLoc = aY[2], b1.afterLoc = aY[3]);
      this.tryEntries.push(b1);
    }
    function aS(aY) {
      var aZ = aY.completion || {};
      aZ.type = "normal";
      delete aZ.arg;
      aY.completion = aZ;
    }
    function aT(aY) {
      var aZ = {
        tryLoc: "root"
      };
      this.tryEntries = [aZ];
      aY.forEach(aR, this);
      this.reset(!0);
    }
    function aU(aY) {
      if (aY || "" === aY) {
        var b0 = aY[av];
        if (b0) {
          return b0.call(aY);
        }
        if ("function" == typeof aY.next) {
          return aY;
        }
        if (!isNaN(aY.length)) {
          var b1 = -1,
            b2 = function b5() {
              for (; ++b1 < aY.length;) {
                if (as.call(aY, b1)) {
                  b5.value = aY[b1];
                  b5.done = !1;
                  return b5;
                }
              }
              b5.value = ap;
              b5.done = !0;
              return b5;
            };
          return b2.next = b2;
        }
      }
      throw new TypeError(b(aY) + " is not iterable");
    }
    aH.prototype = aI;
    at(aM, "constructor", {
      value: aI,
      configurable: !0
    });
    at(aI, "constructor", {
      value: aH,
      configurable: !0
    });
    aH.displayName = ay(aI, ax, "GeneratorFunction");
    aq.isGeneratorFunction = function (aY) {
      var aZ = "function" == typeof aY && aY.constructor;
      return !!aZ && (aZ === aH || "GeneratorFunction" === (aZ.displayName || aZ.name));
    };
    aq.mark = function (aY) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aY, aI) : (aY.__proto__ = aI, ay(aY, ax, "GeneratorFunction"));
      aY.prototype = Object.create(aM);
      return aY;
    };
    aq.awrap = function (aY) {
      var aZ = {
        __await: aY
      };
      return aZ;
    };
    aN(aO.prototype);
    ay(aO.prototype, aw, function () {
      return this;
    });
    aq.AsyncIterator = aO;
    aq.async = function (aY, aZ, b0, b1, b2) {
      void 0 === b2 && (b2 = Promise);
      var b4 = new aO(az(aY, aZ, b0, b1), b2);
      return aq.isGeneratorFunction(aZ) ? b4 : b4.next().then(function (b5) {
        return b5.done ? b5.value : b4.next();
      });
    };
    aN(aM);
    ay(aM, ax, "Generator");
    ay(aM, av, function () {
      return this;
    });
    ay(aM, "toString", function () {
      return "[object Generator]";
    });
    aq.keys = function (aY) {
      var aZ = Object(aY),
        b0 = [];
      for (var b1 in aZ) b0.push(b1);
      b0.reverse();
      return function b2() {
        for (; b0.length;) {
          var b3 = b0.pop();
          if (b3 in aZ) {
            b2.value = b3;
            b2.done = !1;
            return b2;
          }
        }
        b2.done = !0;
        return b2;
      };
    };
    aq.values = aU;
    aT.prototype = {
      constructor: aT,
      reset: function (aY) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ap, this.done = !1, this.delegate = null, this.method = "next", this.arg = ap, this.tryEntries.forEach(aS), !aY) {
          for (var aZ in this) "t" === aZ.charAt(0) && as.call(this, aZ) && !isNaN(+aZ.slice(1)) && (this[aZ] = ap);
        }
      },
      stop: function () {
        this.done = !0;
        var aY = this.tryEntries[0].completion;
        if ("throw" === aY.type) {
          throw aY.arg;
        }
        return this.rval;
      },
      dispatchException: function (aY) {
        if (this.done) {
          throw aY;
        }
        var b0 = this;
        function b7(b8, b9) {
          b3.type = "throw";
          b3.arg = aY;
          b0.next = b8;
          b9 && (b0.method = "next", b0.arg = ap);
          return !!b9;
        }
        for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
          var b2 = this.tryEntries[b1],
            b3 = b2.completion;
          if ("root" === b2.tryLoc) {
            return b7("end");
          }
          if (b2.tryLoc <= this.prev) {
            var b4 = as.call(b2, "catchLoc"),
              b5 = as.call(b2, "finallyLoc");
            if (b4 && b5) {
              if (this.prev < b2.catchLoc) {
                return b7(b2.catchLoc, !0);
              }
              if (this.prev < b2.finallyLoc) {
                return b7(b2.finallyLoc);
              }
            } else {
              if (b4) {
                if (this.prev < b2.catchLoc) {
                  return b7(b2.catchLoc, !0);
                }
              } else {
                if (!b5) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < b2.finallyLoc) {
                  return b7(b2.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aY, aZ) {
        for (var b0 = this.tryEntries.length - 1; b0 >= 0; --b0) {
          var b1 = this.tryEntries[b0];
          if (b1.tryLoc <= this.prev && as.call(b1, "finallyLoc") && this.prev < b1.finallyLoc) {
            var b2 = b1;
            break;
          }
        }
        b2 && ("break" === aY || "continue" === aY) && b2.tryLoc <= aZ && aZ <= b2.finallyLoc && (b2 = null);
        var b3 = b2 ? b2.completion : {};
        b3.type = aY;
        b3.arg = aZ;
        return b2 ? (this.method = "next", this.next = b2.finallyLoc, aF) : this.complete(b3);
      },
      complete: function (aY, aZ) {
        if ("throw" === aY.type) {
          throw aY.arg;
        }
        "break" === aY.type || "continue" === aY.type ? this.next = aY.arg : "return" === aY.type ? (this.rval = this.arg = aY.arg, this.method = "return", this.next = "end") : "normal" === aY.type && aZ && (this.next = aZ);
        return aF;
      },
      finish: function (aY) {
        for (var aZ = this.tryEntries.length - 1; aZ >= 0; --aZ) {
          var b0 = this.tryEntries[aZ];
          if (b0.finallyLoc === aY) {
            this.complete(b0.completion, b0.afterLoc);
            aS(b0);
            return aF;
          }
        }
      },
      catch: function (aY) {
        for (var b0 = this.tryEntries.length - 1; b0 >= 0; --b0) {
          var b1 = this.tryEntries[b0];
          if (b1.tryLoc === aY) {
            var b2 = b1.completion;
            if ("throw" === b2.type) {
              var b3 = b2.arg;
              aS(b1);
            }
            return b3;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aY, aZ, b0) {
        this.delegate = {
          iterator: aU(aY),
          resultName: aZ,
          nextLoc: b0
        };
        "next" === this.method && (this.arg = ap);
        return aF;
      }
    };
    return aq;
  }
  function h(ao, ap, aq, ar, as, at, au) {
    try {
      var aw = ao[at](au),
        ax = aw.value;
    } catch (az) {
      return void aq(az);
    }
    aw.done ? ap(ax) : Promise.resolve(ax).then(ar, as);
  }
  function i(ao) {
    return function () {
      var aq = this,
        ar = arguments;
      return new Promise(function (as, at) {
        var au = ao.apply(aq, ar);
        function av(ax) {
          h(au, as, at, av, aw, "next", ax);
        }
        function aw(ax) {
          h(au, as, at, av, aw, "throw", ax);
        }
        av(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = void 0,
    m = "",
    n = "64",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "10019",
    z = "",
    A = "",
    B = "",
    C = "",
    D = "",
    E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ap() {
      var ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc;
      return g().wrap(function (be) {
        for (;;) {
          switch (be.prev = be.next) {
            case 0:
              if (j) {
                be.next = 5;
                break;
              }
              console.log("先去boxjs填写账号密码");
              be.next = 4;
              return am("先去boxjs填写账号密码");
            case 4:
              return be.abrupt("return");
            case 5:
              be.next = 7;
              return ai();
            case 7:
              l = be.sent;
              ar = j.split(" ");
              as = c(ar);
              be.prev = 10;
              as.s();
            case 12:
              if ((at = as.n()).done) {
                be.next = 215;
                break;
              }
              au = at.value;
              console.log("随机生成UA");
              av = ag();
              o = av.ua;
              p = av.commonUa;
              q = av.uuid;
              console.log(o);
              console.log(p);
              u = au.split("&")[0];
              v = au.split("&")[1];
              w = au.split("&")[2];
              x = au.split("&")[3] || u;
              console.log("用户：".concat(u, "开始任务"));
              console.log("获取sessionId");
              be.next = 29;
              return N("/api/account/init");
            case 29:
              aw = be.sent;
              z = aw.data.session.id;
              console.log(z);
              console.log("获取signature_key");
              be.next = 35;
              return H("/web/init?client_id=".concat(y));
            case 35:
              ax = be.sent;
              m = ax.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              be.next = 41;
              return J("/web/oauth/credential_auth");
            case 41:
              if (ay = be.sent, ay.data) {
                be.next = 45;
                break;
              }
              console.log(ay.message);
              return be.abrupt("continue", 213);
            case 45:
              az = ay.data.authorization_code.code;
              console.log(az);
              console.log("登录");
              be.next = 50;
              return N("/api/zbtxz/login", "check_token=&code=".concat(az, "&token=&type=-1&union_id="));
            case 50:
              aA = be.sent;
              console.log("登录成功");
              t = aA.data.session.account_id;
              z = aA.data.session.id;
              be.next = 56;
              return L("/api/app_feature_switch/list");
            case 56:
              aB = be.sent;
              console.log("进入app：".concat(aB.message));
              console.log("————————————");
              console.log("每日签到");
              be.next = 62;
              return R("/auth/userLogin", {
                accountId: t,
                sessionId: z,
                q: "bcuABCdvYzEJodimBMvIjKjDQ5CiVGO2yL2Tm66bWYU=",
                tenantCode: "xsb_wangchao"
              });
            case 62:
              aC = be.sent;
              A = aC.data.token;
              be.next = 66;
              return P("/activity/signin?deviceId=".concat(q, "&sessionId=").concat(z));
            case 66:
              aD = be.sent;
              console.log("签到结果：".concat(aD.message));
              be.next = 70;
              return P("/activity/getFixSigninInfo");
            case 70:
              if (aE = be.sent, !(aE.data.fixSigninDate.length > 0)) {
                be.next = 80;
                break;
              }
              aF = "";
              aG = c(aE.data.fixSigninDate);
              try {
                for (aG.s(); !(aH = aG.n()).done;) {
                  aI = aH.value;
                  aF += aI + ",";
                }
              } catch (bm) {
                aG.e(bm);
              } finally {
                aG.f();
              }
              aF = aF.substring(0, aF.length - 1);
              be.next = 78;
              return P("/activity/fixSignin?deviceId=".concat(q, "&sessionId=").concat(z, "&fixSigninDate=").concat(aF));
            case 78:
              aJ = be.sent;
              console.log("补签结果：".concat(aJ.message));
            case 80:
              be.next = 82;
              return P("/activity/getUserActivityInfo?startTime=2025-03-15&endTime=2029-03-31&deviceId=".concat(q, "&ytoken="));
            case 82:
              aK = be.sent;
              aL = c(aK.data.h5ActivityExtraRewardList);
              be.prev = 84;
              aL.s();
            case 86:
              if ((aM = aL.n()).done) {
                be.next = 143;
                break;
              }
              if (aN = aM.value, "已完成" == aN.completionDegree) {
                be.next = 90;
                break;
              }
              return be.abrupt("continue", 141);
            case 90:
              be.next = 92;
              return P("/activity/getLotteryLink?rewardId=".concat(aN.rewardId, "&type=").concat(aN.signinType));
            case 92:
              aO = be.sent;
              be.next = 95;
              return V("/api/auth/userLogin", {
                accountId: t,
                sessionId: z,
                q: decodeURIComponent(aO.data.split("q=")[1]),
                tenantCode: "xsb_wangchao"
              });
            case 95:
              aP = be.sent;
              B = aP.data.token;
              aQ = aP.data.thirdId;
              be.next = 100;
              return T("/activity/lottery/frontPageNum?activityId=".concat(aQ));
            case 100:
              aR = be.sent;
              console.log("抽奖id：".concat(aQ, " 剩余抽奖次数：").concat(aR.data.remainPrizeNum));
              aS = 0;
            case 103:
              if (!(aS < aR.data.remainPrizeNum)) {
                be.next = 111;
                break;
              }
              var bg = {};
              bg.activityId = aQ;
              bg.clientId = q;
              be.next = 106;
              return V("/h5/activity/lottery/userActivityLottery", bg);
            case 106:
              aT = be.sent;
              1 == aT.data.isPrize ? (console.log("抽奖获得：".concat(aT.data.prizeName)), D += "用户：".concat(u, " 抽奖获得：").concat(aT.data.prizeName, "\n")) : 0 == aT.data.isPrize ? console.log("未中奖") : console.log(JSON.stringify(aT));
            case 108:
              aS++;
              be.next = 103;
              break;
            case 111:
              be.next = 113;
              return T("/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(aQ));
            case 113:
              if (aU = be.sent, aV = /\?u=([^"]*)/, aW = JSON.stringify(aU).match(aV), !aW) {
                be.next = 140;
                break;
              }
              be.next = 119;
              return Z("/user/auth/userLogin", {
                u: decodeURIComponent(aW[1]),
                accountId: t,
                sessionId: z
              });
            case 119:
              aX = be.sent;
              C = aX.data.token;
              be.next = 123;
              return X("/redBag/getFundsDetail?fundsChannelType=0");
            case 123:
              if (aY = be.sent, aY.data.account) {
                be.next = 129;
                break;
              }
              be.next = 127;
              return X("/redBag/saveAliPayAccount?userName=".concat(w, "&account=").concat(x));
            case 127:
              aZ = be.sent;
              console.log("绑定支付宝：".concat(aZ.message));
            case 129:
              be.next = 131;
              return X("/redBag/getWalletInfo");
            case 131:
              if (b0 = be.sent, console.log("钱包余额：".concat(b0.data.aliPayTotalPrice)), !(b0.data.aliPayTotalPrice > 0)) {
                be.next = 138;
                break;
              }
              be.next = 136;
              return X("/redBag/createTrans?price=".concat(b0.data.aliPayTotalPrice, "&fundsChannelType=0&yToken=0&deviceId=").concat(q));
            case 136:
              b1 = be.sent;
              console.log("提现：".concat(b1.message));
            case 138:
              be.next = 141;
              break;
            case 140:
              console.log("获取钱包id失败");
            case 141:
              be.next = 86;
              break;
            case 143:
              be.next = 148;
              break;
            case 145:
              be.prev = 145;
              be.t0 = be.catch(84);
              aL.e(be.t0);
            case 148:
              be.prev = 148;
              aL.f();
              return be.finish(148);
            case 151:
              console.log("————————————");
              console.log("阅读抽奖");
              r = "";
              console.log("获取登录cookie");
              be.next = 157;
              return a1("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(z, "&deviceId=").concat(q));
            case 157:
              if (r = be.sent, r) {
                be.next = 160;
                break;
              }
              return be.abrupt("continue", 213);
            case 160:
              console.log(r);
              be.next = 163;
              return a3("/prod-api/user-read/list/".concat(af()));
            case 163:
              b2 = be.sent;
              b3 = c(b2.data.articleIsReadList);
              be.prev = 165;
              b3.s();
            case 167:
              if ((b4 = b3.n()).done) {
                be.next = 183;
                break;
              }
              b5 = b4.value;
              console.log("文章：".concat(b5.title));
              be.next = 172;
              return L("/api/article/detail?id=".concat(b5.newsId));
            case 172:
              be.sent;
              be.next = 175;
              return L("/api/article/read_time?channel_article_id=".concat(b5.newsId, "&is_end=true&read_time=7934"));
            case 175:
              be.sent;
              b6 = JSON.stringify({
                timestamp: Date.now(),
                articleId: b5.id,
                accountId: t
              });
              be.next = 179;
              return a3("/prod-api/already-read/article/new?signature=".concat(ab(b6)), b6);
            case 179:
              b7 = be.sent;
              console.log("阅读：".concat(b7.msg));
            case 181:
              be.next = 167;
              break;
            case 183:
              be.next = 188;
              break;
            case 185:
              be.prev = 185;
              be.t1 = be.catch(165);
              b3.e(be.t1);
            case 188:
              be.prev = 188;
              b3.f();
              return be.finish(188);
            case 191:
              be.next = 193;
              return a3("/prod-api/user-read-count/count/".concat(af()));
            case 193:
              if (b8 = be.sent, console.log("剩余抽奖次数：".concat(b8.data)), !(b8.data > 0)) {
                be.next = 213;
                break;
              }
              s = "";
              be.next = 199;
              return a5("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(z));
            case 199:
              s = be.sent;
              console.log("获取抽奖cookie");
              console.log(s);
              be.next = 204;
              return a7("/tzrb/awardUpgrade/list?activityId=67");
            case 204:
              b9 = be.sent;
              ba = b9.data;
              bb = g().mark(function by() {
                var bz, bA;
                return g().wrap(function (bB) {
                  for (;;) {
                    switch (bB.prev = bB.next) {
                      case 0:
                        bB.next = 2;
                        return a9("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        bz = bB.sent;
                        bA = ba.findIndex(function (bE) {
                          return bE.id == bz.data;
                        });
                        -1 != bA ? (console.log("抽奖获得：".concat(ba[bA].title)), D += "用户：".concat(u, " 抽奖获得：").concat(ba[bA].title, "\n")) : console.log(JSON.stringify(bz));
                      case 5:
                      case "end":
                        return bB.stop();
                    }
                  }
                }, by);
              });
              bc = 0;
            case 208:
              if (!(bc < b8.data)) {
                be.next = 213;
                break;
              }
              return be.delegateYield(bb(), "t2", 210);
            case 210:
              bc++;
              be.next = 208;
              break;
            case 213:
              be.next = 12;
              break;
            case 215:
              be.next = 220;
              break;
            case 217:
              be.prev = 217;
              be.t3 = be.catch(10);
              as.e(be.t3);
            case 220:
              be.prev = 220;
              as.f();
              return be.finish(220);
            case 223:
              if (!D) {
                be.next = 226;
                break;
              }
              be.next = 226;
              return am(D);
            case 226:
            case "end":
              return be.stop();
          }
        }
      }, ap, null, [[10, 217, 220, 223], [84, 145, 148, 151], [165, 185, 188, 191]]);
    }));
    return G.apply(this, arguments);
  }
  function H(ao) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function aq(ar) {
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://passport.tmuyun.com".concat(ar),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": ae(),
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  }
                };
                $.get(ax, function () {
                  var az = i(g().mark(function aB(aC, aD, aE) {
                    return g().wrap(function (aH) {
                      for (;;) {
                        switch (aH.prev = aH.next) {
                          case 0:
                            try {
                              aC ? (console.log("".concat(JSON.stringify(aC))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : av(JSON.parse(aE));
                            } catch (aK) {
                              $.logErr(aK, aD);
                            } finally {
                              av();
                            }
                          case 1:
                          case "end":
                            return aH.stop();
                        }
                      }
                    }, aB);
                  }));
                  return function (aC, aD, aE) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, aq);
    }));
    return I.apply(this, arguments);
  }
  function J(ao) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ap(aq) {
      var as;
      return g().wrap(function (au) {
        for (;;) {
          switch (au.prev = au.next) {
            case 0:
              as = ac();
              return au.abrupt("return", new Promise(function (aw) {
                var ay = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": as.uuid,
                  "X-SIGNATURE": as.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": o
                };
                var az = {
                  url: "https://passport.tmuyun.com".concat(aq),
                  headers: ay,
                  body: as.body
                };
                $.post(az, function () {
                  var aC = i(g().mark(function aE(aF, aG, aH) {
                    return g().wrap(function (aJ) {
                      for (;;) {
                        switch (aJ.prev = aJ.next) {
                          case 0:
                            try {
                              aF ? (console.log("".concat(JSON.stringify(aF))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aw(JSON.parse(aH));
                            } catch (aL) {
                              $.logErr(aL, aG);
                            } finally {
                              aw();
                            }
                          case 1:
                          case "end":
                            return aJ.stop();
                        }
                      }
                    }, aE);
                  }));
                  return function (aF, aG, aH) {
                    return aC.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return au.stop();
          }
        }
      }, ap);
    }));
    return K.apply(this, arguments);
  }
  function L(ao) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ao(ap) {
      var ar;
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              ar = ad(ap);
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ar.time,
                  "X-SESSION-ID": z,
                  "X-REQUEST-ID": ar.uuid,
                  "X-SIGNATURE": ar.signature,
                  "X-TENANT-ID": n,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": p
                };
                var ax = {
                  url: "https://vapp.taizhou.com.cn".concat(ap),
                  headers: aw
                };
                $.get(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            au();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return M.apply(this, arguments);
  }
  function N(ao, ap) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ao(ap, aq) {
      var as;
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ad(ap);
              return at.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://vapp.taizhou.com.cn".concat(ap),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": as.time,
                    "X-SESSION-ID": z,
                    "X-REQUEST-ID": as.uuid,
                    "X-SIGNATURE": as.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  },
                  body: aq
                };
                $.post(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            au();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ao);
    }));
    return O.apply(this, arguments);
  }
  function P(ao) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(aq),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: A,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(av, function () {
                  var aw = i(g().mark(function ax(ay, az, aA) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ay) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aA));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, az);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ax, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return Q.apply(this, arguments);
  }
  function R(ao, ap) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ap(aq, ar) {
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(aq),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: A,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(ar)
                };
                $.post(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return S.apply(this, arguments);
  }
  function T(ao) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ao(ap) {
      return g().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://act.tmlyun.com/activity-api/lottery/h5".concat(ap),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: B,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(av, function () {
                  var aw = i(g().mark(function ax(ay, az, aA) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ay) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aA));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, az);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ax, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ao);
    }));
    return U.apply(this, arguments);
  }
  function V(ao, ap) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function aq(ar, as) {
      return g().wrap(function (av) {
        for (;;) {
          switch (av.prev = av.next) {
            case 0:
              return av.abrupt("return", new Promise(function (ax) {
                var ay = {
                  url: "https://act.tmlyun.com/activity-api/lottery".concat(ar),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: B,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(as)
                };
                $.post(ay, function () {
                  var aA = i(g().mark(function aB(aC, aD, aE) {
                    return g().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            if (aF.prev = 0, !aC) {
                              aF.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aC)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aF.next = 9;
                            break;
                          case 6:
                            aF.next = 8;
                            return $.wait(2000);
                          case 8:
                            ax(JSON.parse(aE));
                          case 9:
                            aF.next = 14;
                            break;
                          case 11:
                            aF.prev = 11;
                            aF.t0 = aF.catch(0);
                            $.logErr(aF.t0, aD);
                          case 14:
                            aF.prev = 14;
                            ax();
                            return aF.finish(14);
                          case 17:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, aB, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aC, aD, aE) {
                    return aA.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return av.stop();
          }
        }
      }, aq);
    }));
    return W.apply(this, arguments);
  }
  function X(ao) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ao(ap) {
      return g().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (as) {
                var au = {
                  url: "https://my.tmlyun.com/equity-api".concat(ap),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: C,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(au, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            as(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            as();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ao);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ao, ap) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ap(aq, ar) {
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (au) {
                var aw = {
                  "content-type": "application/json",
                  accept: "application/json, text/plain, */*",
                  authorization: C,
                  "sec-fetch-site": "sec-fetch-site",
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "user-agent": p
                };
                var ax = {
                  url: "https://my.tmlyun.com/equity-api".concat(aq),
                  headers: aw,
                  body: JSON.stringify(ar)
                };
                $.post(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            au();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ao) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://xmt.taizhou.com.cn".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aw, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !az) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 16;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(aB).code) {
                              aD.next = 13;
                              break;
                            }
                            console.log(JSON.parse(aB).msg);
                            D += "用户：".concat(u, " ").concat(JSON.parse(aB).msg, "\n");
                            au("");
                            return aD.abrupt("return");
                          case 13:
                            r = $.isNode() ? aA.headers["set-cookie"][0] : aA.headers["set-cookie"] || aA.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            au(r);
                          case 16:
                            aD.next = 21;
                            break;
                          case 18:
                            aD.prev = 18;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aA);
                          case 21:
                            aD.prev = 21;
                            au();
                            return aD.finish(21);
                          case 24:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, ay, null, [[0, 18, 21, 24]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a2.apply(this, arguments);
  }
  function a3(ao) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var av = {
                  url: "https://xmt.taizhou.com.cn".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            au();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a4.apply(this, arguments);
  }
  function a5(ao) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = i(g().mark(function ap(aq) {
      return g().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://srv-app.taizhou.com.cn".concat(aq),
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
                $.get(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 11;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? aA.headers["set-cookie"][0] : aA.headers["set-cookie"] || aA.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            at(s);
                          case 11:
                            aC.next = 16;
                            break;
                          case 13:
                            aC.prev = 13;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 16:
                            aC.prev = 16;
                            at();
                            return aC.finish(16);
                          case 19:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 13, 16, 19]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return a6.apply(this, arguments);
  }
  function a7(ao) {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var av = {
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
                };
                var aw = {
                  url: "https://srv-app.taizhou.com.cn".concat(aq),
                  headers: av
                };
                $.get(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aA) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aC));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aB);
                          case 14:
                            aE.prev = 14;
                            au();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ao, ap) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ao(ap, aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
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
                };
                var aw = {
                  url: "https://srv-app.taizhou.com.cn".concat(ap),
                  headers: av,
                  body: aq
                };
                $.post(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            if (aF.prev = 0, !aA) {
                              aF.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aF.next = 9;
                            break;
                          case 6:
                            aF.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aC));
                          case 9:
                            aF.next = 14;
                            break;
                          case 11:
                            aF.prev = 11;
                            aF.t0 = aF.catch(0);
                            $.logErr(aF.t0, aB);
                          case 14:
                            aF.prev = 14;
                            at();
                            return aF.finish(14);
                          case 17:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ao) {
    var ap = l.loadSM2();
    return ap.doEncrypt(ao, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function ac() {
    var aw = new (l.loadJSEncrypt())();
    aw.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = aw.encrypt(v);
    var at = ae(),
      au = "client_id=".concat(y, "&password=").concat(v, "&phone_number=").concat(u),
      av = "post%%/web/oauth/credential_auth?".concat(au, "%%").concat(at, "%%");
    au = "client_id=".concat(y, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = l.createCryptoJS();
    var ar = CryptoJS.HmacSHA256(av, m),
      as = CryptoJS.enc.Hex.stringify(ar);
    var aq = {};
    aq.uuid = at;
    aq.signature = as;
    aq.body = au;
    return aq;
  }
  function ad(ao) {
    var ap = ae(),
      aq = Date.now();
    ao.indexOf("?") > 0 && (ao = ao.substring(0, ao.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ar = CryptoJS.SHA256("".concat(ao, "&&").concat(z, "&&").concat(ap, "&&").concat(aq, "&&").concat(E, "&&").concat(n)).toString(),
      as = {
        uuid: ap,
        time: aq,
        signature: ar
      };
    return as;
  }
  function ae() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (aq) {
      var ar = 16 * Math.random() | 0,
        as = "x" === aq ? ar : 3 & ar | 8;
      return as.toString(16);
    });
  }
  function af() {
    var ao = new Date(),
      ap = ao.getFullYear(),
      aq = String(ao.getMonth() + 1).padStart(2, "0"),
      ar = String(ao.getDate()).padStart(2, "0");
    return "".concat(ap).concat(aq).concat(ar);
  }
  function ag() {
    var ao = "6.0.2",
      ap = ae(),
      aq = ah(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ar = "Xiaomi " + aq,
      as = "Android",
      at = "".concat(as.toUpperCase(), ";").concat("11", ";").concat(y, ";").concat(ao, ";1.0;null;").concat(aq),
      au = "".concat(ao, ";").concat(ap, ";").concat(ar, ";").concat(as, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      av = {
        ua: at,
        commonUa: au,
        uuid: ap
      };
    return av;
  }
  function ah(ao) {
    return ao[Math.floor(Math.random() * ao.length)];
  }
  function ai() {
    return aj.apply(this, arguments);
  }
  function aj() {
    aj = i(g().mark(function ao() {
      var aq;
      return g().wrap(function ar(as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (aq = $.getdata("Utils_Code") || "", !aq || !Object.keys(aq).length) {
                as.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aq);
              return as.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return as.abrupt("return", new Promise(function () {
                var aw = i(g().mark(function ax(ay) {
                  return g().wrap(function aA(aB) {
                    for (;;) {
                      switch (aB.prev = aB.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aC) {
                            $.setdata(aC, "Utils_Code");
                            eval(aC);
                            console.log("✅ Utils加载成功, 请继续");
                            ay(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aB.stop();
                      }
                    }
                  }, ax);
                }));
                return function (ay) {
                  return aw.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return aj.apply(this, arguments);
  }
  function ak() {
    return al.apply(this, arguments);
  }
  function al() {
    al = i(g().mark(function ap() {
      return g().wrap(function (aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              return aq.abrupt("return", new Promise(function (as) {
                var au = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(au, function () {
                  var av = i(g().mark(function aw(ax, ay, az) {
                    return g().wrap(function (aB) {
                      for (;;) {
                        switch (aB.prev = aB.next) {
                          case 0:
                            try {
                              ax ? (console.log("".concat(JSON.stringify(ax))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(az).notice);
                            } catch (aC) {
                              $.logErr(aC, ay);
                            } finally {
                              as();
                            }
                          case 1:
                          case "end":
                            return aB.stop();
                        }
                      }
                    }, aw);
                  }));
                  return function (ax, ay, az) {
                    return av.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aq.stop();
          }
        }
      }, ap);
    }));
    return al.apply(this, arguments);
  }
  function am(ao) {
    return an.apply(this, arguments);
  }
  function an() {
    an = i(g().mark(function aq(ar) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (!$.isNode()) {
                as.next = 5;
                break;
              }
              as.next = 3;
              return notify.sendNotify($.name, ar);
            case 3:
              as.next = 6;
              break;
            case 5:
              $.msg($.name, "", ar);
            case 6:
            case "end":
              return as.stop();
          }
        }
      }, aq);
    }));
    return an.apply(this, arguments);
  }
  i(g().mark(function ao() {
    return g().wrap(function (ap) {
      for (;;) {
        switch (ap.prev = ap.next) {
          case 0:
            ap.next = 2;
            return ak();
          case 2:
            ap.next = 4;
            return F();
          case 4:
          case "end":
            return ap.stop();
        }
      }
    }, ao);
  }))().catch(function (ap) {
    $.log(ap);
  }).finally(function () {
    $.done({});
  });
})();