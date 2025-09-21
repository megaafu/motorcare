import { cn } from "@/lib/util/util";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "container mx-auto px-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
