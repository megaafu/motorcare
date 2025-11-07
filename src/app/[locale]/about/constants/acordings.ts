import { ElementType } from "react";
import {
  MissionIcon,
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

const MissionVision: IAcordingItem = {
  id: 1,
  title: "mission_vision", 
  icon: MissionIcon,
  description: [
    "mission_title",
    "mission_description1", 
    "mission_description2",
    "vision_title", 
    "vision_description",
  ],
};

const Values: IAcordingItem = {
  id: 2,
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
  acordings: [MissionVision, Values],
};