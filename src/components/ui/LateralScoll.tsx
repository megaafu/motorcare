"use client";
import { cn } from "@/lib/util/util";
import React from "react";

interface LateralScrollProps {
  className?: string;
  children: React.ReactNode;
}

const LateralScroll: React.FC<LateralScrollProps> = ({ className, children }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="max-w-[100lvw] flex gap-2 md:gap-5 overflow-x-auto "

      >
        {children}
      </div>
    </div>
  );
};

export default LateralScroll;

