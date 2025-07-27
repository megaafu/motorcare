"use client"

import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { AboutMenu, HistoryMenu, IsoMenu } from "@/constants/menuData";
import Image from "next/image";
import { History, Holding, Iso } from "./constants/data";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const CustomAccording = dynamic(() => import("./components/ui/According"), {
  ssr: false,
});

const CustomTimeLine = dynamic(() => import("./components/ui/CustomTimeLine"), {
  ssr: false,
});

const NavBrands = dynamic(() => import("./components/NavBrands"), {
  ssr: false,
});


export default  function About() {
  try{
 const t =  useTranslations("About");
  return (
    <main>
      {/* Hero section */}
      <div className="h-[65vh] w-full bg-about-hero bg-cover bg-center bg-no-repeat"></div>

      <Container>
        {/* Holding Info */}
        <PagePadding>
          <Title.Root>
            <Title.Label label={t(AboutMenu.label)} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <div>
              <Paragraph>{t(Holding.info)}</Paragraph>
            </div>
            <div className="hidden w-full items-center justify-center lg:flex">
              <Image
                width={1000}
                height={1000}
                className="h-full w-full rounded-2xl"
                src="/images/about.JPG"
                alt="img"
              />
            </div>
          </Row>
        </PagePadding>

        {/* According Section */}
        <PagePadding>
          <Row className="lg:grid-cols-2">
            <div className=" hidden w-full lg:relative lg:flex lg:h-[440px] ">
              {/* Image cards */}
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/bg-about.JPG"
                className=" shadow-blue-gray-900/50 absolute right-0  top-0 z-0 h-[240px] w-[380px] rounded-3xl border opacity-80 shadow-xl"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/about.JPG"
                className=" shadow-blue-gray-900/50 absolute bottom-32  left-0  h-[240px] w-[380px] rounded-3xl border opacity-90 shadow-xl"
              />
              <Image
                width={1000}
                height={1000}
                alt="img"
                src="/images/bg-about.JPG"
                className=" shadow-blue-gray-900/50 absolute bottom-0  right-16  h-[240px] w-[380px] rounded-3xl border shadow-xl"
              />
            </div>
            <div className="">
              <CustomAccording />
            </div>
          </Row>
        </PagePadding>

        {/* NavBrands Section */}
        <NavBrands />

        {/* History Section */}
        <PagePadding>
          <div id="Our History" className="flex flex-col">
            <Title.Root>
              <Title.Label label={t(HistoryMenu.label)} />
            </Title.Root>
            <Paragraph>{t(History.info)}</Paragraph>
            <div className="h-10"></div>
            <CustomTimeLine />
          </div>
        </PagePadding>

        {/* Iso Section */}
        <PagePadding>
          <Title.Root>
            <Title.Label label={t(IsoMenu.label)} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <div>
              <Paragraph>{t(Iso.info)}</Paragraph>
            </div>
            <div className="flex w-full items-center justify-center">
              <Image
                width={1000}
                height={1000}
                className=" h-fit bg-cover"
                src="/images/iso.jpg"
                alt="img"
              />
            </div>
          </Row>
        </PagePadding>
      </Container>
    </main>
  );
  }catch (error) {
    console.error("Error in About page:", error);
    throw error; // rethrow so the build fails, but with clear info
  }
}
