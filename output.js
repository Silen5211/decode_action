//Tue Sep 17 2024 10:24:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const o = new Promise((e, o) => {
        s.call(this, t, (t, s, i) => {
          t ? o(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("\u8BF7\u6C42\u8D85\u65F6"));
        }, e);
      })]))(o, t.timeout) : o;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      }, this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, o) => e(o));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        o = o ? o.replace(/\n/g, "").trim() : o;
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        i = i ? 1 * i : 20, i = e && e.timeout ? e.timeout : i;
        const [r, a] = o.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: i
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: i
          };
        this.post(n, (t, e, o) => s(o));
      }).catch(t => this.logErr(t));
    }
    lodash_get(t, e, s = void 0) {
      const o = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let i = t;
      for (const t of o) if (i = Object(i)[t], void 0 === i) return s;
      return i;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, o) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[o + 1]) >> 0 == +e[o + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, o] = /^@(.*?)\.(.*?)$/.exec(t),
          i = s ? this.getval(s) : "";
        if (i) try {
          const t = JSON.parse(i);
          e = t ? this.lodash_get(t, o, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, o, i] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(o),
          a = o ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), o);
        } catch (e) {
          const r = {};
          this.lodash_set(r, i, t), s = this.setval(JSON.stringify(r), o);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, o) => {
            !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, o);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[s](t, (t, s, o) => {
            !t && s && (s.body = o, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, o);
          });
          break;
        case "Quantumult X":
          t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: o,
              headers: i,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let o = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in o) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[e] : ("00" + o[e]).substr(("" + o[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let o = t[s];
        null != o && "" !== o && ("object" == typeof o && (o = JSON.stringify(o)), e += `${s}=${o}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", o = "", i = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: o,
          $mediaMime: i
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), o) {
                    let t, e, s;
                    if (o.startsWith("http")) t = o;else if (o.startsWith("data:")) {
                      const [t] = o.split(";"),
                        [, i] = o.split(",");
                      e = i, s = t.replace("data:", "");
                    } else {
                      e = o, s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(o);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": i ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let i = t.openUrl || t.url || t["open-url"] || e;
                  i && Object.assign(s, {
                    openUrl: i
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return o?.startsWith("http") && (r = o), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const i = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(i, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  o?.startsWith("http") && (a = o), a && Object.assign(i, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(i, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(i)), i;
                }
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, o, r(i));
          break;
        case "Quantumult X":
          $notify(e, s, o, r(i));
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), o && t.push(o), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      this.getEnv(), this.log("", `❗️${this.name}, 错误!`, e, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv(), $done(t);
    }
  }(t, e);
}