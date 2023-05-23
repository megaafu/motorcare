"use client"

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import PagePadding from '@/components/ui/PagePadding';
import Menu from '@/components/Menu';
import ContentPadding from '@/components/ui/ContentPadding';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import Card from '@/components/ui/Card';

interface CategoryProps {
  cars: string[];
}

const Categories: React.FC<CategoryProps> = ({ cars }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container>
      <PagePadding>
        <Menu title="Categories" navigation={["Hatch", "Sedan", "Picape"]} />
        <ContentPadding>
          <HorizontalScroll>
            {cars.map((car, index) => (
              <Card key={index}>
                <div className="flex justify-center px-20">
                  <a href="#">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="mx-auto pt-8"
                      src={car}
                      alt=""
                    />
                    <p className="text-bold text-2xl px-12 py-4">Nissan</p>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full mxy-2 w-48 bg-white rounded shadow-lg"
                        >
                          <div className="p-4">SubMenu</div>
                          <div className="p-4">SubMenu</div>
                          <div className="p-4">SubMenu</div>
                          <div className="p-4">SubMenu</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </a>
                </div>
              </Card>
            ))}
          </HorizontalScroll>
        </ContentPadding>
      </PagePadding>
    </Container>
  );
};

export default Categories;
