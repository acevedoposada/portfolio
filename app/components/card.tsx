import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

export interface CardProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export const Card: FuncComponent<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      className={clsx(
        "rounded-3xl bg-card shadow-lg shadow-primary-100 transition-shadow hover:shadow-primary-200",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
