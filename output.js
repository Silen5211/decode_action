//Mon Jul 22 2024 04:16:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  validateCarmeWithType,
  commonNativeRequest,
  getCookies,
  getUserInfoWithX,
  wait
} = require("./common.js");
const _0x55cacc = process.env.ELE_CARME;
const _0x583498 = process.env.USE_LYB;
const _0x40f031 = 24;
let _0xf7b264;
function _0x5ce60b(_0x23d286) {
  return Object.values(_0x23d286).length === 0;
}
async function _0x2259f3(_0x15bc2a, _0x2e8dc6) {
  let _0x437895 = _0x2e8dc6.rolePropertyInfoDtoList[0].totalPropertyCnt;
  console.log("当前阳光值：" + _0x437895);
  if (_0x437895 < 70) {
    console.log("当前阳光值小于 70，需要补充阳光☀️");
    const _0x1cfa3a = await _0x46beb6(_0x15bc2a);
    for (const _0x480e95 of _0x1cfa3a) {
      if (_0x480e95.name.indexOf("阳光卡") !== -1 && _0x480e95.count > 0 && _0x437895 < 70) {
        console.log("查询到阳光卡，去使用...");
        let _0xa62745 = await _0x3d2f54(_0x15bc2a, _0x2e8dc6.roleBaseInfoDto.roleId, _0x480e95.propertyTemplateId);
        if (!_0xa62745) {
          continue;
        }
        let _0x4c437a = _0xa62745.rolePropertyInfoDtoList[0];
        if (_0x4c437a) {
          _0x437895 = _0x4c437a.totalPropertyCnt;
          console.log("当前阳光值：" + _0x437895);
          if (_0x437895 < 70) {
            while (_0xa62745 && _0x437895 < 70 && _0x480e95.count > 0) {
              console.log("当前阳光值小于 70，需要补充阳光☀️");
              _0xa62745 = await _0x3d2f54(_0x15bc2a, _0x2e8dc6.roleBaseInfoDto.roleId, _0x480e95.propertyTemplateId);
              if (_0xa62745) {
                _0x4c437a = _0xa62745.rolePropertyInfoDtoList[0];
                _0x437895 = _0x4c437a.totalPropertyCnt;
              }
            }
          } else {
            break;
          }
        }
      }
    }
  }
  if (_0x437895 < 70 && _0x583498) {
    console.log("查询到可以使用乐园币，去购买阳光卡");
    if (await _0x2b8092(_0x15bc2a, "20231227173754982373591379")) {
      console.log("查询到阳光卡，去使用...");
      let _0x160d7a = await _0x3d2f54(_0x15bc2a, _0x2e8dc6.roleBaseInfoDto.roleId, bagPropertyElement.propertyTemplateId);
      if (_0x160d7a) {
        let _0x1b5e54 = _0x160d7a.rolePropertyInfoDtoList[0];
        if (_0x1b5e54) {
          _0x437895 = _0x1b5e54.totalPropertyCnt;
          console.log("当前阳光值：" + _0x437895);
        }
      }
    }
  }
}
async function _0x167ee0(_0x5da826, _0xaf8cdb) {
  if (_0xaf8cdb.doubleSpeedCardDTO.status === "active") {
    console.log("当前正在使用翻倍卡");
    return;
  }
  if (!_0xaf8cdb.roleInfoDtoList) {
    return;
  }
  const _0x1602fb = _0xaf8cdb.roleInfoDtoList[0];
  let _0x5eeb52 = false;
  const _0x359cae = await _0x46beb6(_0x5da826);
  for (const _0x9ce585 of _0x359cae) {
    if (_0x9ce585.name.indexOf("浇水翻倍卡") !== -1 && _0x9ce585.count > 0) {
      console.log("查询到浇水翻倍卡，去使用...");
      _0x5eeb52 = true;
      let _0x20104a = await _0x3d2f54(_0x5da826, _0x1602fb.roleBaseInfoDto.roleId, _0x9ce585.propertyTemplateId);
      if (_0x20104a) {
        console.log("使用浇水翻倍卡成功");
      }
    }
  }
  if (!_0x5eeb52 && _0x583498) {
    console.log("查询到可以使用乐园币，去购买翻倍卡");
    if (await _0x2b8092(_0x5da826, "20231227173920219372044180")) {
      console.log("查询到翻倍卡，去使用...");
      let _0x2f8caf = await _0x3d2f54(_0x5da826, _0x1602fb.roleBaseInfoDto.roleId, bagPropertyElement.propertyTemplateId);
      if (_0x2f8caf) {
        console.log("使用浇水翻倍卡成功");
      }
    }
  }
}
async function _0x2ca855(_0x6d5af2) {
  let _0x54aeb1 = "mtop.alsc.activity.bpgw.batchqueryblock.login";
  try {
    const _0xb1d63e = {
      userId: _0xf7b264
    };
    const _0x6233a5 = await commonNativeRequest(_0x6d5af2, _0x54aeb1, _0x40f031, 1, _0xb1d63e);
    if (_0x5ce60b(_0x6233a5.data.data)) {
      console.log(_0x6233a5.ret[0]);
    } else {
      console.log("果园信息：");
      const _0x389fde = _0x6233a5.data.data["603040_6723057310"].blockData.assets.tagData[0].totalProps;
      for (let _0x3fc15f = 0; _0x3fc15f < _0x389fde.length; _0x3fc15f++) {
        const _0x59a5c4 = _0x389fde[_0x3fc15f];
        console.log(_0x59a5c4.name + "：" + _0x59a5c4.value, _0x59a5c4.extInfo.propertyUnit);
      }
      let _0x59539a = _0x6233a5.data.data["603040_6723057310"].blockData.role.tagData[0].result[0];
      if (_0x59539a.roleInfoDtoList && _0x59539a.roleInfoDtoList.length > 0) {
        const _0x21d025 = _0x59539a.roleInfoDtoList[0];
        console.log("当前水果等级：" + _0x21d025.roleLevelExpInfoDto.levelName);
      }
      return _0x59539a;
    }
  } catch (_0x256b5d) {
    console.log(_0x256b5d);
  }
}
async function _0x46beb6(_0x5b2e94) {
  let _0x31bfdd = "mtop.alsc.activity.bpgw.batchqueryblock.login";
  try {
    const _0x576485 = {
      userId: _0xf7b264
    };
    const _0x57ffc3 = await commonNativeRequest(_0x5b2e94, _0x31bfdd, _0x40f031, 8, _0x576485);
    if (_0x5ce60b(_0x57ffc3.data.data)) {
      console.log(_0x57ffc3.ret[0]);
    } else {
      let _0x2ca6b2 = _0x57ffc3.data.data["603040_6723057310"].blockData.backpack.tagData[0].result[0];
      return _0x2ca6b2.bagLableList[0].bagPropertyItemList;
    }
  } catch (_0x2f450d) {
    console.log(_0x2f450d);
  }
}
async function _0x3d2f54(_0x51085b, _0x1ad324, _0x59103a = "462") {
  let _0x49e850 = "mtop.alsc.playgame.orchard.roleoperate.useprop";
  try {
    const _0x11b859 = {
      templateId: _0x59103a,
      roleId: _0x1ad324,
      userId: _0xf7b264
    };
    const _0x487892 = await commonNativeRequest(_0x51085b, _0x49e850, _0x40f031, 9, _0x11b859);
    if (_0x487892.data.errorMsg) {
      console.log(_0x487892.data.errorMsg);
      return false;
    } else {
      return _0x487892.data.data.roleInfoDTO;
    }
  } catch (_0x6023c4) {
    return false;
  }
}
async function _0x3ec0bd(_0xe0dcfd) {
  let _0x179f97 = "mtop.ele.playgame.orchard.futurewater.receive";
  try {
    const _0x4a46bb = {
      userId: _0xf7b264
    };
    const _0x30692d = await commonNativeRequest(_0xe0dcfd, _0x179f97, _0x40f031, 11, _0x4a46bb);
    if (_0x30692d.data.errorMsg) {
      console.log(_0x30692d.data.errorMsg);
      return false;
    } else {
      console.log("领取", _0x30692d.data.data.receiveWater, "g水滴");
    }
  } catch (_0x23c3ba) {
    console.log(_0x23c3ba);
  }
}
async function _0x2b8092(_0x3687d1, _0x4b9908) {
  let _0x3ff358 = "mtop.koubei.interactioncenter.platform.right.exchange.v2";
  try {
    const _0x4a3a51 = {
      copyId: _0x4b9908,
      userId: _0xf7b264
    };
    const _0x50bfc1 = await commonNativeRequest(_0x3687d1, _0x3ff358, _0x40f031, 10, _0x4a3a51);
    if (_0x50bfc1.data.errorMsg) {
      console.log(_0x50bfc1.data.errorMsg);
      return false;
    } else {
      if (_0x50bfc1.data.data.materialInfo) {
        console.log("已兑换", _0x50bfc1.data.data.materialInfo.extInfo.title);
        return true;
      }
      return false;
    }
  } catch (_0xa18b9e) {
    console.log(_0xa18b9e);
    return false;
  }
}
async function _0x3ab0af(_0x1a9eb4, _0x434900, _0x9fbe63) {
  let _0x586cb8 = "mtop.koubei.interactioncenter.orchard.processreward.receive";
  try {
    const _0x5ad8f3 = {
      roleId: _0x434900,
      rewardId: _0x9fbe63,
      requestId: new Date().getTime(),
      userId: _0xf7b264
    };
    const _0xe0ab06 = await commonNativeRequest(_0x1a9eb4, _0x586cb8, _0x40f031, 12, _0x5ad8f3);
    if (_0x5ce60b(_0xe0ab06.data.data)) {
      return false;
    } else {
      const _0x17d413 = _0xe0ab06.data.data.lotteryResultDTO.rightSendDTOS[0];
      if (_0x17d413) {
        const _0x5de457 = _0x17d413.materialInfo;
        console.log(_0x5de457.title, _0x5de457.description);
      }
    }
  } catch (_0x15c403) {
    return false;
  }
}
async function _0x4efa42(_0x2e5ac2) {
  let _0x3419b6 = "mtop.koubei.interactioncenter.orchard.sign.querysigninfo";
  try {
    const _0x15f87c = {
      userId: _0xf7b264
    };
    const _0x4bb3f2 = await commonNativeRequest(_0x2e5ac2, _0x3419b6, _0x40f031, 6, _0x15f87c);
    if (_0x5ce60b(_0x4bb3f2.data.data)) {
      return false;
    } else {
      let _0xe2affc = _0x4bb3f2.data.data.signInPrizeList;
      for (const _0x30eb62 of _0xe2affc) {
        if (_0x30eb62.dayName === "今日") {
          const _0x5877aa = _0x30eb62.ext.awardInfo;
          if (_0x5877aa && _0x5877aa.length > 0) {
            console.log("有签到奖励可领取，去领取...");
            for (const _0x55db18 of _0x5877aa) {
              await _0x1d02ce(_0x2e5ac2, _0x55db18.prizeNumId);
            }
          }
        }
      }
    }
  } catch (_0x10e08c) {
    console.log(_0x10e08c);
  }
}
function _0x3197bd() {
  const _0x5c1a5f = new Date();
  const _0x5e8f29 = _0x5c1a5f.getFullYear();
  const _0x20dbe7 = String(_0x5c1a5f.getMonth() + 1).padStart(2, "0");
  const _0x30b654 = String(_0x5c1a5f.getDate()).padStart(2, "0");
  return "" + _0x5e8f29 + _0x20dbe7 + _0x30b654;
}
async function _0x1d02ce(_0x59c5b2, _0xb06469) {
  let _0x2d98cb = "mtop.koubei.interactioncenter.orchard.sign.receivesigninaward";
  try {
    const _0x2d3adc = await commonNativeRequest(_0x59c5b2, _0x2d98cb, _0x40f031, 7, {
      signInDate: _0x3197bd(),
      prizeNumId: _0xb06469,
      userId: _0xf7b264
    });
    if (_0x2d3adc.data.errorMsg) {
      console.log(_0x2d3adc.data.errorMsg);
    } else {
      console.log("领取签到奖励成功");
    }
  } catch (_0x564ae1) {
    console.log(_0x564ae1);
  }
}
async function _0x128d37(_0x3376cb, _0x2c30d7) {
  let _0x21296b = _0x2c30d7.roleId;
  let _0x223aff = await _0x3d2f54(_0x3376cb, _0x21296b);
  while (_0x223aff) {
    _0x223aff = await _0x3d2f54(_0x3376cb, _0x21296b);
    let _0x4d95fc = _0x223aff.roleLevelExpInfoDto;
    if (_0x4d95fc) {
      console.log("距离下一等级", _0x4d95fc.nextLevelName, "还需", _0x4d95fc.remainingProgress);
    }
    const _0x34e940 = _0x223aff.processRewardDTO;
    if (_0x34e940 && _0x34e940.processRewardShow) {
      if (_0x34e940.processRewardShow.rewardId) {
        console.log("有可以领取的奖励，去领取...");
        await _0x3ab0af(_0x3376cb, _0x21296b, _0x34e940.processRewardShow.rewardId);
      }
    }
    await wait(0.2);
  }
}
async function _0x24461c(_0x316eab) {
  let _0x148806 = "mtop.ele.biz.growth.task.core.querytask";
  try {
    const _0x1c63c3 = {
      userId: _0xf7b264
    };
    const _0x53e3c2 = await commonNativeRequest(_0x316eab, _0x148806, _0x40f031, 2, _0x1c63c3);
    if (_0x53e3c2.data.errorMsg) {
      console.log(_0x53e3c2.data.errorMsg);
    } else {
      return _0x53e3c2.data.mlist;
    }
  } catch (_0x1caaaa) {
    console.log(_0x1caaaa);
  }
}
async function _0x1c980a(_0x152804, _0xb771ec, _0x318aa6, _0x2c465f) {
  let _0x399ca7 = "mtop.ele.biz.growth.task.event.pageview";
  try {
    const _0x5a187d = {
      missionId: _0xb771ec,
      pageFrom: _0x318aa6,
      missionXId: _0x2c465f,
      userId: _0xf7b264
    };
    const _0x52e3df = await commonNativeRequest(_0x152804, _0x399ca7, _0x40f031, 3, _0x5a187d);
    if (_0x52e3df.data.errorMsg) {
      console.log(_0x52e3df.data.errorMsg);
    } else {
      return _0x52e3df.data;
    }
  } catch (_0x9a6637) {
    console.log(_0x9a6637);
  }
}
async function _0x3eb287(_0x5a3062, _0x3eb91c, _0x192fcb, _0x12ca0b, _0x1fc34c) {
  let _0xf0ed6a = "mtop.ele.biz.growth.task.core.receiveprize";
  try {
    const _0x57b552 = {
      missionId: _0x192fcb,
      instanceId: _0x12ca0b,
      count: _0x1fc34c,
      userId: _0xf7b264
    };
    const _0x401db2 = await commonNativeRequest(_0x5a3062, _0xf0ed6a, _0x40f031, 4, _0x57b552);
    if (_0x401db2.data.errorMsg) {
      console.log(_0x401db2.data.errorMsg);
    } else {
      if (_0x401db2.data && _0x401db2.data.rlist[0]) {
        let _0x1951f9 = _0x401db2.data.rlist[0];
        console.log("完成" + _0x3eb91c + "任务", "获取水滴", _0x1951f9.value);
      }
    }
  } catch (_0x5e59db) {
    console.log(_0x5e59db);
  }
}
async function _0x3f53fd(_0x5e5c0e, _0x515745, _0x2a4895, _0x3da661) {
  let _0x24a16c = "mtop.ele.biz.growth.task.core.receiveprize";
  try {
    const _0x26c29d = {
      missionId: _0x2a4895,
      count: _0x3da661,
      userId: _0xf7b264
    };
    const _0x504d4a = await commonNativeRequest(_0x5e5c0e, _0x24a16c, _0x40f031, 13, _0x26c29d);
    if (_0x504d4a.data.errorMsg) {
      console.log(_0x504d4a.data.errorMsg);
    } else {
      if (_0x504d4a.data && _0x504d4a.data.rlist[0]) {
        let _0x364eaa = _0x504d4a.data.rlist[0];
        console.log("完成" + _0x515745 + "任务", "获取水滴", _0x364eaa.value);
      }
    }
  } catch (_0x14343e) {
    console.log(_0x14343e);
  }
}
async function _0x31d41b(_0x4bf39f, _0x46e011, _0x189084) {
  let _0x1dac53 = "mtop.ele.biz.growth.task.core.receiveprize";
  try {
    const _0x21d804 = {
      missionId: _0x189084,
      userId: _0xf7b264
    };
    const _0x6d910e = await commonNativeRequest(_0x4bf39f, _0x1dac53, _0x40f031, 5, _0x21d804);
    if (_0x6d910e.data.errorMsg) {
      console.log(_0x6d910e.data.errorMsg);
    } else {
      if (_0x6d910e.data && _0x6d910e.data.rlist[0]) {
        let _0x481ad8 = _0x6d910e.data.rlist[0];
        console.log("完成" + _0x46e011 + "任务", "获取水滴", _0x481ad8.value);
      }
    }
  } catch (_0x4a059b) {
    console.log(_0x4a059b);
  }
}
async function _0x49c695(_0x1239a1) {
  let _0x372bb7 = await _0x24461c(_0x1239a1);
  for (const _0x32b917 of _0x372bb7) {
    let _0x1fe61f = _0x32b917.actionConfig;
    let _0x4687b2 = _0x1fe61f.actionValue.pageSpm;
    let _0x276bc1 = _0x32b917.missionDefId;
    let _0x2c76fb = _0x32b917.missionXId;
    if (_0x1fe61f.actionType === "PAGEVIEW") {
      if (_0x32b917.status === "RUNNING") {
        await _0x1c980a(_0x1239a1, _0x276bc1, _0x4687b2, _0x2c76fb);
        if (_0x32b917.id) {
          let _0x52a21e = _0x32b917.missionStageDTOS;
          for (const _0x11c479 of _0x52a21e) {
            if (_0x11c479.status === "FINISH" && _0x11c479.rewardStatus === "TODO") {
              await _0x3eb287(_0x1239a1, _0x32b917.showTitle, _0x276bc1, _0x32b917.id, _0x11c479.stageCount);
            }
          }
        } else {
          await _0x31d41b(_0x1239a1, _0x32b917.showTitle, _0x276bc1);
        }
      } else {
        if (_0x32b917.status === "FINISH") {
          let _0x1e7375 = _0x32b917.missionStageDTOS;
          for (const _0x2719c3 of _0x1e7375) {
            if (_0x2719c3.status === "FINISH" && _0x2719c3.rewardStatus === "TODO") {
              if (_0x32b917.id) {
                await _0x3eb287(_0x1239a1, _0x32b917.showTitle, _0x276bc1, _0x32b917.id, _0x2719c3.stageCount);
              } else {
                await _0x31d41b(_0x1239a1, _0x32b917.showTitle, _0x276bc1);
              }
            }
          }
        }
      }
    } else {
      if (!(_0x1fe61f.actionType === "OPEN_APP_PUSH")) {
        _0x1fe61f.actionType === "TIMESIGNIN";
      }
    }
  }
}
async function _0x451635(_0x40ed16, _0x44d250) {
  const _0x5a0a2d = {
    bizScene: "KB_ORCHARD",
    shareId: _0x40ed16,
    actId: "20200629151859103125248022",
    requestId: "1703746799208",
    longitude: "120.21993197500706",
    latitude: "30.178378857672215",
    asac: "2A20B11ERAXCI9D3X4L8ZW"
  };
  let _0x492c57 = "mtop.alsc.play.component.snsshare.trigger.risk";
  try {
    const _0x497af7 = await commonRequest(_0x44d250, JSON.stringify(_0x5a0a2d), _0x492c57, _0x40f031);
    if (_0x497af7.data.errorMsg) {
      console.log(_0x497af7.data.errorMsg);
    } else {
      let _0x54e2e2 = _0x497af7.data.rlist[0];
      if (_0x54e2e2) {
        console.log("完成" + title + "任务", "获取水滴", _0x54e2e2.value);
      }
    }
  } catch (_0x1a2f9a) {
    console.log(_0x1a2f9a);
  }
}
async function _0x323f41() {
  console.log("饿了么果园版本：1.0.0\n");
  await validateCarmeWithType(_0x55cacc, 1);
  const _0x439efa = getCookies("elmck");
  for (let _0x536ce0 = 0; _0x536ce0 < _0x439efa.length; _0x536ce0++) {
    let _0x35e233 = _0x439efa[_0x536ce0];
    let _0x2ee881 = await getUserInfoWithX(_0x35e233, _0x40f031);
    if (_0x2ee881 && _0x2ee881[0]) {
      console.log("第", _0x536ce0 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x2ee881 || !_0x2ee881.userName) {
      continue;
    }
    _0xf7b264 = _0x2ee881.localId.toString();
    let _0x719f58 = _0x2ee881.encryptMobile;
    console.log("\n****** #" + (_0x536ce0 + 1), _0x719f58, "*********");
    console.log("账号的 id 为", _0xf7b264);
    const _0x1d26e4 = await _0x2ca855(_0x35e233);
    if (!_0x1d26e4.roleInfoDtoList) {
      console.log("获取果园信息异常");
      continue;
    }
    const _0x55fe7b = _0x1d26e4.roleInfoDtoList[0];
    await _0x49c695(_0x35e233);
    await _0x4efa42(_0x35e233);
    if (_0x55fe7b) {
      await _0x2259f3(_0x35e233, _0x55fe7b);
    }
    await _0x167ee0(_0x35e233, _0x1d26e4);
    await _0x3ec0bd(_0x35e233);
    if (_0x55fe7b) {
      await _0x128d37(_0x35e233, _0x55fe7b.roleBaseInfoDto);
    }
    console.log("防止挤爆了，延时 1 秒");
    await wait(1);
  }
  process.exit(0);
}
_0x323f41();