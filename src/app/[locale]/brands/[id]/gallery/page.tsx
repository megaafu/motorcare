"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AllBrands } from "@/app/[locale]/about/constants/brands";
import Image from "next/image";

const BrandGalleryPage: React.FC = () => {
  const { id } = useParams(); // get brand id from URL
  const t = useTranslations();

  // Convert param to number and find brand
  const brand = AllBrands.brands.find((b) => b.id === Number(id));

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  // Use brand's gallery images or fallback to empty array
  const galleryImages = brand.gallery || [];

  return (
    <div className="min-h-screen bg-white">

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        {galleryImages.length > 0 ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("BrandDetail.gallery.title", { brand: brand.brand })}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("BrandDetail.gallery.subtitle", { brand: brand.brand })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full bg-gray-100">
                    <Image
                      src={image}
                      alt={`${brand.brand} gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              {t("BrandDetail.gallery.noImages")}
            </h3>
            <p className="text-gray-500">
              No gallery images available for {brand.brand}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BrandGalleryPage;