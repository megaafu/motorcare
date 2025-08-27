"use client";

import { useTranslations } from "next-intl";
import { Timeline, Card, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Activities } from "../../constants/timeline";

const CustomTimeLine = () => {
  const t = useTranslations("About");

  return (
    <div className="max-w-2xl py-6">
      <Timeline
        color="#F8B067"
        active={0}
        bulletSize={32}
        lineWidth={3}
      >
        {Activities.activities.map((event, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F8B067", color: "#fff" }}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            }
            title={
              <Text size="sm" style={{ color: "#355C7D" }}>
                {event.date}
              </Text>
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                withBorder
                shadow="md"
                radius="md"
                className="transition-transform hover:scale-[1.02] hover:shadow-lg"
                style={{
                  borderColor: "#F8B067",
                }}
              >
                <Title
                  size="sm"
                  order={4}
                  mb="xs"
                  style={{ color: "#355C7D" }}
                >
                  {t(event.event)}
                </Title>
                <Text>{t(event.info)}</Text>
              </Card>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>

      {Activities.activities.length === 0 && (
        <Text style={{ color: "#F8B067" }} mt="lg" ta="center">
          No activities available.
        </Text>
      )}
    </div>
  );
};

export default CustomTimeLine;

