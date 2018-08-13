import { h, Children } from 'hyperapp';

export const Buttons = (props: { [k: string]: any }, child: Children) => (
  <div class="buttons" {...props}>
    {child}
  </div>
);
