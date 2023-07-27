import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import type { Variants } from "framer-motion";

import type { FuncComponent } from "~/models/common.types";

export interface TextFieldProps extends Partial<HTMLInputElement> {
  variants?: Variants;
  multiline?: boolean;
  fullWidth?: boolean;
  error?: boolean | string;
}

export const TextField: FuncComponent<TextFieldProps> = ({
  variants,
  multiline,
  className,
  fullWidth,
  error,
  ...props
}) => {
  const Element = multiline ? motion.textarea : motion.input;

  return (
    <div className="relative overflow-hidden">
      <Element
        variants={variants}
        className={clsx(
          {
            "w-full": fullWidth,
            "min-h-[150px] resize-none": multiline,
            "border border-red-600": error,
            "my-[1px]": !error,
          },
          "rounded-lg bg-sky-100 p-4 focus:outline-none dark:bg-zinc-600 dark:text-white",
          className
        )}
        {...(props as any)}
      />
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            className="absolute top-0 right-0 rounded-bl-md rounded-tr-lg bg-red-600 px-3 py-1 text-xs text-white"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
