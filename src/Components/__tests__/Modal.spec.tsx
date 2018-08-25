import 'jest';
import { h, app } from 'hyperapp';
import { Modal } from '../Modal';

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
  const view = () => <Modal>test</Modal>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="modal"><div class="modal-background"></div><div class="modal-content">test</div><button class="modal-close" aria-label="close"></button></div>'
  );
});

test('can handle close button click', () => {
  const view = (_: any, a: any) => (
    <Modal
      isActive
      closeButtonSize="large"
      onCloseButtonClick={() => a.up()}
      foo="bar"
    >
      test
    </Modal>
  );
  const main = app(state, actions, view, document.body);
  jest.runAllTimers();
  const button = document.body.getElementsByTagName('button')[0];
  button.click();
  jest.runAllTimers();
  expect(main.state()).toEqual({ count: 1 });
  expect(
    document.body
      .getElementsByClassName('modal')[0]
      .classList.contains('is-active')
  ).toBeTruthy();
  expect(
    document.body.getElementsByClassName('modal-content')[0].getAttribute('foo')
  ).toEqual('bar');
  expect(button.classList.contains('is-large')).toBeTruthy();
});
