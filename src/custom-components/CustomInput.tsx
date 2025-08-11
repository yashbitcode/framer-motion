import type { CustomInputInterface } from "../types/types";

const CustomInput = ({
    type = "text",
    className = "",
    style = {}, 
    ...props
}: CustomInputInterface) => {
    return (
        <input type={type} style={style} className={`rounded-md shadow-primary outline-0 px-3 py-1.5 ${className}`} {...props}  />
    );
};

export default CustomInput;