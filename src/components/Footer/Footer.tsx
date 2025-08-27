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
      className=" static bottom-0 left-0 right-0 w-full bg-footer bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <PagePadding>
          <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 lg:flex-nowrap">
            <div className="hidden md:flex flex-col text-white gap-y-6 max-w-lg">
              <Image
                width="1080"
                height="1080"
                src="/images/footer-logo.png"
                alt="MotorCare"
                className=" h-16 w-auto object-contain object-left"
              />
              <p>{t("description")}</p>
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-white">{t("working_hour")}</h4>
              <ul className="text-ligth mt-8 text-gray-300 ">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="mt-2 ">
                      <span className="flex gap-2 items-center">
                        <ClockIcon />
                        {`${t(link)}: `}
                        {link == "mon-fri" ? "7:30 - 16:30" : t("closed")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-white">
                {t("links")}
              </h4>
              <ul className="text-ligth mt-8 text-gray-300 ">
                {terms.map((term, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      {term == "policy" ? <a href="/files/policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(term)}
                      </a> :
                        <Link href={`/${term}`} replace={true}>
                          {t(term)}
                        </Link>
                      }
                    </li>
                  );
                })}
              </ul>
              <div className="hidden w-full gap-4 pt-4 text-white lg:flex ">
                <a
                  href="http://www.linkedin.com/company/nissan-moçambique"
                  className="hover:text-secundary"
                >
                  <Linkedin />
                </a>
                <a
                  href="http://www.facebook.com/motorcaremz"
                  className="hover:text-secundary"
                >
                  <Facebook />
                </a>
                <a
                  href="http://www.instagram.com/motorcaremz"
                  className="hover:text-secundary"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className=" flex w-full justify-center gap-2 text-white sm:hidden  ">
              <a
                href="http://www.linkedin.com/company/nissan-moçambique"
                className="hover:text-secundary"
              >
                <Linkedin />
              </a>
              <a
                href="http://www.facebook.com/motorcaremz"
                className="hover:text-secundary"
              >
                <Facebook />
              </a>
              <a
                href="http://www.instagram.com/motorcaremz"
                className="hover:text-secundary"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </PagePadding>
      </Container>
    </footer >
  );
};

export default Footer;
