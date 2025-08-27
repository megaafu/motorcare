import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { getTranslations } from "next-intl/server";
import CarrearForm from "./form/CarrearForm";

export default async function Requests() {
  const t = await getTranslations("Contacts");
  return (
    <>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("carrear")}</h4>
      </div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t("carrear")} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <CarrearForm />
            <Paragraph>{t("carrear_info")}</Paragraph>
          </Row>
        </PagePadding>
      </Container>
    </>
  );
}
