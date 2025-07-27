"use client";
import { IBanner } from "@/model/banner";
import getBanners from "@/services/getBanners";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

const useBanners = () => {
  const locale = useLocale();
  return useQuery<IBanner[]>({
    queryKey: ["destaques"],
    queryFn: () => getBanners(locale),
  });
};

export default useBanners;
