"use client";

import Container from "@/components/ui/Container";
import useVehicles from "@/hooks/use-vehicles";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import CarList from "./components/CarList";
import { Title } from "@/components/Title";
import Paragraph from "@/components/ui/Paragraph";

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
      <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("vehicles")}</h4>
        <p className="text-white text-center container">{t("info2")}</p>
      </div>
      <Container className="mt-28">
        <Title.Root>
          <Title.Label label={t("info3-title")} />
        </Title.Root>

        <Paragraph>{t("info3")}</Paragraph>
        <div className="h-5 md:h-6 lg:h8 xl:h-10" />
        <CarList carsData={filteredCarsData} isLoading={isLoading} />
      </Container>
    </main>
  );
}
