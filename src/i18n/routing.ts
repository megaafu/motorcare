import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  localePrefix: 'as-needed',
  defaultLocale: "pt",
  localeDetection: true, 
});
