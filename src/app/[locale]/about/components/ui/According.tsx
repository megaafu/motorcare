"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { AllAcording } from "../../constants/acordings";
import Icon from "./Icon";

const CustomAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };

  const t = useTranslations("About");
  return (
    <div>
      {AllAcording.acordings.map((acording) => (
        <div
          key={acording.id}
          className={`mb-4 bg-sky-100 px-8 py-5 transition-all duration-300 ${
            open === acording.id ? "max-h-50" : "max-h-20"
          } overflow-hidden`}
        >
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => handleOpen(acording.id)}
          >
            <div className="text-bold text-lg text-black">
              {t(acording.title)}
            </div>
            <Icon id={0} open={open === acording.id} />
          </div>
          {open === acording.id && (
            <div className="py-4 text-sm text-light-text">
              <ul className="flex list-disc flex-col gap-2 pl-4">
                {acording.description.map((description, index) => (
                  <li key={index}>{t(description)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CustomAccordion;
