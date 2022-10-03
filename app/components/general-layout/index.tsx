import type { LinksFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import { useGeneralLayout } from "~/controllers/general-layout";

import styles from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const GeneralLayout: FuncComponent = ({ children }) => {
  const { location, routes, title } = useGeneralLayout();

  return (
    <>
      <header className="flex justify-center gap-4 py-7">
        {routes.map((route) => (
          <Link
            key={route.label}
            to={route.path}
            className={clsx("text-gray-400", {
              "text-sky-600": route.path === location.pathname,
            })}
          >
            {route.label}
          </Link>
        ))}
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
      <main className="content">{children}</main>
    </>
  );
};
