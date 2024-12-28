"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function MotionDiv({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return <motion.div {...props}>{children}</motion.div>;
}
