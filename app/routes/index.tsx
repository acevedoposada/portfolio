import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { RiLayoutMasonryLine, RiPenNibLine } from "react-icons/ri";
import { useLoaderData } from "@remix-run/react";
import { RiBodyScanFill } from "react-icons/ri";
import { TbPresentation } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

import { db } from "~/utils/db.server";

import { CardLink } from "~/components";

import { GridLayout, links as gridLayoutStyles } from "~/layouts/grid-layout";

import styles from "~/styles/pages/home.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...gridLayoutStyles()];
};

export const loader: LoaderFunction = async () => {
  const querySnapshot = await db
    .collection("resume")
    .where("type", "==", "experience")
    .where("position", "==", 0)
    .get();
  let lastExp = {};
  querySnapshot.forEach((value) => {
    lastExp = value.data();
  });

  return { lastExp };
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
  const { lastExp } = useLoaderData();

  return (
    <GridLayout variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="card-wrapper col-span-2">
        <CardLink uri="/about" classes={{ children: "justify-between" }}>
          <motion.img
            className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.7 }}
            src="/assets/avatar.png"
          />
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:mb-4 md:text-[44px]">
              Hey, I'm David 👋🏼
            </h1>
            <p className="text-gray-500 md:text-xl">
              A {lastExp.title} at {lastExp.company}
            </p>
          </div>
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/resume" classes={{ children: "justify-end" }}>
          <RiBodyScanFill size={80} className="mb-4 text-primary-500" />
          <p className="text-sm uppercase tracking-tighter text-gray-500">
            Learn more about me
          </p>
          <h4 className="text-[28px] font-semibold leading-none tracking-tight">
            See my resume
          </h4>
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/projects/1" classes={{ children: "justify-end" }}>
          <h1 className="text-3xl font-bold tracking-tighter">Project #1</h1>
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink uri="/projects/1" classes={{ children: "justify-end" }}>
          <h1 className="text-3xl font-bold tracking-tighter">Project #2</h1>
        </CardLink>
      </motion.div>

      <motion.div variants={item} className="card-wrapper">
        <CardLink
          uri="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
          isExternal
          classes={{
            children:
              "flex items-center justify-center pr-8 absolute w-full h-full",
            card: "relative",
            iconWrapper: "pl-0 md:pl-0 ml-auto",
          }}
        >
          <BsLinkedin
            className="text-primary-700 transition-colors group-hover:text-primary-900"
            size={140}
          />
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/projects/1" classes={{ children: "justify-end" }}>
          <h1 className="text-3xl font-bold tracking-tighter">Project #3</h1>
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/contact" classes={{ children: "justify-end" }}>
          <p className="text-2xl font-medium tracking-tighter md:text-[28px]">
            Let's work together ✨
          </p>
          <h2 className="text-5xl font-bold leading-none tracking-tighter text-primary-500 md:text-[56px]">
            Get in touch now
          </h2>
        </CardLink>
      </motion.div>

      <motion.div
        variants={item}
        className="card-wrapper large-card col-span-2"
      >
        <CardLink uri="/contact" classes={{ children: "justify-end" }}>
          <p className="text-sm uppercase tracking-tighter text-gray-500">
            What I do
          </p>
          <div className="mt-5 flex flex-col justify-between gap-4 pr-6 md:flex-row md:gap-0">
            <div className="flex items-center md:flex-col">
              <RiLayoutMasonryLine className="text-[48px] text-primary-500 md:text-[80px]" />
              <p className="ml-4 text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
                Web
              </p>
            </div>
            <div className="flex items-center md:flex-col">
              <RiPenNibLine className="text-[48px] text-primary-500 md:text-[80px]" />
              <p className="ml-4 text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
                Visual
              </p>
            </div>
            <div className="flex items-center md:flex-col">
              <TbPresentation className="text-[48px] text-primary-500 md:text-[80px]" />
              <p className="ml-4 text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
                Analysis
              </p>
            </div>
          </div>
        </CardLink>
      </motion.div>
    </GridLayout>
  );
}
