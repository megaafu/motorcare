"use client";

import { SendQuotes } from "@/actions/SendQuotes";
import { CustomForm } from "@/components/CustomForm";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import useVehicles from "@/hooks/use-vehicles";
import { IUsedCar } from "@/model/usedCar";

interface BrandsFormProps {
  prefilledVehicle?: {
    brand?: string;
    model?: string;
    year?: string;
    price?: string;
  };
}

const BrandsForm = ({ prefilledVehicle }: BrandsFormProps) => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    province: z.string(),
    vehicle: z.string(),
    client: z.string(),
  });
  type FormValues = z.infer<typeof schema>;

  const { register, handleSubmit, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleForm = async (data: FormValues) => {
    try {
      const result = await toast.promise(
        SendQuotes(data),
        {
          loading: "processando o formul�rio...",
          success: "O Email foi enviado com sucesso",
          error: (err: Error) => err.message || "ocorreu algum erro enviando email",
        },
        { position: "top-center" }
      );
      return result;
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const t = useTranslations("Request");
  const { data } = useVehicles();

  // build vehicle list
  const vehicleOptions = (data: IUsedCar[] | undefined): string[] => {
    if (!data) return [];
    return data.map((item) => `${item.brand} ${item.model}`);
  };

  // \U0001f7e2 pre-select the vehicle when params exist
  useEffect(() => {
    if (prefilledVehicle?.brand && prefilledVehicle?.model) {
      setValue("vehicle", `${prefilledVehicle.brand} ${prefilledVehicle.model}`);
    }
  }, [prefilledVehicle, setValue]);

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(handleForm)} method="POST">
        <CustomForm.DropDown
          onChange={handleSelectChange}
          label={t("client")}
          id="client"
          options={[{ options: [t("individual"), t("company")] }]}
          register={register}
          name="client"
          required
        />
        <CustomForm.Root>
          <CustomForm.FormField
            id="name"
            label={t("name")}
            register={register}
            name="name"
            required
          />
          <CustomForm.FormField
            id="phone"
            label={t("phone")}
            register={register}
            name="phone"
            required
          />
          {selectedOption === t("company") && (
            <CustomForm.FormField
              id="person_phone"
              label={t("person_phone")}
              register={register}
              name="person_phone"
              required
            />
          )}
          <CustomForm.FormField
            id="email"
            label={t("email")}
            register={register}
            name="email"
            required
          />
          <CustomForm.DropDown
            id="province"
            label={t("province")}
            options={[
              {
                options: [
                  "Maputo",
                  "Gaza",
                  "Inhambane",
                  "Sofala",
                  "Manica",
                  "Tete",
                  "Nampula",
                  "Niassa",
                  "Cabo Delgado",
                ],
              },
            ]}
            register={register}
            name="province"
            required
          />

          {/* \U0001f7e2 Vehicle dropdown with pre-selected value */}
          <CustomForm.DropDown
            id="vehicle"
            label={t("vehicle")}
            options={[{ options: vehicleOptions(data) }]}
            register={register}
            name="vehicle"
            required
          />

          <div className="w-ful mt-2 flex lg:justify-end">
            <PrimaryButton
              type="submit"
              className="w-full justify-center lg:w-auto"
            >
              {t("submit")}
            </PrimaryButton>
          </div>
        </CustomForm.Root>
      </form>
    </>
  );
};

export default BrandsForm;
