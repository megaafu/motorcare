"use client";
import { IBlog } from "@/model/blog";
import getBlogs from "@/services/getBlogs";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

const useBlogs = () => {
  const locale = useLocale();
  return useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(locale),
  });
};

export default useBlogs;
