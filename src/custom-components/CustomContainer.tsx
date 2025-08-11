import type { CustomContainerInterface } from "../types/types";

const CustomContainer = ({
    children,
    className = "",
    style = {},
    ...props
}: CustomContainerInterface) => {
    return (
        <div className={`w-full max-w-4xl ${className} mx-auto`} style={style} {...props}>
            {children}
        </div>
    );
};

export default CustomContainer;