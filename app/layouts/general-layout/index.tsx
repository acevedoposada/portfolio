import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";
import { useGeneralLayout } from "~/controllers/general-layout";
import { Footer } from "~/components";

import styles from "./styles.css";
import {
  container,
  item,
  navbarItemsVariants,
  navbarVariants,
  toogleButtonVariants,
} from "./animations";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const GeneralLayout: FuncComponent = ({ children }) => {
  const { location, routes, title, showNavbar, toggleNavbar } =
    useGeneralLayout();

  const links = routes.map((route) =>
    route.label && route.enable ? (
      <motion.span key={route.label} variants={item}>
        <Link
          to={route.path}
          onClick={toggleNavbar}
          className={clsx("text-gray-400 transition-all hover:text-gray-600", {
            "text-sky-600 hover:text-sky-600": route.path === location.pathname,
          })}
        >
          {route.label}
        </Link>
      </motion.span>
    ) : null
  );

  return (
    <>
      <div className="h-24 w-full" />
      <motion.header
        variants={navbarVariants}
        initial="collapsed"
        animate={showNavbar ? "amplified" : "collapsed"}
        className={clsx(
          "header fixed top-0 right-0 left-0 z-10 flex h-24 flex-col items-center gap-[40px] overflow-hidden bg-sky-100 bg-opacity-40 pt-6 pb-8 md:pt-8",
          {
            "!bg-opacity-80": showNavbar,
          }
        )}
      >
        <nav className="wrapper grid grid-cols-2 items-center md:grid-cols-3">
          <div>
            <span className="flex items-center">
              <span className="overflow-hidden pr-4">
                <Link to="/">
                  <motion.h3
                    initial={{ y: "100%" }}
                    animate={{ y: "0" }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      bounce: 0.6,
                      delay: 0.1,
                    }}
                    className="pointer-events-none select-none whitespace-nowrap text-xl font-bold text-cyan-900"
                  >
                    David Acevedo
                    <span className="text-3xl text-sky-500">.</span>
                  </motion.h3>
                </Link>
              </span>
            </span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden justify-center gap-4 md:flex md:gap-10"
          >
            {links}
          </motion.div>
          <div className="flex justify-end">
            <motion.button
              className="relative block h-[48px] w-[48px] md:hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={toggleNavbar}
            >
              <motion.span
                className="button--icon absolute"
                variants={toogleButtonVariants}
                initial="open"
                animate={showNavbar ? "close" : "open"}
              >
                <HiMenuAlt3 size={25} className="text-secondary-900" />
              </motion.span>
              <motion.span
                className="button--icon absolute"
                variants={toogleButtonVariants}
                initial="close"
                animate={showNavbar ? "open" : "close"}
              >
                <HiOutlineX size={25} className="text-secondary-900" />
              </motion.span>
            </motion.button>
            <Link
              to="/contact"
              className="hidden md:block"
              onClick={toggleNavbar}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="rounded-full bg-secondary-900 px-4 py-3 leading-none text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
              >
                Get in touch
              </motion.button>
            </Link>
          </div>
        </nav>
        <motion.div
          variants={navbarItemsVariants}
          className="flex origin-top flex-col items-center gap-8 text-xl"
        >
          {links}
        </motion.div>

        <motion.div
          variants={navbarItemsVariants}
          className="w-8/12 origin-top md:w-7/12"
        >
          <Link to="/contact" onClick={toggleNavbar}>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-full rounded-full bg-secondary-900 px-4 py-3 leading-none text-white transition-colors hover:bg-primary-500 hover:shadow-lg"
            >
              Get in touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.header>
      {title && (
        <div key={title} className="overflow-hidden">
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
      <main className="wrapper pt-5">{children}</main>
      <Footer />
    </>
  );
};
