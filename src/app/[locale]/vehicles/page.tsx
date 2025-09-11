"use client";

import Container from "@/components/ui/Container";
import useVehicles from "@/hooks/use-vehicles";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import CarList from "./components/CarList";

export default function UsedCars() {
  const t = useTranslations("Vehicles");

  const { data, isLoading } = useVehicles();

  const carsData = useMemo(() => data ?? [], [data]);

  const [filteredCarsData, setFilteredCarsData] = useState(carsData);


  useEffect(() => {
    setFilteredCarsData(carsData);
  }, [carsData]);

  return (
    <main>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col gap-5 justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("vehicles")}</h4>
        <p className="text-white ">{t("info")}</p>
      </div>
      <Container className="mt-28">
        <CarList carsData={filteredCarsData} isLoading={isLoading} />
      </Container>
    </main>
  );
}
