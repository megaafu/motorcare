"use client";
import { Refresh } from "@/components/icons/Icons";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error("Error caught:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <div className="flex h-screen flex-col justify-center self-center">
      <div className="bg-slate-100">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-6 self-center p-4">
              <h1 className="text-4xl font-bold text-red-600 md:text-5xl">
                {t("title")}
              </h1>
              <h2 className="text-2xl text-gray-800">
                {error.message || t("genericMessage")}
              </h2>
              
              {error.digest && (
                <p className="text-sm text-gray-500">
                  {t("errorCode")}: {error.digest}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-4">
                <PrimaryButton onClick={() => reset()}>
                  <div className="flex items-center gap-2">
                    <Refresh />
                    {t("tryAgain")}
                  </div>
                </PrimaryButton>
                
                <Link href="/" >
                  <PrimaryButton  className="border border-primary bg-transparent text-primary">
                    {t("goHome")}
                  </PrimaryButton>
                </Link>
              </div>
            </div>

            {/* Visual Error Representation */}
            <div className="hidden items-center justify-center md:flex">
              <div className="relative">
                <span className="text-[200px] font-bold text-light-text opacity-10">
                  {error.name || "ERROR"}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-red-500">!</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}