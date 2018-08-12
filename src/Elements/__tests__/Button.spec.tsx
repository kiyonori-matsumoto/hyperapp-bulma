import "jest";
import { h, app } from "hyperapp";
import Button from "../Button";

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
  const view = () => <Button>test</Button>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<button class="button">test</button>'
  );
});

test("all props", () => {
  const view = (state: any, actions: any) => (
    <Button
      isFullwidth
      isInverted
      isLoading
      isOutlined
      isRounded
      isStatic
      color="danger"
      size="small"
      id="foo"
      onclick={actions.up}
    >
      {state.count}
    </Button>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  const item = document.getElementById("foo");
  expect(item).not.toBeNull();
  expect(item!.tagName).toEqual("BUTTON");
  "is-fullwidth is-inverted is-loading is-outlined is-rounded is-static is-danger is-small"
    .split(" ")
    .forEach(cls => {
      expect(item!.classList.contains(cls)).toBeTruthy();
    });
});
