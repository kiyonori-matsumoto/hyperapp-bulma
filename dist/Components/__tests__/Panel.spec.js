"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var hyperapp_1 = require("hyperapp");
var Panel_1 = require("../Panel");
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
    var view = function () { return (hyperapp_1.h(Panel_1.Panel, null,
        hyperapp_1.h(Panel_1.PanelHeading, null, "test"),
        hyperapp_1.h(Panel_1.PanelBlockAnchor, { isActive: true }, "aaa"))); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    expect(document.body.innerHTML).toEqual('<div class="panel"><p class="panel-heading">test</p><a class="panel-block is-active">aaa</a></div>');
});
