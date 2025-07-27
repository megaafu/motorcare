"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("Vehicles");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <PagePadding>
          <div className="flex min-h-[60vh] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md text-center"
            >
              {/* Error Icon */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                  <svg
                    className="h-10 w-10 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Error Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-4 text-3xl font-bold text-gray-900"
              >
                {t("vehicleNotFound")}
              </motion.h1>

              {/* Error Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 leading-relaxed text-gray-600"
              >
                {t("vehicleNotFoundMessage")}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.reload()}
                  className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  {t("tryAgain")}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </PagePadding>
      </Container>
    </main>
  );
}
