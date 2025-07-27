"use client";

import { motion } from "framer-motion";
import { IUsedCar } from "@/model/usedCar";
import { useTranslations } from "next-intl";

interface VehicleSpecsProps {
  vehicle: IUsedCar;
}

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const t = useTranslations("Vehicles");

  const specs = [
    {
      category: t("enginePerformance"),
      items: [
        { label: t("fuelType"), value: vehicle.fuel },
        { label: t("transmission"), value: vehicle.transmission },
        { label: t("cylinders"), value: vehicle.cylinder },
        {
          label: t("mileage"),
          value: `${vehicle.mileage.toLocaleString()} km`,
        },
      ],
    },
    {
      category: t("exteriorInterior"),
      items: [
        { label: t("color"), value: vehicle.color },
        { label: t("doors"), value: vehicle.doors.toString() },
        { label: t("seats"), value: vehicle.seats.toString() },
        { label: t("vehicleType"), value: vehicle.type },
      ],
    },
    {
      category: t("vehicleInformation"),
      items: [
        { label: t("brand"), value: vehicle.brand },
        { label: t("model"), value: vehicle.model },
        { label: t("year"), value: vehicle.year_model.toString() },
        { label: t("licensePlate"), value: vehicle.license_plate },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {specs.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <h3 className="mb-6 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900">
            {category.category}
          </h3>
          <div className="space-y-4">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: categoryIndex * 0.1 + itemIndex * 0.05,
                }}
                className="flex items-center justify-between border-b border-gray-100 py-2 last:border-b-0"
              >
                <span className="font-medium text-gray-600">{item.label}</span>
                <span className="font-semibold text-gray-900">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
