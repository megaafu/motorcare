"use client";

import React from "react";
interface TitleLabelProps {
  label: string;
}

const TitleLabel: React.FC<TitleLabelProps> = ({ label }) => {
  return (
    <h2 className="log:font-medium w-full whitespace-nowrap text-xl font-bold text-primary lg:w-auto lg:font-normal">
      {label}
    </h2>
  );
};

export default TitleLabel;
