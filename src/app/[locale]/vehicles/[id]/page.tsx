"use client";

import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import useVehicles from "@/hooks/use-vehicles";
import { IUsedCar } from "@/model/usedCar";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VehicleSpecs from "./components/VehicleSpecs";
import LoadingState from "./components/LoadingState";
import NotFound from "./components/NotFound";
import { BASEURL } from "@/lib/util/util";
import Link from "next/link";

export default function VehicleDetailsPage() {
  const t = useTranslations("Vehicles");
  const params = useParams();
  const vehicleId = params.id as string;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " MZN";
  }

  const { data, isLoading } = useVehicles();

  const vehicle = useMemo(() => {
    if (!data || !vehicleId) return null;
    return data.find((car: IUsedCar) => car.id == vehicleId);
  }, [data, vehicleId]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!vehicle) {
    return <NotFound />;
  }

  const images: string[] = JSON.parse(vehicle.car_image);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white shadow-lg"
      >
        <Container>
          <PagePadding>
            <div className="mt-20 py-8">
              {/* Main Product Layout */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Vehicle Images - Left Side */}
                <div className="w-full lg:w-1/2 space-y-4">
                  {/* Main Image with Price Badge */}
                  <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      loader={() => `${BASEURL}${images[selectedImageIndex]}`}
                      src={`${BASEURL}${images[selectedImageIndex]}`}
                      alt={`${vehicle.brand} ${vehicle.model} - Image ${selectedImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Price Badge - Absolute positioned at bottom */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-primary px-6 py-3 text-white shadow-lg">
                      <span className="text-lg font-bold">
                        {currencyFormat(Number(vehicle.price))}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                            selectedImageIndex === index
                              ? "border-[#355C7D] ring-2 ring-[#355C7D] ring-opacity-50"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <div className="aspect-square h-16 w-16 md:h-20 md:w-20">
                            <Image
                              loader={() => `${BASEURL}${image}`}
                              src={`${BASEURL}${image}`}
                              alt={`${vehicle.brand} ${vehicle.model} - Thumbnail ${index + 1}`}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  <div className="text-sm text-gray-500 text-center">
                    {selectedImageIndex + 1} de {images.length} fotos
                  </div>
                </div>

                {/* Vehicle Details - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2 space-y-6 flex flex-col h-full"
                >
                  <div className="space-y-4">
                    {/* Larger Car Model Title */}
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {vehicle.brand} {vehicle.model}
                      </h1>
                      <p className="text-xl text-gray-600">
                        {vehicle.year_model} \u2022 {vehicle.type}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">
                        {vehicle.fuel}
                      </span>
                      <span className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-800">
                        {vehicle.transmission}
                      </span>
                      <span className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-800">
                        {vehicle.color}
                      </span>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-gray-600">{t("mileage")}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {vehicle.mileage.toLocaleString()} km
                      </p>
                    </div>
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Action Button - Aligned to start at the bottom */}
                  <div className="pt-6">
                    <Link
                      href={{
                        pathname: "/carquote",
                        query: {
                          id: vehicle.id,
                          brand: vehicle.brand,
                          model: vehicle.model,
                          year: vehicle.year_model,
                          price: vehicle.price,
                        },
                      }}
                      className="inline-block rounded-xl bg-primary px-8 py-4 font-medium text-white shadow-md hover:bg-primary/90 transition text-lg"
                    >
                      {t("request-cote")}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </PagePadding>
        </Container>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16"
      >
        <Container>
          <PagePadding>
            <Title.Root>
              <Title.Label label={t("specifications")} />
            </Title.Root>
            <VehicleSpecs vehicle={vehicle} />
          </PagePadding>
        </Container>
      </motion.section>

    </main>
  );
}