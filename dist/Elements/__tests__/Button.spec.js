"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var hyperapp_1 = require("hyperapp");
var Button_1 = require("../Button");
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
    var view = function () { return hyperapp_1.h(Button_1.Button, null, "test"); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    expect(document.body.innerHTML).toEqual('<button class="button">test</button>');
});
test('all props', function () {
    var view = function (state, actions) { return (hyperapp_1.h(Button_1.Button, { isFullwidth: true, isInverted: true, isLoading: true, isOutlined: true, isRounded: true, isStatic: true, color: "danger", size: "small", id: "foo", onclick: actions.up }, state.count)); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    var item = document.getElementById('foo');
    expect(item).not.toBeNull();
    expect(item.tagName).toEqual('BUTTON');
    'is-fullwidth is-inverted is-loading is-outlined is-rounded is-static is-danger is-small'
        .split(' ')
        .forEach(function (cls) {
        expect(item.classList.contains(cls)).toBeTruthy();
    });
});
