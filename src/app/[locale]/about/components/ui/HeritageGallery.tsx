"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "../../constants/galleryItems";
import { useTranslations } from "next-intl";

export default function HeritageGallery() {
  const t = useTranslations("About");
  return (
    <section className="">
      {/* Gallery */}
      <div className="justify-items-center justify-center flex flex-wrap gap-4 mt-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: item.rotation }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`p-4 rounded-xl shadow-lg transform relative `}
          >
            {/* Tape Effect */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 rotate-3 bg-secundary w-16 h-3 rounded-sm"></span>

            {/* Image */}
            <div className="relative w-52 h-48 rounded-md overflow-hidden shadow-md ">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Caption */}
            <p className="mt-3 text-center">
              {t(item.title)}
            </p>
          </motion.div>
        ))}
      </div>
    </section >
  );
}

