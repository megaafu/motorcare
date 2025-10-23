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
            <div className="w-full bg-[#302929] text-white py-8 px-8">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                {t(tech.title)}
              </h1>
            </div>

            {/* Content section */}
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Image on left */}
              {tech.image && (
                <div className="flex-shrink-0 md:w-1/2 w-full">
                  <Image
                    src={tech.image}
                    alt={t(tech.title)}
                    width={600}
                    height={400}
                    className="rounded-md object-cover w-full h-auto"
                  />
                </div>
              )}

              {/* Text on right */}
              <div className={`${tech.image ? 'md:w-1/2' : 'w-full'} w-full`}>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  {t(tech.name)}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t(tech.description)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Fallback */}
        {(!brand.technologies || brand.technologies.length === 0) && (
          <p className="text-gray-600 text-center">
            {t("BrandDetail.technologies.noTechnologies")}
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandTechnologiesPage;