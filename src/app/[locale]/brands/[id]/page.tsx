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
import BrandsHeader from "@/components/BrandsHeader/BrandsHeader";

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
      <BrandsHeader logo={brand.img} className="bg-white"/>
      
      {/* ===== Gallery Slideshow ===== */}
      <section className="w-full">
        <div className="w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={5000}
            transitionTime={1000}
            className="carousel-container"
          >
            {["/maxxis/img-1.jpg", "/maxxis/img-2.jpeg", "/maxxis/img-3.jpeg", "/maxxis/img-4.jpeg", "/maxxis/img-5.jpg"].map((src, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden"
                style={{ 
                  height: 'clamp(440px, 40vh, 500px)', 
                  minHeight: '440px',
                  maxHeight: '500px'
                }}
              >
                <Image 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  fill 
                  className="object-cover object-center" 
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                  priority={idx === 0}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <Container>
        <PagePadding>
          {/* ===== About Section ===== */}
          <section className="py-8 md:py-12 border-t border-gray-200 text-center space-y-5">
            <Title 
              order={2} 
              className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              {tDetail("aboutTitle", { brand: brand.brand })}
            </Title>
            <div className="container mx-auto px-4 sm:px-6">
              <Text className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t(`${brand.info}`)} {tDetail("aboutDescription")}
              </Text>
            </div>
            <div className="h-4 md:h-5" />
            <Link href="/peaceform" passHref className="block w-full px-4 sm:px-6">
              <Button 
                size="lg" 
                variant="filled" 
                radius="md" 
                className="w-full bg-primary hover:bg-[#3c332f] text-white font-semibold px-4 sm:px-8 md:px-16 py-3 md:py-4 uppercase tracking-widest text-sm sm:text-base"
              >
                {tDetail("quickQuoteForm")}
              </Button>
            </Link>
          </section>

          {/* ===== Contact Section ===== */}
          <section className="container mx-auto py-8 md:py-12 border-t border-gray-200 text-center">
            <BrandsCarousel />
          </section>
        </PagePadding>
      </Container>
    </main>
  );
}