import React, { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto">{children}</div>
    );
};

export default Container;
