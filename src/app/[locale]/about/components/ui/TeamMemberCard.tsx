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
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full max-w-xs mx-auto"
    >
      <Card
        shadow="md"
        radius="lg"
        padding="md"
        className="px-0 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-t-xl overflow-hidden flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-grow p-4">
          {/* Name */}
          <Text
            size="md"
            fw={600}
            className="text-gray-900 text-center line-clamp-2"
          >
            {name}
          </Text>

          {/* Role */}
          <Text
            size="sm"
            c="dimmed"
            className="text-gray-500 text-center mt-1 line-clamp-2"
          >
            {t(role)}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
}