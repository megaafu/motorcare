"use client";

import CardCarousel from "@/components/Card/CardCarousel";
import PagePadding from "@/components/ui/PagePadding";
import Row from "@/components/ui/Row";
import { Pagination } from "@mantine/core";
import { useState, useEffect } from "react";
import CarsSkeletion from "./CarsSkeletion";
import { IUsedCar } from "@/model/usedCar";

interface CustomPageProps {
  carsData: IUsedCar[];
  isLoading?: boolean;
}

const ITEMS_PER_PAGE = 8;

const CarList = ({ carsData, isLoading }: CustomPageProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [carsData]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleResults = carsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(carsData.length / ITEMS_PER_PAGE);

  const getCarKey = (car: IUsedCar) => {
    return car.id || `${car.brand}-${car.model}-${car.year_model}`;
  };

  if (isLoading) {
    return <CarsSkeletion />;
  }

  if (!carsData || carsData.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No vehicles available</p>
      </div>
    );
  }

  return (
    <>
      <Row className="grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleResults.map((car) => (
          <CardCarousel
            key={getCarKey(car)}
            car={car}
            className="mx-auto w-[92vw]"
          />
        ))}
      </Row>
      
      {totalPages > 1 && (
        <div className="mt-4 lg:mt-0">
          <PagePadding>
            <Pagination
              total={totalPages}
              value={currentPage}
              onChange={setCurrentPage}
            />
          </PagePadding>
        </div>
      )}
    </>
  );
};

export default CarList;