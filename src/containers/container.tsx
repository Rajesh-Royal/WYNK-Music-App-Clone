import React, { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode,
    backgroundColor?: string
}

const Container:React.FC<ContainerProps> = ({children, backgroundColor}) => {
    console.log(backgroundColor);
    return (
        <div className="max-w-7xl mx-auto" style={{backgroundColor}}>{children}</div>
    );
};

export default Container;
