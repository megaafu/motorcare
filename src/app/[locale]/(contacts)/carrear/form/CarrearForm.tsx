"use client";
import { CustomForm } from "@/components/CustomForm";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { useState } from "react";
import { SendCarrear } from "@/actions/SendCarrear";
import CustomFilePicker from "@/components/CustomForm/CustomFilePicker";

const schema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  phone: z.string().min(1, "Telefone obrigatório"),
  email: z.string().email("Email inválido"),
  province: z.string().min(1, "Departamento obrigatório"),
  department: z.string().min(1, "Provincia obrigatório"),
  doc: z
    .any()
    .optional()
    .refine(
      (file) => !file || file instanceof File,
      "O documento deve ser um arquivo válido"
    ),
});

type CarrearFormProps = z.infer<typeof schema>;

const CarrearForm = () => {
  const t = useTranslations("Contacts");
  const [file, setFile] = useState<File | null>(null);

  const { register, handleSubmit, reset } = useForm<CarrearFormProps>({
    resolver: zodResolver(schema),
  });

  const handleForm = async (data: CarrearFormProps) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("department", data.department);
      formData.append("province", data.province);
      if (file) formData.append("document", file);

      const result = await toast.promise(
        SendCarrear(formData),
        {
          loading: "Processando...",
          success: "O email foi enviado com sucesso!",
          error: (err: Error) =>
            err.message || "Ocorreu um erro ao enviar o email",
        },
        { position: "top-center" }
      );

      reset();
      return result;
    } catch (err) {
      console.error("Erro no envio:", err);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
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
          <CustomForm.FormField
            id="email"
            label={t("email")}
            register={register}
            name="email"
            required
          />
          <CustomForm.DropDown
            label={t("province")}
            id="province"
            options={[
              { options: ["Maputo", "Gaza", "Inhambane", "Manica", "Sofala", "Tete", "Zambezia", "Nampula", "Niassa", "Cabo Delgado"] },
            ]}
            register={register}
            name="province"
            required
          />
          <CustomForm.DropDown
            label={t("department")}
            id="province"
            options={[
              { options: [t("marketing"), t("accountant"), t("officine"), t("others")] },
            ]}
            register={register}
            name="province"
            required
          />

          <CustomFilePicker
            label={t("doc")}
            id="doc"
            name="doc"
            register={register}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <div className="w-full mt-2 flex lg:justify-end">
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

export default CarrearForm;

