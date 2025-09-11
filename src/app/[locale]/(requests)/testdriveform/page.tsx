import { Title } from "@/components/Title";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import { getTranslations } from "next-intl/server";
import TestDriveForm from "./components/TestDriveForm";

export default async function Requests() {
  const t = await getTranslations("Request");
  return (
    <>

      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col gap-5 justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">{t("test_drive")}</h4>
        <p className="text-white ">{t("info")}</p>
      </div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t("test_drive")} />
          </Title.Root>
          <Row className="lg:grid-cols-2">
            <TestDriveForm />
            <Paragraph> {t("test_drive_content")}</Paragraph>
          </Row>
        </PagePadding>
      </Container>
    </>
  );
}
