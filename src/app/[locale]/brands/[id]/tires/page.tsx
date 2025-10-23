"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AllBrands } from "@/app/[locale]/about/constants/brands";

// Define proper TypeScript interfaces
interface Tire {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface Brand {
  id: number;
  name: string;
  tires?: Tire[];
  gallery?: string[];
}

const BrandTiresPage: React.FC = () => {
  const { id } = useParams();
  const brand = AllBrands.brands.find((b) => b.id === Number(id)) as Brand | undefined;
  const t = useTranslations();

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  // Group tires by category with proper typing
  const tiresByCategory = brand.tires?.reduce((acc, tire) => {
    if (!acc[tire.category]) acc[tire.category] = [];
    acc[tire.category].push(tire);
    return acc;
  }, {} as Record<string, Tire[]>);

  // Get category display name from translation key
  const getCategoryDisplayName = (categoryKey: string): string => {
    // Define valid translation keys for tire categories
    const validCategoryKeys = [
      "BrandDetail.tires.categories.allSeason",
      "BrandDetail.tires.categories.summer",
      "BrandDetail.tires.categories.winter",
      "BrandDetail.tires.categories.allTerrain",
      "BrandDetail.tires.categories.mud",
      "BrandDetail.tires.categories.highway"
    ] as const;

    // Check if the category key is one of the valid translation keys
    if (validCategoryKeys.includes(categoryKey as typeof validCategoryKeys[number])) {
      return t(categoryKey);
    }
    
    // If it's not a translation key, return the original category
    return categoryKey;
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
      {!brand.tires || brand.tires.length === 0 ? (
        <p className="text-center text-gray-600">
          {t("BrandDetail.tires.noTires")}
        </p>
      ) : (
        Object.entries(tiresByCategory || {}).map(([category, tires]) => (
          <div key={category} className="mb-16">
            {/* Category Header with Image */}
            <section className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={brand.gallery?.[0] || "/placeholder.jpg"}
                alt={getCategoryDisplayName(category)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {getCategoryDisplayName(category)}
                  </h2>
                </div>
              </div>
            </section>

            {/* Tires Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {tires.map((tire: Tire) => (
                <div
                  key={tire.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center border border-gray-100 hover:border-gray-200"
                >
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={`/${tire.image}.jpg`}
                      alt={tire.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center font-medium text-gray-800 leading-tight">
                    {tire.name}
                  </p>
                  <div className="mt-2 px-3 py-1 bg-gray-100 rounded-full">
                    <span className="text-xs text-gray-600 font-medium">
                      {getCategoryDisplayName(category)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BrandTiresPage;