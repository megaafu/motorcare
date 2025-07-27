import { IBlog } from "@/model/blog";
import api from "./api";

async function getBlogs(locale: string): Promise<IBlog[]> {
  const response = await api(`/blogs/${locale}`);
  const data = await response.data;
  return data.data as IBlog[];
}

export default getBlogs;
