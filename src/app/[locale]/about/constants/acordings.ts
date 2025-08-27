import React, { ElementType } from "react";
import {
  MissionIcon,
  VisionIcon,
  ValuesIcon,
} from "@/components/icons/Icons";

interface IAcordingItem {
  id: number;
  title: string;
  icon: ElementType;
  description: string[];
}

interface IAcordings {
  acordings: IAcordingItem[];
}

const Mission: IAcordingItem = {
  id: 1,
  title: "mission",
  icon: MissionIcon,
  description: ["mission_description"],
};

const Vision: IAcordingItem = {
  id: 2,
  title: "vision",
  icon: VisionIcon,
  description: ["vision_description"],
};

const Values: IAcordingItem = {
  id: 3,
  title: "values",
  icon: ValuesIcon,
  description: [
    "values_description1",
    "values_description2",
    "values_description3",
    "values_description4",
  ],
};

export const AllAcording: IAcordings = {
  acordings: [Values, Mission, Vision],
};
