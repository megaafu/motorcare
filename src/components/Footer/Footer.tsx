"use client";
import { links, terms } from "@/constants/footerData";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "../icons/Icons";
import Container from "../ui/Container";
import PagePadding from "../ui/PagePadding";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer
      id="footer"
      className=" static bottom-0 left-0 right-0 w-full bg-footer bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <PagePadding>
          <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 lg:flex-nowrap">
            <div className="hidden  md:flex lg:place-self-center">
              <Image
                width="1080"
                height="1080"
                src="/images/footer-logo.png"
                alt="MotorCare"
                className=" h-20 w-auto"
              />
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-white">{t("links")}</h4>
              <ul className="text-ligth mt-8 text-gray-300 ">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <Link href={`${locale}/${link}`} replace={true}>
                        {t(link)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-white">
                {t("legal_terms")}
              </h4>
              <ul className="text-ligth mt-8 text-gray-300 ">
                {terms.map((term, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <Link href={`${locale}/about`} replace={true}>
                        {t(term)}
                      </Link>
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
    </footer>
  );
};

export default Footer;
