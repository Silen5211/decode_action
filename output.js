//Mon Jul 22 2024 06:08:12 GMT+0000 (Coordinated Universal Time)
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
const GAME_TYEP = 3;
const kami = process.env.ELE_CARME;
function isEmpty(_0x3462ba) {
  return Object.values(_0x3462ba).length === 0;
}
async function lottery(_0x3cb201) {
  const _0x533431 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x3cb201,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x1a8db4 = {
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
  const _0x32078a = new Date().getTime();
  const _0x39acf0 = 12574478;
  var _0x208557 = "data=" + encodeURIComponent(JSON.stringify(_0x1a8db4));
  const _0x10ae18 = getToken(_0x3cb201),
    _0xb1d556 = _0x10ae18.split("_")[0];
  const _0x443b09 = await sign(_0xb1d556 + "&" + _0x32078a + "&" + _0x39acf0 + "&" + JSON.stringify(_0x1a8db4), kami);
  const _0x456e28 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x32078a + "&sign=" + _0x443b09 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x533431,
    body: _0x208557
  };
  return tryCatchPromise(_0x137819 => {
    request(_0x456e28, async (_0x5c3db8, _0x86ade3, _0x19bcb9) => {
      if (!_0x5c3db8 && _0x86ade3.statusCode == 200) {
        try {
          const _0x550d6f = JSON.parse(_0x19bcb9);
          if (isEmpty(_0x550d6f.data.data)) {
            console.log(_0x550d6f.ret[0]);
            _0x137819(false);
          } else {
            const _0x57f1cf = _0x550d6f.data.data.sendRightList[0].discountInfo.amount;
            console.log("特级厨师闯关成功。获得：" + _0x57f1cf, "乐园币");
            if (_0x57f1cf == 1) {
              _0x137819(false);
            } else {
              _0x137819(true);
            }
          }
        } catch (_0x1f37fb) {
          _0x137819(false);
        }
      } else {
        _0x137819(false);
      }
    });
  });
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x3eeda9 = getCookies();
  for (let _0x6c566b = 0; _0x6c566b < _0x3eeda9.length; _0x6c566b++) {
    const _0xe7dca5 = _0x3eeda9[_0x6c566b];
    if (!_0xe7dca5) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x5b3940 = await checkCk(_0xe7dca5, _0x6c566b);
        if (!_0x5b3940) {
          continue;
        }
        let _0x445d05 = await getUserInfo(_0x5b3940);
        if (!_0x445d05.username) {
          console.log("第", _0x6c566b + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x514edc = _0x445d05.user_id;
        await checkCarmeCount(kami, _0x514edc, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x6c566b + 1, "】", _0x445d05.username, "*********");
        var _0x100488 = await lottery(_0x5b3940);
        console.log("延时 5 秒");
        await wait(5);
      } catch (_0x55783e) {
        console.log(_0x55783e);
      }
    }
  }
  process.exit(0);
}
start();