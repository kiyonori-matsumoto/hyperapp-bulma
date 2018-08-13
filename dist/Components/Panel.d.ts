import { Children } from 'hyperapp';
export declare const Panel: ({}: {}, child: Children) => JSX.Element;
export declare const PanelHeading: ({}: {}, child: Children) => JSX.Element;
export declare const PanelBlock: ({ isActive }: {
    isActive?: boolean | undefined;
}, child: Children) => JSX.Element;
export declare const PanelBlockAnchor: ({ isActive, ...props }: {
    [key: string]: any;
    isActive?: boolean | undefined;
}, child: Children) => JSX.Element;
export declare const PanelBlockLabel: ({ isActive }: {
    isActive?: boolean | undefined;
}, child: Children) => JSX.Element;
export declare const PanelTabs: ({}: {}, child: Children) => JSX.Element;
