import "jest";
import { h, app } from "hyperapp";
import Content from "../Content";

let actions: any;
let state: any;

beforeEach(() => {
  document.body.innerHTML = "";
  actions = {
    up: () => (state: any) => ({ count: state.count + 1 }),
  };
  state = {
    count: 0,
  };
  jest.useFakeTimers();
});

test("can create", () => {
  const view = () => <Content>test</Content>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual('<div class="content">test</div>');
});

test("all props", () => {
  const view = () => <Content size="small">test</Content>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="content is-small">test</div>'
  );
});
