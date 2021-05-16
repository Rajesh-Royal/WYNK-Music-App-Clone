import React, { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const container = ({children}: Props) => {
    return (
        <div className="max-w-7xl mx-auto">{children}</div>
    );
};

export default container;
