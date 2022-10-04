import type { LinksFunction } from "@remix-run/node";
import { motion } from "framer-motion";

import styles from "~/styles/pages/index.css";

import workingImg from "~/assets/images/working.webp";
import background from "~/assets/images/background-index-wip.webp";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-sky-300">
      <img
        src={background}
        alt="background"
        className="h-screen w-full bg-left object-cover"
      />
      <div className="glass absolute h-full w-full" />

      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <motion.div
          className="h-[250px] w-[250px] overflow-hidden rounded-full border-4 shadow-lg md:h-[400px] md:w-[400px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          <motion.img
            className="h-full w-full object-cover"
            src={workingImg}
            initial={{ scale: 1.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween" }}
          />
        </motion.div>
        <div className="mt-4 overflow-hidden py-2">
          <motion.h1
            className="text-5xl font-semibold text-white"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building site
          </motion.h1>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="-mt-2 overflow-hidden pt-2">
            <motion.p
              className="text-white opacity-70"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              At this moment you can
            </motion.p>
          </div>
          <motion.a
            className="cursor-pointer rounded-[4px] bg-sky-400 px-5 py-2 text-xl font-semibold text-white shadow-lg hover:bg-sky-500 md:text-base"
            initial={{ scale: 0 }}
            animate={{ scale: 0.6 }}
            transition={{
              type: "spring",
              bounce: 0.25,
              delay: 1.1,
              duration: 0.5,
            }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </main>
  );
}
