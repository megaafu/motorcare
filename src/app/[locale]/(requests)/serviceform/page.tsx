import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { getTranslations } from "next-intl/server";
import ServicesForm from "./components/ServiceForm";
import CarouselImages from "@/components/ui/CarouselImages";

// Sample service images - replace with your actual images
const SERVICE_IMAGES = [
  "/images/service-1.jpg",
  "/images/service-2.jpg",
  "/images/service-3.jpg",
];

export default async function Requests() {
  const t = await getTranslations("Request");
  return (
    <>
      <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("service")}</h4>
        <p className="text-white ">{t("info")}</p>
      </div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t("service")} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <ServicesForm />
            <div className="mt-8">
              <Paragraph>{t("service_content")}</Paragraph>
              <div className="mt-12 p-10">
                <CarouselImages
                  images={SERVICE_IMAGES}
                  autoPlay={true}
                  interval={4000}
                  transitionTime={600}
                  showArrows={true}
                  showIndicators={true}
                  className="max-w-4xl mx-auto"
                />
              </div>
            </div>
          </Row>
        </PagePadding>
      </Container>
    </>
  );
}