import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RiBodyScanFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { orderBy } from "lodash";

import { GridLayout, links as gridLayoutStyles } from "~/layouts/grid-layout";
import styles from "~/styles/pages/about.css";
import { db } from "~/utils/db.server";
import { Card, CardLink } from "~/components";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...gridLayoutStyles()];
};

export const loader: LoaderFunction = async () => {
  const querySnapshot = await db
    .collection("resume")
    .where("type", "==", "experience")
    .limit(3)
    .get();

  const aboutData = await db
    .collection("resume")
    .where("type", "==", "about")
    .get();
  const experiences: any[] = [];
  let about: any = {};

  querySnapshot.forEach((value) => {
    experiences.push(value.data());
  });

  aboutData.forEach((value) => (about = value.data()));

  return { experiences: orderBy(experiences, "position"), about };
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

export default function About() {
  const { experiences, about } = useLoaderData();

  return (
    <GridLayout
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-6"
    >
      <Card
        variants={item}
        className="card-wrapper card-image col-span-3 bg-cover bg-center"
      />
      <Card
        variants={item}
        className="card-wrapper flex flex-col justify-end bg-primary-500 p-8 pr-14"
      >
        <h1 className="mb-2 text-3xl font-bold leading-snug tracking-tight text-white md:mb-4 md:text-[40px]">
          Hey, I'm David 👋🏼
        </h1>
        <p className="text-lg text-white md:text-xl">
          A {experiences?.[0]?.title} at {experiences?.[0]?.company}
        </p>
      </Card>
      <Card
        variants={item}
        className="card-wrapper col-span-1 flex flex-col justify-end p-8 md:col-span-2 lg:bg-primary-500"
      >
        <h2 className="mb-2 text-[24px] font-bold tracking-tighter md:text-[28px] md:text-white">
          About me
        </h2>
        <p className="text-lg leading-6 tracking-tighter text-gray-500 md:text-xl md:leading-7 lg:text-white lg:text-opacity-80">
          {about.description}
        </p>
      </Card>
      <Card
        variants={item}
        className="card-wrapper col-span-1 flex flex-col justify-end p-8 md:col-span-2"
      >
        <h2 className="mb-2 text-[24px] font-bold tracking-tighter dark:text-white md:text-[28px]">
          Experience
        </h2>
        <div className="flex flex-col gap-2 md:gap-0">
          {experiences.map((exp: any) => (
            <div
              key={exp.id}
              className="flex items-start md:items-center md:gap-2"
            >
              <div className="flex w-2/3 flex-col md:w-full md:flex-row md:items-center md:gap-2">
                <p className="whitespace-nowrap text-lg font-light tracking-tighter text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
                <span className="hidden h-[1px] w-full bg-gray-200 md:block" />
                <p className="whitespace-nowrap text-sm font-light leading-none tracking-tighter text-primary-500 md:text-lg">
                  {exp.title}
                </p>
              </div>
              <p className="w-1/3 whitespace-nowrap text-right text-lg font-light tracking-tighter text-gray-400 md:w-[94px] md:min-w-[94px] md:text-left">
                {new Date(exp.startDate._seconds * 1000).getFullYear()} -{" "}
                {exp.dueDate
                  ? new Date(exp.dueDate._seconds * 1000).getFullYear()
                  : "Current"}
              </p>
            </div>
          ))}
        </div>
      </Card>
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
            className="text-primary-700 transition-colors group-hover:text-primary-900 dark:text-primary-500 dark:group-hover:text-primary-600"
            size={140}
          />
        </CardLink>
      </motion.div>
      <motion.div
        variants={item}
        className="card-wrapper col-span-1 md:col-span-2"
      >
        <CardLink uri="/contact" classes={{ children: "justify-end" }}>
          <p className="text-2xl font-medium tracking-tighter dark:text-white md:text-[28px]">
            Let's work together ✨
          </p>
          <h2 className="text-5xl font-bold leading-none tracking-tighter text-primary-500 md:text-[56px]">
            Get in touch now
          </h2>
        </CardLink>
      </motion.div>
      <motion.div variants={item} className="card-wrapper">
        <CardLink
          uri="/resume"
          classes={{ children: "justify-end" }}
          color="primary"
        >
          <RiBodyScanFill size={80} className="mb-4 text-white opacity-90" />
          <p className="text-sm uppercase tracking-tighter text-white text-opacity-60">
            Learn more about me
          </p>
          <h4 className="text-[28px] font-semibold leading-none tracking-tight text-white">
            See my resume
          </h4>
        </CardLink>
      </motion.div>
    </GridLayout>
  );
}
