import React, { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
}

const Container: React.FC<ContainerProps> = ({ children, backgroundColor }) => {
  return (
    <div className="max-w-7xl mx-auto main-container" style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Container;
