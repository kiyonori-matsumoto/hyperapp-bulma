import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc } from '../util';

export const Level = (
  { isMobile }: { isMobile?: boolean },
  children: Children
) => {
  return <div class={cc(['level', tc({ isMobile })])}>{children}</div>;
};

export const LevelLeft = ({}, children: Children) => {
  return <div class="level-left">{children}</div>;
};

export const LevelRight = ({}, children: Children) => {
  return <div class="level-right">{children}</div>;
};

export const LevelItem = ({}, children: Children) => {
  return <div class="level-item">{children}</div>;
};
