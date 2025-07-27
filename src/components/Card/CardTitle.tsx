import { ReactNode } from "react";

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="line-clamp-1 text-lg font-bold">{children}</h3>;
};

export default CardTitle;
