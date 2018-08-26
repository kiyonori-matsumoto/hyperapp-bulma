import { Children } from 'hyperapp';
export declare const Select: ({ color, size, isMultiple, isRounded, isHovered, isFocused, isLoading, ...props }: {
    [key: string]: any;
    isMultiple?: boolean | undefined;
    isRounded?: boolean | undefined;
    isHovered?: boolean | undefined;
    isFocused?: boolean | undefined;
    isLoading?: boolean | undefined;
    color?: "" | "link" | "success" | "primary" | "info" | "warning" | "danger" | "white" | "light" | "dark" | "black" | undefined;
    size?: "" | "small" | "medium" | "large" | undefined;
}, child: Children) => JSX.Element;
