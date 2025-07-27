import {
  Accessorie,
  Car,
  Coins,
  Service,
  TradeIn,
} from "@/components/icons/Icons";
import { ElementType } from "react";

interface items {
  link: string;
  label: string;
  icon: ElementType;
}

export const links: items[] = [
  {
    link: "/serviceform",
    label: "service",
    icon: Service,
  },
  {
    link: "/testdriveform",
    label: "test_drive",
    icon: Car,
  },
  {
    link: "/peaceform",
    label: "parts_accessories",
    icon: Accessorie,
  },
  {
    link: "/quotesform",
    label: "quote",
    icon: Coins,
  },
  {
    link: "/tradeinform",
    label: "trade_in",
    icon: TradeIn,
  },
];
