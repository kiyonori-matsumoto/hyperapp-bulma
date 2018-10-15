import { Children } from 'hyperapp';
export declare const Message: ({ title, onCloseButtonClick, color, size, }: {
    title?: string | undefined;
    color?: "" | "link" | "success" | "primary" | "info" | "warning" | "danger" | "white" | "light" | "dark" | "black" | undefined;
    size?: "" | "small" | "medium" | "large" | undefined;
}, child: Children) => JSX.Element;
