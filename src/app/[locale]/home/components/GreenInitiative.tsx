"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import { Leaf } from "lucide-react"; // optional icon
import Container from "@/components/ui/Container";
import Row from "@/components/ui/Row";
import { useTranslations } from "next-intl";

export default function GreenInitiative() {

  const t = useTranslations("Home");
  return (
    <Container>
      <Row className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-72 sm:h-96 overflow-hidden "
        >
          <Image
            src="/images/green.png"
            alt="Green Initiative"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            {t("title")}
          </h2>

          <p className="mt-4 text-gray-600 ">
            {t("content")}
          </p>

          {/* CTA Button */}
          <a href="/files/movetogreen.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              leftIcon={<Leaf size={18} />}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 text-sm font-medium shadow-md"
            >
              {t("button")}
            </Button>
          </a>
        </motion.div>
      </Row>
    </Container >
  );
}

