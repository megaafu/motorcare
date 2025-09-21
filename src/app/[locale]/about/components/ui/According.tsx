"use client";

import { useTranslations } from "next-intl";
import { Card, Text } from "@mantine/core";
import { AllAcording } from "../../constants/acordings";
import Row from "@/components/ui/Row";

const CustomCards = () => {
  const t = useTranslations("About");

  return (
    <Row className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {AllAcording.acordings.map((acording) => (
        <Card
          key={acording.id}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
          className="transition-transform hover:scale-[1.01] hover:shadow-md p-4 bg-primary/10 h-full flex flex-col"
        >
          <div className="mb-3 flex justify-center">
            {<acording.icon className="w-8 h-8 md:w-10 md:h-10" />}
          </div>
          
          <Text fw={600} size="sm" mb="sm" className="text-center md:text-left">
            {t(acording.title)}
          </Text>

          <ul className="list-disc pl-4 space-y-1 text-gray-600 flex-grow">
            {acording.description.map((description, index) => (
              <li key={index} className="text-xs md:text-sm">
                {t(description)}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </Row>
  );
};

export default CustomCards;