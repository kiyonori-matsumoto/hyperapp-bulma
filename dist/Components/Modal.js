"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hyperapp_1 = require("hyperapp");
var classcat_1 = __importDefault(require("classcat"));
var util_1 = require("../util");
exports.Modal = function (_a, child) {
    var isActive = _a.isActive, closeButtonSize = _a.closeButtonSize, onCloseButtonClick = _a.onCloseButtonClick;
    return (hyperapp_1.h("div", { class: classcat_1.default(['modal', util_1.tc({ isActive: isActive })]) },
        hyperapp_1.h("div", { class: "modal-background" }),
        hyperapp_1.h("div", { class: "modal-content" }, child),
        hyperapp_1.h("button", { class: classcat_1.default(['modal-close', util_1.isStr(closeButtonSize)]), onclick: onCloseButtonClick, "aria-label": "close" })));
};
