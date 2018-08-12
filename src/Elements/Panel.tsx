import { h, Children } from 'hyperapp';

export default ({}, child: Children) => <div class="panel">{child}</div>;

export const PanelHeading = ({}, child: Children) => (
  <p class="panel-heading">{child}</p>
);

export const PanelBlock = ({}, child: Children) => (
  <div class="panel-block">{child}</div>
);

export const PanelBlockAnchor = ({}, child: Children) => (
  <a class="panel-block">{child}</a>
);

export const PanelBlockLabel = ({}, child: Children) => (
  <label class="panel-block">{child}</label>
);

export const PanelTabs = ({}, child: Children) => (
  <p class="panel-tabs">{child}</p>
);
