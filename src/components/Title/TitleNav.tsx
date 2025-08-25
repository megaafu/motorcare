import { ReactNode } from "react";

interface TitleNavProps {
  children?: ReactNode;
}
const TitleNav = ({ children }: TitleNavProps) => {
  return <ul className="flex font-medium">{children}</ul>;
};

export default TitleNav;
