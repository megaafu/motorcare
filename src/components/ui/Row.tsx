import { cn } from "@/lib/util/util";
import React from "react";

interface RowProps {
  className?: string;
  children: React.ReactNode;
}
const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={cn("grid gap-12", className)}>{children}</div>;
};
export default Row;
