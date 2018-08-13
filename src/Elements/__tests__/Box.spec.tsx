import 'jest';
import { h, app } from 'hyperapp';
import { Box } from '../Box';

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
  const view = () => <Box>test</Box>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual('<div class="box">test</div>');
});
