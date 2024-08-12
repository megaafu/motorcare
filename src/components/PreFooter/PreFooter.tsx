"use client"
import { links } from '@/constants/preFooterData'
import useScroll from '@/hooks/use-scroll'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import Container from '../ui/Container'

const Prefooter = () => {
  const scroll = useScroll()
  const t = useTranslations("PreFooter")
  const locale = useLocale()
  return (
    <div className={`${scroll > 80 ? "ease-out duration-300 " : "fixed bottom-0 ease-in duration-300"}  " bg-secundary w-full z-50"`} >
      <Container>
        <ul className=" whitespace-nowrap text-ligth content-center  gap-2 py-6 md:grid-cols-3 flex justify-between">
          {links.map((link, index) => {
            return (
              <li key={index} className="flex items-center">
                <Link
                  href={`${locale}${link.link}`}
                  className="color flex flex-col lg:flex-row items-center gap-4 text-[#969696] transition duration-300 hover:text-white"
                >
                  {<link.icon />}
                  <span className='hidden md:flex'>{t(link.label)}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default Prefooter
