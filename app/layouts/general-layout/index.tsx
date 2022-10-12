import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { AiOutlineMenu } from "react-icons/ai";

import type { FuncComponent } from "~/models/common.types";

import { useGeneralLayout } from "~/controllers/general-layout";

import styles from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const GeneralLayout: FuncComponent = ({ children }) => {
  const { location, routes, title } = useGeneralLayout();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="wrapper grid h-24 grid-cols-2 items-center md:grid-cols-3">
        <div>
          <span className="flex items-center">
            {/* <motion.img
              className="h-10 w-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.7 }}
              src="/assets/avatar.png"
            /> */}
            <span className="overflow-hidden pr-4">
              <motion.h3
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{
                  duration: 1,
                  type: "spring",
                  bounce: 0.6,
                  delay: 0.1,
                }}
                className="text-xl font-bold text-cyan-900"
              >
                David Acevedo
                <span className="text-3xl text-sky-500">.</span>
              </motion.h3>
            </span>
          </span>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden justify-center gap-4 md:flex"
        >
          {routes.map((route) => (
            <motion.span key={route.label} variants={item}>
              <Link
                to={route.path}
                className={clsx("text-gray-400", {
                  "text-sky-600": route.path === location.pathname,
                })}
              >
                {route.label}
              </Link>
            </motion.span>
          ))}
        </motion.div>
        <div className="flex justify-end">
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <AiOutlineMenu size={25} />
          </motion.button>
          <Link to="/contact" className="hidden md:block">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="rounded-full bg-secondary-900 px-4 py-3 leading-none text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
            >
              Get in touch
            </motion.button>
          </Link>
        </div>
      </header>
      {title && (
        <div key={title} className="h-[300px] overflow-hidden">
          <motion.div
            className="pointer-events-none h-auto"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h1 className="title relative left-0 m-0 whitespace-nowrap text-center font-semibold leading-none text-sky-200">
              {title}
            </h1>
          </motion.div>
        </div>
      )}
      <main className="wrapper">{children}</main>
    </>
  );
};
