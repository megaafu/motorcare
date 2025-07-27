"use client";
import { cn } from "@/lib/util/util";
import React, { ReactNode } from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-regular hover:bg-accent inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-sm text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
