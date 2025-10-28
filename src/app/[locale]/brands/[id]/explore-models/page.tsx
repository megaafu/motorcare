"use client";

import React from "react";
import { useParams } from "next/navigation";
import { AllBrands } from "@/app/[locale]/about/constants/brands";
import Image from "next/image";
import Link from "next/link";
import { Title, Card } from "@mantine/core";

const ExploreModelsPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;

  const brand = AllBrands.brands.find((b) => b.id === Number(id));

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Brand not found.</p>
      </div>
    );
  }

  const models = brand.models || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Models Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        {models.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Card
                key={model.id}
                shadow="none"
                padding="lg"
                radius="md"
                className="cursor-pointer group overflow-hidden"
                component={Link}
                href={`/brands/${brand.id}/explore-models/${model.id}`}
              >
                <div className="relative h-96 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-center relative z-10">
                  <Title order={3} className="text-primary group-hover:text-[#355C7D] transition-colors">
                    {model.name}
                  </Title>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No models available
            </h3>
            <p className="text-gray-500">
              No vehicle models are currently available for {brand.brand}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExploreModelsPage;