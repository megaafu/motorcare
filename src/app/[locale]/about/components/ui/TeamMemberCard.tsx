"use client";

import { Card, Text } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
}

export default function TeamMemberCard({ name, role, photo }: TeamMemberCardProps) {
  const t = useTranslations("About");
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full max-w-xs"
    >
      <Card
        shadow="md"
        radius="lg"
        padding="lg"
        className="px-0 hover:shadow-xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-300 "
          />
        </div>

        {/* Name */}
        <Text
          size="lg"
          fw={600}
          className="mt-4 text-gray-900 text-center"
        >
          {name}
        </Text>

        {/* Role */}
        <Text
          size="sm"
          c="dimmed"
          className="text-gray-500 text-center"
        >
          {t(role)}
        </Text>
      </Card>
    </motion.div>
  );
}

