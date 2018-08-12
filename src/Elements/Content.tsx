import { h } from "hyperapp";
import cc from "classcat";
import { isStr } from "../util";
import { Children, Size } from "../types";

export default (
  {
    size,
    ...props
  }: {
    size?: Size;
    [k: string]: any;
  },
  child: Children
) => (
  <div class={cc(["content", isStr(size)])} {...props}>
    {child}
  </div>
);
