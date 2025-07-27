import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Prefooter from "@/components/PreFooter/PreFooter";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import Provider from "@/lib/util/provider";
import '../globals.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const nissan = localFont({
  src: [
    {
      path: "../../../public/fonts/Nissan Font/Nissan Brand Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Nissan Font/Nissan Brand Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Nissan Font/Nissan Brand Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-nissan",
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    notFound();
  }

  return (
    <Provider>
      <html className={`${nissan.variable} font-sans`} lang={locale}>
        <body >
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
          <Header />
          <main>{children}</main>
          <Prefooter />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  </Provider>
    
  );
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}