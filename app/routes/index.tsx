import type { LinksFunction } from "@remix-run/node";
import { motion } from "framer-motion";

import { CardLink } from "~/components";

import { GridLayout, links as gridLayoutStyles } from "~/layouts/grid-layout";

import styles from "~/styles/pages/home.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...gridLayoutStyles()];
};

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
  hidden: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Index() {
  return (
    <GridLayout
      variants={container}
      initial="hidden"
      animate="show"
      className="cards-container pt-6 pb-10"
    >
      <motion.div variants={item} className="card-wrapper col-span-2">
        <CardLink uri="/about" classes={{ card: "p-5" }}>
          <motion.img
            className="h-[90px] w-[90px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.7 }}
            src="/assets/avatar.png"
          />
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/" classes={{ card: "p-5" }}>
          2
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/" classes={{ card: "p-5" }}>
          3
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/about" classes={{ card: "p-5" }}>
          4
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/" classes={{ card: "p-5" }}>
          5
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/" classes={{ card: "p-5" }}>
          6
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/about" classes={{ card: "p-5" }}>
          7
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/" classes={{ card: "p-5" }}>
          8
        </CardLink>
      </motion.div>
    </GridLayout>
  );
}
