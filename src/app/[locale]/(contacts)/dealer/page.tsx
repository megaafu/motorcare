import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import Mapp from "./components/Mapper";

const Motorcare = () => {
  return (
    <Container className="mt-[12vh] max-w-screen-2xl">
      <PagePadding>
        <Mapp/>
      </PagePadding>
    </Container>
  );
};

export default Motorcare;
