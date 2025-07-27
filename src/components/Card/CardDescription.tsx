import { ReactNode } from "react";

const CardDescription = ({ children }: { children: ReactNode }) => {
  return <div className="mt-2 flex  justify-between">{children}</div>;
};

export default CardDescription;
