"use client";

import { links } from "@/constants/preFooterData";
import useFooterVisible from "@/hooks/use-footer-visible";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Container from "../ui/Container";

const Prefooter = () => {
  const t = useTranslations("PreFooter");
  const locale = useLocale();
  const footerVisible = useFooterVisible();

  return (
    <div
      className={`
        ${footerVisible ? "relative" : "fixed bottom-0"}
        z-50 w-full bg-primary transition-all duration-300
      `}
    >
      <Container>
        <ul className="flex content-center justify-between gap-2 whitespace-nowrap py-4 md:grid-cols-3">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={`${locale}${link.link}`}
                className="flex flex-col items-center gap-4 text-white transition duration-300 hover:text-secundary lg:flex-row"
              >
                {<link.icon />}
                <span className="hidden md:flex">{t(link.label)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Prefooter;
