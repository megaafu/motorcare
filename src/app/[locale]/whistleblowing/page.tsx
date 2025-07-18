"use client"
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const WhistleBlowing = () => {
  const t = useTranslations('Whistleblowing')

  return (
    <main>
      <Container>
        <PagePadding>
          <section className='grid h-screen  content-center'>
            <h4 className='text-4xl text-center'> {t("whistleblowing")} </h4>
            <div className='bg-center bg-primary h-1 w-[12vw] mx-auto'></div>
            <p className=' max-w-4xl mx-auto text-center mt-4' dangerouslySetInnerHTML={{ __html: t("description").replace(/\n/g, '<br/>') }}>
            </p>
            <Link
              href="https://kjaergroup.integrityline.com/frontpage"
              target='blank'
              className=' mt-8 bg-primary py-3 px-6 text-white mx-auto'>
              {t("report")}
            </Link>
          </section>

        </PagePadding>
      </Container>
    </main>
  )
}

export default WhistleBlowing
