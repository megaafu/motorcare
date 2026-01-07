"use client";

import { useTranslations } from "next-intl";
import { Card, Text } from "@mantine/core";
import { AllAcording, IAcordingItem } from "../../constants/acordings";
import Row from "@/components/ui/Row";

const CustomCards = () => {
  const t = useTranslations("About");

  const renderDescription = (acording: IAcordingItem) => {
    if (acording.id === 1) {
      const items: React.ReactNode[] = [];

      for (const desc of acording.description) {
        if (desc === "mission_title") {
          items.push(
            <div key="mission-title" className="mb-2 mt-1">
              <Text fw={600} size="sm" className="text-white">
                {t("mission")}
              </Text>
            </div>
          );
        } else if (desc === "vision_title") {
          items.push(
            <div key="vision-title" className="mb-2 mt-4">
              <Text fw={600} size="sm" className="text-white">
                {t("vision")}
              </Text>
            </div>
          );
        } else {
          items.push(
            <li
              key={desc}
              className="flex items-start py-1 px-2 rounded-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm leading-relaxed text-white/90">
                {t(desc)}
              </span>
            </li>
          );
        }
      }

      return <ul className="list-none space-y-2">{items}</ul>;
    }

    return (
      <ul className="list-none space-y-2">
        {acording.description.map((description: string) => (
          <li
            key={description}
            className="flex items-start py-1 px-2 rounded-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
            <span className="text-sm leading-relaxed text-white/90">
              {t(description)}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Row className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
      {AllAcording.acordings.map((acording) => (
        <Card
          key={acording.id}
          shadow="sm"
          padding="lg"
          radius="lg"
          withBorder
          className="relative overflow-hidden bg-primary/80 text-white border border-white/10 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group h-full flex flex-col before:absolute before:inset-0 before:bg-black/20 before:pointer-events-none"
         
        >
          {/* decorative background */}
          <div className="absolute top-0 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl transition-all duration-500 group-hover:scale-150" />

          {/* icon */}
          <div className="mb-4 flex justify-center relative z-10">
            <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-sm text-white transition-all duration-300 shadow-sm group-hover:bg-white/25">
              <acording.icon className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* title */}
          <Text
            fw={700}
            size="md"
            mb="md"
            className="text-center text-white group-hover:text-white/90 transition-colors duration-300 relative z-10"
          >
            {acording.id === 1 ? t("mission_vision") : t(acording.title)}
          </Text>

          {/* content */}
          <div className="flex-grow relative z-10">
            {renderDescription(acording)}
          </div>

          {/* hover border */}
          <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
        </Card>
      ))}
    </Row>
  );
};

export default CustomCards;