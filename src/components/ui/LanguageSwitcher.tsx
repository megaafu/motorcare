"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

const languageOptions = [
  { label: "Pt", value: "pt", flag: "/icons/mz.png" },
  { label: "En", value: "en", flag: "/icons/en.png" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChangeLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(pathWithoutLocale, { locale: newLocale });
  };

  return (
    <div className="flex gap-5">
      {languageOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleChangeLanguage(option.value)}
          className={`flex items-center gap-1 text-sm ${locale === option.value
            ? "font-bold text-primary"
            : "text-light-text"
            } hover:text-primary transition-colors`}
          aria-label={`Change language to ${option.label}`}
          aria-pressed={locale === option.value}
        >
          <Image
            width={20}
            height={18}
            src={option.flag}
            alt={`${option.label} flag`}
            className="object-contain"
          />
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
