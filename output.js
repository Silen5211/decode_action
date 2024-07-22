//Mon Jul 22 2024 05:16:44 GMT+0000 (Coordinated Universal Time)
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
const _0x3c5c5c = require("request");
const _0x3d8ab4 = 3;
const _0x50d7d7 = process.env.ELE_CARME;
function _0x344466(_0x3f7c98) {
  return Object.values(_0x3f7c98).length === 0;
}
async function _0x2c3ff9(_0x20b382) {
  const _0x2a93aa = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x20b382,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x5e03dc = {
    bizScene: "XIAODANGJIA",
    actId: "20230117134129770153614517",
    uniqueId: "",
    latitude: "30.17862595617771",
    longitude: "120.22057268768549",
    cityId: "2",
    bizCode: "XIAODANGJIA",
    collectionId: "20230421102945045949799658",
    componentId: "20230505143809276394718532",
    extParams: "{\"actId\":\"20230117134129770153614517\",\"bizScene\":\"XIAODANGJIA\",\"desc\":\"玩特级厨师挑战赛\"}",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x39286f = new Date().getTime();
  const _0xdeada3 = 12574478;
  var _0x4bf2ce = "data=" + encodeURIComponent(JSON.stringify(_0x5e03dc));
  const _0x197e5c = getToken(_0x20b382),
    _0x297be1 = _0x197e5c.split("_")[0];
  const _0x1928eb = await sign(_0x297be1 + "&" + _0x39286f + "&" + _0xdeada3 + "&" + JSON.stringify(_0x5e03dc), _0x50d7d7);
  const _0x558fd4 = {
    url: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x39286f + "&sign=" + _0x1928eb + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x2a93aa,
    body: _0x4bf2ce
  };
  return tryCatchPromise(_0x2fd534 => {
    _0x3c5c5c(_0x558fd4, async (_0x3d1627, _0x446b3b, _0x550bd6) => {
      if (!_0x3d1627 && _0x446b3b.statusCode == 200) {
        try {
          const _0xfa8e27 = JSON.parse(_0x550bd6);
          if (_0x344466(_0xfa8e27.data.data)) {
            console.log(_0xfa8e27.ret[0]);
            _0x2fd534(false);
          } else {
            const _0x2439fe = _0xfa8e27.data.data.sendRightList[0].discountInfo.amount;
            console.log("特级厨师闯关成功。获得：" + _0x2439fe, "乐园币");
            if (_0x2439fe === 1) {
              _0x2fd534(false);
            } else {
              _0x2fd534(true);
            }
          }
        } catch (_0x270b02) {
          _0x2fd534(false);
        }
      } else {
        _0x2fd534(false);
      }
    });
  });
}
async function _0x464779() {
  await validateCarmeWithType(_0x50d7d7, 1);
  const _0x43bc8d = getCookies();
  for (let _0x2c9f26 = 0; _0x2c9f26 < _0x43bc8d.length; _0x2c9f26++) {
    const _0x525372 = _0x43bc8d[_0x2c9f26];
    if (!_0x525372) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x52f509 = await checkCk(_0x525372, _0x2c9f26);
        if (!_0x52f509) {
          continue;
        }
        let _0x7f3f80 = await getUserInfo(_0x52f509);
        if (!_0x7f3f80.username) {
          console.log("第", _0x2c9f26 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x1ca604 = _0x7f3f80.user_id;
        await checkCarmeCount(_0x50d7d7, _0x1ca604, _0x3d8ab4);
        console.log("******开始【饿了么账号", _0x2c9f26 + 1, "】", _0x7f3f80.username, "*********");
        let _0x15cdfd = await _0x2c3ff9(_0x52f509);
        while (_0x15cdfd) {
          console.log("延时 2 秒");
          await wait(2);
          _0x15cdfd = await _0x2c3ff9(_0x52f509);
        }
      } catch (_0x308ddc) {
        console.log(_0x308ddc);
      }
    }
  }
  process.exit(0);
}
_0x464779();