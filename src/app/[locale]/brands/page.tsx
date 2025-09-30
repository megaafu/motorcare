"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Title, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { AllBrands } from "../about/constants/brands";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";

export default function BrandsPage() {
    const t = useTranslations("About");

    return (
        <main className="pt-16">
            {/* Page title */}
            <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
                <h4 className="text-white text-3xl md:text-4xl font-medium">{t("brands")}</h4>
                <p className="text-white text-sm md:text-base max-w-2xl">{t("info")}</p>
            </div>

            {/* List of brands */}
            <Container>
                <PagePadding>
                    <div className="grid grid-cols-2 gap-10 items-center">
                        {AllBrands.brands.map((brand) => (
                            <div
                                key={brand.id}
                                className="flex flex-col sm:flex-row items-start gap-6 border-b border-gray-200 pb-8"
                            >
                                {/* Logo */}
                                <div className="w-52 h-52 relative shrink-0">
                                    <Image
                                        src={brand.img}
                                        alt={brand.brand}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Vertical Divider */}
                                <div className="w-[1.5px] bg-primary  self-stretch"></div>

                                {/* Content */}
                                <div className="flex-1">
                                    <Title order={4} className="mb-2">
                                        {brand.brand}
                                    </Title>
                                    <Text className="text-gray-600 items-center">{t(`${brand.info}`)}</Text>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Global contact button */}
                    <div className="flex justify-center mt-12">
                        <Link href="/peaceform">
                            <Button color="blue" radius="md" size="md">
                                {t("contact")}
                            </Button>
                        </Link>
                    </div>
                </PagePadding>
            </Container>

        </main>
    );
}
