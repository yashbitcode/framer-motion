import type { CSSProperties } from "react";
import type React from "react";

export const CustomContainer = ({
    children,
    className = "",
    style = {},
}: {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}) => {
    return (
        <div className={`w-full max-w-4xl ${className} mx-auto`} style={style}>
            {children}
        </div>
    );
};
