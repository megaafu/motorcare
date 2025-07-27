import { ReactNode } from "react";

interface TitleNavProps {
  children?: ReactNode;
}
const TitleNav = ({ children }: TitleNavProps) => {
  return <ul className="flex gap-1 font-medium">{children}</ul>;
};

export default TitleNav;
