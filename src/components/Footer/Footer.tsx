import { links, terms } from '@/constants/footerData'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from '../icons/Icons'
import Container from '../ui/Container'
import PagePadding from '../ui/PagePadding'

const footer = () => {
  return (
    <div className=" w-full bg-footer bg-cover bg-center bg-no-repeat">
      <Container>
        <PagePadding>
          <div className="flex justify-between gap-x-8 gap-y-4 ">
            <div className=" place-self-center">
              <Image
                width="0"
                height="0"
                src="/images/footer-logo.svg"
                alt="MotorCare"
                className="h-full w-full"
              />
            </div>
            <div className="">
              <h4 className="text-3xl font-bold text-white">Useful Links</h4>
              <ul className="text-ligth mt-8 text-gray-300 md:text-lg lg:text-xl">
                {links.map((link, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <a href="#">{link}</a>
                    </li>
                  )
                })}
              </ul>
              <div className="flex w-full gap-4 pt-4 text-white ">
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
              <h4 className="text-3xl font-bold text-white">Legal Terms</h4>
              <ul className="text-ligth mt-8 text-gray-300 md:text-lg lg:text-xl">
                {terms.map((term, index) => {
                  return (
                    <li key={index} className="mt-2 hover:text-secundary">
                      <a href="#">{term}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </PagePadding>
      </Container>
    </div>
  )
}

export default footer
