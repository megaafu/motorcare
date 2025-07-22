import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASEURL = "http://localhost:8000/"
// export const BASEURL = "https://api.champier.co.mz/";

