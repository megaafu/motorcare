"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button, Title, Text } from "@mantine/core";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";

const resources = [
  {
    title: "MOVE to Green VOL. 1",
    description: "Introdução ao movimento e primeiras iniciativas",
    file: "/files/vol1.pdf",
    available: true,
  },
  {
    title: "MOVE to Green VOL. 2",
    description: "Primeiros veículos elétricos e casos de sucesso",
    file: "/files/vol2.pdf",
    available: true,
  },
  {
    title: "MOVE to Green VOL. 3",
    description: "Expansão e infraestrutura de carregamento",
    file: "/files/vol3.pdf",
    available: true,
  },
  {
    title: "Documento Principal",
    description: "Relatório completo do movimento MOVE to Green",
    file: "/files/movetogreen.pdf",
    available: true,
  },
];

export default function ResourcesSection() {
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
              Recursos MOVE to Green
              <br />
              <span className="text-gray-800">
                Aprofunde Seu Conhecimento
              </span>
            </Title>
            <Text className="text-sm md:text-base max-w-4xl text-gray-600">
              Explore os volumes do nosso relatório{" "}
              <span className="font-semibold">MOVE to Green</span> e conheça
              as iniciativas que estão moldando o futuro sustentável da
              mobilidade.
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
                    {resource.title}
                  </Title>
                  <Text className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
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
                      Baixar PDF
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
                    Em breve
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
