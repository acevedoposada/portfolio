import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import { Card } from "./card";
import { useEffect } from "react";

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  className?: string;
  fullWidth?: boolean;
  autoHideDuration?: number;
}

export const Dialog: FuncComponent<DialogProps> = ({
  children,
  open,
  className,
  fullWidth,
  onClose,
  autoHideDuration,
}) => {
  useEffect(() => {
    let timeout: any;
    if (autoHideDuration) {
      timeout = setTimeout(() => onClose?.(), autoHideDuration);
    }
    return () => clearTimeout(timeout);
  }, [autoHideDuration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <div
            className={clsx(
              { "w-full": fullWidth },
              "absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
              className
            )}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="mx-auto p-4 dark:text-white" disableHover>
                {children}
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-40 h-full w-full bg-primary-50 bg-opacity-50 backdrop-blur-sm dark:bg-zinc-700 dark:bg-opacity-50"
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  );
};
