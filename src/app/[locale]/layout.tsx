import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Prefooter from '@/components/PreFooter/PreFooter'
import React from 'react'
import { hasLocale, NextIntlClientProvider, } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'

const nissan = localFont({
  src: [
    {
      path: '../../../public/fonts/Nissan Font/Nissan Brand Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Nissan Font/Nissan Brand Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Nissan Font/Nissan Brand Bold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nissan',
})



export default async function RootLayout({
  children,
  params

}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale)
  return (
    <html lang={locale} className={`${nissan.variable} font-sans`}>
      <body>
        <NextIntlClientProvider >
          <Header />
          {children}
          <Prefooter />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
