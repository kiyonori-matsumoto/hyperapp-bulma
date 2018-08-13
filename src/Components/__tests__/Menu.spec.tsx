import 'jest';
import { h, app } from 'hyperapp';
import { Menu, MenuLabel, MenuListItem, MenuList } from '../Menu';

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
  const view = () => (
    <Menu>
      <MenuLabel>aaa</MenuLabel>
      <MenuList>
        <MenuListItem isActive>foo</MenuListItem>
        <MenuListItem name="b">bar</MenuListItem>
      </MenuList>
    </Menu>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<aside class="menu"><p class="menu-label">aaa</p><ul class="menu-list"><li><a class="is-active">foo</a></li><li><a class="" name="b">bar</a></li></ul></aside>'
  );
});
