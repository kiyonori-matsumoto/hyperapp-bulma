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
exports.Select = function (_a, child) {
    var color = _a.color, size = _a.size, isMultiple = _a.isMultiple, isRounded = _a.isRounded, isHovered = _a.isHovered, isFocused = _a.isFocused, isLoading = _a.isLoading, props = __rest(_a, ["color", "size", "isMultiple", "isRounded", "isHovered", "isFocused", "isLoading"]);
    var classStr = classcat_1.default([
        'select',
        props.class,
        util_1.tc({ isMultiple: isMultiple, isRounded: isRounded, isHovered: isHovered, isFocused: isFocused, isLoading: isLoading }),
        util_1.isStr(color),
        util_1.isStr(size),
    ]);
    delete props.class;
    return (hyperapp_1.h("div", { class: classStr },
        hyperapp_1.h("select", __assign({}, props), child)));
};
