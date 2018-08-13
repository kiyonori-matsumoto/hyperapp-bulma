"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tc(obj) {
    var value = {};
    for (var k in obj) {
        value[k.replace(/[A-Z]/, function (s) { return "-" + s.toLowerCase(); })] = obj[k];
    }
    return value;
}
exports.tc = tc;
function isStr(color) {
    return color ? "is-" + color : "";
}
exports.isStr = isStr;
