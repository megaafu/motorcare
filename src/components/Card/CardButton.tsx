import { ReactNode } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const CardButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div className="absolute bottom-5 right-4 md:left-4">
      <PrimaryButton
        className="w-[100%] justify-center lg:w-auto"
        onClick={onClick}
      >
        {children}
      </PrimaryButton>
    </div>
  );
};

export default CardButton;
