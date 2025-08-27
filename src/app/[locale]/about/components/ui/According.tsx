"use client";

import { useTranslations } from "next-intl";
import { Card, Text, } from "@mantine/core";
import { AllAcording } from "../../constants/acordings";
import Row from "@/components/ui/Row";

const CustomCards = () => {
  const t = useTranslations("About");

  return (
    <Row className="md:grid-cols-3">
      {AllAcording.acordings.map((acording) => (
        <Card
          key={acording.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="transition-transform hover:scale-[1.02] hover:shadow-lg px-5 py-3 bg-primary/10"
        >
          {<acording.icon />}
          <Text fw={700} size="lg" mb="sm">
            {t(acording.title)}
          </Text>

          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {acording.description.map((description, index) => (
              <li key={index}>{t(description)}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Row>
  );
};

export default CustomCards;
