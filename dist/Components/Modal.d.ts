import { Children } from 'hyperapp';
export declare const Modal: ({ isActive, closeButtonSize, onCloseButtonClick, }: {
    isActive?: boolean | undefined;
    closeButtonSize?: "" | "small" | "medium" | "large" | undefined;
    onCloseButtonClick?: ((e: MouseEvent) => void) | undefined;
}, child: Children) => JSX.Element;
