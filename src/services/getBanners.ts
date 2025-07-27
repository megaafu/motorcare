import { IBanner } from "@/model/banner";
import api from "./api";

async function getBanners(locale: string): Promise<IBanner[]> {
  const response = await api(`/destaques/${locale}`);
  const data = await response.data;
  return data.data as IBanner[];
}

export default getBanners;
