import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { Color, Size } from '../types';
import { isStr, tc } from '../util';

export const Select = (
  {
    color,
    size,
    isMultiple,
    isRounded,
    isHovered,
    isFocused,
    isLoading,
    ...props
  }: {
    isMultiple?: boolean;
    isRounded?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isLoading?: boolean;
    color?: Color;
    size?: Size;
    [key: string]: any;
  },
  child: Children
) => {
  const classStr = cc([
    'select',
    props.class,
    tc({ isMultiple, isRounded, isHovered, isFocused, isLoading }),
    isStr(color),
    isStr(size),
  ]);
  delete props.class;
  return (
    <div class={classStr}>
      <select {...props}>{child}</select>
    </div>
  );
};
