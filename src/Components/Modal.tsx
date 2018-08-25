import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc, isStr } from '../util';
import { Size } from '../types';

export const Modal = (
  {
    isActive,
    closeButtonSize,
    onCloseButtonClick,
    ...props
  }: {
    isActive?: boolean;
    closeButtonSize?: Size;
    onCloseButtonClick?: (e: MouseEvent) => void;
    [key: string]: any;
  },
  child: Children
) => (
  <div class={cc(['modal', tc({ isActive })])}>
    <div class="modal-background" />
    <div class="modal-content" {...props}>
      {child}
    </div>
    <button
      class={cc(['modal-close', isStr(closeButtonSize)])}
      onclick={onCloseButtonClick}
      aria-label="close"
    />
  </div>
);
