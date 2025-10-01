"use client";

import Image from "next/image";
import { Title, Text } from "@mantine/core";
import ResourcesSection from "./components/resource";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { Car, LeafyGreen, ZapIcon } from "lucide-react";

export default function GreenPage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[75vh] md:h-[80vh]">
        <Image
          src="/images/Img.png"
          alt="Car"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end py-10 px-6 md:px-12">
          <Title
            order={1}
            className="text-white text-3xl sm:text-5xl font-extrabold max-w-4xl drop-shadow-lg"
          >
            Transforme o Futuro Automotivo com Sustentabilidade
          </Title>
          <Text className="text-white/90 mt-4 max-w-3xl text-sm sm:text-lg leading-relaxed">
            Junte-se ao movimento Green da MotorCare e descubra como a inovação
            sustentável está revolucionando a indústria automotiva — cada
            quilômetro elétrico é uma vitória contra as mudanças climáticas.
          </Text>
        </div>
      </section>

      {/* 2. Intro Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-4">
            <Title order={2} className="text-2xl sm:text-3xl font-bold">
              O Movimento <span className="text-teal-600">Green</span> da{" "}
              <span className="text-teal-600">MotorCare</span>
            </Title>
            <Text className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Lideramos a transformação sustentável na indústria automotiva
              através de inovação, tecnologia limpa e responsabilidade ambiental.
            </Text>
          </div>
        </PagePadding>
      </Container>

      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center my-12">
            <div>
              <LeafyGreen className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">Energia Limpa</h3>
              <p className="text-gray-600 text-sm">Compromisso com fontes renováveis e autossuficientes.</p>
            </div>
            <div>
              <ZapIcon className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">Inovação</h3>
              <p className="text-gray-600 text-sm">Tecnologias de ponta para transformar mobilidade.</p>
            </div>
            <div>
              <Car className="mx-auto text-teal-600 h-10 w-10" />
              <h3 className="font-semibold mt-2">Impacto Global</h3>
              <p className="text-gray-600 text-sm">Estações e projetos pioneiros na África e além.</p>
            </div>
          </div>
        </PagePadding>
      </Container>


      {/* 3. Vision Section */}
      <Container>
        <PagePadding>
          <div className="text-center space-y-4">
            <Title order={2} className="text-2xl sm:text-3xl font-bold">
              Um Mundo <span className="text-teal-600">Neutro</span> em Carbono
            </Title>
            <Text className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Desde 2003, o KJAER GROUP tem sido pioneiro em sustentabilidade. O
              MOVE to Green é a evolução desse compromisso, focado em criar um
              ecossistema de mobilidade e consumo de energia verde.
            </Text>
          </div>
        </PagePadding>
      </Container>

      {/* 4. Features Grid */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organizações",
                text: "A transformação está no consumo de energia mais renovável e foco na própria pegada de carbono, como energia solar e mudança de hábitos de trabalho.",
              },
              {
                title: "Mobilidade",
                text: "Transformando frotas de veículos de combustível fóssil para híbridos e/ou elétricos, incluindo e-scooters e EVs (veículos elétricos).",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/images/car-feature.png"
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <Title order={4} className="mt-2 text-lg font-semibold">
                    {item.title}
                  </Title>
                  <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </PagePadding>
      </Container>

      {/* 5. Banner Image */}
      <Container>
        <PagePadding>
          <div className="w-full">
            <Image
              src="/images/bg-green.png"
              alt="Green Movement"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </PagePadding>
      </Container>

      {/* 6. Charging Section */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <Title order={4} className="text-2xl sm:text-3xl font-bold">
                Carregamento Inteligente para um Futuro Elétrico
              </Title>
            </div>
            <div className="md:col-span-2">
              <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                A transição para EVs exige uma infraestrutura de carregamento
                robusta. O MOVE to Green está construindo essa rede, com
                estações de carregamento AC e DC e projetos inovadores como o
                carport solar.
              </Text>
            </div>
          </div>
        </PagePadding>
      </Container>

      {/* 7. Tech Features */}
      <Container>
        <PagePadding>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ZapIcon className="text-teal-600" />,
                title: "Carregamento DC",
                text: "Estações de carregamento rápido de 25 kWh instaladas em Maputo e Kampala, com plugs ChadeMo e CCS2.",
              },
              {
                icon: <LeafyGreen className="text-teal-600" />,
                title: "Carport Solar",
                text: "Projeto inovador em parceria com G-Sol Energy para carregamento 100% verde e autossuficiente através de energia solar.",
              },
              {
                icon: <Car className="text-teal-600" />,
                title: "Primeira Estação",
                text: "Inauguramos a primeira estação de carregamento de EV em Maputo, Moçambique, pioneira no mercado africano.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <Title order={4} className="mb-2 flex items-center gap-2 text-lg font-semibold">
                  {item.icon}
                  {item.title}
                </Title>
                <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </Text>
              </div>
            ))}
          </div>
        </PagePadding>
      </Container>

      {/* 8. CTA Banner */}
      <section className="bg-teal-600 text-white py-16 mt-12">
        <Container>
          <PagePadding>
            <div className="text-center space-y-4">
              <Title order={2} className="text-2xl sm:text-3xl font-bold">
                Faça Parte do Movimento Verde
              </Title>
              <Text className="max-w-3xl mx-auto text-white/90 text-sm sm:text-base">
                Estamos construindo um legado de sustentabilidade e inovação.
                Sua participação é fundamental para acelerarmos a transição para
                um mundo neutro em carbono. Entre em contato e descubra como
                você pode contribuir.
              </Text>
            </div>
          </PagePadding>
        </Container>
      </section>

      {/* 9. Comparison / Resources */}
      <ResourcesSection />
    </main>
  );
}
