"use client";

import { useTranslations } from "next-intl";
import { Timeline, Card, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { Activities } from "../../constants/timeline";

const CustomTimeLine = () => {
  const t = useTranslations("About");

  return (
    <div className="w-full max-w-4xl mx-auto py-8 md:py-12 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
      </motion.div>

      <Timeline
        color="linear-gradient(135deg, #F8B067, #355C7D)"
        active={Activities.activities.length - 1}
        bulletSize={36}
        lineWidth={3}
        className="w-full"
      >
        {Activities.activities.map((event, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex h-9 w-9 items-center justify-center rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #F8B067, #355C7D)",
                  color: "#fff",
                }}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            }
            title={
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <Text 
                  size="sm" 
                  className="font-bold bg-gradient-to-r from-[#355C7D] to-[#F8B067] bg-clip-text text-transparent"
                >
                  {event.date}
                </Text>
              </motion.div>
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                withBorder
                shadow="lg"
                radius="lg"
                className="transition-all duration-300 hover:shadow-xl p-4 md:p-6 relative overflow-hidden group"
                sx={{
                  border: "none",
                  background: "linear-gradient(135deg, rgba(53,92,125,0.08), rgba(248,176,103,0.08))",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #F8B067, #355C7D)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)',
                  }
                }}
              >
                {/* Gradient accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F8B067]/20 to-[#355C7D]/20 rounded-bl-2xl" />
                
                <Title
                  size="md"
                  order={3}
                  mb="sm"
                  className="text-lg md:text-xl font-bold group-hover:text-[#355C7D] transition-colors duration-300"
                  sx={{ 
                    color: "#355C7D",
                    background: "linear-gradient(135deg, #355C7D, #F8B067)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {t(event.event)}
                </Title>
                
                <Text 
                  size="sm" 
                  className="text-[#5d5050]/90 leading-relaxed text-sm md:text-base"
                >
                  {t(event.info)}
                </Text>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8B067]/5 to-[#355C7D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-8 md:mt-12"
      >
       
      </motion.div>

      {Activities.activities.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        </motion.div>
      )}
    </div>
  );
};

export default CustomTimeLine;