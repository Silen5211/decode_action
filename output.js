//Mon Jul 22 2024 03:47:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "看余杭抽奖";
VALY = ["kyhck"];
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
const 蛋炒饭_0x35e8f8 = require("fs"),
  {
    v4: 蛋炒饭_0x519182
  } = require("uuid");
dcfhost = process.env.dcfhost;
dcfkey = process.env.dcfkey;
class 蛋炒饭_0x5b3df8 {
  constructor(_0x19ba6e) {
    this.phone = _0x19ba6e.split("#")[0];
    this.password = _0x19ba6e.split("#")[1];
    this.deskey = "hzydbsv5";
    this.did = _0x19ba6e.split("#")[2];
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x10dc0f = Buffer.from($.DecryptCrypto("0", "DES", "CBC", "Pkcs7", this.phone, this.deskey, this.deskey), "base64").toString("hex").toUpperCase(),
      _0x4f5158 = Buffer.from($.DecryptCrypto("0", "DES", "CBC", "Pkcs7", this.password, this.deskey, this.deskey), "base64").toString("hex").toUpperCase(),
      _0x25e0c8 = "{\"data\":{\"password\":\"" + _0x4f5158 + "\",\"loginName\":\"" + _0x10dc0f + "\"},\"service\":\"core\",\"userDevice\":{\"os\":\"11\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi\",\"device\":\"android\",\"clientVersion\":\"4.1.2\"},\"api\":\"v2/login/loginByPwd\",\"token\":\"\"} ",
      _0xb3fc56 = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x25e0c8);
    if (_0xb3fc56.code == 0) {
      this.token = _0xb3fc56.data;
      console.log("【" + this.f + "】 登陆成功");
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async ["readlist"]() {
    let _0x44dfb7 = $.time(13),
      _0x162719 = "{\"service\":\"media\",\"api\":\"spreadActivity/getAppUserSpreadActivity\",\"data\":{\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"ZSHEQA9R" + _0x44dfb7 + "\",\"token\":\"" + this.token + "\"}",
      _0x1da24c = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x162719);
    if (_0x1da24c.code == 0) {
      console.log("【" + this.f + "】当前贡献值：" + _0x1da24c.data.dayContributionNum);
      let _0x4f17f2 = _0x1da24c.data.lotteryNum;
      if (_0x1da24c.data.dayContributionNum < 30) {
        console.log("           今日贡献值不满，继续做任务......");
        for (let _0x2d8ac7 of _0x1da24c.data.spreadArticleVoList) {
          if (_0x2d8ac7.readStatus == 0) {
            let _0x95950e = "阅读",
              _0x4e6cfb = "column/readArticle";
            await this.dotask(_0x2d8ac7.articleId, _0x2d8ac7.articleTitle, _0x4e6cfb, _0x95950e);
          }
          if (_0x2d8ac7.likesStatus == 0) {
            let _0x465bba = "点赞",
              _0x5734f0 = "article/savePraiseLog";
            await this.dotask(_0x2d8ac7.articleId, _0x2d8ac7.articleTitle, _0x5734f0, _0x465bba);
          }
          if (_0x2d8ac7.shareStatus == 0) {
            let _0x578e71 = "分享",
              _0x1cc6c0 = "article/saveShareLog";
            await this.dotask(_0x2d8ac7.articleId, _0x2d8ac7.articleTitle, _0x1cc6c0, _0x578e71);
          }
          if (_0x2d8ac7.commentStatus == 0 && comment == 1) {
            let _0x42c393 = "评论",
              _0x516e30 = "article/saveComment";
            await this.dotask(_0x2d8ac7.articleId, _0x2d8ac7.articleTitle, _0x516e30, _0x42c393);
          }
        }
      }
      if (_0x1da24c.data.dayContributionNum >= 10) {
        _0x4f17f2 > 0 ? (console.log("           今日贡献值满足抽奖条件，去抽奖咯......"), await this.choujiang(_0x4f17f2, _0x1da24c.data.lotteryActivityUid)) : console.log("           今日贡献值已满，且今日抽奖次数已用完，结束运行！");
      }
    }
  }
  async ["dotask"](_0x5a00e9, _0x678b57, _0x1c3dbb, _0x47622a) {
    let _0x34e8cd = $.time(13);
    _0x47622a == "评论" ? this.body = "{\"service\":\"media\",\"api\":\"" + _0x1c3dbb + "\",\"data\":{\"articleId\":" + _0x5a00e9 + ",\"isSpreadActivity\": \"1\",\"content\":\"" + _0x678b57 + "\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"M4DN4CU9" + _0x34e8cd + "\",\"token\":\"" + this.token + "\"}" : this.body = "{\"service\":\"media\",\"api\":\"" + _0x1c3dbb + "\",\"data\":{\"articleId\":" + _0x5a00e9 + ",\"isSpreadActivity\": \"1\",\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"M4DN4CU9" + _0x34e8cd + "\",\"token\":\"" + this.token + "\"}";
    const _0xb1245b = {
      "User-Agent": "okhttp/5.0.0-alpha.2"
    };
    let _0x3c84a6 = await $.task("post", "https://app.eyh.cn/gateway/api", _0xb1245b, this.body);
    if (_0x3c84a6.code == 0 && _0x3c84a6.message == "success") {
      console.log("【" + this.f + "】完成文章《" + _0x678b57 + "》" + _0x47622a + "任务成功");
      await $.wait(5000, 10000);
    }
  }
  async ["choujiang"](_0x431998, _0x18331c) {
    for (let _0x30c761 = 0; _0x30c761 < _0x431998; _0x30c761++) {
      let _0x490cb1 = $.time(13),
        _0x41183c = "{\"service\":\"media\",\"api\":\"lottery/lotteryActivityAward\",\"data\":{\"uid\":\"" + _0x18331c + "\",\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"M71Y6MLC" + _0x490cb1 + "\",\"token\":\"" + this.token + "\"}",
        _0x597317 = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x41183c);
      if (_0x597317.code == 0) {
        console.log("【" + this.f + "】抽奖成功，获得" + _0x597317.data.name);
        await $.wait(5000, 8000);
      } else {
        console.log("【" + this.f + "】抽奖成功，获得了谢谢参与");
      }
    }
  }
}
$ = 蛋炒饭_0x595a30();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  if ($.cookie_list.length < 11) {
    await $.Multithreading("login");
    let _0x4a8f8c = $.cookie_list.filter(_0x3c8d80 => _0x3c8d80.logs == true);
    if (_0x4a8f8c.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else {
      await $.Multithreading("readlist");
    }
  } else {
    console.log("账号数量超过限制，请减少账号数量后重试！");
  }
  let _0x4f9729 = [];
  for (let _0x1750d1 of $.cookie_list) {
    if (_0x1750d1.message) {
      _0x4f9729.push(_0x1750d1.message);
    }
  }
  if (_0x4f9729.length > 0) {
    await $.SendMsg(_0x4f9729.join("\n"));
  }
})().catch(_0x138941 => {
  console.log(_0x138941);
}).finally(() => {});
function 蛋炒饭_0x595a30() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x9a7f6e, _0x3272d7, _0x7b0965) {
      let _0x374d89 = [];
      if (!_0x7b0965) {
        _0x7b0965 = 1;
      }
      while (_0x7b0965--) {
        for (let _0x2ed3b4 of $.cookie_list) {
          _0x374d89.push(_0x2ed3b4[_0x9a7f6e](_0x3272d7));
        }
      }
      await Promise.allSettled(_0x374d89);
    }
    ["ExamineCookie"]() {
      let _0x5431da = process.env[VALY] || CK,
        _0x26f4b7 = 0;
      if (_0x5431da) {
        for (let _0x4bdadb of _0x5431da.split("\n").filter(_0x1f1a72 => !!_0x1f1a72)) {
          $.cookie_list.push(new 蛋炒饭_0x5b3df8(_0x4bdadb));
        }
        _0x26f4b7 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x26f4b7 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x140d5e, _0x48e49d, _0x3bf007, _0x53484d, _0x5bb4e5) {
      _0x140d5e == "delete" ? _0x140d5e = _0x140d5e.toUpperCase() : _0x140d5e = _0x140d5e;
      if (_0x140d5e == "post") {
        delete _0x3bf007["content-type"];
        delete _0x3bf007["Content-type"];
        delete _0x3bf007["content-Type"];
        if ($.safeGet(_0x53484d)) {
          _0x3bf007["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x3bf007["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x53484d && (_0x3bf007["Content-Length"] = $.lengthInUtf8Bytes(_0x53484d));
      }
      if (_0x140d5e == "get") {
        delete _0x3bf007["content-type"];
        delete _0x3bf007["Content-type"];
        delete _0x3bf007["content-Type"];
        delete _0x3bf007["Content-Length"];
      }
      _0x3bf007.Host = _0x48e49d.replace("//", "/").split("/")[1];
      return new Promise(async _0x5982d0 => {
        if (_0x140d5e.indexOf("T") < 0) {
          var _0x3b3474 = {
            url: _0x48e49d,
            headers: _0x3bf007,
            body: _0x53484d,
            proxy: "http://" + _0x5bb4e5
          };
        } else {
          var _0x3b3474 = {
            url: _0x48e49d,
            headers: _0x3bf007,
            form: JSON.parse(_0x53484d),
            proxy: "http://" + _0x5bb4e5
          };
        }
        !_0x5bb4e5 && delete _0x3b3474.proxy;
        this.request[_0x140d5e.toLowerCase()](_0x3b3474, (_0x295feb, _0xd74622, _0x3d71c3) => {
          try {
            if (_0x3d71c3) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x3b3474);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x3d71c3)) {
                  console.log(JSON.parse(_0x3d71c3));
                } else {
                  console.log(_0x3d71c3);
                }
              }
            }
          } catch (_0x183f14) {
            console.log(_0x183f14, _0x48e49d + "\n" + _0x3bf007);
          } finally {
            let _0x12b350 = "";
            if (!_0x295feb) {
              if ($.safeGet(_0x3d71c3)) {
                _0x12b350 = JSON.parse(_0x3d71c3);
              } else {
                _0x3d71c3.indexOf("/") != -1 && _0x3d71c3.indexOf("+") != -1 ? _0x12b350 = _0x3d71c3 : _0x12b350 = _0x3d71c3;
              }
            } else {
              _0x12b350 = _0x48e49d + "   API请求失败，请检查网络重试\n" + _0x295feb;
            }
            return _0x5982d0(_0x12b350);
          }
        });
      });
    }
    async ["httpRequest"](_0x2ac490) {
      delete _0x2ac490.fn;
      var _0xadd80 = require("request");
      return new Promise(_0x3b1642 => {
        _0xadd80(_0x2ac490, function (_0x221153, _0x5b5ba2) {
          if (_0x221153) {
            throw new Error(_0x221153);
          }
          let _0x1a1fda = _0x5b5ba2.body;
          _0x3b1642(_0x1a1fda);
        });
      });
    }
    async ["readUUID"]() {
      const _0x28afaf = "uuid.txt";
      await $.generateUUID(_0x28afaf);
      try {
        const _0x1ae523 = 蛋炒饭_0x35e8f8.readFileSync(_0x28afaf, "utf8"),
          _0x40f8e0 = _0x1ae523.trim();
        return _0x40f8e0;
      } catch (_0x3ac6d1) {
        return null;
      }
    }
    ["generateUUID"](_0x4bd97d) {
      if (蛋炒饭_0x35e8f8.existsSync(_0x4bd97d)) {
        return;
      }
      const _0x45d6b8 = 蛋炒饭_0x519182();
      蛋炒饭_0x35e8f8.writeFile(_0x4bd97d, _0x45d6b8, "utf8", _0x26bc52 => {
        if (_0x26bc52) {
          console.error("写入文件出错: " + _0x26bc52.message);
          return;
        }
      });
    }
    async ["getkami"]() {
      let _0x6f8329 = await $.readUUID(),
        _0x8a4453 = await $.task("get", "http://" + dcfhost + ":5705/query?dcf=" + dcfkey + "&MA=" + _0x6f8329, {});
      return _0x8a4453;
    }
    async ["upload"]() {}
    ["getCurrentIP"]() {
      const _0x153168 = require("https");
      return new Promise((_0xb0c2fe, _0x3c0bce) => {
        _0x153168.get("https://api.ipify.org?format=json", _0x257650 => {
          let _0x2ea899 = "";
          _0x257650.on("data", _0x387c32 => {
            _0x2ea899 += _0x387c32;
          });
          _0x257650.on("end", () => {
            try {
              const _0x5d35e3 = JSON.parse(_0x2ea899);
              _0xb0c2fe(_0x5d35e3.ip);
            } catch (_0x548ef1) {
              _0x3c0bce(_0x548ef1);
            }
          });
        }).on("error", _0x3ab12c => {
          _0x3c0bce(_0x3ab12c);
        });
      });
    }
    async ["SendMsg"](_0x5432dc) {
      if (!_0x5432dc) {
        return;
      }
      if (Notify == 1) {
        var _0xca8c10 = require("./sendNotify");
        await _0xca8c10.sendNotify(NAME, _0x5432dc);
      }
    }
    ["lengthInUtf8Bytes"](_0x22f5fe) {
      let _0x1c0a62 = encodeURIComponent(_0x22f5fe).match(/%[89ABab]/g);
      return _0x22f5fe.length + (_0x1c0a62 ? _0x1c0a62.length : 0);
    }
    ["randomArr"](_0x11979e) {
      return _0x11979e[parseInt(Math.random() * _0x11979e.length, 10)];
    }
    ["wait"](_0xa2c2e2) {
      return new Promise(_0x40b194 => setTimeout(_0x40b194, _0xa2c2e2));
    }
    ["time"](_0x3fd198) {
      return _0x3fd198 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"]() {
      const _0x40f52a = new Date(),
        _0x2cd185 = _0x40f52a.getFullYear(),
        _0x1fdf30 = String(_0x40f52a.getMonth() + 1).padStart(2, "0"),
        _0x36bad7 = String(_0x40f52a.getDate()).padStart(2, "0"),
        _0x46c0d4 = _0x2cd185 + "-" + _0x1fdf30 + "-" + _0x36bad7;
      return _0x46c0d4;
    }
    ["safeGet"](_0x1a6453) {
      try {
        if (typeof JSON.parse(_0x1a6453) == "object") {
          return true;
        }
      } catch (_0x1e204c) {
        return false;
      }
    }
    ["SJS"](_0xdedbde, _0x548953) {
      const _0x4f2503 = {
        NYaqw: function (_0x223517, _0x4ce833) {
          return _0x223517 + _0x4ce833;
        },
        sEMYe: function (_0x1b210d, _0xaeff0c) {
          return _0x1b210d * _0xaeff0c;
        },
        rCrCP: function (_0x555a4a, _0x5eb919) {
          return _0x555a4a - _0x5eb919;
        }
      };
      if (_0x548953 == 0) {
        let _0x372077 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x2a8b1b = _0x372077.length,
          _0x26877f = "";
        for (let _0x3bbc5d = 0; _0x3bbc5d < _0xdedbde; _0x3bbc5d++) {
          _0x26877f += _0x372077.charAt(Math.floor(Math.random() * _0x2a8b1b));
        }
        return _0x26877f;
      } else {
        if (_0x548953 == 1) {
          let _0x371b61 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x190812 = _0x371b61.length,
            _0x13cda7 = "";
          for (let _0x8ebb64 = 0; _0x8ebb64 < _0xdedbde; _0x8ebb64++) {
            _0x13cda7 += _0x371b61.charAt(Math.floor(Math.random() * _0x190812));
          }
          return _0x13cda7;
        } else {
          let _0x15d51f = "0123456789",
            _0x52d92c = _0x15d51f.length,
            _0x33490d = "";
          for (let _0x1396c2 = 0; _0x1396c2 < _0xdedbde; _0x1396c2++) {
            _0x33490d += _0x15d51f.charAt(Math.floor(Math.random() * _0x52d92c));
          }
          return _0x33490d;
        }
      }
    }
    ["encodeUnicode"](_0x3131cb) {
      var _0x325e0b = [];
      for (var _0x154453 = 0; _0x154453 < _0x3131cb.length; _0x154453++) {
        _0x325e0b[_0x154453] = ("00" + _0x3131cb.charCodeAt(_0x154453).toString(16)).slice(-4);
      }
      return "\\u" + _0x325e0b.join("\\u");
    }
    ["base64ToHex"](_0xb35414) {
      const _0x8e4418 = atob(_0xb35414),
        _0x22c732 = new Uint8Array(_0x8e4418.length);
      for (let _0x11c8d6 = 0; _0x11c8d6 < _0x8e4418.length; _0x11c8d6++) {
        _0x22c732[_0x11c8d6] = _0x8e4418.charCodeAt(_0x11c8d6);
      }
      let _0x37a0a5 = "";
      for (let _0x429133 = 0; _0x429133 < _0x22c732.length; _0x429133++) {
        const _0x19fc29 = _0x22c732[_0x429133].toString(16).padStart(2, "0");
        _0x37a0a5 += _0x19fc29;
      }
      return _0x37a0a5;
    }
    ["decodeUnicode"](_0x11b616) {
      _0x11b616 = _0x11b616.replace(/\\u/g, "%u");
      return unescape(unescape(_0x11b616));
    }
    RT(_0x707e67, _0x1f24f6) {
      return Math.round(Math.random() * (_0x1f24f6 - _0x707e67) + _0x707e67);
    }
    ["arrNull"](_0x20ac3a) {
      var _0x4c137a = _0x20ac3a.filter(_0x1aaceb => {
        return _0x1aaceb && _0x1aaceb.trim();
      });
      return _0x4c137a;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x36e4e3 = $.nowtime();
      JSON.stringify(_0x36e4e3).indexOf(" ") >= 0 && (_0x36e4e3 = _0x36e4e3.replace(" ", "T"));
      return new Date(_0x36e4e3).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x5eebcd, _0x2938cb, _0x311865, _0x35067e) {
      if (_0x35067e == 0) {
        return JSON.stringify(_0x5eebcd.split(_0x2938cb).reduce((_0x3a7f38, _0x35e5ce) => {
          let _0x500baf = _0x35e5ce.split(_0x311865);
          _0x3a7f38[_0x500baf[0].trim()] = _0x500baf[1].trim();
          return _0x3a7f38;
        }, {}));
      } else {
        return _0x5eebcd.split(_0x2938cb).reduce((_0x40a374, _0x25a022) => {
          let _0x339dad = _0x25a022.split(_0x311865);
          _0x40a374[_0x339dad[0].trim()] = _0x339dad[1].trim();
          return _0x40a374;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x2615cd, _0x16a8cf) {
      if (_0x2615cd == 0) {
        return this.CryptoJS.MD5(_0x16a8cf).toString().toLowerCase();
      } else {
        if (_0x2615cd == 1) {
          return this.CryptoJS.MD5(_0x16a8cf).toString().toUpperCase();
        } else {
          if (_0x2615cd == 2) {
            return this.CryptoJS.MD5(_0x16a8cf).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x2615cd == 3) {
              return this.CryptoJS.MD5(_0x16a8cf).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x4c0186, _0x58889e, _0xd2a33c) {
      if (_0x4c0186 == 0) {
        return this.CryptoJS[_0x58889e](_0xd2a33c).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x58889e](_0xd2a33c).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x4519e8, _0x40c076, _0x5bf020, _0x198172) {
      return _0x4519e8 == 0 ? this.CryptoJS[_0x40c076](_0x5bf020, _0x198172).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x40c076](_0x5bf020, _0x198172).toString();
    }
    ["Base64"](_0x4a0312, _0x4e7d4a) {
      return _0x4a0312 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4e7d4a)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4e7d4a));
    }
    ["DecryptCrypto"](_0x269235, _0x391d90, _0x2e7cd3, _0x30d54f, _0x415885, _0x33ad03, _0x57c77a) {
      if (_0x269235 == 0) {
        const _0x2645ee = this.CryptoJS[_0x391d90].encrypt(this.CryptoJS.enc.Utf8.parse(_0x415885), this.CryptoJS.enc.Utf8.parse(_0x33ad03), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x57c77a),
          mode: this.CryptoJS.mode[_0x2e7cd3],
          padding: this.CryptoJS.pad[_0x30d54f]
        });
        return _0x2645ee.toString();
      } else {
        const _0x1397e5 = this.CryptoJS[_0x391d90].decrypt(_0x415885, this.CryptoJS.enc.Utf8.parse(_0x33ad03), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x57c77a),
          mode: this.CryptoJS.mode[_0x2e7cd3],
          padding: this.CryptoJS.pad[_0x30d54f]
        });
        return _0x1397e5.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x5d835d, _0x40afa9) {
      const _0x40ef87 = require("node-rsa");
      let _0x495c6e = new _0x40ef87("-----BEGIN PUBLIC KEY-----\n" + _0x40afa9 + "\n-----END PUBLIC KEY-----");
      _0x495c6e.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x495c6e.encrypt(_0x5d835d, "base64", "utf8");
    }
    ["getSHA1withRSA"](_0x47f994) {
      const _0x5de584 = rs.KEYUTIL.getKey(privateKeyString),
        _0x2ad825 = new rs.KJUR.crypto.Signature({
          alg: "SHA1withRSA"
        });
      _0x2ad825.init(_0x5de584);
      _0x2ad825.updateString(_0x47f994);
      const _0x3d6bfb = _0x2ad825.sign(),
        _0x3b931d = rs.hextob64u(_0x3d6bfb);
      return _0x3b931d;
    }
    ["hexToBase64"](_0x481937) {
      const _0x5559e7 = [];
      for (let _0x2cb280 = 0; _0x2cb280 < _0x481937.length; _0x2cb280 += 2) {
        _0x5559e7.push(parseInt(_0x481937.substr(_0x2cb280, 2), 16));
      }
      const _0x57c0a4 = btoa(String.fromCharCode(..._0x5559e7));
      return _0x57c0a4;
    }
    ["Sha1withRsa"](_0x4df42e) {
      const {
          KEYUTIL: _0x5e7812,
          KJUR: _0x57771a,
          b64utoutf8: _0x6d12e,
          utf8tob64: _0x42b697
        } = require("jsrsasign"),
        _0x27c72a = _0x5e7812.getKey(Key),
        _0x548c82 = new _0x57771a.crypto.Signature({
          alg: "SHA1withRSA"
        });
      _0x548c82.init(_0x27c72a);
      _0x548c82.updateString(_0x4df42e);
      const _0x319e3c = _0x548c82.sign();
      let _0x5bf5ca = $.hexToBase64(_0x319e3c);
      return _0x5bf5ca;
    }
  }();
}