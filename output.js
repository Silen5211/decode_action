//Mon Jul 22 2024 04:05:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
HD1 = "";
NAME = "今日越城";
VALY = ["jrycck"];
CK = "";
LOGS = 0;
usid = 0;
var 蛋炒饭_0x1585fd = require("jsrsasign");
const 蛋炒饭_0x589153 = require("axios").default,
  蛋炒饭_0x5f2c31 = require("xpath");
let 蛋炒饭_0xd82055 = require("request");
const 蛋炒饭_0x22fe4e = {
  errorHandler: {}
};
const 蛋炒饭_0x50d19b = require("xmldom").DOMParser,
  蛋炒饭_0x1b4972 = new 蛋炒饭_0x50d19b(蛋炒饭_0x22fe4e),
  {
    JSDOM: 蛋炒饭_0x19c95b
  } = require("jsdom");
const 蛋炒饭_0x10ab6e = {
  jar: true
};
蛋炒饭_0xd82055 = 蛋炒饭_0xd82055.defaults(蛋炒饭_0x10ab6e);
window = {};
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
class 蛋炒饭_0x3dec60 {
  constructor(_0x5c348e) {
    this.phone = _0x5c348e.split("#")[0];
    this.pwd = $.RSA(_0x5c348e.split("#")[1], "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    this.wdatas = _0x5c348e.split("#")[2];
    this.pay = _0x5c348e.split("#")[3];
    this.realname = _0x5c348e.split("#")[4];
    this.message = "";
    this.did = "00000000-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-0000-0000" + $.SJS(8, 1);
    this.logs = true;
  }
  async ["login"]() {
    let _0x505351 = encodeURIComponent(this.pwd),
      _0x55c71c = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x1844bd = "post%%/web/oauth/credential_auth?client_id=48&password=" + this.pwd + "&phone_number=" + this.phone + "%%" + _0x55c71c + "%%",
      _0xcc0d92 = $.signature(_0x1844bd),
      _0x1507a6 = {
        "X-REQUEST-ID": _0x55c71c,
        "X-SIGNATURE": _0xcc0d92
      },
      _0x21475d = "client_id=48&password=" + _0x505351 + "&phone_number=" + this.phone,
      _0x2c6685 = await $.task("post", "https://passport.tmuyun.com/web/oauth/credential_auth", _0x1507a6, _0x21475d);
    if (_0x2c6685.code == 0) {
      this.logs = true;
      let _0x3b5a62 = _0x2c6685.data.authorization_code.code;
      await this.logins(_0x3b5a62);
    } else {
      this.logs = false;
    }
  }
  async ["logins"](_0x202ece) {
    let _0x50370f = $.time(13),
      _0x5019f9 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x56a60e = "/api/zbtxz/login&&65dc37de54a54e0490d8520b&&" + _0x5019f9 + "&&" + _0x50370f + "&&FR*r!isE5W&&31",
      _0x19dc8f = $.SHA_Encrypt(1, "SHA256", _0x56a60e),
      _0x4373e2 = {
        "X-SESSION-ID": "65dc37de54a54e0490d8520b",
        "X-TENANT-ID": "31",
        "X-REQUEST-ID": _0x5019f9,
        "X-SIGNATURE": _0x19dc8f,
        "X-TIMESTAMP": _0x50370f,
        "User-Agent": "zjolapp; 6.0.0; " + this.did + ";"
      },
      _0x3ee30b = "check_token=&code=" + _0x202ece + "&token=&type=-1&union_id=",
      _0x19ad5d = await $.task("post", "https://vapp.tmuyun.com/api/zbtxz/login", _0x4373e2, _0x3ee30b);
    if (_0x19ad5d.code == 0) {
      this.name = _0x19ad5d.data.account.nick_name;
      this.sessionid = _0x19ad5d.data.session.id;
      this.uid = _0x19ad5d.data.account.id;
      this.authuid = _0x19ad5d.data.account.auth_uid;
      console.log("【" + this.name + "】登陆成功，现有总积分" + _0x19ad5d.data.account.total_score);
    }
  }
  async ["loginH5"]() {
    let _0x2abf57 = $.time(13),
      _0x3f5f4c = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x58d0e4 = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&debug=0&&device_id=" + this.did + "&&nonce_str=" + _0x3f5f4c + "&&source_type=app&&timestamp=" + _0x2abf57 + "&&token=" + this.sessionid + "&&userId=&&35c782a2",
      _0x96487c = $.SHA_Encrypt(1, "SHA256", _0x58d0e4),
      _0x23df43 = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x96487c,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x2abf57,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x3f5f4c
      },
      _0x9507b7 = "{\"debug\":0,\"userId\":\"\"}",
      _0x1bb5d8 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/member/login", _0x23df43, _0x9507b7);
    _0x1bb5d8.code == 0 && (this.key = _0x1bb5d8.data.key, this.token = _0x1bb5d8.data.token);
  }
  async ["readlist"]() {
    let _0x22a657 = $.time(13),
      _0x16e6a1 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x313d9c = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + HD1 + "&&nonce_str=" + _0x16e6a1 + "&&source_type=app&&timestamp=" + _0x22a657 + "&&token=" + this.sessionid + "&&35c782a2",
      _0x48acc4 = $.SHA_Encrypt(1, "SHA256", _0x313d9c),
      _0xa55803 = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x48acc4,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x22a657,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x16e6a1
      },
      _0x2b09d0 = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/detail?id=" + HD1, _0xa55803);
    if (_0x2b09d0.code == 0) {
      this.lotteryid = _0x2b09d0.data.lottery.lottery_id;
      for (let _0x317d29 of _0x2b09d0.data.levels) {
        _0x317d29.status == 1 && (await this.readlist2(_0x317d29.id, _0x317d29.name));
      }
    }
  }
  async ["readlist2"](_0x425d7d, _0x3a591f) {
    let _0x4a55a1 = $.time(13),
      _0x2e832f = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x1c6b72 = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + _0x425d7d + "&&nonce_str=" + _0x2e832f + "&&source_type=app&&timestamp=" + _0x4a55a1 + "&&token=" + this.sessionid + "&&" + this.key,
      _0x27b8e0 = $.SHA_Encrypt(1, "SHA256", _0x1c6b72),
      _0x243dc2 = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x27b8e0,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x4a55a1,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x2e832f,
        authorization: "Bearer " + this.token
      },
      _0x260b9a = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/level?id=" + _0x425d7d, _0x243dc2);
    if (_0x260b9a.code == 0) {
      const _0x4316a9 = _0x260b9a.data.completedTasks.map(_0x5aacf8 => _0x5aacf8.task_id),
        _0x25694a = _0x260b9a.data.tasks.map(_0x526d6c => _0x526d6c.id),
        _0x256598 = _0x25694a.filter(_0xf25af6 => !_0x4316a9.includes(_0xf25af6));
      if (_0x256598.length >= 1) {
        const _0x32fc35 = _0x256598.map(_0x4f49af => {
          const _0x3d7aed = _0x260b9a.data.tasks.find(_0x5348e0 => _0x5348e0.id === _0x4f49af);
          const _0x533222 = {
            id: _0x4f49af,
            name: _0x3d7aed ? _0x3d7aed.name : "N/A"
          };
          return _0x533222;
        });
        for (let _0x378874 of _0x32fc35) {
          await this.dotask(_0x378874.id.aa.name);
        }
      } else {
        console.log("【" + this.name + "】【" + _0x3a591f + "任务】已经全部完成，还是等会再来吧");
      }
    }
  }
  async ["dotask"](_0x38b161, _0x3980c3) {
    let _0x285de0 = $.time(13),
      _0x4836ec = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x49ed1e = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + _0x38b161 + "&&nonce_str=" + _0x4836ec + "&&source_type=app&&timestamp=" + _0x285de0 + "&&token=" + this.sessionid + "&&" + this.key,
      _0x1e50f8 = $.SHA_Encrypt(1, "SHA256", _0x49ed1e),
      _0x5697ed = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x1e50f8,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x285de0,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x4836ec,
        authorization: "Bearer " + this.token
      },
      _0x2ab572 = "{\"id\":" + _0x38b161 + "}",
      _0x5005dd = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/study/task/complete", _0x5697ed, _0x2ab572);
    _0x5005dd.code == 0 && (console.log("【" + this.name + "】完成《" + _0x3980c3 + "》阅读成功，等待完成下一篇......"), await $.wait(10000, 20000));
  }
  async ["cxlottery"]() {
    let _0x2db618 = $.time(13),
      _0x466d22 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x16c743 = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + this.lotteryid + "&&module=study&&nonce_str=" + _0x466d22 + "&&source_type=app&&timestamp=" + _0x2db618 + "&&token=" + this.sessionid + "&&" + this.key,
      _0x451355 = $.SHA_Encrypt(1, "SHA256", _0x16c743),
      _0xe914c = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x451355,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x2db618,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x466d22,
        authorization: "Bearer " + this.token
      },
      _0x232088 = "{\"id\":" + this.lotteryid + ",\"module\":\"study\"}",
      _0x3b2a5a = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery_count", _0xe914c, _0x232088);
    if (_0x3b2a5a.code == 0) {
      let _0x2d5f67 = _0x3b2a5a.data.count;
      _0x2d5f67 >= 1 ? (console.log("【" + this.name + "】恭喜有" + _0x2d5f67 + "次抽奖机会，马上开始抽奖......"), await this.lottery()) : console.log("【" + this.name + "】暂无抽奖机会，完成任务后再来试试吧！");
    }
  }
  async ["cjhuakuai"]() {
    let _0x1b5928 = $.time(13),
      _0x1f0c84 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x22d1a5 = "activity_id=" + this.lotteryid + "&&app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&module=bigWheel&&nonce_str=" + _0x1f0c84 + "&&source_type=app&&timestamp=" + _0x1b5928 + "&&token=" + this.sessionid + "&&35c782a2",
      _0x850112 = $.SHA_Encrypt(1, "SHA256", _0x22d1a5),
      _0x31d518 = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x850112,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x1b5928,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x1f0c84
      },
      _0x490cd4 = "{\"activity_id\":" + this.lotteryid + ",\"module\":\"bigWheel\"}",
      _0x2d2313 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/get", _0x31d518, _0x490cd4),
      _0x490f18 = _0x2d2313.data.jigsawImageUrl,
      _0x52ec0c = _0x2d2313.data.originalImageUrl,
      _0x3753ea = _0x2d2313.data.token,
      _0x77a2df = _0x2d2313.data.secretKey;
    await this.calculateBase64Values(_0x490f18, _0x52ec0c, _0x3753ea, _0x77a2df);
  }
  async ["encodeImageToBase64"](_0x39a9c3) {
    try {
      const _0x347b27 = await 蛋炒饭_0x589153.get(_0x39a9c3, {
          responseType: "arraybuffer"
        }),
        _0x5b903b = Buffer.from(_0x347b27.data, "binary").toString("base64");
      return _0x5b903b;
    } catch (_0x37c204) {
      return console.error(_0x37c204), null;
    }
  }
  async ["calculateBase64Values"](_0x4c9414, _0x5cca02, _0x10c95f, _0x1f82b5) {
    let _0x287829 = await this.encodeImageToBase64(_0x4c9414),
      _0x57ddcd = await this.encodeImageToBase64(_0x5cca02);
    await this.hkinfo(_0x287829, _0x57ddcd, _0x10c95f, _0x1f82b5);
  }
  async ["hkinfo"](_0x3d6dbf, _0x10feed, _0x37208e, _0x364afb) {
    const _0x109236 = {
      target_img: _0x3d6dbf,
      bg_img: _0x10feed
    };
    const _0xb23f11 = JSON.stringify(_0x109236),
      _0x1fad5e = Buffer.from(_0xb23f11),
      _0x436364 = _0x1fad5e.toString("base64");
    let _0x584dca = _0x436364,
      _0x14b257 = await $.task("post", "http://8.141.174.247:9898/slide/match/b64/json", {}, _0x584dca),
      _0xdb4635 = _0x14b257.result.target,
      _0x3d5dae = _0xdb4635[0],
      _0x23d585 = JSON.stringify({
        x: _0x3d5dae,
        y: 5
      }),
      _0x226686 = $.DecryptCrypto("0", "AES", "ECB", "Pkcs7", _0x23d585, _0x364afb, "");
    await $.wait(2000);
    await this.check(_0x226686, _0x37208e);
  }
  async ["check"](_0x12faa7, _0x198d7e) {
    let _0x135725 = $.time(13),
      _0x4488ee = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x208c68 = "activity_id=" + this.lotteryid + "&&app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&cap_token=" + _0x198d7e + "&&device_id=" + this.did + "&&module=bigWheel&&nonce_str=" + _0x4488ee + "&&point=" + _0x12faa7 + "&&source_type=app&&timestamp=" + _0x135725 + "&&token=" + this.sessionid + "&&" + this.key,
      _0x1cbdf3 = $.SHA_Encrypt(1, "SHA256", _0x208c68),
      _0x461c14 = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x1cbdf3,
        authorization: "Bearer " + this.token,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x135725,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x4488ee
      },
      _0x308bbc = "{\"activity_id\":" + this.lotteryid + ",\"module\":\"bigWheel\",\"cap_token\":\"" + _0x198d7e + "\",\"point\":\"" + _0x12faa7 + "\"}",
      _0x3dd190 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/check", _0x461c14, _0x308bbc);
    _0x3dd190.code == 0 && (console.log("【" + this.name + "】滑块验证通过，可以愉快的玩耍啦..."), await this.lottery());
  }
  async ["lottery"]() {
    let _0x5b306b = $.time(13),
      _0x2848a6 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x2760a5 = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + this.lotteryid + "&&module=study&&nonce_str=" + _0x2848a6 + "&&optionHash=&&source_type=app&&timestamp=" + _0x5b306b + "&&token=" + this.sessionid + "&&" + this.key,
      _0x2156da = $.SHA_Encrypt(1, "SHA256", _0x2760a5),
      _0x1df2aa = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x2156da,
        authorization: "Bearer " + this.token,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x5b306b,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x2848a6,
        "user-agent": UA
      },
      _0x582d5e = "{\"id\":" + this.lotteryid + ",\"app_id\":\"K8tbWP2J0x3uCITGYEhL\",\"module\":\"study\",\"optionHash\":\"\"}",
      _0x1a1d61 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery", _0x1df2aa, _0x582d5e);
    if (_0x1a1d61.code == 0) {
      let _0x1b079a = await this.lotterylist();
      for (let _0x41604e of _0x1b079a) {
        if (_0x41604e.id == _0x1a1d61.data.id) {
          console.log("【" + this.name + "】抽奖成功,抽中了" + _0x41604e.goodsTitle);
        }
      }
    } else {
      _0x1a1d61.code == 10000 && (console.log("【" + this.name + "】准备开始破解滑块......"), await this.cjhuakuai());
    }
  }
  async ["lotterylist"]() {
    let _0x2dfe32 = $.time(13),
      _0x174faf = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x390620 = "app_id=K8tbWP2J0x3uCITGYEhL&&auth_id=" + this.uid + "&&device_id=" + this.did + "&&id=" + this.lotteryid + "&&nonce_str=" + _0x174faf + "&&source_type=app&&timestamp=" + _0x2dfe32 + "&&token=" + this.sessionid + "&&35c782a2",
      _0x23bd74 = $.SHA_Encrypt(1, "SHA256", _0x390620),
      _0x935b6f = {
        "access-type": "app",
        "access-device-id": this.did,
        "access-auth-id": this.uid,
        "access-api-signature": _0x23bd74,
        "access-app-id": "K8tbWP2J0x3uCITGYEhL",
        "access-timestamp": _0x2dfe32,
        "access-api-token": this.sessionid,
        "access-nonce-str": _0x174faf
      },
      _0x361853 = "{\"id\":" + this.lotteryid + "}",
      _0x4eca6a = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_detail", _0x935b6f, _0x361853);
    if (_0x4eca6a.code == 0) {
      let _0x2bc241 = _0x4eca6a.data.options;
      return _0x2bc241;
    }
  }
  async ["hd2list"]() {
    for (let _0x12ad72 of ["", "&start=9999999999980"]) {
      let _0x2906bc = $.time(13),
        _0x1b0b9a = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
        _0x2150cf = "/api/article/subject_group_list&&" + this.sessionid + "&&" + _0x1b0b9a + "&&" + _0x2906bc + "&&FR*r!isE5W&&31",
        _0x5035c7 = $.SHA_Encrypt(1, "SHA256", _0x2150cf),
        _0x471839 = {
          "X-SESSION-ID": this.sessionid,
          "X-TENANT-ID": "31",
          "X-REQUEST-ID": _0x1b0b9a,
          "X-SIGNATURE": _0x5035c7,
          "X-TIMESTAMP": _0x2906bc,
          "User-Agent": "zjolapp; 6.0.0; " + this.did + ";"
        },
        _0xa4b767 = await $.task("get", "https://vapp.tmuyun.com/api/article/subject_group_list?group_id=" + HD2 + _0x12ad72, _0x471839);
      if (_0xa4b767.code == 0) {
        for (let _0x1a8def of _0xa4b767.data.article_list) {
          _0x1a8def.mark_read == 0 && (await this.read(_0x1a8def.id, _0x1a8def.list_title));
        }
      }
    }
  }
  async ["read"](_0x4737a2, _0x21fa6e) {
    let _0x57a7f9 = $.time(13),
      _0x422a22 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x12ebd6 = "/api/article/detail&&" + this.sessionid + "&&" + _0x422a22 + "&&" + _0x57a7f9 + "&&FR*r!isE5W&&31",
      _0xe3f09d = $.SHA_Encrypt(1, "SHA256", _0x12ebd6),
      _0x5756c2 = {
        "X-SESSION-ID": this.sessionid,
        "X-TENANT-ID": "31",
        "X-REQUEST-ID": _0x422a22,
        "X-SIGNATURE": _0xe3f09d,
        "X-TIMESTAMP": _0x57a7f9,
        "User-Agent": "zjolapp; 6.0.0; " + this.did + ";"
      },
      _0x21276a = await $.task("get", "https://vapp.tmuyun.com/api/article/detail?id=" + _0x4737a2, _0x5756c2);
    if (_0x21276a.code == 0) {
      console.log("【" + this.name + "】阅读《" + _0x21fa6e + "》成功，准备去抽奖......");
      let _0x22388d = decodeURIComponent(_0x21276a.data.article.content.match(/<a\b[^>]*>([\s\S]*?)<\/a>/).input.match(/dbredirect=([^;]+)/)[1]).match(/id=([\w\-]+)/)[1];
      await $.wait(10000, 20000);
      await this.getcjid(_0x22388d);
    }
  }
  async ["gettokenkey"](_0x58c280) {
    const _0x4b87ac = {
      cookie: this.wdatas,
      referer: "https://95337.activity-42.m.duiba.com.cn/customShare/share?id=6600&dbredirect=https%3A%2F%2F95337.activity-42.m.duiba.com.cn%2Fhdtool%2Findex%3Fid%3D" + _0x58c280 + "%26dbnewopen&gaze_control=01"
    };
    let _0xe0ffb2 = await $.task("get", "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=" + _0x58c280 + "&dbnewopen&from=login&spm=95337.1.1.1", _0x4b87ac);
    this.consumerId = _0xe0ffb2.match(/consumerId:'(.*?)'/)[1];
    let _0x39a4c0 = 蛋炒饭_0x1b4972.parseFromString(_0xe0ffb2),
      _0x348710 = 蛋炒饭_0x5f2c31.select("//script", _0x39a4c0),
      _0x3ecf49 = _0x348710[5].childNodes[0],
      _0x49b22d = new 蛋炒饭_0x19c95b("<script>" + $.DealScriptStr(_0x3ecf49.data) + "</script>", {
        runScripts: "dangerously"
      }),
      _0x541714 = _0x49b22d.window.getDuibaToken.toString(),
      _0x289ef0 = _0x541714.match(/var key = '(.*)?';/)[1];
    return _0x289ef0;
  }
  async ["gettokens"](_0x28b527) {
    let _0x240351 = $.time(13),
      _0x121ea9 = await this.gettokenkey(_0x28b527);
    const _0x37639c = require("vm");
    const _0x5af854 = {
      cookie: this.wdatas,
      referer: "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=" + _0x28b527 + "&dbnewopen&from=login&spm=95337.1.1.1"
    };
    let _0x5a2a0d = "timestamp=" + _0x240351 + "&activityId=" + _0x28b527 + "&activityType=hdtool&consumerId=" + this.consumerId,
      _0x191271 = await $.task("post", "https://95337.activity-42.m.duiba.com.cn/hdtool/ctoken/getTokenNew", _0x5af854, _0x5a2a0d),
      _0x2ee72d = _0x191271.token;
    const _0x1f8a77 = {
      window: {}
    };
    _0x37639c.createContext(_0x1f8a77);
    try {
      _0x37639c.runInContext(_0x2ee72d, _0x1f8a77);
      const _0x4fd541 = _0x1f8a77.window[_0x121ea9];
      return _0x4fd541;
    } catch (_0x49ebfd) {
      console.error("执行脚本时发生错误:", _0x49ebfd);
    }
  }
  async ["getcjid"](_0x1fcbf5) {
    let _0x4da80c = $.time(13),
      _0x28c9f9 = await this.gettokens(_0x1fcbf5),
      _0x508348 = {
        "x-requested-with": "XMLHttpRequest",
        "user-agent": UA,
        referer: "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=" + _0x1fcbf5 + "&dbnewopen&from=login&spm=95337.1.1.1",
        cookie: this.wdatas
      },
      _0x341546 = "actId=" + _0x1fcbf5 + "&oaId=" + _0x1fcbf5 + "&activityType=hdtool&consumerId=" + this.consumerId + "&token=" + _0x28c9f9,
      _0x2201dc = await $.task("post", "https://95337.activity-42.m.duiba.com.cn/hdtool/doJoin?dpm=95337.3.1.0&activityId=" + _0x1fcbf5 + "&_=" + _0x4da80c, _0x508348, _0x341546);
    if (_0x2201dc.success == true && _0x2201dc.orderId) {
      let _0xf22beb = _0x2201dc.orderId;
      await this.getcj2(_0xf22beb);
    } else {
      _0x2201dc.success == true && _0x2201dc.message == "网络错误" ? await this.getcjid(_0x1fcbf5) : console.log("【" + this.name + "】" + _0x2201dc.message);
    }
  }
  async ["getcj2"](_0x18577d) {
    let _0x4d817e = $.time(13),
      _0x516550 = {
        cookie: this.wdatas
      },
      _0xc377d6 = "orderId=" + _0x18577d + "&adslotId=",
      _0x4980ec = await $.task("post", "https://95337.activity-42.m.duiba.com.cn/hdtool/getOrderStatus?_=" + _0x4d817e, _0x516550, _0xc377d6);
    if (_0x4980ec.result == 0) {
      await this.getcj2(_0x18577d);
    } else {
      if (_0x4980ec.result == 1 && _0x4980ec.lottery.type == "thanks") {
        console.log("【" + this.name + "】抽奖成功，不过抽到了空气！！");
        await $.wait(5000, 10000);
      } else {
        _0x4980ec.result == 2 && _0x4980ec.lottery.type == "alipay" && (console.log("【" + this.name + "】抽奖成功，抽到了现金红包，马上去提现......"), await $.wait(5000, 10000));
      }
    }
  }
  async ["gettixianlist"]() {
    let _0x5b93d3 = $.time(13),
      _0x42f946 = {
        cookie: this.wdatas
      },
      _0x3abc3a = await $.task("get", "https://95337.activity-42.m.duiba.com.cn/crecord/getrecord?page=1&_=" + _0x5b93d3, _0x42f946);
    if (_0x3abc3a.success == true) {
      for (let _0x618e5a of _0x3abc3a.records) {
        if (_0x618e5a.quantity == 0) {
          let _0x2393a7 = JSON.parse(_0x618e5a.emdJson).info,
            _0x388196 = await this.gettxtokens(_0x2393a7);
          await this.hd2tx(_0x388196, _0x2393a7);
        }
      }
    }
  }
  async ["gettxtokenkey"](_0x1ab10e) {
    const _0x1d84a3 = {
      cookie: this.wdatas,
      referer: "https://95337.activity-42.m.duiba.com.cn/crecord/record?dbnewopen&dpm=95337.3.2.0"
    };
    let _0x18b888 = await $.task("get", "https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=" + _0x1ab10e + "&dpm=95337.26.0.1&dcm=101.53.240417524925954.0&dbnewopen", _0x1d84a3),
      _0xccb4d3 = 蛋炒饭_0x1b4972.parseFromString(_0x18b888),
      _0x2abfed = 蛋炒饭_0x5f2c31.select("//script", _0xccb4d3),
      _0x2984ea = _0x2abfed[2].childNodes[0],
      _0x5ee715 = new 蛋炒饭_0x19c95b("<script>" + $.DealScriptStr(_0x2984ea.data) + "</script>", {
        runScripts: "dangerously"
      }),
      _0x91454 = _0x5ee715.window.getDuibaToken.toString(),
      _0x5cb08a = _0x91454.match(/var key = '(.*)?';/)[1];
    return _0x5cb08a;
  }
  async ["gettxtokens"](_0x103485) {
    let _0x437b60 = await this.gettxtokenkey(_0x103485);
    const _0x45dd88 = require("vm");
    const _0x1ac412 = {
      cookie: this.wdatas,
      referer: "https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=" + _0x103485 + "&dpm=95337.26.0.1&dcm=101.53.240417524925954.0&dbnewopen"
    };
    let _0x33d245 = await $.task("post", "https://95337.activity-42.m.duiba.com.cn/ctoken/getToken.do", _0x1ac412),
      _0x12e82d = _0x33d245.token;
    const _0x3be970 = {
      window: {}
    };
    _0x45dd88.createContext(_0x3be970);
    try {
      _0x45dd88.runInContext(_0x12e82d, _0x3be970);
      const _0x3d5dbc = _0x3be970.window[_0x437b60];
      return _0x3d5dbc;
    } catch (_0x1784ef) {
      console.error("执行脚本时发生错误:", _0x1784ef);
    }
  }
  async ["hd2tx"](_0x42479e, _0x5b83c9) {
    let _0x2db128 = encodeURIComponent(this.realname),
      _0xa68fdc = {
        cookie: this.wdatas,
        referer: "https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=" + _0x5b83c9 + "&dbnewopen",
        "user-agent": UA
      },
      _0x171393 = "alipay=" + this.pay + "&realname=" + _0x2db128 + "&recordId=" + _0x5b83c9 + "&token=" + _0x42479e,
      _0x22b25b = await $.task("post", "https://95337.activity-42.m.duiba.com.cn/activity/doTakePrize", _0xa68fdc, _0x171393);
    console.log(_0x22b25b);
    _0x22b25b.success == true && (console.log("【" + this.name + "】支付宝提现成功！！"), await $.wait(5000));
  }
}
$ = 蛋炒饭_0x4e262b();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  await $.Multithreading("login");
  let _0xf45096 = $.cookie_list.filter(_0x45d816 => _0x45d816.logs == true);
  if (_0xf45096.length == 0) {
    console.log("Cookie格式错误 或 账号被禁封");
    return;
  } else {
    HD1 != "" && (await $.Multithreading("loginH5"), await $.Multithreading("readlist"), await $.Multithreading("cxlottery"), await $.Multithreading("lotterylist"));
    HD2 != "" && (await $.Multithreading("hd2list"), await $.Multithreading("gettixianlist"));
  }
  let _0x10482d = [];
  for (let _0x5b5d1f of $.cookie_list) {
    if (_0x5b5d1f.message) {
      _0x10482d.push(_0x5b5d1f.message);
    }
  }
  if (_0x10482d.length > 0) {
    await $.SendMsg(_0x10482d.join("\n"));
  }
})().catch(_0x7338f9 => {
  console.log(_0x7338f9);
}).finally(() => {});
function 蛋炒饭_0x4e262b() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x2dd593, _0x4f32c9, _0x39d739) {
      let _0x42b14f = [];
      !_0x39d739 && (_0x39d739 = 1);
      while (_0x39d739--) {
        for (let _0x1ed20c of $.cookie_list) {
          _0x42b14f.push(_0x1ed20c[_0x2dd593](_0x4f32c9));
        }
      }
      await Promise.allSettled(_0x42b14f);
    }
    ["ExamineCookie"]() {
      let _0x5caf40 = process.env[VALY] || CK,
        _0x5849cd = 0;
      if (_0x5caf40) {
        for (let _0x31b745 of _0x5caf40.split("\n").filter(_0x5884ca => !!_0x5884ca)) {
          $.cookie_list.push(new 蛋炒饭_0x3dec60(_0x31b745));
        }
        _0x5849cd = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x5849cd + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x306f3d, _0x25830f, _0x1f2dc1, _0x444b48, _0x35aed2) {
      if (_0x306f3d == "delete") {
        _0x306f3d = _0x306f3d.toUpperCase();
      } else {
        _0x306f3d = _0x306f3d;
      }
      if (_0x306f3d == "post") {
        delete _0x1f2dc1["content-type"];
        delete _0x1f2dc1["Content-type"];
        delete _0x1f2dc1["content-Type"];
        if ($.safeGet(_0x444b48)) {
          _0x1f2dc1["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x1f2dc1["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x444b48 && (_0x1f2dc1["Content-Length"] = $.lengthInUtf8Bytes(_0x444b48));
      }
      _0x306f3d == "get" && (delete _0x1f2dc1["content-type"], delete _0x1f2dc1["Content-type"], delete _0x1f2dc1["content-Type"], delete _0x1f2dc1["Content-Length"]);
      _0x1f2dc1.Host = _0x25830f.replace("//", "/").split("/")[1];
      return new Promise(async _0x13f7b5 => {
        if (_0x306f3d.indexOf("T") < 0) {
          var _0x2c8ab8 = {
            url: _0x25830f,
            headers: _0x1f2dc1,
            body: _0x444b48,
            proxy: "http://" + _0x35aed2
          };
        } else {
          var _0x2c8ab8 = {
            url: _0x25830f,
            headers: _0x1f2dc1,
            form: JSON.parse(_0x444b48),
            proxy: "http://" + _0x35aed2
          };
        }
        !_0x35aed2 && delete _0x2c8ab8.proxy;
        this.request[_0x306f3d.toLowerCase()](_0x2c8ab8, (_0x54b4eb, _0x12f5b5, _0x39ccbb) => {
          try {
            if (_0x39ccbb) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x2c8ab8);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x39ccbb)) {
                  console.log(JSON.parse(_0x39ccbb));
                } else {
                  console.log(_0x39ccbb);
                }
              }
            }
          } catch (_0x2bd670) {
            console.log(_0x2bd670, _0x25830f + "\n" + _0x1f2dc1);
          } finally {
            let _0x15b770 = "";
            if (!_0x54b4eb) {
              if ($.safeGet(_0x39ccbb)) {
                _0x15b770 = JSON.parse(_0x39ccbb);
              } else {
                if (_0x39ccbb.indexOf("/") != -1 && _0x39ccbb.indexOf("+") != -1) {
                  _0x15b770 = _0x39ccbb;
                } else {
                  _0x15b770 = _0x39ccbb;
                }
              }
            } else {
              _0x15b770 = _0x25830f + "   API请求失败，请检查网络重试\n" + _0x54b4eb;
            }
            return _0x13f7b5(_0x15b770);
          }
        });
      });
    }
    ["signature"](_0x35d0af) {
      let _0x3cd128 = "Tc0RVJms1BDIqLELFdGd",
        _0x42f37e = $.HmacSHA_Encrypt(1, "HmacSHA256", _0x35d0af, _0x3cd128);
      return _0x42f37e;
    }
    ["DealScriptStr"](_0x1c2f38) {
      _0x1c2f38 = _0x1c2f38.replace(/\/\*.*?\*\//g, " ");
      _0x1c2f38 = _0x1c2f38.replace(/\b0(\d+)/g, "0o$1");
      return _0x1c2f38;
    }
    async ["SendMsg"](_0x47f5b1) {
      if (!_0x47f5b1) {
        return;
      }
      if (Notify == 1) {
        var _0x1f08d5 = require("./sendNotify");
        await _0x1f08d5.sendNotify(NAME, _0x47f5b1);
      }
    }
    ["lengthInUtf8Bytes"](_0x551576) {
      let _0x2bf88f = encodeURIComponent(_0x551576).match(/%[89ABab]/g);
      return _0x551576.length + (_0x2bf88f ? _0x2bf88f.length : 0);
    }
    ["randomArr"](_0xf2996a) {
      return _0xf2996a[parseInt(Math.random() * _0xf2996a.length, 10)];
    }
    ["wait"](_0xa35e77) {
      return new Promise(_0x52826c => setTimeout(_0x52826c, _0xa35e77));
    }
    ["time"](_0x5b2547) {
      return _0x5b2547 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x3fbfbd) {
      let _0x51e6da = new Date();
      if (_0x3fbfbd == undefined) {
        let _0x3e2696 = new Date(),
          _0x847bfb = _0x3e2696.getFullYear() + "-",
          _0x263367 = (_0x3e2696.getMonth() + 1 < 10 ? "0" + (_0x3e2696.getMonth() + 1) : _0x3e2696.getMonth() + 1) + "-",
          _0x5339fb = _0x3e2696.getDate() + " ",
          _0x566730 = _0x3e2696.getHours() + ":",
          _0x168f71 = _0x3e2696.getMinutes() + ":",
          _0x1c5d64 = _0x3e2696.getSeconds() + 1 < 10 ? "0" + _0x3e2696.getSeconds() : _0x3e2696.getSeconds();
        return _0x847bfb + _0x263367 + _0x5339fb + _0x566730 + _0x168f71 + _0x1c5d64;
      } else {
        if (_0x3fbfbd == 0) {
          return _0x51e6da.getFullYear();
        } else {
          if (_0x3fbfbd == 1) {
            return _0x51e6da.getMonth() + 1 < 10 ? "0" + (_0x51e6da.getMonth() + 1) : _0x51e6da.getMonth() + 1;
          } else {
            if (_0x3fbfbd == 2) {
              return _0x51e6da.getDate();
            } else {
              if (_0x3fbfbd == 3) {
                return _0x51e6da.getHours();
              } else {
                if (_0x3fbfbd == 4) {
                  return _0x51e6da.getMinutes();
                } else {
                  if (_0x3fbfbd == 5) {
                    return _0x51e6da.getSeconds() + 1 < 10 ? "0" + _0x51e6da.getSeconds() : _0x51e6da.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["formatDate"](_0x1e5383) {
      var _0x4a814d = _0x1e5383.getMonth() + 1,
        _0x13ce3f = _0x1e5383.getDate();
      return _0x4a814d + "月" + _0x13ce3f + "日";
    }
    ["safeGet"](_0xe3911f) {
      try {
        if (typeof JSON.parse(_0xe3911f) == "object") {
          return true;
        }
      } catch (_0x30be49) {
        return false;
      }
    }
    ["SJS"](_0x615c93, _0x575729) {
      if (_0x575729 == 0) {
        let _0x20d504 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x27b9a0 = _0x20d504.length,
          _0x4d6245 = "";
        for (let _0x4c38ad = 0; _0x4c38ad < _0x615c93; _0x4c38ad++) {
          _0x4d6245 += _0x20d504.charAt(Math.floor(Math.random() * _0x27b9a0));
        }
        return _0x4d6245;
      } else {
        if (_0x575729 == 1) {
          let _0x478897 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0xa93d69 = _0x478897.length,
            _0x8def66 = "";
          for (let _0x51ddb8 = 0; _0x51ddb8 < _0x615c93; _0x51ddb8++) {
            _0x8def66 += _0x478897.charAt(Math.floor(Math.random() * _0xa93d69));
          }
          return _0x8def66;
        } else {
          if (_0x575729 == 2) {
            let _0x409dd9 = "0123456789",
              _0xe55119 = _0x409dd9.length,
              _0x161129 = "";
            for (let _0x541c90 = 0; _0x541c90 < _0x615c93; _0x541c90++) {
              _0x161129 += _0x409dd9.charAt(Math.floor(Math.random() * _0xe55119));
            }
            return _0x161129;
          } else {
            let _0x370052 = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789",
              _0x166685 = _0x370052.length,
              _0x2df612 = "";
            for (let _0x154f17 = 0; _0x154f17 < _0x615c93; _0x154f17++) {
              _0x2df612 += _0x370052.charAt(Math.floor(Math.random() * _0x166685));
            }
            return _0x2df612;
          }
        }
      }
    }
    ["udid"](_0x14b4dd) {
      function _0x2e61e1() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x1208d5 = _0x2e61e1() + _0x2e61e1() + "-" + _0x2e61e1() + "-" + _0x2e61e1() + "-" + _0x2e61e1() + "-" + _0x2e61e1() + _0x2e61e1() + _0x2e61e1();
      return _0x14b4dd == 0 ? _0x1208d5.toUpperCase() : _0x1208d5.toLowerCase();
    }
    ["encodeUnicode"](_0x280009) {
      var _0x1941fe = [];
      for (var _0x1b035f = 0; _0x1b035f < _0x280009.length; _0x1b035f++) {
        _0x1941fe[_0x1b035f] = ("00" + _0x280009.charCodeAt(_0x1b035f).toString(16)).slice(-4);
      }
      return "\\u" + _0x1941fe.join("\\u");
    }
    ["base64ToHex"](_0x5b9d83) {
      const _0x59c8c1 = atob(_0x5b9d83),
        _0x12d42b = new Uint8Array(_0x59c8c1.length);
      for (let _0x41f679 = 0; _0x41f679 < _0x59c8c1.length; _0x41f679++) {
        _0x12d42b[_0x41f679] = _0x59c8c1.charCodeAt(_0x41f679);
      }
      let _0x2b59b5 = "";
      for (let _0x4643e3 = 0; _0x4643e3 < _0x12d42b.length; _0x4643e3++) {
        const _0x85ba20 = _0x12d42b[_0x4643e3].toString(16).padStart(2, "0");
        _0x2b59b5 += _0x85ba20;
      }
      return _0x2b59b5;
    }
    ["decodeUnicode"](_0x3bd311) {
      _0x3bd311 = _0x3bd311.replace(/\\u/g, "%u");
      return unescape(unescape(_0x3bd311));
    }
    RT(_0x229cb9, _0x1675a3) {
      return Math.round(Math.random() * (_0x1675a3 - _0x229cb9) + _0x229cb9);
    }
    ["arrNull"](_0x46db69) {
      var _0xc4be70 = _0x46db69.filter(_0x36e576 => {
        return _0x36e576 && _0x36e576.trim();
      });
      return _0xc4be70;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x4c80d6 = $.nowtime();
      JSON.stringify(_0x4c80d6).indexOf(" ") >= 0 && (_0x4c80d6 = _0x4c80d6.replace(" ", "T"));
      return new Date(_0x4c80d6).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x648e8b, _0x285cca, _0x14353a, _0x13ea75) {
      return _0x13ea75 == 0 ? JSON.stringify(_0x648e8b.split(_0x285cca).reduce((_0x2cb2e7, _0x1a3db8) => {
        let _0x598c98 = _0x1a3db8.split(_0x14353a);
        _0x2cb2e7[_0x598c98[0].trim()] = _0x598c98[1].trim();
        return _0x2cb2e7;
      }, {})) : _0x648e8b.split(_0x285cca).reduce((_0x3249b4, _0x41703a) => {
        let _0x3551ab = _0x41703a.split(_0x14353a);
        _0x3249b4[_0x3551ab[0].trim()] = _0x3551ab[1].trim();
        return _0x3249b4;
      }, {});
    }
    ["MD5Encrypt"](_0x275f9e, _0x437f38) {
      if (_0x275f9e == 0) {
        return this.CryptoJS.MD5(_0x437f38).toString().toLowerCase();
      } else {
        if (_0x275f9e == 1) {
          return this.CryptoJS.MD5(_0x437f38).toString().toUpperCase();
        } else {
          if (_0x275f9e == 2) {
            return this.CryptoJS.MD5(_0x437f38).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x275f9e == 3) {
              return this.CryptoJS.MD5(_0x437f38).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x319bdc, _0x1a7102, _0x32a2e0) {
      if (_0x319bdc == 0) {
        return this.CryptoJS[_0x1a7102](_0x32a2e0).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x1a7102](_0x32a2e0).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x7cc72f, _0x2396d6, _0x327a44, _0xf19f8) {
      return _0x7cc72f == 0 ? this.CryptoJS[_0x2396d6](_0x327a44, _0xf19f8).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2396d6](_0x327a44, _0xf19f8).toString();
    }
    ["Base64"](_0x460916, _0x28a623) {
      if (_0x460916 == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x28a623));
      } else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x28a623));
      }
    }
    ["DecryptCrypto"](_0x16b190, _0x2f78d9, _0x3133f5, _0x5ceb39, _0x18f98a, _0x50daa6, _0x110d6e) {
      if (_0x16b190 == 0) {
        const _0x1e5cd3 = this.CryptoJS[_0x2f78d9].encrypt(this.CryptoJS.enc.Utf8.parse(_0x18f98a), this.CryptoJS.enc.Utf8.parse(_0x50daa6), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x110d6e),
          mode: this.CryptoJS.mode[_0x3133f5],
          padding: this.CryptoJS.pad[_0x5ceb39]
        });
        return _0x1e5cd3.toString();
      } else {
        const _0x6e67b3 = this.CryptoJS[_0x2f78d9].decrypt(_0x18f98a, this.CryptoJS.enc.Utf8.parse(_0x50daa6), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x110d6e),
          mode: this.CryptoJS.mode[_0x3133f5],
          padding: this.CryptoJS.pad[_0x5ceb39]
        });
        return _0x6e67b3.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x5dfab9, _0x11e213) {
      const _0x1ceb85 = require("node-rsa");
      let _0x5b0815 = new _0x1ceb85("-----BEGIN PUBLIC KEY-----\n" + _0x11e213 + "\n-----END PUBLIC KEY-----");
      _0x5b0815.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x5b0815.encrypt(_0x5dfab9, "base64", "utf8");
    }
    ["getSHA256withRSA"](_0xac5068) {
      const _0x202530 = 蛋炒饭_0x1585fd.KEYUTIL.getKey(privateKeyString),
        _0x5e219c = new 蛋炒饭_0x1585fd.KJUR.crypto.Signature({
          alg: "SHA256withRSA"
        });
      _0x5e219c.init(_0x202530);
      _0x5e219c.updateString(_0xac5068);
      const _0x791d86 = _0x5e219c.sign(),
        _0x45064d = 蛋炒饭_0x1585fd.hextob64u(_0x791d86);
      return _0x45064d;
    }
  }();
}