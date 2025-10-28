"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AllBrands } from "@/app/[locale]/about/constants/brands";

// Define proper TypeScript interfaces
interface Technology {
  id: number;
  title: string;
  name: string;
  description: string;
  image?: string;
}

interface Brand {
  id: number;
  name: string;
  technologies?: Technology[];
}

const BrandTechnologiesPage: React.FC = () => {
  const { id } = useParams();
  const t = useTranslations();
  const brand = AllBrands.brands.find((b) => b.id === Number(id)) as Brand | undefined;

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Technologies list */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {brand.technologies?.map((tech: Technology, index: number) => (
          <div key={tech.id || index} className="space-y-8">
            {/* Header for each technology */}
            <div className="w-full bg-primary text-white py-4 px-8">
              <h1 className="text-3xl sm:text-4xl font-bold">
                {t(tech.title)}
              </h1>
            </div>

            {/* Content section with conditional layout */}
            <div className={`
              grid gap-8 items-start
              ${tech.image 
                ? 'grid-cols-1 lg:grid-cols-4' 
                : 'grid-cols-1'
              }
            `}>
              {/* Image - increased size, no effects */}
              {tech.image && (
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="w-full max-w-[280px] lg:max-w-[320px]">
                    <Image
                      src={tech.image}
                      alt={t(tech.title)}
                      width={320}
                      height={240}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Text content - adjusts based on image presence */}
              <div className={`
                space-y-4
                ${tech.image 
                  ? 'lg:col-span-3' 
                  : 'w-full'
                }
              `}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  {t(tech.name)}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {t(tech.description)}
                </p>
              </div>
            </div>

            {/* Separator between technologies */}
            {index < brand.technologies!.length - 1 && (
              <div className="border-t border-gray-200 pt-8" />
            )}
          </div>
        ))}

        {/* Fallback */}
        {(!brand.technologies || brand.technologies.length === 0) && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔧</span>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t("BrandDetail.technologies.noTechnologies")}
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

export default BrandTechnologiesPage;