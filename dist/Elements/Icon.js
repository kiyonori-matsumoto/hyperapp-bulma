"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hyperapp_1 = require("hyperapp");
var classcat_1 = __importDefault(require("classcat"));
var util_1 = require("../util");
exports.Icon = function (_a) {
    var name = _a.name, color = _a.color, size = _a.size;
    return (hyperapp_1.h("span", { class: classcat_1.default(['icon', util_1.isStr(size), util_1.isStr(color, 'has-text-')]) },
        hyperapp_1.h("i", { class: name })));
};
