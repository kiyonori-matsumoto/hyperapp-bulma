import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc, isStr } from '../util';
import { Color, Size } from '../types';

export const Button = (
  {
    isLoading = false,
    isFullwidth = false,
    isOutlined = false,
    isInverted = false,
    isStatic = false,
    isRounded = false,
    isHovered = false,
    isFocused = false,
    isActive = false,
    color = '',
    size = '',
    ...props
  }: {
    isLoading?: boolean;
    isFullwidth?: boolean;
    isOutlined?: boolean;
    isInverted?: boolean;
    isStatic?: boolean;
    isRounded?: boolean;
    color?: Color | 'text';
    size?: Size;
    [k: string]: any;
  },
  child: Children
) => {
  const classStr = cc([
    'button',
    props.class,
    tc({ isLoading, isFullwidth, isOutlined, isInverted, isStatic, isRounded }),
    isStr(color),
    isStr(size),
  ]);
  delete props.class;
  return (
    <button class={classStr} {...props}>
      {child}
    </button>
  );
};
