"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AllBrands } from "@/app/[locale]/about/constants/brands";
import Image from "next/image";

const BrandAboutPage: React.FC = () => {
  const { id } = useParams(); // get brand id from URL
  const t = useTranslations();

  // Convert param to number and find brand
  const brand = AllBrands.brands.find((b) => b.id === Number(id));

  // Function to convert \n to <br /> tags
  const formatDescription = (text: string) => {
    return text.replace(/\n/g, '<br />');
  };

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     {brand.banner && (
  <section className="relative h-96 w-full">
    <Image
      src={brand.banner}
      alt={brand.brand}
      width={500}
      height={300}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    </div>
  </section>
)}

      {/* Info Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brand.infos?.map((info) => (
            <div
              key={info.id}
            >
              {/* Only render headline if it exists and has a value */}
              {info.headline && (
                <p className="text-sm uppercase text-gray-500 font-semibold mb-2">
                  {t(info.headline)}
                </p>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(info.title)}
              </h3>

              {/* Use dangerouslySetInnerHTML for line breaks */}
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatDescription(t(info.description))
                }}
              />

              {info.image && (
                <Image
                  src={info.image}
                  alt={t(info.title)}
                  fill
                  className="mt-4 rounded-lg object-cover w-full h-48"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandAboutPage;