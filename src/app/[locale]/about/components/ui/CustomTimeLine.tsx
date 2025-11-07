"use client";

import { useTranslations } from "next-intl";
import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import { Activities } from "../../constants/timeline";

const CustomTimeLine = () => {
  const t = useTranslations("About");

  return (
    <div className="w-full py-8 lg:py-12">
      {/* Modern vertical center line */}
      <div className="relative max-w-4xl mx-auto">
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 opacity-30"
          style={{ backgroundColor: "#5d5050" }}
        />

        {/* Timeline items with zig-zag layout */}
        <div className="space-y-12">
          {Activities.activities.map((event, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center`}
              >
                {/* Left side content */}
                <div className={`w-1/2 ${isEven ? "pr-6" : "pl-6"}`}>
                  <div className="bg-white rounded-lg p-4 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 group">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#F8B067" }}
                      />
                      <Text 
                        size="xs" 
                        className="font-semibold uppercase tracking-wide"
                        style={{ color: "#5d5050" }}
                      >
                        {event.date}
                      </Text>
                    </div>

                    {/* Title */}
                    <Text 
                      size="md" 
                      className="font-bold mb-2 leading-tight"
                      style={{ color: "#5d5050" }}
                    >
                      {t(event.event)}
                    </Text>

                    {/* Description */}
                    <Text 
                      size="sm" 
                      className="leading-relaxed"
                      style={{ color: "#2B415A" }}
                    >
                      {t(event.info)}
                    </Text>

                    {/* Subtle hover accent */}
                    <div 
                      className="w-0 group-hover:w-full h-0.5 mt-3 transition-all duration-300"
                      style={{ backgroundColor: "#355C7D" }}
                    />
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: "#5d5050" }}
                  />
                </div>

                {/* Right side spacer */}
                <div className="w-1/2" />
              </motion.div>
            );
          })}
        </div>

        {/* Start/End markers */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#F8B067" }}
          />
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#355C7D" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTimeLine;