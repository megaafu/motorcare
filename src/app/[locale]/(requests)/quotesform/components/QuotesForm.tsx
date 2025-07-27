"use client";

import { SendQuotes } from "@/actions/SendQuotes";
import { CustomForm } from "@/components/CustomForm";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import useNovos from "@/hooks/use-novos";
import { INewCar } from "@/model/newCar";

const BrandsForm = () => {
  const schema = z.object({
    name: z.string(),
    phone: z.string(),
    person_phone: z.string().optional(),
    email: z.string(),
    province: z.string(),
    vehicle: z.string(),
    client: z.string(),
  });
  type BrandsFormProps = z.infer<typeof schema>;

  const { register, handleSubmit } = useForm<BrandsFormProps>({
    resolver: zodResolver(schema),
  });
 const handleForm = async (data: BrandsFormProps) => {
  try {
    const result = await toast.promise(
      SendQuotes(data),
      {
        loading: "processando o formulário...",
        success: "O Email foi enviado com sucesso",
        error: (err: Error) => err.message || "ocorreu algum erro enviando email",
      },
      {
        position: "top-center",
      }
    );
    return result;
  } catch (error) {
    console.error("Form submission error:", error);
  }
};

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const t = useTranslations("Request");

  const { data } = useNovos();

  const handleNissan = (
    data: INewCar[] | undefined,
    filter: string
  ): string[] => {
    if (data === undefined) return [];
    return data.filter((car) => car.type === filter).map((item) => item.model);
  };

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
          <CustomForm.DropDown
            label={t("vehicle")}
            id="vehicle"
            options={[
              {
                title: t("nissan"),
                options: handleNissan(data, "Vehicles"),
              },
              {
                title: t("renault"),
                options: handleNissan(data, "Trucks"),
              },
            ]}
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
