import { VNode } from "hyperapp";

// hyperapp types
export type Children = Array<VNode | string>;

// bulma types
export type Color =
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "white"
  | "light"
  | "dark"
  | "black"
  | "text"
  | "";

export type Size = "small" | "" | "medium" | "large";
