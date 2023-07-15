import { useTransition } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function GlobalLoading() {
  const transition = useTransition();
  const active = transition.state !== "idle";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="loading-general"
          className="fixed z-50 flex h-full w-full flex-col items-center justify-center bg-blue-500 bg-opacity-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-96 select-none">
            <video src="/assets/loading-avatar.MOV" autoPlay loop muted />
          </div>
          <h3 className="mt-4 text-4xl font-semibold text-slate-700">
            Loading
          </h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
