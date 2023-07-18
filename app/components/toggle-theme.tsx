import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useContext } from "react";

import { ThemeContext } from "~/context/theme";

const ICON_SIZE = 24;

export const ToggleTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full  border-secondary-900 text-secondary-900 transition-all dark:border-gray-50 dark:text-white"
      onClick={toggleTheme}
    >
      <AnimatePresence>
        {!isDark ? (
          <motion.i
            key="light"
            className="absolute"
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            exit={{ x: -40 }}
          >
            <FiSun size={ICON_SIZE} />
          </motion.i>
        ) : (
          <motion.i
            key="dark"
            className="absolute"
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            exit={{ x: 40 }}
          >
            <FiMoon size={ICON_SIZE} />
          </motion.i>
        )}
      </AnimatePresence>
    </button>
  );
};
