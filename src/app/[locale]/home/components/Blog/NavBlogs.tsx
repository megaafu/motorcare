"use client";

import { Title } from "@/components/Title";
import PagePadding from "@/components/ui/PagePadding";
import { BlogMenu } from "@/constants/menuData";
import { useTranslations } from "next-intl";
import BlogList from "./BlogList";

const NavBlogs = () => {
  const t = useTranslations("Home");
  return (
    <PagePadding>
      <Title.Root>
        <Title.Label label={t(BlogMenu.label)} />
      </Title.Root>
      <BlogList />
    </PagePadding>
  );
};

export default NavBlogs;
