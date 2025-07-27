import { cn } from "@/lib/util/util";
import { ReactNode } from "react";
interface CardProps {
  className?: string;
  children: ReactNode;
}
const CardRoot = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-[80vw] rounded-lg border border-gray-200 shadow md:w-[44vw] lg:aspect-auto lg:w-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardRoot;
