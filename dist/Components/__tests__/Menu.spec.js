"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var hyperapp_1 = require("hyperapp");
var Menu_1 = require("../Menu");
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
    var view = function () { return (hyperapp_1.h(Menu_1.Menu, null,
        hyperapp_1.h(Menu_1.MenuLabel, null, "aaa"),
        hyperapp_1.h(Menu_1.MenuList, null,
            hyperapp_1.h(Menu_1.MenuListItem, { isActive: true }, "foo"),
            hyperapp_1.h(Menu_1.MenuListItem, { name: "b" }, "bar")))); };
    hyperapp_1.app(state, actions, view, document.body);
    jest.runAllTimers();
    expect(document.body.innerHTML).toEqual('<aside class="menu"><p class="menu-label">aaa</p><ul class="menu-list"><li><a class="is-active">foo</a></li><li><a class="" name="b">bar</a></li></ul></aside>');
});
