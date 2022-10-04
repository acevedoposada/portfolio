import type { LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import styles from "~/styles/pages/index.css";

import workingImg from "~/assets/images/working.webp";
import background from "~/assets/images/background-wip.webp";
import animationData from "~/assets/lottie/fireworks-shine.json";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
      clearTimeout(timer);
    }, 300);
  }, []);

  return (
    <main className="absolute flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden bg-sky-300">
      <img
        src={background}
        alt="background"
        className="h-full w-full bg-left object-cover"
      />
      <div className="glass absolute h-full w-full" />

      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div className="relative h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
          <motion.div
            className="absolute z-[2] h-full w-full overflow-hidden rounded-full border-4 shadow-lg"
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
          {showAnimation && (
            <div className="animation absolute top-1/2 left-1/2 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 cursor-default opacity-60 md:h-[850px] md:w-[850px]">
              <Lottie
                height="100%"
                width="100%"
                options={{
                  autoplay: true,
                  loop: false,
                  animationData: animationData,
                }}
              />
            </div>
          )}
        </div>

        <div className="mt-4 overflow-hidden py-2">
          <motion.h1
            className="text-center text-3xl font-semibold text-white md:text-5xl"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Site on construction
          </motion.h1>
        </div>
        <div className="mt-5 flex flex-col items-center gap-1 md:mt-8 md:gap-2">
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
            href="/assets/Cristian_David_Acevedo_Posada_-_Semi_Senior_Frontend_Developer.pdf"
            download="Cristian_David_Acevedo_Posada_-_Semi_Senior_Frontend_Developer.pdf"
            className="cursor-pointer rounded-md bg-sky-400 px-6 py-3 text-2xl font-semibold text-white shadow-lg hover:bg-sky-500"
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
