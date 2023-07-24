import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Prefooter from '@/components/PreFooter/PreFooter'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
export default async function RootLayout({
  children,
  params:{locale}

}: {
  children: React.ReactNode,
  params:{locale:string}
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
   
  }
  return (
      <body> 
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <Prefooter />
          <Footer />
        </NextIntlClientProvider> 
      </body>
  )
}
