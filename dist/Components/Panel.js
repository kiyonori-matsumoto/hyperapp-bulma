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
exports.Panel = function (_a, child) { return hyperapp_1.h("div", { class: "panel" }, child); };
exports.PanelHeading = function (_a, child) { return (hyperapp_1.h("p", { class: "panel-heading" }, child)); };
exports.PanelBlock = function (_a, child) {
    var isActive = _a.isActive;
    return hyperapp_1.h("div", { class: classcat_1.default(['panel-block', util_1.tc({ isActive: isActive })]) }, child);
};
exports.PanelBlockAnchor = function (_a, child) {
    var isActive = _a.isActive, props = __rest(_a, ["isActive"]);
    return (hyperapp_1.h("a", __assign({ class: classcat_1.default(['panel-block', util_1.tc({ isActive: isActive })]) }, props), child));
};
exports.PanelBlockLabel = function (_a, child) {
    var isActive = _a.isActive;
    return hyperapp_1.h("label", { class: classcat_1.default(['panel-block', util_1.tc({ isActive: isActive })]) }, child);
};
exports.PanelTabs = function (_a, child) { return (hyperapp_1.h("p", { class: "panel-tabs" }, child)); };
