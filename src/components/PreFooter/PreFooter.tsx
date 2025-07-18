'use client'

import { links } from '@/constants/preFooterData'
import useFooterVisible from '@/hooks/use-footer-visible'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import Container from '../ui/Container'

const Prefooter = () => {
  const t = useTranslations("PreFooter")
  const locale = useLocale()
  const footerVisible = useFooterVisible()

  return (
    <div
      className={`
        ${footerVisible ? "relative" : "fixed bottom-0"}
        bg-primary w-full z-50 transition-all duration-300
      `}
    >
      <Container>
        <ul className="whitespace-nowrap content-center gap-2 py-4 md:grid-cols-3 flex justify-between">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={`${locale}${link.link}`}
                className="flex flex-col lg:flex-row items-center gap-4 text-white transition duration-300 hover:text-secundary"
              >
                {<link.icon />}
                <span className="hidden md:flex">{t(link.label)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Prefooter

