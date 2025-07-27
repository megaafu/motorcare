'use client';

import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";

const Mapp = dynamic(() => import("./components/Mapper"), {
  ssr: false,
});

const Motorcare = () => {
  return (
    <Container className="mt-[12vh] max-w-screen-2xl">
      <PagePadding>
        <Mapp />
      </PagePadding>
    </Container>
  );
};

export default Motorcare;
