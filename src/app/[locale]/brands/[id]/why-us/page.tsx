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
            <div key={index} className="w-full space-y-8">
              {/* Headline (top section with background) */}
              {info.headline && (
                <div className="w-full bg-primary text-white py-4 px-8">
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    {t(info.headline)}
                  </h1>
                </div>
              )}

              {/* Content block with conditional layout */}
              <div className={`
                grid gap-8 items-start
                ${info.image 
                  ? 'grid-cols-1 lg:grid-cols-4' 
                  : 'grid-cols-1'
                }
              `}>
                {/* Image - increased size, no effects */}
                {info.image && (
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="w-full max-w-[280px] lg:max-w-[320px]">
                      <Image
                        src={info.image}
                        alt={info.title || "Image"}
                        width={320}
                        height={240}
                        className="rounded-lg object-cover w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Text content - adjusts based on image presence */}
                {(info.title || info.description) && (
                  <div className={`
                    space-y-4
                    ${info.image 
                      ? 'lg:col-span-3' 
                      : 'w-full'
                    }
                  `}>
                    {info.title && (
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">
                        {t(info.title)}
                      </h2>
                    )}
                    {info.description && (
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                        {t(info.description)}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Separator between sections */}
              {index < brand.infos!.length - 1 && (
                <div className="border-t border-gray-200 pt-8" />
              )}
            </div>
          );
        })}

        {/* Fallback */}
        {!brand.infos?.length && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">\u2139\ufe0f</span>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t("BrandDetail.noTechnologiesAvailable")}
            </p>
            <p className="text-gray-500 mt-2">
              Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUsPage;