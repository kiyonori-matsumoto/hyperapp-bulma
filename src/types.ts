import { VNode } from 'hyperapp';

// hyperapp types
export type Children = Array<VNode | string>;

// bulma types
export type Color =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | '';

export type Shade =
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis'
  | '';

export type Size = 'small' | '' | 'medium' | 'large';
