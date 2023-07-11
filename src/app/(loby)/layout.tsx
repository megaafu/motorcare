import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Prefooter from '@/components/PreFooter/PreFooter'
import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Prefooter />
        <Footer />
      </body>
    </html>
  )
}
