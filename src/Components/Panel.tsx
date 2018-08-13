import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc } from '../util';

export const Panel = ({}, child: Children) => <div class="panel">{child}</div>;

export const PanelHeading = ({}, child: Children) => (
  <p class="panel-heading">{child}</p>
);

export const PanelBlock = (
  { isActive }: { isActive?: boolean },
  child: Children
) => <div class={cc(['panel-block', tc({ isActive })])}>{child}</div>;

export const PanelBlockAnchor = (
  { isActive, ...props }: { isActive?: boolean; [key: string]: any },
  child: Children
) => (
  <a class={cc(['panel-block', tc({ isActive })])} {...props}>
    {child}
  </a>
);

export const PanelBlockLabel = (
  { isActive }: { isActive?: boolean },
  child: Children
) => <label class={cc(['panel-block', tc({ isActive })])}>{child}</label>;

export const PanelTabs = ({}, child: Children) => (
  <p class="panel-tabs">{child}</p>
);
