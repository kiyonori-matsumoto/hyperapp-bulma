import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc } from '../util';

export const Menu = ({}, child: Children) => (
  <aside class="menu">{child}</aside>
);

export const MenuLabel = ({}, child: Children) => (
  <p class="menu-label">{child}</p>
);

export const MenuList = ({}, child: Children) => (
  <ul class="menu-list">{child}</ul>
);

export const MenuListItem = (
  { isActive, ...props }: { isActive?: boolean; [key: string]: any },
  child: Children
) => (
  <li>
    <a class={cc([tc({ isActive })])} {...props}>
      {child}
    </a>
  </li>
);
