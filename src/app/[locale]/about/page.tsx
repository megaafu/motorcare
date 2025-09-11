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

const CustomAccording = dynamic(() => import("./components/ui/According"), {
  ssr: false,
});

const CustomTimeLine = dynamic(() => import("./components/ui/CustomTimeLine"), {
  ssr: false,
});

const NavBrands = dynamic(() => import("./components/NavBrands"), {
  ssr: false,
});


export default function About() {
  try {
    const t = useTranslations("About");
    return (
      <main>
        {/* Hero section */}
        <div className="h-[30lvh] w-full bg-[#303136] flex flex-col gap-5 justify-center items-center">
          <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("about")}</h4>
          <p className="text-white ">{t("info")}</p>
        </div>

        <Container>
          {/* Holding Info */}
          <PagePadding>
            <Title.Root>
              <Title.Label label={t(AboutMenu.label)} />
            </Title.Root>
            <Paragraph>{t(Holding.info)}</Paragraph>
            <HeritageGallery />
          </PagePadding>

          {/* History Section */}
          <PagePadding>
            <div id="Our History" className="flex flex-col">
              <Title.Root>
                <Title.Label label={t(HistoryMenu.label)} />
              </Title.Root>
              <div className="h-10"></div>
              <CustomTimeLine />
            </div>
          </PagePadding>

          {/* According Section */}
          <PagePadding>
            <div id="Our History" className="flex flex-col">
              <Title.Root>
                <Title.Label label={t("core_values")} />
              </Title.Root>
              <div className="h-10"></div>
              <CustomAccording />
            </div>
          </PagePadding>

          <PagePadding>
            <Title.Root >
              <Title.Label label=" Meet Our Team" />
            </Title.Root>
            <div className="flex flex-wrap gap-6 px-4">
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

          {/* NavBrands Section */}
          <NavBrands />

          {/* Iso Section */}
          <PagePadding>
            <Title.Root>
              <Title.Label label={t(IsoMenu.label)} />
            </Title.Root>
            <Row className="lg:grid-cols-2">
              <div className="flex flex-col justify-evenly">
                <Paragraph>{t(Iso.info)}</Paragraph>
                <a href="/files/policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-secundary"
                >Download</a>
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
  } catch (error) {
    console.error("Error in About page:", error);
    throw error; // rethrow so the build fails, but with clear info
  }
}
