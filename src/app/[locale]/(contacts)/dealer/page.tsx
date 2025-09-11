'use client';

import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { useTranslations } from "next-intl";

const Mapp = dynamic(() => import("./components/Mapper"), {
  ssr: false,
});

export default function Motorcare() {

  const t = useTranslations("Contacts");
  return (
    <>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col gap-5 justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("find_dealer")}</h4>
        <p className="text-white ">{t("info")}</p>
      </div>
      <Container className="mt-[12vh]">
        <PagePadding>
          <Mapp />
        </PagePadding>
      </Container>
    </>
  );
};

