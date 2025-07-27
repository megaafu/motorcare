"use client";

import { Title } from "@/components/Title";
import TitleNavItem from "@/components/Title/TitleNavItem";
import PagePadding from "@/components/ui/PagePadding";
import { CategoriesMenu } from "@/constants/menuData";
import { useTranslations } from "next-intl";
import { useState } from "react";
import NewCarList from "./NewCarList";

const NavNewCars = () => {
  const [filter, setFilter] = useState("Vehicles");
  const [selectedIndex, setIndex] = useState(0);
  const handleIndex = (index: number) => {
    setIndex(index);
  };
  const hadleFilter = (filter: string) => {
    setFilter(filter);
  };
  const t = useTranslations("Home");
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={t(CategoriesMenu.label)}></Title.Label>
        <Title.Nav>
          {CategoriesMenu.subMenu.map((nav, index) => (
            <TitleNavItem
              key={nav}
              label={t(nav)}
              isActive={selectedIndex === index}
              onClick={() => {
                handleIndex(index);
                hadleFilter(nav);
              }}
            />
          ))}
        </Title.Nav>
      </Title.Root>
      <NewCarList filter={filter} />
    </PagePadding>
  );
};

export default NavNewCars;
