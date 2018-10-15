import { h, Children } from 'hyperapp';
import cc from 'classcat';
import { tc, isStr } from '../util';
import { Color, Size } from '../types';

export const Message = (
  {
    title,
    onCloseButtonClick,
    color = '',
    size = '',
  }: {
    title?: string;
    onCloseButtonClick?(): void;
    color?: Color;
    size?: Size;
  },
  child: Children
) => {
  return (
    <article class={cc(['message', isStr(size), isStr(color)])}>
      {title && (
        <div class="message-header">
          <p>{title}</p>
          {onCloseButtonClick && (
            <button
              class="delete"
              aria-label="delete"
              onclick={onCloseButtonClick}
            />
          )}
        </div>
      )}
      <div class="message-body">{child}</div>
    </article>
  );
};
