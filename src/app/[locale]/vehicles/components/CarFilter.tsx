"use client";

import CustomDropdown from "@/components/CustomForm/CustomDropdown";
import Row from "@/components/ui/Row";
import { IUsedCar } from "@/model/usedCar";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

interface FilterType {
  carsData: IUsedCar[];
  onFilter: (filteredData: IUsedCar[]) => void;
}

interface CarFilterForm {
  carBrand: string;
  carModel: string;
  carYear: string;
  carTransmission: string;
  carCylinder: string;
  carFuel: string;
  carSeats: string;
  carMileage: string;
}

const CarFilters = ({ carsData, onFilter }: FilterType) => {
  const { register, handleSubmit } = useForm<CarFilterForm>();
  const t = useTranslations("Vehicles");

  const handleForm = (form: CarFilterForm) => {
    const filtered = carsData.filter((car) => {
      if (form.carBrand && !form.carBrand.includes("Select") && !car.brand.toLowerCase().includes(form.carBrand.toLowerCase())) return false;
      if (form.carModel && !form.carModel.includes("Select") && !car.model.toLowerCase().includes(form.carModel.toLowerCase())) return false;
      if (form.carYear && !form.carYear.includes("Select") && car.year_model.toString() !== form.carYear) return false;
      if (form.carTransmission && !form.carTransmission.includes("Select") && car.transmission !== form.carTransmission) return false;
      if (form.carCylinder && !form.carCylinder.includes("Select") && car.cylinder.toString() !== form.carCylinder) return false;
      if (form.carFuel && !form.carFuel.includes("Select") && car.fuel !== form.carFuel) return false;
      if (form.carSeats && !form.carSeats.includes("Select") && car.seats.toString() !== form.carSeats) return false;
      if (form.carMileage && !form.carMileage.includes("Select") && car.mileage.toString() !== form.carMileage) return false;

      return true;
    });

    onFilter(filtered);
  };

  return (
    <div className="bg-white">
      <form onChange={handleSubmit(handleForm)} method="POST">
        <Row className="grid-cols-3 gap-x-4 gap-y-0 lg:grid-cols-4">
          <CustomDropdown
            className="py-2"
            id="car-brand"
            options={[{ options: [t("brand"), "Nissan"] }]}
            register={register}
            name="carBrand"
          />
          <CustomDropdown
            className="py-2"
            id="car-model"
            options={[{ options: [t("model"), "Terra", "Navara", "Qashqai", "Leaf"] }]}
            register={register}
            name="carModel"
          />
          <CustomDropdown
            className="py-2"
            id="car-year"
            options={[{ options: [t("year"), "2010", "2015", "2020"] }]}
            register={register}
            name="carYear"
          />
          <CustomDropdown
            className="py-2"
            id="car-transmission"
            options={[{ options: [t("transmission"), "Automatic", "Manual"] }]}
            register={register}
            name="carTransmission"
          />
          <CustomDropdown
            className="py-2"
            id="car-cylinder"
            options={[{ options: [t("cylinders"), "2", "4", "8"] }]}
            register={register}
            name="carCylinder"
          />
          <CustomDropdown
            className="py-2"
            id="car-fuel"
            options={[{ options: [t("fuel"), "Diesel", "Gasoline", "Hybrid"] }]}
            register={register}
            name="carFuel"
          />
          <CustomDropdown
            className="py-2"
            id="car-seats"
            options={[{ options: [t("seats"), "2", "4", "6"] }]}
            register={register}
            name="carSeats"
          />
          <CustomDropdown
            className="py-2"
            id="car-mileage"
            options={[{ options: [t("mileage"), "120km", "180km", "220km"] }]}
            register={register}
            name="carMileage"
          />
        </Row>
      </form>
    </div>
  );
};

export default CarFilters;
