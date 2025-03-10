//Mon Mar 10 2025 10:31:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ae) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (af) {
      return typeof af;
    } : function (af) {
      return af && "function" == typeof Symbol && af.constructor === Symbol && af !== Symbol.prototype ? "symbol" : typeof af;
    };
    return b(ae);
  }
  function c(ae, af) {
    var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
    if (!ah) {
      if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
        ah && (ae = ah);
        var ai = 0,
          aj = function () {};
        return {
          s: aj,
          n: function () {
            var ap = {};
            ap.done = !0;
            return ai >= ae.length ? ap : {
              done: !1,
              value: ae[ai++]
            };
          },
          e: function (ap) {
            throw ap;
          },
          f: aj
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ak,
      al = !0,
      am = !1;
    return {
      s: function () {
        ah = ah.call(ae);
      },
      n: function () {
        var ap = ah.next();
        al = ap.done;
        return ap;
      },
      e: function (ap) {
        am = !0;
        ak = ap;
      },
      f: function () {
        try {
          al || null == ah.return || ah.return();
        } finally {
          if (am) {
            throw ak;
          }
        }
      }
    };
  }
  function d(ae, af) {
    if (ae) {
      if ("string" == typeof ae) {
        return f(ae, af);
      }
      var ah = {}.toString.call(ae).slice(8, -1);
      "Object" === ah && ae.constructor && (ah = ae.constructor.name);
      return "Map" === ah || "Set" === ah ? Array.from(ae) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(ae, af) : void 0;
    }
  }
  function f(ae, af) {
    (null == af || af > ae.length) && (af = ae.length);
    for (var ag = 0, ah = Array(af); ag < af; ag++) {
      ah[ag] = ae[ag];
    }
    return ah;
  }
  function g() {
    'use strict';

    g = function () {
      return ag;
    };
    var af,
      ag = {},
      ah = Object.prototype,
      ai = ah.hasOwnProperty,
      aj = Object.defineProperty || function (aL, aM, aN) {
        aL[aM] = aN.value;
      },
      ak = "function" == typeof Symbol ? Symbol : {},
      al = ak.iterator || "@@iterator",
      am = ak.asyncIterator || "@@asyncIterator",
      an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      var aO = {
        value: aN,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aL, aM, aO);
      return aL[aM];
    }
    try {
      ao({}, "");
    } catch (aM) {
      ao = function (aO, aP, aQ) {
        return aO[aP] = aQ;
      };
    }
    function ap(aO, aP, aQ, aR) {
      var aS = aP && aP.prototype instanceof aw ? aP : aw,
        aT = Object.create(aS.prototype),
        aU = new aJ(aR || []);
      aj(aT, "_invoke", {
        value: aF(aO, aQ, aU)
      });
      return aT;
    }
    function aq(aO, aP, aQ) {
      try {
        return {
          type: "normal",
          arg: aO.call(aP, aQ)
        };
      } catch (aU) {
        var aS = {
          type: "throw",
          arg: aU
        };
        return aS;
      }
    }
    ag.wrap = ap;
    var ar = "suspendedStart",
      as = "suspendedYield",
      at = "executing",
      au = "completed",
      av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      return this;
    });
    var aA = Object.getPrototypeOf,
      aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      ["next", "throw", "return"].forEach(function (aS) {
        ao(aO, aS, function (aU) {
          return this._invoke(aS, aU);
        });
      });
    }
    function aE(aO, aP) {
      function aT(aU, aV, aW, aX) {
        var aZ = aq(aO[aU], aO, aV);
        if ("throw" !== aZ.type) {
          var b0 = aZ.arg,
            b1 = b0.value;
          return b1 && "object" == b(b1) && ai.call(b1, "__await") ? aP.resolve(b1.__await).then(function (b2) {
            aT("next", b2, aW, aX);
          }, function (b2) {
            aT("throw", b2, aW, aX);
          }) : aP.resolve(b1).then(function (b2) {
            b0.value = b2;
            aW(b0);
          }, function (b2) {
            return aT("throw", b2, aW, aX);
          });
        }
        aX(aZ.arg);
      }
      var aR;
      aj(this, "_invoke", {
        value: function (aU, aV) {
          function aY() {
            return new aP(function (b0, b1) {
              aT(aU, aV, b0, b1);
            });
          }
          return aR = aR ? aR.then(aY, aY) : aY();
        }
      });
    }
    function aF(aO, aP, aQ) {
      var aS = ar;
      return function (aT, aU) {
        if (aS === at) {
          throw Error("Generator is already running");
        }
        if (aS === au) {
          if ("throw" === aT) {
            throw aU;
          }
          var aW = {
            value: af,
            done: !0
          };
          return aW;
        }
        for (aQ.method = aT, aQ.arg = aU;;) {
          var aX = aQ.delegate;
          if (aX) {
            var aY = aG(aX, aQ);
            if (aY) {
              if (aY === av) {
                continue;
              }
              return aY;
            }
          }
          if ("next" === aQ.method) {
            aQ.sent = aQ._sent = aQ.arg;
          } else {
            if ("throw" === aQ.method) {
              if (aS === ar) {
                throw aS = au, aQ.arg;
              }
              aQ.dispatchException(aQ.arg);
            } else {
              "return" === aQ.method && aQ.abrupt("return", aQ.arg);
            }
          }
          aS = at;
          var aZ = aq(aO, aP, aQ);
          if ("normal" === aZ.type) {
            if (aS = aQ.done ? au : as, aZ.arg === av) {
              continue;
            }
            var b0 = {};
            b0.value = aZ.arg;
            b0.done = aQ.done;
            return b0;
          }
          "throw" === aZ.type && (aS = au, aQ.method = "throw", aQ.arg = aZ.arg);
        }
      };
    }
    function aG(aO, aP) {
      var aS = aP.method,
        aT = aO.iterator[aS];
      if (aT === af) {
        aP.delegate = null;
        "throw" === aS && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aS && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aS + "' method"));
        return av;
      }
      var aU = aq(aT, aO.iterator, aP.arg);
      if ("throw" === aU.type) {
        aP.method = "throw";
        aP.arg = aU.arg;
        aP.delegate = null;
        return av;
      }
      var aV = aU.arg;
      return aV ? aV.done ? (aP[aO.resultName] = aV.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aV : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
    }
    function aH(aO) {
      var aP = {
        tryLoc: aO[0]
      };
      var aQ = aP;
      1 in aO && (aQ.catchLoc = aO[1]);
      2 in aO && (aQ.finallyLoc = aO[2], aQ.afterLoc = aO[3]);
      this.tryEntries.push(aQ);
    }
    function aI(aO) {
      var aP = aO.completion || {};
      aP.type = "normal";
      delete aP.arg;
      aO.completion = aP;
    }
    function aJ(aO) {
      var aP = {
        tryLoc: "root"
      };
      this.tryEntries = [aP];
      aO.forEach(aH, this);
      this.reset(!0);
    }
    function aK(aO) {
      if (aO || "" === aO) {
        var aQ = aO[al];
        if (aQ) {
          return aQ.call(aO);
        }
        if ("function" == typeof aO.next) {
          return aO;
        }
        if (!isNaN(aO.length)) {
          var aR = -1,
            aS = function aW() {
              for (; ++aR < aO.length;) {
                if (ai.call(aO, aR)) {
                  aW.value = aO[aR];
                  aW.done = !1;
                  return aW;
                }
              }
              aW.value = af;
              aW.done = !0;
              return aW;
            };
          return aS.next = aS;
        }
      }
      throw new TypeError(b(aO) + " is not iterable");
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: !0
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: !0
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    ag.isGeneratorFunction = function (aO) {
      var aP = "function" == typeof aO && aO.constructor;
      return !!aP && (aP === ax || "GeneratorFunction" === (aP.displayName || aP.name));
    };
    ag.mark = function (aO) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
      aO.prototype = Object.create(aC);
      return aO;
    };
    ag.awrap = function (aO) {
      var aP = {
        __await: aO
      };
      return aP;
    };
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      return this;
    });
    ag.AsyncIterator = aE;
    ag.async = function (aO, aP, aQ, aR, aS) {
      void 0 === aS && (aS = Promise);
      var aV = new aE(ap(aO, aP, aQ, aR), aS);
      return ag.isGeneratorFunction(aP) ? aV : aV.next().then(function (aX) {
        return aX.done ? aX.value : aV.next();
      });
    };
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      return this;
    });
    ao(aC, "toString", function () {
      return "[object Generator]";
    });
    ag.keys = function (aO) {
      var aR = Object(aO),
        aS = [];
      for (var aT in aR) aS.push(aT);
      aS.reverse();
      return function aV() {
        for (; aS.length;) {
          var aW = aS.pop();
          if (aW in aR) {
            aV.value = aW;
            aV.done = !1;
            return aV;
          }
        }
        aV.done = !0;
        return aV;
      };
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = !1, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
          for (var aP in this) "t" === aP.charAt(0) && ai.call(this, aP) && !isNaN(+aP.slice(1)) && (this[aP] = af);
        }
      },
      stop: function () {
        this.done = !0;
        var aO = this.tryEntries[0].completion;
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        return this.rval;
      },
      dispatchException: function (aO) {
        if (this.done) {
          throw aO;
        }
        var aQ = this;
        function aX(aY, aZ) {
          aT.type = "throw";
          aT.arg = aO;
          aQ.next = aY;
          aZ && (aQ.method = "next", aQ.arg = af);
          return !!aZ;
        }
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR],
            aT = aS.completion;
          if ("root" === aS.tryLoc) {
            return aX("end");
          }
          if (aS.tryLoc <= this.prev) {
            var aU = ai.call(aS, "catchLoc"),
              aV = ai.call(aS, "finallyLoc");
            if (aU && aV) {
              if (this.prev < aS.catchLoc) {
                return aX(aS.catchLoc, !0);
              }
              if (this.prev < aS.finallyLoc) {
                return aX(aS.finallyLoc);
              }
            } else {
              if (aU) {
                if (this.prev < aS.catchLoc) {
                  return aX(aS.catchLoc, !0);
                }
              } else {
                if (!aV) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aS.finallyLoc) {
                  return aX(aS.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aO, aP) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.tryLoc <= this.prev && ai.call(aS, "finallyLoc") && this.prev < aS.finallyLoc) {
            var aT = aS;
            break;
          }
        }
        aT && ("break" === aO || "continue" === aO) && aT.tryLoc <= aP && aP <= aT.finallyLoc && (aT = null);
        var aU = aT ? aT.completion : {};
        aU.type = aO;
        aU.arg = aP;
        return aT ? (this.method = "next", this.next = aT.finallyLoc, av) : this.complete(aU);
      },
      complete: function (aO, aP) {
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
        return av;
      },
      finish: function (aO) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.finallyLoc === aO) {
            this.complete(aR.completion, aR.afterLoc);
            aI(aR);
            return av;
          }
        }
      },
      catch: function (aO) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.tryLoc === aO) {
            var aS = aR.completion;
            if ("throw" === aS.type) {
              var aT = aS.arg;
              aI(aR);
            }
            return aT;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aO, aP, aQ) {
        this.delegate = {
          iterator: aK(aO),
          resultName: aP,
          nextLoc: aQ
        };
        "next" === this.method && (this.arg = af);
        return av;
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    try {
      var al = ae[aj](ak),
        am = al.value;
    } catch (ap) {
      return void ag(ap);
    }
    al.done ? af(am) : Promise.resolve(am).then(ah, ai);
  }
  function i(ae) {
    return function () {
      var ag = this,
        ah = arguments;
      return new Promise(function (ai, aj) {
        var al = ae.apply(ag, ah);
        function am(ao) {
          h(al, ai, aj, am, an, "next", ao);
        }
        function an(ao) {
          h(al, ai, aj, am, an, "throw", ao);
        }
        am(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    m = void 0;
  window = {};
  var n = "",
    o = "",
    p = "",
    q = "",
    r = "94",
    s = "",
    t = "10048",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "",
    D = "",
    E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function af() {
      var ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg;
      return g().wrap(function (bi) {
        for (;;) {
          switch (bi.prev = bi.next) {
            case 0:
              if (j) {
                bi.next = 5;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bi.next = 4;
              return ac("先去boxjs填写账号密码");
            case 4:
              return bi.abrupt("return");
            case 5:
              bi.next = 7;
              return a8();
            case 7:
              m = bi.sent;
              ah = j.split(" ");
              ai = c(ah);
              bi.prev = 10;
              ai.s();
            case 12:
              if ((aj = ai.n()).done) {
                bi.next = 272;
                break;
              }
              ak = aj.value;
              console.log("随机生成UA");
              al = a7();
              x = al.ua;
              y = al.commonUa;
              z = al.uuid;
              console.log(x);
              console.log(y);
              u = ak.split("&")[0];
              v = ak.split("&")[1];
              w = ak.split("&")[2];
              console.log("用户：".concat(u, "开始任务"));
              console.log("获取sessionId");
              bi.next = 28;
              return N("/api/account/init");
            case 28:
              am = bi.sent;
              q = am.data.session.id;
              console.log(q);
              console.log("获取signature_key");
              bi.next = 34;
              return H("/web/init?client_id=".concat(t));
            case 34:
              an = bi.sent;
              n = an.data.client.signature_key;
              console.log(n);
              console.log("获取code");
              bi.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ao = bi.sent, ao.data) {
                bi.next = 44;
                break;
              }
              console.log(ao.message);
              return bi.abrupt("continue", 270);
            case 44:
              ap = ao.data.authorization_code.code;
              console.log(ap);
              console.log("登录");
              bi.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ap, "&token=&type=-1&union_id="));
            case 49:
              aq = bi.sent;
              console.log("登录成功");
              s = aq.data.session.account_id;
              q = aq.data.session.id;
              console.log("————————————");
              console.log("有缘对对碰");
              bi.next = 57;
              return X("/open/xxdtest/dailyMatchFans/controller.php", "appid=".concat(q, "&openid=").concat(s, "&type=101"));
            case 57:
              bi.next = 59;
              return bi.sent;
            case 59:
              ar = bi.sent;
              console.log(ar);
              as = 0;
            case 62:
              if (!(as < 5)) {
                bi.next = 72;
                break;
              }
              bi.next = 65;
              return X("/open/xxdtest/dailyMatchFans/controller.php", "type=105&score=60");
            case 65:
              if (at = bi.sent, console.log(at), 1 == at.status) {
                bi.next = 69;
                break;
              }
              return bi.abrupt("break", 72);
            case 69:
              as++;
              bi.next = 62;
              break;
            case 72:
              if (B) {
                bi.next = 80;
                break;
              }
              console.log("获取对对碰抽奖id");
              bi.next = 76;
              return V("/open/xxdtest/dailyMatchFans/bookflip3.php?source=bookflip2");
            case 76:
              au = bi.sent;
              av = /\/h5\?mark=raffle@designh5&tid=([a-zA-Z0-9]+)/;
              aw = au.match(av);
              aw && (B = aw[1], console.log("对对碰抽奖id：".concat(B)));
            case 80:
              bi.next = 82;
              return L("/api/user_mumber/account_detail");
            case 82:
              if (ax = bi.sent, !B) {
                bi.next = 104;
                break;
              }
              ay = Math.round(new Date().getTime() / 1000).toString();
              bi.next = 87;
              return R("/memberhy/tm/signature", {
                accountId: s,
                signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ay, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                mobile: "1",
                sessionId: q,
                login: "1",
                user: {
                  realName: "",
                  image_url: ax.data.rst.image_url,
                  nick_name: ax.data.rst.nick_name,
                  is_face_verify: 0,
                  idcard: "",
                  id: s
                },
                timestamp: ay,
                sign: "xsb_hn"
              });
            case 87:
              az = bi.sent;
              A = JSON.stringify({
                id: az.id,
                black: 0,
                btoken: az.btoken,
                expire: az.expire,
                token: az.token,
                source: "xsb_hn",
                mobile: az.mobile,
                mark: az.mark,
                mtoken: az.mtoken,
                stoken: az.stoken,
                nick_name: encodeURI(az.nick_name),
                avatar: az.avatar
              });
              bi.next = 91;
              return P("/lotteryhy/designh5/client/activity/".concat(B));
            case 91:
              aA = bi.sent;
              console.log("拥有".concat(aA.response.remain_counts, "次抽奖"));
              aB = 0;
            case 94:
              if (!(aB < aA.response.remain_counts)) {
                bi.next = 102;
                break;
              }
              bi.next = 97;
              return R("/lotteryhy/api/client/cj/awd/drw/".concat(B), {});
            case 97:
              aC = bi.sent;
              aC.award_name ? (console.log("抽奖获得：".concat(aC.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aC.award_name, "\n")) : (console.log(JSON.stringify(aC)), o += "用户：".concat(u, " 抽奖获得：").concat(aC.error_message, "\n"));
            case 99:
              aB++;
              bi.next = 94;
              break;
            case 102:
              bi.next = 105;
              break;
            case 104:
              console.log("获取对对碰抽奖id失败");
            case 105:
              if (console.log("————————————"), console.log("获取id"), E && D) {
                bi.next = 117;
                break;
              }
              bi.next = 110;
              return L("/api/myPage/list");
            case 110:
              aD = bi.sent;
              aE = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
              aF = JSON.stringify(aD).match(aE);
              aF && (E = aF[1]);
              aE = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
              aF = JSON.stringify(aD).match(aE);
              aF && (D = aF[1]);
            case 117:
              if (!E) {
                bi.next = 163;
                break;
              }
              console.log("签到id：".concat(E));
              timestamp = Math.round(new Date().getTime() / 1000).toString();
              bi.next = 122;
              return R("/memberhy/tm/signature", {
                accountId: s,
                signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(timestamp, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                mobile: "1",
                sessionId: q,
                login: "1",
                user: {
                  realName: "",
                  image_url: ax.data.rst.image_url,
                  nick_name: ax.data.rst.nick_name,
                  is_face_verify: 0,
                  idcard: "",
                  id: s
                },
                timestamp: timestamp,
                sign: "xsb_hn"
              });
            case 122:
              signature = bi.sent;
              A = JSON.stringify({
                id: signature.id,
                black: 0,
                btoken: signature.btoken,
                expire: signature.expire,
                token: signature.token,
                source: "xsb_hn",
                mobile: signature.mobile,
                mark: signature.mark,
                mtoken: signature.mtoken,
                stoken: signature.stoken,
                nick_name: encodeURI(signature.nick_name),
                avatar: signature.avatar
              });
              console.log("开始签到");
              aG = new (m.loadJSEncrypt())();
              aG.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
              aH = aG.encrypt(JSON.stringify({
                activity_id: E,
                timestamp: Math.round(new Date().getTime() / 1000).toString()
              }));
              bi.next = 130;
              return R("/signhy/client/actSign/actSign", {
                params: aH
              });
            case 130:
              aI = bi.sent;
              0 == aI.error_code ? console.log("签到成功") : console.log(aI.error_message);
              bi.next = 134;
              return P("/signhy/client/actSign/getRelationCjList?activity_id=".concat(E));
            case 134:
              aJ = bi.sent;
              aK = c(aJ.response);
              bi.prev = 136;
              aK.s();
            case 138:
              if ((aL = aK.n()).done) {
                bi.next = 153;
                break;
              }
              aM = aL.value;
              console.log("活动：".concat(aM.title));
              console.log("拥有".concat(aM.draw_num, "次抽奖"));
              aN = 0;
            case 143:
              if (!(aN < aM.draw_num)) {
                bi.next = 151;
                break;
              }
              bi.next = 146;
              return R("/lotteryhy/api/client/cj/awd/drw/".concat(aM.hashid), {});
            case 146:
              aO = bi.sent;
              aO.award_name ? (console.log("抽奖获得：".concat(aO.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aO.award_name, "\n")) : (console.log(JSON.stringify(aO)), o += "用户：".concat(u, " 抽奖获得：").concat(aO.error_message, "\n"));
            case 148:
              aN++;
              bi.next = 143;
              break;
            case 151:
              bi.next = 138;
              break;
            case 153:
              bi.next = 158;
              break;
            case 155:
              bi.prev = 155;
              bi.t0 = bi.catch(136);
              aK.e(bi.t0);
            case 158:
              bi.prev = 158;
              aK.f();
              return bi.finish(158);
            case 161:
              bi.next = 164;
              break;
            case 163:
              console.log("获取签到id失败");
            case 164:
              if (!D) {
                bi.next = 238;
                break;
              }
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("阅读id：".concat(D));
              console.log("滑块验证");
              bi.next = 171;
              return P("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
            case 171:
              aP = bi.sent;
              bi.next = 174;
              return a1("".concat(k, "/crop"), {
                image: aP.img,
                y_coordinate: 150
              });
            case 174:
              if (aQ = bi.sent, aQ) {
                bi.next = 180;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 179;
              return ac("ddddocr服务异常");
            case 179:
              return bi.abrupt("continue", 270);
            case 180:
              var bk = {};
              bk.slidingImage = aQ.slidingImage;
              bk.backImage = aQ.backImage;
              bi.next = 182;
              return a1("".concat(k, "/slideComparison"), bk);
            case 182:
              if (aR = bi.sent, aR) {
                bi.next = 188;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 187;
              return ac("ddddocr服务异常");
            case 187:
              return bi.abrupt("continue", 270);
            case 188:
              console.log(aR);
              aS = aP.request_id;
              aT = aR.result;
              bi.next = 193;
              return P("/newshy/api/client/news/list/".concat(D));
            case 193:
              aU = bi.sent;
              aV = c(aU.data[0].information_content_data[0].data);
              bi.prev = 195;
              aV.s();
            case 197:
              if ((aW = aV.n()).done) {
                bi.next = 213;
                break;
              }
              for (aX = aW.value, console.log("文章：".concat(aX.title)), aY = aX.link.split("?")[1], aZ = {}, b0 = aY.split("&"), b1 = 0, b2 = b0.length; b1 < b2; b1++) {
                b3 = b0[b1].split("=");
                aZ[b3[0]] = b3[1];
              }
              b4 = new (m.loadJSEncrypt())();
              b4.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
              b5 = b4.encrypt(JSON.stringify({
                news_id: D,
                item_id: aX.item_id,
                request_id: aS,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                tn_x: aT
              }));
              bi.next = 209;
              return R("/newshy/api/client/news/readArticle", {
                params: b5
              });
            case 209:
              b6 = bi.sent;
              console.log("阅读：".concat(null == b6 ? void 0 : b6.success));
            case 211:
              bi.next = 197;
              break;
            case 213:
              bi.next = 218;
              break;
            case 215:
              bi.prev = 215;
              bi.t1 = bi.catch(195);
              aV.e(bi.t1);
            case 218:
              bi.prev = 218;
              aV.f();
              return bi.finish(218);
            case 221:
              C = aU.data[0].draw.activity_id;
              console.log("抽奖id：".concat(C));
              bi.next = 225;
              return P("/lotteryhy/designh5/client/activity/".concat(C));
            case 225:
              b7 = bi.sent;
              console.log("拥有".concat(b7.response.remain_counts, "次抽奖"));
              b8 = 0;
            case 228:
              if (!(b8 < b7.response.remain_counts)) {
                bi.next = 236;
                break;
              }
              bi.next = 231;
              return R("/lotteryhy/api/client/cj/awd/drw/".concat(C), {});
            case 231:
              b9 = bi.sent;
              b9.award_name ? (console.log("抽奖获得：".concat(b9.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(b9.award_name, "\n")) : (console.log(JSON.stringify(b9)), o += "用户：".concat(u, " 抽奖获得：").concat(b9.error_message, "\n"));
            case 233:
              b8++;
              bi.next = 228;
              break;
            case 236:
              bi.next = 239;
              break;
            case 238:
              console.log("获取id失败");
            case 239:
              bi.next = 241;
              return Z("/lotteryhy/api/client/cj/member/prize/info?prize_type=3&page=1&count=20");
            case 241:
              ba = bi.sent;
              bb = c(ba.data);
              bi.prev = 243;
              bb.s();
            case 245:
              if ((bc = bb.n()).done) {
                bi.next = 262;
                break;
              }
              if (bd = bc.value, 2 == bd.status) {
                bi.next = 260;
                break;
              }
              if (be = JSON.parse(bd.prize_info).code, console.log("奖品：".concat(bd.prize_content, " code：").concat(be)), !w) {
                bi.next = 259;
                break;
              }
              var bl = {};
              bl.code = be;
              bf = "";
              bi.next = 254;
              return T("/lotteryhy/api/client/cj/send/pak", bl);
            case 254:
              bg = bi.sent;
              bg.success ? (console.log("领取成功"), bf = "领取成功") : (console.log(bg.error_message), bf = bg.error_message);
              p += "用户：".concat(u, " 奖品：").concat(bd.prize_content, " 领取结果：").concat(bf, "\n");
              bi.next = 260;
              break;
            case 259:
              p += "用户：".concat(u, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(be, "\n");
            case 260:
              bi.next = 245;
              break;
            case 262:
              bi.next = 267;
              break;
            case 264:
              bi.prev = 264;
              bi.t2 = bi.catch(243);
              bb.e(bi.t2);
            case 267:
              bi.prev = 267;
              bb.f();
              return bi.finish(267);
            case 270:
              bi.next = 12;
              break;
            case 272:
              bi.next = 277;
              break;
            case 274:
              bi.prev = 274;
              bi.t3 = bi.catch(10);
              ai.e(bi.t3);
            case 277:
              bi.prev = 277;
              ai.f();
              return bi.finish(277);
            case 280:
              if (!o) {
                bi.next = 283;
                break;
              }
              bi.next = 283;
              return ac(o);
            case 283:
              if (!p) {
                bi.next = 286;
                break;
              }
              bi.next = 286;
              return ac(p);
            case 286:
            case "end":
              return bi.stop();
          }
        }
      }, af, null, [[10, 274, 277, 280], [136, 155, 158, 161], [195, 215, 218, 221], [243, 264, 267, 270]]);
    }));
    return G.apply(this, arguments);
  }
  function H(ae) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a5(),
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  }
                };
                $.get(am, function () {
                  var ap = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            try {
                              as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(au));
                            } catch (az) {
                              $.logErr(az, at);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, ar);
                  }));
                  return function (as, at, au) {
                    return ap.apply(this, arguments);
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
    return I.apply(this, arguments);
  }
  function J(ae) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a3();
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: ah.body
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                            } catch (av) {
                              $.logErr(av, ar);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return at.stop();
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
              return ai.stop();
          }
        }
      }, ae);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a4(ag);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ai.time,
                  "X-SESSION-ID": q,
                  "X-REQUEST-ID": ai.uuid,
                  "X-SIGNATURE": ai.signature,
                  "X-TENANT-ID": r,
                  "X-ACCOUNT-ID": s,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(ag),
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
                            al(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            al();
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
              return aj.stop();
          }
        }
      }, af);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function af(ag, ah) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a4(ag);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": q,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": r,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ah
                };
                $.post(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
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
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://m.aihoge.com/api".concat(af),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
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
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae, af) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
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
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, ar);
                          case 14:
                            av.prev = 14;
                            al();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
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
      }, af);
    }));
    return S.apply(this, arguments);
  }
  function T(ae, af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: w,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(an, function () {
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
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, af);
    }));
    return U.apply(this, arguments);
  }
  function V(ae) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  }
                };
                $.get(al, function () {
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
                            aj(aq);
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
      }, af);
    }));
    return W.apply(this, arguments);
  }
  function X(ae, af) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  },
                  body: ah
                };
                $.post(an, function () {
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
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ae) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://axh5.aihoge.com/api".concat(af),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: "default",
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://axh5.aihoge.com/winningList?refresh_times=1641284795642",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
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
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ae, af) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function ae(af, ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  "Content-Type": "application/json"
                };
                var am = {
                  url: af,
                  headers: al,
                  body: JSON.stringify(ag)
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
      }, ae);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    var ae = new (m.loadJSEncrypt())();
    ae.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ae.encrypt(v);
    var af = a5(),
      ag = "client_id=".concat(t, "&password=").concat(v, "&phone_number=").concat(u),
      ah = "post%%/web/oauth/credential_auth?".concat(ag, "%%").concat(af, "%%");
    ag = "client_id=".concat(t, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = m.createCryptoJS();
    var ai = CryptoJS.HmacSHA256(ah, n),
      aj = CryptoJS.enc.Hex.stringify(ai),
      ak = {
        uuid: af,
        signature: aj,
        body: ag
      };
    return ak;
  }
  function a4(ae) {
    var af = a5(),
      ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = m.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(q, "&&").concat(af, "&&").concat(ag, "&&FR*r!isE5W&&").concat(r)).toString(),
      ai = {
        uuid: af,
        time: ag,
        signature: ah
      };
    return ai;
  }
  function a5() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0,
        ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a6(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a7() {
    var ae = "14.1.6",
      af = a5(),
      ag = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ah = "Xiaomi " + ag,
      ai = "Android",
      aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(t, ";").concat(ae, ";1.0;null;").concat(ag),
      ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";").concat("6.11.0"),
      al = {
        ua: aj,
        commonUa: ak,
        uuid: af
      };
    return al;
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function af() {
      var ah;
      return g().wrap(function ai(aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (ah = $.getdata("Utils_Code") || "", !ah || !Object.keys(ah).length) {
                aj.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ah);
              return aj.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aj.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ar) {
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
              return aj.stop();
          }
        }
      }, af);
    }));
    return a9.apply(this, arguments);
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function af() {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aq).notice);
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
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, af);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function af(ag) {
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
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return aa();
          case 2:
            ag.next = 4;
            return F();
          case 4:
          case "end":
            return ag.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
  }).finally(function () {
    $.done({});
  });
})();