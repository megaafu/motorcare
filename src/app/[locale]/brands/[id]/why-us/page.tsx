"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AllBrands } from "@/app/[locale]/about/constants/brands";

const WhyUsPage: React.FC = () => {
  const { id } = useParams();
  const t = useTranslations();
  const brand = AllBrands.brands.find((b) => b.id === Number(id));

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {brand.infos?.map((info, index) => {
          // skip entirely if all fields are null or undefined
          if (
            !info?.headline &&
            !info?.image &&
            !info?.title &&
            !info?.description
          ) {
            return null;
          }

          return (
            <div key={index} className="w-full">
              {/* Headline (top section with background) */}
              {info.headline && (
                <div className="w-full bg-[#302929] text-white py-8 px-8">
                  <h1 className="text-3xl sm:text-4xl font-semibold">
                    {t(info.headline)}
                  </h1>
                </div>
              )}

              {/* Content block */}
              <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8">
                {/* Image (only if available) */}
                {info.image && (
                  <div className="flex-shrink-0 md:w-1/2 w-full">
                    <Image
                      src={info.image}
                      alt={info.title || "Image"}
                      width={600}
                      height={400}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </div>
                )}

                {/* Text content (title + description) */}
                {(info.title || info.description) && (
                  <div className="md:w-1/2 w-full">
                    {info.title && (
                      <h2 className="text-xl font-semibold mb-3 text-gray-900">
                        {t(info.title)}
                      </h2>
                    )}
                    {info.description && (
                      <p className="text-gray-700 leading-relaxed">
                        {t(info.description)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Fallback */}
        {!brand.infos?.length && (
          <p className="text-gray-600 text-center">
            {t("BrandDetail.noTechnologiesAvailable")}
          </p>
        )}
      </div>
    </div>
  );
};

export default WhyUsPage;
