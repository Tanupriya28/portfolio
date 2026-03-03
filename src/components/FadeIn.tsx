import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeIn = ({ children, className = "", delay = 0 }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
