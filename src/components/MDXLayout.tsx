import type React from "react";
import CustomContainer from "../custom-components/CustomContainer";

const MDXLayout = ({ children }: { children: React.ReactNode }) => {
    return <CustomContainer className="prose">{children}</CustomContainer>;
};

export default MDXLayout;
