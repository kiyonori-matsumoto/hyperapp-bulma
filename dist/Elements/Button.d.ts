import { Children } from 'hyperapp';
export declare const Button: ({ isLoading, isFullwidth, isOutlined, isInverted, isStatic, isRounded, isHovered, isFocused, isActive, color, size, ...props }: {
    [k: string]: any;
    isLoading?: boolean | undefined;
    isFullwidth?: boolean | undefined;
    isOutlined?: boolean | undefined;
    isInverted?: boolean | undefined;
    isStatic?: boolean | undefined;
    isRounded?: boolean | undefined;
    color?: "" | "link" | "text" | "success" | "primary" | "info" | "warning" | "danger" | "white" | "light" | "dark" | "black" | undefined;
    size?: "" | "small" | "medium" | "large" | undefined;
}, child: Children) => JSX.Element;
