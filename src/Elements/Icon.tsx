import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc, isStr } from '../util';
import { Color, Size, Shade } from '../types';

export const Icon = ({
  name,
  color,
  size,
}: {
  name: string;
  color?: Color | Shade;
  size?: Size;
}) => {
  return (
    <span class={cc(['icon', isStr(size), isStr(color, 'has-text-')])}>
      <i class={name} />
    </span>
  );
};
