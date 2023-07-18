import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

export type IconButtonProps = HTMLMotionProps<"button">;

export const IconButton: FuncComponent<IconButtonProps> = (props) => {
  const { className, children } = props;
  return (
    <motion.button
      {...props}
      className={clsx(
        className,
        "flex h-8 min-h-[2rem] w-8 min-w-[2rem] items-center justify-center rounded-full border-2 border-gray-400 bg-gray-100 text-gray-400 transition-all group-hover:border-primary-500 group-hover:bg-primary-100 group-hover:text-primary-500 dark:bg-transparent dark:group-hover:bg-zinc-800"
      )}
    >
      {children}
    </motion.button>
  );
};
