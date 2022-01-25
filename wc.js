(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
      if (decorator = decorators[i4])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e6) {
          reject(e6);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e6) {
          reject(e6);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t4, e6) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e6() : typeof define == "function" && define.amd ? define(e6) : (t4 = typeof globalThis != "undefined" ? globalThis : t4 || self).dayjs = e6();
      }(exports, function() {
        "use strict";
        var t4 = 1e3, e6 = 6e4, n7 = 36e5, r4 = "millisecond", i4 = "second", s5 = "minute", u2 = "hour", a3 = "day", o6 = "week", f2 = "month", h3 = "quarter", c2 = "year", d2 = "date", $2 = "Invalid Date", l5 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m2 = function(t5, e7, n8) {
          var r5 = String(t5);
          return !r5 || r5.length >= e7 ? t5 : "" + Array(e7 + 1 - r5.length).join(n8) + t5;
        }, g2 = { s: m2, z: function(t5) {
          var e7 = -t5.utcOffset(), n8 = Math.abs(e7), r5 = Math.floor(n8 / 60), i5 = n8 % 60;
          return (e7 <= 0 ? "+" : "-") + m2(r5, 2, "0") + ":" + m2(i5, 2, "0");
        }, m: function t5(e7, n8) {
          if (e7.date() < n8.date())
            return -t5(n8, e7);
          var r5 = 12 * (n8.year() - e7.year()) + (n8.month() - e7.month()), i5 = e7.clone().add(r5, f2), s6 = n8 - i5 < 0, u3 = e7.clone().add(r5 + (s6 ? -1 : 1), f2);
          return +(-(r5 + (n8 - i5) / (s6 ? i5 - u3 : u3 - i5)) || 0);
        }, a: function(t5) {
          return t5 < 0 ? Math.ceil(t5) || 0 : Math.floor(t5);
        }, p: function(t5) {
          return { M: f2, y: c2, w: o6, d: a3, D: d2, h: u2, m: s5, s: i4, ms: r4, Q: h3 }[t5] || String(t5 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t5) {
          return t5 === void 0;
        } }, D = "en", v2 = {};
        v2[D] = M2;
        var p2 = function(t5) {
          return t5 instanceof _2;
        }, S3 = function(t5, e7, n8) {
          var r5;
          if (!t5)
            return D;
          if (typeof t5 == "string")
            v2[t5] && (r5 = t5), e7 && (v2[t5] = e7, r5 = t5);
          else {
            var i5 = t5.name;
            v2[i5] = t5, r5 = i5;
          }
          return !n8 && r5 && (D = r5), r5 || !n8 && D;
        }, w2 = function(t5, e7) {
          if (p2(t5))
            return t5.clone();
          var n8 = typeof e7 == "object" ? e7 : {};
          return n8.date = t5, n8.args = arguments, new _2(n8);
        }, O = g2;
        O.l = S3, O.i = p2, O.w = function(t5, e7) {
          return w2(t5, { locale: e7.$L, utc: e7.$u, x: e7.$x, $offset: e7.$offset });
        };
        var _2 = function() {
          function M3(t5) {
            this.$L = S3(t5.locale, null, true), this.parse(t5);
          }
          var m3 = M3.prototype;
          return m3.parse = function(t5) {
            this.$d = function(t6) {
              var e7 = t6.date, n8 = t6.utc;
              if (e7 === null)
                return new Date(NaN);
              if (O.u(e7))
                return new Date();
              if (e7 instanceof Date)
                return new Date(e7);
              if (typeof e7 == "string" && !/Z$/i.test(e7)) {
                var r5 = e7.match(l5);
                if (r5) {
                  var i5 = r5[2] - 1 || 0, s6 = (r5[7] || "0").substring(0, 3);
                  return n8 ? new Date(Date.UTC(r5[1], i5, r5[3] || 1, r5[4] || 0, r5[5] || 0, r5[6] || 0, s6)) : new Date(r5[1], i5, r5[3] || 1, r5[4] || 0, r5[5] || 0, r5[6] || 0, s6);
                }
              }
              return new Date(e7);
            }(t5), this.$x = t5.x || {}, this.init();
          }, m3.init = function() {
            var t5 = this.$d;
            this.$y = t5.getFullYear(), this.$M = t5.getMonth(), this.$D = t5.getDate(), this.$W = t5.getDay(), this.$H = t5.getHours(), this.$m = t5.getMinutes(), this.$s = t5.getSeconds(), this.$ms = t5.getMilliseconds();
          }, m3.$utils = function() {
            return O;
          }, m3.isValid = function() {
            return !(this.$d.toString() === $2);
          }, m3.isSame = function(t5, e7) {
            var n8 = w2(t5);
            return this.startOf(e7) <= n8 && n8 <= this.endOf(e7);
          }, m3.isAfter = function(t5, e7) {
            return w2(t5) < this.startOf(e7);
          }, m3.isBefore = function(t5, e7) {
            return this.endOf(e7) < w2(t5);
          }, m3.$g = function(t5, e7, n8) {
            return O.u(t5) ? this[e7] : this.set(n8, t5);
          }, m3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m3.valueOf = function() {
            return this.$d.getTime();
          }, m3.startOf = function(t5, e7) {
            var n8 = this, r5 = !!O.u(e7) || e7, h4 = O.p(t5), $3 = function(t6, e8) {
              var i5 = O.w(n8.$u ? Date.UTC(n8.$y, e8, t6) : new Date(n8.$y, e8, t6), n8);
              return r5 ? i5 : i5.endOf(a3);
            }, l6 = function(t6, e8) {
              return O.w(n8.toDate()[t6].apply(n8.toDate("s"), (r5 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e8)), n8);
            }, y3 = this.$W, M4 = this.$M, m4 = this.$D, g3 = "set" + (this.$u ? "UTC" : "");
            switch (h4) {
              case c2:
                return r5 ? $3(1, 0) : $3(31, 11);
              case f2:
                return r5 ? $3(1, M4) : $3(0, M4 + 1);
              case o6:
                var D2 = this.$locale().weekStart || 0, v3 = (y3 < D2 ? y3 + 7 : y3) - D2;
                return $3(r5 ? m4 - v3 : m4 + (6 - v3), M4);
              case a3:
              case d2:
                return l6(g3 + "Hours", 0);
              case u2:
                return l6(g3 + "Minutes", 1);
              case s5:
                return l6(g3 + "Seconds", 2);
              case i4:
                return l6(g3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m3.endOf = function(t5) {
            return this.startOf(t5, false);
          }, m3.$set = function(t5, e7) {
            var n8, o7 = O.p(t5), h4 = "set" + (this.$u ? "UTC" : ""), $3 = (n8 = {}, n8[a3] = h4 + "Date", n8[d2] = h4 + "Date", n8[f2] = h4 + "Month", n8[c2] = h4 + "FullYear", n8[u2] = h4 + "Hours", n8[s5] = h4 + "Minutes", n8[i4] = h4 + "Seconds", n8[r4] = h4 + "Milliseconds", n8)[o7], l6 = o7 === a3 ? this.$D + (e7 - this.$W) : e7;
            if (o7 === f2 || o7 === c2) {
              var y3 = this.clone().set(d2, 1);
              y3.$d[$3](l6), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
            } else
              $3 && this.$d[$3](l6);
            return this.init(), this;
          }, m3.set = function(t5, e7) {
            return this.clone().$set(t5, e7);
          }, m3.get = function(t5) {
            return this[O.p(t5)]();
          }, m3.add = function(r5, h4) {
            var d3, $3 = this;
            r5 = Number(r5);
            var l6 = O.p(h4), y3 = function(t5) {
              var e7 = w2($3);
              return O.w(e7.date(e7.date() + Math.round(t5 * r5)), $3);
            };
            if (l6 === f2)
              return this.set(f2, this.$M + r5);
            if (l6 === c2)
              return this.set(c2, this.$y + r5);
            if (l6 === a3)
              return y3(1);
            if (l6 === o6)
              return y3(7);
            var M4 = (d3 = {}, d3[s5] = e6, d3[u2] = n7, d3[i4] = t4, d3)[l6] || 1, m4 = this.$d.getTime() + r5 * M4;
            return O.w(m4, this);
          }, m3.subtract = function(t5, e7) {
            return this.add(-1 * t5, e7);
          }, m3.format = function(t5) {
            var e7 = this, n8 = this.$locale();
            if (!this.isValid())
              return n8.invalidDate || $2;
            var r5 = t5 || "YYYY-MM-DDTHH:mm:ssZ", i5 = O.z(this), s6 = this.$H, u3 = this.$m, a4 = this.$M, o7 = n8.weekdays, f3 = n8.months, h4 = function(t6, n9, i6, s7) {
              return t6 && (t6[n9] || t6(e7, r5)) || i6[n9].substr(0, s7);
            }, c3 = function(t6) {
              return O.s(s6 % 12 || 12, t6, "0");
            }, d3 = n8.meridiem || function(t6, e8, n9) {
              var r6 = t6 < 12 ? "AM" : "PM";
              return n9 ? r6.toLowerCase() : r6;
            }, l6 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a4 + 1, MM: O.s(a4 + 1, 2, "0"), MMM: h4(n8.monthsShort, a4, f3, 3), MMMM: h4(f3, a4), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h4(n8.weekdaysMin, this.$W, o7, 2), ddd: h4(n8.weekdaysShort, this.$W, o7, 3), dddd: o7[this.$W], H: String(s6), HH: O.s(s6, 2, "0"), h: c3(1), hh: c3(2), a: d3(s6, u3, true), A: d3(s6, u3, false), m: String(u3), mm: O.s(u3, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i5 };
            return r5.replace(y2, function(t6, e8) {
              return e8 || l6[t6] || i5.replace(":", "");
            });
          }, m3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m3.diff = function(r5, d3, $3) {
            var l6, y3 = O.p(d3), M4 = w2(r5), m4 = (M4.utcOffset() - this.utcOffset()) * e6, g3 = this - M4, D2 = O.m(this, M4);
            return D2 = (l6 = {}, l6[c2] = D2 / 12, l6[f2] = D2, l6[h3] = D2 / 3, l6[o6] = (g3 - m4) / 6048e5, l6[a3] = (g3 - m4) / 864e5, l6[u2] = g3 / n7, l6[s5] = g3 / e6, l6[i4] = g3 / t4, l6)[y3] || g3, $3 ? D2 : O.a(D2);
          }, m3.daysInMonth = function() {
            return this.endOf(f2).$D;
          }, m3.$locale = function() {
            return v2[this.$L];
          }, m3.locale = function(t5, e7) {
            if (!t5)
              return this.$L;
            var n8 = this.clone(), r5 = S3(t5, e7, true);
            return r5 && (n8.$L = r5), n8;
          }, m3.clone = function() {
            return O.w(this.$d, this);
          }, m3.toDate = function() {
            return new Date(this.valueOf());
          }, m3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m3.toISOString = function() {
            return this.$d.toISOString();
          }, m3.toString = function() {
            return this.$d.toUTCString();
          }, M3;
        }(), b2 = _2.prototype;
        return w2.prototype = b2, [["$ms", r4], ["$s", i4], ["$m", s5], ["$H", u2], ["$W", a3], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t5) {
          b2[t5[1]] = function(e7) {
            return this.$g(e7, t5[0], t5[1]);
          };
        }), w2.extend = function(t5, e7) {
          return t5.$i || (t5(e7, _2, w2), t5.$i = true), w2;
        }, w2.locale = S3, w2.isDayjs = p2, w2.unix = function(t5) {
          return w2(1e3 * t5);
        }, w2.en = v2[D], w2.Ls = v2, w2.p = {}, w2;
      });
    }
  });

  // node_modules/dayjs/plugin/relativeTime.js
  var require_relativeTime = __commonJS({
    "node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
      !function(r4, e6) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e6() : typeof define == "function" && define.amd ? define(e6) : (r4 = typeof globalThis != "undefined" ? globalThis : r4 || self).dayjs_plugin_relativeTime = e6();
      }(exports, function() {
        "use strict";
        return function(r4, e6, t4) {
          r4 = r4 || {};
          var n7 = e6.prototype, o6 = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
          function i4(r5, e7, t5, o7) {
            return n7.fromToBase(r5, e7, t5, o7);
          }
          t4.en.relativeTime = o6, n7.fromToBase = function(e7, n8, i5, d3, u2) {
            for (var f2, a3, s5, l5 = i5.$locale().relativeTime || o6, h3 = r4.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m2 = h3.length, c2 = 0; c2 < m2; c2 += 1) {
              var y2 = h3[c2];
              y2.d && (f2 = d3 ? t4(e7).diff(i5, y2.d, true) : i5.diff(e7, y2.d, true));
              var p2 = (r4.rounding || Math.round)(Math.abs(f2));
              if (s5 = f2 > 0, p2 <= y2.r || !y2.r) {
                p2 <= 1 && c2 > 0 && (y2 = h3[c2 - 1]);
                var v2 = l5[y2.l];
                u2 && (p2 = u2("" + p2)), a3 = typeof v2 == "string" ? v2.replace("%d", p2) : v2(p2, n8, y2.l, s5);
                break;
              }
            }
            if (n8)
              return a3;
            var M2 = s5 ? l5.future : l5.past;
            return typeof M2 == "function" ? M2(a3) : M2.replace("%s", a3);
          }, n7.to = function(r5, e7) {
            return i4(r5, e7, this, true);
          }, n7.from = function(r5, e7) {
            return i4(r5, e7, this);
          };
          var d2 = function(r5) {
            return r5.$u ? t4.utc() : t4();
          };
          n7.toNow = function(r5) {
            return this.to(d2(this), r5);
          }, n7.fromNow = function(r5) {
            return this.from(d2(this), r5);
          };
        };
      });
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e = Symbol();
  var n = /* @__PURE__ */ new Map();
  var s = class {
    constructor(t4, n7) {
      if (this._$cssResult$ = true, n7 !== e)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4;
    }
    get styleSheet() {
      let e6 = n.get(this.cssText);
      return t && e6 === void 0 && (n.set(this.cssText, e6 = new CSSStyleSheet()), e6.replaceSync(this.cssText)), e6;
    }
    toString() {
      return this.cssText;
    }
  };
  var o = (t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e);
  var r = (t4, ...n7) => {
    const o6 = t4.length === 1 ? t4[0] : n7.reduce((e6, n8, s5) => e6 + ((t5) => {
      if (t5._$cssResult$ === true)
        return t5.cssText;
      if (typeof t5 == "number")
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n8) + t4[s5 + 1], t4[0]);
    return new s(o6, e);
  };
  var i = (e6, n7) => {
    t ? e6.adoptedStyleSheets = n7.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n7.forEach((t4) => {
      const n8 = document.createElement("style"), s5 = window.litNonce;
      s5 !== void 0 && n8.setAttribute("nonce", s5), n8.textContent = t4.cssText, e6.appendChild(n8);
    });
  };
  var S = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const n7 of t5.cssRules)
      e6 += n7.cssText;
    return o(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window.trustedTypes;
  var r2 = e2 ? e2.emptyScript : "";
  var h = window.reactiveElementPolyfillSupport;
  var o2 = { toAttribute(t4, i4) {
    switch (i4) {
      case Boolean:
        t4 = t4 ? r2 : null;
        break;
      case Object:
      case Array:
        t4 = t4 == null ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, i4) {
    let s5 = t4;
    switch (i4) {
      case Boolean:
        s5 = t4 !== null;
        break;
      case Number:
        s5 = t4 === null ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t4);
        } catch (t5) {
          s5 = null;
        }
    }
    return s5;
  } };
  var n2 = (t4, i4) => i4 !== t4 && (i4 == i4 || t4 == t4);
  var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
  var a = class extends HTMLElement {
    constructor() {
      super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t4) {
      var i4;
      (i4 = this.l) !== null && i4 !== void 0 || (this.l = []), this.l.push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      const t4 = [];
      return this.elementProperties.forEach((i4, s5) => {
        const e6 = this._$Eh(s5, i4);
        e6 !== void 0 && (this._$Eu.set(e6, s5), t4.push(e6));
      }), t4;
    }
    static createProperty(t4, i4 = l) {
      if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t4, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        const s5 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e6 = this.getPropertyDescriptor(t4, s5, i4);
        e6 !== void 0 && Object.defineProperty(this.prototype, t4, e6);
      }
    }
    static getPropertyDescriptor(t4, i4, s5) {
      return { get() {
        return this[i4];
      }, set(e6) {
        const r4 = this[t4];
        this[i4] = e6, this.requestUpdate(t4, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t5 = this.properties, i4 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
        for (const s5 of i4)
          this.createProperty(s5, t5[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i4) {
      const s5 = [];
      if (Array.isArray(i4)) {
        const e6 = new Set(i4.flat(1 / 0).reverse());
        for (const i5 of e6)
          s5.unshift(S(i5));
      } else
        i4 !== void 0 && s5.push(S(i4));
      return s5;
    }
    static _$Eh(t4, i4) {
      const s5 = i4.attribute;
      return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
    }
    o() {
      var t4;
      this._$Ep = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
    }
    addController(t4) {
      var i4, s5;
      ((i4 = this._$Eg) !== null && i4 !== void 0 ? i4 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s5 = t4.hostConnected) === null || s5 === void 0 || s5.call(t4));
    }
    removeController(t4) {
      var i4;
      (i4 = this._$Eg) === null || i4 === void 0 || i4.splice(this._$Eg.indexOf(t4) >>> 0, 1);
    }
    _$Em() {
      this.constructor.elementProperties.forEach((t4, i4) => {
        this.hasOwnProperty(i4) && (this._$Et.set(i4, this[i4]), delete this[i4]);
      });
    }
    createRenderRoot() {
      var t4;
      const s5 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return i(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t4;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
        var i4;
        return (i4 = t5.hostConnected) === null || i4 === void 0 ? void 0 : i4.call(t5);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
        var i4;
        return (i4 = t5.hostDisconnected) === null || i4 === void 0 ? void 0 : i4.call(t5);
      });
    }
    attributeChangedCallback(t4, i4, s5) {
      this._$AK(t4, s5);
    }
    _$ES(t4, i4, s5 = l) {
      var e6, r4;
      const h3 = this.constructor._$Eh(t4, s5);
      if (h3 !== void 0 && s5.reflect === true) {
        const n7 = ((r4 = (e6 = s5.converter) === null || e6 === void 0 ? void 0 : e6.toAttribute) !== null && r4 !== void 0 ? r4 : o2.toAttribute)(i4, s5.type);
        this._$Ei = t4, n7 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n7), this._$Ei = null;
      }
    }
    _$AK(t4, i4) {
      var s5, e6, r4;
      const h3 = this.constructor, n7 = h3._$Eu.get(t4);
      if (n7 !== void 0 && this._$Ei !== n7) {
        const t5 = h3.getPropertyOptions(n7), l5 = t5.converter, a3 = (r4 = (e6 = (s5 = l5) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e6 !== void 0 ? e6 : typeof l5 == "function" ? l5 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
        this._$Ei = n7, this[n7] = a3(i4, t5.type), this._$Ei = null;
      }
    }
    requestUpdate(t4, i4, s5) {
      let e6 = true;
      t4 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || n2)(this[t4], i4) ? (this._$AL.has(t4) || this._$AL.set(t4, i4), s5.reflect === true && this._$Ei !== t4 && (this._$E_ === void 0 && (this._$E_ = /* @__PURE__ */ new Map()), this._$E_.set(t4, s5))) : e6 = false), !this.isUpdatePending && e6 && (this._$Ep = this._$EC());
    }
    async _$EC() {
      this.isUpdatePending = true;
      try {
        await this._$Ep;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return t4 != null && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Et && (this._$Et.forEach((t5, i5) => this[i5] = t5), this._$Et = void 0);
      let i4 = false;
      const s5 = this._$AL;
      try {
        i4 = this.shouldUpdate(s5), i4 ? (this.willUpdate(s5), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
          var i5;
          return (i5 = t5.hostUpdate) === null || i5 === void 0 ? void 0 : i5.call(t5);
        }), this.update(s5)) : this._$EU();
      } catch (t5) {
        throw i4 = false, this._$EU(), t5;
      }
      i4 && this._$AE(s5);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var i4;
      (i4 = this._$Eg) === null || i4 === void 0 || i4.forEach((t5) => {
        var i5;
        return (i5 = t5.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(t5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ep;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$E_ !== void 0 && (this._$E_.forEach((t5, i4) => this._$ES(i4, this[i4], t5)), this._$E_ = void 0), this._$EU();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.2.0");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = globalThis.trustedTypes;
  var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + e3;
  var n3 = `<${o3}>`;
  var l2 = document;
  var h2 = (t4 = "") => l2.createComment(t4);
  var r3 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
  var d = Array.isArray;
  var u = (t4) => {
    var i4;
    return d(t4) || typeof ((i4 = t4) === null || i4 === void 0 ? void 0 : i4[Symbol.iterator]) == "function";
  };
  var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var a2 = />/g;
  var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var _ = /'/g;
  var m = /"/g;
  var g = /^(?:script|style|textarea)$/i;
  var p = (t4) => (i4, ...s5) => ({ _$litType$: t4, strings: i4, values: s5 });
  var $ = p(1);
  var y = p(2);
  var b = Symbol.for("lit-noChange");
  var w = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var x = (t4, i4, s5) => {
    var e6, o6;
    const n7 = (e6 = s5 == null ? void 0 : s5.renderBefore) !== null && e6 !== void 0 ? e6 : i4;
    let l5 = n7._$litPart$;
    if (l5 === void 0) {
      const t5 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
      n7._$litPart$ = l5 = new N(i4.insertBefore(h2(), t5), t5, void 0, s5 != null ? s5 : {});
    }
    return l5._$AI(t4), l5;
  };
  var A = l2.createTreeWalker(l2, 129, null, false);
  var C = (t4, i4) => {
    const o6 = t4.length - 1, l5 = [];
    let h3, r4 = i4 === 2 ? "<svg>" : "", d2 = c;
    for (let i5 = 0; i5 < o6; i5++) {
      const s5 = t4[i5];
      let o7, u3, p2 = -1, $2 = 0;
      for (; $2 < s5.length && (d2.lastIndex = $2, u3 = d2.exec(s5), u3 !== null); )
        $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
      const y2 = d2 === f && t4[i5 + 1].startsWith("/>") ? " " : "";
      r4 += d2 === c ? s5 + n3 : p2 >= 0 ? (l5.push(o7), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (p2 === -2 ? (l5.push(void 0), i5) : y2);
    }
    const u2 = r4 + (t4[o6] || "<?>") + (i4 === 2 ? "</svg>" : "");
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [s3 !== void 0 ? s3.createHTML(u2) : u2, l5];
  };
  var E = class {
    constructor({ strings: t4, _$litType$: s5 }, n7) {
      let l5;
      this.parts = [];
      let r4 = 0, d2 = 0;
      const u2 = t4.length - 1, c2 = this.parts, [v2, a3] = C(t4, s5);
      if (this.el = E.createElement(v2, n7), A.currentNode = this.el.content, s5 === 2) {
        const t5 = this.el.content, i4 = t5.firstChild;
        i4.remove(), t5.append(...i4.childNodes);
      }
      for (; (l5 = A.nextNode()) !== null && c2.length < u2; ) {
        if (l5.nodeType === 1) {
          if (l5.hasAttributes()) {
            const t5 = [];
            for (const i4 of l5.getAttributeNames())
              if (i4.endsWith("$lit$") || i4.startsWith(e3)) {
                const s6 = a3[d2++];
                if (t5.push(i4), s6 !== void 0) {
                  const t6 = l5.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i5 = /([.?@])?(.*)/.exec(s6);
                  c2.push({ type: 1, index: r4, name: i5[2], strings: t6, ctor: i5[1] === "." ? M : i5[1] === "?" ? H : i5[1] === "@" ? I : S2 });
                } else
                  c2.push({ type: 6, index: r4 });
              }
            for (const i4 of t5)
              l5.removeAttribute(i4);
          }
          if (g.test(l5.tagName)) {
            const t5 = l5.textContent.split(e3), s6 = t5.length - 1;
            if (s6 > 0) {
              l5.textContent = i2 ? i2.emptyScript : "";
              for (let i4 = 0; i4 < s6; i4++)
                l5.append(t5[i4], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
              l5.append(t5[s6], h2());
            }
          }
        } else if (l5.nodeType === 8)
          if (l5.data === o3)
            c2.push({ type: 2, index: r4 });
          else {
            let t5 = -1;
            for (; (t5 = l5.data.indexOf(e3, t5 + 1)) !== -1; )
              c2.push({ type: 7, index: r4 }), t5 += e3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t4, i4) {
      const s5 = l2.createElement("template");
      return s5.innerHTML = t4, s5;
    }
  };
  function P(t4, i4, s5 = t4, e6) {
    var o6, n7, l5, h3;
    if (i4 === b)
      return i4;
    let d2 = e6 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e6] : s5._$Cu;
    const u2 = r3(i4) ? void 0 : i4._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n7 = d2 == null ? void 0 : d2._$AO) === null || n7 === void 0 || n7.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t4), d2._$AT(t4, s5, e6)), e6 !== void 0 ? ((l5 = (h3 = s5)._$Cl) !== null && l5 !== void 0 ? l5 : h3._$Cl = [])[e6] = d2 : s5._$Cu = d2), d2 !== void 0 && (i4 = P(t4, d2._$AS(t4, i4.values), d2, e6)), i4;
  }
  var V = class {
    constructor(t4, i4) {
      this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t4) {
      var i4;
      const { el: { content: s5 }, parts: e6 } = this._$AD, o6 = ((i4 = t4 == null ? void 0 : t4.creationScope) !== null && i4 !== void 0 ? i4 : l2).importNode(s5, true);
      A.currentNode = o6;
      let n7 = A.nextNode(), h3 = 0, r4 = 0, d2 = e6[0];
      for (; d2 !== void 0; ) {
        if (h3 === d2.index) {
          let i5;
          d2.type === 2 ? i5 = new N(n7, n7.nextSibling, this, t4) : d2.type === 1 ? i5 = new d2.ctor(n7, d2.name, d2.strings, this, t4) : d2.type === 6 && (i5 = new L(n7, this, t4)), this.v.push(i5), d2 = e6[++r4];
        }
        h3 !== (d2 == null ? void 0 : d2.index) && (n7 = A.nextNode(), h3++);
      }
      return o6;
    }
    m(t4) {
      let i4 = 0;
      for (const s5 of this.v)
        s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t4, s5, i4), i4 += s5.strings.length - 2) : s5._$AI(t4[i4])), i4++;
    }
  };
  var N = class {
    constructor(t4, i4, s5, e6) {
      var o6;
      this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s5, this.options = e6, this._$Cg = (o6 = e6 == null ? void 0 : e6.isConnected) === null || o6 === void 0 || o6;
    }
    get _$AU() {
      var t4, i4;
      return (i4 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i4 !== void 0 ? i4 : this._$Cg;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i4 = this._$AM;
      return i4 !== void 0 && t4.nodeType === 11 && (t4 = i4.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i4 = this) {
      t4 = P(this, t4, i4), r3(t4) ? t4 === w || t4 == null || t4 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t4 !== this._$AH && t4 !== b && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.S(t4) : u(t4) ? this.A(t4) : this.$(t4);
    }
    M(t4, i4 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t4, i4);
    }
    S(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.M(t4));
    }
    $(t4) {
      this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.S(l2.createTextNode(t4)), this._$AH = t4;
    }
    T(t4) {
      var i4;
      const { values: s5, _$litType$: e6 } = t4, o6 = typeof e6 == "number" ? this._$AC(t4) : (e6.el === void 0 && (e6.el = E.createElement(e6.h, this.options)), e6);
      if (((i4 = this._$AH) === null || i4 === void 0 ? void 0 : i4._$AD) === o6)
        this._$AH.m(s5);
      else {
        const t5 = new V(o6, this), i5 = t5.p(this.options);
        t5.m(s5), this.S(i5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i4 = T.get(t4.strings);
      return i4 === void 0 && T.set(t4.strings, i4 = new E(t4)), i4;
    }
    A(t4) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s5, e6 = 0;
      for (const o6 of t4)
        e6 === i4.length ? i4.push(s5 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s5 = i4[e6], s5._$AI(o6), e6++;
      e6 < i4.length && (this._$AR(s5 && s5._$AB.nextSibling, e6), i4.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i4) {
      var s5;
      for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i4); t4 && t4 !== this._$AB; ) {
        const i5 = t4.nextSibling;
        t4.remove(), t4 = i5;
      }
    }
    setConnected(t4) {
      var i4;
      this._$AM === void 0 && (this._$Cg = t4, (i4 = this._$AP) === null || i4 === void 0 || i4.call(this, t4));
    }
  };
  var S2 = class {
    constructor(t4, i4, s5, e6, o6) {
      this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e6, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, i4 = this, s5, e6) {
      const o6 = this.strings;
      let n7 = false;
      if (o6 === void 0)
        t4 = P(this, t4, i4, 0), n7 = !r3(t4) || t4 !== this._$AH && t4 !== b, n7 && (this._$AH = t4);
      else {
        const e7 = t4;
        let l5, h3;
        for (t4 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
          h3 = P(this, e7[s5 + l5], i4, l5), h3 === b && (h3 = this._$AH[l5]), n7 || (n7 = !r3(h3) || h3 !== this._$AH[l5]), h3 === w ? t4 = w : t4 !== w && (t4 += (h3 != null ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
      }
      n7 && !e6 && this.k(t4);
    }
    k(t4) {
      t4 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    k(t4) {
      this.element[this.name] = t4 === w ? void 0 : t4;
    }
  };
  var k = i2 ? i2.emptyScript : "";
  var H = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    k(t4) {
      t4 && t4 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
  };
  var I = class extends S2 {
    constructor(t4, i4, s5, e6, o6) {
      super(t4, i4, s5, e6, o6), this.type = 5;
    }
    _$AI(t4, i4 = this) {
      var s5;
      if ((t4 = (s5 = P(this, t4, i4, 0)) !== null && s5 !== void 0 ? s5 : w) === b)
        return;
      const e6 = this._$AH, o6 = t4 === w && e6 !== w || t4.capture !== e6.capture || t4.once !== e6.once || t4.passive !== e6.passive, n7 = t4 !== w && (e6 === w || o6);
      o6 && this.element.removeEventListener(this.name, this, e6), n7 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var i4, s5;
      typeof this._$AH == "function" ? this._$AH.call((s5 = (i4 = this.options) === null || i4 === void 0 ? void 0 : i4.host) !== null && s5 !== void 0 ? s5 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var L = class {
    constructor(t4, i4, s5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      P(this, t4);
    }
  };
  var z = window.litHtmlPolyfillSupport;
  z == null || z(E, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.1.1");

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends a {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t4, e6;
      const i4 = super.createRenderRoot();
      return (t4 = (e6 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e6.renderBefore = i4.firstChild), i4;
    }
    update(t4) {
      const i4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = x(i4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
    }
    render() {
      return b;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  n4 == null || n4({ LitElement: s4 });
  ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.1.1");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var n5 = (n7) => (e6) => typeof e6 == "function" ? ((n8, e7) => (window.customElements.define(n8, e7), e7))(n7, e6) : ((n8, e7) => {
    const { kind: t4, elements: i4 } = e7;
    return { kind: t4, elements: i4, finisher(e8) {
      window.customElements.define(n8, e8);
    } };
  })(n7, e6);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i4, e6) => e6.kind === "method" && e6.descriptor && !("value" in e6.descriptor) ? { ...e6, finisher(n7) {
    n7.createProperty(e6.key, i4);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
    typeof e6.initializer == "function" && (this[e6.key] = e6.initializer.call(this));
  }, finisher(n7) {
    n7.createProperty(e6.key, i4);
  } };
  function e4(e6) {
    return (n7, t4) => t4 !== void 0 ? ((i4, e7, n8) => {
      e7.constructor.createProperty(n8, i4);
    })(e6, n7, t4) : i3(e6, n7);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t3(t4) {
    return e4({ ...t4, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e5 = ((n6 = window.HTMLSlotElement) === null || n6 === void 0 ? void 0 : n6.prototype.assignedElements) != null ? (o6, n7) => o6.assignedElements(n7) : (o6, n7) => o6.assignedNodes(n7).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

  // src/utils/reload.ts
  var reloadWindow = (serviceUrl) => {
    window.open(serviceUrl, "_top");
  };

  // src/styles/base.css.ts
  var baseCss = r`
  /* Minimal CSS Reset */
  :host {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom Reset CSS */
  :host {
    user-select: none;
  }

  :host, button, input, textarea {
    font-family: 'Zen Kurenaido', sans-serif;
  }
`;

  // src/components/onl-reload-timer.ts
  var RELOAD_INTERVAL_MINUTES = 3;
  var OnlReloadTimer = class extends s4 {
    constructor() {
      super();
    }
    connectedCallback() {
      super.connectedCallback();
      setTimeout(() => {
        console.log("fired reload timer!");
        reloadWindow(this.serviceUrl);
      }, RELOAD_INTERVAL_MINUTES * 60 * 1e3);
    }
    render() {
      return $`
      <div class="progressBar"></div>
    `;
    }
  };
  OnlReloadTimer.styles = [
    baseCss,
    r`
      @keyframes progress {
        0% {
          transform: scale3d(0, 1, 1);
        }
        100% {
          transform: scale3d(1, 1, 1);
        }
      }

      .progressBar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        border-bottom: 2px solid #222;
        background: black;
      }

      .progressBar::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #eab308;
        transform-origin: left top;
        animation: progress ${RELOAD_INTERVAL_MINUTES * 60}s linear;
      }
    `
  ];
  __decorateClass([
    e4({ type: String })
  ], OnlReloadTimer.prototype, "serviceUrl", 2);
  OnlReloadTimer = __decorateClass([
    n5("onl-reload-timer")
  ], OnlReloadTimer);

  // src/components/onl-tasks.ts
  var OnlTasks = class extends s4 {
    constructor() {
      super(...arguments);
      this.completedTasks = [];
    }
    render() {
      return $`
      <onl-reload-timer .serviceUrl=${this.serviceUrl}></onl-reload-timer>
      <button @click=${() => reloadWindow(this.serviceUrl)}>Reload</button>
      ${this.tasks.map((tasklist) => $`
          <onl-tasklist-item
            .serviceUrl=${this.serviceUrl}
            .tasklist=${tasklist}
          ></onl-tasklist-item>
        `)}
    `;
    }
  };
  OnlTasks.styles = [
    baseCss,
    r`
      :host {
        color: #ccc;
      }
    `
  ];
  __decorateClass([
    e4({ type: String })
  ], OnlTasks.prototype, "serviceUrl", 2);
  __decorateClass([
    e4({ type: Array })
  ], OnlTasks.prototype, "tasks", 2);
  __decorateClass([
    t3()
  ], OnlTasks.prototype, "completedTasks", 2);
  OnlTasks = __decorateClass([
    n5("onl-tasks")
  ], OnlTasks);

  // src/utils/dayjs.ts
  var import_dayjs = __toESM(require_dayjs_min());
  var import_relativeTime = __toESM(require_relativeTime());
  import_dayjs.default.extend(import_relativeTime.default);

  // src/components/onl-task-item.ts
  var OnlTaskItem = class extends s4 {
    constructor() {
      super(...arguments);
      this.completed = false;
    }
    completeTask() {
      return __async(this, null, function* () {
        yield fetch(this.serviceUrl, {
          method: "POST",
          mode: "no-cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "complete_task",
            tasklist: this.tasklistId,
            task: this.task.id
          })
        });
        this.completed = true;
      });
    }
    render() {
      const { title = "(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)", due, notes } = this.task;
      return $`
      <div
        class="taskItem"
        aria-hidden="${this.completed}"
      >
        <div class="container">
          <div class="task">
            <div class="title">${title}</div>
            <div class="details">
              ${due ? $`<div class="due">${(0, import_dayjs.default)().to((0, import_dayjs.default)(due))}</div>` : null}
              ${notes ? $`<div class="notes">${notes}</div>` : null}
            </div>
          </div>
          <div class="control">
            <button @click="${() => this.completeTask()}">DONE</button>
          </div>
        </div>
      </div>
    `;
    }
  };
  OnlTaskItem.styles = [
    baseCss,
    r`
      .taskItem {
        max-height: 100vh;
        overflow: hidden;
        transition: max-height 0.5s ease, opacity 0.5s ease;
      }

      .taskItem[aria-hidden=true] {
        max-height: 0;
        opacity: 0.4;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 8px;
        color: #ccc;
        border-top: 1px solid #333;
      }

      .control {
        flex-shrink: 0;
        margin-left: 16px;
      }

      .details {
        display: flex;
        align-items: center;
      }

      .notes {
        font-size: 12px;
        color: #aaa;
      }
    `
  ];
  __decorateClass([
    e4({ type: String })
  ], OnlTaskItem.prototype, "serviceUrl", 2);
  __decorateClass([
    e4({ type: String })
  ], OnlTaskItem.prototype, "tasklistId", 2);
  __decorateClass([
    e4({ type: Object })
  ], OnlTaskItem.prototype, "task", 2);
  __decorateClass([
    t3()
  ], OnlTaskItem.prototype, "completed", 2);
  OnlTaskItem = __decorateClass([
    n5("onl-task-item")
  ], OnlTaskItem);

  // node_modules/lockr/dist/lockr.esm.js
  var PREFIX = "";
  function getPrefixedKey(key, options) {
    if ((options == null ? void 0 : options.noPrefix) === true) {
      return key;
    } else {
      return "" + PREFIX + key;
    }
  }
  function set(key, value, options) {
    var query_key = getPrefixedKey(key, options);
    try {
      localStorage.setItem(query_key, JSON.stringify({
        data: value
      }));
    } catch (e6) {
      if (console) {
        console.warn(`Lockr didn't successfully save the '{"` + key + '": "' + value + `"}' pair, because the localStorage is full.`);
      }
    }
  }
  function get(key, missing, options) {
    var queryKey = getPrefixedKey(key, options);
    var value;
    var localValue = localStorage.getItem(queryKey);
    try {
      if (localValue !== null) {
        value = JSON.parse(localValue);
      }
    } catch (e6) {
      if (localStorage[queryKey]) {
        value = {
          data: localStorage.getItem(queryKey)
        };
      } else {
        value = null;
      }
    }
    if (!value) {
      return missing;
    } else if (typeof value === "object" && typeof value.data !== "undefined") {
      return value.data;
    }
  }

  // src/components/onl-tasklist-item.ts
  var OnlTasklistItem = class extends s4 {
    getLockrKey() {
      return `isopen_tasklist_${this.tasklist.id}`;
    }
    onToggle(e6) {
      if (e6.target instanceof HTMLDetailsElement) {
        set(this.getLockrKey(), e6.target.open);
      }
    }
    render() {
      if (this.tasklist.items.length === 0) {
        return $`
        <div class="summary -empty">
          <div class="title">${this.tasklist.title}</div>
        </div>
      `;
      }
      return $`
      <details
        .open=${get(this.getLockrKey(), false)}
        @toggle=${this.onToggle}
      >
        <summary>
          <div class="summary">
            <div class="title">${this.tasklist.title}</div>
          </div>
        </summary>
        <div>
          ${this.tasklist.items.map((task) => $`
              <onl-task-item
                .serviceUrl=${this.serviceUrl}
                .tasklistId=${this.tasklist.id}
                .task=${task}
              ></onl-task-item>
            `)}
        </div>
      </details>
    `;
    }
  };
  OnlTasklistItem.styles = [
    baseCss,
    r`
      summary {
        display: block;
        list-style: none;
      }

      .summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 8px;
      }

      .summary > .title {
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .summary > .count {
        flex-shrink: 0;
        min-width: 3em;
        box-sizing: border-box;
        padding: 4px 8px;
        margin-left: 16px;
        color: #ccc;
        line-height: 1;
        text-align: center;
        border: 1px solid #555;
        border-radius: 4px;
      }

      .summary.-empty {
        opacity: 0.8;
      }

      .summary.-empty > .title {
        font-weight: normal;
      }
    `
  ];
  __decorateClass([
    e4({ type: String })
  ], OnlTasklistItem.prototype, "serviceUrl", 2);
  __decorateClass([
    e4({ type: Object })
  ], OnlTasklistItem.prototype, "tasklist", 2);
  OnlTasklistItem = __decorateClass([
    n5("onl-tasklist-item")
  ], OnlTasklistItem);
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
