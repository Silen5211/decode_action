//Mon Jul 22 2024 01:52:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("悦临平抽奖"),
  ckName = "ylphd";
let envSplitor = ["#", "\n"],
  strSplitor = "&";
const Notify = 1,
  debug = 0;
let ckStr = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  ckStrArr = [],
  msg,
  ck,
  data = "",
  ck_status = true,
  num,
  ids,
  deviceId,
  client_id = "10001",
  tenantId = "45";
const url = "https://vapp.tmuyun.com/api";
let t_id = "59",
  t = appid = "linping",
  i = appkey = "a7407a55e2dd17af4175af577b3bf018",
  requested = "com.zjonline.linping";
const portrait_urls = "https://img.tmuyun.com/assets/20220729/1659109373830_62e3fffdad61a42834e55af2.jpeg";
let ua = "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36;xsb_linpin;xsb_linpin;1.1.3;native_app;6.8.0",
  days = local_year() + "-" + local_month_two() + "-" + local_day_two();
const publicKeyStr = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB-----END PUBLIC KEY-----",
  axios = require("axios");
let request = require("request");
const NodeRSA = require("node-rsa"),
  CryptoJS = require("crypto-js"),
  fs = require("fs"),
  XmldomParser = require("xmldom").DOMParser;
request = request.defaults({
  "jar": true
});
window = {};
const {
  log
} = console;
let strShare = "./ylp.json",
  TempAccount = [];
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=================================================\n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=================================================\n");
      log("=================== 共找到 " + ckStrArr.length + " 个账号 ===================");
      debug && (log("【debug】 这是你的全部账号数组:\n " + ckStrArr), log("【debug】 这是你的全部账号数组:\n " + ckStr1Arr));
      for (let _0x58a008 = 0; _0x58a008 < ckStrArr.length; _0x58a008++) {
        num = _0x58a008 + 1;
        DoubleLog("==== 开始【第 " + num + " 个账号】====", true);
        ck = ckStrArr[_0x58a008];
        ck = ckStrArr[_0x58a008].split(strSplitor);
        requID = RandeCode();
        deviceId = requID;
        device_token = "170" + getRandomInt(16);
        checkck(ck[0]) ? await init() : sessionId = ck[0];
        await $.wait(1000);
        await userInfo();
        if (ck_status == true) {
          await get_activityid();
        }
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x5a421e => log(_0x5a421e)).finally(() => $.done());
function checkck(_0x2767c2) {
  const _0x43a148 = /^1[3-9]\d{9}$/;
  return _0x43a148.test(_0x2767c2) ? true : false;
}
function getAASkey() {
  var _0x293628 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if (!_0x293628) return "";
  for (var _0x10f6bf = [], _0x1a909e = [], _0x4d50da = 0; _0x4d50da < _0x293628.length; _0x4d50da++) _0x4d50da % 2 == 0 ? _0x1a909e.push(_0x293628[_0x4d50da]) : _0x10f6bf.push(_0x293628[_0x4d50da]);
  return MD5(_0x1a909e.join("") + _0x10f6bf.join(""));
}
async function Login() {
  did = RandeCode();
  let _0x2bdb2e = ts13(),
    _0x47ca8a = "globalDatetime" + _0x2bdb2e + "username" + ck[0] + "test_123456679890123456",
    _0x5ef52b = MD5Encrypt(_0x47ca8a).toUpperCase();
  return new Promise(_0x25cb66 => {
    var _0x405ade = {
      "method": "GET",
      "url": "http://ypapp.cnnb.com.cn/yongpai-user/api/login2/local?username=" + ck[0] + "&password=" + ck[1] + "&deviceId=" + did + "&globalDatetime=" + _0x2bdb2e + "&sign=" + _0x5ef52b,
      "headers": {
        "Host": "ypapp.cnnb.com.cn",
        "User-Agent": "okhttp/3.10.0"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x405ade)));
    axios.request(_0x405ade).then(async function (_0x345f95) {
      try {
        let _0x5ee20d = _0x345f95.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x345f95.data)));
        if (_0x5ee20d.code == 0) {
          nickname = _0x5ee20d.data.nickname;
          userId = _0x5ee20d.data.userId;
          DoubleLog("账号[" + num + "] 用户:" + nickname);
          log("账号[" + num + "] deviceId:" + _0x5ee20d.data.deviceId);
          log("账号[" + num + "] token:" + _0x5ee20d.data.token);
          log("账号[" + num + "] userId：" + userId);
          log("账号[" + num + "] 获得积分:" + _0x5ee20d.data.score);
          log("账号[" + num + "] 推荐码:" + _0x5ee20d.data.recommendcode);
          ck_status = true;
        } else console.log(_0x5ee20d), ck_status = false;
      } catch (_0x24e3fa) {
        log("异常：" + JSON.stringify(_0x345f95.data) + "，原因：" + data.message);
      }
    }).catch(function (_0x478ed0) {
      console.error(_0x478ed0);
    }).then(_0x5348fd => {
      _0x25cb66();
    });
  });
}
async function credential_auth(_0x233ae5, _0x28f6b9) {
  return await RSA_Encrypt(_0x28f6b9), signs = CryptoJS.SHA256("post%%/web/oauth/credential_auth?client_id=" + client_id + "&password=" + rsaCode + "&phone_number=" + _0x233ae5 + "%%" + requID + "%%").toString(), new Promise(_0x586596 => {
    var _0x134247 = {
      "method": "post",
      "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
      "headers": {
        "Cache-Control": "no-cache",
        "User-Agent": "ANDROID;9;10001;1.1.3;1.0;null;MI 6",
        "X-REQUEST-ID": requID,
        "X-SIGNATURE": signs,
        "Host": "passport.tmuyun.com",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "COOKIE": "SESSION=OTlhNDg4MWItNmQwNy00NjY3LTgwNWEtMGI2M2NhNzJjMTQz; Path=/; HttpOnly; SameSite=Lax"
      },
      "data": "client_id=" + client_id + "&password=" + encodeURIComponent(rsaCode) + "&phone_number=" + _0x233ae5
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x134247));
    axios.request(_0x134247).then(async function (_0x7eeac1) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x7eeac1.data));
        _0x7eeac1.data.code === 0 ? (log("账号[" + num + "] 获取code成功:" + _0x7eeac1.data.data.authorization_code.code), await $.wait(2000), await login(_0x7eeac1.data.data.authorization_code.code)) : log(_0x7eeac1.data);
      } catch (_0x30ef75) {
        log("异常：" + _0x30ef75 + "，原因：" + _0x30ef75.msg + " ");
      }
    }).catch(function (_0x588e77) {
      console.error(_0x588e77);
    }).then(_0x513373 => {
      _0x586596();
    });
  });
}
async function login(_0x5a8f7c) {
  const _0xa19136 = RandeCode(),
    _0x59cd85 = +new Date();
  return new Promise(_0x2cccdf => {
    var _0x3a09ad = {
      "method": "post",
      "url": url + "/zbtxz/login",
      "headers": {
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionIds,
        "X-SIGNATURE": CryptoJS.SHA256("/api/zbtxz/login&&" + sessionIds + "&&" + _0xa19136 + "&&" + _0x59cd85 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release",
        "X-TIMESTAMP": _0x59cd85,
        "X-TENANT-ID": tenantId,
        "X-REQUEST-ID": _0xa19136,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": "check_token=&code=" + _0x5a8f7c + "&token=&type=-1&union_id="
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x3a09ad));
    axios.request(_0x3a09ad).then(async function (_0x3bd9ef) {
      try {
        data = _0x3bd9ef.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x3bd9ef.data));
        if (_0x3bd9ef.data.code === 0) {
          log("账号[" + num + "] 登录成功 用户:" + data.data.account.nick_name);
          sessionId = _0x3bd9ef.data.data.session.id;
          log("账号[" + num + "] sessionId:" + sessionId);
          accountid = _0x3bd9ef.data.data.session.account_id;
          log("账号[" + num + "] accountid:" + _0x3bd9ef.data.data.session.account_id);
          await $.wait(2000);
          await client_ids();
          await $.wait(2000);
          await mine(sessionId);
          await $.wait(2000);
          await detail(sessionId);
          await $.wait(2000);
          await unread();
        } else log(_0x3bd9ef.data);
      } catch (_0x19656c) {
        log("异常：" + _0x19656c + "，原因：" + _0x19656c.msg + " ");
      }
    }).catch(function (_0x1c2f6e) {
      console.error(_0x1c2f6e);
    }).then(_0x24549a => {
      _0x2cccdf();
    });
  });
}
async function init() {
  requID = RandeCode();
  const _0x434cdc = +new Date();
  return new Promise(_0x86aec4 => {
    var _0x2e9665 = {
      "method": "POST",
      "url": url + "/account/init",
      "headers": {
        "X-SESSION-ID": "",
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x434cdc,
        "X-SIGNATURE": CryptoJS.SHA256("/api/account/init&&&&" + requID + "&&" + _0x434cdc + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.5.1;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      },
      "data": ""
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(_0x2e9665);
    }
    axios.request(_0x2e9665).then(async function (_0x205a69) {
      try {
        data = _0x205a69.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x205a69.data));
        if (data.code == 0) {
          sessionIds = _0x205a69.data.data.session.id;
          log("账号[" + num + "] 获取sessionId成功:" + sessionIds);
          await $.wait(2000);
          await mine(sessionIds);
          await $.wait(2000);
          await detail(sessionIds);
          await $.wait(2000);
          log("账号[" + num + "] 去获取登录code");
          await credential_auth(ck[0], ck[1]);
          await $.wait(2000);
        }
      } catch (_0x2fadee) {
        log("异常：" + _0x2fadee + "，原因：" + _0x2fadee.msg + " ");
      }
    }).catch(function (_0x50cb10) {
      console.error(_0x50cb10);
    }).then(_0x2c511e => {
      _0x86aec4();
    });
  });
}
async function mine(_0x3b6f7f) {
  requID = RandeCode();
  const _0x4d133f = +new Date();
  return new Promise(_0x12a870 => {
    var _0x230bee = {
      "method": "GET",
      "url": url + "/app_version_customize_config/mine",
      "headers": {
        "X-SESSION-ID": _0x3b6f7f,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x4d133f,
        "X-SIGNATURE": CryptoJS.SHA256("/api/app_version_customize_config/mine&&" + _0x3b6f7f + "&&" + requID + "&&" + _0x4d133f + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(_0x230bee);
    }
    axios.request(_0x230bee).then(async function (_0x273792) {
      try {
        data = _0x273792.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x273792.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x4430b0) {
        log("异常：" + _0x4430b0 + "，原因：" + _0x4430b0.msg + " ");
      }
    }).catch(function (_0x42597b) {
      console.error(_0x42597b);
    }).then(_0x2c77dc => {
      _0x12a870();
    });
  });
}
async function detail(_0x5f34f5) {
  requID = RandeCode();
  const _0xcc7aa6 = +new Date();
  return new Promise(_0x3f6fb7 => {
    var _0x23a9a1 = {
      "method": "GET",
      "url": url + "/app_version/detail",
      "headers": {
        "X-SESSION-ID": _0x5f34f5,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0xcc7aa6,
        "X-SIGNATURE": CryptoJS.SHA256("/api/app_version/detail&&" + _0x5f34f5 + "&&" + requID + "&&" + _0xcc7aa6 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x23a9a1));
    axios.request(_0x23a9a1).then(async function (_0x506429) {
      try {
        data = _0x506429.data;
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(_0x506429.data);
        }
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x178ba7) {
        log("异常：" + _0x178ba7 + "，原因：" + _0x178ba7.msg + " ");
      }
    }).catch(function (_0x3f15e0) {
      console.error(_0x3f15e0);
    }).then(_0x366141 => {
      _0x3f6fb7();
    });
  });
}
async function client_ids() {
  requID = RandeCode();
  const _0x178de3 = +new Date();
  return new Promise(_0x52a78c => {
    var _0x589947 = {
      "method": "post",
      "url": url + "/account/client_id",
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x178de3,
        "X-SIGNATURE": CryptoJS.SHA256("/api/account/client_id&&" + sessionId + "&&" + requID + "&&" + _0x178de3 + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      },
      "data": "client_id=baaf13f41b180b0b6952b79e7a751398"
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x589947));
    axios.request(_0x589947).then(async function (_0x2835b2) {
      try {
        data = _0x2835b2.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x2835b2.data));
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x345fdb) {
        log("异常：" + _0x345fdb + "，原因：" + _0x345fdb.msg + " ");
      }
    }).catch(function (_0xe3c1a1) {
      console.error(_0xe3c1a1);
    }).then(_0x1775e4 => {
      _0x52a78c();
    });
  });
}
async function unread() {
  requID = RandeCode();
  const _0x40ec8f = +new Date();
  return new Promise(_0x24e989 => {
    var _0x45c742 = {
      "method": "get",
      "url": url + "/chuanbo/unread",
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "vapp.tmuyun.com",
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": _0x40ec8f,
        "X-SIGNATURE": CryptoJS.SHA256("/api/chuanbo/unread&&" + sessionId + "&&" + requID + "&&" + _0x40ec8f + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;Release"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x45c742));
    axios.request(_0x45c742).then(async function (_0x6261f7) {
      try {
        data = _0x6261f7.data;
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(_0x6261f7.data);
        }
        data.code == 0 && (await $.wait(2000), log(data.message));
      } catch (_0x4a5ac5) {
        log("异常：" + _0x4a5ac5 + "，原因：" + _0x4a5ac5.msg + " ");
      }
    }).catch(function (_0x24bc6f) {
      console.error(_0x24bc6f);
    }).then(_0x2fe48b => {
      _0x24e989();
    });
  });
}
async function userInfo() {
  let _0x58d211 = RandeCode();
  const _0x130a8b = +new Date();
  try {
    let _0x12c739 = {
        "url": "https://vapp.tmuyun.com/api/user_mumber/account_detail",
        "headers": {
          "X-SESSION-ID": sessionId,
          "X-REQUEST-ID": _0x58d211,
          "X-TIMESTAMP": _0x130a8b,
          "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/account_detail&&" + sessionId + "&&" + _0x58d211 + "&&" + _0x130a8b + "&&FR*r!isE5W&&" + tenantId).toString(),
          "X-TENANT-ID": tenantId,
          "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
          "Cache-Control": "no-cache",
          "Host": "vapp.tmuyun.com",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      },
      _0x17ceea = await httpGet(_0x12c739, "获取用户信息");
    _0x17ceea.code == 0 ? (uinfo = _0x17ceea.data.rst, phone = uinfo.phone_number, nickname = uinfo.nick_name, accountid = uinfo.id, DoubleLog("账号[" + num + "] " + ("昵称:" + uinfo.nick_name)), DoubleLog("账号[" + num + "] " + ("手机号:" + uinfo.phone_number)), DoubleLog("账号[" + num + "] " + ("当前积分:" + uinfo.total_integral)), log("账号[" + num + "] accountid:" + accountid), log("账号[" + num + "] 推荐码:" + uinfo.ref_code), ck_status = true) : (DoubleLog("账号[" + num + "] 获取用户信息:失败 ❌ 了呢,原因:" + _0x17ceea.message + "!🎉"), console.log(_0x17ceea), ck_status = false);
  } catch (_0x14eb22) {
    console.log(_0x14eb22);
  }
}
async function get_activityid(_0x51e655) {
  let _0x60b67b = RandeCode();
  const _0x133527 = +new Date();
  try {
    let _0x980df1 = {
        "url": "https://vapp.tmuyun.com/api/article/channel_list?channel_id=60e686e7b40eef0e286ad156&isDiFangHao=false&is_new=true&list_count=0&size=20",
        "headers": {
          "Host": "vapp.tmuyun.com",
          "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
          "X-SESSION-ID": sessionId,
          "X-REQUEST-ID": _0x60b67b,
          "X-TIMESTAMP": _0x133527,
          "X-SIGNATURE": CryptoJS.SHA256("/api/article/channel_list&&" + sessionId + "&&" + _0x60b67b + "&&" + _0x133527 + "&&FR*r!isE5W&&" + tenantId).toString(),
          "X-TENANT-ID": tenantId,
          "X-ACCOUNT-ID": accountid,
          "Cache-Control": "no-cache",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      },
      _0x1de256 = await httpGet(_0x980df1, "获取活动id");
    if (_0x1de256.code == 0) {
      let _0x4c951b = searchInJson(_0x1de256.data.article_list, "红包");
      if (_0x4c951b) {
        log("账号[" + num + "] " + "原始路径内容:", _0x4c951b.content);
        log("账号[" + num + "] " + "原始路径:", _0x4c951b.path.join("."));
        let _0xc4f3be = "url",
          _0x1b4dc1 = [..._0x4c951b.path.slice(0, -1), _0xc4f3be],
          _0x536097 = _0x1de256.data.article_list;
        for (let _0x5c1a60 of _0x1b4dc1) {
          _0x536097 = _0x536097[_0x5c1a60];
        }
        log("账号[" + num + "] " + "新路径内容:", _0x536097);
        log("账号[" + num + "] " + "新路径:", _0x1b4dc1.join("."));
        id = _0x536097.split("id=")[1].split("&")[0];
        DoubleLog("账号[" + num + "] " + "活动id:" + id);
        await $.wait(1000);
        await auth_dt();
        await $.wait(1000);
        await ac_detail311(id);
        await $.wait(1000);
        await activity_id311(id);
        await $.wait(1000);
        await auth_appuserinit();
        await $.wait(1000);
        await detail_(id);
        if (_0x133527 < 1708185600000) {
          await $.wait(1000);
          await ac_detail311("170");
          await _ac_lottery_count();
          await $.wait(1000);
          await detail_("170");
        }
      } else DoubleLog("未找到包含\"红包\"的内容。");
    } else DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x1de256.message + "!🎉"), console.log(_0x1de256);
  } catch (_0x254580) {
    console.log(_0x254580);
  }
}
function searchInJson(_0x2cf155, _0x394207, _0x4509f2 = []) {
  for (let _0x1ad6cd in _0x2cf155) {
    if (typeof _0x2cf155[_0x1ad6cd] === "object") {
      let _0x4e9324 = [..._0x4509f2, _0x1ad6cd],
        _0x487462 = searchInJson(_0x2cf155[_0x1ad6cd], _0x394207, _0x4e9324);
      if (_0x487462) {
        return _0x487462;
      }
    } else {
      if (typeof _0x2cf155[_0x1ad6cd] === "string" && _0x2cf155[_0x1ad6cd].includes(_0x394207)) return {
        "path": [..._0x4509f2, _0x1ad6cd],
        "content": _0x2cf155[_0x1ad6cd]
      };
    }
  }
  return null;
}
async function get_activityid1(_0x173fab) {
  let _0x55b712 = RandeCode();
  const _0x5c1adc = +new Date();
  try {
    let _0x1eed40 = {
        "url": "https://vapp.tmuyun.com/api/article/detail?id=7708517",
        "headers": {
          "Host": "vapp.tmuyun.com",
          "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
          "X-SESSION-ID": sessionId,
          "X-REQUEST-ID": _0x55b712,
          "X-TIMESTAMP": _0x5c1adc,
          "X-SIGNATURE": CryptoJS.SHA256("/api/article/detail&&" + sessionId + "&&" + _0x55b712 + "&&" + _0x5c1adc + "&&FR*r!isE5W&&" + tenantId).toString(),
          "X-TENANT-ID": tenantId,
          "X-ACCOUNT-ID": accountid,
          "Cache-Control": "no-cache",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip"
        }
      },
      _0x4ce2a1 = await httpGet(_0x1eed40, "获取活动id");
    if (_0x4ce2a1.code == 0) {
      id = _0x4ce2a1.data.article.web_link.split("id=")[1].split("&")[0];
      DoubleLog("账号[" + num + "] " + "活动id:" + id);
      await $.wait(1000);
      await detail_(id);
    } else DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x4ce2a1.message + "!🎉"), console.log(_0x4ce2a1);
  } catch (_0x2fa912) {
    console.log(_0x2fa912);
  }
}
async function auth_dt() {
  const _0x217caf = +new Date();
  return dt = _0x217caf + "" + Math.floor(10000000 * Math.random()), new Promise(_0x47aa98 => {
    var _0x32a7dc = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_auth_dt",
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Android WebView\";v=\"120\"",
        "sec-ch-ua-platform": "\"Android\"",
        "Access-Api-Dt": dt,
        "sec-ch-ua-mobile": "?1",
        "Access-T-Id-In": t_id,
        "User-Agent": ua,
        "Access-Api-Unique-Token": "1",
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Origin": "https://linping.y-h5.iyunxh.com",
        "X-Requested-With": "com.zjonline.linping",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://linping.y-h5.iyunxh.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(JSON.stringify(_0x32a7dc)));
    axios.request(_0x32a7dc).then(async function (_0x575815) {
      try {
        data = _0x575815.data;
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(JSON.stringify(_0x575815.data)));
        if (data.code == 0) {
          api_dt = data.data.slice(32, 68);
          log("账号[" + num + "] " + "Access-Api-Dt:" + api_dt);
        }
      } catch (_0x1c5d78) {
        log("异常：" + _0x1c5d78 + "，原因：" + _0x1c5d78.msg + " ");
      }
    }).catch(function (_0x214edd) {
      console.error(_0x214edd);
    }).then(_0x4f240a => {
      _0x47aa98();
    });
  });
}
async function ac_detail311(_0x2ddd00) {
  const _0x1a30b0 = +new Date();
  t10 = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + _0x1a30b0 + m).toString();
  signature = [t, r, _0x1a30b0, d].join(";");
  finalString = t + ";" + r + ";" + _0x1a30b0 + ";" + d;
  signatures = MD5("app_user_token=" + sessionId + "&appid=" + t + "&noncestr=" + n + "&phone=" + uinfo.phone_number + "&portrait_url=https%3A%2F%2Fimg.tmuyun.com%2Fassets%2F20220729%2F1659109373830_62e3fffdad61a42834e55af2.jpeg&timestamp=" + t10 + "&user_id=" + accountid + "&user_name=" + encodeURIComponent(uinfo.nick_name) + "&wx_openid=&wx_unionid=&appkey=" + i).toString();
  try {
    let _0x566f4c = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_ac_detail?id=" + _0x2ddd00,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "371",
          "Access-User-Id": "0",
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": "",
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + _0x2ddd00,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0x3d27b8 = await httpGet(_0x566f4c, "获取活动id");
    _0x3d27b8.code == 0 ? (other_set = _0x3d27b8.data.other_set, other_set = JSON.parse(other_set), lottery_id = other_set.lottery.id, log("账号[" + num + "] " + _0x3d27b8.msg + " lottery_id:" + other_set.lottery.id)) : (DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x3d27b8.message + "!🎉"), console.log(_0x3d27b8));
  } catch (_0x2b159b) {
    console.log(_0x2b159b);
  }
}
async function activity_id311(_0x390078) {
  const _0x211a8e = +new Date();
  return t10 = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x211a8e + m).toString(), signature = [t, r, _0x211a8e, d].join(";"), finalString = t + ";" + r + ";" + _0x211a8e + ";" + d, new Promise(_0x4b89ff => {
    var _0x5c826c = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_optionp_list",
      "params": {
        "activity_id": _0x390078
      },
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Android WebView\";v=\"120\"",
        "Access-T-Id": t_id,
        "Access-User-Id": "0",
        "Access-Api-Signature": signature,
        "Access-Api-Dt": api_dt,
        "sec-ch-ua-mobile": "?1",
        "Access-Token": "",
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Api-Unique-Token": "1",
        "sec-ch-ua-platform": "\"Android\"",
        "Accept": "*/*",
        "Origin": "https://linping.y-h5.iyunxh.com",
        "X-Requested-With": "com.zjonline.linping",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://linping.y-h5.iyunxh.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(JSON.stringify(_0x5c826c));
    }
    axios.request(_0x5c826c).then(async function (_0x300abb) {
      try {
        data = _0x300abb.data;
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(JSON.stringify(_0x300abb.data));
        }
        data.code == 0 && log("账号[" + num + "] " + data.msg);
      } catch (_0x33fc65) {
        log("异常：" + _0x33fc65 + "，原因：" + _0x33fc65.msg + " ");
      }
    }).catch(function (_0x3ee9de) {
      console.error(_0x3ee9de);
    }).then(_0x5b7ccb => {
      _0x4b89ff();
    });
  });
}
async function auth_appuserinit() {
  const _0x103783 = +new Date();
  t10 = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + _0x103783 + m).toString();
  signature = [t, r, _0x103783, d].join(";");
  signatures = MD5("app_user_token=" + sessionId + "&appid=" + t + "&noncestr=" + n + "&phone=" + uinfo.phone_number + "&portrait_url=" + encodeURIComponent(portrait_urls) + "&timestamp=" + t10 + "&user_id=" + accountid + "&user_name=" + encodeURIComponent(uinfo.nick_name) + "&wx_openid=&wx_unionid=&appkey=" + i).toString();
  try {
    let _0x3e59f5 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_auth_appuserinit",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "371",
          "Access-User-Id": "0",
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": "",
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"app_user_token\":\"" + sessionId + "\",\"appid\":\"" + t + "\",\"noncestr\":\"" + n + "\",\"phone\":\"" + uinfo.phone_number + "\",\"portrait_url\":\"" + portrait_urls + "\",\"timestamp\":\"" + t10 + "\",\"user_id\":\"" + accountid + "\",\"user_name\":\"" + uinfo.nick_name + "\",\"wx_openid\":\"\",\"wx_unionid\":\"\",\"signature\":\"" + signatures + "\"}"
      },
      _0x2f27e5 = await httpPost(_0x3e59f5, "获取活动id");
    if (_0x2f27e5.code == 0) user_id = _0x2f27e5.data.data.user_id, log("账号[" + num + "] user_id:", user_id), access_token = _0x2f27e5.data.access_token, log("账号[" + num + "] access_token:", access_token);else {
      DoubleLog("账号[" + num + "] 获取活动id:失败 ❌ 了呢,原因:" + _0x2f27e5.message + "!🎉");
      console.log(_0x2f27e5);
    }
  } catch (_0x401f38) {
    console.log(_0x401f38);
  }
}
async function detail_(_0x770aca) {
  requID = RandeCode();
  const _0x3d96d6 = +new Date();
  return tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x3d96d6 + m).toString(), signature = [t, r, _0x3d96d6, d].join(";"), new Promise(_0x5604fa => {
    var _0x50b691 = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_optionp_list?activity_id=" + _0x770aca,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + _0x770aca,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x50b691));
    axios.request(_0x50b691).then(async function (_0x7ba816) {
      try {
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(_0x7ba816.data);
        }
        data = _0x7ba816.data;
        if (data.code == 0) {
          levels_ = data.data;
          DoubleLog("账号[" + num + "] 有" + levels_.length + "个抽奖活动");
          let _0x4bac24 = fs.existsSync(strShare);
          _0x4bac24 && (console.log("检测到token缓存文件" + strShare + "，载入..."), TempAccount = fs.readFileSync(strShare, "utf-8"), TempAccount && (TempAccount = TempAccount.toString(), TempAccount = JSON.parse(TempAccount)));
          let _0x2a2269 = false;
          if (TempAccount) for (let _0x2616ae = 0; _0x2616ae < TempAccount.length; _0x2616ae++) {
            TempAccount[_0x2616ae].phone == phone && TempAccount[_0x2616ae].day == days && (_0x2a2269 = true, tokens = TempAccount[_0x2616ae].token, tokenid = TempAccount[_0x2616ae].tokenid, log("账号[" + num + "] " + "该账号有今日缓存 token:" + tokens + " tokenid:" + tokenid));
          }
          if (!_0x2a2269) {
            log("账号[" + num + "] " + "该账号没有今日缓存，尝试过滑块获取token.....");
            DoubleLog("账号[" + num + "] 去获取滑块");
            await get_captcha();
            if (tokens && tokenid) {
              let _0x38aea8 = num - 1;
              TempAccount[_0x38aea8] = {
                "phone": phone,
                "token": tokens,
                "tokenid": tokenid,
                "day": days
              };
              var _0x42b91a = JSON.stringify(TempAccount, null, 2);
              fs.writeFile(strShare, _0x42b91a, "Utf8", _0x21d7dc => {
                if (_0x21d7dc) console.log(_0x21d7dc), console.log("账号[" + num + "] 缓存文件" + strShare + "更新失败!");else {
                  console.log("账号[" + num + "] 缓存文件" + strShare + "更新成功!");
                }
              });
            }
          }
          for (let _0x5e3ae1 = 0; _0x5e3ae1 < levels_.length; _0x5e3ae1++) {
            DoubleLog("账号[" + num + "] 第" + ("" + (_0x5e3ae1 + 1)) + "轮阅读:" + levels_[_0x5e3ae1].title);
            if (levels_[_0x5e3ae1].user_undone_num > 0) {
              ids = levels_[_0x5e3ae1].id;
              await level_(levels_[_0x5e3ae1].id, levels_[_0x5e3ae1].m_id);
            } else log("账号[" + num + "] 文章都读过了 不执行阅读");
            await _ac_lottery_count();
          }
          await _ac_detail();
          await $.wait(randomInt(1000, 5000));
          await getrecord11();
        } else log(_0x7ba816.data);
      } catch (_0x4f6535) {
        log("异常：" + _0x4f6535 + "，原因：" + _0x4f6535.msg + " ");
      }
    }).catch(function (_0x19e3a4) {
      console.error(_0x19e3a4);
    }).then(_0x1e358b => {
      _0x5604fa();
    });
  });
}
async function level_(_0x109490, _0x2712e6) {
  requID = RandeCode();
  const _0x351e23 = +new Date();
  return t10 = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x351e23 + m).toString(), signature = [t, r, _0x351e23, d].join(";"), new Promise(_0x46c940 => {
    var _0x1dd0e4 = {
      "method": "GET",
      "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/_task_list?offset=0&count=20&module_id=" + _0x2712e6 + "&activity_id=" + _0x109490,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x1dd0e4));
    axios.request(_0x1dd0e4).then(async function (_0x2630c6) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x2630c6.data));
        data = _0x2630c6.data;
        if (_0x2630c6.data.code == 0) {
          tasks_ = data.data;
          DoubleLog("账号[" + num + "] 要看" + tasks_.length + "篇文章后抽奖");
          for (let _0x2fc8a1 = 0; _0x2fc8a1 < tasks_.length; _0x2fc8a1++) {
            tasks_[_0x2fc8a1].user_done == 0 ? (idss = tasks_[_0x2fc8a1].id, rule = tasks_[_0x2fc8a1].rule, rule = JSON.parse(rule), await $.wait(randomInt(1000, 5000)), await task_create(idss, rule.news_id, _0x2fc8a1 + 1)) : DoubleLog("账号[" + num + "] 这篇文章都读过了 不执行阅读");
          }
        } else {
          log(_0x2630c6.data);
        }
      } catch (_0x8a7f3) {
        log("异常：" + _0x8a7f3 + "，原因：" + _0x8a7f3.msg + " ");
      }
    }).catch(function (_0x8f74f2) {
      console.error(_0x8f74f2);
    }).then(_0x2ad905 => {
      _0x46c940();
    });
  });
}
async function task_create(_0x587e6e, _0x2e859c, _0x5574d7) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x508bb0 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_create",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "18",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"task_id\":\"" + _0x587e6e + "\"}"
      },
      _0x196a6a = await httpPost(_0x508bb0, "获取task_record_id");
    if (_0x196a6a.code == 0) {
      log("账号[" + num + "] 开始阅读:" + _0x196a6a.msg + " news_id:" + _0x2e859c);
      task_record_id = _0x196a6a.data.task_record_id;
      await $.wait(randomInt(700, 3000));
      await details(_0x2e859c);
      await $.wait(randomInt(3000, 6000));
      await reads(_0x2e859c, _0x5574d7);
      await $.wait(randomInt(1000, 3000));
      await task_done(_0x587e6e, task_record_id, _0x5574d7);
    } else DoubleLog("账号[" + num + "] 获取id:失败 ❌ 了呢,原因:" + _0x196a6a.message + "!🎉"), console.log(_0x196a6a);
  } catch (_0x490c45) {
    console.log(_0x490c45);
  }
}
async function details(_0x45ef1f) {
  return requID = RandeCode(), ts = +new Date(), new Promise(_0x1b649f => {
    var _0x371355 = {
      "method": "GET",
      "url": "https://vapp.tmuyun.com/api/article/detail",
      "params": {
        "id": _0x45ef1f
      },
      "headers": {
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": ts,
        "X-SIGNATURE": CryptoJS.SHA256("/api/article/detail&&" + sessionId + "&&" + requID + "&&" + ts + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
        "X-ACCOUNT-ID": accountid,
        "Cache-Control": "no-cache",
        "Host": "vapp.tmuyun.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url =============== ");
      log(_0x371355);
    }
    axios.request(_0x371355).then(async function (_0xd5b518) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0xd5b518.data));
        data = _0xd5b518.data;
        if (_0xd5b518.data.code === 0) log("账号[" + num + "] " + data.message);else {
          log(_0xd5b518.data);
        }
      } catch (_0xc5fe59) {
        log("异常：" + _0xc5fe59 + "，原因：" + _0xc5fe59.msg + " ");
      }
    }).catch(function (_0x1bb605) {
      console.error(_0x1bb605);
    }).then(_0x5a707d => {
      _0x1b649f();
    });
  });
}
async function reads(_0x42f5b6, _0x11117e) {
  return requID = RandeCode(), ts = +new Date(), new Promise(_0x5c8ae1 => {
    var _0x81b1b0 = {
      "method": "GET",
      "url": "https://vapp.tmuyun.com/api/article/read_time",
      "params": {
        "channel_article_id": _0x42f5b6,
        "read_time": randomInt(3000, 6000)
      },
      "headers": {
        "X-SESSION-ID": sessionId,
        "X-REQUEST-ID": requID,
        "X-TIMESTAMP": ts,
        "X-SIGNATURE": CryptoJS.SHA256("/api/article/read_time&&" + sessionId + "&&" + requID + "&&" + ts + "&&FR*r!isE5W&&" + tenantId).toString(),
        "X-TENANT-ID": tenantId,
        "User-Agent": "1.1.3;" + deviceId + ";Xiaomi MI 6;Android;9;Release;6.8.0",
        "X-ACCOUNT-ID": accountid,
        "Cache-Control": "no-cache",
        "Host": "vapp.tmuyun.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x81b1b0));
    axios.request(_0x81b1b0).then(async function (_0x52480f) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x52480f.data));
        data = _0x52480f.data;
        if (_0x52480f.data.code === 0) {
          log("账号[" + num + "] 第" + _0x11117e + "次上传阅读时间:" + data.message);
        } else log(_0x52480f.data);
      } catch (_0x2369a7) {
        log("异常：" + _0x2369a7 + "，原因：" + _0x2369a7.msg + " ");
      }
    }).catch(function (_0x204165) {
      console.error(_0x204165);
    }).then(_0x40020a => {
      _0x5c8ae1();
    });
  });
}
async function task_done(_0x392a8d, _0x567e6d, _0x62be32) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x4ca610 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_done",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"task_record_id\":\"" + _0x567e6d + "\",\"collect_info\":\"\",\"afs_tokenid\":\"" + tokenid + "\",\"device_token\":\"" + device_token + "\"}"
      },
      _0x5f4070 = await httpPost(_0x4ca610, "完成阅读");
    if (_0x5f4070.code == 0) {
      log("账号[" + num + "] 第" + _0x62be32 + "次完成阅读:" + _0x5f4070.msg);
    } else log("账号[" + num + "] 第" + _0x62be32 + "次完成阅读:" + _0x5f4070.msg);
  } catch (_0x2b1cd5) {
    console.log(_0x2b1cd5);
  }
}
async function _ac_lottery_count(_0x2724f6) {
  return requID = RandeCode(), ts = +new Date(), tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + ts + m).toString(), signature = [t, r, ts, d].join(";"), new Promise(_0x3a2252 => {
    var _0x3b3aad = {
      "method": "get",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/ac_lottery_times?id=" + lottery_id,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x3b3aad));
    axios.request(_0x3b3aad).then(async function (_0x48b5fc) {
      try {
        if (debug) {
          log("\n\n【debug】=============== 这是 返回data ============== ");
          log(_0x48b5fc.data);
        }
        data = _0x48b5fc.data;
        if (data.code == 0) {
          lottery_number = data.data.show_remain;
          DoubleLog("账号[" + num + "] 抽奖次数:" + data.data.show_remain);
          if (data.data.show_remain > 0) {
            log("账号[" + num + "] 有抽奖次数 去抽奖");
            for (let _0x5778c4 = 0; _0x5778c4 < lottery_number; _0x5778c4++) {
              await $.wait(1000);
              await _ac_detail();
              await $.wait(randomInt(6000, 8000));
              await _event_sub(module_id, title);
            }
          }
        } else log(data);
      } catch (_0xfc68dc) {
        log("异常：" + _0xfc68dc + "，原因：" + _0xfc68dc.msg + " ");
      }
    }).catch(function (_0x470225) {
      console.error(_0x470225);
    }).then(_0x4c4348 => {
      _0x3a2252();
    });
  });
}
async function _ac_detail() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x52d1df = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/_ac_detail?id=" + lottery_id,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0xd8107b = await httpGet(_0x52d1df, "打开转盘");
    _0xd8107b.code == 0 ? (log("账号[" + num + "] 打开转盘:" + _0xd8107b.msg), module_id = _0xd8107b.data.m_id, title = _0xd8107b.data.title) : (log("账号[" + num + "] 打开转盘:" + _0xd8107b.msg), console.log(_0xd8107b));
  } catch (_0x4dc935) {
    console.log(_0x4dc935);
  }
}
async function _event_sub() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x14214f = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosstat/_event_sub",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Content-Length": "132",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"_need_stat\":0,\"_need_task\":0,\"_need_behavior\":1,\"event\":\"lotteryTake\",\"action\":\"take\",\"brief\":\"抽奖提交\",\"client_type\":3,\"module_id\":\"" + module_id + "\",\"content_id\":\"" + lottery_id + "\",\"num\":1,\"duration\":0,\"column_id\":0,\"column_title\":\"\",\"title\":\"" + title + "\",\"device_token\":\"" + device_token + "\",\"user_id\":\"" + user_id + "\",\"user_name\":\"" + nickname + "\",\"phone_num\":\"" + phone + "\",\"page_path\":\"module-study/pass-detail/pass-detail\",\"version\":\"1.0.0\",\"network\":\"wifi\",\"client_model\":\"android\",\"system_version\":\"Android 9\",\"resolution\":\"\",\"baidu_longitude\":\"\",\"baidu_latitude\":\"\",\"longitude\":0,\"latitude\":0,\"province\":\"\",\"city\":\"\",\"area\":\"\",\"street\":\"\",\"address\":\"\"}"
      },
      _0x5a152f = await httpPost(_0x14214f, "抽奖提交");
    if (_0x5a152f.code == 0) log("账号[" + num + "] 抽奖提交:" + _0x5a152f.msg), await $.wait(2000), await _ac_lottery(lottery_id);else {
      log("账号[" + num + "] 抽奖提交:" + _0x5a152f.msg);
    }
  } catch (_0x282999) {
    console.log(_0x282999);
  }
}
async function _ac_lottery(_0x556e6a) {
  return requID = RandeCode(), ts = +new Date(), tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + ts + m).toString(), signature = [t, r, ts, d].join(";"), new Promise(_0x490ad1 => {
    var _0x20604c = {
      "method": "POST",
      "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/ac_sub",
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Content-Length": "174",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Content-Type": "application/json",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      },
      "data": {
        "id": lottery_id,
        "verif_uuid": "",
        "verif_code": "",
        "afs_tokenid": tokenid,
        "collect_info": "",
        "longitude": 0,
        "latitude": 0,
        "device_token": device_token
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x20604c));
    axios.request(_0x20604c).then(async function (_0x2d5895) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x2d5895.data));
        data = _0x2d5895.data;
        if (data.code == 0) DoubleLog("账号[" + num + "] 抽奖:" + _0x2d5895.data.msg + " 结果:" + _0x2d5895.data.data.title);else _0x2d5895.data.code === 10000 ? DoubleLog("账号[" + num + "] 抽奖结果:" + _0x2d5895.data.msg) : (DoubleLog("账号[" + num + "] 抽奖结果:" + _0x2d5895.data.msg), console.log(_0x2d5895.data));
      } catch (_0x1c967b) {
        log("异常：" + _0x1c967b + "，原因：" + _0x1c967b.msg + " ");
      }
    }).catch(function (_0x44c7da) {
      console.error(_0x44c7da);
    }).then(_0x42622b => {
      _0x490ad1();
    });
  });
}
async function get_captcha() {
  requID = RandeCode();
  const _0x58b20d = +new Date();
  return tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x58b20d + m).toString(), signature = [t, r, _0x58b20d, d].join(";"), once = randomString(10), signature1 = "{\"once\":\"" + once + "\",\"referer\":\"https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id + "\",\"timestamp\":\"" + tt + "\",\"type\":\"1\"}", signature1 = AES_Encrypt(signature1), signature1 = encodeURIComponent(signature1), new Promise(_0x503813 => {
    var _0x883434 = {
      "method": "get",
      "url": "https://yapi.y-h5.iyunxh.com/api/basemodule/_captcha_get?once=" + once + "&referer=" + encodeURIComponent("https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id) + "&timestamp=" + tt + "&type=1&signature=" + signature1,
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x883434));
    axios.request(_0x883434).then(async function (_0x4f4146) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x4f4146.data));
        data = _0x4f4146.data;
        data.code == 0 ? (jigsawImageUrls = data.data.block, originalImageUrls = data.data.background, cap_tokens = data.data.token, await slideCompare(jigsawImageUrls, originalImageUrls, cap_tokens)) : log(_0x4f4146.data);
      } catch (_0x5c6439) {
        log("异常：" + _0x5c6439 + "，原因：" + _0x5c6439.msg + " ");
      }
    }).catch(function (_0x4e2b02) {
      console.error(_0x4e2b02);
    }).then(_0xc7ee4b => {
      _0x503813();
    });
  });
}
async function slideCompare(_0x35e0f4, _0xfbd1af, _0x524eed) {
  try {
    const _0x1b3ed6 = await axios.get(_0x35e0f4, {
        "responseType": "arraybuffer"
      }),
      _0x42d802 = await axios.get(_0xfbd1af, {
        "responseType": "arraybuffer"
      }),
      _0x345728 = arrayBufferToBase64(_0x1b3ed6.data),
      _0x33ae78 = arrayBufferToBase64(_0x42d802.data),
      _0x29a9a9 = {
        "MovePicture": _0x345728,
        "Background": _0x33ae78
      },
      _0x10d167 = JSON.stringify(_0x29a9a9),
      _0x14c053 = await axios.post("http://" + host + "/api.Slider_Move", _0x10d167, {
        "headers": {
          "Content-Type": "application/json"
        }
      });
    ocr_x = _0x14c053.data.result.target[0];
    log("ocr返回x轴的值 :", ocr_x);
    ocr_x = (ocr_x / 384 * 296).toFixed(1);
    ocr_x = parseInt(ocr_x) + 2;
    const _0x48780d = {
        "x": ocr_x,
        "width": 296,
        "track": [{
          "x": ocr_x - 10,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 8,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 6,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 5,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x - 3,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x,
          "y": 0,
          "time": 100
        }, {
          "x": ocr_x,
          "y": 0,
          "time": 100
        }]
      },
      _0x4b306f = JSON.stringify(_0x48780d);
    points = AES_Encrypt(_0x4b306f);
    await captcha(points, cap_tokens);
  } catch (_0x4c6237) {
    console.error("Error making POST request:", _0x4c6237);
  }
}
function arrayBufferToBase64(_0x10a459) {
  return Buffer.from(_0x10a459).toString("base64");
}
async function captcha(_0x15a494, _0x586ac4) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x5951e4 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/basemodule/_captcha_check",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"token\":\"" + _0x586ac4 + "\",\"data\":\"" + _0x15a494 + "\",\"referer\":\"https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id + "\",\"type\":\"1\"}"
      },
      _0x4e3a73 = await httpPost(_0x5951e4, "过滑块");
    if (_0x4e3a73.code == 0) {
      if (_0x4e3a73.data.result == true) DoubleLog("账号[" + num + "] 滑块验证成功"), tokens = _0x4e3a73.data.token, await intelverifcode(tokens);else {
        DoubleLog("账号[" + num + "] 滑块验证:" + _0x4e3a73.data.result);
        console.log(_0x4e3a73);
        await get_captcha();
      }
    } else log(_0x4e3a73);
  } catch (_0x26bda8) {
    console.log(_0x26bda8);
  }
}
async function captcha11(_0x29a924, _0x1e64bb) {
  requID = RandeCode();
  const _0x1443ac = +new Date();
  return tt = ts10(), r = randomString(32), n = randomString(6), m = getAASkey(i), d = MD5(t + r + _0x1443ac + m).toString(), signature = [t, r, _0x1443ac, d].join(";"), new Promise(_0x508f37 => {
    var _0x48d99e = {
      "method": "POST",
      "url": "https://yapi.y-h5.iyunxh.com/api/basemodule/_captcha_check",
      "headers": {
        "Host": "yapi.y-h5.iyunxh.com",
        "Connection": "keep-alive",
        "Access-User-Id": user_id,
        "Origin": "https://linping.y-h5.iyunxh.com",
        "Access-Api-Signature": signature,
        "Access-T-Id-In": t_id,
        "Access-Wxclient-Type": "wx_app",
        "User-Agent": ua,
        "Access-Token": access_token,
        "Access-Api-Unique-Token": "1",
        "Content-Type": "application/json",
        "Access-Api-Dt": api_dt,
        "Access-T-Id": t_id,
        "Accept": "*/*",
        "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-Requested-With": requested
      },
      "data": {
        "token": _0x1e64bb,
        "data": _0x29a924,
        "referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
        "type": "1"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url =============== "), log(_0x48d99e));
    log(_0x48d99e);
    axios.request(_0x48d99e).then(async function (_0x5742db) {
      try {
        debug && (log("\n\n【debug】=============== 这是 返回data ============== "), log(_0x5742db.data));
        log(_0x5742db.data);
        data = _0x5742db.data;
        _0x5742db.data.code == 0 ? _0x5742db.data.data.result == true ? (log("账号[" + num + "] 滑块验证成功"), msg += "\n\u6ED1\u5757\u9A8C\u8BC1\u6210\u529F", tokens = data.data.token) : (log("账号[" + num + "] 滑块验证:" + data.data.result), msg += "\n\u6ED1\u5757\u9A8C\u8BC1\u4E0D\u6210\u529F,\u91CD\u65B0\u6267\u884C\u9A8C\u8BC1\u62BD\u5956", console.log(_0x5742db.data), await get_captcha()) : console.log(_0x5742db.data);
      } catch (_0x47788b) {
        log("异常：" + _0x47788b + "，原因：" + _0x47788b.msg + " ");
      }
    }).catch(function (_0x4273b1) {
      console.error(_0x4273b1);
    }).then(_0x3d5b5f => {
      _0x508f37();
    });
  });
}
async function intelverifcode(_0x3f8236) {
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x316a2b = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/intelverifcode_check",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Content-Type": "application/json",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + ids + "&activity_id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        },
        "body": "{\"validate\":\"" + _0x3f8236 + "\",\"verif_type\":3,\"afs_uuid\":\"\",\"source\":\"yundian\"}"
      },
      _0x5027c5 = await httpPost(_0x316a2b, "?");
    if (_0x5027c5.code == 0) tokenid = _0x5027c5.data.tokenid, log("账号[" + num + "] tokenid:" + _0x5027c5.data.tokenid);else log(_0x5027c5);
  } catch (_0x596860) {
    console.log(_0x596860);
  }
}
async function getrecord11() {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x455312 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslottery/act_user?offset=0&count=20&activity_id=" + lottery_id + "&module_id=" + module_id,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Access-User-Id": user_id,
          "Origin": "https://linping.y-h5.iyunxh.com",
          "Access-Api-Signature": signature,
          "Access-T-Id-In": t_id,
          "Access-Wxclient-Type": "wx_app",
          "User-Agent": ua,
          "Access-Token": access_token,
          "Access-Api-Unique-Token": "1",
          "Access-Api-Dt": api_dt,
          "Access-T-Id": t_id,
          "Accept": "*/*",
          "Referer": "https://linping.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": "com.zjonline.linping"
        }
      },
      _0x334c07 = await httpGet(_0x455312, "查中奖记录");
    if (_0x334c07.code == 0) {
      DoubleLog("账号[" + num + "] 查中奖记录:" + _0x334c07.msg);
      recordslist = _0x334c07.data;
      if (recordslist.length > 0) {
        for (let _0x2a0466 = 0; _0x2a0466 < recordslist.length; _0x2a0466++) {
          DoubleLog("账号[" + num + "] 中奖记录:" + recordslist[_0x2a0466].title + ":" + recordslist[_0x2a0466].goods_title + "  中奖时间:" + recordslist[_0x2a0466].created_at);
          recordslist[_0x2a0466].state == 0 && (DoubleLog("账号[" + num + "] " + recordslist[_0x2a0466].title + " 红包未领取？"), cash_data = recordslist[_0x2a0466].cash_data, checkck(ck[0]) ? ck.length >= 3 ? (accesstoken_ = ck[2], DoubleLog("账号[" + num + "] 去提现"), await receive(cash_data.module_id, cash_data.activity_id, cash_data.cash_code, cash_data.cash_sign)) : DoubleLog("账号[" + num + "] 没有提现token吧？抓了再试") : ck.length >= 2 ? (accesstoken_ = ck[1], DoubleLog("账号[" + num + "] 去提现"), await receive(cash_data.module_id, cash_data.activity_id, cash_data.cash_code, cash_data.cash_sign)) : DoubleLog("账号[" + num + "] 没有提现token吧？抓了再试"));
        }
      }
    } else {
      DoubleLog("账号[" + num + "] 查询:失败 ❌ 了呢,原因:" + _0x334c07.message + "!🎉");
      console.log(_0x334c07);
    }
  } catch (_0xe15a91) {
    console.log(_0xe15a91);
  }
}
async function receive(_0x47b896, _0x2d6fd6, _0x17369a, _0x5882cf) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x2e5b4d = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_wxauth_miniprourl?env_version=release&path=%2Fmodule-redpacket%2Fhome%2Fhome&query=module_id%3D" + _0x47b896 + "%26activity_id%3D" + _0x2d6fd6 + "%26cash_code%3D" + _0x17369a + "%26cash_sign%3D" + _0x5882cf + "%26hide_back%3D1&access_t_id=1&access_t_id_in=1",
        "headers": {
          "User-Agent": ua,
          "Referer": "https://yinxiang.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=" + id,
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "keep-alive",
          "Origin": "https://yinxiang.y-h5.iyunxh.com",
          "Sec-Fetch-Dest": "empty",
          "Accept": "*/*",
          "Sec-Fetch-Site": "same-site",
          "Sec-Fetch-Mode": "cors",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "X-Requested-With": requested
        }
      },
      _0x22e574 = await httpGet(_0x2e5b4d, "查中奖记录");
    _0x22e574.code == 0 ? (DoubleLog("账号[" + num + "] app领红包:" + _0x22e574.msg + " 去小程序"), await $.wait(randomInt(4000, 6000)), await user_info(_0x47b896, _0x2d6fd6, _0x17369a, _0x5882cf)) : (DoubleLog("账号[" + num + "] 领红包:失败 ❌ 了呢,原因:" + _0x22e574.msg + "!🎉"), console.log(_0x22e574));
  } catch (_0x20ac39) {
    console.log(_0x20ac39);
  }
}
async function user_info(_0x3de25a, _0x4a39c9, _0x3c9294, _0x337240) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0xae8fd7 = {
        "url": "https://ya.iyunxh.com/api/aosbase/user_info?access_token=" + accesstoken_,
        "headers": {
          "Host": "ya.iyunxh.com",
          "Connection": "keep-alive",
          "access-t-id-in": "1",
          "charset": "utf-8",
          "access-api-unique-token": "1",
          "access-t-id": "1",
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231105 MMWEBID/9641 MicroMessenger/8.0.44.2502(0x28002C51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
          "access-user-id": "0",
          "access-wxclient-type": "wx_minipro",
          "content-type": "application/json",
          "access-token": accesstoken_,
          "Accept-Encoding": "gzip,compress,br,deflate",
          "Referer": "https://servicewechat.com/wx57d3a2086852ddcd/12/page-frame.html"
        }
      },
      _0x47c5fd = await httpGet(_0xae8fd7, "查红包");
    _0x47c5fd.code == 0 ? (DoubleLog("账号[" + num + "] user_id:" + _0x47c5fd.data.user_id), await $.wait(randomInt(4000, 6000)), await cash_detail(_0x3de25a, _0x4a39c9, _0x3c9294, _0x337240, _0x47c5fd.data.user_id)) : (DoubleLog("账号[" + num + "] 查询:失败 ❌ 了呢,原因:" + _0x47c5fd.message + "!🎉"), console.log(_0x47c5fd));
  } catch (_0x1e6b4a) {
    console.log(_0x1e6b4a);
  }
}
async function cash_detail(_0x46e676, _0x31b4a8, _0x2105b8, _0xbca318, _0x3f5128) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x64db = {
        "url": "https://ya.iyunxh.com/api/aosbasemodule/cash_detail?module_id=" + _0x46e676 + "&activity_id=" + _0x31b4a8 + "&cash_code=" + _0x2105b8 + "&cash_sign=" + _0xbca318,
        "headers": {
          "Host": "ya.iyunxh.com",
          "Connection": "keep-alive",
          "access-t-id-in": "1",
          "charset": "utf-8",
          "access-api-unique-token": "1",
          "access-t-id": "1",
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20230805 MMWEBID/5881 MicroMessenger/8.0.42.2460(0x28002A58) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
          "access-user-id": _0x3f5128,
          "access-wxclient-type": "wx_minipro",
          "content-type": "application/json",
          "access-token": accesstoken_,
          "Accept-Encoding": "gzip,compress,br,deflate",
          "Referer": "https://servicewechat.com/wx57d3a2086852ddcd/12/page-frame.html"
        }
      },
      _0x3af2af = await httpGet(_0x64db, "查红包");
    _0x3af2af.code == 0 ? (await $.wait(randomInt(4000, 6000)), await withdraw(_0x46e676, _0x31b4a8, _0x2105b8, _0xbca318, _0x3f5128)) : (DoubleLog("账号[" + num + "] 查询:失败 ❌ 了呢,原因:" + _0x3af2af.message + "!🎉"), console.log(_0x3af2af));
  } catch (_0x4fed86) {
    console.log(_0x4fed86);
  }
}
async function withdraw(_0x4238b1, _0x2e2fa2, _0x149966, _0x5c8664, _0x3ac706) {
  requID = RandeCode();
  ts = +new Date();
  tt = ts10();
  r = randomString(32);
  n = randomString(6);
  m = getAASkey(i);
  d = MD5(t + r + ts + m).toString();
  signature = [t, r, ts, d].join(";");
  try {
    let _0x216ecf = {
        "url": "https://ya.iyunxh.com/api/aosbasemodule/cash_send?module_id=" + _0x4238b1 + "&activity_id=" + _0x2e2fa2 + "&cash_code=" + _0x149966 + "&cash_sign=" + _0x5c8664,
        "headers": {
          "Host": "ya.iyunxh.com",
          "Connection": "keep-alive",
          "access-t-id-in": "1",
          "charset": "utf-8",
          "access-api-unique-token": "1",
          "access-t-id": "1",
          "User-Agent": "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20230805 MMWEBID/5881 MicroMessenger/8.0.42.2460(0x28002A58) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
          "access-user-id": _0x3ac706,
          "access-wxclient-type": "wx_minipro",
          "content-type": "application/json",
          "access-token": accesstoken_,
          "Accept-Encoding": "gzip,compress,br,deflate",
          "Referer": "https://servicewechat.com/wx57d3a2086852ddcd/12/page-frame.html"
        }
      },
      _0xdc3dd9 = await httpGet(_0x216ecf, "提现");
    console.log(_0xdc3dd9);
    if (_0xdc3dd9.code == 0) DoubleLog("账号[" + num + "] 提现:" + _0xdc3dd9.msg);else {
      DoubleLog("账号[" + num + "] 提现:失败 ❌ 了呢,原因:" + _0xdc3dd9.msg + "!🎉");
      console.log(_0xdc3dd9);
    }
  } catch (_0x18bd40) {
    console.log(_0x18bd40);
  }
}
async function Envs() {
  if (ckStr) {
    if (ckStr.indexOf(envSplitor[0]) != -1) ckStr.split(envSplitor[0]).forEach(_0x31fac5 => {
      ckStrArr.push(_0x31fac5);
    });else ckStr.indexOf(envSplitor[1]) != -1 ? ckStr.split(envSplitor[1]).forEach(_0x27871c => {
      ckStrArr.push(_0x27871c);
    }) : ckStrArr.push(ckStr);
  } else {
    log("\n 【" + $.name + "】：未填写变量 " + ckName);
    return;
  }
  return true;
}
async function RSA_Encrypt(_0x43f9a0) {
  const _0x58e520 = new NodeRSA(publicKeyStr);
  _0x58e520.setOptions({
    "encryptionScheme": "pkcs1"
  });
  let _0x5d126e = _0x58e520.encrypt(_0x43f9a0, "base64", "utf8");
  return rsaCode = _0x5d126e, _0x5d126e;
}
var AESkey = CryptoJS.enc.Utf8.parse("7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG"),
  AESiv = CryptoJS.enc.Utf8.parse("8RsVKSCH8mQ4l7cu");
