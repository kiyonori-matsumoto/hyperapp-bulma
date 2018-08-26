"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tc(obj) {
    var value = {};
    for (var k in obj) {
        value[k.replace(/[A-Z]/, function (s) { return '-' + s.toLowerCase(); })] = obj[k];
    }
    return value;
}
exports.tc = tc;
function isStr(str, prefix) {
    if (prefix === void 0) { prefix = 'is-'; }
    return str ? prefix + str : '';
}
exports.isStr = isStr;
