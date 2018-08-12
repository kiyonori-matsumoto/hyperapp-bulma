import { h } from "hyperapp";
import { Children } from "../types";

export default (props: { [k: string]: any }, child: Children) => (
  <div class="buttons" {...props}>
    {child}
  </div>
);
