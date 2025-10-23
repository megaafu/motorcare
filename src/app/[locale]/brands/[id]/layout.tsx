"use client";

import { useParams } from "next/navigation";
import BrandsHeader from "@/components/BrandsHeader/BrandsHeader";
import { notFound } from "next/navigation";
import { AllBrands } from "../../about/constants/brands";

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const brandId = params.id as string;

  const brand = AllBrands.brands.find((b) => b.id.toString() === brandId);

  if (!brand) return notFound();

  return (
    <main className="pt-16">
      {/* Shared Brand Header */}
      <BrandsHeader logo={brand.img} navLinks={brand.navs} brandName={brand.brand} />
      <div>{children}</div>
    </main>
  );
}
