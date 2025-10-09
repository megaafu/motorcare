"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Title, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { ChevronLeft } from "lucide-react";
import { AllBrands } from "../../about/constants/brands";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BrandsCarousel from "../../home/components/BrandCarousel";

export default function BrandDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations("About");
  const tDetail = useTranslations("BrandDetail");

  const brandId = params.id as string;
  const brand = AllBrands.brands.find((b) => b.id.toString() === brandId);

  if (!brand) {
    return (
      <main className="pt-16">
        <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
          <h4 className="text-white text-3xl md:text-4xl font-medium">
            {tDetail("notFoundTitle")}
          </h4>
          <p className="text-white text-sm md:text-base max-w-2xl">
            {tDetail("notFoundDescription")}
          </p>
          <Button
            onClick={() => router.push("/brands")}
            className="mt-4 flex items-center gap-2"
            color="blue"
          >
            <ChevronLeft size={16} />
            {tDetail("backToBrands")}
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 bg-gray-50">
      {/* ===== Header ===== */}
      <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col justify-center items-center text-center px-4 relative">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          {brand.brand}
        </h1>
      </div>

      <Container>
        <PagePadding>
          {/* ===== Gallery Slideshow ===== */}
          <section className="py-12">
            <Title order={2} className="text-center mb-8">
              {tDetail("galleryTitle")}
            </Title>

            <div className="max-w-4xl mx-auto">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                interval={5000}
                transitionTime={1000}
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative aspect-video rounded-xl overflow-hidden"
                  >
                    <Image
                      src={brand.img}
                      alt={`${brand.brand} - Image ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </section>

          {/* ===== About Section ===== */}
          <section className="py-12 border-t border-gray-200 text-center">
            <Title order={2} className="mb-6">
              {tDetail("aboutTitle", { brand: brand.brand })}
            </Title>
            <div className="max-w-3xl mx-auto">
              <Text className="text-gray-700 text-lg leading-relaxed">
                {t(`${brand.info}`)} {tDetail("aboutDescription")}
              </Text>
            </div>
          </section>

          {/* ===== Contact Section ===== */}
          <section className="py-12 border-t border-gray-200 text-center">
            <Title order={2} className="mb-4">
              {tDetail("contactTitle", { brand: brand.brand })}
            </Title>
            <Text className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {tDetail("contactDescription", { brand: brand.brand })}
            </Text>

            <Link href="/peaceform" passHref>
              <Button size="lg" color="blue" variant="filled" radius="xl">
                {tDetail("quickQuoteForm")}
              </Button>
            </Link>
            <BrandsCarousel />
          </section>
        </PagePadding>
      </Container>
    </main>
  );
}