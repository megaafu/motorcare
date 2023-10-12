"use client"
import { links, terms } from '@/constants/footerData';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from '../icons/Icons';
import Container from '../ui/Container';
import PagePadding from '../ui/PagePadding';

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <div className=" static bottom-0 left-0 right-0 w-full bg-footer bg-cover bg-center bg-no-repeat">
      <Container>
        <PagePadding>
          <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 lg:flex-nowrap">
            <div className="hidden  md:flex lg:place-self-center">
              <Image
                width="1080"
                height="1080"
                src="/images/footer-logo.svg"
                alt="MotorCare"
                className="h-full w-full"
              />
            </div>
            <div className="">
              <h4 className="text-xl font-bold text-white">{t('links')}</h4>
              <ul className="text-ligth mt-8 text-gray-300 text-sm">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <a href="#">{t(link)}</a>
                    </li>
                  )
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
            <div className="">
              <h4 className="text-xl font-bold text-white">{t('legal_terms')}</h4>
              <ul className="text-ligth mt-8 text-gray-300 text-sm">
                {terms.map((term, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <a href="#">{t(term)}</a>
                    </li>
                  )
                })}
              </ul>
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
    </div>
  )
}

export default Footer