function AES_Encrypt(_0x1f75d7) {
  var _0x31795c = CryptoJS.enc.Utf8.parse(_0x1f75d7),
    _0x51a822 = CryptoJS.AES.encrypt(_0x31795c, AESkey, {
      "iv": AESiv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x51a822.toString();
}
function AES_Decrypt(_0x8a4bd7) {
  var _0x4890dd = _0x8a4bd7,
    _0x3f584d = CryptoJS.AES.decrypt(_0x4890dd, AESkey, {
      "iv": AESiv,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x3f584d.toString(CryptoJS.enc.Utf8);
}
function randomString(_0xd73108) {
  for (var _0x27bc83 = _0xd73108 > 0 && void 0 !== _0xd73108 ? _0xd73108 : 21, _0x5c27cd = ""; _0x5c27cd.length < _0x27bc83;) _0x5c27cd += Math.random().toString(36).slice(2);
  return _0x5c27cd.slice(0, _0x27bc83);
}
function randomInt(_0x1792cf, _0x3024bb) {
  return Math.round(Math.random() * (_0x3024bb - _0x1792cf) + _0x1792cf);
}
function getRandomInt(_0x158238) {
  let _0x4efd3f = Math.random() * Math.pow(10, _0x158238),
    _0x1a0e66 = Math.floor(_0x4efd3f).toString();
  return _0x1a0e66.padStart(_0x158238, "0");
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function local_hours() {
  let _0xf4ca88 = new Date(),
    _0x1fe532 = _0xf4ca88.getHours();
  return _0x1fe532;
}
function local_minutes() {
  let _0x117f95 = new Date(),
    _0x1bdb36 = _0x117f95.getMinutes();
  return _0x1bdb36;
}
function local_Seconds() {
  let _0x235629 = new Date(),
    _0x1cb086 = _0x235629.getSeconds();
  return _0x1cb086;
}
function local_UTCMilliseconds() {
  let _0x2d8c3a = new Date(),
    _0x232fb7 = _0x2d8c3a.getUTCMilliseconds();
  return _0x232fb7;
}
function local_year() {
  let _0x1add49 = new Date();
  return y = _0x1add49.getFullYear(), y;
}
function local_month() {
  let _0x1c0dce = new Date(),
    _0x3a819e = _0x1c0dce.getMonth() + 1;
  return _0x3a819e;
}
function local_month_two() {
  let _0x13a9a8 = new Date(),
    _0x1c4f36 = _0x13a9a8.getMonth() + 1;
  return _0x1c4f36.toString().length == 1 && (_0x1c4f36 = "0" + _0x1c4f36), _0x1c4f36;
}
function local_day() {
  let _0xc28612 = new Date(),
    _0x380e2f = _0xc28612.getDate();
  return _0x380e2f;
}
function local_day_two() {
  let _0x3bbddf = new Date(),
    _0x3886e6 = _0x3bbddf.getDate();
  return _0x3886e6.toString().length == 1 && (_0x3886e6 = "0" + _0x3886e6), _0x3886e6;
}
function local_day3() {
  let _0x15d51a = new Date(),
    _0x2d30bb = _0x15d51a.getDay();
  return _0x2d30bb;
}
function RandeCode() {
  var _0x3d0055 = new Date().getTime(),
    _0x14fc68 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x2550e4) {
      var _0x18b515 = (_0x3d0055 + Math.random() * 16) % 16 | 0;
      return _0x3d0055 = Math.floor(_0x3d0055 / 16), (_0x2550e4 == "x" ? _0x18b515 : _0x18b515 & 3 | 8).toString(16);
    });
  return _0x14fc68;
}
function debugLog(..._0xa0cc2a) {
  debug && console.log(..._0xa0cc2a);
}
var MD5 = function (_0x4757a2) {
  function _0x2c854f(_0x5b2f61, _0x2105f2) {
    return _0x5b2f61 << _0x2105f2 | _0x5b2f61 >>> 32 - _0x2105f2;
  }
  function _0x3c2bab(_0x4ae5a1, _0x135c4e) {
    var _0x214abc, _0x89862c, _0x2c53a4, _0x29f2bd, _0x77977;
    _0x2c53a4 = _0x4ae5a1 & 2147483648;
    _0x29f2bd = _0x135c4e & 2147483648;
    _0x214abc = _0x4ae5a1 & 1073741824;
    _0x89862c = _0x135c4e & 1073741824;
    _0x77977 = (_0x4ae5a1 & 1073741823) + (_0x135c4e & 1073741823);
    if (_0x214abc & _0x89862c) return _0x77977 ^ 2147483648 ^ _0x2c53a4 ^ _0x29f2bd;
    if (_0x214abc | _0x89862c) {
      if (_0x77977 & 1073741824) return _0x77977 ^ 3221225472 ^ _0x2c53a4 ^ _0x29f2bd;else {
        return _0x77977 ^ 1073741824 ^ _0x2c53a4 ^ _0x29f2bd;
      }
    } else {
      return _0x77977 ^ _0x2c53a4 ^ _0x29f2bd;
    }
  }
  function _0x39c046(_0x2470f3, _0x132cb1, _0xe0ab04) {
    return _0x2470f3 & _0x132cb1 | ~_0x2470f3 & _0xe0ab04;
  }
  function _0x2b88e7(_0x5c0b7a, _0x5927cb, _0x176ada) {
    return _0x5c0b7a & _0x176ada | _0x5927cb & ~_0x176ada;
  }
  function _0x4940e8(_0x3c27e8, _0x5b5935, _0x1f1a24) {
    return _0x3c27e8 ^ _0x5b5935 ^ _0x1f1a24;
  }
  function _0x5ad30f(_0x230c48, _0x15e663, _0x2e8e7d) {
    return _0x15e663 ^ (_0x230c48 | ~_0x2e8e7d);
  }
  function _0x5c252d(_0xe0583c, _0x5c33e6, _0x1c519f, _0x205fba, _0x132035, _0x24f141, _0x4e7121) {
    return _0xe0583c = _0x3c2bab(_0xe0583c, _0x3c2bab(_0x3c2bab(_0x39c046(_0x5c33e6, _0x1c519f, _0x205fba), _0x132035), _0x4e7121)), _0x3c2bab(_0x2c854f(_0xe0583c, _0x24f141), _0x5c33e6);
  }
  function _0x4e2b29(_0x4002ae, _0x447ea4, _0x31bd06, _0x42745f, _0x4c6de1, _0x20cb8e, _0x3a1bee) {
    return _0x4002ae = _0x3c2bab(_0x4002ae, _0x3c2bab(_0x3c2bab(_0x2b88e7(_0x447ea4, _0x31bd06, _0x42745f), _0x4c6de1), _0x3a1bee)), _0x3c2bab(_0x2c854f(_0x4002ae, _0x20cb8e), _0x447ea4);
  }
  function _0xbbea(_0x10ad63, _0x5d327d, _0x584db8, _0x3863a2, _0x12544b, _0xa04f21, _0x537379) {
    return _0x10ad63 = _0x3c2bab(_0x10ad63, _0x3c2bab(_0x3c2bab(_0x4940e8(_0x5d327d, _0x584db8, _0x3863a2), _0x12544b), _0x537379)), _0x3c2bab(_0x2c854f(_0x10ad63, _0xa04f21), _0x5d327d);
  }
  function _0x25b97d(_0x51fe3d, _0xf31587, _0x3160d0, _0x49ad22, _0x1b3cdf, _0x4115d7, _0x3ae84c) {
    return _0x51fe3d = _0x3c2bab(_0x51fe3d, _0x3c2bab(_0x3c2bab(_0x5ad30f(_0xf31587, _0x3160d0, _0x49ad22), _0x1b3cdf), _0x3ae84c)), _0x3c2bab(_0x2c854f(_0x51fe3d, _0x4115d7), _0xf31587);
  }
  function _0x53d8da(_0x40ac5a) {
    var _0x1db931,
      _0x1ee3a5 = _0x40ac5a.length,
      _0x513a7f = _0x1ee3a5 + 8,
      _0x353f21 = (_0x513a7f - _0x513a7f % 64) / 64,
      _0x3b73bf = (_0x353f21 + 1) * 16,
      _0x31c048 = Array(_0x3b73bf - 1),
      _0x1ddf79 = 0,
      _0xe6e653 = 0;
    while (_0xe6e653 < _0x1ee3a5) {
      _0x1db931 = (_0xe6e653 - _0xe6e653 % 4) / 4;
      _0x1ddf79 = _0xe6e653 % 4 * 8;
      _0x31c048[_0x1db931] = _0x31c048[_0x1db931] | _0x40ac5a.charCodeAt(_0xe6e653) << _0x1ddf79;
      _0xe6e653++;
    }
    return _0x1db931 = (_0xe6e653 - _0xe6e653 % 4) / 4, _0x1ddf79 = _0xe6e653 % 4 * 8, _0x31c048[_0x1db931] = _0x31c048[_0x1db931] | 128 << _0x1ddf79, _0x31c048[_0x3b73bf - 2] = _0x1ee3a5 << 3, _0x31c048[_0x3b73bf - 1] = _0x1ee3a5 >>> 29, _0x31c048;
  }
  function _0x11be64(_0x2917ce) {
    var _0x5e6051 = "",
      _0x578a12 = "",
      _0x2b1f8c,
      _0x49e2b4;
    for (_0x49e2b4 = 0; _0x49e2b4 <= 3; _0x49e2b4++) {
      _0x2b1f8c = _0x2917ce >>> _0x49e2b4 * 8 & 255;
      _0x578a12 = "0" + _0x2b1f8c.toString(16);
      _0x5e6051 = _0x5e6051 + _0x578a12.substr(_0x578a12.length - 2, 2);
    }
    return _0x5e6051;
  }
  function _0x10398a(_0xc35d39) {
    _0xc35d39 = _0xc35d39.replace(/\r\n/g, "\n");
    var _0x35632d = "";
    for (var _0xfceb63 = 0; _0xfceb63 < _0xc35d39.length; _0xfceb63++) {
      var _0x500b63 = _0xc35d39.charCodeAt(_0xfceb63);
      if (_0x500b63 < 128) {
        _0x35632d += String.fromCharCode(_0x500b63);
      } else _0x500b63 > 127 && _0x500b63 < 2048 ? (_0x35632d += String.fromCharCode(_0x500b63 >> 6 | 192), _0x35632d += String.fromCharCode(_0x500b63 & 63 | 128)) : (_0x35632d += String.fromCharCode(_0x500b63 >> 12 | 224), _0x35632d += String.fromCharCode(_0x500b63 >> 6 & 63 | 128), _0x35632d += String.fromCharCode(_0x500b63 & 63 | 128));
    }
    return _0x35632d;
  }
  var _0x402bdb = Array(),
    _0x2000a5,
    _0x52b92a,
    _0x492c5d,
    _0x50ac65,
    _0x2527f9,
    _0x864f03,
    _0x5e6aa1,
    _0x2c7ac7,
    _0x15be6a,
    _0x364212 = 7,
    _0x50d74d = 12,
    _0x4a3993 = 17,
    _0x201aba = 22,
    _0x190318 = 5,
    _0x660028 = 9,
    _0x188ecd = 14,
    _0x1af662 = 20,
    _0x2c8d50 = 4,
    _0x3ddddc = 11,
    _0x134264 = 16,
    _0x254b9a = 23,
    _0x34bd76 = 6,
    _0x3733df = 10,
    _0x108c3e = 15,
    _0x4cac1b = 21;
  _0x4757a2 = _0x10398a(_0x4757a2);
  _0x402bdb = _0x53d8da(_0x4757a2);
  _0x864f03 = 1732584193;
  _0x5e6aa1 = 4023233417;
  _0x2c7ac7 = 2562383102;
  _0x15be6a = 271733878;
  for (_0x2000a5 = 0; _0x2000a5 < _0x402bdb.length; _0x2000a5 += 16) {
    _0x52b92a = _0x864f03;
    _0x492c5d = _0x5e6aa1;
    _0x50ac65 = _0x2c7ac7;
    _0x2527f9 = _0x15be6a;
    _0x864f03 = _0x5c252d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 0], _0x364212, 3614090360);
    _0x15be6a = _0x5c252d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 1], _0x50d74d, 3905402710);
    _0x2c7ac7 = _0x5c252d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 2], _0x4a3993, 606105819);
    _0x5e6aa1 = _0x5c252d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 3], _0x201aba, 3250441966);
    _0x864f03 = _0x5c252d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 4], _0x364212, 4118548399);
    _0x15be6a = _0x5c252d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 5], _0x50d74d, 1200080426);
    _0x2c7ac7 = _0x5c252d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 6], _0x4a3993, 2821735955);
    _0x5e6aa1 = _0x5c252d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 7], _0x201aba, 4249261313);
    _0x864f03 = _0x5c252d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 8], _0x364212, 1770035416);
    _0x15be6a = _0x5c252d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 9], _0x50d74d, 2336552879);
    _0x2c7ac7 = _0x5c252d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 10], _0x4a3993, 4294925233);
    _0x5e6aa1 = _0x5c252d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 11], _0x201aba, 2304563134);
    _0x864f03 = _0x5c252d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 12], _0x364212, 1804603682);
    _0x15be6a = _0x5c252d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 13], _0x50d74d, 4254626195);
    _0x2c7ac7 = _0x5c252d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 14], _0x4a3993, 2792965006);
    _0x5e6aa1 = _0x5c252d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 15], _0x201aba, 1236535329);
    _0x864f03 = _0x4e2b29(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 1], _0x190318, 4129170786);
    _0x15be6a = _0x4e2b29(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 6], _0x660028, 3225465664);
    _0x2c7ac7 = _0x4e2b29(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 11], _0x188ecd, 643717713);
    _0x5e6aa1 = _0x4e2b29(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 0], _0x1af662, 3921069994);
    _0x864f03 = _0x4e2b29(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 5], _0x190318, 3593408605);
    _0x15be6a = _0x4e2b29(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 10], _0x660028, 38016083);
    _0x2c7ac7 = _0x4e2b29(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 15], _0x188ecd, 3634488961);
    _0x5e6aa1 = _0x4e2b29(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 4], _0x1af662, 3889429448);
    _0x864f03 = _0x4e2b29(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 9], _0x190318, 568446438);
    _0x15be6a = _0x4e2b29(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 14], _0x660028, 3275163606);
    _0x2c7ac7 = _0x4e2b29(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 3], _0x188ecd, 4107603335);
    _0x5e6aa1 = _0x4e2b29(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 8], _0x1af662, 1163531501);
    _0x864f03 = _0x4e2b29(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 13], _0x190318, 2850285829);
    _0x15be6a = _0x4e2b29(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 2], _0x660028, 4243563512);
    _0x2c7ac7 = _0x4e2b29(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 7], _0x188ecd, 1735328473);
    _0x5e6aa1 = _0x4e2b29(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 12], _0x1af662, 2368359562);
    _0x864f03 = _0xbbea(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 5], _0x2c8d50, 4294588738);
    _0x15be6a = _0xbbea(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 8], _0x3ddddc, 2272392833);
    _0x2c7ac7 = _0xbbea(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 11], _0x134264, 1839030562);
    _0x5e6aa1 = _0xbbea(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 14], _0x254b9a, 4259657740);
    _0x864f03 = _0xbbea(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 1], _0x2c8d50, 2763975236);
    _0x15be6a = _0xbbea(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 4], _0x3ddddc, 1272893353);
    _0x2c7ac7 = _0xbbea(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 7], _0x134264, 4139469664);
    _0x5e6aa1 = _0xbbea(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 10], _0x254b9a, 3200236656);
    _0x864f03 = _0xbbea(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 13], _0x2c8d50, 681279174);
    _0x15be6a = _0xbbea(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 0], _0x3ddddc, 3936430074);
    _0x2c7ac7 = _0xbbea(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 3], _0x134264, 3572445317);
    _0x5e6aa1 = _0xbbea(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 6], _0x254b9a, 76029189);
    _0x864f03 = _0xbbea(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 9], _0x2c8d50, 3654602809);
    _0x15be6a = _0xbbea(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 12], _0x3ddddc, 3873151461);
    _0x2c7ac7 = _0xbbea(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 15], _0x134264, 530742520);
    _0x5e6aa1 = _0xbbea(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 2], _0x254b9a, 3299628645);
    _0x864f03 = _0x25b97d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 0], _0x34bd76, 4096336452);
    _0x15be6a = _0x25b97d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 7], _0x3733df, 1126891415);
    _0x2c7ac7 = _0x25b97d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 14], _0x108c3e, 2878612391);
    _0x5e6aa1 = _0x25b97d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 5], _0x4cac1b, 4237533241);
    _0x864f03 = _0x25b97d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 12], _0x34bd76, 1700485571);
    _0x15be6a = _0x25b97d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 3], _0x3733df, 2399980690);
    _0x2c7ac7 = _0x25b97d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 10], _0x108c3e, 4293915773);
    _0x5e6aa1 = _0x25b97d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 1], _0x4cac1b, 2240044497);
    _0x864f03 = _0x25b97d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 8], _0x34bd76, 1873313359);
    _0x15be6a = _0x25b97d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 15], _0x3733df, 4264355552);
    _0x2c7ac7 = _0x25b97d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 6], _0x108c3e, 2734768916);
    _0x5e6aa1 = _0x25b97d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 13], _0x4cac1b, 1309151649);
    _0x864f03 = _0x25b97d(_0x864f03, _0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x402bdb[_0x2000a5 + 4], _0x34bd76, 4149444226);
    _0x15be6a = _0x25b97d(_0x15be6a, _0x864f03, _0x5e6aa1, _0x2c7ac7, _0x402bdb[_0x2000a5 + 11], _0x3733df, 3174756917);
    _0x2c7ac7 = _0x25b97d(_0x2c7ac7, _0x15be6a, _0x864f03, _0x5e6aa1, _0x402bdb[_0x2000a5 + 2], _0x108c3e, 718787259);
    _0x5e6aa1 = _0x25b97d(_0x5e6aa1, _0x2c7ac7, _0x15be6a, _0x864f03, _0x402bdb[_0x2000a5 + 9], _0x4cac1b, 3951481745);
    _0x864f03 = _0x3c2bab(_0x864f03, _0x52b92a);
    _0x5e6aa1 = _0x3c2bab(_0x5e6aa1, _0x492c5d);
    _0x2c7ac7 = _0x3c2bab(_0x2c7ac7, _0x50ac65);
    _0x15be6a = _0x3c2bab(_0x15be6a, _0x2527f9);
  }
  var _0x4cedd1 = _0x11be64(_0x864f03) + _0x11be64(_0x5e6aa1) + _0x11be64(_0x2c7ac7) + _0x11be64(_0x15be6a);
  return _0x4cedd1.toLowerCase();
};
function MD5Encrypt(_0x349ca2) {
  function _0x1c64b2(_0x1c4e24, _0x54fc4b) {
    return _0x1c4e24 << _0x54fc4b | _0x1c4e24 >>> 32 - _0x54fc4b;
  }
  function _0x197392(_0x13976a, _0x88802c) {
    var _0x5bc185, _0x53a7e7, _0x848762, _0x52ed1e, _0x507d7e;
    return _0x848762 = 2147483648 & _0x13976a, _0x52ed1e = 2147483648 & _0x88802c, _0x5bc185 = 1073741824 & _0x13976a, _0x53a7e7 = 1073741824 & _0x88802c, _0x507d7e = (1073741823 & _0x13976a) + (1073741823 & _0x88802c), _0x5bc185 & _0x53a7e7 ? 2147483648 ^ _0x507d7e ^ _0x848762 ^ _0x52ed1e : _0x5bc185 | _0x53a7e7 ? 1073741824 & _0x507d7e ? 3221225472 ^ _0x507d7e ^ _0x848762 ^ _0x52ed1e : 1073741824 ^ _0x507d7e ^ _0x848762 ^ _0x52ed1e : _0x507d7e ^ _0x848762 ^ _0x52ed1e;
  }
  function _0x202b43(_0x41a613, _0x41b566, _0x1b42be) {
    return _0x41a613 & _0x41b566 | ~_0x41a613 & _0x1b42be;
  }
  function _0x330061(_0x34e083, _0x41298c, _0x13ce90) {
    return _0x34e083 & _0x13ce90 | _0x41298c & ~_0x13ce90;
  }
  function _0x404bf0(_0x2eb8a3, _0x1f3bb7, _0x1a12a0) {
    return _0x2eb8a3 ^ _0x1f3bb7 ^ _0x1a12a0;
  }
  function _0x1b24c8(_0x11f98c, _0x46ab74, _0x2e87e6) {
    return _0x46ab74 ^ (_0x11f98c | ~_0x2e87e6);
  }
  function _0x59ce56(_0x7e6efc, _0xf8803b, _0x324b1b, _0x1fe62e, _0x5c1bc4, _0x5e0152, _0x2dfe56) {
    return _0x7e6efc = _0x197392(_0x7e6efc, _0x197392(_0x197392(_0x202b43(_0xf8803b, _0x324b1b, _0x1fe62e), _0x5c1bc4), _0x2dfe56)), _0x197392(_0x1c64b2(_0x7e6efc, _0x5e0152), _0xf8803b);
  }
  function _0x5609b8(_0x1daae8, _0x18b56a, _0x162719, _0x1ec754, _0xa2ba70, _0x225d18, _0x2bf5e2) {
    return _0x1daae8 = _0x197392(_0x1daae8, _0x197392(_0x197392(_0x330061(_0x18b56a, _0x162719, _0x1ec754), _0xa2ba70), _0x2bf5e2)), _0x197392(_0x1c64b2(_0x1daae8, _0x225d18), _0x18b56a);
  }
  function _0xaa46b4(_0x12e506, _0x1ea226, _0x449344, _0x26d3d7, _0x3c3965, _0x571755, _0x29d413) {
    return _0x12e506 = _0x197392(_0x12e506, _0x197392(_0x197392(_0x404bf0(_0x1ea226, _0x449344, _0x26d3d7), _0x3c3965), _0x29d413)), _0x197392(_0x1c64b2(_0x12e506, _0x571755), _0x1ea226);
  }
  function _0x24861a(_0x57d64c, _0x5f409a, _0x38a25c, _0xdca681, _0x55ff5b, _0x102baf, _0x1de701) {
    return _0x57d64c = _0x197392(_0x57d64c, _0x197392(_0x197392(_0x1b24c8(_0x5f409a, _0x38a25c, _0xdca681), _0x55ff5b), _0x1de701)), _0x197392(_0x1c64b2(_0x57d64c, _0x102baf), _0x5f409a);
  }
  function _0x2fde9b(_0x358c17) {
    for (var _0x528176, _0x2e42fd = _0x358c17.length, _0x2c3bd8 = _0x2e42fd + 8, _0x39702e = (_0x2c3bd8 - _0x2c3bd8 % 64) / 64, _0x5c8646 = 16 * (_0x39702e + 1), _0x30dada = new Array(_0x5c8646 - 1), _0x282a93 = 0, _0x3c7384 = 0; _0x2e42fd > _0x3c7384;) _0x528176 = (_0x3c7384 - _0x3c7384 % 4) / 4, _0x282a93 = _0x3c7384 % 4 * 8, _0x30dada[_0x528176] = _0x30dada[_0x528176] | _0x358c17.charCodeAt(_0x3c7384) << _0x282a93, _0x3c7384++;
    return _0x528176 = (_0x3c7384 - _0x3c7384 % 4) / 4, _0x282a93 = _0x3c7384 % 4 * 8, _0x30dada[_0x528176] = _0x30dada[_0x528176] | 128 << _0x282a93, _0x30dada[_0x5c8646 - 2] = _0x2e42fd << 3, _0x30dada[_0x5c8646 - 1] = _0x2e42fd >>> 29, _0x30dada;
  }
  function _0xe53661(_0x41b77a) {
    var _0x52ab13,
      _0x2e0f93,
      _0x39e39f = "",
      _0x4c6d3a = "";
    for (_0x2e0f93 = 0; 3 >= _0x2e0f93; _0x2e0f93++) _0x52ab13 = _0x41b77a >>> 8 * _0x2e0f93 & 255, _0x4c6d3a = "0" + _0x52ab13.toString(16), _0x39e39f += _0x4c6d3a.substr(_0x4c6d3a.length - 2, 2);
    return _0x39e39f;
  }
  function _0x333af8(_0x53743f) {
    _0x53743f = _0x53743f.replace(/\r\n/g, "\n");
    for (var _0x260669 = "", _0x209508 = 0; _0x209508 < _0x53743f.length; _0x209508++) {
      var _0x479639 = _0x53743f.charCodeAt(_0x209508);
      128 > _0x479639 ? _0x260669 += String.fromCharCode(_0x479639) : _0x479639 > 127 && 2048 > _0x479639 ? (_0x260669 += String.fromCharCode(_0x479639 >> 6 | 192), _0x260669 += String.fromCharCode(63 & _0x479639 | 128)) : (_0x260669 += String.fromCharCode(_0x479639 >> 12 | 224), _0x260669 += String.fromCharCode(_0x479639 >> 6 & 63 | 128), _0x260669 += String.fromCharCode(63 & _0x479639 | 128));
    }
    return _0x260669;
  }
  var _0x54ccfd,
    _0x344662,
    _0x125f30,
    _0xfec810,
    _0x596097,
    _0x5a3769,
    _0x1a277f,
    _0x2068ef,
    _0x1d7b6e,
    _0x3be388 = [],
    _0x346fd1 = 7,
    _0x221496 = 12,
    _0x5419a5 = 17,
    _0xf77706 = 22,
    _0x3a4a21 = 5,
    _0x3be7b0 = 9,
    _0x1b3c7d = 14,
    _0x460eec = 20,
    _0x3fca47 = 4,
    _0x331e5e = 11,
    _0x4d2991 = 16,
    _0x2079eb = 23,
    _0x4bf985 = 6,
    _0x287ced = 10,
    _0x46833a = 15,
    _0x58496a = 21;
  for (_0x349ca2 = _0x333af8(_0x349ca2), _0x3be388 = _0x2fde9b(_0x349ca2), _0x5a3769 = 1732584193, _0x1a277f = 4023233417, _0x2068ef = 2562383102, _0x1d7b6e = 271733878, _0x54ccfd = 0; _0x54ccfd < _0x3be388.length; _0x54ccfd += 16) _0x344662 = _0x5a3769, _0x125f30 = _0x1a277f, _0xfec810 = _0x2068ef, _0x596097 = _0x1d7b6e, _0x5a3769 = _0x59ce56(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 0], _0x346fd1, 3614090360), _0x1d7b6e = _0x59ce56(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 1], _0x221496, 3905402710), _0x2068ef = _0x59ce56(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 2], _0x5419a5, 606105819), _0x1a277f = _0x59ce56(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 3], _0xf77706, 3250441966), _0x5a3769 = _0x59ce56(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 4], _0x346fd1, 4118548399), _0x1d7b6e = _0x59ce56(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 5], _0x221496, 1200080426), _0x2068ef = _0x59ce56(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 6], _0x5419a5, 2821735955), _0x1a277f = _0x59ce56(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 7], _0xf77706, 4249261313), _0x5a3769 = _0x59ce56(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 8], _0x346fd1, 1770035416), _0x1d7b6e = _0x59ce56(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 9], _0x221496, 2336552879), _0x2068ef = _0x59ce56(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 10], _0x5419a5, 4294925233), _0x1a277f = _0x59ce56(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 11], _0xf77706, 2304563134), _0x5a3769 = _0x59ce56(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 12], _0x346fd1, 1804603682), _0x1d7b6e = _0x59ce56(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 13], _0x221496, 4254626195), _0x2068ef = _0x59ce56(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 14], _0x5419a5, 2792965006), _0x1a277f = _0x59ce56(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 15], _0xf77706, 1236535329), _0x5a3769 = _0x5609b8(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 1], _0x3a4a21, 4129170786), _0x1d7b6e = _0x5609b8(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 6], _0x3be7b0, 3225465664), _0x2068ef = _0x5609b8(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 11], _0x1b3c7d, 643717713), _0x1a277f = _0x5609b8(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 0], _0x460eec, 3921069994), _0x5a3769 = _0x5609b8(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 5], _0x3a4a21, 3593408605), _0x1d7b6e = _0x5609b8(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 10], _0x3be7b0, 38016083), _0x2068ef = _0x5609b8(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 15], _0x1b3c7d, 3634488961), _0x1a277f = _0x5609b8(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 4], _0x460eec, 3889429448), _0x5a3769 = _0x5609b8(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 9], _0x3a4a21, 568446438), _0x1d7b6e = _0x5609b8(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 14], _0x3be7b0, 3275163606), _0x2068ef = _0x5609b8(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 3], _0x1b3c7d, 4107603335), _0x1a277f = _0x5609b8(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 8], _0x460eec, 1163531501), _0x5a3769 = _0x5609b8(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 13], _0x3a4a21, 2850285829), _0x1d7b6e = _0x5609b8(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 2], _0x3be7b0, 4243563512), _0x2068ef = _0x5609b8(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 7], _0x1b3c7d, 1735328473), _0x1a277f = _0x5609b8(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 12], _0x460eec, 2368359562), _0x5a3769 = _0xaa46b4(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 5], _0x3fca47, 4294588738), _0x1d7b6e = _0xaa46b4(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 8], _0x331e5e, 2272392833), _0x2068ef = _0xaa46b4(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 11], _0x4d2991, 1839030562), _0x1a277f = _0xaa46b4(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 14], _0x2079eb, 4259657740), _0x5a3769 = _0xaa46b4(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 1], _0x3fca47, 2763975236), _0x1d7b6e = _0xaa46b4(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 4], _0x331e5e, 1272893353), _0x2068ef = _0xaa46b4(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 7], _0x4d2991, 4139469664), _0x1a277f = _0xaa46b4(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 10], _0x2079eb, 3200236656), _0x5a3769 = _0xaa46b4(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 13], _0x3fca47, 681279174), _0x1d7b6e = _0xaa46b4(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 0], _0x331e5e, 3936430074), _0x2068ef = _0xaa46b4(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 3], _0x4d2991, 3572445317), _0x1a277f = _0xaa46b4(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 6], _0x2079eb, 76029189), _0x5a3769 = _0xaa46b4(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 9], _0x3fca47, 3654602809), _0x1d7b6e = _0xaa46b4(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 12], _0x331e5e, 3873151461), _0x2068ef = _0xaa46b4(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 15], _0x4d2991, 530742520), _0x1a277f = _0xaa46b4(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 2], _0x2079eb, 3299628645), _0x5a3769 = _0x24861a(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 0], _0x4bf985, 4096336452), _0x1d7b6e = _0x24861a(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 7], _0x287ced, 1126891415), _0x2068ef = _0x24861a(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 14], _0x46833a, 2878612391), _0x1a277f = _0x24861a(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 5], _0x58496a, 4237533241), _0x5a3769 = _0x24861a(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 12], _0x4bf985, 1700485571), _0x1d7b6e = _0x24861a(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 3], _0x287ced, 2399980690), _0x2068ef = _0x24861a(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 10], _0x46833a, 4293915773), _0x1a277f = _0x24861a(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 1], _0x58496a, 2240044497), _0x5a3769 = _0x24861a(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 8], _0x4bf985, 1873313359), _0x1d7b6e = _0x24861a(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 15], _0x287ced, 4264355552), _0x2068ef = _0x24861a(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 6], _0x46833a, 2734768916), _0x1a277f = _0x24861a(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 13], _0x58496a, 1309151649), _0x5a3769 = _0x24861a(_0x5a3769, _0x1a277f, _0x2068ef, _0x1d7b6e, _0x3be388[_0x54ccfd + 4], _0x4bf985, 4149444226), _0x1d7b6e = _0x24861a(_0x1d7b6e, _0x5a3769, _0x1a277f, _0x2068ef, _0x3be388[_0x54ccfd + 11], _0x287ced, 3174756917), _0x2068ef = _0x24861a(_0x2068ef, _0x1d7b6e, _0x5a3769, _0x1a277f, _0x3be388[_0x54ccfd + 2], _0x46833a, 718787259), _0x1a277f = _0x24861a(_0x1a277f, _0x2068ef, _0x1d7b6e, _0x5a3769, _0x3be388[_0x54ccfd + 9], _0x58496a, 3951481745), _0x5a3769 = _0x197392(_0x5a3769, _0x344662), _0x1a277f = _0x197392(_0x1a277f, _0x125f30), _0x2068ef = _0x197392(_0x2068ef, _0xfec810), _0x1d7b6e = _0x197392(_0x1d7b6e, _0x596097);
  var _0x26e514 = _0xe53661(_0x5a3769) + _0xe53661(_0x1a277f) + _0xe53661(_0x2068ef) + _0xe53661(_0x1d7b6e);
  return _0x26e514.toLowerCase();
}
async function SendMsg(_0x56810c) {
  if (!_0x56810c) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0xc73e59 = require("./sendNotify");
      await _0xc73e59.sendNotify($.name, _0x56810c);
    } else {
      $.msg(_0x56810c);
    }
  } else log(_0x56810c);
}
function addNotifyStr(_0x1bec2d, _0x3770fa = true) {
  _0x3770fa && log("\n" + _0x1bec2d);
  msg += "\n" + _0x1bec2d;
}
function DoubleLog(_0x401b49) {
  $.isNode() ? _0x401b49 && (console.log("" + _0x401b49), msg += "\n" + _0x401b49) : (console.log("" + _0x401b49), msg += "\n" + _0x401b49);
}
async function httpPost(_0x593b90, _0x488dcf, _0x2c7618 = 5 * 1000) {
  return new Promise((_0x46c904, _0x4fe843) => {
    let _0x4249e6 = _0x593b90;
    if (!_0x488dcf) {
      _0x488dcf = this.constructor.name;
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x488dcf + " 请求 url ==============="), console.log(_0x4249e6));
    $.post(_0x4249e6, async (_0x59f1e6, _0x5f3a4c, _0x10b35c) => {
      try {
        if (_0x5f3a4c.status === 302) {
          debug && (console.log("\n 【debug】=========== 这是 " + _0x488dcf + " 302 请求头部数据 ========="), console.log(_0x10b35c));
          let _0xabba64 = _0x5f3a4c.headers;
          _0x46c904(_0xabba64);
        } else {
          if (_0x5f3a4c.headers["content-type"].includes("text/html")) _0x46c904(_0x10b35c);else {
            let _0x4af643 = JSON.parse(_0x10b35c);
            debug && (console.log("\n 【debug】=============这是 " + _0x488dcf + " json解析后数据============"), console.log(JSON.parse(_0x10b35c)));
            _0x46c904(_0x4af643);
          }
        }
      } catch (_0x16d553) {
        console.log(_0x59f1e6, _0x5f3a4c);
        console.log("\n " + _0x488dcf + " 请求失败！请稍后尝试！");
        _0x4fe843(_0x16d553);
      } finally {}
    }, _0x2c7618);
  });
}
async function httpGet(_0x5c2019, _0x6abb26, _0x4f1cc1 = 5 * 1000) {
  return new Promise((_0x1c6e44, _0x3a9980) => {
    let _0x4d3d0a = _0x5c2019;
    !_0x6abb26 && (_0x6abb26 = this.constructor.name);
    debug && (console.log("\n 【调试】=============== 这是 " + _0x6abb26 + " 请求 url ==============="), console.log(_0x4d3d0a));
    $.get(_0x4d3d0a, async (_0x24a96f, _0x208c80, _0x1a54be) => {
      try {
        if (_0x208c80.status === 302) {
          debug && (console.log("\n 【debug】=========== 这是 " + _0x6abb26 + " 302 请求头部数据 ========="), console.log(_0x1a54be));
          let _0x7a393 = _0x208c80.headers;
          _0x1c6e44(_0x7a393);
        } else {
          if (_0x208c80.headers["content-type"].includes("text/html")) _0x1c6e44(_0x1a54be);else {
            let _0x1db568 = JSON.parse(_0x1a54be);
            debug && (console.log("\n 【debug】=============这是 " + _0x6abb26 + " json解析后数据============"), console.log(JSON.parse(_0x1a54be)));
            _0x1c6e44(_0x1db568);
          }
        }
      } catch (_0x1e339e) {
        console.log(_0x24a96f, _0x208c80);
        console.log("\n " + _0x6abb26 + " 请求失败！请稍后尝试！");
        _0x3a9980(_0x1e339e);
      } finally {}
    }, _0x4f1cc1);
  });
}
function Env(_0x2ba9ae, _0x5e2697) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x381be8 {
    constructor(_0x18f5a9) {
      this.env = _0x18f5a9;
    }
    ["send"](_0x9cb04e, _0x229410 = "GET") {
      _0x9cb04e = "string" == typeof _0x9cb04e ? {
        "url": _0x9cb04e
      } : _0x9cb04e;
      let _0x4bb800 = this.get;
      return "POST" === _0x229410 && (_0x4bb800 = this.post), new Promise((_0x343a36, _0x20f51a) => {
        _0x4bb800.call(this, _0x9cb04e, (_0x39de64, _0x2e0045, _0x30bc45) => {
          _0x39de64 ? _0x20f51a(_0x39de64) : _0x343a36(_0x2e0045);
        });
      });
    }
    ["get"](_0x45d83d) {
      return this.send.call(this.env, _0x45d83d);
    }
    ["post"](_0x2c7685) {
      return this.send.call(this.env, _0x2c7685, "POST");
    }
  }
  return new class {
    constructor(_0xdabf0c, _0x3caa15) {
      this.name = _0xdabf0c;
      this.http = new _0x381be8(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3caa15);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5a6ddb, _0x33ae56 = null) {
      try {
        return JSON.parse(_0x5a6ddb);
      } catch {
        return _0x33ae56;
      }
    }
    ["toStr"](_0x511f65, _0x129898 = null) {
      try {
        return JSON.stringify(_0x511f65);
      } catch {
        return _0x129898;
      }
    }
    ["getjson"](_0x18d2d5, _0xe7b48b) {
      let _0x1cff2b = _0xe7b48b;
      const _0x4d0bcc = this.getdata(_0x18d2d5);
      if (_0x4d0bcc) try {
        _0x1cff2b = JSON.parse(this.getdata(_0x18d2d5));
      } catch {}
      return _0x1cff2b;
    }
    ["setjson"](_0x52681a, _0x2b3e30) {
      try {
        return this.setdata(JSON.stringify(_0x52681a), _0x2b3e30);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x7ab7ed) {
      return new Promise(_0x31f4ca => {
        this.get({
          "url": _0x7ab7ed
        }, (_0x13705a, _0x1a2a57, _0x548032) => _0x31f4ca(_0x548032));
      });
    }
    ["runScript"](_0x388e7a, _0x31a01b) {
      return new Promise(_0x2f46fd => {
        let _0x33c50b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x33c50b = _0x33c50b ? _0x33c50b.replace(/\n/g, "").trim() : _0x33c50b;
        let _0x40395a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x40395a = _0x40395a ? 1 * _0x40395a : 20;
        _0x40395a = _0x31a01b && _0x31a01b.timeout ? _0x31a01b.timeout : _0x40395a;
        const [_0x228aca, _0x52e250] = _0x33c50b.split("@"),
          _0x2bc06d = {
            "url": "http://" + _0x52e250 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x388e7a,
              "mock_type": "cron",
              "timeout": _0x40395a
            },
            "headers": {
              "X-Key": _0x228aca,
              "Accept": "*/*"
            }
          };
        this.post(_0x2bc06d, (_0x543e32, _0x42ee7a, _0x45654c) => _0x2f46fd(_0x45654c));
      }).catch(_0x285fd7 => this.logErr(_0x285fd7));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x19e8d1 = this.path.resolve(this.dataFile),
          _0x3fd12c = this.path.resolve(process.cwd(), this.dataFile),
          _0x3fdc09 = this.fs.existsSync(_0x19e8d1),
          _0x58f58d = !_0x3fdc09 && this.fs.existsSync(_0x3fd12c);
        if (!_0x3fdc09 && !_0x58f58d) return {};
        {
          const _0x334a3b = _0x3fdc09 ? _0x19e8d1 : _0x3fd12c;
          try {
            return JSON.parse(this.fs.readFileSync(_0x334a3b));
          } catch (_0x79085d) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x56152c = this.path.resolve(this.dataFile),
          _0x18df3e = this.path.resolve(process.cwd(), this.dataFile),
          _0x103b9a = this.fs.existsSync(_0x56152c),
          _0x11ac4c = !_0x103b9a && this.fs.existsSync(_0x18df3e),
          _0x3e0e1a = JSON.stringify(this.data);
        _0x103b9a ? this.fs.writeFileSync(_0x56152c, _0x3e0e1a) : _0x11ac4c ? this.fs.writeFileSync(_0x18df3e, _0x3e0e1a) : this.fs.writeFileSync(_0x56152c, _0x3e0e1a);
      }
    }
    ["lodash_get"](_0x28f3eb, _0x4af024, _0x1f0ea0) {
      const _0x5733d9 = _0x4af024.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x19a4d3 = _0x28f3eb;
      for (const _0x24af4c of _0x5733d9) if (_0x19a4d3 = Object(_0x19a4d3)[_0x24af4c], void 0 === _0x19a4d3) return _0x1f0ea0;
      return _0x19a4d3;
    }
    ["lodash_set"](_0x1108df, _0x46350f, _0x238a8d) {
      return Object(_0x1108df) !== _0x1108df ? _0x1108df : (Array.isArray(_0x46350f) || (_0x46350f = _0x46350f.toString().match(/[^.[\]]+/g) || []), _0x46350f.slice(0, -1).reduce((_0x36edce, _0x549291, _0x2f6966) => Object(_0x36edce[_0x549291]) === _0x36edce[_0x549291] ? _0x36edce[_0x549291] : _0x36edce[_0x549291] = Math.abs(_0x46350f[_0x2f6966 + 1]) >> 0 == +_0x46350f[_0x2f6966 + 1] ? [] : {}, _0x1108df)[_0x46350f[_0x46350f.length - 1]] = _0x238a8d, _0x1108df);
    }
    ["getdata"](_0x5268b3) {
      let _0x544ea8 = this.getval(_0x5268b3);
      if (/^@/.test(_0x5268b3)) {
        const [, _0x1e58ed, _0x37afe2] = /^@(.*?)\.(.*?)$/.exec(_0x5268b3),
          _0x5f1207 = _0x1e58ed ? this.getval(_0x1e58ed) : "";
        if (_0x5f1207) try {
          const _0x52aead = JSON.parse(_0x5f1207);
          _0x544ea8 = _0x52aead ? this.lodash_get(_0x52aead, _0x37afe2, "") : _0x544ea8;
        } catch (_0x18e2de) {
          _0x544ea8 = "";
        }
      }
      return _0x544ea8;
    }
    ["setdata"](_0x2cc0f9, _0x551816) {
      let _0x51eff7 = false;
      if (/^@/.test(_0x551816)) {
        const [, _0x126d2e, _0x17a869] = /^@(.*?)\.(.*?)$/.exec(_0x551816),
          _0x19f21e = this.getval(_0x126d2e),
          _0x1178bb = _0x126d2e ? "null" === _0x19f21e ? null : _0x19f21e || "{}" : "{}";
        try {
          const _0x30b99c = JSON.parse(_0x1178bb);
          this.lodash_set(_0x30b99c, _0x17a869, _0x2cc0f9);
          _0x51eff7 = this.setval(JSON.stringify(_0x30b99c), _0x126d2e);
        } catch (_0x177966) {
          const _0x200b8d = {};
          this.lodash_set(_0x200b8d, _0x17a869, _0x2cc0f9);
          _0x51eff7 = this.setval(JSON.stringify(_0x200b8d), _0x126d2e);
        }
      } else _0x51eff7 = this.setval(_0x2cc0f9, _0x551816);
      return _0x51eff7;
    }
    ["getval"](_0x67ab05) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x67ab05) : this.isQuanX() ? $prefs.valueForKey(_0x67ab05) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x67ab05]) : this.data && this.data[_0x67ab05] || null;
    }
    ["setval"](_0x54114a, _0x5ee406) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x54114a, _0x5ee406) : this.isQuanX() ? $prefs.setValueForKey(_0x54114a, _0x5ee406) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5ee406] = _0x54114a, this.writedata(), !0) : this.data && this.data[_0x5ee406] || null;
    }
    ["initGotEnv"](_0x41c054) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x41c054 && (_0x41c054.headers = _0x41c054.headers ? _0x41c054.headers : {}, void 0 === _0x41c054.headers.Cookie && void 0 === _0x41c054.cookieJar && (_0x41c054.cookieJar = this.ckjar));
    }
    ["get"](_0x112189, _0x467dbd = () => {}) {
      _0x112189.headers && (delete _0x112189.headers["Content-Type"], delete _0x112189.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x112189.headers = _0x112189.headers || {}, Object.assign(_0x112189.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x112189, (_0x1a5c24, _0x1efdcf, _0x1c8388) => {
        !_0x1a5c24 && _0x1efdcf && (_0x1efdcf.body = _0x1c8388, _0x1efdcf.statusCode = _0x1efdcf.status);
        _0x467dbd(_0x1a5c24, _0x1efdcf, _0x1c8388);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x112189.opts = _0x112189.opts || {}, Object.assign(_0x112189.opts, {
        "hints": !1
      })), $task.fetch(_0x112189).then(_0x5722b5 => {
        const {
          statusCode: _0x326dc8,
          statusCode: _0x29a60d,
          headers: _0x408c13,
          body: _0x4a85da
        } = _0x5722b5;
        _0x467dbd(null, {
          "status": _0x326dc8,
          "statusCode": _0x29a60d,
          "headers": _0x408c13,
          "body": _0x4a85da
        }, _0x4a85da);
      }, _0x20d2e2 => _0x467dbd(_0x20d2e2))) : this.isNode() && (this.initGotEnv(_0x112189), this.got(_0x112189).on("redirect", (_0x54631c, _0x524da7) => {
        try {
          if (_0x54631c.headers["set-cookie"]) {
            const _0x367b50 = _0x54631c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x367b50 && this.ckjar.setCookieSync(_0x367b50, null);
            _0x524da7.cookieJar = this.ckjar;
          }
        } catch (_0x26583c) {
          this.logErr(_0x26583c);
        }
      }).then(_0x265e82 => {
        const {
          statusCode: _0x41c8c8,
          statusCode: _0x1ee03d,
          headers: _0xa30ce,
          body: _0xd85bd2
        } = _0x265e82;
        _0x467dbd(null, {
          "status": _0x41c8c8,
          "statusCode": _0x1ee03d,
          "headers": _0xa30ce,
          "body": _0xd85bd2
        }, _0xd85bd2);
      }, _0x2c79b2 => {
        const {
          message: _0xec1638,
          response: _0x4293d7
        } = _0x2c79b2;
        _0x467dbd(_0xec1638, _0x4293d7, _0x4293d7 && _0x4293d7.body);
      }));
    }
    ["post"](_0x4e4025, _0x254ded = () => {}) {
      if (_0x4e4025.body && _0x4e4025.headers && !_0x4e4025.headers["Content-Type"] && (_0x4e4025.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4e4025.headers && delete _0x4e4025.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x4e4025.headers = _0x4e4025.headers || {}, Object.assign(_0x4e4025.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x4e4025, (_0x4272ec, _0x38e3ea, _0x4b8a3d) => {
        !_0x4272ec && _0x38e3ea && (_0x38e3ea.body = _0x4b8a3d, _0x38e3ea.statusCode = _0x38e3ea.status);
        _0x254ded(_0x4272ec, _0x38e3ea, _0x4b8a3d);
      });else {
        if (this.isQuanX()) _0x4e4025.method = "POST", this.isNeedRewrite && (_0x4e4025.opts = _0x4e4025.opts || {}, Object.assign(_0x4e4025.opts, {
          "hints": !1
        })), $task.fetch(_0x4e4025).then(_0x373213 => {
          const {
            statusCode: _0x5a7df7,
            statusCode: _0x3da513,
            headers: _0x35f55a,
            body: _0x47f110
          } = _0x373213;
          _0x254ded(null, {
            "status": _0x5a7df7,
            "statusCode": _0x3da513,
            "headers": _0x35f55a,
            "body": _0x47f110
          }, _0x47f110);
        }, _0x298d47 => _0x254ded(_0x298d47));else {
          if (this.isNode()) {
            this.initGotEnv(_0x4e4025);
            const {
              url: _0x53b230,
              ..._0x24ffc6
            } = _0x4e4025;
            this.got.post(_0x53b230, _0x24ffc6).then(_0x10bdbd => {
              const {
                statusCode: _0xd5dafa,
                statusCode: _0x19b4e0,
                headers: _0x14a431,
                body: _0x11f093
              } = _0x10bdbd;
              _0x254ded(null, {
                "status": _0xd5dafa,
                "statusCode": _0x19b4e0,
                "headers": _0x14a431,
                "body": _0x11f093
              }, _0x11f093);
            }, _0x52f9b9 => {
              const {
                message: _0x1aa2c2,
                response: _0x56b383
              } = _0x52f9b9;
              _0x254ded(_0x1aa2c2, _0x56b383, _0x56b383 && _0x56b383.body);
            });
          }
        }
      }
    }
    ["time"](_0xb2ec99, _0x555c9a = null) {
      const _0x435bd0 = _0x555c9a ? new Date(_0x555c9a) : new Date();
      let _0x52853b = {
        "M+": _0x435bd0.getMonth() + 1,
        "d+": _0x435bd0.getDate(),
        "H+": _0x435bd0.getHours(),
        "m+": _0x435bd0.getMinutes(),
        "s+": _0x435bd0.getSeconds(),
        "q+": Math.floor((_0x435bd0.getMonth() + 3) / 3),
        "S": _0x435bd0.getMilliseconds()
      };
      /(y+)/.test(_0xb2ec99) && (_0xb2ec99 = _0xb2ec99.replace(RegExp.$1, (_0x435bd0.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x59bdba in _0x52853b) new RegExp("(" + _0x59bdba + ")").test(_0xb2ec99) && (_0xb2ec99 = _0xb2ec99.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x52853b[_0x59bdba] : ("00" + _0x52853b[_0x59bdba]).substr(("" + _0x52853b[_0x59bdba]).length)));
      return _0xb2ec99;
    }
    ["msg"](_0x538344 = _0x2ba9ae, _0x4a66a5 = "", _0x43fd4a = "", _0x867932) {
      const _0x44a66f = _0x33bb30 => {
        if (!_0x33bb30) return _0x33bb30;
        if ("string" == typeof _0x33bb30) return this.isLoon() ? _0x33bb30 : this.isQuanX() ? {
          "open-url": _0x33bb30
        } : this.isSurge() ? {
          "url": _0x33bb30
        } : void 0;
        if ("object" == typeof _0x33bb30) {
          if (this.isLoon()) {
            let _0x3f5564 = _0x33bb30.openUrl || _0x33bb30.url || _0x33bb30["open-url"],
              _0x193c62 = _0x33bb30.mediaUrl || _0x33bb30["media-url"];
            return {
              "openUrl": _0x3f5564,
              "mediaUrl": _0x193c62
            };
          }
          if (this.isQuanX()) {
            let _0x25a266 = _0x33bb30["open-url"] || _0x33bb30.url || _0x33bb30.openUrl,
              _0x3fbf62 = _0x33bb30["media-url"] || _0x33bb30.mediaUrl;
            return {
              "open-url": _0x25a266,
              "media-url": _0x3fbf62
            };
          }
          if (this.isSurge()) {
            let _0x4dc98b = _0x33bb30.url || _0x33bb30.openUrl || _0x33bb30["open-url"];
            return {
              "url": _0x4dc98b
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x538344, _0x4a66a5, _0x43fd4a, _0x44a66f(_0x867932)) : this.isQuanX() && $notify(_0x538344, _0x4a66a5, _0x43fd4a, _0x44a66f(_0x867932))), !this.isMuteLog) {
        let _0x48c90f = ["", "==============📣系统通知📣=============="];
        _0x48c90f.push(_0x538344);
        _0x4a66a5 && _0x48c90f.push(_0x4a66a5);
        _0x43fd4a && _0x48c90f.push(_0x43fd4a);
        console.log(_0x48c90f.join("\n"));
        this.logs = this.logs.concat(_0x48c90f);
      }
    }
    ["log"](..._0x427c5e) {
      _0x427c5e.length > 0 && (this.logs = [...this.logs, ..._0x427c5e]);
      console.log(_0x427c5e.join(this.logSeparator));
    }
    ["logErr"](_0x372981, _0x16f2c0) {
      const _0x497cd7 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x497cd7 ? this.log("", "❗️" + this.name + ", 错误!", _0x372981.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x372981);
    }
    ["wait"](_0x42844e) {
      return new Promise(_0x12d71c => setTimeout(_0x12d71c, _0x42844e));
    }
    ["done"](_0x4036cb = {}) {
      const _0x3ad91a = new Date().getTime(),
        _0x1a81ec = (_0x3ad91a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1a81ec + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4036cb);
    }
  }(_0x2ba9ae, _0x5e2697);
}