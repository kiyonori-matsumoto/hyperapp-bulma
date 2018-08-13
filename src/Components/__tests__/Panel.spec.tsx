import 'jest';
import { h, app } from 'hyperapp';
import { Panel, PanelHeading, PanelBlockAnchor } from '../Panel';

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
    <Panel>
      <PanelHeading>test</PanelHeading>
      <PanelBlockAnchor isActive>aaa</PanelBlockAnchor>
    </Panel>
  );
  app(state, actions, view, document.body);
  jest.runAllTimers();
  expect(document.body.innerHTML).toEqual(
    '<div class="panel"><p class="panel-heading">test</p><a class="panel-block is-active">aaa</a></div>'
  );
});
