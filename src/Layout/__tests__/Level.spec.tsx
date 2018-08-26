import 'jest';
import { h, app } from 'hyperapp';
import { Level, LevelLeft, LevelRight, LevelItem } from '../Level';

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
    <Level>
      <LevelLeft>
        <LevelItem>a</LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem>b</LevelItem>
      </LevelRight>
    </Level>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="level"><div class="level-left"><div class="level-item">a</div></div><div class="level-right"><div class="level-item">b</div></div></div>'
  );
});

test('all props', () => {
  const view = () => (
    <Level isMobile>
      <LevelLeft>
        <LevelItem>a</LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem>b</LevelItem>
      </LevelRight>
    </Level>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="level is-mobile"><div class="level-left"><div class="level-item">a</div></div><div class="level-right"><div class="level-item">b</div></div></div>'
  );
});
