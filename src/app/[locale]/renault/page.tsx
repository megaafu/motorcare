"use client";

import Image from "next/image";
import { Title, Text, Card, Group, Badge, Button } from "@mantine/core";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { Truck, Factory, Globe } from "lucide-react";
import useNovos from "@/hooks/use-novos";
import { BASEURL } from "@/lib/util/util";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function RenaultPage() {
  const t = useTranslations("Renault");
  const { data: vehicles, isLoading, error } = useNovos();

  // Filter Renault vehicles only
  const renaultVehicles = vehicles?.filter(vehicle =>
    vehicle.type?.toLowerCase().includes('trucks')
  ) || [];

  const galleryImages = [
    { src: "/images/renault-gallery-1.jpg", },
    { src: "/images/renault-gallery-2.jpg", },
    { src: "/images/renault-gallery-3.jpg", },
    { src: "/images/renault-gallery-4.jpg", },
    { src: "/images/renault-gallery-5.jpg", },
    { src: "/images/renault-gallery-6.jpg", },
  ];

  if (isLoading) {
    return (
      <Container>
        <PagePadding>
          <div className="flex justify-center items-center min-h-96">
            <Text>{t("loadingVehicles")}</Text>
          </div>
        </PagePadding>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <PagePadding>
          <div className="flex justify-center items-center min-h-96">
            <Text className="text-red-600">{t("errorLoading")}</Text>
          </div>
        </PagePadding>
      </Container>
    );
  }

  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[75vh] md:h-[80vh]">
        <Image
          src="/images/renault-hero.jpg"
          alt="Renault Trucks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end py-10 px-6 md:px-12">
          <Title
            order={1}
            className="text-white text-3xl sm:text-5xl font-extrabold max-w-4xl drop-shadow-lg"
          >
            {t.rich("heroTitle", {
              span: (chunks) => <span style={{ color: '#355C7D' }}>{chunks}</span>
            })}
          </Title>
          <Text className="text-white/90 mt-4 max-w-3xl text-sm sm:text-lg leading-relaxed">
            {t("heroDescription")}
          </Text>
          <Group className="mt-6">
            <Button 
              size="lg" 
              className="bg-secundary hover:bg-secundary/90 text-primary"
              component="a"
              href="#vehicles-section"
            >
              {t("exploreModels")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white"
              component={Link}
              href="/quotesform"
            >
              {t("requestQuote")}
            </Button>
          </Group>
        </div>
      </section>

      {/* 2. About Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-6 mb-16">
            <Title
              order={2}
              className="text-2xl sm:text-4xl font-bold text-primary"
            >
              {t.rich("aboutTitle", {
                span: (chunks) => <span style={{ color: '#355C7D' }}>{chunks}</span>
              })}
            </Title>
            
            <Text className="text-light-text max-w-4xl mx-auto text-lg leading-relaxed">
              {t("aboutDescription")}
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card shadow="sm" padding="lg" radius="md" className="h-full text-center">
              <div className="flex justify-center mb-4">
                <Truck className="text-ancent" size={24} />
              </div>
              <Title order={3} className="mb-3 text-lg font-semibold text-primary">
                {t("since1894")}
              </Title>
              <Text className="text-light-text">
                {t("since1894Description")}
              </Text>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" className="h-full text-center">
              <div className="flex justify-center mb-4">
                <Globe className="text-ancent" size={24} />
              </div>
              <Title order={3} className="mb-3 text-lg font-semibold text-primary">
                {t("countries")}
              </Title>
              <Text className="text-light-text">
                {t("countriesDescription")}
              </Text>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" className="h-full text-center">
              <div className="flex justify-center mb-4">
                <Factory className="text-ancent" size={24} />
              </div>
              <Title order={3} className="mb-3 text-lg font-semibold text-primary">
                {t("frenchManufacturing")}
              </Title>
              <Text className="text-light-text">
                {t("frenchManufacturingDescription")}
              </Text>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card shadow="sm" padding="lg" radius="md">
              <Title order={3} className="mb-4 text-primary">
                {t("productivityProvider")}
              </Title>
              <Text className="text-light-text leading-relaxed">
                {t("productivityProviderDescription")}
              </Text>
            </Card>

            <Card shadow="sm" padding="lg" radius="md">
              <Title order={3} className="mb-4 text-primary">
                {t("reliablePartner")}
              </Title>
              <Text className="text-light-text leading-relaxed">
                {t("reliablePartnerDescription")}
              </Text>
            </Card>
          </div>

          {/* Volvo Group */}
          <Card className="bg-primary text-white">
            <div className="text-center py-8">
              <Title order={3} className="mb-4">
                {t("volvoGroup")}
              </Title>
              <Text className="text-gray-300 max-w-2xl mx-auto">
                {t("volvoGroupDescription")}
              </Text>
            </div>
          </Card>
        </PagePadding>
      </Container>

      {/* 3. Vehicles Section */}
      {renaultVehicles.length > 0 && (
        <section id="vehicles-section" className="bg-gray-50 py-16">
          <Container>
            <PagePadding>
              <div className="text-center space-y-4 mb-12">
                <Title
                  order={2}
                  className="text-2xl sm:text-4xl font-bold text-primary"
                >
                  {t.rich("vehiclesTitle", {
                    span: (chunks) => <span style={{ color: '#355C7D' }}>{chunks}</span>
                  })}
                </Title>
                <Text className="text-light-text max-w-2xl mx-auto">
                  {t("vehiclesSubtitle")}
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renaultVehicles.map((vehicle) => (
                  <Card key={vehicle.id} shadow="md" padding="lg" radius="md" className="h-full">
                    <Card.Section>
                      <div className="relative h-48 w-full bg-gray-200">
                        {vehicle.car_image ? (
                          <Image
                            loader={() => `${BASEURL}${vehicle.car_image}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            src={`${BASEURL}${vehicle.car_image}`}
                            alt={vehicle.model || t("vehiclesSubtitle")}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Truck className="text-primary" size={48} />
                          </div>
                        )}
                      </div>
                    </Card.Section>

                    <Group className="mt-4 mb-2">
                      <Title order={3} className="font-semibold text-primary">
                        {vehicle.model || t("vehiclesSubtitle")}
                      </Title>
                      {vehicle.type && (
                        <Badge className="bg-secundary text-primary">
                          {vehicle.type}
                        </Badge>
                      )}
                    </Group>

                    <div className="space-y-2 mb-4">
                      {vehicle.brand && (
                        <Text className="text-sm text-primary">
                          <strong>{t("brandLabel")}</strong> {vehicle.brand}
                        </Text>
                      )}
                    </div>

                    <Button
                      className="bg-ancent hover:bg-ancent/90 text-white"
                      fullWidth
                      component="a"
                      href={vehicle.url_link || '#'}
                    >
                      {t("viewDetails")}
                    </Button>
                  </Card>
                ))}
              </div>
            </PagePadding>
          </Container>
        </section>
      )}

      {/* 4. Gallery Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-4 mb-12">
            <Title
              order={2}
              className="text-2xl sm:text-4xl font-bold text-primary"
            >
              {t.rich("galleryTitle", {
                span: (chunks) => <span style={{ color: '#355C7D' }}>{chunks}</span>
              })}
            </Title>
            <Text className="text-light-text max-w-2xl mx-auto">
              {t("gallerySubtitle")}
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {galleryImages.map((image, index) => (
              <Card key={index} padding="md" radius="md" shadow="sm">
                <Card.Section>
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image
                      src={image.src}
                      alt={image.src}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card.Section>
              </Card>
            ))}
          </div>
        </PagePadding>
      </Container>
    </main>
  );
}