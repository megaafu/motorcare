"use client";

import Image from "next/image";
import {  Title, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { AllBrands } from "../about/constants/brands";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";

export default function BrandsPage() {
    const t = useTranslations("About");
    const router = useRouter();

    const handleBrandClick = (brandId: string, brandName: string) => {
        // Special handling for Nissan - open in new tab
        if (brandName.toLowerCase() == "nissan") {
            window.open("https://www.nissan.co.mz/", "_blank");
            return;
        }
        
        // Special handling for Renault - navigate to /renault
        if (brandName.toLowerCase() == "renault") {
            router.push("/renault");
            return;
        }
        
        // Default behavior for other brands
        router.push(`/brands/${brandId}`);
    };

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {AllBrands.brands.map((brand) => (
                            <div
                                key={brand.id}
                                onClick={() => handleBrandClick(brand.id.toString(), brand.info)}
                                className="flex flex-col sm:flex-row items-start gap-6 border border-gray-200 pb-8 hover:bg-gray-50 p-6 rounded-xl transition-all duration-500 cursor-pointer hover:shadow-lg group hover:-translate-y-2"
                            >
                                {/* Logo */}
                                <div className="w-40 h-40 relative shrink-0 mx-auto sm:mx-0">
                                    <Image
                                        src={brand.img}
                                        alt={brand.brand}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>

                                {/* Vertical Divider - Hidden on mobile */}
                                <div className="hidden sm:block w-[1.5px] bg-gray-300 self-stretch group-hover:bg-primary transition-colors duration-500"></div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    <Title order={4} className="mb-3 group-hover:text-primary transition-colors duration-300">
                                        {brand.brand}
                                    </Title>
                                    <Text className="text-gray-600 leading-relaxed">{t(`${brand.info}`)}</Text>
                                    
                                    {/* Click hint */}
                                    <div className="mt-4">
                                        <Text className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
                                            {brand.brand.toLowerCase() === "nissan" 
                                                ? "Visit website ↗" 
                                                : "Click to learn more →"}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </PagePadding>
            </Container>

        </main>
    );
}