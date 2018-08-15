"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var hyperapp_1 = require("hyperapp");
var Select_1 = require("../Select");
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
    var view = function () { return hyperapp_1.h(Select_1.Select, null, "test"); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    expect(document.body.innerHTML).toEqual('<div class="select"><select>test</select></div>');
});
test('all props', function () {
    var view = function (state, actions) { return (hyperapp_1.h(Select_1.Select, { isLoading: true, isRounded: true, isHovered: true, isFocused: true, isMultiple: true, color: "danger", size: "small", id: "foo", onselect: actions.up, value: "3" },
        hyperapp_1.h("option", { value: "3" }, "3"))); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    var item = document.getElementById('foo');
    expect(item).not.toBeNull();
    expect(item.tagName).toEqual('SELECT');
    expect(item.value).toEqual('3');
    'select is-multiple is-rounded is-hovered is-focused is-loading is-danger is-small'
        .split(' ')
        .forEach(function (cls) {
        expect(item.parentElement.classList.contains(cls)).toBeTruthy();
    });
    expect(item.parentElement.tagName).toEqual('DIV');
});
