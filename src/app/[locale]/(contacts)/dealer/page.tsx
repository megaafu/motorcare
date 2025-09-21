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
      <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
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

