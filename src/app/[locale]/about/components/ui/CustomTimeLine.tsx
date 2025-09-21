"use client";

import { useTranslations } from "next-intl";
import { Timeline, Card, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Activities } from "../../constants/timeline";

const CustomTimeLine = () => {
  const t = useTranslations("About");

  return (
    <div className="w-full max-w-4xl mx-auto py-4 md:py-6 px-4">
      <Timeline
        color="#F8B067"
        active={0}
        bulletSize={28}
        lineWidth={2}
        className="w-full"
      >
        {Activities.activities.map((event, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F8B067", color: "#fff" }}
              >
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
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
              <Text size="xs" style={{ color: "#355C7D" }} className="font-medium">
                {event.date}
              </Text>
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                withBorder
                shadow="sm"
                radius="md"
                className="transition-transform hover:scale-[1.01] hover:shadow-md p-3 md:p-4"
                style={{
                  borderColor: "#F8B067",
                  borderWidth: "1px",
                }}
              >
                <Title
                  size="sm"
                  order={4}
                  mb="xs"
                  style={{ color: "#355C7D" }}
                  className="text-sm md:text-base font-semibold"
                >
                  {t(event.event)}
                </Title>
                <Text size="sm" className="text-xs md:text-sm">
                  {t(event.info)}
                </Text>
              </Card>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>

      {Activities.activities.length === 0 && (
        <Text style={{ color: "#F8B067" }} mt="lg" ta="center" size="sm">
          No activities available.
        </Text>
      )}
    </div>
  );
};

export default CustomTimeLine;