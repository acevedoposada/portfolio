import type { HTMLMotionProps } from "framer-motion";
import type { LinksFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import styles from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type GridLayoutProps = HTMLMotionProps<"div">;

export const GridLayout: FuncComponent<GridLayoutProps> = ({
  children,
  ...props
}) => {
  const { className, ...rest } = props;

  return (
    <motion.div
      className={clsx("layout relative grid gap-5", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
