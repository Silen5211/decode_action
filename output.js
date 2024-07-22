//Mon Jul 22 2024 02:55:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "红色火箭";
VALY = ["hshjck"];
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
class 蛋炒饭_0x3c87b9 {
  constructor(_0x8a7f2a) {
    this.token = _0x8a7f2a.split("#")[0];
    this.openid = _0x8a7f2a.split("#")[1];
    this._ = ++usid;
    _0x8a7f2a.split("#")[2] ? this.f = "小主 [" + this._ + "] " + _0x8a7f2a.split("#")[2] : this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x3b8edb = $.time(13),
      _0x52b97e = {
        ticket: this.token
      },
      _0x16df82 = await $.task("get", "https://index.amcfortune.com/fundex-activity/point/account/getTotalPoint?key=" + _0x3b8edb, _0x52b97e);
    _0x16df82.code == 200 ? (console.log("【" + this.f + "】登陆成功,当前总积分:" + _0x16df82.data.totalPoint), this.point = _0x16df82.data.totalPoint, this.logs = true) : this.logs = false;
  }
  async ["signinlist"]() {
    let _0x23c654 = $.time(13),
      _0x110b6a = {
        ticket: this.token
      },
      _0x3cccc3 = await $.task("get", "https://index.amcfortune.com/fundex-activity/point/sign/getRecordList?key=" + _0x23c654, _0x110b6a);
    if (_0x3cccc3.code == 200) {
      let _0x107275 = _0x3cccc3.data.today;
      for (let _0x3ecce5 of _0x3cccc3.data.signRecordList) {
        if (_0x107275 == _0x3ecce5.signDate && _0x3ecce5.signIn == false) {
          await this.signin();
        } else {
          if (_0x107275 == _0x3ecce5.signDate && _0x3ecce5.signIn == true) {
            console.log("【" + this.f + "】今天已经签到，不再执行签到任务");
          }
        }
      }
    }
  }
  async ["signin"]() {
    let _0x41d729 = $.time(13),
      _0x2f5d14 = (1000000 * Math.random()).toFixed(0) + (1000000 * Math.random()).toFixed(0),
      _0x1f5278 = btoa(unescape(encodeURIComponent($.MD5Encrypt(0, "appSecret=watchword123&nonce=" + _0x2f5d14 + "&timestamp=" + _0x41d729)))),
      _0x292f85 = {
        ver: "1.7.50",
        ticket: this.token,
        pla: "rr_Android",
        signature: _0x1f5278,
        pro: "RedRocket",
        nonce: _0x2f5d14,
        mini_program: "wechat",
        timestamp: _0x41d729
      },
      _0x39c068 = "{}",
      _0x443b90 = await $.task("post", "https://index.amcfortune.com/fundex-activity/point/sign/userSignIn", _0x292f85, _0x39c068);
    _0x443b90.code == 200 && console.log("【" + this.f + "】签到成功,获得" + _0x443b90.data.point + "积分,已连续签到" + _0x443b90.data.continuousDays + "天");
  }
  async ["exchangelist"]() {
    let _0x5f16b0 = $.time(13),
      _0x5736ec = {
        ver: "1.7.50",
        ticket: this.token,
        pla: "rr_Android",
        pro: "RedRocket",
        mini_program: "wechat"
      },
      _0x2faf45 = await $.task("get", "https://index.amcfortune.com/fundex-activity/point/exchange/queryGiftList?page=1&size=100&key=" + _0x5f16b0, _0x5736ec);
    if (_0x2faf45.code == 200) {
      for (let _0x36a0e0 of _0x2faf45.data) {
        let _0x3d35ea = _0x36a0e0.giftId;
        await this.exchange(_0x3d35ea);
      }
    }
  }
  async ["exchange"](_0xfa9512) {
    let _0x7b605 = $.time(13),
      _0x53d674 = (1000000 * Math.random()).toFixed(0) + (1000000 * Math.random()).toFixed(0),
      _0x565b82 = btoa(unescape(encodeURIComponent($.MD5Encrypt(0, "appSecret=watchword123&giftId=" + _0xfa9512 + "&nonce=" + _0x53d674 + "&openId=" + this.openid + "&requestId=&submitCode=&timestamp=" + _0x7b605)))),
      _0x7b52b2 = {
        ver: "1.7.50",
        ticket: this.token,
        pla: "rr_Android",
        signature: _0x565b82,
        pro: "RedRocket",
        nonce: _0x53d674,
        mini_program: "wechat",
        timestamp: _0x7b605
      },
      _0x42ba9c = "{\"openId\":\"" + this.openid + "\",\"giftId\":" + _0xfa9512 + ",\"requestId\":\"\",\"submitCode\":\"\"}",
      _0xfacd18 = await $.task("post", "https://index.amcfortune.com/fundex-activity/point/exchange/doExchange", _0x7b52b2, _0x42ba9c);
    _0xfacd18.code == 200 && (console.log("【" + this.f + "】积分兑换红包成功"), this.message += "【" + this.f + "】积分兑换红包成功,需要手动提现！！");
  }
}
$ = 蛋炒饭_0x4589ba();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  if ($.cookie_list.length < 11) {
    await $.Multithreading("login");
    let _0x4cd992 = $.cookie_list.filter(_0x4b0d93 => _0x4b0d93.logs == true);
    if (_0x4cd992.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else {
      await $.Multithreading("signinlist");
      await $.Multithreading("exchangelist");
    }
  }
  let _0x1f2801 = [];
  for (let _0x372dad of $.cookie_list) {
    if (_0x372dad.message) {
      _0x1f2801.push(_0x372dad.message);
    }
  }
  if (_0x1f2801.length > 0) {
    await $.SendMsg(_0x1f2801.join("\n"));
  }
})().catch(_0x2fd15c => {
  console.log(_0x2fd15c);
}).finally(() => {});
function 蛋炒饭_0x4589ba() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x2a1529, _0x21d92b, _0x44e9b4) {
      let _0x113ce9 = [];
      !_0x44e9b4 && (_0x44e9b4 = 1);
      while (_0x44e9b4--) {
        for (let _0x241371 of $.cookie_list) {
          _0x113ce9.push(_0x241371[_0x2a1529](_0x21d92b));
        }
      }
      await Promise.allSettled(_0x113ce9);
    }
    ["ExamineCookie"]() {
      let _0x38b994 = process.env[VALY] || CK,
        _0x1b03f6 = 0;
      if (_0x38b994) {
        for (let _0x165166 of _0x38b994.split("\n").filter(_0x42c2ad => !!_0x42c2ad)) {
          $.cookie_list.push(new 蛋炒饭_0x3c87b9(_0x165166));
        }
        _0x1b03f6 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x1b03f6 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x25799f, _0x191eb8, _0x3d2036, _0x36e096, _0x7491eb) {
      _0x25799f == "delete" ? _0x25799f = _0x25799f.toUpperCase() : _0x25799f = _0x25799f;
      _0x25799f == "post" && (delete _0x3d2036["content-type"], delete _0x3d2036["Content-type"], delete _0x3d2036["content-Type"], $.safeGet(_0x36e096) ? _0x3d2036["Content-Type"] = "application/json;charset=UTF-8" : _0x3d2036["Content-Type"] = "application/x-www-form-urlencoded", _0x36e096 && (_0x3d2036["Content-Length"] = $.lengthInUtf8Bytes(_0x36e096)));
      _0x25799f == "get" && (delete _0x3d2036["content-type"], delete _0x3d2036["Content-type"], delete _0x3d2036["content-Type"], delete _0x3d2036["Content-Length"]);
      _0x3d2036.Host = _0x191eb8.replace("//", "/").split("/")[1];
      return new Promise(async _0xb20018 => {
        if (_0x25799f.indexOf("T") < 0) {
          var _0x5d9472 = {
            url: _0x191eb8,
            headers: _0x3d2036,
            body: _0x36e096,
            proxy: "http://" + _0x7491eb
          };
        } else {
          var _0x5d9472 = {
            url: _0x191eb8,
            headers: _0x3d2036,
            form: JSON.parse(_0x36e096),
            proxy: "http://" + _0x7491eb
          };
        }
        !_0x7491eb && delete _0x5d9472.proxy;
        this.request[_0x25799f.toLowerCase()](_0x5d9472, (_0x57ad96, _0x599e6e, _0x338a01) => {
          try {
            if (_0x338a01) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x5d9472);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x338a01)) {
                  console.log(JSON.parse(_0x338a01));
                } else {
                  console.log(_0x338a01);
                }
              }
            }
          } catch (_0x53aa1f) {
            console.log(_0x53aa1f, _0x191eb8 + "\n" + _0x3d2036);
          } finally {
            let _0x237524 = "";
            if (!_0x57ad96) {
              if ($.safeGet(_0x338a01)) {
                _0x237524 = JSON.parse(_0x338a01);
              } else {
                if (_0x338a01.indexOf("/") != -1 && _0x338a01.indexOf("+") != -1) {
                  _0x237524 = _0x338a01;
                } else {
                  _0x237524 = _0x338a01;
                }
              }
            } else {
              _0x237524 = _0x191eb8 + "   API请求失败，请检查网络重试\n" + _0x57ad96;
            }
            return _0xb20018(_0x237524);
          }
        });
      });
    }
    async ["SendMsg"](_0x3ab4fd) {
      if (!_0x3ab4fd) {
        return;
      }
      if (Notify == 1) {
        var _0x434662 = require("./sendNotify");
        await _0x434662.sendNotify(NAME, _0x3ab4fd);
      }
    }
    ["SJS"](_0x46dc8b, _0x55d795) {
      if (_0x55d795 == 0) {
        let _0x500d09 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0xf97810 = _0x500d09.length,
          _0x5a4702 = "";
        for (let _0x1ba77a = 0; _0x1ba77a < _0x46dc8b; _0x1ba77a++) {
          _0x5a4702 += _0x500d09.charAt(Math.floor(Math.random() * _0xf97810));
        }
        return _0x5a4702;
      } else {
        if (_0x55d795 == 1) {
          let _0x2e83b9 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x429226 = _0x2e83b9.length,
            _0x22a154 = "";
          for (let _0x1a3768 = 0; _0x1a3768 < _0x46dc8b; _0x1a3768++) {
            _0x22a154 += _0x2e83b9.charAt(Math.floor(Math.random() * _0x429226));
          }
          return _0x22a154;
        } else {
          let _0x4a4202 = "0123456789",
            _0x5f1924 = _0x4a4202.length,
            _0x2b920c = "";
          for (let _0x2f40b3 = 0; _0x2f40b3 < _0x46dc8b; _0x2f40b3++) {
            _0x2b920c += _0x4a4202.charAt(Math.floor(Math.random() * _0x5f1924));
          }
          return _0x2b920c;
        }
      }
    }
    ["lengthInUtf8Bytes"](_0x5ec49b) {
      let _0x33cefe = encodeURIComponent(_0x5ec49b).match(/%[89ABab]/g);
      return _0x5ec49b.length + (_0x33cefe ? _0x33cefe.length : 0);
    }
    ["wait"](_0x231d37) {
      return new Promise(_0x4f422d => setTimeout(_0x4f422d, _0x231d37));
    }
    ["time"](_0x16176c) {
      if (_0x16176c == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["safeGet"](_0x2c38f1) {
      try {
        if (typeof JSON.parse(_0x2c38f1) == "object") {
          return true;
        }
      } catch (_0x3099dc) {
        return false;
      }
    }
    RT(_0x2c923b, _0x559429) {
      return Math.round(Math.random() * (_0x559429 - _0x2c923b) + _0x2c923b);
    }
    ["MD5Encrypt"](_0x23e457, _0x760aa4) {
      if (_0x23e457 == 0) {
        return this.CryptoJS.MD5(_0x760aa4).toString().toLowerCase();
      } else {
        if (_0x23e457 == 1) {
          return this.CryptoJS.MD5(_0x760aa4).toString().toUpperCase();
        } else {
          if (_0x23e457 == 2) {
            return this.CryptoJS.MD5(_0x760aa4).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x23e457 == 3) {
              return this.CryptoJS.MD5(_0x760aa4).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["RSA"](_0x3ef538, _0x198ffe) {
      const _0x51b611 = require("node-rsa");
      let _0x34b778 = new _0x51b611("-----BEGIN PUBLIC KEY-----\n" + _0x198ffe + "\n-----END PUBLIC KEY-----");
      _0x34b778.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x34b778.encrypt(_0x3ef538, "base64", "utf8");
    }
  }();
}