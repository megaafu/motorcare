"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button, Title, Text } from "@mantine/core";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { useTranslations } from "next-intl";

const resources = [
  {
    titleKey: "resources.volumes.vol1.title",
    descriptionKey: "resources.volumes.vol1.description",
    file: "/files/vol1.pdf",
    available: true,
  },
  {
    titleKey: "resources.volumes.vol2.title",
    descriptionKey: "resources.volumes.vol2.description",
    file: "/files/vol2.pdf",
    available: true,
  },
  {
    titleKey: "resources.volumes.vol3.title",
    descriptionKey: "resources.volumes.vol3.description",
    file: "/files/vol3.pdf",
    available: true,
  },
  {
    titleKey: "resources.volumes.vol4.title",
    descriptionKey: "resources.volumes.vol4.description",
    file: "/files/movetogreen.pdf",
    available: true,
  },
];

export default function ResourcesSection() {
  const t = useTranslations("Green");

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 pt-16 pb-24">
      <Container>
        <PagePadding>
          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center text-center px-4">
            <Title
              order={1}
              className="text-3xl md:text-4xl font-extrabold text-teal-600"
            >
              {t("resources.title")}
              <br />
            </Title>
            <Text className="text-sm md:text-base max-w-4xl text-gray-600">
              {t("resources.description")}
            </Text>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center py-12">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="w-full max-w-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-teal-300 transition transform hover:-translate-y-2 bg-white flex flex-col justify-between"
              >
                <div>
                  <Title
                    order={4}
                    className="text-teal-600 font-bold text-lg mb-2"
                  >
                    {t(resource.titleKey)}
                  </Title>
                  <Text className="text-gray-600 text-sm leading-relaxed">
                    {t(resource.descriptionKey)}
                  </Text>
                </div>

                {resource.available ? (
                  <Link
                    href={resource.file}
                    target="_blank"
                    download
                    className="mt-6 block w-full"
                  >
                    <Button
                      color="teal"
                      radius="xl"
                      size="md"
                      className="w-full flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition"
                    >
                      <Download className="w-4 h-4" />
                      {t("resources.downloadPdf")}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    disabled
                    color="gray"
                    radius="xl"
                    size="md"
                    className="w-full mt-6 opacity-70"
                  >
                    {t("resources.comingSoon")}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </PagePadding>
      </Container>
    </section>
  );
}