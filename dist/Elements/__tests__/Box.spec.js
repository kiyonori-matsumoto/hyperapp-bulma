"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var hyperapp_1 = require("hyperapp");
var Box_1 = require("../Box");
var actions;
var state;
beforeEach(function () {
    document.body.innerHTML = '';
    actions = {
        up: function () { return function (state) { return ({ count: state.count + 1 }); }; },
    };
    state = {
        count: 0,
    };
    jest.useFakeTimers();
});
test('can create', function () {
    var view = function () { return hyperapp_1.h(Box_1.Box, null, "test"); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    expect(document.body.innerHTML).toEqual('<div class="box">test</div>');
});