(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const da = "180", fi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ui = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, zl = 0, La = 1, Hl = 2, Vo = 1, kl = 2, an = 3, Mn = 0, At = 1, on = 2, Sn = 0, pi = 1, Ua = 2, Ia = 3, Na = 4, Vl = 5, Fn = 100, Gl = 101, Wl = 102, Xl = 103, Yl = 104, ql = 200, Kl = 201, $l = 202, jl = 203, gs = 204, vs = 205, Zl = 206, Jl = 207, Ql = 208, ec = 209, tc = 210, nc = 211, ic = 212, rc = 213, sc = 214, xs = 0, Ss = 1, Es = 2, _i = 3, Ms = 4, ys = 5, bs = 6, Ts = 7, Go = 0, ac = 1, oc = 2, En = 0, lc = 1, cc = 2, uc = 3, hc = 4, dc = 5, fc = 6, pc = 7, Wo = 300, gi = 301, vi = 302, As = 303, ws = 304, Lr = 306, Rs = 1e3, Bn = 1001, Cs = 1002, Gt = 1003, mc = 1004, ji = 1005, $t = 1006, zr = 1007, zn = 1008, un = 1009, Xo = 1010, Yo = 1011, Oi = 1012, fa = 1013, kn = 1014, ln = 1015, Gi = 1016, pa = 1017, ma = 1018, Bi = 1020, qo = 35902, Ko = 35899, $o = 1021, jo = 1022, Vt = 1023, zi = 1026, Hi = 1027, Zo = 1028, _a = 1029, Jo = 1030, ga = 1031, va = 1033, Er = 33776, Mr = 33777, yr = 33778, br = 33779, Ps = 35840, Ds = 35841, Ls = 35842, Us = 35843, Is = 36196, Ns = 37492, Fs = 37496, Os = 37808, Bs = 37809, zs = 37810, Hs = 37811, ks = 37812, Vs = 37813, Gs = 37814, Ws = 37815, Xs = 37816, Ys = 37817, qs = 37818, Ks = 37819, $s = 37820, js = 37821, Zs = 36492, Js = 36494, Qs = 36495, ea = 36283, ta = 36284, na = 36285, ia = 36286, _c = 3200, gc = 3201, Qo = 0, vc = 1, xn = "", Ft = "srgb", xi = "srgb-linear", wr = "linear", Ke = "srgb", Kn = 7680, Fa = 519, xc = 512, Sc = 513, Ec = 514, el = 515, Mc = 516, yc = 517, bc = 518, Tc = 519, Oa = 35044, Ba = "300 es", jt = 2e3, Rr = 2001;
class Wn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Tr = Math.PI / 180, ra = 180 / Math.PI;
function Wi() {
  const i3 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xt[i3 & 255] + xt[i3 >> 8 & 255] + xt[i3 >> 16 & 255] + xt[i3 >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
}
function He(i3, e, t) {
  return Math.max(e, Math.min(t, i3));
}
function Ac(i3, e) {
  return (i3 % e + e) % e;
}
function Hr(i3, e, t) {
  return (1 - t) * i3 + t * e;
}
function Ti(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return i3 / 4294967295;
    case Uint16Array:
      return i3 / 65535;
    case Uint8Array:
      return i3 / 255;
    case Int32Array:
      return Math.max(i3 / 2147483647, -1);
    case Int16Array:
      return Math.max(i3 / 32767, -1);
    case Int8Array:
      return Math.max(i3 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function bt(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return Math.round(i3 * 4294967295);
    case Uint16Array:
      return Math.round(i3 * 65535);
    case Uint8Array:
      return Math.round(i3 * 255);
    case Int32Array:
      return Math.round(i3 * 2147483647);
    case Int16Array:
      return Math.round(i3 * 32767);
    case Int8Array:
      return Math.round(i3 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const wc = { DEG2RAD: Tr };
class Be {
  constructor(e = 0, t = 0) {
    Be.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(He(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Vn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], d = n[r + 2], u = n[r + 3];
    const f = s[a + 0], m = s[a + 1], g = s[a + 2], x = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = x;
      return;
    }
    if (u !== x || l !== f || c !== m || d !== g) {
      let p = 1 - o;
      const h = l * f + c * m + d * g + u * x, A = h >= 0 ? 1 : -1, T = 1 - h * h;
      if (T > Number.EPSILON) {
        const R = Math.sqrt(T), D = Math.atan2(R, h * A);
        p = Math.sin(p * D) / R, o = Math.sin(o * D) / R;
      }
      const y = o * A;
      if (l = l * p + f * y, c = c * p + m * y, d = d * p + g * y, u = u * p + x * y, p === 1 - o) {
        const R = 1 / Math.sqrt(l * l + c * c + d * d + u * u);
        l *= R, c *= R, d *= R, u *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], d = n[r + 3], u = s[a], f = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + d * u + l * m - c * f, e[t + 1] = l * g + d * f + c * u - o * m, e[t + 2] = c * g + d * m + o * f - l * u, e[t + 3] = d * g - o * u - l * f - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), d = o(r / 2), u = o(s / 2), f = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * d * u + c * m * g, this._y = c * m * u - f * d * g, this._z = c * d * g + f * m * u, this._w = c * d * u - f * m * g;
        break;
      case "YXZ":
        this._x = f * d * u + c * m * g, this._y = c * m * u - f * d * g, this._z = c * d * g - f * m * u, this._w = c * d * u + f * m * g;
        break;
      case "ZXY":
        this._x = f * d * u - c * m * g, this._y = c * m * u + f * d * g, this._z = c * d * g + f * m * u, this._w = c * d * u - f * m * g;
        break;
      case "ZYX":
        this._x = f * d * u - c * m * g, this._y = c * m * u + f * d * g, this._z = c * d * g - f * m * u, this._w = c * d * u + f * m * g;
        break;
      case "YZX":
        this._x = f * d * u + c * m * g, this._y = c * m * u + f * d * g, this._z = c * d * g - f * m * u, this._w = c * d * u - f * m * g;
        break;
      case "XZY":
        this._x = f * d * u - c * m * g, this._y = c * m * u - f * d * g, this._z = c * d * g + f * m * u, this._w = c * d * u + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], d = t[6], u = t[10], f = n + o + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (d - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (d - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + d) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + d) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(He(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, d = t._w;
    return this._x = n * d + a * o + r * c - s * l, this._y = r * d + a * l + s * o - n * c, this._z = s * d + a * c + n * l - r * o, this._w = a * d - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), d = Math.atan2(c, o), u = Math.sin((1 - t) * d) / c, f = Math.sin(t * d) / c;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = r * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    F.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(za.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(za.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), d = 2 * (o * t - s * r), u = 2 * (s * n - a * t);
    return this.x = t + l * c + a * u - o * d, this.y = n + l * d + o * c - s * u, this.z = r + l * u + s * d - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this.z = He(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this.z = He(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return kr.copy(this).projectOnVector(e), this.sub(kr);
  }
  reflect(e) {
    return this.sub(kr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(He(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const kr = new F(), za = new Vn();
class Ne {
  constructor(e, t, n, r, s, a, o, l, c) {
    Ne.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const d = this.elements;
    return d[0] = e, d[1] = r, d[2] = o, d[3] = t, d[4] = s, d[5] = l, d[6] = n, d[7] = a, d[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], d = n[4], u = n[7], f = n[2], m = n[5], g = n[8], x = r[0], p = r[3], h = r[6], A = r[1], T = r[4], y = r[7], R = r[2], D = r[5], C = r[8];
    return s[0] = a * x + o * A + l * R, s[3] = a * p + o * T + l * D, s[6] = a * h + o * y + l * C, s[1] = c * x + d * A + u * R, s[4] = c * p + d * T + u * D, s[7] = c * h + d * y + u * C, s[2] = f * x + m * A + g * R, s[5] = f * p + m * T + g * D, s[8] = f * h + m * y + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8];
    return t * a * d - t * o * c - n * s * d + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8], u = d * a - o * c, f = o * l - d * s, m = c * s - a * l, g = t * u + n * f + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return e[0] = u * x, e[1] = (r * c - d * n) * x, e[2] = (o * n - r * a) * x, e[3] = f * x, e[4] = (d * t - r * l) * x, e[5] = (r * s - o * t) * x, e[6] = m * x, e[7] = (n * l - c * t) * x, e[8] = (a * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -r * c, r * l, -r * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Vr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Vr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Vr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Vr = new Ne();
function tl(i3) {
  for (let e = i3.length - 1; e >= 0; --e) if (i3[e] >= 65535) return true;
  return false;
}
function Cr(i3) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i3);
}
function Rc() {
  const i3 = Cr("canvas");
  return i3.style.display = "block", i3;
}
const Ha = {};
function ki(i3) {
  i3 in Ha || (Ha[i3] = true, console.warn(i3));
}
function Cc(i3, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i3.clientWaitSync(e, i3.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i3.WAIT_FAILED:
          r();
          break;
        case i3.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const ka = new Ne().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Va = new Ne().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Pc() {
  const i3 = { enabled: true, workingColorSpace: xi, spaces: {}, convert: function(r, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === Ke && (r.r = cn(r.r), r.g = cn(r.g), r.b = cn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ke && (r.r = mi(r.r), r.g = mi(r.g), r.b = mi(r.b))), r;
  }, workingToColorSpace: function(r, s) {
    return this.convert(r, this.workingColorSpace, s);
  }, colorSpaceToWorking: function(r, s) {
    return this.convert(r, s, this.workingColorSpace);
  }, getPrimaries: function(r) {
    return this.spaces[r].primaries;
  }, getTransfer: function(r) {
    return r === xn ? wr : this.spaces[r].transfer;
  }, getToneMappingMode: function(r) {
    return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
    return r.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(r) {
    Object.assign(this.spaces, r);
  }, _getMatrix: function(r, s, a) {
    return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(r, s) {
    return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i3.workingToColorSpace(r, s);
  }, toWorkingColorSpace: function(r, s) {
    return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i3.colorSpaceToWorking(r, s);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i3.define({ [xi]: { primaries: e, whitePoint: n, transfer: wr, toXYZ: ka, fromXYZ: Va, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ft }, outputColorSpaceConfig: { drawingBufferColorSpace: Ft } }, [Ft]: { primaries: e, whitePoint: n, transfer: Ke, toXYZ: ka, fromXYZ: Va, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ft } } }), i3;
}
const We = Pc();
function cn(i3) {
  return i3 < 0.04045 ? i3 * 0.0773993808 : Math.pow(i3 * 0.9478672986 + 0.0521327014, 2.4);
}
function mi(i3) {
  return i3 < 31308e-7 ? i3 * 12.92 : 1.055 * Math.pow(i3, 0.41666) - 0.055;
}
let $n;
class Dc {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      $n === void 0 && ($n = Cr("canvas")), $n.width = e.width, $n.height = e.height;
      const r = $n.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = $n;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Cr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = cn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(cn(t[n] / 255) * 255) : t[n] = cn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Lc = 0;
class xa {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = Wi(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(Gr(r[a].image)) : s.push(Gr(r[a]));
      } else s = Gr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Gr(i3) {
  return typeof HTMLImageElement < "u" && i3 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i3 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i3 instanceof ImageBitmap ? Dc.getDataURL(i3) : i3.data ? { data: Array.from(i3.data), width: i3.width, height: i3.height, type: i3.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Uc = 0;
const Wr = new F();
class wt extends Wn {
  constructor(e = wt.DEFAULT_IMAGE, t = wt.DEFAULT_MAPPING, n = Bn, r = Bn, s = $t, a = zn, o = Vt, l = un, c = wt.DEFAULT_ANISOTROPY, d = xn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Uc++ }), this.uuid = Wi(), this.name = "", this.source = new xa(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Be(0, 0), this.repeat = new Be(1, 1), this.center = new Be(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ne(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Wr).x;
  }
  get height() {
    return this.source.getSize(Wr).y;
  }
  get depth() {
    return this.source.getSize(Wr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Wo) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Rs:
        e.x = e.x - Math.floor(e.x);
        break;
      case Bn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Cs:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Rs:
        e.y = e.y - Math.floor(e.y);
        break;
      case Bn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Cs:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = Wo;
wt.DEFAULT_ANISOTROPY = 1;
class ct {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ct.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], d = l[4], u = l[8], f = l[1], m = l[5], g = l[9], x = l[2], p = l[6], h = l[10];
    if (Math.abs(d - f) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(d + f) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, y = (m + 1) / 2, R = (h + 1) / 2, D = (d + f) / 4, C = (u + x) / 4, N = (g + p) / 4;
      return T > y && T > R ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = D / n, s = C / n) : y > R ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = D / r, s = N / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = C / s, r = N / s), this.set(n, r, s, t), this;
    }
    let A = Math.sqrt((p - g) * (p - g) + (u - x) * (u - x) + (f - d) * (f - d));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (p - g) / A, this.y = (u - x) / A, this.z = (f - d) / A, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = He(this.x, e.x, t.x), this.y = He(this.y, e.y, t.y), this.z = He(this.z, e.z, t.z), this.w = He(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = He(this.x, e, t), this.y = He(this.y, e, t), this.z = He(this.z, e, t), this.w = He(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(He(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ic extends Wn {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: $t, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new ct(0, 0, e, t), this.scissorTest = false, this.viewport = new ct(0, 0, e, t);
    const r = { width: e, height: t, depth: n.depth }, s = new wt(r);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: $t, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new xa(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Gn extends Ic {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class nl extends wt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Gt, this.minFilter = Gt, this.wrapR = Bn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Nc extends wt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Gt, this.minFilter = Gt, this.wrapR = Bn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Xi {
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Bt) : Bt.fromBufferAttribute(s, a), Bt.applyMatrix4(e.matrixWorld), this.expandByPoint(Bt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Zi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Zi.copy(n.boundingBox)), Zi.applyMatrix4(e.matrixWorld), this.union(Zi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Bt), Bt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Ai), Ji.subVectors(this.max, Ai), jn.subVectors(e.a, Ai), Zn.subVectors(e.b, Ai), Jn.subVectors(e.c, Ai), dn.subVectors(Zn, jn), fn.subVectors(Jn, Zn), Cn.subVectors(jn, Jn);
    let t = [0, -dn.z, dn.y, 0, -fn.z, fn.y, 0, -Cn.z, Cn.y, dn.z, 0, -dn.x, fn.z, 0, -fn.x, Cn.z, 0, -Cn.x, -dn.y, dn.x, 0, -fn.y, fn.x, 0, -Cn.y, Cn.x, 0];
    return !Xr(t, jn, Zn, Jn, Ji) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Xr(t, jn, Zn, Jn, Ji)) ? false : (Qi.crossVectors(dn, fn), t = [Qi.x, Qi.y, Qi.z], Xr(t, jn, Zn, Jn, Ji));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(en), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const en = [new F(), new F(), new F(), new F(), new F(), new F(), new F(), new F()], Bt = new F(), Zi = new Xi(), jn = new F(), Zn = new F(), Jn = new F(), dn = new F(), fn = new F(), Cn = new F(), Ai = new F(), Ji = new F(), Qi = new F(), Pn = new F();
function Xr(i3, e, t, n, r) {
  for (let s = 0, a = i3.length - 3; s <= a; s += 3) {
    Pn.fromArray(i3, s);
    const o = r.x * Math.abs(Pn.x) + r.y * Math.abs(Pn.y) + r.z * Math.abs(Pn.z), l = e.dot(Pn), c = t.dot(Pn), d = n.dot(Pn);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o) return false;
  }
  return true;
}
const Fc = new Xi(), wi = new F(), Yr = new F();
class Sa {
  constructor(e = new F(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Fc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++) r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    wi.subVectors(e, this.center);
    const t = wi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(wi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Yr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(wi.copy(e.center).add(Yr)), this.expandByPoint(wi.copy(e.center).sub(Yr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const tn = new F(), qr = new F(), er = new F(), pn = new F(), Kr = new F(), tr = new F(), $r = new F();
class il {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, tn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = tn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (tn.copy(this.origin).addScaledVector(this.direction, t), tn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    qr.copy(e).add(t).multiplyScalar(0.5), er.copy(t).sub(e).normalize(), pn.copy(this.origin).sub(qr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(er), o = pn.dot(this.direction), l = -pn.dot(er), c = pn.lengthSq(), d = Math.abs(1 - a * a);
    let u, f, m, g;
    if (d > 0) if (u = a * l - o, f = a * o - l, g = s * d, u >= 0) if (f >= -g) if (f <= g) {
      const x = 1 / d;
      u *= x, f *= x, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
    } else f = s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f = -s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f <= -g ? (u = Math.max(0, -(-a * s + o)), f = u > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), f = u > 0 ? s : Math.min(Math.max(-s, -l), s), m = -u * u + f * (f + 2 * l) + c);
    else f = a > 0 ? -s : s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(qr).addScaledVector(er, f), m;
  }
  intersectSphere(e, t) {
    tn.subVectors(e.center, this.origin);
    const n = tn.dot(this.direction), r = tn.dot(tn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, d = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), d >= 0 ? (s = (e.min.y - f.y) * d, a = (e.max.y - f.y) * d) : (s = (e.max.y - f.y) * d, a = (e.min.y - f.y) * d), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, tn) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Kr.subVectors(t, e), tr.subVectors(n, e), $r.crossVectors(Kr, tr);
    let a = this.direction.dot($r), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    pn.subVectors(this.origin, e);
    const l = o * this.direction.dot(tr.crossVectors(pn, tr));
    if (l < 0) return null;
    const c = o * this.direction.dot(Kr.cross(pn));
    if (c < 0 || l + c > a) return null;
    const d = -o * pn.dot($r);
    return d < 0 ? null : this.at(d / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dt {
  constructor(e, t, n, r, s, a, o, l, c, d, u, f, m, g, x, p) {
    dt.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, d, u, f, m, g, x, p);
  }
  set(e, t, n, r, s, a, o, l, c, d, u, f, m, g, x, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = d, h[10] = u, h[14] = f, h[3] = m, h[7] = g, h[11] = x, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new dt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Qn.setFromMatrixColumn(e, 0).length(), s = 1 / Qn.setFromMatrixColumn(e, 1).length(), a = 1 / Qn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), d = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * d, m = a * u, g = o * d, x = o * u;
      t[0] = l * d, t[4] = -l * u, t[8] = c, t[1] = m + g * c, t[5] = f - x * c, t[9] = -o * l, t[2] = x - f * c, t[6] = g + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * d, m = l * u, g = c * d, x = c * u;
      t[0] = f + x * o, t[4] = g * o - m, t[8] = a * c, t[1] = a * u, t[5] = a * d, t[9] = -o, t[2] = m * o - g, t[6] = x + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * d, m = l * u, g = c * d, x = c * u;
      t[0] = f - x * o, t[4] = -a * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * d, t[9] = x - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * d, m = a * u, g = o * d, x = o * u;
      t[0] = l * d, t[4] = g * c - m, t[8] = f * c + x, t[1] = l * u, t[5] = x * c + f, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, x = o * c;
      t[0] = l * d, t[4] = x - f * u, t[8] = g * u + m, t[1] = u, t[5] = a * d, t[9] = -o * d, t[2] = -c * d, t[6] = m * u + g, t[10] = f - x * u;
    } else if (e.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, x = o * c;
      t[0] = l * d, t[4] = -u, t[8] = c * d, t[1] = f * u + x, t[5] = a * d, t[9] = m * u - g, t[2] = g * u - m, t[6] = o * d, t[10] = x * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Oc, e, Bc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), mn.crossVectors(n, Pt), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), mn.crossVectors(n, Pt)), mn.normalize(), nr.crossVectors(Pt, mn), r[0] = mn.x, r[4] = nr.x, r[8] = Pt.x, r[1] = mn.y, r[5] = nr.y, r[9] = Pt.y, r[2] = mn.z, r[6] = nr.z, r[10] = Pt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], d = n[1], u = n[5], f = n[9], m = n[13], g = n[2], x = n[6], p = n[10], h = n[14], A = n[3], T = n[7], y = n[11], R = n[15], D = r[0], C = r[4], N = r[8], E = r[12], S = r[1], P = r[5], H = r[9], G = r[13], j = r[2], X = r[6], K = r[10], J = r[14], k = r[3], oe = r[7], he = r[11], be = r[15];
    return s[0] = a * D + o * S + l * j + c * k, s[4] = a * C + o * P + l * X + c * oe, s[8] = a * N + o * H + l * K + c * he, s[12] = a * E + o * G + l * J + c * be, s[1] = d * D + u * S + f * j + m * k, s[5] = d * C + u * P + f * X + m * oe, s[9] = d * N + u * H + f * K + m * he, s[13] = d * E + u * G + f * J + m * be, s[2] = g * D + x * S + p * j + h * k, s[6] = g * C + x * P + p * X + h * oe, s[10] = g * N + x * H + p * K + h * he, s[14] = g * E + x * G + p * J + h * be, s[3] = A * D + T * S + y * j + R * k, s[7] = A * C + T * P + y * X + R * oe, s[11] = A * N + T * H + y * K + R * he, s[15] = A * E + T * G + y * J + R * be, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], d = e[2], u = e[6], f = e[10], m = e[14], g = e[3], x = e[7], p = e[11], h = e[15];
    return g * (+s * l * u - r * c * u - s * o * f + n * c * f + r * o * m - n * l * m) + x * (+t * l * m - t * c * f + s * a * f - r * a * m + r * c * d - s * l * d) + p * (+t * c * u - t * o * m - s * a * u + n * a * m + s * o * d - n * c * d) + h * (-r * o * d - t * l * u + t * o * f + r * a * u - n * a * f + n * l * d);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], d = e[8], u = e[9], f = e[10], m = e[11], g = e[12], x = e[13], p = e[14], h = e[15], A = u * p * c - x * f * c + x * l * m - o * p * m - u * l * h + o * f * h, T = g * f * c - d * p * c - g * l * m + a * p * m + d * l * h - a * f * h, y = d * x * c - g * u * c + g * o * m - a * x * m - d * o * h + a * u * h, R = g * u * l - d * x * l - g * o * f + a * x * f + d * o * p - a * u * p, D = t * A + n * T + r * y + s * R;
    if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / D;
    return e[0] = A * C, e[1] = (x * f * s - u * p * s - x * r * m + n * p * m + u * r * h - n * f * h) * C, e[2] = (o * p * s - x * l * s + x * r * c - n * p * c - o * r * h + n * l * h) * C, e[3] = (u * l * s - o * f * s - u * r * c + n * f * c + o * r * m - n * l * m) * C, e[4] = T * C, e[5] = (d * p * s - g * f * s + g * r * m - t * p * m - d * r * h + t * f * h) * C, e[6] = (g * l * s - a * p * s - g * r * c + t * p * c + a * r * h - t * l * h) * C, e[7] = (a * f * s - d * l * s + d * r * c - t * f * c - a * r * m + t * l * m) * C, e[8] = y * C, e[9] = (g * u * s - d * x * s - g * n * m + t * x * m + d * n * h - t * u * h) * C, e[10] = (a * x * s - g * o * s + g * n * c - t * x * c - a * n * h + t * o * h) * C, e[11] = (d * o * s - a * u * s - d * n * c + t * u * c + a * n * m - t * o * m) * C, e[12] = R * C, e[13] = (d * x * r - g * u * r + g * n * f - t * x * f - d * n * p + t * u * p) * C, e[14] = (g * o * r - a * x * r - g * n * l + t * x * l + a * n * p - t * o * p) * C, e[15] = (a * u * r - d * o * r + d * n * l - t * u * l - a * n * f + t * o * f) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, d = s * o;
    return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, d * o + n, d * l - r * a, 0, c * l - r * o, d * l + r * a, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, d = a + a, u = o + o, f = s * c, m = s * d, g = s * u, x = a * d, p = a * u, h = o * u, A = l * c, T = l * d, y = l * u, R = n.x, D = n.y, C = n.z;
    return r[0] = (1 - (x + h)) * R, r[1] = (m + y) * R, r[2] = (g - T) * R, r[3] = 0, r[4] = (m - y) * D, r[5] = (1 - (f + h)) * D, r[6] = (p + A) * D, r[7] = 0, r[8] = (g + T) * C, r[9] = (p - A) * C, r[10] = (1 - (f + x)) * C, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Qn.set(r[0], r[1], r[2]).length();
    const a = Qn.set(r[4], r[5], r[6]).length(), o = Qn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], zt.copy(this);
    const c = 1 / s, d = 1 / a, u = 1 / o;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= d, zt.elements[5] *= d, zt.elements[6] *= d, zt.elements[8] *= u, zt.elements[9] *= u, zt.elements[10] *= u, t.setFromRotationMatrix(zt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = jt, l = false) {
    const c = this.elements, d = 2 * s / (t - e), u = 2 * s / (n - r), f = (t + e) / (t - e), m = (n + r) / (n - r);
    let g, x;
    if (l) g = s / (a - s), x = a * s / (a - s);
    else if (o === jt) g = -(a + s) / (a - s), x = -2 * a * s / (a - s);
    else if (o === Rr) g = -a / (a - s), x = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = d, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = u, c[9] = m, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = x, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = jt, l = false) {
    const c = this.elements, d = 2 / (t - e), u = 2 / (n - r), f = -(t + e) / (t - e), m = -(n + r) / (n - r);
    let g, x;
    if (l) g = 1 / (a - s), x = a / (a - s);
    else if (o === jt) g = -2 / (a - s), x = -(a + s) / (a - s);
    else if (o === Rr) g = -1 / (a - s), x = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = d, c[4] = 0, c[8] = 0, c[12] = f, c[1] = 0, c[5] = u, c[9] = 0, c[13] = m, c[2] = 0, c[6] = 0, c[10] = g, c[14] = x, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Qn = new F(), zt = new dt(), Oc = new F(0, 0, 0), Bc = new F(1, 1, 1), mn = new F(), nr = new F(), Pt = new F(), Ga = new dt(), Wa = new Vn();
class hn {
  constructor(e = 0, t = 0, n = 0, r = hn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], d = r[9], u = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(He(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-d, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-He(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(He(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-He(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(He(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-He(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-d, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ga.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ga, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Wa.setFromEuler(this), this.setFromQuaternion(Wa, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
hn.DEFAULT_ORDER = "XYZ";
class rl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let zc = 0;
const Xa = new F(), ei = new Vn(), nn = new dt(), ir = new F(), Ri = new F(), Hc = new F(), kc = new Vn(), Ya = new F(1, 0, 0), qa = new F(0, 1, 0), Ka = new F(0, 0, 1), $a = { type: "added" }, Vc = { type: "removed" }, ti = { type: "childadded", child: null }, jr = { type: "childremoved", child: null };
class Lt extends Wn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: zc++ }), this.uuid = Wi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Lt.DEFAULT_UP.clone();
    const e = new F(), t = new hn(), n = new Vn(), r = new F(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new dt() }, normalMatrix: { value: new Ne() } }), this.matrix = new dt(), this.matrixWorld = new dt(), this.matrixAutoUpdate = Lt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new rl(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.multiply(ei), this;
  }
  rotateOnWorldAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.premultiply(ei), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ya, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(qa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ka, e);
  }
  translateOnAxis(e, t) {
    return Xa.copy(e).applyQuaternion(this.quaternion), this.position.add(Xa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ya, e);
  }
  translateY(e) {
    return this.translateOnAxis(qa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ka, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(nn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ir.copy(e) : ir.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), Ri.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(Ri, ir, this.up) : nn.lookAt(ir, Ri, this.up), this.quaternion.setFromRotationMatrix(nn), r && (nn.extractRotation(r.matrixWorld), ei.setFromRotationMatrix(nn), this.quaternion.premultiply(ei.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent($a), ti.child = e, this.dispatchEvent(ti), ti.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Vc), jr.child = e, this.dispatchEvent(jr), jr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), nn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), nn.multiply(e.parent.matrixWorld)), e.applyMatrix4(nn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent($a), ti.child = e, this.dispatchEvent(ti), ti.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ri, e, Hc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ri, kc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, d = l.length; c < d; c++) {
          const u = l[c];
          s(e.shapes, u);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
      r.material = o;
    } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), d = a(e.images), u = a(e.shapes), f = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
Lt.DEFAULT_UP = new F(0, 1, 0);
Lt.DEFAULT_MATRIX_AUTO_UPDATE = true;
Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Ht = new F(), rn = new F(), Zr = new F(), sn = new F(), ni = new F(), ii = new F(), ja = new F(), Jr = new F(), Qr = new F(), es = new F(), ts = new ct(), ns = new ct(), is = new ct();
class kt {
  constructor(e = new F(), t = new F(), n = new F()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ht.subVectors(e, t), r.cross(Ht);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Ht.subVectors(r, t), rn.subVectors(n, t), Zr.subVectors(e, t);
    const a = Ht.dot(Ht), o = Ht.dot(rn), l = Ht.dot(Zr), c = rn.dot(rn), d = rn.dot(Zr), u = a * c - o * o;
    if (u === 0) return s.set(0, 0, 0), null;
    const f = 1 / u, m = (c * l - o * d) * f, g = (a * d - o * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, sn) === null ? false : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, sn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, sn.x), l.addScaledVector(a, sn.y), l.addScaledVector(o, sn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return ts.setScalar(0), ns.setScalar(0), is.setScalar(0), ts.fromBufferAttribute(e, t), ns.fromBufferAttribute(e, n), is.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(ts, s.x), a.addScaledVector(ns, s.y), a.addScaledVector(is, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Ht.subVectors(n, t), rn.subVectors(e, t), Ht.cross(rn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), rn.subVectors(this.a, this.b), Ht.cross(rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    ni.subVectors(r, n), ii.subVectors(s, n), Jr.subVectors(e, n);
    const l = ni.dot(Jr), c = ii.dot(Jr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Qr.subVectors(e, r);
    const d = ni.dot(Qr), u = ii.dot(Qr);
    if (d >= 0 && u <= d) return t.copy(r);
    const f = l * u - d * c;
    if (f <= 0 && l >= 0 && d <= 0) return a = l / (l - d), t.copy(n).addScaledVector(ni, a);
    es.subVectors(e, s);
    const m = ni.dot(es), g = ii.dot(es);
    if (g >= 0 && m <= g) return t.copy(s);
    const x = m * c - l * g;
    if (x <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(ii, o);
    const p = d * g - m * u;
    if (p <= 0 && u - d >= 0 && m - g >= 0) return ja.subVectors(s, r), o = (u - d) / (u - d + (m - g)), t.copy(r).addScaledVector(ja, o);
    const h = 1 / (p + x + f);
    return a = x * h, o = f * h, t.copy(n).addScaledVector(ni, a).addScaledVector(ii, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const sl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, _n = { h: 0, s: 0, l: 0 }, rr = { h: 0, s: 0, l: 0 };
function rs(i3, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i3 + (e - i3) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i3 + (e - i3) * 6 * (2 / 3 - t) : i3;
}
let je = class {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ft) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.colorSpaceToWorking(this, r), this;
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (e = Ac(e, 1), t = He(t, 0, 1), n = He(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = rs(a, s, e + 1 / 3), this.g = rs(a, s, e), this.b = rs(a, s, e - 1 / 3);
    }
    return We.colorSpaceToWorking(this, r), this;
  }
  setStyle(e, t = Ft) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ft) {
    const n = sl[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = cn(e.r), this.g = cn(e.g), this.b = cn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = mi(e.r), this.g = mi(e.g), this.b = mi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ft) {
    return We.workingToColorSpace(St.copy(this), e), Math.round(He(St.r * 255, 0, 255)) * 65536 + Math.round(He(St.g * 255, 0, 255)) * 256 + Math.round(He(St.b * 255, 0, 255));
  }
  getHexString(e = Ft) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(St.copy(this), t);
    const n = St.r, r = St.g, s = St.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const d = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = d <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - r) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = d, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.workingToColorSpace(St.copy(this), t), e.r = St.r, e.g = St.g, e.b = St.b, e;
  }
  getStyle(e = Ft) {
    We.workingToColorSpace(St.copy(this), e);
    const t = St.r, n = St.g, r = St.b;
    return e !== Ft ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(_n), this.setHSL(_n.h + e, _n.s + t, _n.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(_n), e.getHSL(rr);
    const n = Hr(_n.h, rr.h, t), r = Hr(_n.s, rr.s, t), s = Hr(_n.l, rr.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
const St = new je();
je.NAMES = sl;
let Gc = 0;
class Yi extends Wn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Gc++ }), this.uuid = Wi(), this.name = "", this.type = "Material", this.blending = pi, this.side = Mn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = gs, this.blendDst = vs, this.blendEquation = Fn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new je(0, 0, 0), this.blendAlpha = 0, this.depthFunc = _i, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Fa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Kn, this.stencilZFail = Kn, this.stencilZPass = Kn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== pi && (n.blending = this.blending), this.side !== Mn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== gs && (n.blendSrc = this.blendSrc), this.blendDst !== vs && (n.blendDst = this.blendDst), this.blendEquation !== Fn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== _i && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Fa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class al extends Yi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new je(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.combine = Go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = new F(), sr = new Be();
let Wc = 0;
class Jt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Wc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Oa, this.updateRanges = [], this.gpuType = ln, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) sr.fromBufferAttribute(this, t), sr.applyMatrix3(e), this.setXY(t, sr.x, sr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ti(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = bt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = bt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = bt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = bt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = bt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = bt(t, this.array), n = bt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = bt(t, this.array), n = bt(n, this.array), r = bt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = bt(t, this.array), n = bt(n, this.array), r = bt(r, this.array), s = bt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Oa && (e.usage = this.usage), e;
  }
}
class ol extends Jt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ll extends Jt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Hn extends Jt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Xc = 0;
const Nt = new dt(), ss = new Lt(), ri = new F(), Dt = new Xi(), Ci = new Xi(), _t = new F();
class Xn extends Wn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Xc++ }), this.uuid = Wi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (tl(e) ? ll : ol)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ne().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return ss.lookAt(e), ss.updateMatrix(), this.applyMatrix4(ss.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ri).negate(), this.translate(ri.x, ri.y, ri.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Hn(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Xi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new F(-1 / 0, -1 / 0, -1 / 0), new F(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const s = t[n];
        Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Sa());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        Ci.setFromBufferAttribute(o), this.morphTargetsRelative ? (_t.addVectors(Dt.min, Ci.min), Dt.expandByPoint(_t), _t.addVectors(Dt.max, Ci.max), Dt.expandByPoint(_t)) : (Dt.expandByPoint(Ci.min), Dt.expandByPoint(Ci.max));
      }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++) _t.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(_t));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], l = this.morphTargetsRelative;
        for (let c = 0, d = o.count; c < d; c++) _t.fromBufferAttribute(o, c), l && (ri.fromBufferAttribute(e, c), _t.add(ri)), r = Math.max(r, n.distanceToSquared(_t));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Jt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < n.count; N++) o[N] = new F(), l[N] = new F();
    const c = new F(), d = new F(), u = new F(), f = new Be(), m = new Be(), g = new Be(), x = new F(), p = new F();
    function h(N, E, S) {
      c.fromBufferAttribute(n, N), d.fromBufferAttribute(n, E), u.fromBufferAttribute(n, S), f.fromBufferAttribute(s, N), m.fromBufferAttribute(s, E), g.fromBufferAttribute(s, S), d.sub(c), u.sub(c), m.sub(f), g.sub(f);
      const P = 1 / (m.x * g.y - g.x * m.y);
      isFinite(P) && (x.copy(d).multiplyScalar(g.y).addScaledVector(u, -m.y).multiplyScalar(P), p.copy(u).multiplyScalar(m.x).addScaledVector(d, -g.x).multiplyScalar(P), o[N].add(x), o[E].add(x), o[S].add(x), l[N].add(p), l[E].add(p), l[S].add(p));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let N = 0, E = A.length; N < E; ++N) {
      const S = A[N], P = S.start, H = S.count;
      for (let G = P, j = P + H; G < j; G += 3) h(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2));
    }
    const T = new F(), y = new F(), R = new F(), D = new F();
    function C(N) {
      R.fromBufferAttribute(r, N), D.copy(R);
      const E = o[N];
      T.copy(E), T.sub(R.multiplyScalar(R.dot(E))).normalize(), y.crossVectors(D, E);
      const P = y.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, T.x, T.y, T.z, P);
    }
    for (let N = 0, E = A.length; N < E; ++N) {
      const S = A[N], P = S.start, H = S.count;
      for (let G = P, j = P + H; G < j; G += 3) C(e.getX(G + 0)), C(e.getX(G + 1)), C(e.getX(G + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Jt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const r = new F(), s = new F(), a = new F(), o = new F(), l = new F(), c = new F(), d = new F(), u = new F();
      if (e) for (let f = 0, m = e.count; f < m; f += 3) {
        const g = e.getX(f + 0), x = e.getX(f + 1), p = e.getX(f + 2);
        r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, x), a.fromBufferAttribute(t, p), d.subVectors(a, s), u.subVectors(r, s), d.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, p), o.add(d), l.add(d), c.add(d), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let f = 0, m = t.count; f < m; f += 3) r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), d.subVectors(a, s), u.subVectors(r, s), d.cross(u), n.setXYZ(f + 0, d.x, d.y, d.z), n.setXYZ(f + 1, d.x, d.y, d.z), n.setXYZ(f + 2, d.x, d.y, d.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, d = o.itemSize, u = o.normalized, f = new c.constructor(l.length * d);
      let m = 0, g = 0;
      for (let x = 0, p = l.length; x < p; x++) {
        o.isInterleavedBufferAttribute ? m = l[x] * o.data.stride + o.offset : m = l[x] * d;
        for (let h = 0; h < d; h++) f[g++] = c[m++];
      }
      return new Jt(f, d, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Xn(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], d = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const m = c[u];
        d.push(m.toJSON(e.data));
      }
      d.length > 0 && (r[l] = d, s = true);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const c in r) {
      const d = r[c];
      this.setAttribute(c, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [], u = s[c];
      for (let f = 0, m = u.length; f < m; f++) d.push(u[f].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, d = a.length; c < d; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Za = new dt(), Dn = new il(), ar = new Sa(), Ja = new F(), or = new F(), lr = new F(), cr = new F(), as = new F(), ur = new F(), Qa = new F(), hr = new F();
class Zt extends Lt {
  constructor(e = new Xn(), t = new al()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ur.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = o[l], u = s[l];
        d !== 0 && (as.fromBufferAttribute(u, e), a ? ur.addScaledVector(as, d) : ur.addScaledVector(as.sub(t), d));
      }
      t.add(ur);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(s), Dn.copy(e.ray).recast(e.near), !(ar.containsPoint(Dn.origin) === false && (Dn.intersectSphere(ar, Ja) === null || Dn.origin.distanceToSquared(Ja) > (e.far - e.near) ** 2)) && (Za.copy(s).invert(), Dn.copy(e.ray).applyMatrix4(Za), !(n.boundingBox !== null && Dn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Dn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, d = s.attributes.uv1, u = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, x = f.length; g < x; g++) {
      const p = f[g], h = a[p.materialIndex], A = Math.max(p.start, m.start), T = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = A, R = T; y < R; y += 3) {
        const D = o.getX(y), C = o.getX(y + 1), N = o.getX(y + 2);
        r = dr(this, h, e, n, c, d, u, D, C, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, m.start), x = Math.min(o.count, m.start + m.count);
      for (let p = g, h = x; p < h; p += 3) {
        const A = o.getX(p), T = o.getX(p + 1), y = o.getX(p + 2);
        r = dr(this, a, e, n, c, d, u, A, T, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, x = f.length; g < x; g++) {
      const p = f[g], h = a[p.materialIndex], A = Math.max(p.start, m.start), T = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = A, R = T; y < R; y += 3) {
        const D = y, C = y + 1, N = y + 2;
        r = dr(this, h, e, n, c, d, u, D, C, N), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const g = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
      for (let p = g, h = x; p < h; p += 3) {
        const A = p, T = p + 1, y = p + 2;
        r = dr(this, a, e, n, c, d, u, A, T, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
  }
}
function Yc(i3, e, t, n, r, s, a, o) {
  let l;
  if (e.side === At ? l = n.intersectTriangle(a, s, r, true, o) : l = n.intersectTriangle(r, s, a, e.side === Mn, o), l === null) return null;
  hr.copy(o), hr.applyMatrix4(i3.matrixWorld);
  const c = t.ray.origin.distanceTo(hr);
  return c < t.near || c > t.far ? null : { distance: c, point: hr.clone(), object: i3 };
}
function dr(i3, e, t, n, r, s, a, o, l, c) {
  i3.getVertexPosition(o, or), i3.getVertexPosition(l, lr), i3.getVertexPosition(c, cr);
  const d = Yc(i3, e, t, n, or, lr, cr, Qa);
  if (d) {
    const u = new F();
    kt.getBarycoord(Qa, or, lr, cr, u), r && (d.uv = kt.getInterpolatedAttribute(r, o, l, c, u, new Be())), s && (d.uv1 = kt.getInterpolatedAttribute(s, o, l, c, u, new Be())), a && (d.normal = kt.getInterpolatedAttribute(a, o, l, c, u, new F()), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new F(), materialIndex: 0 };
    kt.getNormal(or, lr, cr, f.normal), d.face = f, d.barycoord = u;
  }
  return d;
}
class Mi extends Xn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: a };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], d = [], u = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Hn(c, 3)), this.setAttribute("normal", new Hn(d, 3)), this.setAttribute("uv", new Hn(u, 2));
    function g(x, p, h, A, T, y, R, D, C, N, E) {
      const S = y / C, P = R / N, H = y / 2, G = R / 2, j = D / 2, X = C + 1, K = N + 1;
      let J = 0, k = 0;
      const oe = new F();
      for (let he = 0; he < K; he++) {
        const be = he * P - G;
        for (let ze = 0; ze < X; ze++) {
          const Je = ze * S - H;
          oe[x] = Je * A, oe[p] = be * T, oe[h] = j, c.push(oe.x, oe.y, oe.z), oe[x] = 0, oe[p] = 0, oe[h] = D > 0 ? 1 : -1, d.push(oe.x, oe.y, oe.z), u.push(ze / C), u.push(1 - he / N), J += 1;
        }
      }
      for (let he = 0; he < N; he++) for (let be = 0; be < C; be++) {
        const ze = f + be + X * he, Je = f + be + X * (he + 1), nt = f + (be + 1) + X * (he + 1), Xe = f + (be + 1) + X * he;
        l.push(ze, Je, Xe), l.push(Je, nt, Xe), k += 6;
      }
      o.addGroup(m, k, E), m += k, f += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Mi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Si(i3) {
  const e = {};
  for (const t in i3) {
    e[t] = {};
    for (const n in i3[t]) {
      const r = i3[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function Mt(i3) {
  const e = {};
  for (let t = 0; t < i3.length; t++) {
    const n = Si(i3[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function qc(i3) {
  const e = [];
  for (let t = 0; t < i3.length; t++) e.push(i3[t].clone());
  return e;
}
function cl(i3) {
  const e = i3.getRenderTarget();
  return e === null ? i3.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : We.workingColorSpace;
}
const Kc = { clone: Si, merge: Mt };
var $c = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, jc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class yn extends Yi {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = $c, this.fragmentShader = jc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Si(e.uniforms), this.uniformsGroups = qc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[r] = { type: "m4", value: a.toArray() } : t.uniforms[r] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === true && (n[r] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ul extends Lt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new dt(), this.projectionMatrix = new dt(), this.projectionMatrixInverse = new dt(), this.coordinateSystem = jt, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gn = new F(), eo = new Be(), to = new Be();
class Ot extends ul {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ra * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Tr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ra * 2 * Math.atan(Math.tan(Tr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(gn.x, gn.y).multiplyScalar(-e / gn.z), gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(gn.x, gn.y).multiplyScalar(-e / gn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, eo, to), t.subVectors(to, eo);
  }
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Tr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const si = -90, ai = 1;
class Zc extends Lt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ot(si, ai, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ot(si, ai, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ot(si, ai, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ot(si, ai, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ot(si, ai, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ot(si, ai, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === jt) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Rr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, d] = this.children, u = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, d), e.setRenderTarget(u, f, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class hl extends wt {
  constructor(e = [], t = gi, n, r, s, a, o, l, c, d) {
    super(e, t, n, r, s, a, o, l, c, d), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Jc extends Gn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new hl(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new Mi(5, 5, 5), s = new yn({ name: "CubemapFromEquirect", uniforms: Si(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: At, blending: Sn });
    s.uniforms.tEquirect.value = t;
    const a = new Zt(r, s), o = t.minFilter;
    return t.minFilter === zn && (t.minFilter = $t), new Zc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, n = true, r = true) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class fr extends Lt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Qc = { type: "move" };
class os {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new fr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new fr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new fr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new F()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n), h = this._getHandJoint(c, x);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const d = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = d.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Qc)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new fr();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class eu extends Lt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hn(), this.environmentIntensity = 1, this.environmentRotation = new hn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const ls = new F(), tu = new F(), nu = new Ne();
class vn {
  constructor(e = new F(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = ls.subVectors(n, t).cross(tu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ls), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || nu.getNormalMatrix(e), r = this.coplanarPoint(ls).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ln = new Sa(), iu = new Be(0.5, 0.5), pr = new F();
class dl {
  constructor(e = new vn(), t = new vn(), n = new vn(), r = new vn(), s = new vn(), a = new vn()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = jt, n = false) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], l = s[2], c = s[3], d = s[4], u = s[5], f = s[6], m = s[7], g = s[8], x = s[9], p = s[10], h = s[11], A = s[12], T = s[13], y = s[14], R = s[15];
    if (r[0].setComponents(c - a, m - d, h - g, R - A).normalize(), r[1].setComponents(c + a, m + d, h + g, R + A).normalize(), r[2].setComponents(c + o, m + u, h + x, R + T).normalize(), r[3].setComponents(c - o, m - u, h - x, R - T).normalize(), n) r[4].setComponents(l, f, p, y).normalize(), r[5].setComponents(c - l, m - f, h - p, R - y).normalize();
    else if (r[4].setComponents(c - l, m - f, h - p, R - y).normalize(), t === jt) r[5].setComponents(c + l, m + f, h + p, R + y).normalize();
    else if (t === Rr) r[5].setComponents(l, f, p, y).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ln);
  }
  intersectsSprite(e) {
    Ln.center.set(0, 0, 0);
    const t = iu.distanceTo(e.center);
    return Ln.radius = 0.7071067811865476 + t, Ln.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ln);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (pr.x = r.normal.x > 0 ? e.max.x : e.min.x, pr.y = r.normal.y > 0 ? e.max.y : e.min.y, pr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(pr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class fl extends wt {
  constructor(e, t, n = kn, r, s, a, o = Gt, l = Gt, c, d = zi, u = 1) {
    if (d !== zi && d !== Hi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: u };
    super(f, r, s, a, o, l, d, n, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new xa(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class pl extends wt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Ur extends Xn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, d = l + 1, u = e / o, f = t / l, m = [], g = [], x = [], p = [];
    for (let h = 0; h < d; h++) {
      const A = h * f - a;
      for (let T = 0; T < c; T++) {
        const y = T * u - s;
        g.push(y, -A, 0), x.push(0, 0, 1), p.push(T / o), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++) for (let A = 0; A < o; A++) {
      const T = A + c * h, y = A + c * (h + 1), R = A + 1 + c * (h + 1), D = A + 1 + c * h;
      m.push(T, y, D), m.push(y, R, D);
    }
    this.setIndex(m), this.setAttribute("position", new Hn(g, 3)), this.setAttribute("normal", new Hn(x, 3)), this.setAttribute("uv", new Hn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ur(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ru extends Yi {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qo, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class su extends Yi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = _c, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class au extends Yi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class ou extends ul {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= d * this.view.offsetY, l = o - d * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class lu extends Ot {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class no {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = He(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(He(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class cu extends Wn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function io(i3, e, t, n) {
  const r = uu(n);
  switch (t) {
    case $o:
      return i3 * e;
    case Zo:
      return i3 * e / r.components * r.byteLength;
    case _a:
      return i3 * e / r.components * r.byteLength;
    case Jo:
      return i3 * e * 2 / r.components * r.byteLength;
    case ga:
      return i3 * e * 2 / r.components * r.byteLength;
    case jo:
      return i3 * e * 3 / r.components * r.byteLength;
    case Vt:
      return i3 * e * 4 / r.components * r.byteLength;
    case va:
      return i3 * e * 4 / r.components * r.byteLength;
    case Er:
    case Mr:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case yr:
    case br:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ds:
    case Us:
      return Math.max(i3, 16) * Math.max(e, 8) / 4;
    case Ps:
    case Ls:
      return Math.max(i3, 8) * Math.max(e, 8) / 2;
    case Is:
    case Ns:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Fs:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Os:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Bs:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case zs:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Hs:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ks:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Vs:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Gs:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ws:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Xs:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ys:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case qs:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ks:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case $s:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case js:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Zs:
    case Js:
    case Qs:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
    case ea:
    case ta:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 8;
    case na:
    case ia:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function uu(i3) {
  switch (i3) {
    case un:
    case Xo:
      return { byteLength: 1, components: 1 };
    case Oi:
    case Yo:
    case Gi:
      return { byteLength: 2, components: 1 };
    case pa:
    case ma:
      return { byteLength: 2, components: 4 };
    case kn:
    case fa:
    case ln:
      return { byteLength: 4, components: 1 };
    case qo:
    case Ko:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i3}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: da } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = da);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ml() {
  let i3 = null, e = false, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i3.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== true && t !== null && (n = i3.requestAnimationFrame(r), e = true);
  }, stop: function() {
    i3.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    i3 = s;
  } };
}
function hu(i3) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, d = o.usage, u = c.byteLength, f = i3.createBuffer();
    i3.bindBuffer(l, f), i3.bufferData(l, c, d), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i3.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) m = i3.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i3.HALF_FLOAT : m = i3.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i3.SHORT;
    else if (c instanceof Uint32Array) m = i3.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i3.INT;
    else if (c instanceof Int8Array) m = i3.BYTE;
    else if (c instanceof Uint8Array) m = i3.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i3.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const d = l.array, u = l.updateRanges;
    if (i3.bindBuffer(c, o), u.length === 0) i3.bufferSubData(c, 0, d);
    else {
      u.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < u.length; m++) {
        const g = u[f], x = u[m];
        x.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, x.start + x.count - g.start) : (++f, u[f] = x);
      }
      u.length = f + 1;
      for (let m = 0, g = u.length; m < g; m++) {
        const x = u[m];
        i3.bufferSubData(c, x.start * d.BYTES_PER_ELEMENT, d, x.start, x.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i3.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const d = e.get(o);
      (!d || d.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: r, remove: s, update: a };
}
var du = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, fu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, pu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, mu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _u = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, gu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, xu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Su = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Eu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Mu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, yu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Tu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Au = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, wu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ru = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Cu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Pu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Du = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Uu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Iu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Nu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Fu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Ou = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Bu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, zu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Hu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ku = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Vu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Gu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Wu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Xu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Yu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, qu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Ku = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, $u = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ju = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ju = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Qu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, eh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, th = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, nh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ih = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, rh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, sh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ah = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, oh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ch = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, uh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, hh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, dh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, fh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ph = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, mh = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _h = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, gh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, vh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, xh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Sh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Eh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Mh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, yh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Th = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ah = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, wh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Rh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ch = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ph = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Dh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Uh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ih = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Nh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Fh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Oh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Bh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, zh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Hh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, kh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Vh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Gh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Wh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Xh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Yh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Kh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, $h = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, jh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Zh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Jh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Qh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ed = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, td = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, nd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, id = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, rd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, sd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, ad = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, od = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ld = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, cd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, ud = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const hd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, dd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, md = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _d = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, vd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, xd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Sd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Ed = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Md = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, bd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Td = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ad = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Rd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Pd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Ld = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Ud = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Id = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Fd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Od = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Hd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Vd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Gd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Wd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = { alphahash_fragment: du, alphahash_pars_fragment: fu, alphamap_fragment: pu, alphamap_pars_fragment: mu, alphatest_fragment: _u, alphatest_pars_fragment: gu, aomap_fragment: vu, aomap_pars_fragment: xu, batching_pars_vertex: Su, batching_vertex: Eu, begin_vertex: Mu, beginnormal_vertex: yu, bsdfs: bu, iridescence_fragment: Tu, bumpmap_pars_fragment: Au, clipping_planes_fragment: wu, clipping_planes_pars_fragment: Ru, clipping_planes_pars_vertex: Cu, clipping_planes_vertex: Pu, color_fragment: Du, color_pars_fragment: Lu, color_pars_vertex: Uu, color_vertex: Iu, common: Nu, cube_uv_reflection_fragment: Fu, defaultnormal_vertex: Ou, displacementmap_pars_vertex: Bu, displacementmap_vertex: zu, emissivemap_fragment: Hu, emissivemap_pars_fragment: ku, colorspace_fragment: Vu, colorspace_pars_fragment: Gu, envmap_fragment: Wu, envmap_common_pars_fragment: Xu, envmap_pars_fragment: Yu, envmap_pars_vertex: qu, envmap_physical_pars_fragment: rh, envmap_vertex: Ku, fog_vertex: $u, fog_pars_vertex: ju, fog_fragment: Zu, fog_pars_fragment: Ju, gradientmap_pars_fragment: Qu, lightmap_pars_fragment: eh, lights_lambert_fragment: th, lights_lambert_pars_fragment: nh, lights_pars_begin: ih, lights_toon_fragment: sh, lights_toon_pars_fragment: ah, lights_phong_fragment: oh, lights_phong_pars_fragment: lh, lights_physical_fragment: ch, lights_physical_pars_fragment: uh, lights_fragment_begin: hh, lights_fragment_maps: dh, lights_fragment_end: fh, logdepthbuf_fragment: ph, logdepthbuf_pars_fragment: mh, logdepthbuf_pars_vertex: _h, logdepthbuf_vertex: gh, map_fragment: vh, map_pars_fragment: xh, map_particle_fragment: Sh, map_particle_pars_fragment: Eh, metalnessmap_fragment: Mh, metalnessmap_pars_fragment: yh, morphinstance_vertex: bh, morphcolor_vertex: Th, morphnormal_vertex: Ah, morphtarget_pars_vertex: wh, morphtarget_vertex: Rh, normal_fragment_begin: Ch, normal_fragment_maps: Ph, normal_pars_fragment: Dh, normal_pars_vertex: Lh, normal_vertex: Uh, normalmap_pars_fragment: Ih, clearcoat_normal_fragment_begin: Nh, clearcoat_normal_fragment_maps: Fh, clearcoat_pars_fragment: Oh, iridescence_pars_fragment: Bh, opaque_fragment: zh, packing: Hh, premultiplied_alpha_fragment: kh, project_vertex: Vh, dithering_fragment: Gh, dithering_pars_fragment: Wh, roughnessmap_fragment: Xh, roughnessmap_pars_fragment: Yh, shadowmap_pars_fragment: qh, shadowmap_pars_vertex: Kh, shadowmap_vertex: $h, shadowmask_pars_fragment: jh, skinbase_vertex: Zh, skinning_pars_vertex: Jh, skinning_vertex: Qh, skinnormal_vertex: ed, specularmap_fragment: td, specularmap_pars_fragment: nd, tonemapping_fragment: id, tonemapping_pars_fragment: rd, transmission_fragment: sd, transmission_pars_fragment: ad, uv_pars_fragment: od, uv_pars_vertex: ld, uv_vertex: cd, worldpos_vertex: ud, background_vert: hd, background_frag: dd, backgroundCube_vert: fd, backgroundCube_frag: pd, cube_vert: md, cube_frag: _d, depth_vert: gd, depth_frag: vd, distanceRGBA_vert: xd, distanceRGBA_frag: Sd, equirect_vert: Ed, equirect_frag: Md, linedashed_vert: yd, linedashed_frag: bd, meshbasic_vert: Td, meshbasic_frag: Ad, meshlambert_vert: wd, meshlambert_frag: Rd, meshmatcap_vert: Cd, meshmatcap_frag: Pd, meshnormal_vert: Dd, meshnormal_frag: Ld, meshphong_vert: Ud, meshphong_frag: Id, meshphysical_vert: Nd, meshphysical_frag: Fd, meshtoon_vert: Od, meshtoon_frag: Bd, points_vert: zd, points_frag: Hd, shadow_vert: kd, shadow_frag: Vd, sprite_vert: Gd, sprite_frag: Wd }, ae = { common: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ne() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ne() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ne() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ne() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ne() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ne() }, normalScale: { value: new Be(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ne() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ne() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ne() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ne() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new je(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 }, uvTransform: { value: new Ne() } }, sprite: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, center: { value: new Be(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } } }, Kt = { basic: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]), vertexShader: Oe.meshbasic_vert, fragmentShader: Oe.meshbasic_frag }, lambert: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new je(0) } }]), vertexShader: Oe.meshlambert_vert, fragmentShader: Oe.meshlambert_frag }, phong: { uniforms: Mt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, { emissive: { value: new je(0) }, specular: { value: new je(1118481) }, shininess: { value: 30 } }]), vertexShader: Oe.meshphong_vert, fragmentShader: Oe.meshphong_frag }, standard: { uniforms: Mt([ae.common, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.roughnessmap, ae.metalnessmap, ae.fog, ae.lights, { emissive: { value: new je(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag }, toon: { uniforms: Mt([ae.common, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.gradientmap, ae.fog, ae.lights, { emissive: { value: new je(0) } }]), vertexShader: Oe.meshtoon_vert, fragmentShader: Oe.meshtoon_frag }, matcap: { uniforms: Mt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, { matcap: { value: null } }]), vertexShader: Oe.meshmatcap_vert, fragmentShader: Oe.meshmatcap_frag }, points: { uniforms: Mt([ae.points, ae.fog]), vertexShader: Oe.points_vert, fragmentShader: Oe.points_frag }, dashed: { uniforms: Mt([ae.common, ae.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Oe.linedashed_vert, fragmentShader: Oe.linedashed_frag }, depth: { uniforms: Mt([ae.common, ae.displacementmap]), vertexShader: Oe.depth_vert, fragmentShader: Oe.depth_frag }, normal: { uniforms: Mt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, { opacity: { value: 1 } }]), vertexShader: Oe.meshnormal_vert, fragmentShader: Oe.meshnormal_frag }, sprite: { uniforms: Mt([ae.sprite, ae.fog]), vertexShader: Oe.sprite_vert, fragmentShader: Oe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ne() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Oe.background_vert, fragmentShader: Oe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ne() } }, vertexShader: Oe.backgroundCube_vert, fragmentShader: Oe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Oe.cube_vert, fragmentShader: Oe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Oe.equirect_vert, fragmentShader: Oe.equirect_frag }, distanceRGBA: { uniforms: Mt([ae.common, ae.displacementmap, { referencePosition: { value: new F() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Oe.distanceRGBA_vert, fragmentShader: Oe.distanceRGBA_frag }, shadow: { uniforms: Mt([ae.lights, ae.fog, { color: { value: new je(0) }, opacity: { value: 1 } }]), vertexShader: Oe.shadow_vert, fragmentShader: Oe.shadow_frag } };
Kt.physical = { uniforms: Mt([Kt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ne() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ne() }, clearcoatNormalScale: { value: new Be(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ne() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ne() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ne() }, sheen: { value: 0 }, sheenColor: { value: new je(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ne() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ne() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ne() }, transmissionSamplerSize: { value: new Be() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ne() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new je(0) }, specularColor: { value: new je(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ne() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ne() }, anisotropyVector: { value: new Be() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ne() } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag };
const mr = { r: 0, b: 0, g: 0 }, Un = new hn(), Xd = new dt();
function Yd(i3, e, t, n, r, s, a) {
  const o = new je(0);
  let l = s === true ? 0 : 1, c, d, u = null, f = 0, m = null;
  function g(T) {
    let y = T.isScene === true ? T.background : null;
    return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function x(T) {
    let y = false;
    const R = g(T);
    R === null ? h(o, l) : R && R.isColor && (h(R, 1), y = true);
    const D = i3.xr.getEnvironmentBlendMode();
    D === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : D === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i3.autoClear || y) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i3.clear(i3.autoClearColor, i3.autoClearDepth, i3.autoClearStencil));
  }
  function p(T, y) {
    const R = g(y);
    R && (R.isCubeTexture || R.mapping === Lr) ? (d === void 0 && (d = new Zt(new Mi(1, 1, 1), new yn({ name: "BackgroundCubeMaterial", uniforms: Si(Kt.backgroundCube.uniforms), vertexShader: Kt.backgroundCube.vertexShader, fragmentShader: Kt.backgroundCube.fragmentShader, side: At, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function(D, C, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(d.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(d)), Un.copy(y.backgroundRotation), Un.x *= -1, Un.y *= -1, Un.z *= -1, R.isCubeTexture && R.isRenderTargetTexture === false && (Un.y *= -1, Un.z *= -1), d.material.uniforms.envMap.value = R, d.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === false ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(Un)), d.material.toneMapped = We.getTransfer(R.colorSpace) !== Ke, (u !== R || f !== R.version || m !== i3.toneMapping) && (d.material.needsUpdate = true, u = R, f = R.version, m = i3.toneMapping), d.layers.enableAll(), T.unshift(d, d.geometry, d.material, 0, 0, null)) : R && R.isTexture && (c === void 0 && (c = new Zt(new Ur(2, 2), new yn({ name: "BackgroundMaterial", uniforms: Si(Kt.background.uniforms), vertexShader: Kt.background.vertexShader, fragmentShader: Kt.background.fragmentShader, side: Mn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = R, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = We.getTransfer(R.colorSpace) !== Ke, R.matrixAutoUpdate === true && R.updateMatrix(), c.material.uniforms.uvTransform.value.copy(R.matrix), (u !== R || f !== R.version || m !== i3.toneMapping) && (c.material.needsUpdate = true, u = R, f = R.version, m = i3.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(T, y) {
    T.getRGB(mr, cl(i3)), n.buffers.color.setClear(mr.r, mr.g, mr.b, y, a);
  }
  function A() {
    d !== void 0 && (d.geometry.dispose(), d.material.dispose(), d = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(T, y = 1) {
    o.set(T), l = y, h(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(T) {
    l = T, h(o, l);
  }, render: x, addToRenderList: p, dispose: A };
}
function qd(i3, e) {
  const t = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = false;
  function o(S, P, H, G, j) {
    let X = false;
    const K = u(G, H, P);
    s !== K && (s = K, c(s.object)), X = m(S, G, H, j), X && g(S, G, H, j), j !== null && e.update(j, i3.ELEMENT_ARRAY_BUFFER), (X || a) && (a = false, y(S, P, H, G), j !== null && i3.bindBuffer(i3.ELEMENT_ARRAY_BUFFER, e.get(j).buffer));
  }
  function l() {
    return i3.createVertexArray();
  }
  function c(S) {
    return i3.bindVertexArray(S);
  }
  function d(S) {
    return i3.deleteVertexArray(S);
  }
  function u(S, P, H) {
    const G = H.wireframe === true;
    let j = n[S.id];
    j === void 0 && (j = {}, n[S.id] = j);
    let X = j[P.id];
    X === void 0 && (X = {}, j[P.id] = X);
    let K = X[G];
    return K === void 0 && (K = f(l()), X[G] = K), K;
  }
  function f(S) {
    const P = [], H = [], G = [];
    for (let j = 0; j < t; j++) P[j] = 0, H[j] = 0, G[j] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: P, enabledAttributes: H, attributeDivisors: G, object: S, attributes: {}, index: null };
  }
  function m(S, P, H, G) {
    const j = s.attributes, X = P.attributes;
    let K = 0;
    const J = H.getAttributes();
    for (const k in J) if (J[k].location >= 0) {
      const he = j[k];
      let be = X[k];
      if (be === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (be = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (be = S.instanceColor)), he === void 0 || he.attribute !== be || be && he.data !== be.data) return true;
      K++;
    }
    return s.attributesNum !== K || s.index !== G;
  }
  function g(S, P, H, G) {
    const j = {}, X = P.attributes;
    let K = 0;
    const J = H.getAttributes();
    for (const k in J) if (J[k].location >= 0) {
      let he = X[k];
      he === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (he = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (he = S.instanceColor));
      const be = {};
      be.attribute = he, he && he.data && (be.data = he.data), j[k] = be, K++;
    }
    s.attributes = j, s.attributesNum = K, s.index = G;
  }
  function x() {
    const S = s.newAttributes;
    for (let P = 0, H = S.length; P < H; P++) S[P] = 0;
  }
  function p(S) {
    h(S, 0);
  }
  function h(S, P) {
    const H = s.newAttributes, G = s.enabledAttributes, j = s.attributeDivisors;
    H[S] = 1, G[S] === 0 && (i3.enableVertexAttribArray(S), G[S] = 1), j[S] !== P && (i3.vertexAttribDivisor(S, P), j[S] = P);
  }
  function A() {
    const S = s.newAttributes, P = s.enabledAttributes;
    for (let H = 0, G = P.length; H < G; H++) P[H] !== S[H] && (i3.disableVertexAttribArray(H), P[H] = 0);
  }
  function T(S, P, H, G, j, X, K) {
    K === true ? i3.vertexAttribIPointer(S, P, H, j, X) : i3.vertexAttribPointer(S, P, H, G, j, X);
  }
  function y(S, P, H, G) {
    x();
    const j = G.attributes, X = H.getAttributes(), K = P.defaultAttributeValues;
    for (const J in X) {
      const k = X[J];
      if (k.location >= 0) {
        let oe = j[J];
        if (oe === void 0 && (J === "instanceMatrix" && S.instanceMatrix && (oe = S.instanceMatrix), J === "instanceColor" && S.instanceColor && (oe = S.instanceColor)), oe !== void 0) {
          const he = oe.normalized, be = oe.itemSize, ze = e.get(oe);
          if (ze === void 0) continue;
          const Je = ze.buffer, nt = ze.type, Xe = ze.bytesPerElement, Y = nt === i3.INT || nt === i3.UNSIGNED_INT || oe.gpuType === fa;
          if (oe.isInterleavedBufferAttribute) {
            const Q = oe.data, pe = Q.stride, De = oe.offset;
            if (Q.isInstancedInterleavedBuffer) {
              for (let ye = 0; ye < k.locationSize; ye++) h(k.location + ye, Q.meshPerAttribute);
              S.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else for (let ye = 0; ye < k.locationSize; ye++) p(k.location + ye);
            i3.bindBuffer(i3.ARRAY_BUFFER, Je);
            for (let ye = 0; ye < k.locationSize; ye++) T(k.location + ye, be / k.locationSize, nt, he, pe * Xe, (De + be / k.locationSize * ye) * Xe, Y);
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let Q = 0; Q < k.locationSize; Q++) h(k.location + Q, oe.meshPerAttribute);
              S.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let Q = 0; Q < k.locationSize; Q++) p(k.location + Q);
            i3.bindBuffer(i3.ARRAY_BUFFER, Je);
            for (let Q = 0; Q < k.locationSize; Q++) T(k.location + Q, be / k.locationSize, nt, he, be * Xe, be / k.locationSize * Q * Xe, Y);
          }
        } else if (K !== void 0) {
          const he = K[J];
          if (he !== void 0) switch (he.length) {
            case 2:
              i3.vertexAttrib2fv(k.location, he);
              break;
            case 3:
              i3.vertexAttrib3fv(k.location, he);
              break;
            case 4:
              i3.vertexAttrib4fv(k.location, he);
              break;
            default:
              i3.vertexAttrib1fv(k.location, he);
          }
        }
      }
    }
    A();
  }
  function R() {
    N();
    for (const S in n) {
      const P = n[S];
      for (const H in P) {
        const G = P[H];
        for (const j in G) d(G[j].object), delete G[j];
        delete P[H];
      }
      delete n[S];
    }
  }
  function D(S) {
    if (n[S.id] === void 0) return;
    const P = n[S.id];
    for (const H in P) {
      const G = P[H];
      for (const j in G) d(G[j].object), delete G[j];
      delete P[H];
    }
    delete n[S.id];
  }
  function C(S) {
    for (const P in n) {
      const H = n[P];
      if (H[S.id] === void 0) continue;
      const G = H[S.id];
      for (const j in G) d(G[j].object), delete G[j];
      delete H[S.id];
    }
  }
  function N() {
    E(), a = true, s !== r && (s = r, c(s.object));
  }
  function E() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: E, dispose: R, releaseStatesOfGeometry: D, releaseStatesOfProgram: C, initAttributes: x, enableAttribute: p, disableUnusedAttributes: A };
}
function Kd(i3, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, d) {
    i3.drawArrays(n, c, d), t.update(d, n, 1);
  }
  function a(c, d, u) {
    u !== 0 && (i3.drawArraysInstanced(n, c, d, u), t.update(d, n, u));
  }
  function o(c, d, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, d, 0, u);
    let m = 0;
    for (let g = 0; g < u; g++) m += d[g];
    t.update(m, n, 1);
  }
  function l(c, d, u, f) {
    if (u === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < c.length; g++) a(c[g], d[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, d, 0, f, 0, u);
      let g = 0;
      for (let x = 0; x < u; x++) g += d[x] * f[x];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function $d(i3, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      r = i3.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(C) {
    return !(C !== Vt && n.convert(C) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const N = C === Gi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== un && n.convert(C) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_TYPE) && C !== ln && !N);
  }
  function l(C) {
    if (C === "highp") {
      if (i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.HIGH_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.MEDIUM_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const d = l(c);
  d !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", d, "instead."), c = d);
  const u = t.logarithmicDepthBuffer === true, f = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), m = i3.getParameter(i3.MAX_TEXTURE_IMAGE_UNITS), g = i3.getParameter(i3.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i3.getParameter(i3.MAX_TEXTURE_SIZE), p = i3.getParameter(i3.MAX_CUBE_MAP_TEXTURE_SIZE), h = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), A = i3.getParameter(i3.MAX_VERTEX_UNIFORM_VECTORS), T = i3.getParameter(i3.MAX_VARYING_VECTORS), y = i3.getParameter(i3.MAX_FRAGMENT_UNIFORM_VECTORS), R = g > 0, D = i3.getParameter(i3.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reversedDepthBuffer: f, maxTextures: m, maxVertexTextures: g, maxTextureSize: x, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: A, maxVaryings: T, maxFragmentUniforms: y, vertexTextures: R, maxSamples: D };
}
function jd(i3) {
  const e = this;
  let t = null, n = 0, r = false, s = false;
  const a = new vn(), o = new Ne(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const m = u.length !== 0 || f || n !== 0 || r;
    return r = f, n = u.length, m;
  }, this.beginShadows = function() {
    s = true, d(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(u, f) {
    t = d(u, f, 0);
  }, this.setState = function(u, f, m) {
    const g = u.clippingPlanes, x = u.clipIntersection, p = u.clipShadows, h = i3.get(u);
    if (!r || g === null || g.length === 0 || s && !p) s ? d(null) : c();
    else {
      const A = s ? 0 : n, T = A * 4;
      let y = h.clippingState || null;
      l.value = y, y = d(g, f, T, m);
      for (let R = 0; R !== T; ++R) y[R] = t[R];
      h.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function d(u, f, m, g) {
    const x = u !== null ? u.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = l.value, g !== true || p === null) {
        const h = m + x * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let T = 0, y = m; T !== x; ++T, y += 4) a.copy(u[T]).applyMatrix4(A, o), a.normal.toArray(p, y), p[y + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = x, e.numIntersection = 0, p;
  }
}
function Zd(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === As ? a.mapping = gi : o === ws && (a.mapping = vi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === As || o === ws) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new Jc(l.height);
          return c.fromEquirectangularTexture(i3, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
const hi = 4, ro = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], On = 20, cs = new ou(), so = new je();
let us = null, hs = 0, ds = 0, fs = false;
const Nn = (1 + Math.sqrt(5)) / 2, oi = 1 / Nn, ao = [new F(-Nn, oi, 0), new F(Nn, oi, 0), new F(-oi, 0, Nn), new F(oi, 0, Nn), new F(0, Nn, -oi), new F(0, Nn, oi), new F(-1, 1, -1), new F(1, 1, -1), new F(-1, 1, 1), new F(1, 1, 1)], Jd = new F();
class oo {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = Jd } = s;
    us = this._renderer.getRenderTarget(), hs = this._renderer.getActiveCubeFace(), ds = this._renderer.getActiveMipmapLevel(), fs = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, n, r, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = uo(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = co(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(us, hs, ds), this._renderer.xr.enabled = fs, e.scissorTest = false, _r(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === gi || e.mapping === vi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), us = this._renderer.getRenderTarget(), hs = this._renderer.getActiveCubeFace(), ds = this._renderer.getActiveMipmapLevel(), fs = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: $t, minFilter: $t, generateMipmaps: false, type: Gi, format: Vt, colorSpace: xi, depthBuffer: false }, r = lo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = lo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Qd(s)), this._blurMaterial = ef(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Zt(this._lodPlanes[0], e);
    this._renderer.compile(t, cs);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new Ot(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], d = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, m = u.toneMapping;
    u.getClearColor(so), u.toneMapping = En, u.autoClear = false, u.state.buffers.depth.getReversed() && (u.setRenderTarget(r), u.clearDepth(), u.setRenderTarget(null));
    const x = new al({ name: "PMREM.Background", side: At, depthWrite: false, depthTest: false }), p = new Zt(new Mi(), x);
    let h = false;
    const A = e.background;
    A ? A.isColor && (x.color.copy(A), e.background = null, h = true) : (x.color.copy(so), h = true);
    for (let T = 0; T < 6; T++) {
      const y = T % 3;
      y === 0 ? (l.up.set(0, c[T], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + d[T], s.y, s.z)) : y === 1 ? (l.up.set(0, 0, c[T]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + d[T], s.z)) : (l.up.set(0, c[T], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + d[T]));
      const R = this._cubeSize;
      _r(r, y * R, T > 2 ? R : 0, R, R), u.setRenderTarget(r), h && u.render(p, l), u.render(e, l);
    }
    p.geometry.dispose(), p.material.dispose(), u.toneMapping = m, u.autoClear = f, e.background = A;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === gi || e.mapping === vi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = uo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = co());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Zt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    _r(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, cs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = ao[(r - s - 1) % ao.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, "latitudinal", s), this._halfBlur(a, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const d = 3, u = new Zt(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * On - 1), x = s / g, p = isFinite(s) ? 1 + Math.floor(d * x) : On;
    p > On && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);
    const h = [];
    let A = 0;
    for (let C = 0; C < On; ++C) {
      const N = C / x, E = Math.exp(-N * N / 2);
      h.push(E), C === 0 ? A += E : C < p && (A += 2 * E);
    }
    for (let C = 0; C < h.length; C++) h[C] = h[C] / A;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: T } = this;
    f.dTheta.value = g, f.mipInt.value = T - n;
    const y = this._sizeLods[r], R = 3 * y * (r > T - hi ? r - T + hi : 0), D = 4 * (this._cubeSize - y);
    _r(t, R, D, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, cs);
  }
}
function Qd(i3) {
  const e = [], t = [], n = [];
  let r = i3;
  const s = i3 - hi + 1 + ro.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i3 - hi ? l = ro[a - i3 + hi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), d = -c, u = 1 + c, f = [d, d, u, d, u, u, d, d, u, u, d, u], m = 6, g = 6, x = 3, p = 2, h = 1, A = new Float32Array(x * g * m), T = new Float32Array(p * g * m), y = new Float32Array(h * g * m);
    for (let D = 0; D < m; D++) {
      const C = D % 3 * 2 / 3 - 1, N = D > 2 ? 0 : -1, E = [C, N, 0, C + 2 / 3, N, 0, C + 2 / 3, N + 1, 0, C, N, 0, C + 2 / 3, N + 1, 0, C, N + 1, 0];
      A.set(E, x * g * D), T.set(f, p * g * D);
      const S = [D, D, D, D, D, D];
      y.set(S, h * g * D);
    }
    const R = new Xn();
    R.setAttribute("position", new Jt(A, x)), R.setAttribute("uv", new Jt(T, p)), R.setAttribute("faceIndex", new Jt(y, h)), e.push(R), r > hi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function lo(i3, e, t) {
  const n = new Gn(i3, e, t);
  return n.texture.mapping = Lr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function _r(i3, e, t, n, r) {
  i3.viewport.set(e, t, n, r), i3.scissor.set(e, t, n, r);
}
function ef(i3, e, t) {
  const n = new Float32Array(On), r = new F(0, 1, 0);
  return new yn({ name: "SphericalGaussianBlur", defines: { n: On, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: Ea(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Sn, depthTest: false, depthWrite: false });
}
function co() {
  return new yn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ea(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Sn, depthTest: false, depthWrite: false });
}
function uo() {
  return new yn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ea(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Sn, depthTest: false, depthWrite: false });
}
function Ea() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function tf(i3) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === As || l === ws, d = l === gi || l === vi;
      if (c || d) {
        let u = e.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return t === null && (t = new oo(i3)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || d && m && r(m) ? (t === null && (t = new oo(i3)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++) o[d] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function nf(i3) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i3.getExtension("WEBGL_depth_texture") || i3.getExtension("MOZ_WEBGL_depth_texture") || i3.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i3.getExtension("EXT_texture_filter_anisotropic") || i3.getExtension("MOZ_EXT_texture_filter_anisotropic") || i3.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i3.getExtension("WEBGL_compressed_texture_s3tc") || i3.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i3.getExtension("WEBGL_compressed_texture_pvrtc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i3.getExtension(n);
    }
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = t(n);
    return r === null && ki("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function rf(i3, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, f) {
    return r[f.id] === true || (f.addEventListener("dispose", a), r[f.id] = true, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const m in f) e.update(f[m], i3.ARRAY_BUFFER);
  }
  function c(u) {
    const f = [], m = u.index, g = u.attributes.position;
    let x = 0;
    if (m !== null) {
      const A = m.array;
      x = m.version;
      for (let T = 0, y = A.length; T < y; T += 3) {
        const R = A[T + 0], D = A[T + 1], C = A[T + 2];
        f.push(R, D, D, C, C, R);
      }
    } else if (g !== void 0) {
      const A = g.array;
      x = g.version;
      for (let T = 0, y = A.length / 3 - 1; T < y; T += 3) {
        const R = T + 0, D = T + 1, C = T + 2;
        f.push(R, D, D, C, C, R);
      }
    } else return;
    const p = new (tl(f) ? ll : ol)(f, 1);
    p.version = x;
    const h = s.get(u);
    h && e.remove(h), s.set(u, p);
  }
  function d(u) {
    const f = s.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: d };
}
function sf(i3, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i3.drawElements(n, m, s, f * a), t.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (i3.drawElementsInstanced(n, m, s, f * a, g), t.update(m, n, g));
  }
  function d(f, m, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, f, 0, g);
    let p = 0;
    for (let h = 0; h < g; h++) p += m[h];
    t.update(p, n, 1);
  }
  function u(f, m, g, x) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < f.length; h++) c(f[h] / a, m[h], x[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, x, 0, g);
      let h = 0;
      for (let A = 0; A < g; A++) h += m[A] * x[A];
      t.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = d, this.renderMultiDrawInstances = u;
}
function af(i3) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i3.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i3.LINES:
        t.lines += o * (s / 2);
        break;
      case i3.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i3.LINE_LOOP:
        t.lines += o * s;
        break;
      case i3.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: r, update: n };
}
function of(i3, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ct();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, d = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = d !== void 0 ? d.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let S = function() {
        N.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      var m = S;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], A = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let y = 0;
      g === true && (y = 1), x === true && (y = 2), p === true && (y = 3);
      let R = o.attributes.position.count * y, D = 1;
      R > e.maxTextureSize && (D = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize);
      const C = new Float32Array(R * D * 4 * u), N = new nl(C, R, D, u);
      N.type = ln, N.needsUpdate = true;
      const E = y * 4;
      for (let P = 0; P < u; P++) {
        const H = h[P], G = A[P], j = T[P], X = R * D * 4 * P;
        for (let K = 0; K < H.count; K++) {
          const J = K * E;
          g === true && (r.fromBufferAttribute(H, K), C[X + J + 0] = r.x, C[X + J + 1] = r.y, C[X + J + 2] = r.z, C[X + J + 3] = 0), x === true && (r.fromBufferAttribute(G, K), C[X + J + 4] = r.x, C[X + J + 5] = r.y, C[X + J + 6] = r.z, C[X + J + 7] = 0), p === true && (r.fromBufferAttribute(j, K), C[X + J + 8] = r.x, C[X + J + 9] = r.y, C[X + J + 10] = r.z, C[X + J + 11] = j.itemSize === 4 ? r.w : 1);
        }
      }
      f = { count: u, texture: N, size: new Be(R, D) }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i3, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++) g += c[p];
      const x = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(i3, "morphTargetBaseInfluence", x), l.getUniforms().setValue(i3, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i3, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(i3, "morphTargetsTextureSize", f.size);
  }
  return { update: s };
}
function lf(i3, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, d = l.geometry, u = e.get(l, d);
    if (r.get(u) !== c && (e.update(u), r.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i3.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i3.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return u;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const _l = new wt(), ho = new fl(1, 1), gl = new nl(), vl = new Nc(), xl = new hl(), fo = [], po = [], mo = new Float32Array(16), _o = new Float32Array(9), go = new Float32Array(4);
function yi(i3, e, t) {
  const n = i3[0];
  if (n <= 0 || n > 0) return i3;
  const r = e * t;
  let s = fo[r];
  if (s === void 0 && (s = new Float32Array(r), fo[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i3[a].toArray(s, o);
  }
  return s;
}
function ft(i3, e) {
  if (i3.length !== e.length) return false;
  for (let t = 0, n = i3.length; t < n; t++) if (i3[t] !== e[t]) return false;
  return true;
}
function pt(i3, e) {
  for (let t = 0, n = e.length; t < n; t++) i3[t] = e[t];
}
function Ir(i3, e) {
  let t = po[e];
  t === void 0 && (t = new Int32Array(e), po[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i3.allocateTextureUnit();
  return t;
}
function cf(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1f(this.addr, e), t[0] = e);
}
function uf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i3.uniform2fv(this.addr, e), pt(t, e);
  }
}
function hf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i3.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    i3.uniform3fv(this.addr, e), pt(t, e);
  }
}
function df(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i3.uniform4fv(this.addr, e), pt(t, e);
  }
}
function ff(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i3.uniformMatrix2fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    go.set(n), i3.uniformMatrix2fv(this.addr, false, go), pt(t, n);
  }
}
function pf(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i3.uniformMatrix3fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    _o.set(n), i3.uniformMatrix3fv(this.addr, false, _o), pt(t, n);
  }
}
function mf(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    i3.uniformMatrix4fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    mo.set(n), i3.uniformMatrix4fv(this.addr, false, mo), pt(t, n);
  }
}
function _f(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1i(this.addr, e), t[0] = e);
}
function gf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i3.uniform2iv(this.addr, e), pt(t, e);
  }
}
function vf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    i3.uniform3iv(this.addr, e), pt(t, e);
  }
}
function xf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i3.uniform4iv(this.addr, e), pt(t, e);
  }
}
function Sf(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1ui(this.addr, e), t[0] = e);
}
function Ef(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    i3.uniform2uiv(this.addr, e), pt(t, e);
  }
}
function Mf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    i3.uniform3uiv(this.addr, e), pt(t, e);
  }
}
function yf(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    i3.uniform4uiv(this.addr, e), pt(t, e);
  }
}
function bf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i3.SAMPLER_2D_SHADOW ? (ho.compareFunction = el, s = ho) : s = _l, t.setTexture2D(e || s, r);
}
function Tf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || vl, r);
}
function Af(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || xl, r);
}
function wf(i3, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i3.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || gl, r);
}
function Rf(i3) {
  switch (i3) {
    case 5126:
      return cf;
    case 35664:
      return uf;
    case 35665:
      return hf;
    case 35666:
      return df;
    case 35674:
      return ff;
    case 35675:
      return pf;
    case 35676:
      return mf;
    case 5124:
    case 35670:
      return _f;
    case 35667:
    case 35671:
      return gf;
    case 35668:
    case 35672:
      return vf;
    case 35669:
    case 35673:
      return xf;
    case 5125:
      return Sf;
    case 36294:
      return Ef;
    case 36295:
      return Mf;
    case 36296:
      return yf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return bf;
    case 35679:
    case 36299:
    case 36307:
      return Tf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Af;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wf;
  }
}
function Cf(i3, e) {
  i3.uniform1fv(this.addr, e);
}
function Pf(i3, e) {
  const t = yi(e, this.size, 2);
  i3.uniform2fv(this.addr, t);
}
function Df(i3, e) {
  const t = yi(e, this.size, 3);
  i3.uniform3fv(this.addr, t);
}
function Lf(i3, e) {
  const t = yi(e, this.size, 4);
  i3.uniform4fv(this.addr, t);
}
function Uf(i3, e) {
  const t = yi(e, this.size, 4);
  i3.uniformMatrix2fv(this.addr, false, t);
}
function If(i3, e) {
  const t = yi(e, this.size, 9);
  i3.uniformMatrix3fv(this.addr, false, t);
}
function Nf(i3, e) {
  const t = yi(e, this.size, 16);
  i3.uniformMatrix4fv(this.addr, false, t);
}
function Ff(i3, e) {
  i3.uniform1iv(this.addr, e);
}
function Of(i3, e) {
  i3.uniform2iv(this.addr, e);
}
function Bf(i3, e) {
  i3.uniform3iv(this.addr, e);
}
function zf(i3, e) {
  i3.uniform4iv(this.addr, e);
}
function Hf(i3, e) {
  i3.uniform1uiv(this.addr, e);
}
function kf(i3, e) {
  i3.uniform2uiv(this.addr, e);
}
function Vf(i3, e) {
  i3.uniform3uiv(this.addr, e);
}
function Gf(i3, e) {
  i3.uniform4uiv(this.addr, e);
}
function Wf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ft(n, s) || (i3.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || _l, s[a]);
}
function Xf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ft(n, s) || (i3.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || vl, s[a]);
}
function Yf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ft(n, s) || (i3.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || xl, s[a]);
}
function qf(i3, e, t) {
  const n = this.cache, r = e.length, s = Ir(t, r);
  ft(n, s) || (i3.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || gl, s[a]);
}
function Kf(i3) {
  switch (i3) {
    case 5126:
      return Cf;
    case 35664:
      return Pf;
    case 35665:
      return Df;
    case 35666:
      return Lf;
    case 35674:
      return Uf;
    case 35675:
      return If;
    case 35676:
      return Nf;
    case 5124:
    case 35670:
      return Ff;
    case 35667:
    case 35671:
      return Of;
    case 35668:
    case 35672:
      return Bf;
    case 35669:
    case 35673:
      return zf;
    case 5125:
      return Hf;
    case 36294:
      return kf;
    case 36295:
      return Vf;
    case 36296:
      return Gf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wf;
    case 35679:
    case 36299:
    case 36307:
      return Xf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Yf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qf;
  }
}
class $f {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Rf(t.type);
  }
}
class jf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Kf(t.type);
  }
}
class Zf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ps = /(\w+)(\])?(\[|\.)?/g;
function vo(i3, e) {
  i3.seq.push(e), i3.map[e.id] = e;
}
function Jf(i3, e, t) {
  const n = i3.name, r = n.length;
  for (ps.lastIndex = 0; ; ) {
    const s = ps.exec(n), a = ps.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      vo(t, c === void 0 ? new $f(o, i3, e) : new jf(o, i3, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Zf(o), vo(t, u)), t = u;
    }
  }
}
class Ar {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      Jf(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function xo(i3, e, t) {
  const n = i3.createShader(e);
  return i3.shaderSource(n, t), i3.compileShader(n), n;
}
const Qf = 37297;
let ep = 0;
function tp(i3, e) {
  const t = i3.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const So = new Ne();
function np(i3) {
  We._getMatrix(So, We.workingColorSpace, i3);
  const e = `mat3( ${So.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(i3)) {
    case wr:
      return [e, "LinearTransferOETF"];
    case Ke:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i3), [e, "LinearTransferOETF"];
  }
}
function Eo(i3, e, t) {
  const n = i3.getShaderParameter(e, i3.COMPILE_STATUS), s = (i3.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + tp(i3.getShaderSource(e), o);
  } else return s;
}
function ip(i3, e) {
  const t = np(e);
  return [`vec4 ${i3}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function rp(i3, e) {
  let t;
  switch (e) {
    case lc:
      t = "Linear";
      break;
    case cc:
      t = "Reinhard";
      break;
    case uc:
      t = "Cineon";
      break;
    case hc:
      t = "ACESFilmic";
      break;
    case fc:
      t = "AgX";
      break;
    case pc:
      t = "Neutral";
      break;
    case dc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i3 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const gr = new F();
function sp() {
  We.getLuminanceCoefficients(gr);
  const i3 = gr.x.toFixed(4), e = gr.y.toFixed(4), t = gr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i3}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function ap(i3) {
  return [i3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Li).join(`
`);
}
function op(i3) {
  const e = [];
  for (const t in i3) {
    const n = i3[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function lp(i3, e) {
  const t = {}, n = i3.getProgramParameter(e, i3.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i3.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i3.FLOAT_MAT2 && (o = 2), s.type === i3.FLOAT_MAT3 && (o = 3), s.type === i3.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: i3.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Li(i3) {
  return i3 !== "";
}
function Mo(i3, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i3.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function yo(i3, e) {
  return i3.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const cp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function sa(i3) {
  return i3.replace(cp, hp);
}
const up = /* @__PURE__ */ new Map();
function hp(i3, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = up.get(e);
    if (n !== void 0) t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return sa(t);
}
const dp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bo(i3) {
  return i3.replace(dp, fp);
}
function fp(i3, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function To(i3) {
  let e = `precision ${i3.precision} float;
	precision ${i3.precision} int;
	precision ${i3.precision} sampler2D;
	precision ${i3.precision} samplerCube;
	precision ${i3.precision} sampler3D;
	precision ${i3.precision} sampler2DArray;
	precision ${i3.precision} sampler2DShadow;
	precision ${i3.precision} samplerCubeShadow;
	precision ${i3.precision} sampler2DArrayShadow;
	precision ${i3.precision} isampler2D;
	precision ${i3.precision} isampler3D;
	precision ${i3.precision} isamplerCube;
	precision ${i3.precision} isampler2DArray;
	precision ${i3.precision} usampler2D;
	precision ${i3.precision} usampler3D;
	precision ${i3.precision} usamplerCube;
	precision ${i3.precision} usampler2DArray;
	`;
  return i3.precision === "highp" ? e += `
#define HIGH_PRECISION` : i3.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i3.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function pp(i3) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i3.shadowMapType === Vo ? e = "SHADOWMAP_TYPE_PCF" : i3.shadowMapType === kl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i3.shadowMapType === an && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function mp(i3) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i3.envMap) switch (i3.envMapMode) {
    case gi:
    case vi:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Lr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function _p(i3) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i3.envMap) switch (i3.envMapMode) {
    case vi:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function gp(i3) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i3.envMap) switch (i3.combine) {
    case Go:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case ac:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case oc:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function vp(i3) {
  const e = i3.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function xp(i3, e, t, n) {
  const r = i3.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = pp(t), c = mp(t), d = _p(t), u = gp(t), f = vp(t), m = ap(t), g = op(s), x = r.createProgram();
  let p, h, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Li).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Li).join(`
`), h.length > 0 && (h += `
`)) : (p = [To(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + d : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Li).join(`
`), h = [To(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + d : "", t.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== En ? "#define TONE_MAPPING" : "", t.toneMapping !== En ? Oe.tonemapping_pars_fragment : "", t.toneMapping !== En ? rp("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Oe.colorspace_pars_fragment, ip("linearToOutputTexel", t.outputColorSpace), sp(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Li).join(`
`)), a = sa(a), a = Mo(a, t), a = yo(a, t), o = sa(o), o = Mo(o, t), o = yo(o, t), a = bo(a), o = bo(o), t.isRawShaderMaterial !== true && (A = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["#define varying in", t.glslVersion === Ba ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ba ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const T = A + p + a, y = A + h + o, R = xo(r, r.VERTEX_SHADER, T), D = xo(r, r.FRAGMENT_SHADER, y);
  r.attachShader(x, R), r.attachShader(x, D), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === true && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function C(P) {
    if (i3.debug.checkShaderErrors) {
      const H = r.getProgramInfoLog(x) || "", G = r.getShaderInfoLog(R) || "", j = r.getShaderInfoLog(D) || "", X = H.trim(), K = G.trim(), J = j.trim();
      let k = true, oe = true;
      if (r.getProgramParameter(x, r.LINK_STATUS) === false) if (k = false, typeof i3.debug.onShaderError == "function") i3.debug.onShaderError(r, x, R, D);
      else {
        const he = Eo(r, R, "vertex"), be = Eo(r, D, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + X + `
` + he + `
` + be);
      }
      else X !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", X) : (K === "" || J === "") && (oe = false);
      oe && (P.diagnostics = { runnable: k, programLog: X, vertexShader: { log: K, prefix: p }, fragmentShader: { log: J, prefix: h } });
    }
    r.deleteShader(R), r.deleteShader(D), N = new Ar(r, x), E = lp(r, x);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && C(this), N;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && C(this), E;
  };
  let S = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return S === false && (S = r.getProgramParameter(x, Qf)), S;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = ep++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = R, this.fragmentShader = D, this;
}
let Sp = 0;
class Ep {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === false && (a.add(r), r.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Mp(e), t.set(e, n)), n;
  }
}
class Mp {
  constructor(e) {
    this.id = Sp++, this.code = e, this.usedTimes = 0;
  }
}
function yp(i3, e, t, n, r, s, a) {
  const o = new rl(), l = new Ep(), c = /* @__PURE__ */ new Set(), d = [], u = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function x(E) {
    return c.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function p(E, S, P, H, G) {
    const j = H.fog, X = G.geometry, K = E.isMeshStandardMaterial ? H.environment : null, J = (E.isMeshStandardMaterial ? t : e).get(E.envMap || K), k = J && J.mapping === Lr ? J.image.height : null, oe = g[E.type];
    E.precision !== null && (m = r.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
    const he = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, be = he !== void 0 ? he.length : 0;
    let ze = 0;
    X.morphAttributes.position !== void 0 && (ze = 1), X.morphAttributes.normal !== void 0 && (ze = 2), X.morphAttributes.color !== void 0 && (ze = 3);
    let Je, nt, Xe, Y;
    if (oe) {
      const Ye = Kt[oe];
      Je = Ye.vertexShader, nt = Ye.fragmentShader;
    } else Je = E.vertexShader, nt = E.fragmentShader, l.update(E), Xe = l.getVertexShaderID(E), Y = l.getFragmentShaderID(E);
    const Q = i3.getRenderTarget(), pe = i3.state.buffers.depth.getReversed(), De = G.isInstancedMesh === true, ye = G.isBatchedMesh === true, Ve = !!E.map, vt = !!E.matcap, b = !!J, it = !!E.aoMap, Ue = !!E.lightMap, Ce = !!E.bumpMap, ge = !!E.normalMap, rt = !!E.displacementMap, ve = !!E.emissiveMap, Fe = !!E.metalnessMap, mt = !!E.roughnessMap, lt = E.anisotropy > 0, M = E.clearcoat > 0, _ = E.dispersion > 0, I = E.iridescence > 0, W = E.sheen > 0, Z = E.transmission > 0, V = lt && !!E.anisotropyMap, Me = M && !!E.clearcoatMap, re = M && !!E.clearcoatNormalMap, xe = M && !!E.clearcoatRoughnessMap, Se = I && !!E.iridescenceMap, ne = I && !!E.iridescenceThicknessMap, ue = W && !!E.sheenColorMap, Re = W && !!E.sheenRoughnessMap, Ee = !!E.specularMap, le = !!E.specularColorMap, Ie = !!E.specularIntensityMap, w = Z && !!E.transmissionMap, ie = Z && !!E.thicknessMap, se = !!E.gradientMap, fe = !!E.alphaMap, ee = E.alphaTest > 0, $ = !!E.alphaHash, _e = !!E.extensions;
    let Le = En;
    E.toneMapped && (Q === null || Q.isXRRenderTarget === true) && (Le = i3.toneMapping);
    const Qe = { shaderID: oe, shaderType: E.type, shaderName: E.name, vertexShader: Je, fragmentShader: nt, defines: E.defines, customVertexShaderID: Xe, customFragmentShaderID: Y, isRawShaderMaterial: E.isRawShaderMaterial === true, glslVersion: E.glslVersion, precision: m, batching: ye, batchingColor: ye && G._colorsTexture !== null, instancing: De, instancingColor: De && G.instanceColor !== null, instancingMorph: De && G.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: Q === null ? i3.outputColorSpace : Q.isXRRenderTarget === true ? Q.texture.colorSpace : xi, alphaToCoverage: !!E.alphaToCoverage, map: Ve, matcap: vt, envMap: b, envMapMode: b && J.mapping, envMapCubeUVHeight: k, aoMap: it, lightMap: Ue, bumpMap: Ce, normalMap: ge, displacementMap: f && rt, emissiveMap: ve, normalMapObjectSpace: ge && E.normalMapType === vc, normalMapTangentSpace: ge && E.normalMapType === Qo, metalnessMap: Fe, roughnessMap: mt, anisotropy: lt, anisotropyMap: V, clearcoat: M, clearcoatMap: Me, clearcoatNormalMap: re, clearcoatRoughnessMap: xe, dispersion: _, iridescence: I, iridescenceMap: Se, iridescenceThicknessMap: ne, sheen: W, sheenColorMap: ue, sheenRoughnessMap: Re, specularMap: Ee, specularColorMap: le, specularIntensityMap: Ie, transmission: Z, transmissionMap: w, thicknessMap: ie, gradientMap: se, opaque: E.transparent === false && E.blending === pi && E.alphaToCoverage === false, alphaMap: fe, alphaTest: ee, alphaHash: $, combine: E.combine, mapUv: Ve && x(E.map.channel), aoMapUv: it && x(E.aoMap.channel), lightMapUv: Ue && x(E.lightMap.channel), bumpMapUv: Ce && x(E.bumpMap.channel), normalMapUv: ge && x(E.normalMap.channel), displacementMapUv: rt && x(E.displacementMap.channel), emissiveMapUv: ve && x(E.emissiveMap.channel), metalnessMapUv: Fe && x(E.metalnessMap.channel), roughnessMapUv: mt && x(E.roughnessMap.channel), anisotropyMapUv: V && x(E.anisotropyMap.channel), clearcoatMapUv: Me && x(E.clearcoatMap.channel), clearcoatNormalMapUv: re && x(E.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: xe && x(E.clearcoatRoughnessMap.channel), iridescenceMapUv: Se && x(E.iridescenceMap.channel), iridescenceThicknessMapUv: ne && x(E.iridescenceThicknessMap.channel), sheenColorMapUv: ue && x(E.sheenColorMap.channel), sheenRoughnessMapUv: Re && x(E.sheenRoughnessMap.channel), specularMapUv: Ee && x(E.specularMap.channel), specularColorMapUv: le && x(E.specularColorMap.channel), specularIntensityMapUv: Ie && x(E.specularIntensityMap.channel), transmissionMapUv: w && x(E.transmissionMap.channel), thicknessMapUv: ie && x(E.thicknessMap.channel), alphaMapUv: fe && x(E.alphaMap.channel), vertexTangents: !!X.attributes.tangent && (ge || lt), vertexColors: E.vertexColors, vertexAlphas: E.vertexColors === true && !!X.attributes.color && X.attributes.color.itemSize === 4, pointsUvs: G.isPoints === true && !!X.attributes.uv && (Ve || fe), fog: !!j, useFog: E.fog === true, fogExp2: !!j && j.isFogExp2, flatShading: E.flatShading === true && E.wireframe === false, sizeAttenuation: E.sizeAttenuation === true, logarithmicDepthBuffer: u, reversedDepthBuffer: pe, skinning: G.isSkinnedMesh === true, morphTargets: X.morphAttributes.position !== void 0, morphNormals: X.morphAttributes.normal !== void 0, morphColors: X.morphAttributes.color !== void 0, morphTargetsCount: be, morphTextureStride: ze, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: E.dithering, shadowMapEnabled: i3.shadowMap.enabled && P.length > 0, shadowMapType: i3.shadowMap.type, toneMapping: Le, decodeVideoTexture: Ve && E.map.isVideoTexture === true && We.getTransfer(E.map.colorSpace) === Ke, decodeVideoTextureEmissive: ve && E.emissiveMap.isVideoTexture === true && We.getTransfer(E.emissiveMap.colorSpace) === Ke, premultipliedAlpha: E.premultipliedAlpha, doubleSided: E.side === on, flipSided: E.side === At, useDepthPacking: E.depthPacking >= 0, depthPacking: E.depthPacking || 0, index0AttributeName: E.index0AttributeName, extensionClipCullDistance: _e && E.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (_e && E.extensions.multiDraw === true || ye) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: E.customProgramCacheKey() };
    return Qe.vertexUv1s = c.has(1), Qe.vertexUv2s = c.has(2), Qe.vertexUv3s = c.has(3), c.clear(), Qe;
  }
  function h(E) {
    const S = [];
    if (E.shaderID ? S.push(E.shaderID) : (S.push(E.customVertexShaderID), S.push(E.customFragmentShaderID)), E.defines !== void 0) for (const P in E.defines) S.push(P), S.push(E.defines[P]);
    return E.isRawShaderMaterial === false && (A(S, E), T(S, E), S.push(i3.outputColorSpace)), S.push(E.customProgramCacheKey), S.join();
  }
  function A(E, S) {
    E.push(S.precision), E.push(S.outputColorSpace), E.push(S.envMapMode), E.push(S.envMapCubeUVHeight), E.push(S.mapUv), E.push(S.alphaMapUv), E.push(S.lightMapUv), E.push(S.aoMapUv), E.push(S.bumpMapUv), E.push(S.normalMapUv), E.push(S.displacementMapUv), E.push(S.emissiveMapUv), E.push(S.metalnessMapUv), E.push(S.roughnessMapUv), E.push(S.anisotropyMapUv), E.push(S.clearcoatMapUv), E.push(S.clearcoatNormalMapUv), E.push(S.clearcoatRoughnessMapUv), E.push(S.iridescenceMapUv), E.push(S.iridescenceThicknessMapUv), E.push(S.sheenColorMapUv), E.push(S.sheenRoughnessMapUv), E.push(S.specularMapUv), E.push(S.specularColorMapUv), E.push(S.specularIntensityMapUv), E.push(S.transmissionMapUv), E.push(S.thicknessMapUv), E.push(S.combine), E.push(S.fogExp2), E.push(S.sizeAttenuation), E.push(S.morphTargetsCount), E.push(S.morphAttributeCount), E.push(S.numDirLights), E.push(S.numPointLights), E.push(S.numSpotLights), E.push(S.numSpotLightMaps), E.push(S.numHemiLights), E.push(S.numRectAreaLights), E.push(S.numDirLightShadows), E.push(S.numPointLightShadows), E.push(S.numSpotLightShadows), E.push(S.numSpotLightShadowsWithMaps), E.push(S.numLightProbes), E.push(S.shadowMapType), E.push(S.toneMapping), E.push(S.numClippingPlanes), E.push(S.numClipIntersection), E.push(S.depthPacking);
  }
  function T(E, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), S.gradientMap && o.enable(22), E.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reversedDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), E.push(o.mask);
  }
  function y(E) {
    const S = g[E.type];
    let P;
    if (S) {
      const H = Kt[S];
      P = Kc.clone(H.uniforms);
    } else P = E.uniforms;
    return P;
  }
  function R(E, S) {
    let P;
    for (let H = 0, G = d.length; H < G; H++) {
      const j = d[H];
      if (j.cacheKey === S) {
        P = j, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new xp(i3, S, E, s), d.push(P)), P;
  }
  function D(E) {
    if (--E.usedTimes === 0) {
      const S = d.indexOf(E);
      d[S] = d[d.length - 1], d.pop(), E.destroy();
    }
  }
  function C(E) {
    l.remove(E);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: y, acquireProgram: R, releaseProgram: D, releaseShaderCache: C, programs: d, dispose: N };
}
function bp() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i3.has(a);
  }
  function t(a) {
    let o = i3.get(a);
    return o === void 0 && (o = {}, i3.set(a, o)), o;
  }
  function n(a) {
    i3.delete(a);
  }
  function r(a, o, l) {
    i3.get(a)[o] = l;
  }
  function s() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function Tp(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.material.id !== e.material.id ? i3.material.id - e.material.id : i3.z !== e.z ? i3.z - e.z : i3.id - e.id;
}
function Ao(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.z !== e.z ? e.z - i3.z : i3.id - e.id;
}
function wo() {
  const i3 = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u, f, m, g, x, p) {
    let h = i3[e];
    return h === void 0 ? (h = { id: u.id, object: u, geometry: f, material: m, groupOrder: g, renderOrder: u.renderOrder, z: x, group: p }, i3[e] = h) : (h.id = u.id, h.object = u, h.geometry = f, h.material = m, h.groupOrder = g, h.renderOrder = u.renderOrder, h.z = x, h.group = p), e++, h;
  }
  function o(u, f, m, g, x, p) {
    const h = a(u, f, m, g, x, p);
    m.transmission > 0 ? n.push(h) : m.transparent === true ? r.push(h) : t.push(h);
  }
  function l(u, f, m, g, x, p) {
    const h = a(u, f, m, g, x, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === true ? r.unshift(h) : t.unshift(h);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || Tp), n.length > 1 && n.sort(f || Ao), r.length > 1 && r.sort(f || Ao);
  }
  function d() {
    for (let u = e, f = i3.length; u < f; u++) {
      const m = i3[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: r, init: s, push: o, unshift: l, finish: d, sort: c };
}
function Ap() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i3.get(n);
    let a;
    return s === void 0 ? (a = new wo(), i3.set(n, [a])) : r >= s.length ? (a = new wo(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function wp() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new F(), color: new je() };
        break;
      case "SpotLight":
        t = { position: new F(), direction: new F(), color: new je(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new F(), color: new je(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new F(), skyColor: new je(), groundColor: new je() };
        break;
      case "RectAreaLight":
        t = { color: new je(), position: new F(), halfWidth: new F(), halfHeight: new F() };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
function Rp() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
let Cp = 0;
function Pp(i3, e) {
  return (e.castShadow ? 2 : 0) - (i3.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i3.map ? 1 : 0);
}
function Dp(i3) {
  const e = new wp(), t = Rp(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new F());
  const r = new F(), s = new dt(), a = new dt();
  function o(c) {
    let d = 0, u = 0, f = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let m = 0, g = 0, x = 0, p = 0, h = 0, A = 0, T = 0, y = 0, R = 0, D = 0, C = 0;
    c.sort(Pp);
    for (let E = 0, S = c.length; E < S; E++) {
      const P = c[E], H = P.color, G = P.intensity, j = P.distance, X = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) d += H.r * G, u += H.g * G, f += H.b * G;
      else if (P.isLightProbe) {
        for (let K = 0; K < 9; K++) n.probe[K].addScaledVector(P.sh.coefficients[K], G);
        C++;
      } else if (P.isDirectionalLight) {
        const K = e.get(P);
        if (K.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = X, n.directionalShadowMatrix[m] = P.shadow.matrix, A++;
        }
        n.directional[m] = K, m++;
      } else if (P.isSpotLight) {
        const K = e.get(P);
        K.position.setFromMatrixPosition(P.matrixWorld), K.color.copy(H).multiplyScalar(G), K.distance = j, K.coneCos = Math.cos(P.angle), K.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), K.decay = P.decay, n.spot[x] = K;
        const J = P.shadow;
        if (P.map && (n.spotLightMap[R] = P.map, R++, J.updateMatrices(P), P.castShadow && D++), n.spotLightMatrix[x] = J.matrix, P.castShadow) {
          const k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.spotShadow[x] = k, n.spotShadowMap[x] = X, y++;
        }
        x++;
      } else if (P.isRectAreaLight) {
        const K = e.get(P);
        K.color.copy(H).multiplyScalar(G), K.halfWidth.set(P.width * 0.5, 0, 0), K.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[p] = K, p++;
      } else if (P.isPointLight) {
        const K = e.get(P);
        if (K.color.copy(P.color).multiplyScalar(P.intensity), K.distance = P.distance, K.decay = P.decay, P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, k.shadowCameraNear = J.camera.near, k.shadowCameraFar = J.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = X, n.pointShadowMatrix[g] = P.shadow.matrix, T++;
        }
        n.point[g] = K, g++;
      } else if (P.isHemisphereLight) {
        const K = e.get(P);
        K.skyColor.copy(P.color).multiplyScalar(G), K.groundColor.copy(P.groundColor).multiplyScalar(G), n.hemi[h] = K, h++;
      }
    }
    p > 0 && (i3.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = d, n.ambient[1] = u, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== m || N.pointLength !== g || N.spotLength !== x || N.rectAreaLength !== p || N.hemiLength !== h || N.numDirectionalShadows !== A || N.numPointShadows !== T || N.numSpotShadows !== y || N.numSpotMaps !== R || N.numLightProbes !== C) && (n.directional.length = m, n.spot.length = x, n.rectArea.length = p, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + R - D, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = D, n.numLightProbes = C, N.directionalLength = m, N.pointLength = g, N.spotLength = x, N.rectAreaLength = p, N.hemiLength = h, N.numDirectionalShadows = A, N.numPointShadows = T, N.numSpotShadows = y, N.numSpotMaps = R, N.numLightProbes = C, n.version = Cp++);
  }
  function l(c, d) {
    let u = 0, f = 0, m = 0, g = 0, x = 0;
    const p = d.matrixWorldInverse;
    for (let h = 0, A = c.length; h < A; h++) {
      const T = c[h];
      if (T.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), u++;
      } else if (T.isSpotLight) {
        const y = n.spot[m];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), m++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(p), a.identity(), s.copy(T.matrixWorld), s.premultiply(p), a.extractRotation(s), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(p), f++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[x];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(p), x++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function Ro(i3) {
  const e = new Dp(i3), t = [], n = [];
  function r(d) {
    c.camera = d, t.length = 0, n.length = 0;
  }
  function s(d) {
    t.push(d);
  }
  function a(d) {
    n.push(d);
  }
  function o() {
    e.setup(t);
  }
  function l(d) {
    e.setupView(t, d);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: r, state: c, setupLights: o, setupLightsView: l, pushLight: s, pushShadow: a };
}
function Lp(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Ro(i3), e.set(r, [o])) : s >= a.length ? (o = new Ro(i3), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Up = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ip = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Np(i3, e, t) {
  let n = new dl();
  const r = new Be(), s = new Be(), a = new ct(), o = new su({ depthPacking: gc }), l = new au(), c = {}, d = t.maxTextureSize, u = { [Mn]: At, [At]: Mn, [on]: on }, f = new yn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Be() }, radius: { value: 4 } }, vertexShader: Up, fragmentShader: Ip }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Xn();
  g.setAttribute("position", new Jt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const x = new Zt(g, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Vo;
  let h = this.type;
  this.render = function(D, C, N) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || D.length === 0) return;
    const E = i3.getRenderTarget(), S = i3.getActiveCubeFace(), P = i3.getActiveMipmapLevel(), H = i3.state;
    H.setBlending(Sn), H.buffers.depth.getReversed() === true ? H.buffers.color.setClear(0, 0, 0, 0) : H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(true), H.setScissorTest(false);
    const G = h !== an && this.type === an, j = h === an && this.type !== an;
    for (let X = 0, K = D.length; X < K; X++) {
      const J = D[X], k = J.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === false && k.needsUpdate === false) continue;
      r.copy(k.mapSize);
      const oe = k.getFrameExtents();
      if (r.multiply(oe), s.copy(k.mapSize), (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / oe.x), r.x = s.x * oe.x, k.mapSize.x = s.x), r.y > d && (s.y = Math.floor(d / oe.y), r.y = s.y * oe.y, k.mapSize.y = s.y)), k.map === null || G === true || j === true) {
        const be = this.type !== an ? { minFilter: Gt, magFilter: Gt } : {};
        k.map !== null && k.map.dispose(), k.map = new Gn(r.x, r.y, be), k.map.texture.name = J.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i3.setRenderTarget(k.map), i3.clear();
      const he = k.getViewportCount();
      for (let be = 0; be < he; be++) {
        const ze = k.getViewport(be);
        a.set(s.x * ze.x, s.y * ze.y, s.x * ze.z, s.y * ze.w), H.viewport(a), k.updateMatrices(J, be), n = k.getFrustum(), y(C, N, k.camera, J, this.type);
      }
      k.isPointLightShadow !== true && this.type === an && A(k, N), k.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i3.setRenderTarget(E, S, P);
  };
  function A(D, C) {
    const N = e.update(x);
    f.defines.VSM_SAMPLES !== D.blurSamples && (f.defines.VSM_SAMPLES = D.blurSamples, m.defines.VSM_SAMPLES = D.blurSamples, f.needsUpdate = true, m.needsUpdate = true), D.mapPass === null && (D.mapPass = new Gn(r.x, r.y)), f.uniforms.shadow_pass.value = D.map.texture, f.uniforms.resolution.value = D.mapSize, f.uniforms.radius.value = D.radius, i3.setRenderTarget(D.mapPass), i3.clear(), i3.renderBufferDirect(C, null, N, f, x, null), m.uniforms.shadow_pass.value = D.mapPass.texture, m.uniforms.resolution.value = D.mapSize, m.uniforms.radius.value = D.radius, i3.setRenderTarget(D.map), i3.clear(), i3.renderBufferDirect(C, null, N, m, x, null);
  }
  function T(D, C, N, E) {
    let S = null;
    const P = N.isPointLight === true ? D.customDistanceMaterial : D.customDepthMaterial;
    if (P !== void 0) S = P;
    else if (S = N.isPointLight === true ? l : o, i3.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === true) {
      const H = S.uuid, G = C.uuid;
      let j = c[H];
      j === void 0 && (j = {}, c[H] = j);
      let X = j[G];
      X === void 0 && (X = S.clone(), j[G] = X, C.addEventListener("dispose", R)), S = X;
    }
    if (S.visible = C.visible, S.wireframe = C.wireframe, E === an ? S.side = C.shadowSide !== null ? C.shadowSide : C.side : S.side = C.shadowSide !== null ? C.shadowSide : u[C.side], S.alphaMap = C.alphaMap, S.alphaTest = C.alphaToCoverage === true ? 0.5 : C.alphaTest, S.map = C.map, S.clipShadows = C.clipShadows, S.clippingPlanes = C.clippingPlanes, S.clipIntersection = C.clipIntersection, S.displacementMap = C.displacementMap, S.displacementScale = C.displacementScale, S.displacementBias = C.displacementBias, S.wireframeLinewidth = C.wireframeLinewidth, S.linewidth = C.linewidth, N.isPointLight === true && S.isMeshDistanceMaterial === true) {
      const H = i3.properties.get(S);
      H.light = N;
    }
    return S;
  }
  function y(D, C, N, E, S) {
    if (D.visible === false) return;
    if (D.layers.test(C.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && S === an) && (!D.frustumCulled || n.intersectsObject(D))) {
      D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, D.matrixWorld);
      const G = e.update(D), j = D.material;
      if (Array.isArray(j)) {
        const X = G.groups;
        for (let K = 0, J = X.length; K < J; K++) {
          const k = X[K], oe = j[k.materialIndex];
          if (oe && oe.visible) {
            const he = T(D, oe, E, S);
            D.onBeforeShadow(i3, D, C, N, G, he, k), i3.renderBufferDirect(N, null, G, he, D, k), D.onAfterShadow(i3, D, C, N, G, he, k);
          }
        }
      } else if (j.visible) {
        const X = T(D, j, E, S);
        D.onBeforeShadow(i3, D, C, N, G, X, null), i3.renderBufferDirect(N, null, G, X, D, null), D.onAfterShadow(i3, D, C, N, G, X, null);
      }
    }
    const H = D.children;
    for (let G = 0, j = H.length; G < j; G++) y(H[G], C, N, E, S);
  }
  function R(D) {
    D.target.removeEventListener("dispose", R);
    for (const N in c) {
      const E = c[N], S = D.target.uuid;
      S in E && (E[S].dispose(), delete E[S]);
    }
  }
}
const Fp = { [xs]: Ss, [Es]: bs, [Ms]: Ts, [_i]: ys, [Ss]: xs, [bs]: Es, [Ts]: Ms, [ys]: _i };
function Op(i3, e) {
  function t() {
    let w = false;
    const ie = new ct();
    let se = null;
    const fe = new ct(0, 0, 0, 0);
    return { setMask: function(ee) {
      se !== ee && !w && (i3.colorMask(ee, ee, ee, ee), se = ee);
    }, setLocked: function(ee) {
      w = ee;
    }, setClear: function(ee, $, _e, Le, Qe) {
      Qe === true && (ee *= Le, $ *= Le, _e *= Le), ie.set(ee, $, _e, Le), fe.equals(ie) === false && (i3.clearColor(ee, $, _e, Le), fe.copy(ie));
    }, reset: function() {
      w = false, se = null, fe.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let w = false, ie = false, se = null, fe = null, ee = null;
    return { setReversed: function($) {
      if (ie !== $) {
        const _e = e.get("EXT_clip_control");
        $ ? _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.ZERO_TO_ONE_EXT) : _e.clipControlEXT(_e.LOWER_LEFT_EXT, _e.NEGATIVE_ONE_TO_ONE_EXT), ie = $;
        const Le = ee;
        ee = null, this.setClear(Le);
      }
    }, getReversed: function() {
      return ie;
    }, setTest: function($) {
      $ ? Q(i3.DEPTH_TEST) : pe(i3.DEPTH_TEST);
    }, setMask: function($) {
      se !== $ && !w && (i3.depthMask($), se = $);
    }, setFunc: function($) {
      if (ie && ($ = Fp[$]), fe !== $) {
        switch ($) {
          case xs:
            i3.depthFunc(i3.NEVER);
            break;
          case Ss:
            i3.depthFunc(i3.ALWAYS);
            break;
          case Es:
            i3.depthFunc(i3.LESS);
            break;
          case _i:
            i3.depthFunc(i3.LEQUAL);
            break;
          case Ms:
            i3.depthFunc(i3.EQUAL);
            break;
          case ys:
            i3.depthFunc(i3.GEQUAL);
            break;
          case bs:
            i3.depthFunc(i3.GREATER);
            break;
          case Ts:
            i3.depthFunc(i3.NOTEQUAL);
            break;
          default:
            i3.depthFunc(i3.LEQUAL);
        }
        fe = $;
      }
    }, setLocked: function($) {
      w = $;
    }, setClear: function($) {
      ee !== $ && (ie && ($ = 1 - $), i3.clearDepth($), ee = $);
    }, reset: function() {
      w = false, se = null, fe = null, ee = null, ie = false;
    } };
  }
  function r() {
    let w = false, ie = null, se = null, fe = null, ee = null, $ = null, _e = null, Le = null, Qe = null;
    return { setTest: function(Ye) {
      w || (Ye ? Q(i3.STENCIL_TEST) : pe(i3.STENCIL_TEST));
    }, setMask: function(Ye) {
      ie !== Ye && !w && (i3.stencilMask(Ye), ie = Ye);
    }, setFunc: function(Ye, Qt, Yt) {
      (se !== Ye || fe !== Qt || ee !== Yt) && (i3.stencilFunc(Ye, Qt, Yt), se = Ye, fe = Qt, ee = Yt);
    }, setOp: function(Ye, Qt, Yt) {
      ($ !== Ye || _e !== Qt || Le !== Yt) && (i3.stencilOp(Ye, Qt, Yt), $ = Ye, _e = Qt, Le = Yt);
    }, setLocked: function(Ye) {
      w = Ye;
    }, setClear: function(Ye) {
      Qe !== Ye && (i3.clearStencil(Ye), Qe = Ye);
    }, reset: function() {
      w = false, ie = null, se = null, fe = null, ee = null, $ = null, _e = null, Le = null, Qe = null;
    } };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let d = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, x = false, p = null, h = null, A = null, T = null, y = null, R = null, D = null, C = new je(0, 0, 0), N = 0, E = false, S = null, P = null, H = null, G = null, j = null;
  const X = i3.getParameter(i3.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = false, J = 0;
  const k = i3.getParameter(i3.VERSION);
  k.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(k)[1]), K = J >= 1) : k.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), K = J >= 2);
  let oe = null, he = {};
  const be = i3.getParameter(i3.SCISSOR_BOX), ze = i3.getParameter(i3.VIEWPORT), Je = new ct().fromArray(be), nt = new ct().fromArray(ze);
  function Xe(w, ie, se, fe) {
    const ee = new Uint8Array(4), $ = i3.createTexture();
    i3.bindTexture(w, $), i3.texParameteri(w, i3.TEXTURE_MIN_FILTER, i3.NEAREST), i3.texParameteri(w, i3.TEXTURE_MAG_FILTER, i3.NEAREST);
    for (let _e = 0; _e < se; _e++) w === i3.TEXTURE_3D || w === i3.TEXTURE_2D_ARRAY ? i3.texImage3D(ie, 0, i3.RGBA, 1, 1, fe, 0, i3.RGBA, i3.UNSIGNED_BYTE, ee) : i3.texImage2D(ie + _e, 0, i3.RGBA, 1, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, ee);
    return $;
  }
  const Y = {};
  Y[i3.TEXTURE_2D] = Xe(i3.TEXTURE_2D, i3.TEXTURE_2D, 1), Y[i3.TEXTURE_CUBE_MAP] = Xe(i3.TEXTURE_CUBE_MAP, i3.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i3.TEXTURE_2D_ARRAY] = Xe(i3.TEXTURE_2D_ARRAY, i3.TEXTURE_2D_ARRAY, 1, 1), Y[i3.TEXTURE_3D] = Xe(i3.TEXTURE_3D, i3.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), Q(i3.DEPTH_TEST), a.setFunc(_i), Ce(false), ge(La), Q(i3.CULL_FACE), it(Sn);
  function Q(w) {
    d[w] !== true && (i3.enable(w), d[w] = true);
  }
  function pe(w) {
    d[w] !== false && (i3.disable(w), d[w] = false);
  }
  function De(w, ie) {
    return u[w] !== ie ? (i3.bindFramebuffer(w, ie), u[w] = ie, w === i3.DRAW_FRAMEBUFFER && (u[i3.FRAMEBUFFER] = ie), w === i3.FRAMEBUFFER && (u[i3.DRAW_FRAMEBUFFER] = ie), true) : false;
  }
  function ye(w, ie) {
    let se = m, fe = false;
    if (w) {
      se = f.get(ie), se === void 0 && (se = [], f.set(ie, se));
      const ee = w.textures;
      if (se.length !== ee.length || se[0] !== i3.COLOR_ATTACHMENT0) {
        for (let $ = 0, _e = ee.length; $ < _e; $++) se[$] = i3.COLOR_ATTACHMENT0 + $;
        se.length = ee.length, fe = true;
      }
    } else se[0] !== i3.BACK && (se[0] = i3.BACK, fe = true);
    fe && i3.drawBuffers(se);
  }
  function Ve(w) {
    return g !== w ? (i3.useProgram(w), g = w, true) : false;
  }
  const vt = { [Fn]: i3.FUNC_ADD, [Gl]: i3.FUNC_SUBTRACT, [Wl]: i3.FUNC_REVERSE_SUBTRACT };
  vt[Xl] = i3.MIN, vt[Yl] = i3.MAX;
  const b = { [ql]: i3.ZERO, [Kl]: i3.ONE, [$l]: i3.SRC_COLOR, [gs]: i3.SRC_ALPHA, [tc]: i3.SRC_ALPHA_SATURATE, [Ql]: i3.DST_COLOR, [Zl]: i3.DST_ALPHA, [jl]: i3.ONE_MINUS_SRC_COLOR, [vs]: i3.ONE_MINUS_SRC_ALPHA, [ec]: i3.ONE_MINUS_DST_COLOR, [Jl]: i3.ONE_MINUS_DST_ALPHA, [nc]: i3.CONSTANT_COLOR, [ic]: i3.ONE_MINUS_CONSTANT_COLOR, [rc]: i3.CONSTANT_ALPHA, [sc]: i3.ONE_MINUS_CONSTANT_ALPHA };
  function it(w, ie, se, fe, ee, $, _e, Le, Qe, Ye) {
    if (w === Sn) {
      x === true && (pe(i3.BLEND), x = false);
      return;
    }
    if (x === false && (Q(i3.BLEND), x = true), w !== Vl) {
      if (w !== p || Ye !== E) {
        if ((h !== Fn || y !== Fn) && (i3.blendEquation(i3.FUNC_ADD), h = Fn, y = Fn), Ye) switch (w) {
          case pi:
            i3.blendFuncSeparate(i3.ONE, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case Ua:
            i3.blendFunc(i3.ONE, i3.ONE);
            break;
          case Ia:
            i3.blendFuncSeparate(i3.ZERO, i3.ONE_MINUS_SRC_COLOR, i3.ZERO, i3.ONE);
            break;
          case Na:
            i3.blendFuncSeparate(i3.DST_COLOR, i3.ONE_MINUS_SRC_ALPHA, i3.ZERO, i3.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", w);
            break;
        }
        else switch (w) {
          case pi:
            i3.blendFuncSeparate(i3.SRC_ALPHA, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case Ua:
            i3.blendFuncSeparate(i3.SRC_ALPHA, i3.ONE, i3.ONE, i3.ONE);
            break;
          case Ia:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case Na:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", w);
            break;
        }
        A = null, T = null, R = null, D = null, C.set(0, 0, 0), N = 0, p = w, E = Ye;
      }
      return;
    }
    ee = ee || ie, $ = $ || se, _e = _e || fe, (ie !== h || ee !== y) && (i3.blendEquationSeparate(vt[ie], vt[ee]), h = ie, y = ee), (se !== A || fe !== T || $ !== R || _e !== D) && (i3.blendFuncSeparate(b[se], b[fe], b[$], b[_e]), A = se, T = fe, R = $, D = _e), (Le.equals(C) === false || Qe !== N) && (i3.blendColor(Le.r, Le.g, Le.b, Qe), C.copy(Le), N = Qe), p = w, E = false;
  }
  function Ue(w, ie) {
    w.side === on ? pe(i3.CULL_FACE) : Q(i3.CULL_FACE);
    let se = w.side === At;
    ie && (se = !se), Ce(se), w.blending === pi && w.transparent === false ? it(Sn) : it(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), a.setFunc(w.depthFunc), a.setTest(w.depthTest), a.setMask(w.depthWrite), s.setMask(w.colorWrite);
    const fe = w.stencilWrite;
    o.setTest(fe), fe && (o.setMask(w.stencilWriteMask), o.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), o.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), ve(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === true ? Q(i3.SAMPLE_ALPHA_TO_COVERAGE) : pe(i3.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ce(w) {
    S !== w && (w ? i3.frontFace(i3.CW) : i3.frontFace(i3.CCW), S = w);
  }
  function ge(w) {
    w !== zl ? (Q(i3.CULL_FACE), w !== P && (w === La ? i3.cullFace(i3.BACK) : w === Hl ? i3.cullFace(i3.FRONT) : i3.cullFace(i3.FRONT_AND_BACK))) : pe(i3.CULL_FACE), P = w;
  }
  function rt(w) {
    w !== H && (K && i3.lineWidth(w), H = w);
  }
  function ve(w, ie, se) {
    w ? (Q(i3.POLYGON_OFFSET_FILL), (G !== ie || j !== se) && (i3.polygonOffset(ie, se), G = ie, j = se)) : pe(i3.POLYGON_OFFSET_FILL);
  }
  function Fe(w) {
    w ? Q(i3.SCISSOR_TEST) : pe(i3.SCISSOR_TEST);
  }
  function mt(w) {
    w === void 0 && (w = i3.TEXTURE0 + X - 1), oe !== w && (i3.activeTexture(w), oe = w);
  }
  function lt(w, ie, se) {
    se === void 0 && (oe === null ? se = i3.TEXTURE0 + X - 1 : se = oe);
    let fe = he[se];
    fe === void 0 && (fe = { type: void 0, texture: void 0 }, he[se] = fe), (fe.type !== w || fe.texture !== ie) && (oe !== se && (i3.activeTexture(se), oe = se), i3.bindTexture(w, ie || Y[w]), fe.type = w, fe.texture = ie);
  }
  function M() {
    const w = he[oe];
    w !== void 0 && w.type !== void 0 && (i3.bindTexture(w.type, null), w.type = void 0, w.texture = void 0);
  }
  function _() {
    try {
      i3.compressedTexImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function I() {
    try {
      i3.compressedTexImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function W() {
    try {
      i3.texSubImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Z() {
    try {
      i3.texSubImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function V() {
    try {
      i3.compressedTexSubImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Me() {
    try {
      i3.compressedTexSubImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function re() {
    try {
      i3.texStorage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function xe() {
    try {
      i3.texStorage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Se() {
    try {
      i3.texImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ne() {
    try {
      i3.texImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ue(w) {
    Je.equals(w) === false && (i3.scissor(w.x, w.y, w.z, w.w), Je.copy(w));
  }
  function Re(w) {
    nt.equals(w) === false && (i3.viewport(w.x, w.y, w.z, w.w), nt.copy(w));
  }
  function Ee(w, ie) {
    let se = c.get(ie);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), c.set(ie, se));
    let fe = se.get(w);
    fe === void 0 && (fe = i3.getUniformBlockIndex(ie, w.name), se.set(w, fe));
  }
  function le(w, ie) {
    const fe = c.get(ie).get(w);
    l.get(ie) !== fe && (i3.uniformBlockBinding(ie, fe, w.__bindingPointIndex), l.set(ie, fe));
  }
  function Ie() {
    i3.disable(i3.BLEND), i3.disable(i3.CULL_FACE), i3.disable(i3.DEPTH_TEST), i3.disable(i3.POLYGON_OFFSET_FILL), i3.disable(i3.SCISSOR_TEST), i3.disable(i3.STENCIL_TEST), i3.disable(i3.SAMPLE_ALPHA_TO_COVERAGE), i3.blendEquation(i3.FUNC_ADD), i3.blendFunc(i3.ONE, i3.ZERO), i3.blendFuncSeparate(i3.ONE, i3.ZERO, i3.ONE, i3.ZERO), i3.blendColor(0, 0, 0, 0), i3.colorMask(true, true, true, true), i3.clearColor(0, 0, 0, 0), i3.depthMask(true), i3.depthFunc(i3.LESS), a.setReversed(false), i3.clearDepth(1), i3.stencilMask(4294967295), i3.stencilFunc(i3.ALWAYS, 0, 4294967295), i3.stencilOp(i3.KEEP, i3.KEEP, i3.KEEP), i3.clearStencil(0), i3.cullFace(i3.BACK), i3.frontFace(i3.CCW), i3.polygonOffset(0, 0), i3.activeTexture(i3.TEXTURE0), i3.bindFramebuffer(i3.FRAMEBUFFER, null), i3.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), i3.bindFramebuffer(i3.READ_FRAMEBUFFER, null), i3.useProgram(null), i3.lineWidth(1), i3.scissor(0, 0, i3.canvas.width, i3.canvas.height), i3.viewport(0, 0, i3.canvas.width, i3.canvas.height), d = {}, oe = null, he = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, x = false, p = null, h = null, A = null, T = null, y = null, R = null, D = null, C = new je(0, 0, 0), N = 0, E = false, S = null, P = null, H = null, G = null, j = null, Je.set(0, 0, i3.canvas.width, i3.canvas.height), nt.set(0, 0, i3.canvas.width, i3.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: Q, disable: pe, bindFramebuffer: De, drawBuffers: ye, useProgram: Ve, setBlending: it, setMaterial: Ue, setFlipSided: Ce, setCullFace: ge, setLineWidth: rt, setPolygonOffset: ve, setScissorTest: Fe, activeTexture: mt, bindTexture: lt, unbindTexture: M, compressedTexImage2D: _, compressedTexImage3D: I, texImage2D: Se, texImage3D: ne, updateUBOMapping: Ee, uniformBlockBinding: le, texStorage2D: re, texStorage3D: xe, texSubImage2D: W, texSubImage3D: Z, compressedTexSubImage2D: V, compressedTexSubImage3D: Me, scissor: ue, viewport: Re, reset: Ie };
}
function Bp(i3, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Be(), d = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(M, _) {
    return m ? new OffscreenCanvas(M, _) : Cr("canvas");
  }
  function x(M, _, I) {
    let W = 1;
    const Z = lt(M);
    if ((Z.width > I || Z.height > I) && (W = I / Math.max(Z.width, Z.height)), W < 1) if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap || typeof VideoFrame < "u" && M instanceof VideoFrame) {
      const V = Math.floor(W * Z.width), Me = Math.floor(W * Z.height);
      u === void 0 && (u = g(V, Me));
      const re = _ ? g(V, Me) : u;
      return re.width = V, re.height = Me, re.getContext("2d").drawImage(M, 0, 0, V, Me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + V + "x" + Me + ")."), re;
    } else return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), M;
    return M;
  }
  function p(M) {
    return M.generateMipmaps;
  }
  function h(M) {
    i3.generateMipmap(M);
  }
  function A(M) {
    return M.isWebGLCubeRenderTarget ? i3.TEXTURE_CUBE_MAP : M.isWebGL3DRenderTarget ? i3.TEXTURE_3D : M.isWebGLArrayRenderTarget || M.isCompressedArrayTexture ? i3.TEXTURE_2D_ARRAY : i3.TEXTURE_2D;
  }
  function T(M, _, I, W, Z = false) {
    if (M !== null) {
      if (i3[M] !== void 0) return i3[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let V = _;
    if (_ === i3.RED && (I === i3.FLOAT && (V = i3.R32F), I === i3.HALF_FLOAT && (V = i3.R16F), I === i3.UNSIGNED_BYTE && (V = i3.R8)), _ === i3.RED_INTEGER && (I === i3.UNSIGNED_BYTE && (V = i3.R8UI), I === i3.UNSIGNED_SHORT && (V = i3.R16UI), I === i3.UNSIGNED_INT && (V = i3.R32UI), I === i3.BYTE && (V = i3.R8I), I === i3.SHORT && (V = i3.R16I), I === i3.INT && (V = i3.R32I)), _ === i3.RG && (I === i3.FLOAT && (V = i3.RG32F), I === i3.HALF_FLOAT && (V = i3.RG16F), I === i3.UNSIGNED_BYTE && (V = i3.RG8)), _ === i3.RG_INTEGER && (I === i3.UNSIGNED_BYTE && (V = i3.RG8UI), I === i3.UNSIGNED_SHORT && (V = i3.RG16UI), I === i3.UNSIGNED_INT && (V = i3.RG32UI), I === i3.BYTE && (V = i3.RG8I), I === i3.SHORT && (V = i3.RG16I), I === i3.INT && (V = i3.RG32I)), _ === i3.RGB_INTEGER && (I === i3.UNSIGNED_BYTE && (V = i3.RGB8UI), I === i3.UNSIGNED_SHORT && (V = i3.RGB16UI), I === i3.UNSIGNED_INT && (V = i3.RGB32UI), I === i3.BYTE && (V = i3.RGB8I), I === i3.SHORT && (V = i3.RGB16I), I === i3.INT && (V = i3.RGB32I)), _ === i3.RGBA_INTEGER && (I === i3.UNSIGNED_BYTE && (V = i3.RGBA8UI), I === i3.UNSIGNED_SHORT && (V = i3.RGBA16UI), I === i3.UNSIGNED_INT && (V = i3.RGBA32UI), I === i3.BYTE && (V = i3.RGBA8I), I === i3.SHORT && (V = i3.RGBA16I), I === i3.INT && (V = i3.RGBA32I)), _ === i3.RGB && (I === i3.UNSIGNED_INT_5_9_9_9_REV && (V = i3.RGB9_E5), I === i3.UNSIGNED_INT_10F_11F_11F_REV && (V = i3.R11F_G11F_B10F)), _ === i3.RGBA) {
      const Me = Z ? wr : We.getTransfer(W);
      I === i3.FLOAT && (V = i3.RGBA32F), I === i3.HALF_FLOAT && (V = i3.RGBA16F), I === i3.UNSIGNED_BYTE && (V = Me === Ke ? i3.SRGB8_ALPHA8 : i3.RGBA8), I === i3.UNSIGNED_SHORT_4_4_4_4 && (V = i3.RGBA4), I === i3.UNSIGNED_SHORT_5_5_5_1 && (V = i3.RGB5_A1);
    }
    return (V === i3.R16F || V === i3.R32F || V === i3.RG16F || V === i3.RG32F || V === i3.RGBA16F || V === i3.RGBA32F) && e.get("EXT_color_buffer_float"), V;
  }
  function y(M, _) {
    let I;
    return M ? _ === null || _ === kn || _ === Bi ? I = i3.DEPTH24_STENCIL8 : _ === ln ? I = i3.DEPTH32F_STENCIL8 : _ === Oi && (I = i3.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === kn || _ === Bi ? I = i3.DEPTH_COMPONENT24 : _ === ln ? I = i3.DEPTH_COMPONENT32F : _ === Oi && (I = i3.DEPTH_COMPONENT16), I;
  }
  function R(M, _) {
    return p(M) === true || M.isFramebufferTexture && M.minFilter !== Gt && M.minFilter !== $t ? Math.log2(Math.max(_.width, _.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? _.mipmaps.length : 1;
  }
  function D(M) {
    const _ = M.target;
    _.removeEventListener("dispose", D), N(_), _.isVideoTexture && d.delete(_);
  }
  function C(M) {
    const _ = M.target;
    _.removeEventListener("dispose", C), S(_);
  }
  function N(M) {
    const _ = n.get(M);
    if (_.__webglInit === void 0) return;
    const I = M.source, W = f.get(I);
    if (W) {
      const Z = W[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && E(M), Object.keys(W).length === 0 && f.delete(I);
    }
    n.remove(M);
  }
  function E(M) {
    const _ = n.get(M);
    i3.deleteTexture(_.__webglTexture);
    const I = M.source, W = f.get(I);
    delete W[_.__cacheKey], a.memory.textures--;
  }
  function S(M) {
    const _ = n.get(M);
    if (M.depthTexture && (M.depthTexture.dispose(), n.remove(M.depthTexture)), M.isWebGLCubeRenderTarget) for (let W = 0; W < 6; W++) {
      if (Array.isArray(_.__webglFramebuffer[W])) for (let Z = 0; Z < _.__webglFramebuffer[W].length; Z++) i3.deleteFramebuffer(_.__webglFramebuffer[W][Z]);
      else i3.deleteFramebuffer(_.__webglFramebuffer[W]);
      _.__webglDepthbuffer && i3.deleteRenderbuffer(_.__webglDepthbuffer[W]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let W = 0; W < _.__webglFramebuffer.length; W++) i3.deleteFramebuffer(_.__webglFramebuffer[W]);
      else i3.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i3.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i3.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let W = 0; W < _.__webglColorRenderbuffer.length; W++) _.__webglColorRenderbuffer[W] && i3.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);
      _.__webglDepthRenderbuffer && i3.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const I = M.textures;
    for (let W = 0, Z = I.length; W < Z; W++) {
      const V = n.get(I[W]);
      V.__webglTexture && (i3.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(I[W]);
    }
    n.remove(M);
  }
  let P = 0;
  function H() {
    P = 0;
  }
  function G() {
    const M = P;
    return M >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + r.maxTextures), P += 1, M;
  }
  function j(M) {
    const _ = [];
    return _.push(M.wrapS), _.push(M.wrapT), _.push(M.wrapR || 0), _.push(M.magFilter), _.push(M.minFilter), _.push(M.anisotropy), _.push(M.internalFormat), _.push(M.format), _.push(M.type), _.push(M.generateMipmaps), _.push(M.premultiplyAlpha), _.push(M.flipY), _.push(M.unpackAlignment), _.push(M.colorSpace), _.join();
  }
  function X(M, _) {
    const I = n.get(M);
    if (M.isVideoTexture && Fe(M), M.isRenderTargetTexture === false && M.isExternalTexture !== true && M.version > 0 && I.__version !== M.version) {
      const W = M.image;
      if (W === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (W.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(I, M, _);
        return;
      }
    } else M.isExternalTexture && (I.__webglTexture = M.sourceTexture ? M.sourceTexture : null);
    t.bindTexture(i3.TEXTURE_2D, I.__webglTexture, i3.TEXTURE0 + _);
  }
  function K(M, _) {
    const I = n.get(M);
    if (M.isRenderTargetTexture === false && M.version > 0 && I.__version !== M.version) {
      Y(I, M, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_2D_ARRAY, I.__webglTexture, i3.TEXTURE0 + _);
  }
  function J(M, _) {
    const I = n.get(M);
    if (M.isRenderTargetTexture === false && M.version > 0 && I.__version !== M.version) {
      Y(I, M, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_3D, I.__webglTexture, i3.TEXTURE0 + _);
  }
  function k(M, _) {
    const I = n.get(M);
    if (M.version > 0 && I.__version !== M.version) {
      Q(I, M, _);
      return;
    }
    t.bindTexture(i3.TEXTURE_CUBE_MAP, I.__webglTexture, i3.TEXTURE0 + _);
  }
  const oe = { [Rs]: i3.REPEAT, [Bn]: i3.CLAMP_TO_EDGE, [Cs]: i3.MIRRORED_REPEAT }, he = { [Gt]: i3.NEAREST, [mc]: i3.NEAREST_MIPMAP_NEAREST, [ji]: i3.NEAREST_MIPMAP_LINEAR, [$t]: i3.LINEAR, [zr]: i3.LINEAR_MIPMAP_NEAREST, [zn]: i3.LINEAR_MIPMAP_LINEAR }, be = { [xc]: i3.NEVER, [Tc]: i3.ALWAYS, [Sc]: i3.LESS, [el]: i3.LEQUAL, [Ec]: i3.EQUAL, [bc]: i3.GEQUAL, [Mc]: i3.GREATER, [yc]: i3.NOTEQUAL };
  function ze(M, _) {
    if (_.type === ln && e.has("OES_texture_float_linear") === false && (_.magFilter === $t || _.magFilter === zr || _.magFilter === ji || _.magFilter === zn || _.minFilter === $t || _.minFilter === zr || _.minFilter === ji || _.minFilter === zn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i3.texParameteri(M, i3.TEXTURE_WRAP_S, oe[_.wrapS]), i3.texParameteri(M, i3.TEXTURE_WRAP_T, oe[_.wrapT]), (M === i3.TEXTURE_3D || M === i3.TEXTURE_2D_ARRAY) && i3.texParameteri(M, i3.TEXTURE_WRAP_R, oe[_.wrapR]), i3.texParameteri(M, i3.TEXTURE_MAG_FILTER, he[_.magFilter]), i3.texParameteri(M, i3.TEXTURE_MIN_FILTER, he[_.minFilter]), _.compareFunction && (i3.texParameteri(M, i3.TEXTURE_COMPARE_MODE, i3.COMPARE_REF_TO_TEXTURE), i3.texParameteri(M, i3.TEXTURE_COMPARE_FUNC, be[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Gt || _.minFilter !== ji && _.minFilter !== zn || _.type === ln && e.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const I = e.get("EXT_texture_filter_anisotropic");
        i3.texParameterf(M, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Je(M, _) {
    let I = false;
    M.__webglInit === void 0 && (M.__webglInit = true, _.addEventListener("dispose", D));
    const W = _.source;
    let Z = f.get(W);
    Z === void 0 && (Z = {}, f.set(W, Z));
    const V = j(_);
    if (V !== M.__cacheKey) {
      Z[V] === void 0 && (Z[V] = { texture: i3.createTexture(), usedTimes: 0 }, a.memory.textures++, I = true), Z[V].usedTimes++;
      const Me = Z[M.__cacheKey];
      Me !== void 0 && (Z[M.__cacheKey].usedTimes--, Me.usedTimes === 0 && E(_)), M.__cacheKey = V, M.__webglTexture = Z[V].texture;
    }
    return I;
  }
  function nt(M, _, I) {
    return Math.floor(Math.floor(M / I) / _);
  }
  function Xe(M, _, I, W) {
    const V = M.updateRanges;
    if (V.length === 0) t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, _.width, _.height, I, W, _.data);
    else {
      V.sort((ne, ue) => ne.start - ue.start);
      let Me = 0;
      for (let ne = 1; ne < V.length; ne++) {
        const ue = V[Me], Re = V[ne], Ee = ue.start + ue.count, le = nt(Re.start, _.width, 4), Ie = nt(ue.start, _.width, 4);
        Re.start <= Ee + 1 && le === Ie && nt(Re.start + Re.count - 1, _.width, 4) === le ? ue.count = Math.max(ue.count, Re.start + Re.count - ue.start) : (++Me, V[Me] = Re);
      }
      V.length = Me + 1;
      const re = i3.getParameter(i3.UNPACK_ROW_LENGTH), xe = i3.getParameter(i3.UNPACK_SKIP_PIXELS), Se = i3.getParameter(i3.UNPACK_SKIP_ROWS);
      i3.pixelStorei(i3.UNPACK_ROW_LENGTH, _.width);
      for (let ne = 0, ue = V.length; ne < ue; ne++) {
        const Re = V[ne], Ee = Math.floor(Re.start / 4), le = Math.ceil(Re.count / 4), Ie = Ee % _.width, w = Math.floor(Ee / _.width), ie = le, se = 1;
        i3.pixelStorei(i3.UNPACK_SKIP_PIXELS, Ie), i3.pixelStorei(i3.UNPACK_SKIP_ROWS, w), t.texSubImage2D(i3.TEXTURE_2D, 0, Ie, w, ie, se, I, W, _.data);
      }
      M.clearUpdateRanges(), i3.pixelStorei(i3.UNPACK_ROW_LENGTH, re), i3.pixelStorei(i3.UNPACK_SKIP_PIXELS, xe), i3.pixelStorei(i3.UNPACK_SKIP_ROWS, Se);
    }
  }
  function Y(M, _, I) {
    let W = i3.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (W = i3.TEXTURE_2D_ARRAY), _.isData3DTexture && (W = i3.TEXTURE_3D);
    const Z = Je(M, _), V = _.source;
    t.bindTexture(W, M.__webglTexture, i3.TEXTURE0 + I);
    const Me = n.get(V);
    if (V.version !== Me.__version || Z === true) {
      t.activeTexture(i3.TEXTURE0 + I);
      const re = We.getPrimaries(We.workingColorSpace), xe = _.colorSpace === xn ? null : We.getPrimaries(_.colorSpace), Se = _.colorSpace === xn || re === xe ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, _.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, _.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, Se);
      let ne = x(_.image, false, r.maxTextureSize);
      ne = mt(_, ne);
      const ue = s.convert(_.format, _.colorSpace), Re = s.convert(_.type);
      let Ee = T(_.internalFormat, ue, Re, _.colorSpace, _.isVideoTexture);
      ze(W, _);
      let le;
      const Ie = _.mipmaps, w = _.isVideoTexture !== true, ie = Me.__version === void 0 || Z === true, se = V.dataReady, fe = R(_, ne);
      if (_.isDepthTexture) Ee = y(_.format === Hi, _.type), ie && (w ? t.texStorage2D(i3.TEXTURE_2D, 1, Ee, ne.width, ne.height) : t.texImage2D(i3.TEXTURE_2D, 0, Ee, ne.width, ne.height, 0, ue, Re, null));
      else if (_.isDataTexture) if (Ie.length > 0) {
        w && ie && t.texStorage2D(i3.TEXTURE_2D, fe, Ee, Ie[0].width, Ie[0].height);
        for (let ee = 0, $ = Ie.length; ee < $; ee++) le = Ie[ee], w ? se && t.texSubImage2D(i3.TEXTURE_2D, ee, 0, 0, le.width, le.height, ue, Re, le.data) : t.texImage2D(i3.TEXTURE_2D, ee, Ee, le.width, le.height, 0, ue, Re, le.data);
        _.generateMipmaps = false;
      } else w ? (ie && t.texStorage2D(i3.TEXTURE_2D, fe, Ee, ne.width, ne.height), se && Xe(_, ne, ue, Re)) : t.texImage2D(i3.TEXTURE_2D, 0, Ee, ne.width, ne.height, 0, ue, Re, ne.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        w && ie && t.texStorage3D(i3.TEXTURE_2D_ARRAY, fe, Ee, Ie[0].width, Ie[0].height, ne.depth);
        for (let ee = 0, $ = Ie.length; ee < $; ee++) if (le = Ie[ee], _.format !== Vt) if (ue !== null) if (w) {
          if (se) if (_.layerUpdates.size > 0) {
            const _e = io(le.width, le.height, _.format, _.type);
            for (const Le of _.layerUpdates) {
              const Qe = le.data.subarray(Le * _e / le.data.BYTES_PER_ELEMENT, (Le + 1) * _e / le.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, ee, 0, 0, Le, le.width, le.height, 1, ue, Qe);
            }
            _.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, ee, 0, 0, 0, le.width, le.height, ne.depth, ue, le.data);
        } else t.compressedTexImage3D(i3.TEXTURE_2D_ARRAY, ee, Ee, le.width, le.height, ne.depth, 0, le.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else w ? se && t.texSubImage3D(i3.TEXTURE_2D_ARRAY, ee, 0, 0, 0, le.width, le.height, ne.depth, ue, Re, le.data) : t.texImage3D(i3.TEXTURE_2D_ARRAY, ee, Ee, le.width, le.height, ne.depth, 0, ue, Re, le.data);
      } else {
        w && ie && t.texStorage2D(i3.TEXTURE_2D, fe, Ee, Ie[0].width, Ie[0].height);
        for (let ee = 0, $ = Ie.length; ee < $; ee++) le = Ie[ee], _.format !== Vt ? ue !== null ? w ? se && t.compressedTexSubImage2D(i3.TEXTURE_2D, ee, 0, 0, le.width, le.height, ue, le.data) : t.compressedTexImage2D(i3.TEXTURE_2D, ee, Ee, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? se && t.texSubImage2D(i3.TEXTURE_2D, ee, 0, 0, le.width, le.height, ue, Re, le.data) : t.texImage2D(i3.TEXTURE_2D, ee, Ee, le.width, le.height, 0, ue, Re, le.data);
      }
      else if (_.isDataArrayTexture) if (w) {
        if (ie && t.texStorage3D(i3.TEXTURE_2D_ARRAY, fe, Ee, ne.width, ne.height, ne.depth), se) if (_.layerUpdates.size > 0) {
          const ee = io(ne.width, ne.height, _.format, _.type);
          for (const $ of _.layerUpdates) {
            const _e = ne.data.subarray($ * ee / ne.data.BYTES_PER_ELEMENT, ($ + 1) * ee / ne.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, $, ne.width, ne.height, 1, ue, Re, _e);
          }
          _.clearLayerUpdates();
        } else t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, ue, Re, ne.data);
      } else t.texImage3D(i3.TEXTURE_2D_ARRAY, 0, Ee, ne.width, ne.height, ne.depth, 0, ue, Re, ne.data);
      else if (_.isData3DTexture) w ? (ie && t.texStorage3D(i3.TEXTURE_3D, fe, Ee, ne.width, ne.height, ne.depth), se && t.texSubImage3D(i3.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, ue, Re, ne.data)) : t.texImage3D(i3.TEXTURE_3D, 0, Ee, ne.width, ne.height, ne.depth, 0, ue, Re, ne.data);
      else if (_.isFramebufferTexture) {
        if (ie) if (w) t.texStorage2D(i3.TEXTURE_2D, fe, Ee, ne.width, ne.height);
        else {
          let ee = ne.width, $ = ne.height;
          for (let _e = 0; _e < fe; _e++) t.texImage2D(i3.TEXTURE_2D, _e, Ee, ee, $, 0, ue, Re, null), ee >>= 1, $ >>= 1;
        }
      } else if (Ie.length > 0) {
        if (w && ie) {
          const ee = lt(Ie[0]);
          t.texStorage2D(i3.TEXTURE_2D, fe, Ee, ee.width, ee.height);
        }
        for (let ee = 0, $ = Ie.length; ee < $; ee++) le = Ie[ee], w ? se && t.texSubImage2D(i3.TEXTURE_2D, ee, 0, 0, ue, Re, le) : t.texImage2D(i3.TEXTURE_2D, ee, Ee, ue, Re, le);
        _.generateMipmaps = false;
      } else if (w) {
        if (ie) {
          const ee = lt(ne);
          t.texStorage2D(i3.TEXTURE_2D, fe, Ee, ee.width, ee.height);
        }
        se && t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, ue, Re, ne);
      } else t.texImage2D(i3.TEXTURE_2D, 0, Ee, ue, Re, ne);
      p(_) && h(W), Me.__version = V.version, _.onUpdate && _.onUpdate(_);
    }
    M.__version = _.version;
  }
  function Q(M, _, I) {
    if (_.image.length !== 6) return;
    const W = Je(M, _), Z = _.source;
    t.bindTexture(i3.TEXTURE_CUBE_MAP, M.__webglTexture, i3.TEXTURE0 + I);
    const V = n.get(Z);
    if (Z.version !== V.__version || W === true) {
      t.activeTexture(i3.TEXTURE0 + I);
      const Me = We.getPrimaries(We.workingColorSpace), re = _.colorSpace === xn ? null : We.getPrimaries(_.colorSpace), xe = _.colorSpace === xn || Me === re ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, _.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, _.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      const Se = _.isCompressedTexture || _.image[0].isCompressedTexture, ne = _.image[0] && _.image[0].isDataTexture, ue = [];
      for (let $ = 0; $ < 6; $++) !Se && !ne ? ue[$] = x(_.image[$], true, r.maxCubemapSize) : ue[$] = ne ? _.image[$].image : _.image[$], ue[$] = mt(_, ue[$]);
      const Re = ue[0], Ee = s.convert(_.format, _.colorSpace), le = s.convert(_.type), Ie = T(_.internalFormat, Ee, le, _.colorSpace), w = _.isVideoTexture !== true, ie = V.__version === void 0 || W === true, se = Z.dataReady;
      let fe = R(_, Re);
      ze(i3.TEXTURE_CUBE_MAP, _);
      let ee;
      if (Se) {
        w && ie && t.texStorage2D(i3.TEXTURE_CUBE_MAP, fe, Ie, Re.width, Re.height);
        for (let $ = 0; $ < 6; $++) {
          ee = ue[$].mipmaps;
          for (let _e = 0; _e < ee.length; _e++) {
            const Le = ee[_e];
            _.format !== Vt ? Ee !== null ? w ? se && t.compressedTexSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e, 0, 0, Le.width, Le.height, Ee, Le.data) : t.compressedTexImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e, Ie, Le.width, Le.height, 0, Le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? se && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e, 0, 0, Le.width, Le.height, Ee, le, Le.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e, Ie, Le.width, Le.height, 0, Ee, le, Le.data);
          }
        }
      } else {
        if (ee = _.mipmaps, w && ie) {
          ee.length > 0 && fe++;
          const $ = lt(ue[0]);
          t.texStorage2D(i3.TEXTURE_CUBE_MAP, fe, Ie, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++) if (ne) {
          w ? se && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, ue[$].width, ue[$].height, Ee, le, ue[$].data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ie, ue[$].width, ue[$].height, 0, Ee, le, ue[$].data);
          for (let _e = 0; _e < ee.length; _e++) {
            const Qe = ee[_e].image[$].image;
            w ? se && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e + 1, 0, 0, Qe.width, Qe.height, Ee, le, Qe.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e + 1, Ie, Qe.width, Qe.height, 0, Ee, le, Qe.data);
          }
        } else {
          w ? se && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Ee, le, ue[$]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ie, Ee, le, ue[$]);
          for (let _e = 0; _e < ee.length; _e++) {
            const Le = ee[_e];
            w ? se && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e + 1, 0, 0, Ee, le, Le.image[$]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, _e + 1, Ie, Ee, le, Le.image[$]);
          }
        }
      }
      p(_) && h(i3.TEXTURE_CUBE_MAP), V.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    M.__version = _.version;
  }
  function pe(M, _, I, W, Z, V) {
    const Me = s.convert(I.format, I.colorSpace), re = s.convert(I.type), xe = T(I.internalFormat, Me, re, I.colorSpace), Se = n.get(_), ne = n.get(I);
    if (ne.__renderTarget = _, !Se.__hasExternalTextures) {
      const ue = Math.max(1, _.width >> V), Re = Math.max(1, _.height >> V);
      Z === i3.TEXTURE_3D || Z === i3.TEXTURE_2D_ARRAY ? t.texImage3D(Z, V, xe, ue, Re, _.depth, 0, Me, re, null) : t.texImage2D(Z, V, xe, ue, Re, 0, Me, re, null);
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, M), ve(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, W, Z, ne.__webglTexture, 0, rt(_)) : (Z === i3.TEXTURE_2D || Z >= i3.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i3.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i3.framebufferTexture2D(i3.FRAMEBUFFER, W, Z, ne.__webglTexture, V), t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function De(M, _, I) {
    if (i3.bindRenderbuffer(i3.RENDERBUFFER, M), _.depthBuffer) {
      const W = _.depthTexture, Z = W && W.isDepthTexture ? W.type : null, V = y(_.stencilBuffer, Z), Me = _.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, re = rt(_);
      ve(_) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, re, V, _.width, _.height) : I ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, re, V, _.width, _.height) : i3.renderbufferStorage(i3.RENDERBUFFER, V, _.width, _.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, Me, i3.RENDERBUFFER, M);
    } else {
      const W = _.textures;
      for (let Z = 0; Z < W.length; Z++) {
        const V = W[Z], Me = s.convert(V.format, V.colorSpace), re = s.convert(V.type), xe = T(V.internalFormat, Me, re, V.colorSpace), Se = rt(_);
        I && ve(_) === false ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, Se, xe, _.width, _.height) : ve(_) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, Se, xe, _.width, _.height) : i3.renderbufferStorage(i3.RENDERBUFFER, xe, _.width, _.height);
      }
    }
    i3.bindRenderbuffer(i3.RENDERBUFFER, null);
  }
  function ye(M, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i3.FRAMEBUFFER, M), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const W = n.get(_.depthTexture);
    W.__renderTarget = _, (!W.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), X(_.depthTexture, 0);
    const Z = W.__webglTexture, V = rt(_);
    if (_.depthTexture.format === zi) ve(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, Z, 0, V) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, Z, 0);
    else if (_.depthTexture.format === Hi) ve(_) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, Z, 0, V) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ve(M) {
    const _ = n.get(M), I = M.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== M.depthTexture) {
      const W = M.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), W) {
        const Z = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, W.removeEventListener("dispose", Z);
        };
        W.addEventListener("dispose", Z), _.__depthDisposeCallback = Z;
      }
      _.__boundDepthTexture = W;
    }
    if (M.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (I) throw new Error("target.depthTexture not supported in Cube render targets");
      const W = M.texture.mipmaps;
      W && W.length > 0 ? ye(_.__webglFramebuffer[0], M) : ye(_.__webglFramebuffer, M);
    } else if (I) {
      _.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++) if (t.bindFramebuffer(i3.FRAMEBUFFER, _.__webglFramebuffer[W]), _.__webglDepthbuffer[W] === void 0) _.__webglDepthbuffer[W] = i3.createRenderbuffer(), De(_.__webglDepthbuffer[W], M, false);
      else {
        const Z = M.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer[W];
        i3.bindRenderbuffer(i3.RENDERBUFFER, V), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, Z, i3.RENDERBUFFER, V);
      }
    } else {
      const W = M.texture.mipmaps;
      if (W && W.length > 0 ? t.bindFramebuffer(i3.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i3.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i3.createRenderbuffer(), De(_.__webglDepthbuffer, M, false);
      else {
        const Z = M.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer;
        i3.bindRenderbuffer(i3.RENDERBUFFER, V), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, Z, i3.RENDERBUFFER, V);
      }
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function vt(M, _, I) {
    const W = n.get(M);
    _ !== void 0 && pe(W.__webglFramebuffer, M, M.texture, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, 0), I !== void 0 && Ve(M);
  }
  function b(M) {
    const _ = M.texture, I = n.get(M), W = n.get(_);
    M.addEventListener("dispose", C);
    const Z = M.textures, V = M.isWebGLCubeRenderTarget === true, Me = Z.length > 1;
    if (Me || (W.__webglTexture === void 0 && (W.__webglTexture = i3.createTexture()), W.__version = _.version, a.memory.textures++), V) {
      I.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++) if (_.mipmaps && _.mipmaps.length > 0) {
        I.__webglFramebuffer[re] = [];
        for (let xe = 0; xe < _.mipmaps.length; xe++) I.__webglFramebuffer[re][xe] = i3.createFramebuffer();
      } else I.__webglFramebuffer[re] = i3.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let re = 0; re < _.mipmaps.length; re++) I.__webglFramebuffer[re] = i3.createFramebuffer();
      } else I.__webglFramebuffer = i3.createFramebuffer();
      if (Me) for (let re = 0, xe = Z.length; re < xe; re++) {
        const Se = n.get(Z[re]);
        Se.__webglTexture === void 0 && (Se.__webglTexture = i3.createTexture(), a.memory.textures++);
      }
      if (M.samples > 0 && ve(M) === false) {
        I.__webglMultisampledFramebuffer = i3.createFramebuffer(), I.__webglColorRenderbuffer = [], t.bindFramebuffer(i3.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let re = 0; re < Z.length; re++) {
          const xe = Z[re];
          I.__webglColorRenderbuffer[re] = i3.createRenderbuffer(), i3.bindRenderbuffer(i3.RENDERBUFFER, I.__webglColorRenderbuffer[re]);
          const Se = s.convert(xe.format, xe.colorSpace), ne = s.convert(xe.type), ue = T(xe.internalFormat, Se, ne, xe.colorSpace, M.isXRRenderTarget === true), Re = rt(M);
          i3.renderbufferStorageMultisample(i3.RENDERBUFFER, Re, ue, M.width, M.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + re, i3.RENDERBUFFER, I.__webglColorRenderbuffer[re]);
        }
        i3.bindRenderbuffer(i3.RENDERBUFFER, null), M.depthBuffer && (I.__webglDepthRenderbuffer = i3.createRenderbuffer(), De(I.__webglDepthRenderbuffer, M, true)), t.bindFramebuffer(i3.FRAMEBUFFER, null);
      }
    }
    if (V) {
      t.bindTexture(i3.TEXTURE_CUBE_MAP, W.__webglTexture), ze(i3.TEXTURE_CUBE_MAP, _);
      for (let re = 0; re < 6; re++) if (_.mipmaps && _.mipmaps.length > 0) for (let xe = 0; xe < _.mipmaps.length; xe++) pe(I.__webglFramebuffer[re][xe], M, _, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + re, xe);
      else pe(I.__webglFramebuffer[re], M, _, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      p(_) && h(i3.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Me) {
      for (let re = 0, xe = Z.length; re < xe; re++) {
        const Se = Z[re], ne = n.get(Se);
        let ue = i3.TEXTURE_2D;
        (M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (ue = M.isWebGL3DRenderTarget ? i3.TEXTURE_3D : i3.TEXTURE_2D_ARRAY), t.bindTexture(ue, ne.__webglTexture), ze(ue, Se), pe(I.__webglFramebuffer, M, Se, i3.COLOR_ATTACHMENT0 + re, ue, 0), p(Se) && h(ue);
      }
      t.unbindTexture();
    } else {
      let re = i3.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (re = M.isWebGL3DRenderTarget ? i3.TEXTURE_3D : i3.TEXTURE_2D_ARRAY), t.bindTexture(re, W.__webglTexture), ze(re, _), _.mipmaps && _.mipmaps.length > 0) for (let xe = 0; xe < _.mipmaps.length; xe++) pe(I.__webglFramebuffer[xe], M, _, i3.COLOR_ATTACHMENT0, re, xe);
      else pe(I.__webglFramebuffer, M, _, i3.COLOR_ATTACHMENT0, re, 0);
      p(_) && h(re), t.unbindTexture();
    }
    M.depthBuffer && Ve(M);
  }
  function it(M) {
    const _ = M.textures;
    for (let I = 0, W = _.length; I < W; I++) {
      const Z = _[I];
      if (p(Z)) {
        const V = A(M), Me = n.get(Z).__webglTexture;
        t.bindTexture(V, Me), h(V), t.unbindTexture();
      }
    }
  }
  const Ue = [], Ce = [];
  function ge(M) {
    if (M.samples > 0) {
      if (ve(M) === false) {
        const _ = M.textures, I = M.width, W = M.height;
        let Z = i3.COLOR_BUFFER_BIT;
        const V = M.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, Me = n.get(M), re = _.length > 1;
        if (re) for (let Se = 0; Se < _.length; Se++) t.bindFramebuffer(i3.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + Se, i3.RENDERBUFFER, null), t.bindFramebuffer(i3.FRAMEBUFFER, Me.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + Se, i3.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i3.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
        const xe = M.texture.mipmaps;
        xe && xe.length > 0 ? t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, Me.__webglFramebuffer[0]) : t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        for (let Se = 0; Se < _.length; Se++) {
          if (M.resolveDepthBuffer && (M.depthBuffer && (Z |= i3.DEPTH_BUFFER_BIT), M.stencilBuffer && M.resolveStencilBuffer && (Z |= i3.STENCIL_BUFFER_BIT)), re) {
            i3.framebufferRenderbuffer(i3.READ_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.RENDERBUFFER, Me.__webglColorRenderbuffer[Se]);
            const ne = n.get(_[Se]).__webglTexture;
            i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, ne, 0);
          }
          i3.blitFramebuffer(0, 0, I, W, 0, 0, I, W, Z, i3.NEAREST), l === true && (Ue.length = 0, Ce.length = 0, Ue.push(i3.COLOR_ATTACHMENT0 + Se), M.depthBuffer && M.resolveDepthBuffer === false && (Ue.push(V), Ce.push(V), i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, Ce)), i3.invalidateFramebuffer(i3.READ_FRAMEBUFFER, Ue));
        }
        if (t.bindFramebuffer(i3.READ_FRAMEBUFFER, null), t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), re) for (let Se = 0; Se < _.length; Se++) {
          t.bindFramebuffer(i3.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + Se, i3.RENDERBUFFER, Me.__webglColorRenderbuffer[Se]);
          const ne = n.get(_[Se]).__webglTexture;
          t.bindFramebuffer(i3.FRAMEBUFFER, Me.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + Se, i3.TEXTURE_2D, ne, 0);
        }
        t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
      } else if (M.depthBuffer && M.resolveDepthBuffer === false && l) {
        const _ = M.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT;
        i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function rt(M) {
    return Math.min(r.maxSamples, M.samples);
  }
  function ve(M) {
    const _ = n.get(M);
    return M.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function Fe(M) {
    const _ = a.render.frame;
    d.get(M) !== _ && (d.set(M, _), M.update());
  }
  function mt(M, _) {
    const I = M.colorSpace, W = M.format, Z = M.type;
    return M.isCompressedTexture === true || M.isVideoTexture === true || I !== xi && I !== xn && (We.getTransfer(I) === Ke ? (W !== Vt || Z !== un) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", I)), _;
  }
  function lt(M) {
    return typeof HTMLImageElement < "u" && M instanceof HTMLImageElement ? (c.width = M.naturalWidth || M.width, c.height = M.naturalHeight || M.height) : typeof VideoFrame < "u" && M instanceof VideoFrame ? (c.width = M.displayWidth, c.height = M.displayHeight) : (c.width = M.width, c.height = M.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = H, this.setTexture2D = X, this.setTexture2DArray = K, this.setTexture3D = J, this.setTextureCube = k, this.rebindTextures = vt, this.setupRenderTarget = b, this.updateRenderTargetMipmap = it, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = Ve, this.setupFrameBufferTexture = pe, this.useMultisampledRTT = ve;
}
function zp(i3, e) {
  function t(n, r = xn) {
    let s;
    const a = We.getTransfer(r);
    if (n === un) return i3.UNSIGNED_BYTE;
    if (n === pa) return i3.UNSIGNED_SHORT_4_4_4_4;
    if (n === ma) return i3.UNSIGNED_SHORT_5_5_5_1;
    if (n === qo) return i3.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ko) return i3.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Xo) return i3.BYTE;
    if (n === Yo) return i3.SHORT;
    if (n === Oi) return i3.UNSIGNED_SHORT;
    if (n === fa) return i3.INT;
    if (n === kn) return i3.UNSIGNED_INT;
    if (n === ln) return i3.FLOAT;
    if (n === Gi) return i3.HALF_FLOAT;
    if (n === $o) return i3.ALPHA;
    if (n === jo) return i3.RGB;
    if (n === Vt) return i3.RGBA;
    if (n === zi) return i3.DEPTH_COMPONENT;
    if (n === Hi) return i3.DEPTH_STENCIL;
    if (n === Zo) return i3.RED;
    if (n === _a) return i3.RED_INTEGER;
    if (n === Jo) return i3.RG;
    if (n === ga) return i3.RG_INTEGER;
    if (n === va) return i3.RGBA_INTEGER;
    if (n === Er || n === Mr || n === yr || n === br) if (a === Ke) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === Er) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Mr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === yr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === br) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === Er) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Mr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === yr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === br) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Ps || n === Ds || n === Ls || n === Us) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === Ps) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Ds) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Ls) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Us) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Is || n === Ns || n === Fs) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === Is || n === Ns) return a === Ke ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === Fs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Os || n === Bs || n === zs || n === Hs || n === ks || n === Vs || n === Gs || n === Ws || n === Xs || n === Ys || n === qs || n === Ks || n === $s || n === js) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === Os) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Bs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === zs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Hs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === ks) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Vs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Gs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Ws) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Xs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Ys) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === qs) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ks) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === $s) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === js) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Zs || n === Js || n === Qs) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === Zs) return a === Ke ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Js) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Qs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === ea || n === ta || n === na || n === ia) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === ea) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === ta) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === na) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ia) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Bi ? i3.UNSIGNED_INT_24_8 : i3[n] !== void 0 ? i3[n] : null;
  }
  return { convert: t };
}
const Hp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, kp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Vp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new pl(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new yn({ vertexShader: Hp, fragmentShader: kp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Zt(new Ur(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Gp extends Wn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, d = null, u = null, f = null, m = null, g = null;
    const x = typeof XRWebGLBinding < "u", p = new Vp(), h = {}, A = t.getContextAttributes();
    let T = null, y = null;
    const R = [], D = [], C = new Be();
    let N = null;
    const E = new Ot();
    E.viewport = new ct();
    const S = new Ot();
    S.viewport = new ct();
    const P = [E, S], H = new lu();
    let G = null, j = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let Q = R[Y];
      return Q === void 0 && (Q = new os(), R[Y] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let Q = R[Y];
      return Q === void 0 && (Q = new os(), R[Y] = Q), Q.getGripSpace();
    }, this.getHand = function(Y) {
      let Q = R[Y];
      return Q === void 0 && (Q = new os(), R[Y] = Q), Q.getHandSpace();
    };
    function X(Y) {
      const Q = D.indexOf(Y.inputSource);
      if (Q === -1) return;
      const pe = R[Q];
      pe !== void 0 && (pe.update(Y.inputSource, Y.frame, c || a), pe.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function K() {
      r.removeEventListener("select", X), r.removeEventListener("selectstart", X), r.removeEventListener("selectend", X), r.removeEventListener("squeeze", X), r.removeEventListener("squeezestart", X), r.removeEventListener("squeezeend", X), r.removeEventListener("end", K), r.removeEventListener("inputsourceschange", J);
      for (let Y = 0; Y < R.length; Y++) {
        const Q = D[Y];
        Q !== null && (D[Y] = null, R[Y].disconnect(Q));
      }
      G = null, j = null, p.reset();
      for (const Y in h) delete h[Y];
      e.setRenderTarget(T), m = null, f = null, u = null, r = null, y = null, Xe.stop(), n.isPresenting = false, e.setPixelRatio(N), e.setSize(C.width, C.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      s = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return u === null && x && (u = new XRWebGLBinding(r, t)), u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (T = e.getRenderTarget(), r.addEventListener("select", X), r.addEventListener("selectstart", X), r.addEventListener("selectend", X), r.addEventListener("squeeze", X), r.addEventListener("squeezestart", X), r.addEventListener("squeezeend", X), r.addEventListener("end", K), r.addEventListener("inputsourceschange", J), A.xrCompatible !== true && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(C), x && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pe = null, De = null, ye = null;
          A.depth && (ye = A.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, pe = A.stencil ? Hi : zi, De = A.stencil ? Bi : kn);
          const Ve = { colorFormat: t.RGBA8, depthFormat: ye, scaleFactor: s };
          u = this.getBinding(), f = u.createProjectionLayer(Ve), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), y = new Gn(f.textureWidth, f.textureHeight, { format: Vt, type: un, depthTexture: new fl(f.textureWidth, f.textureHeight, De, void 0, void 0, void 0, void 0, void 0, void 0, pe), stencilBuffer: A.stencil, colorSpace: e.outputColorSpace, samples: A.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const pe = { antialias: A.antialias, alpha: true, depth: A.depth, stencil: A.stencil, framebufferScaleFactor: s };
          m = new XRWebGLLayer(r, t, pe), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, false), y = new Gn(m.framebufferWidth, m.framebufferHeight, { format: Vt, type: un, colorSpace: e.outputColorSpace, stencilBuffer: A.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        y.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Xe.setContext(r), Xe.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function J(Y) {
      for (let Q = 0; Q < Y.removed.length; Q++) {
        const pe = Y.removed[Q], De = D.indexOf(pe);
        De >= 0 && (D[De] = null, R[De].disconnect(pe));
      }
      for (let Q = 0; Q < Y.added.length; Q++) {
        const pe = Y.added[Q];
        let De = D.indexOf(pe);
        if (De === -1) {
          for (let Ve = 0; Ve < R.length; Ve++) if (Ve >= D.length) {
            D.push(pe), De = Ve;
            break;
          } else if (D[Ve] === null) {
            D[Ve] = pe, De = Ve;
            break;
          }
          if (De === -1) break;
        }
        const ye = R[De];
        ye && ye.connect(pe);
      }
    }
    const k = new F(), oe = new F();
    function he(Y, Q, pe) {
      k.setFromMatrixPosition(Q.matrixWorld), oe.setFromMatrixPosition(pe.matrixWorld);
      const De = k.distanceTo(oe), ye = Q.projectionMatrix.elements, Ve = pe.projectionMatrix.elements, vt = ye[14] / (ye[10] - 1), b = ye[14] / (ye[10] + 1), it = (ye[9] + 1) / ye[5], Ue = (ye[9] - 1) / ye[5], Ce = (ye[8] - 1) / ye[0], ge = (Ve[8] + 1) / Ve[0], rt = vt * Ce, ve = vt * ge, Fe = De / (-Ce + ge), mt = Fe * -Ce;
      if (Q.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(mt), Y.translateZ(Fe), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), ye[10] === -1) Y.projectionMatrix.copy(Q.projectionMatrix), Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const lt = vt + Fe, M = b + Fe, _ = rt - mt, I = ve + (De - mt), W = it * b / M * lt, Z = Ue * b / M * lt;
        Y.projectionMatrix.makePerspective(_, I, W, Z, lt, M), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function be(Y, Q) {
      Q === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(Q.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let Q = Y.near, pe = Y.far;
      p.texture !== null && (p.depthNear > 0 && (Q = p.depthNear), p.depthFar > 0 && (pe = p.depthFar)), H.near = S.near = E.near = Q, H.far = S.far = E.far = pe, (G !== H.near || j !== H.far) && (r.updateRenderState({ depthNear: H.near, depthFar: H.far }), G = H.near, j = H.far), H.layers.mask = Y.layers.mask | 6, E.layers.mask = H.layers.mask & 3, S.layers.mask = H.layers.mask & 5;
      const De = Y.parent, ye = H.cameras;
      be(H, De);
      for (let Ve = 0; Ve < ye.length; Ve++) be(ye[Ve], De);
      ye.length === 2 ? he(H, E, S) : H.projectionMatrix.copy(E.projectionMatrix), ze(Y, H, De);
    };
    function ze(Y, Q, pe) {
      pe === null ? Y.matrix.copy(Q.matrixWorld) : (Y.matrix.copy(pe.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(Q.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(Q.projectionMatrix), Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = ra * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return H;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return l;
    }, this.setFoveation = function(Y) {
      l = Y, f !== null && (f.fixedFoveation = Y), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(H);
    }, this.getCameraTexture = function(Y) {
      return h[Y];
    };
    let Je = null;
    function nt(Y, Q) {
      if (d = Q.getViewerPose(c || a), g = Q, d !== null) {
        const pe = d.views;
        m !== null && (e.setRenderTargetFramebuffer(y, m.framebuffer), e.setRenderTarget(y));
        let De = false;
        pe.length !== H.cameras.length && (H.cameras.length = 0, De = true);
        for (let b = 0; b < pe.length; b++) {
          const it = pe[b];
          let Ue = null;
          if (m !== null) Ue = m.getViewport(it);
          else {
            const ge = u.getViewSubImage(f, it);
            Ue = ge.viewport, b === 0 && (e.setRenderTargetTextures(y, ge.colorTexture, ge.depthStencilTexture), e.setRenderTarget(y));
          }
          let Ce = P[b];
          Ce === void 0 && (Ce = new Ot(), Ce.layers.enable(b), Ce.viewport = new ct(), P[b] = Ce), Ce.matrix.fromArray(it.transform.matrix), Ce.matrix.decompose(Ce.position, Ce.quaternion, Ce.scale), Ce.projectionMatrix.fromArray(it.projectionMatrix), Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(), Ce.viewport.set(Ue.x, Ue.y, Ue.width, Ue.height), b === 0 && (H.matrix.copy(Ce.matrix), H.matrix.decompose(H.position, H.quaternion, H.scale)), De === true && H.cameras.push(Ce);
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && x) {
          u = n.getBinding();
          const b = u.getDepthInformation(pe[0]);
          b && b.isValid && b.texture && p.init(b, r.renderState);
        }
        if (ye && ye.includes("camera-access") && x) {
          e.state.unbindTexture(), u = n.getBinding();
          for (let b = 0; b < pe.length; b++) {
            const it = pe[b].camera;
            if (it) {
              let Ue = h[it];
              Ue || (Ue = new pl(), h[it] = Ue);
              const Ce = u.getCameraImage(it);
              Ue.sourceTexture = Ce;
            }
          }
        }
      }
      for (let pe = 0; pe < R.length; pe++) {
        const De = D[pe], ye = R[pe];
        De !== null && ye !== void 0 && ye.update(De, Q, c || a);
      }
      Je && Je(Y, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), g = null;
    }
    const Xe = new ml();
    Xe.setAnimationLoop(nt), this.setAnimationLoop = function(Y) {
      Je = Y;
    }, this.dispose = function() {
    };
  }
}
const In = new hn(), Wp = new dt();
function Xp(i3, e) {
  function t(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, cl(i3)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, A, T, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), u(p, h)) : h.isMeshPhongMaterial ? (s(p, h), d(p, h)) : h.isMeshStandardMaterial ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, y)) : h.isMeshMatcapMaterial ? (s(p, h), g(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), x(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? l(p, h, A, T) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === At && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === At && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const A = e.get(h), T = A.envMap, y = A.envMapRotation;
    T && (p.envMap.value = T, In.copy(y), In.x *= -1, In.y *= -1, In.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (In.y *= -1, In.z *= -1), p.envMapRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(In)), p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, A, T) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * A, p.scale.value = T * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function d(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function u(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, A) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === At && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function x(p, h) {
    const A = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Yp(i3, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i3.getParameter(i3.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, T) {
    const y = T.program;
    n.uniformBlockBinding(A, y);
  }
  function c(A, T) {
    let y = r[A.id];
    y === void 0 && (g(A), y = d(A), r[A.id] = y, A.addEventListener("dispose", p));
    const R = T.program;
    n.updateUBOMapping(A, R);
    const D = e.render.frame;
    s[A.id] !== D && (f(A), s[A.id] = D);
  }
  function d(A) {
    const T = u();
    A.__bindingPointIndex = T;
    const y = i3.createBuffer(), R = A.__size, D = A.usage;
    return i3.bindBuffer(i3.UNIFORM_BUFFER, y), i3.bufferData(i3.UNIFORM_BUFFER, R, D), i3.bindBuffer(i3.UNIFORM_BUFFER, null), i3.bindBufferBase(i3.UNIFORM_BUFFER, T, y), y;
  }
  function u() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const T = r[A.id], y = A.uniforms, R = A.__cache;
    i3.bindBuffer(i3.UNIFORM_BUFFER, T);
    for (let D = 0, C = y.length; D < C; D++) {
      const N = Array.isArray(y[D]) ? y[D] : [y[D]];
      for (let E = 0, S = N.length; E < S; E++) {
        const P = N[E];
        if (m(P, D, E, R) === true) {
          const H = P.__offset, G = Array.isArray(P.value) ? P.value : [P.value];
          let j = 0;
          for (let X = 0; X < G.length; X++) {
            const K = G[X], J = x(K);
            typeof K == "number" || typeof K == "boolean" ? (P.__data[0] = K, i3.bufferSubData(i3.UNIFORM_BUFFER, H + j, P.__data)) : K.isMatrix3 ? (P.__data[0] = K.elements[0], P.__data[1] = K.elements[1], P.__data[2] = K.elements[2], P.__data[3] = 0, P.__data[4] = K.elements[3], P.__data[5] = K.elements[4], P.__data[6] = K.elements[5], P.__data[7] = 0, P.__data[8] = K.elements[6], P.__data[9] = K.elements[7], P.__data[10] = K.elements[8], P.__data[11] = 0) : (K.toArray(P.__data, j), j += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i3.bufferSubData(i3.UNIFORM_BUFFER, H, P.__data);
        }
      }
    }
    i3.bindBuffer(i3.UNIFORM_BUFFER, null);
  }
  function m(A, T, y, R) {
    const D = A.value, C = T + "_" + y;
    if (R[C] === void 0) return typeof D == "number" || typeof D == "boolean" ? R[C] = D : R[C] = D.clone(), true;
    {
      const N = R[C];
      if (typeof D == "number" || typeof D == "boolean") {
        if (N !== D) return R[C] = D, true;
      } else if (N.equals(D) === false) return N.copy(D), true;
    }
    return false;
  }
  function g(A) {
    const T = A.uniforms;
    let y = 0;
    const R = 16;
    for (let C = 0, N = T.length; C < N; C++) {
      const E = Array.isArray(T[C]) ? T[C] : [T[C]];
      for (let S = 0, P = E.length; S < P; S++) {
        const H = E[S], G = Array.isArray(H.value) ? H.value : [H.value];
        for (let j = 0, X = G.length; j < X; j++) {
          const K = G[j], J = x(K), k = y % R, oe = k % J.boundary, he = k + oe;
          y += oe, he !== 0 && R - he < J.storage && (y += R - he), H.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = y, y += J.storage;
        }
      }
    }
    const D = y % R;
    return D > 0 && (y += R - D), A.__size = y, A.__cache = {}, this;
  }
  function x(A) {
    const T = { boundary: 0, storage: 0 };
    return typeof A == "number" || typeof A == "boolean" ? (T.boundary = 4, T.storage = 4) : A.isVector2 ? (T.boundary = 8, T.storage = 8) : A.isVector3 || A.isColor ? (T.boundary = 16, T.storage = 12) : A.isVector4 ? (T.boundary = 16, T.storage = 16) : A.isMatrix3 ? (T.boundary = 48, T.storage = 48) : A.isMatrix4 ? (T.boundary = 64, T.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), T;
  }
  function p(A) {
    const T = A.target;
    T.removeEventListener("dispose", p);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), i3.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function h() {
    for (const A in r) i3.deleteBuffer(r[A]);
    a = [], r = {}, s = {};
  }
  return { bind: l, update: c, dispose: h };
}
class qp {
  constructor(e = {}) {
    const { canvas: t = Rc(), context: n = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: d = "default", failIfMajorPerformanceCaveat: u = false, reversedDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Uint32Array(4), x = new Int32Array(4);
    let p = null, h = null;
    const A = [], T = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = En, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const y = this;
    let R = false;
    this._outputColorSpace = Ft;
    let D = 0, C = 0, N = null, E = -1, S = null;
    const P = new ct(), H = new ct();
    let G = null;
    const j = new je(0);
    let X = 0, K = t.width, J = t.height, k = 1, oe = null, he = null;
    const be = new ct(0, 0, K, J), ze = new ct(0, 0, K, J);
    let Je = false;
    const nt = new dl();
    let Xe = false, Y = false;
    const Q = new dt(), pe = new F(), De = new ct(), ye = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ve = false;
    function vt() {
      return N === null ? k : 1;
    }
    let b = n;
    function it(v, L) {
      return t.getContext(v, L);
    }
    try {
      const v = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: d, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${da}`), t.addEventListener("webglcontextlost", se, false), t.addEventListener("webglcontextrestored", fe, false), t.addEventListener("webglcontextcreationerror", ee, false), b === null) {
        const L = "webgl2";
        if (b = it(L, v), b === null) throw it(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Ue, Ce, ge, rt, ve, Fe, mt, lt, M, _, I, W, Z, V, Me, re, xe, Se, ne, ue, Re, Ee, le, Ie;
    function w() {
      Ue = new nf(b), Ue.init(), Ee = new zp(b, Ue), Ce = new $d(b, Ue, e, Ee), ge = new Op(b, Ue), Ce.reversedDepthBuffer && f && ge.buffers.depth.setReversed(true), rt = new af(b), ve = new bp(), Fe = new Bp(b, Ue, ge, ve, Ce, Ee, rt), mt = new Zd(y), lt = new tf(y), M = new hu(b), le = new qd(b, M), _ = new rf(b, M, rt, le), I = new lf(b, _, M, rt), ne = new of(b, Ce, Fe), re = new jd(ve), W = new yp(y, mt, lt, Ue, Ce, le, re), Z = new Xp(y, ve), V = new Ap(), Me = new Lp(Ue), Se = new Yd(y, mt, lt, ge, I, m, l), xe = new Np(y, I, Ce), Ie = new Yp(b, rt, Ce, ge), ue = new Kd(b, Ue, rt), Re = new sf(b, Ue, rt), rt.programs = W.programs, y.capabilities = Ce, y.extensions = Ue, y.properties = ve, y.renderLists = V, y.shadowMap = xe, y.state = ge, y.info = rt;
    }
    w();
    const ie = new Gp(y, b);
    this.xr = ie, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ue.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ue.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (k = v, this.setSize(K, J, false));
    }, this.getSize = function(v) {
      return v.set(K, J);
    }, this.setSize = function(v, L, B = true) {
      if (ie.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      K = v, J = L, t.width = Math.floor(v * k), t.height = Math.floor(L * k), B === true && (t.style.width = v + "px", t.style.height = L + "px"), this.setViewport(0, 0, v, L);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(K * k, J * k).floor();
    }, this.setDrawingBufferSize = function(v, L, B) {
      K = v, J = L, k = B, t.width = Math.floor(v * B), t.height = Math.floor(L * B), this.setViewport(0, 0, v, L);
    }, this.getCurrentViewport = function(v) {
      return v.copy(P);
    }, this.getViewport = function(v) {
      return v.copy(be);
    }, this.setViewport = function(v, L, B, z) {
      v.isVector4 ? be.set(v.x, v.y, v.z, v.w) : be.set(v, L, B, z), ge.viewport(P.copy(be).multiplyScalar(k).round());
    }, this.getScissor = function(v) {
      return v.copy(ze);
    }, this.setScissor = function(v, L, B, z) {
      v.isVector4 ? ze.set(v.x, v.y, v.z, v.w) : ze.set(v, L, B, z), ge.scissor(H.copy(ze).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return Je;
    }, this.setScissorTest = function(v) {
      ge.setScissorTest(Je = v);
    }, this.setOpaqueSort = function(v) {
      oe = v;
    }, this.setTransparentSort = function(v) {
      he = v;
    }, this.getClearColor = function(v) {
      return v.copy(Se.getClearColor());
    }, this.setClearColor = function() {
      Se.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Se.getClearAlpha();
    }, this.setClearAlpha = function() {
      Se.setClearAlpha(...arguments);
    }, this.clear = function(v = true, L = true, B = true) {
      let z = 0;
      if (v) {
        let U = false;
        if (N !== null) {
          const te = N.texture.format;
          U = te === va || te === ga || te === _a;
        }
        if (U) {
          const te = N.texture.type, ce = te === un || te === kn || te === Oi || te === Bi || te === pa || te === ma, me = Se.getClearColor(), de = Se.getClearAlpha(), we = me.r, Pe = me.g, Te = me.b;
          ce ? (g[0] = we, g[1] = Pe, g[2] = Te, g[3] = de, b.clearBufferuiv(b.COLOR, 0, g)) : (x[0] = we, x[1] = Pe, x[2] = Te, x[3] = de, b.clearBufferiv(b.COLOR, 0, x));
        } else z |= b.COLOR_BUFFER_BIT;
      }
      L && (z |= b.DEPTH_BUFFER_BIT), B && (z |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", se, false), t.removeEventListener("webglcontextrestored", fe, false), t.removeEventListener("webglcontextcreationerror", ee, false), Se.dispose(), V.dispose(), Me.dispose(), ve.dispose(), mt.dispose(), lt.dispose(), I.dispose(), le.dispose(), Ie.dispose(), W.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", Yt), ie.removeEventListener("sessionend", Aa), wn.stop();
    };
    function se(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = true;
    }
    function fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = false;
      const v = rt.autoReset, L = xe.enabled, B = xe.autoUpdate, z = xe.needsUpdate, U = xe.type;
      w(), rt.autoReset = v, xe.enabled = L, xe.autoUpdate = B, xe.needsUpdate = z, xe.type = U;
    }
    function ee(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function $(v) {
      const L = v.target;
      L.removeEventListener("dispose", $), _e(L);
    }
    function _e(v) {
      Le(v), ve.remove(v);
    }
    function Le(v) {
      const L = ve.get(v).programs;
      L !== void 0 && (L.forEach(function(B) {
        W.releaseProgram(B);
      }), v.isShaderMaterial && W.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, L, B, z, U, te) {
      L === null && (L = ye);
      const ce = U.isMesh && U.matrixWorld.determinant() < 0, me = Ul(v, L, B, z, U);
      ge.setMaterial(z, ce);
      let de = B.index, we = 1;
      if (z.wireframe === true) {
        if (de = _.getWireframeAttribute(B), de === void 0) return;
        we = 2;
      }
      const Pe = B.drawRange, Te = B.attributes.position;
      let ke = Pe.start * we, qe = (Pe.start + Pe.count) * we;
      te !== null && (ke = Math.max(ke, te.start * we), qe = Math.min(qe, (te.start + te.count) * we)), de !== null ? (ke = Math.max(ke, 0), qe = Math.min(qe, de.count)) : Te != null && (ke = Math.max(ke, 0), qe = Math.min(qe, Te.count));
      const ot = qe - ke;
      if (ot < 0 || ot === 1 / 0) return;
      le.setup(U, z, me, B, de);
      let tt, Ze = ue;
      if (de !== null && (tt = M.get(de), Ze = Re, Ze.setIndex(tt)), U.isMesh) z.wireframe === true ? (ge.setLineWidth(z.wireframeLinewidth * vt()), Ze.setMode(b.LINES)) : Ze.setMode(b.TRIANGLES);
      else if (U.isLine) {
        let Ae = z.linewidth;
        Ae === void 0 && (Ae = 1), ge.setLineWidth(Ae * vt()), U.isLineSegments ? Ze.setMode(b.LINES) : U.isLineLoop ? Ze.setMode(b.LINE_LOOP) : Ze.setMode(b.LINE_STRIP);
      } else U.isPoints ? Ze.setMode(b.POINTS) : U.isSprite && Ze.setMode(b.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ze.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (Ue.get("WEBGL_multi_draw")) Ze.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Ae = U._multiDrawStarts, st = U._multiDrawCounts, Ge = U._multiDrawCount, Rt = de ? M.get(de).bytesPerElement : 1, qn = ve.get(z).currentProgram.getUniforms();
        for (let Ct = 0; Ct < Ge; Ct++) qn.setValue(b, "_gl_DrawID", Ct), Ze.render(Ae[Ct] / Rt, st[Ct]);
      }
      else if (U.isInstancedMesh) Ze.renderInstances(ke, ot, U.count);
      else if (B.isInstancedBufferGeometry) {
        const Ae = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, st = Math.min(B.instanceCount, Ae);
        Ze.renderInstances(ke, ot, st);
      } else Ze.render(ke, ot);
    };
    function Qe(v, L, B) {
      v.transparent === true && v.side === on && v.forceSinglePass === false ? (v.side = At, v.needsUpdate = true, $i(v, L, B), v.side = Mn, v.needsUpdate = true, $i(v, L, B), v.side = on) : $i(v, L, B);
    }
    this.compile = function(v, L, B = null) {
      B === null && (B = v), h = Me.get(B), h.init(L), T.push(h), B.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (h.pushLight(U), U.castShadow && h.pushShadow(U));
      }), v !== B && v.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (h.pushLight(U), U.castShadow && h.pushShadow(U));
      }), h.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const te = U.material;
        if (te) if (Array.isArray(te)) for (let ce = 0; ce < te.length; ce++) {
          const me = te[ce];
          Qe(me, B, U), z.add(me);
        }
        else Qe(te, B, U), z.add(te);
      }), h = T.pop(), z;
    }, this.compileAsync = function(v, L, B = null) {
      const z = this.compile(v, L, B);
      return new Promise((U) => {
        function te() {
          if (z.forEach(function(ce) {
            ve.get(ce).currentProgram.isReady() && z.delete(ce);
          }), z.size === 0) {
            U(v);
            return;
          }
          setTimeout(te, 10);
        }
        Ue.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
      });
    };
    let Ye = null;
    function Qt(v) {
      Ye && Ye(v);
    }
    function Yt() {
      wn.stop();
    }
    function Aa() {
      wn.start();
    }
    const wn = new ml();
    wn.setAnimationLoop(Qt), typeof self < "u" && wn.setContext(self), this.setAnimationLoop = function(v) {
      Ye = v, ie.setAnimationLoop(v), v === null ? wn.stop() : wn.start();
    }, ie.addEventListener("sessionstart", Yt), ie.addEventListener("sessionend", Aa), this.render = function(v, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), ie.enabled === true && ie.isPresenting === true && (ie.cameraAutoUpdate === true && ie.updateCamera(L), L = ie.getCamera()), v.isScene === true && v.onBeforeRender(y, v, L, N), h = Me.get(v, T.length), h.init(L), T.push(h), Q.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), nt.setFromProjectionMatrix(Q, jt, L.reversedDepth), Y = this.localClippingEnabled, Xe = re.init(this.clippingPlanes, Y), p = V.get(v, A.length), p.init(), A.push(p), ie.enabled === true && ie.isPresenting === true) {
        const te = y.xr.getDepthSensingMesh();
        te !== null && Or(te, L, -1 / 0, y.sortObjects);
      }
      Or(v, L, 0, y.sortObjects), p.finish(), y.sortObjects === true && p.sort(oe, he), Ve = ie.enabled === false || ie.isPresenting === false || ie.hasDepthSensing() === false, Ve && Se.addToRenderList(p, v), this.info.render.frame++, Xe === true && re.beginShadows();
      const B = h.state.shadowsArray;
      xe.render(B, v, L), Xe === true && re.endShadows(), this.info.autoReset === true && this.info.reset();
      const z = p.opaque, U = p.transmissive;
      if (h.setupLights(), L.isArrayCamera) {
        const te = L.cameras;
        if (U.length > 0) for (let ce = 0, me = te.length; ce < me; ce++) {
          const de = te[ce];
          Ra(z, U, v, de);
        }
        Ve && Se.render(v);
        for (let ce = 0, me = te.length; ce < me; ce++) {
          const de = te[ce];
          wa(p, v, de, de.viewport);
        }
      } else U.length > 0 && Ra(z, U, v, L), Ve && Se.render(v), wa(p, v, L);
      N !== null && C === 0 && (Fe.updateMultisampleRenderTarget(N), Fe.updateRenderTargetMipmap(N)), v.isScene === true && v.onAfterRender(y, v, L), le.resetDefaultState(), E = -1, S = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], Xe === true && re.setGlobalState(y.clippingPlanes, h.state.camera)) : h = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null;
    };
    function Or(v, L, B, z) {
      if (v.visible === false) return;
      if (v.layers.test(L.layers)) {
        if (v.isGroup) B = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(L);
        else if (v.isLight) h.pushLight(v), v.castShadow && h.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || nt.intersectsSprite(v)) {
            z && De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);
            const ce = I.update(v), me = v.material;
            me.visible && p.push(v, ce, me, B, De.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || nt.intersectsObject(v))) {
          const ce = I.update(v), me = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), De.copy(v.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), De.copy(ce.boundingSphere.center)), De.applyMatrix4(v.matrixWorld).applyMatrix4(Q)), Array.isArray(me)) {
            const de = ce.groups;
            for (let we = 0, Pe = de.length; we < Pe; we++) {
              const Te = de[we], ke = me[Te.materialIndex];
              ke && ke.visible && p.push(v, ce, ke, B, De.z, Te);
            }
          } else me.visible && p.push(v, ce, me, B, De.z, null);
        }
      }
      const te = v.children;
      for (let ce = 0, me = te.length; ce < me; ce++) Or(te[ce], L, B, z);
    }
    function wa(v, L, B, z) {
      const U = v.opaque, te = v.transmissive, ce = v.transparent;
      h.setupLightsView(B), Xe === true && re.setGlobalState(y.clippingPlanes, B), z && ge.viewport(P.copy(z)), U.length > 0 && Ki(U, L, B), te.length > 0 && Ki(te, L, B), ce.length > 0 && Ki(ce, L, B), ge.buffers.depth.setTest(true), ge.buffers.depth.setMask(true), ge.buffers.color.setMask(true), ge.setPolygonOffset(false);
    }
    function Ra(v, L, B, z) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      h.state.transmissionRenderTarget[z.id] === void 0 && (h.state.transmissionRenderTarget[z.id] = new Gn(1, 1, { generateMipmaps: true, type: Ue.has("EXT_color_buffer_half_float") || Ue.has("EXT_color_buffer_float") ? Gi : un, minFilter: zn, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: We.workingColorSpace }));
      const te = h.state.transmissionRenderTarget[z.id], ce = z.viewport || P;
      te.setSize(ce.z * y.transmissionResolutionScale, ce.w * y.transmissionResolutionScale);
      const me = y.getRenderTarget(), de = y.getActiveCubeFace(), we = y.getActiveMipmapLevel();
      y.setRenderTarget(te), y.getClearColor(j), X = y.getClearAlpha(), X < 1 && y.setClearColor(16777215, 0.5), y.clear(), Ve && Se.render(B);
      const Pe = y.toneMapping;
      y.toneMapping = En;
      const Te = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), h.setupLightsView(z), Xe === true && re.setGlobalState(y.clippingPlanes, z), Ki(v, B, z), Fe.updateMultisampleRenderTarget(te), Fe.updateRenderTargetMipmap(te), Ue.has("WEBGL_multisampled_render_to_texture") === false) {
        let ke = false;
        for (let qe = 0, ot = L.length; qe < ot; qe++) {
          const tt = L[qe], Ze = tt.object, Ae = tt.geometry, st = tt.material, Ge = tt.group;
          if (st.side === on && Ze.layers.test(z.layers)) {
            const Rt = st.side;
            st.side = At, st.needsUpdate = true, Ca(Ze, B, z, Ae, st, Ge), st.side = Rt, st.needsUpdate = true, ke = true;
          }
        }
        ke === true && (Fe.updateMultisampleRenderTarget(te), Fe.updateRenderTargetMipmap(te));
      }
      y.setRenderTarget(me, de, we), y.setClearColor(j, X), Te !== void 0 && (z.viewport = Te), y.toneMapping = Pe;
    }
    function Ki(v, L, B) {
      const z = L.isScene === true ? L.overrideMaterial : null;
      for (let U = 0, te = v.length; U < te; U++) {
        const ce = v[U], me = ce.object, de = ce.geometry, we = ce.group;
        let Pe = ce.material;
        Pe.allowOverride === true && z !== null && (Pe = z), me.layers.test(B.layers) && Ca(me, L, B, de, Pe, we);
      }
    }
    function Ca(v, L, B, z, U, te) {
      v.onBeforeRender(y, L, B, z, U, te), v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(y, L, B, z, v, te), U.transparent === true && U.side === on && U.forceSinglePass === false ? (U.side = At, U.needsUpdate = true, y.renderBufferDirect(B, L, z, U, v, te), U.side = Mn, U.needsUpdate = true, y.renderBufferDirect(B, L, z, U, v, te), U.side = on) : y.renderBufferDirect(B, L, z, U, v, te), v.onAfterRender(y, L, B, z, U, te);
    }
    function $i(v, L, B) {
      L.isScene !== true && (L = ye);
      const z = ve.get(v), U = h.state.lights, te = h.state.shadowsArray, ce = U.state.version, me = W.getParameters(v, U.state, te, L, B), de = W.getProgramCacheKey(me);
      let we = z.programs;
      z.environment = v.isMeshStandardMaterial ? L.environment : null, z.fog = L.fog, z.envMap = (v.isMeshStandardMaterial ? lt : mt).get(v.envMap || z.environment), z.envMapRotation = z.environment !== null && v.envMap === null ? L.environmentRotation : v.envMapRotation, we === void 0 && (v.addEventListener("dispose", $), we = /* @__PURE__ */ new Map(), z.programs = we);
      let Pe = we.get(de);
      if (Pe !== void 0) {
        if (z.currentProgram === Pe && z.lightsStateVersion === ce) return Da(v, me), Pe;
      } else me.uniforms = W.getUniforms(v), v.onBeforeCompile(me, y), Pe = W.acquireProgram(me, de), we.set(de, Pe), z.uniforms = me.uniforms;
      const Te = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (Te.clippingPlanes = re.uniform), Da(v, me), z.needsLights = Nl(v), z.lightsStateVersion = ce, z.needsLights && (Te.ambientLightColor.value = U.state.ambient, Te.lightProbe.value = U.state.probe, Te.directionalLights.value = U.state.directional, Te.directionalLightShadows.value = U.state.directionalShadow, Te.spotLights.value = U.state.spot, Te.spotLightShadows.value = U.state.spotShadow, Te.rectAreaLights.value = U.state.rectArea, Te.ltc_1.value = U.state.rectAreaLTC1, Te.ltc_2.value = U.state.rectAreaLTC2, Te.pointLights.value = U.state.point, Te.pointLightShadows.value = U.state.pointShadow, Te.hemisphereLights.value = U.state.hemi, Te.directionalShadowMap.value = U.state.directionalShadowMap, Te.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Te.spotShadowMap.value = U.state.spotShadowMap, Te.spotLightMatrix.value = U.state.spotLightMatrix, Te.spotLightMap.value = U.state.spotLightMap, Te.pointShadowMap.value = U.state.pointShadowMap, Te.pointShadowMatrix.value = U.state.pointShadowMatrix), z.currentProgram = Pe, z.uniformsList = null, Pe;
    }
    function Pa(v) {
      if (v.uniformsList === null) {
        const L = v.currentProgram.getUniforms();
        v.uniformsList = Ar.seqWithValue(L.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Da(v, L) {
      const B = ve.get(v);
      B.outputColorSpace = L.outputColorSpace, B.batching = L.batching, B.batchingColor = L.batchingColor, B.instancing = L.instancing, B.instancingColor = L.instancingColor, B.instancingMorph = L.instancingMorph, B.skinning = L.skinning, B.morphTargets = L.morphTargets, B.morphNormals = L.morphNormals, B.morphColors = L.morphColors, B.morphTargetsCount = L.morphTargetsCount, B.numClippingPlanes = L.numClippingPlanes, B.numIntersection = L.numClipIntersection, B.vertexAlphas = L.vertexAlphas, B.vertexTangents = L.vertexTangents, B.toneMapping = L.toneMapping;
    }
    function Ul(v, L, B, z, U) {
      L.isScene !== true && (L = ye), Fe.resetTextureUnits();
      const te = L.fog, ce = z.isMeshStandardMaterial ? L.environment : null, me = N === null ? y.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : xi, de = (z.isMeshStandardMaterial ? lt : mt).get(z.envMap || ce), we = z.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Pe = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Te = !!B.morphAttributes.position, ke = !!B.morphAttributes.normal, qe = !!B.morphAttributes.color;
      let ot = En;
      z.toneMapped && (N === null || N.isXRRenderTarget === true) && (ot = y.toneMapping);
      const tt = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Ze = tt !== void 0 ? tt.length : 0, Ae = ve.get(z), st = h.state.lights;
      if (Xe === true && (Y === true || v !== S)) {
        const Et = v === S && z.id === E;
        re.setState(z, v, Et);
      }
      let Ge = false;
      z.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== st.state.version || Ae.outputColorSpace !== me || U.isBatchedMesh && Ae.batching === false || !U.isBatchedMesh && Ae.batching === true || U.isBatchedMesh && Ae.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Ae.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Ae.instancing === false || !U.isInstancedMesh && Ae.instancing === true || U.isSkinnedMesh && Ae.skinning === false || !U.isSkinnedMesh && Ae.skinning === true || U.isInstancedMesh && Ae.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Ae.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Ae.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Ae.instancingMorph === false && U.morphTexture !== null || Ae.envMap !== de || z.fog === true && Ae.fog !== te || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== re.numPlanes || Ae.numIntersection !== re.numIntersection) || Ae.vertexAlphas !== we || Ae.vertexTangents !== Pe || Ae.morphTargets !== Te || Ae.morphNormals !== ke || Ae.morphColors !== qe || Ae.toneMapping !== ot || Ae.morphTargetsCount !== Ze) && (Ge = true) : (Ge = true, Ae.__version = z.version);
      let Rt = Ae.currentProgram;
      Ge === true && (Rt = $i(z, L, U));
      let qn = false, Ct = false, bi = false;
      const at = Rt.getUniforms(), Ut = Ae.uniforms;
      if (ge.useProgram(Rt.program) && (qn = true, Ct = true, bi = true), z.id !== E && (E = z.id, Ct = true), qn || S !== v) {
        ge.buffers.depth.getReversed() && v.reversedDepth !== true && (v._reversedDepth = true, v.updateProjectionMatrix()), at.setValue(b, "projectionMatrix", v.projectionMatrix), at.setValue(b, "viewMatrix", v.matrixWorldInverse);
        const yt = at.map.cameraPosition;
        yt !== void 0 && yt.setValue(b, pe.setFromMatrixPosition(v.matrixWorld)), Ce.logarithmicDepthBuffer && at.setValue(b, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && at.setValue(b, "isOrthographic", v.isOrthographicCamera === true), S !== v && (S = v, Ct = true, bi = true);
      }
      if (U.isSkinnedMesh) {
        at.setOptional(b, U, "bindMatrix"), at.setOptional(b, U, "bindMatrixInverse");
        const Et = U.skeleton;
        Et && (Et.boneTexture === null && Et.computeBoneTexture(), at.setValue(b, "boneTexture", Et.boneTexture, Fe));
      }
      U.isBatchedMesh && (at.setOptional(b, U, "batchingTexture"), at.setValue(b, "batchingTexture", U._matricesTexture, Fe), at.setOptional(b, U, "batchingIdTexture"), at.setValue(b, "batchingIdTexture", U._indirectTexture, Fe), at.setOptional(b, U, "batchingColorTexture"), U._colorsTexture !== null && at.setValue(b, "batchingColorTexture", U._colorsTexture, Fe));
      const It = B.morphAttributes;
      if ((It.position !== void 0 || It.normal !== void 0 || It.color !== void 0) && ne.update(U, B, Rt), (Ct || Ae.receiveShadow !== U.receiveShadow) && (Ae.receiveShadow = U.receiveShadow, at.setValue(b, "receiveShadow", U.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Ut.envMap.value = de, Ut.flipEnvMap.value = de.isCubeTexture && de.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && L.environment !== null && (Ut.envMapIntensity.value = L.environmentIntensity), Ct && (at.setValue(b, "toneMappingExposure", y.toneMappingExposure), Ae.needsLights && Il(Ut, bi), te && z.fog === true && Z.refreshFogUniforms(Ut, te), Z.refreshMaterialUniforms(Ut, z, k, J, h.state.transmissionRenderTarget[v.id]), Ar.upload(b, Pa(Ae), Ut, Fe)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (Ar.upload(b, Pa(Ae), Ut, Fe), z.uniformsNeedUpdate = false), z.isSpriteMaterial && at.setValue(b, "center", U.center), at.setValue(b, "modelViewMatrix", U.modelViewMatrix), at.setValue(b, "normalMatrix", U.normalMatrix), at.setValue(b, "modelMatrix", U.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Et = z.uniformsGroups;
        for (let yt = 0, Br = Et.length; yt < Br; yt++) {
          const Rn = Et[yt];
          Ie.update(Rn, Rt), Ie.bind(Rn, Rt);
        }
      }
      return Rt;
    }
    function Il(v, L) {
      v.ambientLightColor.needsUpdate = L, v.lightProbe.needsUpdate = L, v.directionalLights.needsUpdate = L, v.directionalLightShadows.needsUpdate = L, v.pointLights.needsUpdate = L, v.pointLightShadows.needsUpdate = L, v.spotLights.needsUpdate = L, v.spotLightShadows.needsUpdate = L, v.rectAreaLights.needsUpdate = L, v.hemisphereLights.needsUpdate = L;
    }
    function Nl(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return D;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, L, B) {
      const z = ve.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === false, z.__autoAllocateDepthBuffer === false && (z.__useRenderToTexture = false), ve.get(v.texture).__webglTexture = L, ve.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(v, L) {
      const B = ve.get(v);
      B.__webglFramebuffer = L, B.__useDefaultFramebuffer = L === void 0;
    };
    const Fl = b.createFramebuffer();
    this.setRenderTarget = function(v, L = 0, B = 0) {
      N = v, D = L, C = B;
      let z = true, U = null, te = false, ce = false;
      if (v) {
        const de = ve.get(v);
        if (de.__useDefaultFramebuffer !== void 0) ge.bindFramebuffer(b.FRAMEBUFFER, null), z = false;
        else if (de.__webglFramebuffer === void 0) Fe.setupRenderTarget(v);
        else if (de.__hasExternalTextures) Fe.rebindTextures(v, ve.get(v.texture).__webglTexture, ve.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Te = v.depthTexture;
          if (de.__boundDepthTexture !== Te) {
            if (Te !== null && ve.has(Te) && (v.width !== Te.image.width || v.height !== Te.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Fe.setupDepthRenderbuffer(v);
          }
        }
        const we = v.texture;
        (we.isData3DTexture || we.isDataArrayTexture || we.isCompressedArrayTexture) && (ce = true);
        const Pe = ve.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Pe[L]) ? U = Pe[L][B] : U = Pe[L], te = true) : v.samples > 0 && Fe.useMultisampledRTT(v) === false ? U = ve.get(v).__webglMultisampledFramebuffer : Array.isArray(Pe) ? U = Pe[B] : U = Pe, P.copy(v.viewport), H.copy(v.scissor), G = v.scissorTest;
      } else P.copy(be).multiplyScalar(k).floor(), H.copy(ze).multiplyScalar(k).floor(), G = Je;
      if (B !== 0 && (U = Fl), ge.bindFramebuffer(b.FRAMEBUFFER, U) && z && ge.drawBuffers(v, U), ge.viewport(P), ge.scissor(H), ge.setScissorTest(G), te) {
        const de = ve.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + L, de.__webglTexture, B);
      } else if (ce) {
        const de = L;
        for (let we = 0; we < v.textures.length; we++) {
          const Pe = ve.get(v.textures[we]);
          b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + we, Pe.__webglTexture, B, de);
        }
      } else if (v !== null && B !== 0) {
        const de = ve.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, de.__webglTexture, B);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(v, L, B, z, U, te, ce, me = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let de = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ce !== void 0 && (de = de[ce]), de) {
        ge.bindFramebuffer(b.FRAMEBUFFER, de);
        try {
          const we = v.textures[me], Pe = we.format, Te = we.type;
          if (!Ce.textureFormatReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ce.textureTypeReadable(Te)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= v.width - z && B >= 0 && B <= v.height - U && (v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + me), b.readPixels(L, B, z, U, Ee.convert(Pe), Ee.convert(Te), te));
        } finally {
          const we = N !== null ? ve.get(N).__webglFramebuffer : null;
          ge.bindFramebuffer(b.FRAMEBUFFER, we);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, L, B, z, U, te, ce, me = 0) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let de = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ce !== void 0 && (de = de[ce]), de) if (L >= 0 && L <= v.width - z && B >= 0 && B <= v.height - U) {
        ge.bindFramebuffer(b.FRAMEBUFFER, de);
        const we = v.textures[me], Pe = we.format, Te = we.type;
        if (!Ce.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ce.textureTypeReadable(Te)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const ke = b.createBuffer();
        b.bindBuffer(b.PIXEL_PACK_BUFFER, ke), b.bufferData(b.PIXEL_PACK_BUFFER, te.byteLength, b.STREAM_READ), v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + me), b.readPixels(L, B, z, U, Ee.convert(Pe), Ee.convert(Te), 0);
        const qe = N !== null ? ve.get(N).__webglFramebuffer : null;
        ge.bindFramebuffer(b.FRAMEBUFFER, qe);
        const ot = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return b.flush(), await Cc(b, ot, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, ke), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, te), b.deleteBuffer(ke), b.deleteSync(ot), te;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, L = null, B = 0) {
      const z = Math.pow(2, -B), U = Math.floor(v.image.width * z), te = Math.floor(v.image.height * z), ce = L !== null ? L.x : 0, me = L !== null ? L.y : 0;
      Fe.setTexture2D(v, 0), b.copyTexSubImage2D(b.TEXTURE_2D, B, 0, 0, ce, me, U, te), ge.unbindTexture();
    };
    const Ol = b.createFramebuffer(), Bl = b.createFramebuffer();
    this.copyTextureToTexture = function(v, L, B = null, z = null, U = 0, te = null) {
      te === null && (U !== 0 ? (ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), te = U, U = 0) : te = 0);
      let ce, me, de, we, Pe, Te, ke, qe, ot;
      const tt = v.isCompressedTexture ? v.mipmaps[te] : v.image;
      if (B !== null) ce = B.max.x - B.min.x, me = B.max.y - B.min.y, de = B.isBox3 ? B.max.z - B.min.z : 1, we = B.min.x, Pe = B.min.y, Te = B.isBox3 ? B.min.z : 0;
      else {
        const It = Math.pow(2, -U);
        ce = Math.floor(tt.width * It), me = Math.floor(tt.height * It), v.isDataArrayTexture ? de = tt.depth : v.isData3DTexture ? de = Math.floor(tt.depth * It) : de = 1, we = 0, Pe = 0, Te = 0;
      }
      z !== null ? (ke = z.x, qe = z.y, ot = z.z) : (ke = 0, qe = 0, ot = 0);
      const Ze = Ee.convert(L.format), Ae = Ee.convert(L.type);
      let st;
      L.isData3DTexture ? (Fe.setTexture3D(L, 0), st = b.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Fe.setTexture2DArray(L, 0), st = b.TEXTURE_2D_ARRAY) : (Fe.setTexture2D(L, 0), st = b.TEXTURE_2D), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, L.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Ge = b.getParameter(b.UNPACK_ROW_LENGTH), Rt = b.getParameter(b.UNPACK_IMAGE_HEIGHT), qn = b.getParameter(b.UNPACK_SKIP_PIXELS), Ct = b.getParameter(b.UNPACK_SKIP_ROWS), bi = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, tt.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, tt.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, we), b.pixelStorei(b.UNPACK_SKIP_ROWS, Pe), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Te);
      const at = v.isDataArrayTexture || v.isData3DTexture, Ut = L.isDataArrayTexture || L.isData3DTexture;
      if (v.isDepthTexture) {
        const It = ve.get(v), Et = ve.get(L), yt = ve.get(It.__renderTarget), Br = ve.get(Et.__renderTarget);
        ge.bindFramebuffer(b.READ_FRAMEBUFFER, yt.__webglFramebuffer), ge.bindFramebuffer(b.DRAW_FRAMEBUFFER, Br.__webglFramebuffer);
        for (let Rn = 0; Rn < de; Rn++) at && (b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, ve.get(v).__webglTexture, U, Te + Rn), b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, ve.get(L).__webglTexture, te, ot + Rn)), b.blitFramebuffer(we, Pe, ce, me, ke, qe, ce, me, b.DEPTH_BUFFER_BIT, b.NEAREST);
        ge.bindFramebuffer(b.READ_FRAMEBUFFER, null), ge.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || v.isRenderTargetTexture || ve.has(v)) {
        const It = ve.get(v), Et = ve.get(L);
        ge.bindFramebuffer(b.READ_FRAMEBUFFER, Ol), ge.bindFramebuffer(b.DRAW_FRAMEBUFFER, Bl);
        for (let yt = 0; yt < de; yt++) at ? b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, It.__webglTexture, U, Te + yt) : b.framebufferTexture2D(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, It.__webglTexture, U), Ut ? b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Et.__webglTexture, te, ot + yt) : b.framebufferTexture2D(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Et.__webglTexture, te), U !== 0 ? b.blitFramebuffer(we, Pe, ce, me, ke, qe, ce, me, b.COLOR_BUFFER_BIT, b.NEAREST) : Ut ? b.copyTexSubImage3D(st, te, ke, qe, ot + yt, we, Pe, ce, me) : b.copyTexSubImage2D(st, te, ke, qe, we, Pe, ce, me);
        ge.bindFramebuffer(b.READ_FRAMEBUFFER, null), ge.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else Ut ? v.isDataTexture || v.isData3DTexture ? b.texSubImage3D(st, te, ke, qe, ot, ce, me, de, Ze, Ae, tt.data) : L.isCompressedArrayTexture ? b.compressedTexSubImage3D(st, te, ke, qe, ot, ce, me, de, Ze, tt.data) : b.texSubImage3D(st, te, ke, qe, ot, ce, me, de, Ze, Ae, tt) : v.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, te, ke, qe, ce, me, Ze, Ae, tt.data) : v.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, te, ke, qe, tt.width, tt.height, Ze, tt.data) : b.texSubImage2D(b.TEXTURE_2D, te, ke, qe, ce, me, Ze, Ae, tt);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, Ge), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Rt), b.pixelStorei(b.UNPACK_SKIP_PIXELS, qn), b.pixelStorei(b.UNPACK_SKIP_ROWS, Ct), b.pixelStorei(b.UNPACK_SKIP_IMAGES, bi), te === 0 && L.generateMipmaps && b.generateMipmap(st), ge.unbindTexture();
    }, this.initRenderTarget = function(v) {
      ve.get(v).__webglFramebuffer === void 0 && Fe.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? Fe.setTextureCube(v, 0) : v.isData3DTexture ? Fe.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Fe.setTexture2DArray(v, 0) : Fe.setTexture2D(v, 0), ge.unbindTexture();
    }, this.resetState = function() {
      D = 0, C = 0, N = null, ge.reset(), le.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
const Co = { type: "change" }, Ma = { type: "start" }, Sl = { type: "end" }, vr = new il(), Po = new vn(), Kp = Math.cos(70 * wc.DEG2RAD), ht = new F(), Tt = 2 * Math.PI, $e = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, ms = 1e-6;
class $p extends cu {
  constructor(e, t = null) {
    super(e, t), this.state = $e.NONE, this.target = new F(), this.cursor = new F(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: fi.ROTATE, MIDDLE: fi.DOLLY, RIGHT: fi.PAN }, this.touches = { ONE: ui.ROTATE, TWO: ui.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new F(), this._lastQuaternion = new Vn(), this._lastTargetPosition = new F(), this._quat = new Vn().setFromUnitVectors(e.up, new F(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new no(), this._sphericalDelta = new no(), this._scale = 1, this._panOffset = new F(), this._rotateStart = new Be(), this._rotateEnd = new Be(), this._rotateDelta = new Be(), this._panStart = new Be(), this._panEnd = new Be(), this._panDelta = new Be(), this._dollyStart = new Be(), this._dollyEnd = new Be(), this._dollyDelta = new Be(), this._dollyDirection = new F(), this._mouse = new Be(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Zp.bind(this), this._onPointerDown = jp.bind(this), this._onPointerUp = Jp.bind(this), this._onContextMenu = sm.bind(this), this._onMouseWheel = tm.bind(this), this._onKeyDown = nm.bind(this), this._onTouchStart = im.bind(this), this._onTouchMove = rm.bind(this), this._onMouseDown = Qp.bind(this), this._onMouseMove = em.bind(this), this._interceptControlDown = am.bind(this), this._interceptControlUp = om.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Co), this.update(), this.state = $e.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    ht.copy(t).sub(this.target), ht.applyQuaternion(this._quat), this._spherical.setFromVector3(ht), this.autoRotate && this.state === $e.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(n) && isFinite(r) && (n < -Math.PI ? n += Tt : n > Math.PI && (n -= Tt), r < -Math.PI ? r += Tt : r > Math.PI && (r -= Tt), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = a != this._spherical.radius;
    }
    if (ht.setFromSpherical(this._spherical), ht.applyQuaternion(this._quatInverse), t.copy(this.target).add(ht), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = ht.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), s = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new F(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = l !== this.object.zoom;
        const c = new F(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = ht.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (vr.origin.copy(this.object.position), vr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(vr.direction)) < Kp ? this.object.lookAt(this.target) : (Po.setFromNormalAndCoplanarPoint(this.object.up, this.target), vr.intersectPlane(Po, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), s = true);
    }
    return this._scale = 1, this._performCursorZoom = false, s || this._lastPosition.distanceToSquared(this.object.position) > ms || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > ms || this._lastTargetPosition.distanceToSquared(this.target) > ms ? (this.dispatchEvent(Co), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Tt / 60 * this.autoRotateSpeed * e : Tt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    ht.setFromMatrixColumn(t, 0), ht.multiplyScalar(-e), this._panOffset.add(ht);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? ht.setFromMatrixColumn(t, 1) : (ht.setFromMatrixColumn(t, 0), ht.crossVectors(this.object.up, ht)), ht.multiplyScalar(e), this._panOffset.add(ht);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      ht.copy(r).sub(this.target);
      let s = ht.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * s / n.clientHeight, this.object.matrix), this._panUp(2 * t * s / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), r = e - n.left, s = t - n.top, a = n.width, o = n.height;
    this._mouse.x = r / a * 2 - 1, this._mouse.y = -(s / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Tt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Tt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, r);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, r);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, s = Math.sqrt(n * n + r * r);
    this._dollyStart.set(0, s);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), r = 0.5 * (e.pageX + n.x), s = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(r, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Tt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Tt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), r = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, s = Math.sqrt(n * n + r * r);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Be(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function jp(i3) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i3.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i3) && (this._addPointer(i3), i3.pointerType === "touch" ? this._onTouchStart(i3) : this._onMouseDown(i3)));
}
function Zp(i3) {
  this.enabled !== false && (i3.pointerType === "touch" ? this._onTouchMove(i3) : this._onMouseMove(i3));
}
function Jp(i3) {
  switch (this._removePointer(i3), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i3.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Sl), this.state = $e.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Qp(i3) {
  let e;
  switch (i3.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case fi.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i3), this.state = $e.DOLLY;
      break;
    case fi.ROTATE:
      if (i3.ctrlKey || i3.metaKey || i3.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i3), this.state = $e.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i3), this.state = $e.ROTATE;
      }
      break;
    case fi.PAN:
      if (i3.ctrlKey || i3.metaKey || i3.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i3), this.state = $e.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i3), this.state = $e.PAN;
      }
      break;
    default:
      this.state = $e.NONE;
  }
  this.state !== $e.NONE && this.dispatchEvent(Ma);
}
function em(i3) {
  switch (this.state) {
    case $e.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i3);
      break;
    case $e.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i3);
      break;
    case $e.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i3);
      break;
  }
}
function tm(i3) {
  this.enabled === false || this.enableZoom === false || this.state !== $e.NONE || (i3.preventDefault(), this.dispatchEvent(Ma), this._handleMouseWheel(this._customWheelEvent(i3)), this.dispatchEvent(Sl));
}
function nm(i3) {
  this.enabled !== false && this._handleKeyDown(i3);
}
function im(i3) {
  switch (this._trackPointer(i3), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ui.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i3), this.state = $e.TOUCH_ROTATE;
          break;
        case ui.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i3), this.state = $e.TOUCH_PAN;
          break;
        default:
          this.state = $e.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ui.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i3), this.state = $e.TOUCH_DOLLY_PAN;
          break;
        case ui.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i3), this.state = $e.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = $e.NONE;
      }
      break;
    default:
      this.state = $e.NONE;
  }
  this.state !== $e.NONE && this.dispatchEvent(Ma);
}
function rm(i3) {
  switch (this._trackPointer(i3), this.state) {
    case $e.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i3), this.update();
      break;
    case $e.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i3), this.update();
      break;
    case $e.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i3), this.update();
      break;
    case $e.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i3), this.update();
      break;
    default:
      this.state = $e.NONE;
  }
}
function sm(i3) {
  this.enabled !== false && i3.preventDefault();
}
function am(i3) {
  i3.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function om(i3) {
  i3.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
var Ii = function() {
  var i3 = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(d) {
    d.preventDefault(), n(++i3 % e.children.length);
  }, false);
  function t(d) {
    return e.appendChild(d.dom), d;
  }
  function n(d) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === d ? "block" : "none";
    i3 = d;
  }
  var r = (performance || Date).now(), s = r, a = 0, o = t(new Ii.Panel("FPS", "#0ff", "#002")), l = t(new Ii.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new Ii.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    r = (performance || Date).now();
  }, end: function() {
    a++;
    var d = (performance || Date).now();
    if (l.update(d - r, 200), d >= s + 1e3 && (o.update(a * 1e3 / (d - s), 100), s = d, a = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return d;
  }, update: function() {
    r = this.end();
  }, domElement: e, setMode: n };
};
Ii.Panel = function(i3, e, t) {
  var n = 1 / 0, r = 0, s = Math.round, a = s(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, d = 2 * a, u = 3 * a, f = 15 * a, m = 74 * a, g = 30 * a, x = document.createElement("canvas");
  x.width = o, x.height = l, x.style.cssText = "width:80px;height:48px";
  var p = x.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = t, p.fillRect(0, 0, o, l), p.fillStyle = e, p.fillText(i3, c, d), p.fillRect(u, f, m, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(u, f, m, g), { dom: x, update: function(h, A) {
    n = Math.min(n, h), r = Math.max(r, h), p.fillStyle = t, p.globalAlpha = 1, p.fillRect(0, 0, o, f), p.fillStyle = e, p.fillText(s(h) + " " + i3 + " (" + s(n) + "-" + s(r) + ")", c, d), p.drawImage(x, u + a, f, m - a, g, u, f, m - a, g), p.fillRect(u + m - a, f, a, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(u + m - a, f, a, s((1 - h / A) * g));
  } };
};
function lm(i3) {
  if (!(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), e.innerHTML = i3, document.head.appendChild(e), i3;
  }
}
function di(i3, e) {
  var t = i3.__state.conversionName.toString(), n = Math.round(i3.r), r = Math.round(i3.g), s = Math.round(i3.b), a = i3.a, o = Math.round(i3.h), l = i3.s.toFixed(1), c = i3.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var d = i3.hex.toString(16); d.length < 6; ) d = "0" + d;
    return "#" + d;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + r + "," + s + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + r + "," + s + "," + a + ")";
    if (t === "HEX") return "0x" + i3.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + r + "," + s + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + r + "," + s + "," + a + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + r + ",b:" + s + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + r + ",b:" + s + ",a:" + a + "}";
    if (t === "HSV_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + a + "}";
  }
  return "unknown format";
}
var Do = Array.prototype.forEach, Pi = Array.prototype.slice, q = { BREAK: {}, extend: function(e) {
  return this.each(Pi.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(r) {
      this.isUndefined(t[r]) || (e[r] = t[r]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(Pi.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(r) {
      this.isUndefined(e[r]) && (e[r] = t[r]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = Pi.call(arguments);
  return function() {
    for (var t = Pi.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, n) {
  if (e) {
    if (Do && e.forEach && e.forEach === Do) e.forEach(t, n);
    else if (e.length === e.length + 0) {
      var r = void 0, s = void 0;
      for (r = 0, s = e.length; r < s; r++) if (r in e && t.call(n, e[r], r) === this.BREAK) return;
    } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, n) {
  var r = void 0;
  return function() {
    var s = this, a = arguments;
    function o() {
      r = null, n || e.apply(s, a);
    }
    var l = n || !r;
    clearTimeout(r), r = setTimeout(o, t), l && e.apply(s, a);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : Pi.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: (function(i3) {
  function e(t) {
    return i3.apply(this, arguments);
  }
  return e.toString = function() {
    return i3.toString();
  }, e;
})(function(i3) {
  return isNaN(i3);
}), isArray: Array.isArray || function(i3) {
  return i3.constructor === Array;
}, isObject: function(e) {
  return e === Object(e);
}, isNumber: function(e) {
  return e === e + 0;
}, isString: function(e) {
  return e === e + "";
}, isBoolean: function(e) {
  return e === false || e === true;
}, isFunction: function(e) {
  return e instanceof Function;
} }, cm = [{ litmus: q.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: di }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: di }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: di }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: di } } }, { litmus: q.isNumber, conversions: { HEX: { read: function(e) {
  return { space: "HEX", hex: e, conversionName: "HEX" };
}, write: function(e) {
  return e.hex;
} } } }, { litmus: q.isArray, conversions: { RGB_ARRAY: { read: function(e) {
  return e.length !== 3 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2] };
}, write: function(e) {
  return [e.r, e.g, e.b];
} }, RGBA_ARRAY: { read: function(e) {
  return e.length !== 4 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
}, write: function(e) {
  return [e.r, e.g, e.b, e.a];
} } } }, { litmus: q.isObject, conversions: { RGBA_OBJ: { read: function(e) {
  return q.isNumber(e.r) && q.isNumber(e.g) && q.isNumber(e.b) && q.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b, a: e.a };
} }, RGB_OBJ: { read: function(e) {
  return q.isNumber(e.r) && q.isNumber(e.g) && q.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b };
} }, HSVA_OBJ: { read: function(e) {
  return q.isNumber(e.h) && q.isNumber(e.s) && q.isNumber(e.v) && q.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v, a: e.a };
} }, HSV_OBJ: { read: function(e) {
  return q.isNumber(e.h) && q.isNumber(e.s) && q.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v };
} } } }], Di = void 0, xr = void 0, aa = function() {
  xr = false;
  var e = arguments.length > 1 ? q.toArray(arguments) : arguments[0];
  return q.each(cm, function(t) {
    if (t.litmus(e)) return q.each(t.conversions, function(n, r) {
      if (Di = n.read(e), xr === false && Di !== false) return xr = Di, Di.conversionName = r, Di.conversion = n, q.BREAK;
    }), q.BREAK;
  }), xr;
}, Lo = void 0, Pr = { hsv_to_rgb: function(e, t, n) {
  var r = Math.floor(e / 60) % 6, s = e / 60 - Math.floor(e / 60), a = n * (1 - t), o = n * (1 - s * t), l = n * (1 - (1 - s) * t), c = [[n, l, a], [o, n, a], [a, n, l], [a, o, n], [l, a, n], [n, a, o]][r];
  return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
}, rgb_to_hsv: function(e, t, n) {
  var r = Math.min(e, t, n), s = Math.max(e, t, n), a = s - r, o = void 0, l = void 0;
  if (s !== 0) l = a / s;
  else return { h: NaN, s: 0, v: 0 };
  return e === s ? o = (t - n) / a : t === s ? o = 2 + (n - e) / a : o = 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), { h: o * 360, s: l, v: s / 255 };
}, rgb_to_hex: function(e, t, n) {
  var r = this.hex_with_component(0, 2, e);
  return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n), r;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, n) {
  return n << (Lo = t * 8) | e & ~(255 << Lo);
} }, um = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i3) {
  return typeof i3;
} : function(i3) {
  return i3 && typeof Symbol == "function" && i3.constructor === Symbol && i3 !== Symbol.prototype ? "symbol" : typeof i3;
}, Wt = function(i3, e) {
  if (!(i3 instanceof e)) throw new TypeError("Cannot call a class as a function");
}, Xt = /* @__PURE__ */ (function() {
  function i3(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
    }
  }
  return function(e, t, n) {
    return t && i3(e.prototype, t), n && i3(e, n), e;
  };
})(), bn = function i(e, t, n) {
  e === null && (e = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(e, t);
  if (r === void 0) {
    var s = Object.getPrototypeOf(e);
    return s === null ? void 0 : i(s, t, n);
  } else {
    if ("value" in r) return r.value;
    var a = r.get;
    return a === void 0 ? void 0 : a.call(n);
  }
}, Tn = function(i3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  i3.prototype = Object.create(e && e.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(i3, e) : i3.__proto__ = e);
}, An = function(i3, e) {
  if (!i3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : i3;
}, gt = (function() {
  function i3() {
    if (Wt(this, i3), this.__state = aa.apply(this, arguments), this.__state === false) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return Xt(i3, [{ key: "toString", value: function() {
    return di(this);
  } }, { key: "toHexString", value: function() {
    return di(this, true);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), i3;
})();
function ya(i3, e, t) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "RGB" ? this.__state[e] : (gt.recalculateRGB(this, e, t), this.__state[e]);
  }, set: function(r) {
    this.__state.space !== "RGB" && (gt.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = r;
  } });
}
function ba(i3, e) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "HSV" ? this.__state[e] : (gt.recalculateHSV(this), this.__state[e]);
  }, set: function(n) {
    this.__state.space !== "HSV" && (gt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n;
  } });
}
gt.recalculateRGB = function(i3, e, t) {
  if (i3.__state.space === "HEX") i3.__state[e] = Pr.component_from_hex(i3.__state.hex, t);
  else if (i3.__state.space === "HSV") q.extend(i3.__state, Pr.hsv_to_rgb(i3.__state.h, i3.__state.s, i3.__state.v));
  else throw new Error("Corrupted color state");
};
gt.recalculateHSV = function(i3) {
  var e = Pr.rgb_to_hsv(i3.r, i3.g, i3.b);
  q.extend(i3.__state, { s: e.s, v: e.v }), q.isNaN(e.h) ? q.isUndefined(i3.__state.h) && (i3.__state.h = 0) : i3.__state.h = e.h;
};
gt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
ya(gt.prototype, "r", 2);
ya(gt.prototype, "g", 1);
ya(gt.prototype, "b", 0);
ba(gt.prototype, "h");
ba(gt.prototype, "s");
ba(gt.prototype, "v");
Object.defineProperty(gt.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} });
Object.defineProperty(gt.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = Pr.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var Yn = (function() {
  function i3(e, t) {
    Wt(this, i3), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return Xt(i3, [{ key: "onChange", value: function(t) {
    return this.__onChange = t, this;
  } }, { key: "onFinishChange", value: function(t) {
    return this.__onFinishChange = t, this;
  } }, { key: "setValue", value: function(t) {
    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
  } }, { key: "getValue", value: function() {
    return this.object[this.property];
  } }, { key: "updateDisplay", value: function() {
    return this;
  } }, { key: "isModified", value: function() {
    return this.initialValue !== this.getValue();
  } }]), i3;
})(), hm = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, El = {};
q.each(hm, function(i3, e) {
  q.each(i3, function(t) {
    El[t] = e;
  });
});
var dm = /(\d+(\.\d+)?)px/;
function qt(i3) {
  if (i3 === "0" || q.isUndefined(i3)) return 0;
  var e = i3.match(dm);
  return q.isNull(e) ? 0 : parseFloat(e[1]);
}
var O = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return false;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, n) {
  var r = n, s = t;
  q.isUndefined(s) && (s = true), q.isUndefined(r) && (r = true), e.style.position = "absolute", s && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, n, r) {
  var s = n || {}, a = El[t];
  if (!a) throw new Error("Event type " + t + " not supported.");
  var o = document.createEvent(a);
  switch (a) {
    case "MouseEvents": {
      var l = s.x || s.clientX || 0, c = s.y || s.clientY || 0;
      o.initMouseEvent(t, s.bubbles || false, s.cancelable || true, window, s.clickCount || 1, 0, 0, l, c, false, false, false, false, 0, null);
      break;
    }
    case "KeyboardEvents": {
      var d = o.initKeyboardEvent || o.initKeyEvent;
      q.defaults(s, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), d(t, s.bubbles || false, s.cancelable, window, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.keyCode, s.charCode);
      break;
    }
    default: {
      o.initEvent(t, s.bubbles || false, s.cancelable || true);
      break;
    }
  }
  q.defaults(o, r), e.dispatchEvent(o);
}, bind: function(e, t, n, r) {
  var s = r || false;
  return e.addEventListener ? e.addEventListener(t, n, s) : e.attachEvent && e.attachEvent("on" + t, n), O;
}, unbind: function(e, t, n, r) {
  var s = r || false;
  return e.removeEventListener ? e.removeEventListener(t, n, s) : e.detachEvent && e.detachEvent("on" + t, n), O;
}, addClass: function(e, t) {
  if (e.className === void 0) e.className = t;
  else if (e.className !== t) {
    var n = e.className.split(/ +/);
    n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
  }
  return O;
}, removeClass: function(e, t) {
  if (t) if (e.className === t) e.removeAttribute("class");
  else {
    var n = e.className.split(/ +/), r = n.indexOf(t);
    r !== -1 && (n.splice(r, 1), e.className = n.join(" "));
  }
  else e.className = void 0;
  return O;
}, hasClass: function(e, t) {
  return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || false;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return qt(t["border-left-width"]) + qt(t["border-right-width"]) + qt(t["padding-left"]) + qt(t["padding-right"]) + qt(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return qt(t["border-top-width"]) + qt(t["border-bottom-width"]) + qt(t["padding-top"]) + qt(t["padding-bottom"]) + qt(t.height);
}, getOffset: function(e) {
  var t = e, n = { left: 0, top: 0 };
  if (t.offsetParent) do
    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return n;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, Ml = (function(i3) {
  Tn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), s = r;
    r.__prev = r.getValue(), r.__checkbox = document.createElement("input"), r.__checkbox.setAttribute("type", "checkbox");
    function a() {
      s.setValue(!s.__prev);
    }
    return O.bind(r.__checkbox, "change", a, false), r.domElement.appendChild(r.__checkbox), r.updateDisplay(), r;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), r;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Yn), fm = (function(i3) {
  Tn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r, o = s;
    if (s.__select = document.createElement("select"), q.isArray(a)) {
      var l = {};
      q.each(a, function(c) {
        l[c] = c;
      }), a = l;
    }
    return q.each(a, function(c, d) {
      var u = document.createElement("option");
      u.innerHTML = d, u.setAttribute("value", c), o.__select.appendChild(u);
    }), s.updateDisplay(), O.bind(s.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      o.setValue(c);
    }), s.domElement.appendChild(s.__select), s;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), r;
  } }, { key: "updateDisplay", value: function() {
    return O.isActive(this.__select) ? this : (this.__select.value = this.getValue(), bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
  } }]), e;
})(Yn), pm = (function(i3) {
  Tn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), s = r;
    function a() {
      s.setValue(s.__input.value);
    }
    function o() {
      s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
    }
    return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), O.bind(r.__input, "keyup", a), O.bind(r.__input, "change", a), O.bind(r.__input, "blur", o), O.bind(r.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    return O.isActive(this.__input) || (this.__input.value = this.getValue()), bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Yn);
function Uo(i3) {
  var e = i3.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var yl = (function(i3) {
  Tn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r || {};
    return s.__min = a.min, s.__max = a.max, s.__step = a.step, q.isUndefined(s.__step) ? s.initialValue === 0 ? s.__impliedStep = 1 : s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10 : s.__impliedStep = s.__step, s.__precision = Uo(s.__impliedStep), s;
  }
  return Xt(e, [{ key: "setValue", value: function(n) {
    var r = n;
    return this.__min !== void 0 && r < this.__min ? r = this.__min : this.__max !== void 0 && r > this.__max && (r = this.__max), this.__step !== void 0 && r % this.__step !== 0 && (r = Math.round(r / this.__step) * this.__step), bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, r);
  } }, { key: "min", value: function(n) {
    return this.__min = n, this;
  } }, { key: "max", value: function(n) {
    return this.__max = n, this;
  } }, { key: "step", value: function(n) {
    return this.__step = n, this.__impliedStep = n, this.__precision = Uo(n), this;
  } }]), e;
})(Yn);
function mm(i3, e) {
  var t = Math.pow(10, e);
  return Math.round(i3 * t) / t;
}
var Dr = (function(i3) {
  Tn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, r));
    s.__truncationSuspended = false;
    var a = s, o = void 0;
    function l() {
      var g = parseFloat(a.__input.value);
      q.isNaN(g) || a.setValue(g);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function d() {
      c();
    }
    function u(g) {
      var x = o - g.clientY;
      a.setValue(a.getValue() + x * a.__impliedStep), o = g.clientY;
    }
    function f() {
      O.unbind(window, "mousemove", u), O.unbind(window, "mouseup", f), c();
    }
    function m(g) {
      O.bind(window, "mousemove", u), O.bind(window, "mouseup", f), o = g.clientY;
    }
    return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), O.bind(s.__input, "change", l), O.bind(s.__input, "blur", d), O.bind(s.__input, "mousedown", m), O.bind(s.__input, "keydown", function(g) {
      g.keyCode === 13 && (a.__truncationSuspended = true, this.blur(), a.__truncationSuspended = false, c());
    }), s.updateDisplay(), s.domElement.appendChild(s.__input), s;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : mm(this.getValue(), this.__precision), bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(yl);
function Io(i3, e, t, n, r) {
  return n + (r - n) * ((i3 - e) / (t - e));
}
var oa = (function(i3) {
  Tn(e, i3);
  function e(t, n, r, s, a) {
    Wt(this, e);
    var o = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: r, max: s, step: a })), l = o;
    o.__background = document.createElement("div"), o.__foreground = document.createElement("div"), O.bind(o.__background, "mousedown", c), O.bind(o.__background, "touchstart", f), O.addClass(o.__background, "slider"), O.addClass(o.__foreground, "slider-fg");
    function c(x) {
      document.activeElement.blur(), O.bind(window, "mousemove", d), O.bind(window, "mouseup", u), d(x);
    }
    function d(x) {
      x.preventDefault();
      var p = l.__background.getBoundingClientRect();
      return l.setValue(Io(x.clientX, p.left, p.right, l.__min, l.__max)), false;
    }
    function u() {
      O.unbind(window, "mousemove", d), O.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function f(x) {
      x.touches.length === 1 && (O.bind(window, "touchmove", m), O.bind(window, "touchend", g), m(x));
    }
    function m(x) {
      var p = x.touches[0].clientX, h = l.__background.getBoundingClientRect();
      l.setValue(Io(p, h.left, h.right, l.__min, l.__max));
    }
    function g() {
      O.unbind(window, "touchmove", m), O.unbind(window, "touchend", g), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return o.updateDisplay(), o.__background.appendChild(o.__foreground), o.domElement.appendChild(o.__background), o;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    var n = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = n * 100 + "%", bn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(yl), bl = (function(i3) {
  Tn(e, i3);
  function e(t, n, r) {
    Wt(this, e);
    var s = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = s;
    return s.__button = document.createElement("div"), s.__button.innerHTML = r === void 0 ? "Fire" : r, O.bind(s.__button, "click", function(o) {
      return o.preventDefault(), a.fire(), false;
    }), O.addClass(s.__button, "button"), s.domElement.appendChild(s.__button), s;
  }
  return Xt(e, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), e;
})(Yn), la = (function(i3) {
  Tn(e, i3);
  function e(t, n) {
    Wt(this, e);
    var r = An(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    r.__color = new gt(r.getValue()), r.__temp = new gt(0);
    var s = r;
    r.domElement = document.createElement("div"), O.makeSelectable(r.domElement, false), r.__selector = document.createElement("div"), r.__selector.className = "selector", r.__saturation_field = document.createElement("div"), r.__saturation_field.className = "saturation-field", r.__field_knob = document.createElement("div"), r.__field_knob.className = "field-knob", r.__field_knob_border = "2px solid ", r.__hue_knob = document.createElement("div"), r.__hue_knob.className = "hue-knob", r.__hue_field = document.createElement("div"), r.__hue_field.className = "hue-field", r.__input = document.createElement("input"), r.__input.type = "text", r.__input_textShadow = "0 1px 1px ", O.bind(r.__input, "keydown", function(x) {
      x.keyCode === 13 && u.call(this);
    }), O.bind(r.__input, "blur", u), O.bind(r.__selector, "mousedown", function() {
      O.addClass(this, "drag").bind(window, "mouseup", function() {
        O.removeClass(s.__selector, "drag");
      });
    }), O.bind(r.__selector, "touchstart", function() {
      O.addClass(this, "drag").bind(window, "touchend", function() {
        O.removeClass(s.__selector, "drag");
      });
    });
    var a = document.createElement("div");
    q.extend(r.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), q.extend(r.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: r.__field_knob_border + (r.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), q.extend(r.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), q.extend(r.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), q.extend(a.style, { width: "100%", height: "100%", background: "none" }), No(a, "top", "rgba(0,0,0,0)", "#000"), q.extend(r.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), gm(r.__hue_field), q.extend(r.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: r.__input_textShadow + "rgba(0,0,0,0.7)" }), O.bind(r.__saturation_field, "mousedown", o), O.bind(r.__saturation_field, "touchstart", o), O.bind(r.__field_knob, "mousedown", o), O.bind(r.__field_knob, "touchstart", o), O.bind(r.__hue_field, "mousedown", l), O.bind(r.__hue_field, "touchstart", l);
    function o(x) {
      m(x), O.bind(window, "mousemove", m), O.bind(window, "touchmove", m), O.bind(window, "mouseup", c), O.bind(window, "touchend", c);
    }
    function l(x) {
      g(x), O.bind(window, "mousemove", g), O.bind(window, "touchmove", g), O.bind(window, "mouseup", d), O.bind(window, "touchend", d);
    }
    function c() {
      O.unbind(window, "mousemove", m), O.unbind(window, "touchmove", m), O.unbind(window, "mouseup", c), O.unbind(window, "touchend", c), f();
    }
    function d() {
      O.unbind(window, "mousemove", g), O.unbind(window, "touchmove", g), O.unbind(window, "mouseup", d), O.unbind(window, "touchend", d), f();
    }
    function u() {
      var x = aa(this.value);
      x !== false ? (s.__color.__state = x, s.setValue(s.__color.toOriginal())) : this.value = s.__color.toString();
    }
    function f() {
      s.__onFinishChange && s.__onFinishChange.call(s, s.__color.toOriginal());
    }
    r.__saturation_field.appendChild(a), r.__selector.appendChild(r.__field_knob), r.__selector.appendChild(r.__saturation_field), r.__selector.appendChild(r.__hue_field), r.__hue_field.appendChild(r.__hue_knob), r.domElement.appendChild(r.__input), r.domElement.appendChild(r.__selector), r.updateDisplay();
    function m(x) {
      x.type.indexOf("touch") === -1 && x.preventDefault();
      var p = s.__saturation_field.getBoundingClientRect(), h = x.touches && x.touches[0] || x, A = h.clientX, T = h.clientY, y = (A - p.left) / (p.right - p.left), R = 1 - (T - p.top) / (p.bottom - p.top);
      return R > 1 ? R = 1 : R < 0 && (R = 0), y > 1 ? y = 1 : y < 0 && (y = 0), s.__color.v = R, s.__color.s = y, s.setValue(s.__color.toOriginal()), false;
    }
    function g(x) {
      x.type.indexOf("touch") === -1 && x.preventDefault();
      var p = s.__hue_field.getBoundingClientRect(), h = x.touches && x.touches[0] || x, A = h.clientY, T = 1 - (A - p.top) / (p.bottom - p.top);
      return T > 1 ? T = 1 : T < 0 && (T = 0), s.__color.h = T * 360, s.setValue(s.__color.toOriginal()), false;
    }
    return r;
  }
  return Xt(e, [{ key: "updateDisplay", value: function() {
    var n = aa(this.getValue());
    if (n !== false) {
      var r = false;
      q.each(gt.COMPONENTS, function(o) {
        if (!q.isUndefined(n[o]) && !q.isUndefined(this.__color.__state[o]) && n[o] !== this.__color.__state[o]) return r = true, {};
      }, this), r && q.extend(this.__color.__state, n);
    }
    q.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, a = 255 - s;
    q.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, No(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), q.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + s + "," + s + "," + s + ")", textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)" });
  } }]), e;
})(Yn), _m = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function No(i3, e, t, n) {
  i3.style.background = "", q.each(_m, function(r) {
    i3.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
  });
}
function gm(i3) {
  i3.style.background = "", i3.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", i3.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var vm = { load: function(e, t) {
  var n = t || document, r = n.createElement("link");
  r.type = "text/css", r.rel = "stylesheet", r.href = e, n.getElementsByTagName("head")[0].appendChild(r);
}, inject: function(e, t) {
  var n = t || document, r = document.createElement("style");
  r.type = "text/css", r.innerHTML = e;
  var s = n.getElementsByTagName("head")[0];
  try {
    s.appendChild(r);
  } catch {
  }
} }, xm = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, Sm = function(e, t) {
  var n = e[t];
  return q.isArray(arguments[2]) || q.isObject(arguments[2]) ? new fm(e, t, arguments[2]) : q.isNumber(n) ? q.isNumber(arguments[2]) && q.isNumber(arguments[3]) ? q.isNumber(arguments[4]) ? new oa(e, t, arguments[2], arguments[3], arguments[4]) : new oa(e, t, arguments[2], arguments[3]) : q.isNumber(arguments[4]) ? new Dr(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Dr(e, t, { min: arguments[2], max: arguments[3] }) : q.isString(n) ? new pm(e, t) : q.isFunction(n) ? new bl(e, t, "") : q.isBoolean(n) ? new Ml(e, t) : null;
};
function Em(i3) {
  setTimeout(i3, 1e3 / 60);
}
var Mm = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Em, ym = (function() {
  function i3() {
    Wt(this, i3), this.backgroundElement = document.createElement("div"), q.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), O.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), q.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var e = this;
    O.bind(this.backgroundElement, "click", function() {
      e.hide();
    });
  }
  return Xt(i3, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), q.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, n = function r() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", O.unbind(t.domElement, "webkitTransitionEnd", r), O.unbind(t.domElement, "transitionend", r), O.unbind(t.domElement, "oTransitionEnd", r);
    };
    O.bind(this.domElement, "webkitTransitionEnd", n), O.bind(this.domElement, "transitionend", n), O.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - O.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - O.getHeight(this.domElement) / 2 + "px";
  } }]), i3;
})(), bm = lm(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
vm.inject(bm);
var Fo = "dg", Oo = 72, Bo = 20, Vi = "Default", Ui = (function() {
  try {
    return !!window.localStorage;
  } catch {
    return false;
  }
})(), Ni = void 0, zo = true, li = void 0, _s = false, Tl = [], et = function i2(e) {
  var t = this, n = e || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), O.addClass(this.domElement, Fo), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = q.defaults(n, { closeOnTop: false, autoPlace: true, width: i2.DEFAULT_WIDTH }), n = q.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), q.isUndefined(n.load) ? n.load = { preset: Vi } : n.preset && (n.load.preset = n.preset), q.isUndefined(n.parent) && n.hideable && Tl.push(this), n.resizable = q.isUndefined(n.parent) && n.resizable, n.autoPlace && q.isUndefined(n.scrollable) && (n.scrollable = true);
  var r = Ui && localStorage.getItem(ci(this, "isLocal")) === "true", s = void 0, a = void 0;
  if (Object.defineProperties(this, { parent: { get: function() {
    return n.parent;
  } }, scrollable: { get: function() {
    return n.scrollable;
  } }, autoPlace: { get: function() {
    return n.autoPlace;
  } }, closeOnTop: { get: function() {
    return n.closeOnTop;
  } }, preset: { get: function() {
    return t.parent ? t.getRoot().preset : n.load.preset;
  }, set: function(f) {
    t.parent ? t.getRoot().preset = f : n.load.preset = f, Rm(this), t.revert();
  } }, width: { get: function() {
    return n.width;
  }, set: function(f) {
    n.width = f, ha(t, f);
  } }, name: { get: function() {
    return n.name;
  }, set: function(f) {
    n.name = f, a && (a.innerHTML = n.name);
  } }, closed: { get: function() {
    return n.closed;
  }, set: function(f) {
    n.closed = f, n.closed ? O.addClass(t.__ul, i2.CLASS_CLOSED) : O.removeClass(t.__ul, i2.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = f ? i2.TEXT_OPEN : i2.TEXT_CLOSED);
  } }, load: { get: function() {
    return n.load;
  } }, useLocalStorage: { get: function() {
    return r;
  }, set: function(f) {
    Ui && (r = f, f ? O.bind(window, "unload", s) : O.unbind(window, "unload", s), localStorage.setItem(ci(t, "isLocal"), f));
  } } }), q.isUndefined(n.parent)) {
    if (this.closed = n.closed || false, O.addClass(this.domElement, i2.CLASS_MAIN), O.makeSelectable(this.domElement, false), Ui && r) {
      t.useLocalStorage = true;
      var o = localStorage.getItem(ci(this, "gui"));
      o && (n.load = JSON.parse(o));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = i2.TEXT_CLOSED, O.addClass(this.__closeButton, i2.CLASS_CLOSE_BUTTON), n.closeOnTop ? (O.addClass(this.__closeButton, i2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (O.addClass(this.__closeButton, i2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), O.bind(this.__closeButton, "click", function() {
      t.closed = !t.closed;
    });
  } else {
    n.closed === void 0 && (n.closed = true);
    var l = document.createTextNode(n.name);
    O.addClass(l, "controller-name"), a = Ta(t, l);
    var c = function(f) {
      return f.preventDefault(), t.closed = !t.closed, false;
    };
    O.addClass(this.__ul, i2.CLASS_CLOSED), O.addClass(a, "title"), O.bind(a, "click", c), n.closed || (this.closed = false);
  }
  n.autoPlace && (q.isUndefined(n.parent) && (zo && (li = document.createElement("div"), O.addClass(li, Fo), O.addClass(li, i2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(li), zo = false), li.appendChild(this.domElement), O.addClass(this.domElement, i2.CLASS_AUTO_PLACE)), this.parent || ha(t, n.width)), this.__resizeHandler = function() {
    t.onResizeDebounced();
  }, O.bind(window, "resize", this.__resizeHandler), O.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), O.bind(this.__ul, "transitionend", this.__resizeHandler), O.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && wm(this), s = function() {
    Ui && localStorage.getItem(ci(t, "isLocal")) === "true" && localStorage.setItem(ci(t, "gui"), JSON.stringify(t.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = s;
  function d() {
    var u = t.getRoot();
    u.width += 1, q.defer(function() {
      u.width -= 1;
    });
  }
  n.parent || d();
};
et.toggleHide = function() {
  _s = !_s, q.each(Tl, function(i3) {
    i3.domElement.style.display = _s ? "none" : "";
  });
};
et.CLASS_AUTO_PLACE = "a";
et.CLASS_AUTO_PLACE_CONTAINER = "ac";
et.CLASS_MAIN = "main";
et.CLASS_CONTROLLER_ROW = "cr";
et.CLASS_TOO_TALL = "taller-than-window";
et.CLASS_CLOSED = "closed";
et.CLASS_CLOSE_BUTTON = "close-button";
et.CLASS_CLOSE_TOP = "close-top";
et.CLASS_CLOSE_BOTTOM = "close-bottom";
et.CLASS_DRAG = "drag";
et.DEFAULT_WIDTH = 245;
et.TEXT_CLOSED = "Close Controls";
et.TEXT_OPEN = "Open Controls";
et._keydownHandler = function(i3) {
  document.activeElement.type !== "text" && (i3.which === Oo || i3.keyCode === Oo) && et.toggleHide();
};
O.bind(window, "keydown", et._keydownHandler, false);
q.extend(et.prototype, { add: function(e, t) {
  return Fi(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return Fi(this, e, t, { color: true });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  q.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && li.removeChild(this.domElement);
  var e = this;
  q.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), O.unbind(window, "keydown", et._keydownHandler, false), Ho(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var n = new et(t);
  this.__folders[e] = n;
  var r = Ta(this, n.domElement);
  return O.addClass(r, "folder"), n;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Ho(e);
  var t = this;
  q.each(e.__folders, function(n) {
    e.removeFolder(n);
  }), q.defer(function() {
    t.onResize();
  });
}, open: function() {
  this.closed = false;
}, close: function() {
  this.closed = true;
}, hide: function() {
  this.domElement.style.display = "none";
}, show: function() {
  this.domElement.style.display = "";
}, onResize: function() {
  var e = this.getRoot();
  if (e.scrollable) {
    var t = O.getOffset(e.__ul).top, n = 0;
    q.each(e.__ul.childNodes, function(r) {
      e.autoPlace && r === e.__save_row || (n += O.getHeight(r));
    }), window.innerHeight - t - Bo < n ? (O.addClass(e.domElement, et.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - Bo + "px") : (O.removeClass(e.domElement, et.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && q.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: q.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (q.isUndefined(Ni) && (Ni = new ym(), Ni.domElement.innerHTML = xm), this.parent) throw new Error("You can only call remember on a top level GUI.");
  var e = this;
  q.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && Am(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && ha(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = Sr(this)), e.folders = {}, q.each(this.__folders, function(t, n) {
    e.folders[n] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Sr(this), ca(this, false), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[Vi] = Sr(this, true)), this.load.remembered[e] = Sr(this), this.preset = e, ua(this, e, true), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  q.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? Al(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), q.each(this.__folders, function(t) {
    t.revert(t);
  }), e || ca(this.getRoot(), false);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && wl(this.__listening);
}, updateDisplay: function() {
  q.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), q.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function Ta(i3, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? i3.__ul.insertBefore(n, t) : i3.__ul.appendChild(n), i3.onResize(), n;
}
function Ho(i3) {
  O.unbind(window, "resize", i3.__resizeHandler), i3.saveToLocalStorageIfPossible && O.unbind(window, "unload", i3.saveToLocalStorageIfPossible);
}
function ca(i3, e) {
  var t = i3.__preset_select[i3.__preset_select.selectedIndex];
  e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value;
}
function Tm(i3, e, t) {
  if (t.__li = e, t.__gui = i3, q.extend(t, { options: function(a) {
    if (arguments.length > 1) {
      var o = t.__li.nextElementSibling;
      return t.remove(), Fi(i3, t.object, t.property, { before: o, factoryArgs: [q.toArray(arguments)] });
    }
    if (q.isArray(a) || q.isObject(a)) {
      var l = t.__li.nextElementSibling;
      return t.remove(), Fi(i3, t.object, t.property, { before: l, factoryArgs: [a] });
    }
  }, name: function(a) {
    return t.__li.firstElementChild.firstElementChild.innerHTML = a, t;
  }, listen: function() {
    return t.__gui.listen(t), t;
  }, remove: function() {
    return t.__gui.remove(t), t;
  } }), t instanceof oa) {
    var n = new Dr(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    q.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(s) {
      var a = t[s], o = n[s];
      t[s] = n[s] = function() {
        var l = Array.prototype.slice.call(arguments);
        return o.apply(n, l), a.apply(t, l);
      };
    }), O.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof Dr) {
    var r = function(a) {
      if (q.isNumber(t.__min) && q.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Fi(i3, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    t.min = q.compose(r, t.min), t.max = q.compose(r, t.max);
  } else t instanceof Ml ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__checkbox, "click");
  }), O.bind(t.__checkbox, "click", function(s) {
    s.stopPropagation();
  })) : t instanceof bl ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__button, "click");
  }), O.bind(e, "mouseover", function() {
    O.addClass(t.__button, "hover");
  }), O.bind(e, "mouseout", function() {
    O.removeClass(t.__button, "hover");
  })) : t instanceof la && (O.addClass(e, "color"), t.updateDisplay = q.compose(function(s) {
    return e.style.borderLeftColor = t.__color.toString(), s;
  }, t.updateDisplay), t.updateDisplay());
  t.setValue = q.compose(function(s) {
    return i3.getRoot().__preset_select && t.isModified() && ca(i3.getRoot(), true), s;
  }, t.setValue);
}
function Al(i3, e) {
  var t = i3.getRoot(), n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var r = t.__rememberedObjectIndecesToControllers[n];
    if (r === void 0 && (r = {}, t.__rememberedObjectIndecesToControllers[n] = r), r[e.property] = e, t.load && t.load.remembered) {
      var s = t.load.remembered, a = void 0;
      if (s[i3.preset]) a = s[i3.preset];
      else if (s[Vi]) a = s[Vi];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        e.initialValue = o, e.setValue(o);
      }
    }
  }
}
function Fi(i3, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var r = void 0;
  if (n.color) r = new la(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    r = Sm.apply(i3, s);
  }
  n.before instanceof Yn && (n.before = n.before.__li), Al(i3, r), O.addClass(r.domElement, "c");
  var a = document.createElement("span");
  O.addClass(a, "property-name"), a.innerHTML = r.property;
  var o = document.createElement("div");
  o.appendChild(a), o.appendChild(r.domElement);
  var l = Ta(i3, o, n.before);
  return O.addClass(l, et.CLASS_CONTROLLER_ROW), r instanceof la ? O.addClass(l, "color") : O.addClass(l, um(r.getValue())), Tm(i3, l, r), i3.__controllers.push(r), r;
}
function ci(i3, e) {
  return document.location.href + "." + e;
}
function ua(i3, e, t) {
  var n = document.createElement("option");
  n.innerHTML = e, n.value = e, i3.__preset_select.appendChild(n), t && (i3.__preset_select.selectedIndex = i3.__preset_select.length - 1);
}
function ko(i3, e) {
  e.style.display = i3.useLocalStorage ? "block" : "none";
}
function Am(i3) {
  var e = i3.__save_row = document.createElement("li");
  O.addClass(i3.domElement, "has-save"), i3.__ul.insertBefore(e, i3.__ul.firstChild), O.addClass(e, "save-row");
  var t = document.createElement("span");
  t.innerHTML = "&nbsp;", O.addClass(t, "button gears");
  var n = document.createElement("span");
  n.innerHTML = "Save", O.addClass(n, "button"), O.addClass(n, "save");
  var r = document.createElement("span");
  r.innerHTML = "New", O.addClass(r, "button"), O.addClass(r, "save-as");
  var s = document.createElement("span");
  s.innerHTML = "Revert", O.addClass(s, "button"), O.addClass(s, "revert");
  var a = i3.__preset_select = document.createElement("select");
  if (i3.load && i3.load.remembered ? q.each(i3.load.remembered, function(u, f) {
    ua(i3, f, f === i3.preset);
  }) : ua(i3, Vi, false), O.bind(a, "change", function() {
    for (var u = 0; u < i3.__preset_select.length; u++) i3.__preset_select[u].innerHTML = i3.__preset_select[u].value;
    i3.preset = this.value;
  }), e.appendChild(a), e.appendChild(t), e.appendChild(n), e.appendChild(r), e.appendChild(s), Ui) {
    var o = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(ci(i3, "isLocal")) === "true" && l.setAttribute("checked", "checked"), ko(i3, o), O.bind(l, "change", function() {
      i3.useLocalStorage = !i3.useLocalStorage, ko(i3, o);
    });
  }
  var d = document.getElementById("dg-new-constructor");
  O.bind(d, "keydown", function(u) {
    u.metaKey && (u.which === 67 || u.keyCode === 67) && Ni.hide();
  }), O.bind(t, "click", function() {
    d.innerHTML = JSON.stringify(i3.getSaveObject(), void 0, 2), Ni.show(), d.focus(), d.select();
  }), O.bind(n, "click", function() {
    i3.save();
  }), O.bind(r, "click", function() {
    var u = prompt("Enter a new preset name.");
    u && i3.saveAs(u);
  }), O.bind(s, "click", function() {
    i3.revert();
  });
}
function wm(i3) {
  var e = void 0;
  i3.__resize_handle = document.createElement("div"), q.extend(i3.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(s) {
    return s.preventDefault(), i3.width += e - s.clientX, i3.onResize(), e = s.clientX, false;
  }
  function n() {
    O.removeClass(i3.__closeButton, et.CLASS_DRAG), O.unbind(window, "mousemove", t), O.unbind(window, "mouseup", n);
  }
  function r(s) {
    return s.preventDefault(), e = s.clientX, O.addClass(i3.__closeButton, et.CLASS_DRAG), O.bind(window, "mousemove", t), O.bind(window, "mouseup", n), false;
  }
  O.bind(i3.__resize_handle, "mousedown", r), O.bind(i3.__closeButton, "mousedown", r), i3.domElement.insertBefore(i3.__resize_handle, i3.domElement.firstElementChild);
}
function ha(i3, e) {
  i3.domElement.style.width = e + "px", i3.__save_row && i3.autoPlace && (i3.__save_row.style.width = e + "px"), i3.__closeButton && (i3.__closeButton.style.width = e + "px");
}
function Sr(i3, e) {
  var t = {};
  return q.each(i3.__rememberedObjects, function(n, r) {
    var s = {}, a = i3.__rememberedObjectIndecesToControllers[r];
    q.each(a, function(o, l) {
      s[l] = e ? o.initialValue : o.getValue();
    }), t[r] = s;
  }), t;
}
function Rm(i3) {
  for (var e = 0; e < i3.__preset_select.length; e++) i3.__preset_select[e].value === i3.preset && (i3.__preset_select.selectedIndex = e);
}
function wl(i3) {
  i3.length !== 0 && Mm.call(window, function() {
    wl(i3);
  }), q.each(i3, function(e) {
    e.updateDisplay();
  });
}
var Cm = et;
const Rl = new eu(), Ei = new Ot(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
Ei.position.z = 1.5;
const qi = new qp();
qi.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(qi.domElement);
window.addEventListener("resize", () => {
  Ei.aspect = window.innerWidth / window.innerHeight, Ei.updateProjectionMatrix(), qi.setSize(window.innerWidth, window.innerHeight);
});
new $p(Ei, qi.domElement);
const Pm = new Mi(), Dm = new ru({ wireframe: true }), Nr = new Zt(Pm, Dm);
Rl.add(Nr);
const Cl = new Ii();
document.body.appendChild(Cl.dom);
const Pl = new Cm(), Fr = Pl.addFolder("Cube");
Fr.add(Nr.rotation, "x", 0, Math.PI * 2);
Fr.add(Nr.rotation, "y", 0, Math.PI * 2);
Fr.add(Nr.rotation, "z", 0, Math.PI * 2);
Fr.open();
const Dl = Pl.addFolder("Camera");
Dl.add(Ei.position, "z", 0, 20);
Dl.open();
function Ll() {
  requestAnimationFrame(Ll), qi.render(Rl, Ei), Cl.update();
}
Ll();
