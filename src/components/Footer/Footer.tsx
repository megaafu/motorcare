"use client";
import { links, terms } from "@/constants/footerData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon, Facebook, Instagram, Linkedin } from "../icons/Icons";
import Container from "../ui/Container";
import PagePadding from "../ui/PagePadding";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer
      id="footer"
      className="static bottom-0 left-0 right-0 w-full bg-footer bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Logo and Description */}
            <div className="flex flex-col text-white gap-y-4 md:col-span-2 lg:col-span-1">
              <Image
                width={300}
                height={100}
                src="/images/footer-logo.png"
                alt="MotorCare"
                className="h-14 w-auto object-contain object-left"
              />
              <p className="text-sm md:text-base">{t("description")}</p>
            </div>

            {/* Working Hours */}
            <div className="md:col-span-1">
              <h4 className="text-lg md:text-xl font-bold text-white">{t("working_hour")}</h4>
              <ul className="text-ligth mt-4 md:mt-6 text-gray-300 text-sm md:text-base">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="mt-2">
                      <span className="flex gap-2 items-center">
                        <ClockIcon className="w-4 h-4 flex-shrink-0" />
                        {`${t(link)}: `}
                        {link == "mon-fri" ? "7:30 - 16:30" : link == "sat" ? `7:30 - 11:30 (${t("maputo")})` : t("closed")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg md:text-xl font-bold text-white">
                {t("links")}
              </h4>
              <ul className="text-ligth mt-4 md:mt-6 text-gray-300 text-sm md:text-base">
                {terms.map((term, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      {term == "policy" ? (
                        <a
                          href="/files/policy.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {t(term)}
                        </a>
                      ) : (
                        <Link href={`/${term}`} replace={true}>
                          {t(term)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
              
              {/* Social Media - Desktop */}
              <div className="hidden md:flex w-full gap-4 pt-4 text-white">
                <a
                  href="http://www.linkedin.com/company/nissan-mo�ambique"
                  className="hover:text-secundary"
                  aria-label="LinkedIn"
                >
                  <Linkedin  />
                </a>
                <a
                  href="http://www.facebook.com/motorcaremz"
                  className="hover:text-secundary"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="http://www.instagram.com/motorcaremz"
                  className="hover:text-secundary"
                  aria-label="Instagram"
                >
                  <Instagram  />
                </a>
              </div>
            </div>

            {/* Social Media - Mobile */}
            <div className="flex justify-center gap-4 text-white md:hidden col-span-full pt-4 border-t border-gray-600">
              <a
                href="http://www.linkedin.com/company/nissan-mo�ambique"
                className="hover:text-secundary"
                aria-label="LinkedIn"
              >
                <Linkedin  />
              </a>
              <a
                href="http://www.facebook.com/motorcaremz"
                className="hover:text-secundary"
                aria-label="Facebook"
              >
                <Facebook  />
              </a>
              <a
                href="http://www.instagram.com/motorcaremz"
                className="hover:text-secundary"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </PagePadding>
      </Container>
    </footer>
  );
};

export default Footer;