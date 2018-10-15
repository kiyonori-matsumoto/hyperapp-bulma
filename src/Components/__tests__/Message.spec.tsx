import 'jest';
import { h, app } from 'hyperapp';
import { Message } from '../Message';

let actions: any;
let state: any;

beforeEach(() => {
  document.body.innerHTML = '';
  actions = {
    up: () => (state: any) => ({ count: state.count + 1 }),
    state: () => (state: any) => state,
  };
  state = {
    count: 0,
  };
  jest.useFakeTimers();
});

test('can create', () => {
  const view = () => <Message>test</Message>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<article class="message"><div class="message-body">test</div></article>'
  );
});

test('can handle close button click', () => {
  const view = (_: any, a: any) => (
    <Message
      title="aaa"
      onCloseButtonClick={() => a.up()}
      size="large"
      color="warning"
    >
      test
    </Message>
  );
  const main = app(state, actions, view, document.body);
  jest.runAllTimers();
  const button = document.body.getElementsByTagName('button')[0];
  button.click();
  jest.runAllTimers();
  expect(main.state()).toEqual({ count: 1 });
  expect(
    document.body
      .getElementsByClassName('message')[0]
      .classList.contains('is-large')
  ).toBeTruthy();
  expect(
    document.body
      .getElementsByClassName('message')[0]
      .classList.contains('is-warning')
  ).toBeTruthy();
});
