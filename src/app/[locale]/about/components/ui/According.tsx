"use client";

import { useTranslations } from "next-intl";
import { Card, Text } from "@mantine/core";
import { AllAcording } from "../../constants/acordings";
import Row from "@/components/ui/Row";

const CustomCards = () => {
  const t = useTranslations("About");

  // Helper function to render description with titles
  const renderDescription = (acording: any) => {
    if (acording.id === 1) { // Mission & Vision merged card
      const items = [];
      let currentSection = null;
      
      for (const desc of acording.description) {
        if (desc === "mission_title") {
          currentSection = "mission";
          items.push(
            <div key="mission-title" className="mb-2 mt-1">
              <Text fw={600} size="sm" className="text-primary-700">
                {t("mission")}
              </Text>
            </div>
          );
        } else if (desc === "vision_title") {
          currentSection = "vision";
          items.push(
            <div key="vision-title" className="mb-2 mt-4">
              <Text fw={600} size="sm" className="text-primary-700">
                {t("vision")}
              </Text>
            </div>
          );
        } else {
          items.push(
            <li 
              key={desc}
              className="
                flex 
                items-start 
                transition-all 
                duration-300 
                group-hover:translate-x-1
                hover:translate-x-2
                py-1
                rounded-lg
                px-2
                hover:bg-primary/5
              "
            >
              <span className="
                w-1.5 
                h-1.5 
                rounded-full 
                bg-primary 
                mt-2 
                mr-3 
                flex-shrink-0
                group-hover:bg-primary-600
                transition-colors 
                duration-300
              " />
              <span className="
                text-sm 
                leading-relaxed
                group-hover:text-gray-700
                transition-colors 
                duration-300
              ">
                {t(desc)}
              </span>
            </li>
          );
        }
      }
      
      return <ul className="list-none space-y-2">{items}</ul>;
    } else {
      // Regular card rendering for other items
      return (
        <ul className="list-none space-y-2">
          {acording.description.map((description: string, index: number) => (
            <li 
              key={index} 
              className="
                flex 
                items-start 
                transition-all 
                duration-300 
                group-hover:translate-x-1
                hover:translate-x-2
                py-1
                rounded-lg
                px-2
                hover:bg-primary/5
              "
            >
              <span className="
                w-1.5 
                h-1.5 
                rounded-full 
                bg-primary 
                mt-2 
                mr-3 
                flex-shrink-0
                group-hover:bg-primary-600
                transition-colors 
                duration-300
              " />
              <span className="
                text-sm 
                leading-relaxed
                group-hover:text-gray-700
                transition-colors 
                duration-300
              ">
                {t(description)}
              </span>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <Row className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
      {AllAcording.acordings.map((acording, index) => (
        <Card
          key={acording.id}
          shadow="sm"
          padding="lg"
          radius="lg"
          withBorder
          className="
            relative 
            overflow-hidden 
            bg-gradient-to-br from-white to-gray-50/80 
            border border-gray-200/60
            transition-all 
            duration-300 
            ease-out
            hover:shadow-xl 
            hover:scale-[1.02]
            hover:border-primary/20
            hover:bg-gradient-to-br hover:from-white hover:to-primary/5
            group
            h-full 
            flex 
            flex-col
          "
        >
          {/* Animated background element */}
          <div className="absolute top-0 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-500" />
          
          {/* Icon container with enhanced styling */}
          <div className="
            mb-4 
            flex 
            justify-center 
            relative
            z-10
          ">
            <div className="
              p-3 
              rounded-2xl 
              bg-gradient-to-br from-primary/10 to-primary/5 
              group-hover:from-primary/20 group-hover:to-primary/10
              transition-all 
              duration-300
              shadow-sm
              group-hover:shadow-md
            ">
              {<acording.icon className="
                w-6 h-6 
                md:w-8 md:h-8 
                text-primary 
                transition-transform 
                duration-300 
                group-hover:scale-110
                group-hover:text-primary-600
              " />}
            </div>
          </div>
          
          {/* Title with enhanced typography */}
          <Text 
            fw={700} 
            size="md" 
            mb="md" 
            className="
              text-center 
              text-gray-900
              group-hover:text-primary-700
              transition-colors 
              duration-300
              relative
              z-10
            "
          >
            {acording.id === 1 ? t("mission_vision") : t(acording.title)}
          </Text>

          {/* Enhanced list with better spacing and animations */}
          <div className="
            flex-grow 
            relative
            z-10
          ">
            {renderDescription(acording)}
          </div>

          {/* Subtle hover border effect */}
          <div className="
            absolute 
            inset-0 
            rounded-lg 
            border-2 
            border-transparent 
            group-hover:border-primary/10 
            transition-all 
            duration-300 
            pointer-events-none
          " />
        </Card>
      ))}
    </Row>
  );
};

export default CustomCards;