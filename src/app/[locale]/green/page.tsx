"use client";

import Image from "next/image";
import { Title, Text } from "@mantine/core";
import ResourcesSection from "./components/resource";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { Car, LeafyGreen, ZapIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GreenPage() {
  const t = useTranslations("Green");

  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[100vh]">
        <Image
          src="/images/nissan-hero.jpg"
          alt={t("images.heroAlt")}
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end py-10 px-6 md:px-12">
          <Title
            order={1}
            className="text-white text-3xl sm:text-5xl font-extrabold max-w-4xl drop-shadow-lg"
          >
            {t("heroTitle")}
          </Title>
          <Text className="text-white/90 mt-4 max-w-3xl text-sm sm:text-lg leading-relaxed">
            {t("heroDescription")}
          </Text>
        </div>
      </section>

      {/* 2. Intro Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-4">
            <Title order={2} className="text-teal-600 text-2xl sm:text-3xl font-bold">
              {t.rich("introTitle", {
                span: (chunks) => <span className="text-teal-600">{chunks}</span>
              })}
            </Title>
            <Text className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              {t("introDescription")}
            </Text>
          </div>
        </PagePadding>
      </Container>

      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center my-12">
            <div>
              <LeafyGreen className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">{t("features.cleanEnergy.title")}</h3>
              <p className="text-gray-600 text-sm">{t("features.cleanEnergy.description")}</p>
            </div>
            <div>
              <ZapIcon className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">{t("features.innovation.title")}</h3>
              <p className="text-gray-600 text-sm">{t("features.innovation.description")}</p>
            </div>
            <div>
              <Car className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">{t("features.globalImpact.title")}</h3>
              <p className="text-gray-600 text-sm">{t("features.globalImpact.description")}</p>
            </div>
          </div>
        </PagePadding>
      </Container>

      {/* 3. Vision Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-4">
            <Title order={2} className="text-teal-600 text-2xl sm:text-3xl font-bold">
              {t.rich("visionTitle", {
                span: (chunks) => <span className="text-teal-600">{chunks}</span>
              })}
            </Title>
            <Text className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              {t("visionDescription")}
            </Text>
          </div>
        </PagePadding>
      </Container>

      {/* 4. Features Grid */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t("featuresGrid.organizations.title"),
                text: t("featuresGrid.organizations.description"),
              },
              {
                title: t("featuresGrid.mobility.title"),
                text: t("featuresGrid.mobility.description"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/images/nissan-img.jpg"
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <Title order={4} className="text-teal-600 mt-2 text-lg font-semibold">
                    {item.title}
                  </Title>
                  <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </PagePadding>
      </Container>

      {/* 5. Banner Image */}
      <Container>
        <PagePadding>
          <div className="w-full">
            <Image
              src="/images/nissan-banner.jpg"
              alt={t("images.bannerAlt")}
              width={1536}
              height={864}
              className="w-full h-[440px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </PagePadding>
      </Container>

      {/* 6. Charging Section */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <Title order={4} className="text-teal-600 text-2xl sm:text-3xl font-bold">
                {t("chargingTitle")}
              </Title>
            </div>
            <div className="md:col-span-2">
              <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {t("chargingDescription")}
              </Text>
            </div>
          </div>
        </PagePadding>
      </Container>

      {/* 7. Tech Features */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ZapIcon className="text-teal-600" />,
                title: t("techFeatures.dcCharging.title"),
                text: t("techFeatures.dcCharging.description"),
              },
              {
                icon: <LeafyGreen className="text-teal-600" />,
                title: t("techFeatures.solarCarport.title"),
                text: t("techFeatures.solarCarport.description"),
              },
              {
                icon: <Car className="text-teal-600" />,
                title: t("techFeatures.firstStation.title"),
                text: t("techFeatures.firstStation.description"),
              },
            ].map((item, idx) => (
              <div key={idx}>
                <Title order={4} className="mb-2 text-teal-600 flex items-center gap-2 text-lg font-semibold">
                  {item.icon}
                  {item.title}
                </Title>
                <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </Text>
              </div>
            ))}
          </div>
        </PagePadding>
      </Container>

      {/* 8. CTA Banner */}
      <section className="bg-teal-600 text-white py-16 mt-12">
        <Container>
          <PagePadding>
            <div className="text-center space-y-4">
              <Title order={2} className="text-teal-600 text-2xl sm:text-3xl font-bold">
                {t("ctaTitle")}
              </Title>
              <Text className="max-w-3xl mx-auto text-white/90 text-sm sm:text-base">
                {t("ctaDescription")}
              </Text>
            </div>
          </PagePadding>
        </Container>
      </section>

      {/* 9. Comparison / Resources */}
      <ResourcesSection />
    </main>
  );
}