import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { getTranslations } from "next-intl/server";
import BrandsForm from "./components/QuotesForm";

export default async function Requests() {
  const t = await getTranslations("Request");
  return (
    <>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col justify-center items-center">
        <h4 className="text-white text-4xl">{t("quote")}</h4>
      </div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t("quote")} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <BrandsForm />
            <Paragraph> </Paragraph>
          </Row>
        </PagePadding>
      </Container>
    </>
  );
}
