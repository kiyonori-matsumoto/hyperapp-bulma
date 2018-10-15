"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hyperapp_1 = require("hyperapp");
var classcat_1 = __importDefault(require("classcat"));
var util_1 = require("../util");
exports.Message = function (_a, child) {
    var title = _a.title, onCloseButtonClick = _a.onCloseButtonClick, _b = _a.color, color = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? '' : _c;
    return (hyperapp_1.h("article", { class: classcat_1.default(['message', util_1.isStr(size), util_1.isStr(color)]) },
        title && (hyperapp_1.h("div", { class: "message-header" },
            hyperapp_1.h("p", null, title),
            onCloseButtonClick && (hyperapp_1.h("button", { class: "delete", "aria-label": "delete", onclick: onCloseButtonClick })))),
        hyperapp_1.h("div", { class: "message-body" }, child)));
};
