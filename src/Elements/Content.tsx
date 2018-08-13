import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { isStr } from '../util';
import { Size } from '../types';

export const Content = (
  {
    size,
    ...props
  }: {
    size?: Size;
    [k: string]: any;
  },
  child: Children
) => (
  <div class={cc(['content', isStr(size)])} {...props}>
    {child}
  </div>
);
