"use client";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const WhistleBlowing = () => {
  const t = useTranslations("Whistleblowing");

  return (
    <main>
      <Container>
        <PagePadding>
          <section className="grid h-screen  content-center">
            <h4 className="text-center text-4xl"> {t("whistleblowing")} </h4>
            <div className="mx-auto h-1 w-[12vw] bg-primary bg-center"></div>
            <p
              className=" mx-auto mt-4 max-w-4xl text-center"
              dangerouslySetInnerHTML={{
                __html: t("description").replace(/\n/g, "<br/>"),
              }}
            ></p>
            <Link
              href="https://kjaergroup.integrityline.com/frontpage"
              target="blank"
              className=" mx-auto mt-8 bg-primary px-6 py-3 text-white"
            >
              {t("report")}
            </Link>
          </section>
        </PagePadding>
      </Container>
    </main>
  );
};

export default WhistleBlowing;
