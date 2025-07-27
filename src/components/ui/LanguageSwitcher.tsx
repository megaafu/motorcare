"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

const languageOptions = [
  { label: "Pt", link: "pt" },
  { label: "En", link: "en" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    const pathWithoutLocale =
      pathname.replace(new RegExp(`^/${locale}`), "") || "/";
    router.push(pathWithoutLocale, { locale: newLocale });
  };

  return (
    <div className="flex gap-5">
      {languageOptions.map((option) => (
        <button
          key={option.link}
          onClick={() => handleChangeLanguage(option.link)}
          className={`flex items-center gap-1 text-sm ${
            locale === option.link
              ? "font-bold text-primary"
              : "text-light-text"
          } hover:text-primary`}
          aria-label={`Switch to ${option.label}`}
        >
          <Image
            width={20}
            height={18}
            src={`/icons/${option.link}.png`}
            alt={`${option.label} flag`}
          />
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
