"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Card({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-purple-600/40 p-6 rounded-xl shadow-lg border border-purple-500/30"
    >
      <p className="text-lg font-medium mb-2">{title}</p>
      {children}
    </motion.div>
  );
}
