import React, { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, backgroundColor, className }) => {
  return (
    <div className={`max-w-7xl mx-auto main-container ${className}`} style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Container;
