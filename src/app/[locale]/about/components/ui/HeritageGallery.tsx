"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "../../constants/galleryItems";
import { useTranslations } from "next-intl";

export default function HeritageGallery() {
  const t = useTranslations("About");
  return (
    <section className="w-full">
      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 justify-items-center">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, rotate: item.rotation }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`p-3 md:p-4 rounded-xl shadow-lg transform relative w-full max-w-xs`}
          >
            {/* Tape Effect */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3 bg-secundary w-12 h-2 md:w-16 md:h-3 rounded-sm opacity-90 z-10"></span>

            {/* Image Container */}
            <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-md mt-2">
              <Image
                src={item.image}
                alt={t(item.title)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1366px) 33vw, 25vw"
                className="object-cover"
                priority={index < 2} // Only prioritize first 2 images
              />
            </div>
            <p className="mt-3 text-center text-sm md:text-base font-medium line-clamp-2 px-1">
              {t(item.title)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}