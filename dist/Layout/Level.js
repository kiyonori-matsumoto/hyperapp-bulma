"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hyperapp_1 = require("hyperapp");
var classcat_1 = __importDefault(require("classcat"));
var util_1 = require("../util");
exports.Level = function (_a, children) {
    var isMobile = _a.isMobile;
    return hyperapp_1.h("div", { class: classcat_1.default(['level', util_1.tc({ isMobile: isMobile })]) }, children);
};
exports.LevelLeft = function (_a, children) {
    return hyperapp_1.h("div", { class: "level-left" }, children);
};
exports.LevelRight = function (_a, children) {
    return hyperapp_1.h("div", { class: "level-right" }, children);
};
exports.LevelItem = function (_a, children) {
    return hyperapp_1.h("div", { class: "level-item" }, children);
};
