"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hyperapp_1 = require("hyperapp");
var classcat_1 = __importDefault(require("classcat"));
var util_1 = require("../util");
exports.Button = function (_a, child) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, _c = _a.isFullwidth, isFullwidth = _c === void 0 ? false : _c, _d = _a.isOutlined, isOutlined = _d === void 0 ? false : _d, _e = _a.isInverted, isInverted = _e === void 0 ? false : _e, _f = _a.isStatic, isStatic = _f === void 0 ? false : _f, _g = _a.isRounded, isRounded = _g === void 0 ? false : _g, _h = _a.isHovered, isHovered = _h === void 0 ? false : _h, _j = _a.isFocused, isFocused = _j === void 0 ? false : _j, _k = _a.isActive, isActive = _k === void 0 ? false : _k, _l = _a.color, color = _l === void 0 ? '' : _l, _m = _a.size, size = _m === void 0 ? '' : _m, props = __rest(_a, ["isLoading", "isFullwidth", "isOutlined", "isInverted", "isStatic", "isRounded", "isHovered", "isFocused", "isActive", "color", "size"]);
    var classStr = classcat_1.default([
        'button',
        props.class,
        util_1.tc({ isLoading: isLoading, isFullwidth: isFullwidth, isOutlined: isOutlined, isInverted: isInverted, isStatic: isStatic, isRounded: isRounded }),
        util_1.isStr(color),
        util_1.isStr(size),
    ]);
    delete props.class;
    return (hyperapp_1.h("button", __assign({ class: classStr }, props), child));
};
