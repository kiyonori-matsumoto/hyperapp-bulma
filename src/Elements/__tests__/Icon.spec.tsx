import 'jest';
import { h, app } from 'hyperapp';
import { Icon } from '../Icon';

let actions: any;
let state: any;

beforeEach(() => {
  document.body.innerHTML = '';
  actions = {
    up: () => (state: any) => ({ count: state.count + 1 }),
  };
  state = {
    count: 0,
  };
  jest.useFakeTimers();
});

test('can create', () => {
  const view = () => <Icon name="fas fa-ban" />;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<span class="icon"><i class="fas fa-ban"></i></span>'
  );
});

test('all props', () => {
  const view = () => <Icon size="large" color="info" name="fas fa-ban" />;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<span class="icon is-large has-text-info"><i class="fas fa-ban"></i></span>'
  );
});
