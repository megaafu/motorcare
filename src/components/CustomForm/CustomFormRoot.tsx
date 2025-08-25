import { ReactNode } from "react";
interface CustomFormProps {
  children: ReactNode;
}
const CustomFormRoot = ({ children }: CustomFormProps) => {
  return <div className="space-y-5">{children}</div>;
};

export default CustomFormRoot;
