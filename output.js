//Mon Jul 22 2024 05:47:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  validateCarmeWithType,
  getCookies,
  getUserInfoWithX,
  wait,
  commonNativeRequest
} = require("./common.js");
const _0x214b7d = process.env.ELE_CARME;
const _0x1c5344 = 16;
async function _0x2b0ccf(_0x53c8b8) {
  let _0x3059c0 = "mtop.koubei.interactioncenter.platform.right.lottery";
  try {
    const _0x2a4626 = await commonNativeRequest(_0x53c8b8, _0x3059c0, _0x1c5344, 1, "", "mtop.ele.me", process.env.x5sec);
    if (_0x2a4626.data.data.errorMsg) {
      console.log(_0x2a4626.data.data.errorMsg);
      return false;
    } else {
      const _0x98e5df = _0x2a4626.data.data.sendRightList[0].discountInfo.amount;
      console.log("福尔魔方闯关成功。获得：" + _0x98e5df, "乐园币");
      return _0x98e5df !== 1;
    }
  } catch (_0x5762cc) {
    return false;
  }
}
async function _0x20263b() {
  await validateCarmeWithType(_0x214b7d, 1);
  const _0x251e2b = getCookies();
  for (let _0x4803cf = 0; _0x4803cf < _0x251e2b.length; _0x4803cf++) {
    let _0x39a39d = _0x251e2b[_0x4803cf];
    let _0x457d31 = await getUserInfoWithX(_0x39a39d);
    if (_0x457d31 && _0x457d31[0]) {
      console.log("第", _0x4803cf + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x457d31 || !_0x457d31.userName) {
      continue;
    }
    const _0x591d5a = _0x457d31.localId;
    let _0x24a544 = _0x457d31.encryptMobile;
    console.log("\n****** #" + (_0x4803cf + 1), _0x24a544, "*********");
    console.log("账号的 id 为", _0x591d5a);
    await _0x2b0ccf(_0x39a39d);
    console.log("防止挤爆了，延时 1 秒");
    await wait(1);
  }
  process.exit(0);
}
_0x20263b();