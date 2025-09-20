"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Nav } from './(site)/navigation';

export default function Template({ children }) {
  const pathname = usePathname();
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}


