import 'jest';
import { h, app } from 'hyperapp';
import { Select } from '../Select';

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
  const view = () => <Select>test</Select>;
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="select"><select>test</select></div>'
  );
});

test('all props', () => {
  const view = (state: any, actions: any) => (
    <Select
      isLoading
      isRounded
      isHovered
      isFocused
      isMultiple
      color="danger"
      size="small"
      id="foo"
      onselect={actions.up}
      value="3"
    >
      <option value="3">3</option>
    </Select>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  const item = document.getElementById('foo') as HTMLSelectElement;
  expect(item).not.toBeNull();
  expect(item.tagName).toEqual('SELECT');
  expect(item.value).toEqual('3');

  'select is-multiple is-rounded is-hovered is-focused is-loading is-danger is-small'
    .split(' ')
    .forEach(cls => {
      expect(item.parentElement!.classList.contains(cls)).toBeTruthy();
    });
  expect(item.parentElement!.tagName).toEqual('DIV');
});
