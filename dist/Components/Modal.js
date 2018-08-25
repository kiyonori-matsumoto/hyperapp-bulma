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
exports.Modal = function (_a, child) {
    var isActive = _a.isActive, closeButtonSize = _a.closeButtonSize, onCloseButtonClick = _a.onCloseButtonClick, props = __rest(_a, ["isActive", "closeButtonSize", "onCloseButtonClick"]);
    return (hyperapp_1.h("div", { class: classcat_1.default(['modal', util_1.tc({ isActive: isActive })]) },
        hyperapp_1.h("div", { class: "modal-background" }),
        hyperapp_1.h("div", __assign({ class: "modal-content" }, props), child),
        hyperapp_1.h("button", { class: classcat_1.default(['modal-close', util_1.isStr(closeButtonSize)]), onclick: onCloseButtonClick, "aria-label": "close" })));
};
