"use client";

import Image from "next/image";
import { Title, Text, Card, Button } from "@mantine/core";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { AllBrands } from "../../../about/constants/brands";

export default function RenaultPage() {
  const t = useTranslations();

  const brand = AllBrands.brands.find((b) => b.id.toString() === "1");

  const navigationCards = [
    {
      title: t("Renault.vehiclesTitle"),
      subtitle: t("Renault.vehiclesSubtitle"),
      href: "/brands/1/explore-models",
      bgImage: "/images/renault-vehicles-bg.jpg",
      overlayColor: "rgba(0, 0, 0, 0.6)"
    },
    {
      title: t("Renault.galleryTitle"),
      subtitle: t("Renault.gallerySubtitle"),
      href: "/brands/1/gallery",
      bgImage: "/images/renault-gallery-bg.jpg",
      overlayColor: "rgba(0, 0, 0, 0.6)"
    },
    {
      title: t("Renault.aboutTitle"),
      subtitle: t("Renault.aboutSubtitle"),
      href: "/brands/1/about",
      bgImage: "/images/renault-about-bg.jpg",
      overlayColor: "rgba(0, 0, 0, 0.6)"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">

      {/* Hero Section - Enhanced with Big Text and Button */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/images/renault-hero.jpg"
          alt="Renault Trucks"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Big Brand Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-center tracking-tight">
            {brand?.brand ?? ""}
          </h1>
          <Text className="text-white text-opacity-90 mb-6 group-hover:text-opacity-100 transition-all text-base md:text-lg leading-relaxed">
            {t("Renault.vehiclesSubtitle")}
          </Text>
          {/* Button with White Border and Transparent Background */}
          <Button
            component={Link}
            href="/brands/1/explore-models"
            variant="outline"
            size="xl"
            className="
              border-2 
              border-white 
              bg-transparent 
              text-white 
              hover:bg-white 
              hover:text-black 
              transition-all 
              duration-300
              font-semibold
              px-8
              py-4
              text-lg
            "
          >
            {t("Renault.vehiclesTitle")}
          </Button>
        </div>
      </section>

      {/* Brand Info Section - Two Columns */}
      <Container>
        <PagePadding>
          <section className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Brand Info */}
              <div className="space-y-6">
                <Title order={1} className="text-3xl sm:text-4xl font-bold text-primary">
                  {brand?.brand ?? ""}
                </Title>
                <Text className="text-light-text text-lg leading-relaxed">
                  {t(brand?.info ?? "")}
                </Text>
              </div>

              {/* Brand Details */}
              <div className="flex-shrink-0 rounded w-full">
                <Image
                  src="/images/renault-gallery-1.jpg"
                  alt="renault"
                  width={600}
                  height={400}
                  className="rounded-md object-cover w-full h-auto max-h-80"
                />
              </div>

            </div>
          </section>

          {/* Navigation Cards Section */}
          <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {navigationCards.map((card, index) => (
                <Card
                  key={index}
                  shadow="lg"
                  padding="lg"
                  radius="md"
                  className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden min-h-[340px]  flex flex-col justify-center"
                  component={Link}
                  href={card.href}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0 transition-all duration-500 group-hover:bg-opacity-70 bg-opacity-60"
                    style={{ backgroundColor: card.overlayColor }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-white p-4">
                    <Title order={3} className="mb-4 text-white group-hover:text-white transition-colors text-xl md:text-2xl">
                      {card.title}
                    </Title>
                    <Text className="text-white text-opacity-90 mb-6 group-hover:text-opacity-100 transition-all text-base md:text-lg leading-relaxed">
                      {card.subtitle}
                    </Text>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </PagePadding>
      </Container>
    </main>
  );
}