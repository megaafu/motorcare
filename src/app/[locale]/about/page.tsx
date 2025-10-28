"use client"

import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { AboutMenu, HistoryMenu, IsoMenu } from "@/constants/menuData";
import Image from "next/image";
import { Holding, Iso } from "./constants/data";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import TeamMemberCard from "./components/ui/TeamMemberCard";
import { team } from "./constants/team";
import HeritageGallery from "./components/ui/HeritageGallery";
import SlideShowGallery from "./components/ui/SlideShowGallery";

const CustomAccording = dynamic(() => import("./components/ui/According"), {
  ssr: false,
});

const CustomTimeLine = dynamic(() => import("./components/ui/CustomTimeLine"), {
  ssr: false,
});



export default function About() {
  try {
    const t = useTranslations("About");
    return (
      <main className=""> {/* Added padding to account for fixed header */}
        {/* Hero section */}
        <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
          <h4 className="text-white text-3xl md:text-4xl font-medium">{t("about")}</h4>
          <p className="text-white text-sm md:text-base max-w-2xl">{t("info")}</p>
        </div>

        <Container>
          {/* Holding Info */}
          <PagePadding className="py-6 md:py-8">
            <Title.Root>
              <Title.Label label={t(AboutMenu.label)} />
            </Title.Root>
            <Paragraph className="mt-4">{t(Holding.info)}</Paragraph>
            <div className="mt-6">
              <HeritageGallery />
            </div>
          </PagePadding>

          {/* History Section */}
          <PagePadding className="py-6 md:py-8">
            <div id="Our History" className="flex flex-col">
              <Title.Root>
                <Title.Label label={t(HistoryMenu.label)} />
              </Title.Root>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Timeline on the left */}
                <div className="w-full">
                  <CustomTimeLine />
                </div>

                {/* Slideshow on the right */}
                <div className="w-full">
                  <SlideShowGallery />
                </div>
              </div>
            </div>
          </PagePadding>

          {/* According Section */}
          <PagePadding className="py-6 md:py-8">
            <div id="Our History" className="flex flex-col">
              <Title.Root>
                <Title.Label label={t("core_values")} />
              </Title.Root>
              <div className="h-6 md:h-10"></div>
              <CustomAccording />
            </div>
          </PagePadding>

          {/* Team Section */}
          <PagePadding className="py-6 md:py-8">
            <Title.Root>
              <Title.Label label={t("team")} />
            </Title.Root>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 md:px-4">
              {team.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                />
              ))}
            </div>
          </PagePadding>

          {/* Iso Section */}
          <PagePadding className="py-6 md:py-8">
            <Title.Root>
              <Title.Label label={t(IsoMenu.label)} />
            </Title.Root>
            <Row className="mt-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col justify-center gap-4">
                <Paragraph>{t(Iso.info)}</Paragraph>
                <a
                  href="/files/policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-secundary text-sm md:text-base inline-block mt-2"
                >
                  {t("iso")}
                </a>
              </div>
              <div className="flex w-full items-center justify-center">
                <Image
                  width={500}
                  height={500}
                  className="h-auto w-full max-w-md object-contain p-4 md:p-11"
                  src="/images/iso.jpg"
                  alt="ISO certification"
                  priority={false}
                />
              </div>
            </Row>
          </PagePadding>
        </Container>
      </main>
    );
  } catch (error) {
    console.error("Error in About page:", error);
    throw error;
  }
}
