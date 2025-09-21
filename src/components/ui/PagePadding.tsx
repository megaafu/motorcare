import { cn } from "@/lib/util/util";
import React from "react";

interface PagePaddingProps {
  className?: string;
  children: React.ReactNode;
}
const PagePadding: React.FC<PagePaddingProps> = ({ children,className }) => {
  return <div className={cn("py-4 md:py-4 lg:py-10", className)}>{children}</div>;
};

export default PagePadding;
