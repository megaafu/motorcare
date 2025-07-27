"use client";

import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
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
      <div className="h-[240px] w-full bg-cars-hero bg-cover bg-center bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t("vehicles")} />
          </Title.Root>
        </PagePadding>
        <CarList carsData={filteredCarsData} isLoading={isLoading} />
      </Container>
    </main>
  );
}
