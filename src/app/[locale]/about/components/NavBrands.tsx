"use client";

import { Title } from "@/components/Title";
import TitleNavItem from "@/components/Title/TitleNavItem";
import LateralScroll from "@/components/ui/LateralScoll";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { BrandsMenu } from "@/constants/menuData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AllBrands } from "../constants/brands";
import { useSearchParams } from "next/navigation";

const NavBrands = () => {
  const [selectedIndex, setIndex] = useState(0);
  const t = useTranslations("About");

  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");
  const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

  useEffect(() => {
    if (brandParam) {
      const foundIndex = AllBrands.brands.findIndex(
        (item) =>
          normalize(item.brand.toLowerCase()) ==
          normalize(brandParam.toLowerCase())
      );
      if (foundIndex !== -1) {
        setIndex(foundIndex);
        const target = document.getElementById("brands");
        target?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [brandParam]);

  const handleIndex = (index: number) => {
    setIndex(index);
    const target = document.getElementById("brands");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PagePadding>
      <div id="brands">
        <Title.Root>
          <Title.Label label={t(BrandsMenu.label)} />
          <Title.Nav>
            <LateralScroll>
              {AllBrands.brands.map((nav) => (
                <TitleNavItem
                  key={nav.id}
                  label={nav.brand}
                  isActive={selectedIndex === nav.id}
                  onClick={() => handleIndex(nav.id)}
                />
              ))}
            </LateralScroll>
          </Title.Nav>
        </Title.Root>
        <Row className="lg:grid-cols-2">
          <div>
            <h4 className="text-bold pb-4 text-2xl text-sky-700">
              {AllBrands.brands[selectedIndex].brand}
            </h4>
            <Paragraph>{t(AllBrands.brands[selectedIndex].info)}</Paragraph>
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              width={1000}
              height={1000}
              className="w-[280px]"
              src={AllBrands.brands[selectedIndex].img}
              alt="brand image"
            />
          </div>
        </Row>
      </div>
    </PagePadding>
  );
};

export default NavBrands;
