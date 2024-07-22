//Mon Jul 22 2024 04:37:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  checkCk,
  getCookies,
  getUserInfo,
  validateCarmeWithType,
  wait,
  checkCarmeCount,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const GAME_TYEP = 16;
const kami = process.env.ELE_CARME;
function isEmpty(_0x49a9a0) {
  return Object.values(_0x49a9a0).length === 0;
}
async function lottery(_0x441184) {
  const _0xa7878d = new Date().getTime();
  const _0x23a280 = {
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x441184,
    "x-ele-ua": "Rajax%2F1+Pixel_4_XL%2Fcoral+Android%2F13+Display%2FTP1A.220905.004+Eleme%2F11.0.38+Channel%2F1608030065155+ID%2F5c346f43-ead1-31b8-88f8-e526bdbe7ab9%3B+KERNEL_VERSION%3A4.14.276_KernelSU-g2bbf77ab4cf6_KernelSU-g09fb118d22b7+API_Level%3A33+Hardware%3A9ce70c46bd486c413ce653cc926e4c7d",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0xcd08ef = {
    bizScene: "MAGIC_CUBE",
    latitude: "30.178689",
    longitude: "120.220976",
    bizCode: "MAGIC_CUBE",
    actId: "20230802212526123181213864",
    collectionId: "20230802212526148986536967",
    componentId: "20230803112141370370827352",
    extParams: "{\"actId\":\"20230802212526123181213864\",\"bizScene\":\"MAGIC_CUBE\",\"desc\":\"魔方消消乐\"}",
    requestId: "20230802212526123181213864" + _0xa7878d,
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x50123d = 12574478;
  var _0x2a6103 = "data=" + encodeURIComponent(JSON.stringify(_0xcd08ef));
  const _0x1bf295 = getToken(_0x441184),
    _0x220c48 = _0x1bf295.split("_")[0];
  const _0x26f153 = await sign(_0x220c48 + "&" + _0xa7878d + "&" + _0x50123d + "&" + JSON.stringify(_0xcd08ef), kami);
  const _0xc3e04b = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0xa7878d + "&sign=" + _0x26f153 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json&asac=2A22C0239QW1FOL3UUQY7U&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x23a280,
    body: _0x2a6103
  };
  return tryCatchPromise(_0x7b3036 => {
    request(_0xc3e04b, async (_0x17815a, _0x4074f6, _0x430b29) => {
      if (!_0x17815a && _0x4074f6.statusCode == 200) {
        try {
          const _0x1072db = JSON.parse(_0x430b29);
          if (_0x1072db.data.data.errorMsg) {
            console.log(_0x1072db.data.data.errorMsg);
            _0x7b3036(false);
          } else {
            const _0xc07622 = _0x1072db.data.data.sendRightList[0].discountInfo.amount;
            console.log("福尔魔方闯关成功。获得：" + _0xc07622, "乐园币");
            if (_0xc07622 == 1) {
              _0x7b3036(false);
            } else {
              _0x7b3036(true);
            }
          }
        } catch (_0x55ca31) {
          _0x7b3036(false);
        }
      } else {
        _0x7b3036(false);
      }
    });
  });
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x1209a1 = getCookies();
  for (let _0x2e854b = 0; _0x2e854b < _0x1209a1.length; _0x2e854b++) {
    const _0x2a76b9 = _0x1209a1[_0x2e854b];
    if (!_0x2a76b9) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x36fe16 = await checkCk(_0x2a76b9, _0x2e854b);
        if (!_0x36fe16) {
          continue;
        }
        let _0x6bdbe9 = await getUserInfo(_0x36fe16);
        if (!_0x6bdbe9.username) {
          console.log("第", _0x2e854b + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x1544b7 = _0x6bdbe9.user_id;
        await checkCarmeCount(kami, _0x1544b7, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x2e854b + 1, "】", _0x6bdbe9.username, "*********");
        var _0x2c1001 = await lottery(_0x36fe16);
        console.log("延时 5 秒");
        await wait(5);
      } catch (_0x1b3f66) {
        console.log(_0x1b3f66);
      }
    }
  }
  process.exit(0);
}
start();