(() => {
  var t, e, o = {
      383: function(t) {
        t.exports = function() {
          "use strict";
          var t = ['a[href]:not([tabindex^="-"])', 'area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])', 'input[type="radio"]:not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'];

          function e(t) {
            this._show = this.show.bind(this), this._hide = this.hide.bind(this), this._maintainFocus = this._maintainFocus.bind(this), this._bindKeypress = this._bindKeypress.bind(this), this.$el = t, this.shown = !1, this._id = this.$el.getAttribute("data-a11y-dialog") || this.$el.id, this._previouslyFocused = null, this._listeners = {}, this.create()
          }

          function o(t, e) {
            return o = (e || document).querySelectorAll(t), Array.prototype.slice.call(o);
            var o
          }

          function s(t) {
            (t.querySelector("[autofocus]") || t).focus()
          }

          function n() {
            o("[data-a11y-dialog]").forEach((function(t) {
              new e(t)
            }))
          }
          return e.prototype.create = function() {
            this.$el.setAttribute("aria-hidden", !0), this.$el.setAttribute("aria-modal", !0), this.$el.setAttribute("tabindex", -1), this.$el.hasAttribute("role") || this.$el.setAttribute("role", "dialog"), this._openers = o('[data-a11y-dialog-show="' + this._id + '"]'), this._openers.forEach(function(t) {
              t.addEventListener("click", this._show)
            }.bind(this));
            const t = this.$el;
            return this._closers = o("[data-a11y-dialog-hide]", this.$el).filter((function(e) {
              return e.closest('[aria-modal="true"], [data-a11y-dialog]') === t
            })).concat(o('[data-a11y-dialog-hide="' + this._id + '"]')), this._closers.forEach(function(t) {
              t.addEventListener("click", this._hide)
            }.bind(this)), this._fire("create"), this
          }, e.prototype.show = function(t) {
            return this.shown || (document.documentElement.style.overflowY = "hidden", this._previouslyFocused = document.activeElement, this.$el.removeAttribute("aria-hidden"), this.shown = !0, s(this.$el), document.body.addEventListener("focus", this._maintainFocus, !0), document.addEventListener("keydown", this._bindKeypress), this._fire("show", t)), this
          }, e.prototype.hide = function(t) {
            return this.shown ? (document.documentElement.style.overflowY = "", this.shown = !1, this.$el.setAttribute("aria-hidden", "true"), this._previouslyFocused && this._previouslyFocused.focus && this._previouslyFocused.focus(), document.body.removeEventListener("focus", this._maintainFocus, !0), document.removeEventListener("keydown", this._bindKeypress), this._fire("hide", t), this) : this
          }, e.prototype.destroy = function() {
            return this.hide(), this._openers.forEach(function(t) {
              t.removeEventListener("click", this._show)
            }.bind(this)), this._closers.forEach(function(t) {
              t.removeEventListener("click", this._hide)
            }.bind(this)), this._fire("destroy"), this._listeners = {}, this
          }, e.prototype.on = function(t, e) {
            return void 0 === this._listeners[t] && (this._listeners[t] = []), this._listeners[t].push(e), this
          }, e.prototype.off = function(t, e) {
            var o = (this._listeners[t] || []).indexOf(e);
            return o > -1 && this._listeners[t].splice(o, 1), this
          }, e.prototype._fire = function(t, e) {
            var o = this._listeners[t] || [],
              s = new CustomEvent(t, {
                detail: e
              });
            this.$el.dispatchEvent(s), o.forEach(function(t) {
              t(this.$el, e)
            }.bind(this))
          }, e.prototype._bindKeypress = function(e) {
            const s = document.activeElement;
            s && s.closest('[aria-modal="true"]') !== this.$el || (this.shown && "Escape" === e.key && "alertdialog" !== this.$el.getAttribute("role") && (e.preventDefault(), this.hide(e)), this.shown && "Tab" === e.key && function(e, s) {
              var n = function(e) {
                  return o(t.join(","), e).filter((function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                  }))
                }(e),
                a = n.indexOf(document.activeElement);
              s.shiftKey && 0 === a ? (n[n.length - 1].focus(), s.preventDefault()) : s.shiftKey || a !== n.length - 1 || (n[0].focus(), s.preventDefault())
            }(this.$el, e))
          }, e.prototype._maintainFocus = function(t) {
            !this.shown || t.target.closest('[aria-modal="true"]') || t.target.closest("[data-a11y-dialog-ignore-focus-trap]") || s(this.$el)
          }, "undefined" != typeof document && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16)), e
        }()
      }
    },
    s = {};

  function n(t) {
    var e = s[t];
    if (void 0 !== e) return e.exports;
    var a = s[t] = {
      exports: {}
    };
    return o[t].call(a.exports, a, a.exports, n), a.exports
  }
  n.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, {
      a: e
    }), e
  }, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, n.t = function(o, s) {
    if (1 & s && (o = this(o)), 8 & s) return o;
    if ("object" == typeof o && o) {
      if (4 & s && o.__esModule) return o;
      if (16 & s && "function" == typeof o.then) return o
    }
    var a = Object.create(null);
    n.r(a);
    var i = {};
    t = t || [null, e({}), e([]), e(e)];
    for (var c = 2 & s && o;
      "object" == typeof c && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach((t => i[t] = () => o[t]));
    return i.default = () => o, n.d(a, i), a
  }, n.d = (t, e) => {
    for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
      enumerable: !0,
      get: e[o]
    })
  }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, (() => {
    "use strict";
    const t = JSON.parse('{"Ads":{"Amazon":["adtago.s3.amazonaws.com","analyticsengine.s3.amazonaws.com","analytics.s3.amazonaws.com","advice-ads.s3.amazonaws.com","advertising-api-eu.amazon.com"],"Google Ads":["pagead2.googlesyndication.com","adservice.google.com","pagead2.googleadservices.com","afs.googlesyndication.com"],"Doubleclick.net":["stats.g.doubleclick.net","ad.doubleclick.net","static.doubleclick.net","m.doubleclick.net","mediavisor.doubleclick.net"],"Adcolony":["ads30.adcolony.com","adc3-launch.adcolony.com","events3alt.adcolony.com","wd.adcolony.com"],"Media.net":["static.media.net","media.net","adservetx.media.net"]},"Analytics":{"Google Analytics":["app-measurement.com","analytics.google.com","click.googleanalytics.com","google-analytics.com","ssl.google-analytics.com"],"Hotjar":["adm.hotjar.com","identify.hotjar.com","insights.hotjar.com","script.hotjar.com","surveys.hotjar.com","careers.hotjar.com","events.hotjar.io"],"MouseFlow":["mouseflow.com","cdn.mouseflow.com","o2.mouseflow.com","gtm.mouseflow.com","api.mouseflow.com","tools.mouseflow.com","cdn-test.mouseflow.com"],"FreshWorks":["freshmarketer.com","claritybt.freshmarketer.com","fwtracks.freshmarketer.com"],"Luckyorange":["luckyorange.com","api.luckyorange.com","realtime.luckyorange.com","cdn.luckyorange.com","w1.luckyorange.com","upload.luckyorange.net","cs.luckyorange.net","settings.luckyorange.net"],"Stats WP Plugin":["stats.wp.com"]},"Error Trackers":{"Bugsnag":["notify.bugsnag.com","sessions.bugsnag.com","api.bugsnag.com","app.bugsnag.com"],"Sentry":["browser.sentry-cdn.com","app.getsentry.com"]},"Social Trackers":{"Facebook":["pixel.facebook.com","an.facebook.com"],"Twitter":["static.ads-twitter.com","ads-api.twitter.com"],"LinkedIn":["ads.linkedin.com","analytics.pointdrive.linkedin.com"],"Pinterest":["ads.pinterest.com","log.pinterest.com","analytics.pinterest.com","trk.pinterest.com","widgets.pinterest.com"],"Reddit":["events.reddit.com","events.redditmedia.com"],"YouTube":["ads.youtube.com"],"TikTok":["ads-api.tiktok.com","analytics.tiktok.com","ads-sg.tiktok.com","analytics-sg.tiktok.com","business-api.tiktok.com","ads.tiktok.com","log.byteoversea.com"]},"Mix":{"Yahoo":["ads.yahoo.com","analytics.yahoo.com","geo.yahoo.com","udc.yahoo.com","udcm.yahoo.com","advertising.yahoo.com","analytics.query.yahoo.com","partnerads.ysm.yahoo.com","log.fc.yahoo.com","gemini.yahoo.com","adtech.yahooinc.com"],"Yandex":["extmaps-api.yandex.net","appmetrica.yandex.ru","adfstat.yandex.ru","metrika.yandex.ru","advertising.yandex.ru","offerwall.yandex.net","adfox.yandex.ru"],"Unity":["auction.unityads.unity3d.com","webview.unityads.unity3d.com","config.unityads.unity3d.com","adserver.unityads.unity3d.com"]},"OEMs":{"Realme":["iot-eu-logser.realme.com","iot-logser.realme.com","bdapi-ads.realmemobile.com","bdapi-in-ads.realmemobile.com"],"Xiaomi":["api.ad.xiaomi.com","data.mistat.xiaomi.com","data.mistat.india.xiaomi.com","data.mistat.rus.xiaomi.com","sdkconfig.ad.xiaomi.com","sdkconfig.ad.intl.xiaomi.com","globalapi.ad.xiaomi.com","tracking.rus.miui.com"],"Oppo":["adsfs.oppomobile.com","adx.ads.oppomobile.com","ck.ads.oppomobile.com","data.ads.oppomobile.com"],"Huawei":["metrics.data.hicloud.com","metrics2.data.hicloud.com","grs.hicloud.com","logservice.hicloud.com","logservice1.hicloud.com","logbak.hicloud.com"],"OnePlus":["click.oneplus.cn","open.oneplus.net"],"Samsung":["samsungads.com","smetrics.samsung.com","nmetrics.samsung.com","samsung-com.112.2o7.net","analytics-api.samsunghealthcn.com"],"Apple":["advertising.apple.com","tr.iadsdk.apple.com","iadsdk.apple.com","metrics.icloud.com","metrics.apple.com","metrics.mzstatic.com","api-adservices.apple.com","books-analytics-events.apple.com","weather-analytics-events.apple.com","notes-analytics-events.apple.com"]}}');
    var e = n.t(t, 2);
    const o = {
      download: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12'/></svg>",
      delete: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3'/></svg>",
      cdot: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='var(--blue)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' ><path stroke='none' d='M0 0h24v24H0z'/><path d='M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0'/><path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0'/></svg>",
      v: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='var(--green)' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><circle cx='12' cy='12' r='9'/><path d='M9 12l2 2 4-4'/></svg>",
      x: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='var(--red)' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><circle cx='12' cy='12' r='9'/><path d='M10 10l4 4m0-4l-4 4'/></svg>",
      Ads: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M18 8a3 3 0 010 6M10 8v11a1 1 0 01-1 1H8a1 1 0 01-1-1v-5'/><path d='M12 8h0l4.524-3.77A.9.9 0 0118 4.922v12.156a.9.9 0 01-1.476.692L12 14H4a1 1 0 01-1-1V9a1 1 0 011-1h8'/></svg>",
      Analytics: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M4 18V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2z'/><path d='M7 14l3-3 2 2 3-3 2 2'/></svg>",
      "Error Trackers": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M9 9V8a3 3 0 016 0v1M8 9h8a6 6 0 011 3v3a5 5 0 01-10 0v-3a6 6 0 011-3M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M20 19l-3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4'/></svg>",
      Mix: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><path d='M12 4L4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4'/></svg>",
      OEMs: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><rect x='6' y='3' width='12' height='18' rx='2'/><path d='M11 4h2M12 17v.01'/></svg>",
      "Social Trackers": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M0 0h24v24H0z' stroke='none'/><circle cx='12' cy='5' r='2'/><circle cx='5' cy='19' r='2'/><circle cx='19' cy='19' r='2'/><circle cx='12' cy='14' r='3'/><path d='M12 7v4M6.7 17.8l2.8-2M17.3 17.8l-2.8-2'/></svg>",
      OnePlus: "<svg fill='currentColor'  width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M0 3.74V24h20.26V12.428h-2.256v9.317H2.254V5.995h9.318V3.742zM18.004 0v3.74h-3.758v2.256h3.758v3.758h2.255V5.996H24V3.74h-3.758V0zm-6.45 18.756V8.862H9.562c0 .682-.228 1.189-.577 1.504-.367.297-.91.437-1.556.437h-.245v1.625h2.133v6.31h2.237z'></path></svg>",
      Xiaomi: "<svg fill='currentColor' width='18' height='18' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M19.96 20a.32.32 0 0 1-.32-.32V4.32a.32.32 0 0 1 .32-.32h3.71a.32.32 0 0 1 .33.32v15.36a.32.32 0 0 1-.33.32zm-6.22 0s-.3-.09-.3-.32v-9.43A2.18 2.18 0 0 0 11.24 8H4.3c-.4 0-.3.3-.3.3v11.38c0 .27-.3.32-.3.32H.33a.32.32 0 0 1-.33-.32V4.32A.32.32 0 0 1 .33 4h12.86a4.28 4.28 0 0 1 4.25 4.27l.01 11.41a.32.32 0 0 1-.32.32zm-6.9 0a.3.3 0 0 1-.3-.3v-9a.3.3 0 0 1 .3-.3h3.77a.3.3 0 0 1 .29.3v9a.3.3 0 0 1-.3.3z'></path></svg>",
      Huawei: "<svg fill='currentColor' width='18' height='18' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M3.67 6.14S1.82 7.91 1.72 9.78v.35c.08 1.51 1.22 2.4 1.22 2.4 1.83 1.79 6.26 4.04 7.3 4.55 0 0 .06.03.1-.01l.02-.04v-.04C7.52 10.8 3.67 6.14 3.67 6.14zM9.65 18.6c-.02-.08-.1-.08-.1-.08l-7.38.26c.8 1.43 2.15 2.53 3.56 2.2.96-.25 3.16-1.78 3.88-2.3.06-.05.04-.09.04-.09zm.08-.78C6.49 15.63.21 12.28.21 12.28c-.15.46-.2.9-.21 1.3v.07c0 1.07.4 1.82.4 1.82.8 1.69 2.34 2.2 2.34 2.2.7.3 1.4.31 1.4.31.12.02 4.4 0 5.54 0 .05 0 .08-.05.08-.05v-.06c0-.03-.03-.05-.03-.05zM9.06 3.19a3.42 3.42 0 00-2.57 3.15v.41c.03.6.16 1.05.16 1.05.66 2.9 3.86 7.65 4.55 8.65.05.05.1.03.1.03a.1.1 0 00.06-.1c1.06-10.6-1.11-13.42-1.11-13.42-.32.02-1.19.23-1.19.23zm8.299 2.27s-.49-1.8-2.44-2.28c0 0-.57-.14-1.17-.22 0 0-2.18 2.81-1.12 13.43.01.07.06.08.06.08.07.03.1-.03.1-.03.72-1.03 3.9-5.76 4.55-8.64 0 0 .36-1.4.02-2.34zm-2.92 13.07s-.07 0-.09.05c0 0-.01.07.03.1.7.51 2.85 2 3.88 2.3 0 0 .16.05.43.06h.14c.69-.02 1.9-.37 3-2.26l-7.4-.25zm7.83-8.41c.14-2.06-1.94-3.97-1.94-3.98 0 0-3.85 4.66-6.67 10.8 0 0-.03.08.02.13l.04.01h.06c1.06-.53 5.46-2.77 7.28-4.54 0 0 1.15-.93 1.21-2.42zm1.52 2.14s-6.28 3.37-9.52 5.55c0 0-.05.04-.03.11 0 0 .03.06.07.06 1.16 0 5.56 0 5.67-.02 0 0 .57-.02 1.27-.29 0 0 1.56-.5 2.37-2.27 0 0 .73-1.45.17-3.14z'></path></svg>",
      Samsung: "<svg fill='currentColor' width='18' height='18' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522'></path></svg>",
      Apple: "<svg fill='currentColor' width='18' height='18' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'></path></svg>",
      Facebook: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg>",
      Twitter: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/></svg>",
      Sentry: "<svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18' xmlns='http://www.w3.org/2000/svg'><path d='M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 018.53 12.811h-2.221A13.301 13.301 0 005.784 9.814l-2.926 5.06a7.65 7.65 0 014.435 5.848H2.194a.365.365 0 01-.298-.534l1.413-2.402a5.16 5.16 0 00-1.614-.913L.296 19.275a2.182 2.182 0 00.812 2.999 2.24 2.24 0 001.086.288h6.983a9.322 9.322 0 00-3.845-8.318l1.11-1.922a11.47 11.47 0 014.95 10.24h5.915a17.242 17.242 0 00-7.885-15.28l2.244-3.845a.37.37 0 01.504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 01-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 001.922-3.31z'/></svg>",
      Bugsnag: "<svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18' xmlns='http://www.w3.org/2000/svg'><path d='M12 24c-4.596 0-8.336-3.74-8.336-8.336v-4.135a.62.62 0 01.62-.62h2.957L7.23 1.337 4.903 2.77v5.45a.62.62 0 01-1.24 0V2.7c0-.384.204-.749.53-.95L6.773.166a1.114 1.114 0 011.699.949l.01 9.796h3.52a4.759 4.759 0 014.753 4.754 4.759 4.759 0 01-4.753 4.753 4.759 4.759 0 01-4.754-4.753l-.003-3.515H4.903v3.515c0 3.912 3.183 7.097 7.097 7.097a7.104 7.104 0 007.097-7.097A7.105 7.105 0 0012 8.567h-1.076a.62.62 0 010-1.24H12c4.596 0 8.336 3.74 8.336 8.336S16.596 24 12 24zM8.482 12.15l.004 3.514A3.518 3.518 0 0012 19.178a3.518 3.518 0 003.514-3.514A3.518 3.518 0 0012 12.149zm4.513 3.514a.995.995 0 01-.995.994.995.995 0 01-.995-.994.995.995 0 01.995-.995.995.995 0 01.995.995z'/></svg>",
      LinkedIn: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>",
      Pinterest: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z'/></svg>",
      Reddit: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z'/></svg>",
      TikTok: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'/></svg>",
      Yahoo: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M18.86 1.56l-4.59 10.31h5.13L24 1.56h-5.14M0 6.71l5.15 11.56-1.85 4.17h4.53l6.86-15.73h-4.5l-2.8 6.73-2.77-6.73H0m15.62 6.16c-1.67 0-2.91 1.25-2.91 2.71 0 1.42 1.2 2.61 2.79 2.61 1.68 0 2.93-1.23 2.93-2.69 0-1.47-1.2-2.63-2.81-2.63z'/></svg>",
      Hotjar: "<svg fill='currentColor' width='18' height='18' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21.055 7.814C17.512 1.404 7.118 0 7.118 0s4.798 5.34-1.334 9.567c-3.876 2.666-5.41 6.13-3.75 9.914 1.27 2.9 3.96 4.076 6.86 4.519-.745-1.434-.932-3.505-.381-5.628a8.51 8.51 0 0 1 .186-.636c.813 1.258 2.148 1.946 3.45 1.629 1.783-.424 2.829-2.582 2.342-4.799a5.104 5.104 0 0 0-.536-1.372c.07.017.14.024.212.047 2.225.635 3.301 3.962 2.403 7.434a9.266 9.266 0 0 1-1.325 2.946c3.82-1.23 6.36-4.311 7.06-7.056.736-2.856.177-6.185-1.25-8.751z'/></svg>",
      YouTube: "<svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>",
      Unity: "<svg fill='currentColor' width='18' height='18' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m12.929 4.294 3.8 2.193c.136.077.141.29 0 .367l-4.515 2.608a.42.42 0 0 1-.425 0L7.274 6.854c-.139-.074-.141-.293 0-.367l3.797-2.193V0L1.376 5.598v11.195l3.717-2.146v-4.385c-.002-.157.182-.269.318-.184l4.515 2.607a.425.425 0 0 1 .214.368v5.213c.002.156-.181.268-.318.184l-3.8-2.193-3.717 2.145L12 24l9.695-5.598-3.717-2.145-3.8 2.192c-.134.082-.323-.024-.318-.183v-5.213c0-.157.087-.296.214-.368l4.515-2.607c.134-.082.322.022.318.184v4.385l3.717 2.146V5.598L12.93 0Z'/></svg>",
      "Google Ads": "<svg fill='currentColor' width='18' height='18' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M4 22.93a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm19.464-6.001-8-13.857a4 4 0 0 0-6.93 4l8.001 13.857a4.001 4.001 0 0 0 6.93-4zM7.514 4.844l-5.95 10.304A4.5 4.5 0 0 1 4 14.43c2.56-.008 4.625 2.158 4.494 4.715l3.217-5.573-3.61-6.25a4.463 4.463 0 0 1-.587-2.478z'/></svg>",
      "Google Analytics": "<svg fill='currentColor' width='18' height='18' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M22.84 2.998v17.999a2.983 2.983 0 0 1-2.967 2.998 2.98 2.98 0 0 1-.368-.02 3.06 3.06 0 0 1-2.61-3.1V3.12A3.06 3.06 0 0 1 19.51.02a2.983 2.983 0 0 1 3.329 2.978zM4.133 18.055a2.973 2.973 0 1 0 0 5.945 2.973 2.973 0 0 0 0-5.945zm7.872-9.01h-.05a3.06 3.06 0 0 0-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 0 0 3.57-2.927v-8.959a2.983 2.983 0 0 0-2.978-2.988z'/></svg>",
      Adcolony: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 83 110'><path d='m27.1 85.6.1-.1c6.3-8.5 7-14.9 4.1-17.1-2.9-2.2-8.9.2-15.2 8.7-12.8-14.7-11.2-37 3.5-49.7 3-2.6 6.4-4.7 10-6.1-.5.1-1.1.2-1.6.4C9.2 26.2-2.3 45.2 2.4 64c1.7 6.9 5.5 13.1 10.8 17.8C7.9 91.3 3.2 106 0 110.2c3.3-4.5 17.1-13.7 24.6-21.7 6.4 2.3 13.4 2.6 20 1 .6-.1 1.2-.3 1.8-.5-6.7.8-13.3-.4-19.3-3.4zM11 95.5c1.6-3.9 3.4-8 5.2-11.2.8-1.4 1.6-2.8 2.6-4.1l.1-.1c4.8-6.4 8.5-7.7 9.3-7.3.5.6.3 4.5-4.5 11v.1c-.9 1.1-1.8 2.2-2.8 3.2-3.2 2.9-6.5 5.7-9.9 8.4z' transform='translate(-285 -100) translate(285 100)'/><path d='M66.8 38.1C81.8 18.1 82.7 0 82.7 0S65.6 5.9 50.6 26c-4.5 6.1-8.5 12.5-11.9 19.3h-.1l-10.2 1.4c1-1.9 1.8-3.8 2.4-5.9 0 0-4.7 2.4-10.7 10.4s-6.6 12.1-6.6 12.1l.5.3s3-1.3 7.8-7.2l11.5 1h.2c-.7 1.9-1.2 3.8-1.7 5.7l2.1 1.6c7.5-7.6 11.7-18 11.7-18-.5.7-7.2 8.2-9.9 11.2 0 0 6.6-16.8 15.8-29 12-16 22.4-21.2 22.4-21.2s-3.2 12.8-14.2 27.5c-3.9 5.2-8.2 10.2-12.8 14.8l-.6.6c-2.7 5.7-6.3 11-10.6 15.7l.5.4c.2-.1 1.8-1 4.4-2.8l.6-.4.1.2 4.3 10.8c-4.3 6.4-4.7 9.6-4.7 9.6l.5.3s3.8-1.6 9.8-9.7 7-13.2 7-13.2c-1.8 1.1-3.5 2.4-5 3.9l-1.5-10.2V55c5.5-5.2 10.6-10.8 15.1-16.9z' transform='translate(-285 -100) translate(285 100)'/><path d='M66.8 38.1C81.8 18.1 82.7 0 82.7 0S65.6 5.9 50.6 26c-4.5 6.1-8.5 12.5-11.9 19.3h-.1l-10.2 1.4c1-1.9 1.8-3.8 2.4-5.9 0 0-4.7 2.4-10.7 10.4s-6.6 12.1-6.6 12.1l.5.3s3-1.3 7.8-7.2l11.5 1h.2c-.7 1.9-1.2 3.8-1.7 5.7l2.1 1.6c7.5-7.6 11.7-18 11.7-18-.5.7-7.2 8.2-9.9 11.2 0 0 6.6-16.8 15.8-29 12-16 22.4-21.2 22.4-21.2s-3.2 12.8-14.2 27.5c-3.9 5.2-8.2 10.2-12.8 14.8l-.6.6c-2.7 5.7-6.3 11-10.6 15.7l.5.4c.2-.1 1.8-1 4.4-2.8l.6-.4.1.2 4.3 10.8c-4.3 6.4-4.7 9.6-4.7 9.6l.5.3s3.8-1.6 9.8-9.7 7-13.2 7-13.2c-1.8 1.1-3.5 2.4-5 3.9l-1.5-10.2V55c5.5-5.2 10.6-10.8 15.1-16.9z' transform='translate(-285 -100) translate(285 100)'/></svg>"
    };

    function s() {
      var t = this;
      t.n = document.querySelector("nav"), t.close = function() {
        document.body.style.overflow = "auto", t.n.classList.remove("active")
      }, t.open = function() {
        document.body.style.overflow = "hidden", t.n.classList.add("active")
      }, t.n && (document.querySelector("nav>button").addEventListener("click", (() => {
        console.log("toggleNav"), t.n.classList.contains("active") ? t.close() : t.open()
      })), document.querySelector("nav>.nav-overlay").addEventListener("click", (() => {
        t.close()
      })), document.querySelectorAll("nav ul > a").forEach((e => e.addEventListener("click", (() => {
        t.close()
      })))))
    }
    var a = n(383),
      i = n.n(a);

    function c() {
      var t = document.getElementsByClassName("theme-toggle");
      if (window.CSS && CSS.supports("color", "var(--bg)") && t) {
        var e = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        e && document.documentElement.setAttribute("data-theme", e);
        for (var o = 0; o < t.length; o++) t[o].onclick = function() {
          var t = "light";
          "light" === document.documentElement.getAttribute("data-theme") && (t = "dark"), document.documentElement.setAttribute("data-theme", t), localStorage.setItem("theme", t)
        }
      }
    }

    function r() {
      var t = this;
      t.gt = document.getElementById("gt-link"), t.scrollToTop = function() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }, t.listeners = function() {
        window.addEventListener("scroll", (() => {
          window.scrollY > 0 ? t.gt.classList.remove("hidden") : t.gt.classList.add("hidden")
        })), t.gt.onclick = function(e) {
          e.preventDefault(), (document.documentElement.scrollTop || document.body.scrollTop > 0) && t.scrollToTop()
        }
      }, t.gt && t.listeners()
    }

    function l() {
      let t = document.querySelectorAll("[class*=_aos]");
      if (IntersectionObserver && t) {
        let e = new IntersectionObserver((function(t) {
          t.forEach((t => {
            t.isIntersecting && !t.target.classList.contains("_aos-done") ? t.target.classList.add("_aos-done") : t.target.classList.remove("_aos-done")
          }))
        }), {
          root: null,
          threshold: 0
        });
        t.forEach((t => {
          e.observe(t)
        }))
      }
    }

    function d(t, e) {
      t.style.opacity = 0, t.style.display = e || "block",
        function e() {
          var o = parseFloat(t.style.opacity);
          (o += .1) > 1 || (t.style.opacity = o, requestAnimationFrame(e))
        }()
    }
    class h {
      constructor(t) {
        this.LS = null, this.name = t, this.checkLS(), this.init(t)
      }
      clearAll() {
        this.LS.clear()
      }
      checkLS() {
        window && window.localStorage ? this.LS = window.localStorage : console.log("localStorage is there?")
      }
      init(t) {
        this.LS && (this.LS[t] ? this.data = JSON.parse(this.LS[t]) : this.data = {})
      }
      set(t, e) {
        this.data[t] = e, this.LS && (this.LS[this.name] = JSON.stringify(this.data))
      }
      get(t) {
        return !!this.data[t] && this.data[t]
      }
    }
    const u = document.querySelector("#dlg_changelog");
    new(i())(u);
    var m = new h("toolz");
    const p = "3.0.0";
    m.get("version") !== p && m.set("version", p);
    var v = new h("adb_tool"),
      g = v.get("results"),
      w = v.get("settings");
    w && null != w.showCF || (w = {
      collapseAll: !0,
      showCF: !0,
      showSL: !0
    }, v.set("settings", w));
    var y = "";
    g || (g = []);
    var f = document.getElementById("test_log"),
      b = new function(t) {
        const e = this;
        e.snack = document.createElement("div"), e.snack.className = "snackbar", e.message = document.createElement("div"), e.snack.appendChild(e.message), document.body.appendChild(e.snack), e.top = t.topPos, e.classNames = t.classNames, e.autoClose = "boolean" == typeof t.autoClose && t.autoClose, e.autoCloseTimeout = t.autoClose && "number" == typeof t.autoCloseTimeout ? t.autoCloseTimeout : 3e3, e.reset = function() {
          e.message.innerHTML = "", e.snack.classList.remove(e.classNames)
        }, e.show = function(t, o) {
          e.hide(), e.message.innerHTML = t, e.snack.style.top = e.top, e.snack.classList.add(o || e.classNames), e.autoClose && setTimeout((function() {
            e.hide()
          }), e.autoCloseTimeout)
        }, e.hide = function() {
          e.snack.style.top = "-100%", e.reset()
        }
      }({
        topPos: "10px",
        classNames: "success",
        autoClose: !0,
        autoCloseTimeout: 2e3
      });
    async function k(t) {
      try {
        await navigator.clipboard.writeText(t).then((() => {
          b.show("URL copied to clipboard !")
        }))
      } catch (e) {
        const o = document.createElement("textarea");
        o.value = t, o.setAttribute("readonly", ""), o.style.position = "absolute", o.style.left = "-9999px", document.body.appendChild(o), o.select(), o.setSelectionRange(0, 99999), document.execCommand("copy"), o.remove(), b.show("URL copied to clipboard !")
      }
    }
    var _ = {
      total: 0,
      blocked: 0,
      notblocked: 0,
      cosmetic_test: {
        static: null,
        dynamic: null
      },
      script: {
        ads: null,
        pagead: null,
        partnerads: null
      },
      hosts: {}
    };
    const x = document.getElementById("test");
    async function M(t, e, s, n, a) {
      const i = new AbortController,
        c = {
          method: "HEAD",
          mode: "no-cors",
          signal: i.signal
        },
        r = setTimeout((() => {
          i.abort()
        }), 8e3);
      _.total += 1;
      var l = document.createElement("div");
      l.onclick = () => {
        k(t)
      }, e.appendChild(l);
      try {
        await fetch("https://" + t, c, r, s, e).then((e => {
          console.log(e), "basic" == e.type && 200 == e.status ? (l.innerHTML = o.v + "<span>" + t + "</span>", _.blocked += 1, Object.assign(_.hosts[n][a], {
            [t]: !0
          }), y += "<br> " + t + " - blocked") : (s.style.background = "var(--red)", l.innerHTML = o.x + "<span>" + t + "</span>", _.notblocked += 1, Object.assign(_.hosts[n][a], {
            [t]: !1
          }), y += "<br> " + t + " - not blocked")
        })).catch((e => {
          console.log(e), console.log(e.message), l.innerHTML = o.v + "<span>" + t + "</span>", _.blocked += 1, Object.assign(_.hosts[n][a], {
            [t]: !0
          }), y += "<br> " + t + " - blocked"
        }))
      } catch (t) {
        console.log(t)
      }
    }

    function L(t, e) {
      document.querySelectorAll(".test_collapse").forEach((o => {
        1 == t ? o.parentElement.classList.add("show") : o.parentElement.classList.remove("show"), 1 == e && o.addEventListener("click", (() => {
          o.parentElement.classList.toggle("show")
        }))
      }))
    }
    const C = document.querySelector("#ctd_test");
    const E = document.querySelector(".lt_particles"),
      S = document.querySelector(".lt_cwrap");
    async function z() {
      document.querySelector(".lt_wrap").classList.add("start"), S.classList.add("start");
      let t = [];
      return 1 == w.showCF ? (_.total += 4, t.push(void setTimeout((function() {
        const t = document.querySelector("#cts_test");
        _.cosmetic_test.static = !t.clientHeight && !t.offsetHeight && "block" != window.getComputedStyle(t, null).getPropertyValue("display"), _.blocked += _.cosmetic_test.static ? 2 : 0, _.notblocked += _.cosmetic_test.static ? 0 : 2, document.querySelector("#ct_static").classList.add(_.cosmetic_test.static ? "_bg-green" : "_bg-red");
        let e = document.createElement("div");
        f.appendChild(e), e.innerHTML = " cosmetic_static_ad : " + _.cosmetic_test.static + "<br><br> ------------------------- ", H()
      }), 500)), t.push(function() {
        let t = document.createElement("div"),
          e = document.createElement("div");
        e.id = "ad_ctd", e.className = "textads banner-ads banner_ads ad-unit afs_ads ad-zone ad-space adsbox", e.innerHTML = "&nbsp;", C.appendChild(e), setTimeout((function() {
          let e = document.querySelector("#ad_ctd");
          _.cosmetic_test.dynamic = !e.offsetHeight && !e.clientHeight && "block" != window.getComputedStyle(e, null).getPropertyValue("display"), _.blocked += _.cosmetic_test.dynamic ? 2 : 0, _.notblocked += _.cosmetic_test.dynamic ? 0 : 2, f.appendChild(t), t.innerHTML = " cosmetic_dynamic_ad : " + _.cosmetic_test.dynamic + "<br><br> ------------------------- ", document.querySelector("#ct_dynamic").classList.add(_.cosmetic_test.dynamic ? "_bg-green" : "_bg-red"), H()
        }), 500)
      }())) : document.querySelector("#cf_wrap").style.display = "none", 1 == w.showSL ? (_.total += 6, t.push(function() {
        let t = document.createElement("div");
        const e = document.querySelector("#sfa_1"),
          o = document.querySelector("#sfa_2"),
          s = document.querySelector("#sfa_3");
        _.script.ads = "undefined" == typeof s_test_ads, _.script.pagead = "undefined" == typeof s_test_pagead, _.script.partnerads = "undefined" == typeof s_test_partnerads, e.classList.add(_.script.ads ? "_bg-green" : "_bg-red"), o.classList.add(_.script.pagead ? "_bg-green" : "_bg-red"), s.classList.add(_.script.partnerads ? "_bg-green" : "_bg-red"), _.blocked += (_.script.ads ? 2 : 0) + (_.script.pagead ? 2 : 0) + (_.script.partnerads ? 2 : 0), _.notblocked += (_.script.ads ? 0 : 2) + (_.script.pagead ? 0 : 2) + (_.script.partnerads ? 0 : 2), f.appendChild(t), t.innerHTML = "<div>script_ads : " + _.script.ads + "</div><div>script_pagead : " + _.script.pagead + "</div><div>script_partenrads : " + _.script.partnerads + "</div><br> ------------------------- ", H()
      }())) : document.querySelector("#sl_wrap").style.display = "none", t.push(async function() {
        let t = [];
        return Object.keys(e).forEach((s => {
          if ("default" != s) {
            var n = document.createElement("div");
            n.className = "grid", n.id = s, n.innerHTML = "<div><h5>" + o[s] + "&nbsp;&nbsp;" + s + "</h5><div>", x.appendChild(n);
            var a = e[s],
              i = 0;
            _.hosts[s] = {};
            var c = document.createElement("div");
            c.classList.add("col-6");
            var r = document.createElement("div");
            r.classList.add("col-6"), n.appendChild(r), n.appendChild(c);
            var l = 0;
            Object.keys(a).forEach((e => {
              var n = document.createElement("div"),
                d = 0,
                h = document.createElement("div");
              const u = document.createElement("div");
              h.classList.add("test"), h.id = e, h.style.background = "var(--green)";
              let m = null != o[e] ? o[e] + "&nbsp" : "";
              if (h.innerHTML = "<span class='test_collapse'>" + m + e + "</span>", h.appendChild(u), l % 2 == 0 ? r.appendChild(h) : c.appendChild(h), l++, Object.assign(_.hosts[s], {
                  [e]: {}
                }), Object.prototype.hasOwnProperty.call(a, e)) {
                var p = a[e];
                for (let o = 0; o < p.length; o++) t.push(M(p[o], u, h, s, e).then((() => {
                  H()
                }))), d++
              }
              n.innerHTML = e + " => n° tests => " + d, f.appendChild(n), i += d
            }));
            var d = document.createElement("div");
            d.innerHTML = s + " => Total n° tests => " + i + "<br> ------------------------- ", f.appendChild(d)
          }
        })), await Promise.all(t)
      }()), await Promise.all(t)
    }

    function H() {
      var t = 100 / _.total * _.blocked,
        e = t > 30 ? t > 60 ? "var(--green)" : "var(--orange)" : "var(--red)";
      document.body.style.setProperty("--liquid-percentage", 45 - t + "%"), document.body.style.setProperty("--liquid-color", e), document.body.style.setProperty("--liquid-title", "'" + Math.round(t) + "%'")
    }

    function A() {
      ! function(t, e) {
        t.style.opacity = 1,
          function o() {
            (t.style.opacity -= .1) < 0 ? (t.style.display = "none", e && e()) : requestAnimationFrame(o)
          }()
      }(E, (() => {
        document.querySelector(".lt_wrap").classList.remove("start"), d(E, "flex"), document.body.classList.remove("_overflowhidden")
      })), S.classList.remove("start"), console.log(_)
    }

    function T() {
      var t = document.querySelector(".r_wrap");
      t.innerHTML = "", g.forEach(((e, s) => {
        var n = document.createElement("div");
        n.className = "col-6";
        var a = g[s].abt,
          i = "<span>" + o.cdot + "Total : " + a.total + "</span><br><span>" + o.x + " " + a.notblocked + " not blocked</span><span>" + o.v + " " + a.blocked + " blocked</span>";
        n.innerHTML = "<div class='card'><div>" + i + "<br><h6>" + e.date + '</h6></div><div><button class="btn-blue outline" data-r=' + e.time + ">" + o.download + "</button></div></div>", t.insertBefore(n, t.children[0])
      })), document.querySelectorAll("button[data-r]").forEach((t => {
        t.addEventListener("click", (() => {
          ! function(t) {
            var e;
            g.forEach((o => {
              console.log(o.time, t), o.time == t && (e = o)
            }));
            var o = JSON.stringify(e),
              s = new Blob([o], {
                type: "application/json"
              }),
              n = URL.createObjectURL(s),
              a = document.createElement("a");
            a.setAttribute("download", "d3_adb_" + e.date + ".json");
            var i = function() {
              URL.revokeObjectURL(a.href), a.href = n, a.click()
            };
            a.href ? (URL.revokeObjectURL(a.href), setTimeout(i, 1e3)) : i()
          }(t.getAttribute("data-r"))
        }))
      }))
    }

    function j(t) {
      return (t < 10 ? "0" : "") + t
    }
    window.onbeforeunload = function() {
      window.scrollTo(0, 0)
    };
    document.addEventListener("DOMContentLoaded", (function() {
      new s, new c, new r, new l, console.log(w);
      for (const t in w) try {
        console.log(`${t}: ${w[t]}`);
        const e = document.querySelector("#" + t);
        e.checked = w[t], e.addEventListener("change", (() => {
          w[t] = e.checked, console.log(t, e.checked), "collapseAll" == t && L(w[t], !1), v.set("settings", w)
        }))
      } catch (t) {
        console.log(t)
      }
      T(), z().then((() => {
        L(w.collapseAll, !0), setTimeout((() => {
          A(),
            function() {
              let t = Date.now();
              var e = new Date(t);
              let o = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear() + " " + j(e.getHours()) + ":" + j(e.getMinutes()) + ":" + j(e.getSeconds());
              g.length < 10 || g.splice(0, 1), g.push({
                time: t,
                date: o,
                note: "",
                abt: _
              }), v.set("results", g), T(), console.log(_)
            }();
          var t = document.createElement("div");
          y += "<br>-----<br> Total : " + _.total + "<br> Blocked : " + _.blocked + "<br> Not Blocked : " + _.notblocked, t.innerHTML = y, f.appendChild(t), d(document.querySelector("#adb_test"), "flex");
          document.querySelector("#adb_test_r").innerHTML = "<span>" + o.cdot + " Total : " + _.total + "</span><span>" + o.v + " " + _.blocked + " blocked</span><span>" + o.x + " " + _.notblocked + " not blocked </span>"
        }), 2e3)
      })), document.querySelector("#start_test").addEventListener("click", (() => {
        location.reload(!0)
      }));
      var t;
      document.querySelector("#d3H_txt").addEventListener("click", (function() {
        k("https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.txt")
      })), (t = "#d3H_adblock", document.querySelector(t)).addEventListener("click", (function() {
        k("https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.adblock")
      }))
    }))
  })()
})();
