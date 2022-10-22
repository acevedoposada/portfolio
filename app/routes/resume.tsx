import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ImArrowRight2 } from "react-icons/im";
import { groupBy, orderBy } from "lodash";
import { motion } from "framer-motion";
import dayjs from "dayjs";

import { Card, IconButton } from "~/components";
import { db } from "~/utils/db.server";

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

const itemSlide = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const loader: LoaderFunction = async () => {
  const querySnapshot = await db.collection("resume").get();
  const resume: any[] = [];
  querySnapshot.forEach((value) => {
    resume.push(value.data());
  });

  return { resume: groupBy(resume, "type") };
};

export default function Resume() {
  const { resume } = useLoaderData();

  const experiences = orderBy(resume.experience, "position");
  const education = orderBy(resume.education, "position");

  return (
    <div className="flex w-full flex-col gap-16 pt-8 lg:flex-row">
      <div className="flex lg:w-[400px] lg:min-w-[400px]">
        <motion.div
          className="sticky top-[120px] flex w-full flex-col gap-5 self-start md:flex-row lg:flex-col"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Card className="flex w-full flex-col gap-6 p-6" variants={item}>
            <div>
              <img
                className="h-[90px] w-[90px] md:h-[100px] md:w-[100px]"
                src="/assets/avatar.png"
                alt="avatar"
              />
              <h1 className="mt-4 text-3xl font-bold tracking-tighter">
                David Acevedo
              </h1>
              <h2 className="text-2xl tracking-tighter text-primary-500">
                {experiences?.[0]?.title}
              </h2>
            </div>
            <div>
              <p className="text-xl text-gray-500">hello@david-acevedo.com</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:hello@david-acevedo.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-secondary-900 py-2 px-4 text-sm font-medium text-secondary-900 transition-all hover:bg-secondary-900 hover:text-white"
              >
                Contact me
              </a>
              <a
                href="/pdf"
                // download="David_Acevedo_CV.pdf"
                className="rounded-full border-2 border-secondary-900 bg-secondary-900 py-2 px-4 text-sm font-medium text-white transition-all hover:border-secondary-800 hover:bg-secondary-800"
              >
                Download CV
              </a>
            </div>
          </Card>
          <Card
            className="flex w-full flex-col justify-end p-6"
            variants={item}
          >
            <a
              href="https://github.com/acevedoposada"
              className="group flex items-center pb-4"
            >
              <p className="w-full text-xl font-semibold leading-none tracking-tight group-hover:text-primary-500">
                Github
              </p>
              <IconButton className="-rotate-45">
                <ImArrowRight2 size={17} />
              </IconButton>
            </a>
            <span className="block h-[1px] w-full bg-gray-200" />
            <a
              href="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
              className="group flex items-center py-4"
            >
              <p className="w-full text-xl font-semibold leading-none tracking-tight group-hover:text-primary-500">
                Linkedin
              </p>
              <IconButton className="-rotate-45">
                <ImArrowRight2 size={17} />
              </IconButton>
            </a>
            <span className="block h-[1px] w-full bg-gray-200" />
            <a
              href="https://www.instagram.com/davidchacevedo_/"
              className="group flex items-center pt-4"
            >
              <p className="w-full text-xl font-semibold leading-none tracking-tight group-hover:text-primary-500">
                Instagram
              </p>
              <IconButton className="-rotate-45">
                <ImArrowRight2 size={17} />
              </IconButton>
            </a>
          </Card>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-[28px] font-semibold tracking-tighter"
            variants={itemSlide}
          >
            About me
          </motion.h2>
          <motion.p
            className="text-2xl tracking-tighter text-gray-500 text-opacity-80"
            variants={itemSlide}
          >
            {resume.about?.[0]?.["short-description"]} Currently{" "}
            {experiences?.[0]?.title} at {experiences?.[0]?.company}. Take a
            look below!
          </motion.p>
        </div>
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-[28px] font-semibold tracking-tighter"
            variants={itemSlide}
          >
            Experience
          </motion.h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={itemSlide}>
                <h4 className="text-2xl font-medium tracking-tighter text-primary-500">
                  {exp.title}
                </h4>
                <h5 className="text-lg tracking-tighter text-secondary-900">
                  {exp.company}
                </h5>
                <p className="text-base tracking-tighter text-gray-500">
                  {dayjs(exp.startDate._seconds * 1000).format("MMM YYYY")} -{" "}
                  {exp.dueDate
                    ? dayjs(exp.dueDate._seconds * 1000).format("MMM YYYY")
                    : "Present"}
                </p>
                <p className="mt-2 text-2xl tracking-tighter text-gray-500 text-opacity-80">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-[28px] font-semibold tracking-tighter"
            variants={itemSlide}
          >
            Education
          </motion.h2>
          <div className="flex flex-col gap-8">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemSlide}>
                <h4 className="text-2xl font-medium tracking-tighter text-primary-500">
                  {edu.title}
                </h4>
                <h5 className="text-lg tracking-tighter text-secondary-900">
                  {edu.center}
                </h5>
                <p className="text-base tracking-tighter text-gray-500">
                  {dayjs(edu.startDate._seconds * 1000).format("MMM YYYY")} -{" "}
                  {edu.dueDate
                    ? dayjs(edu.dueDate._seconds * 1000).format("MMM YYYY")
                    : "Present"}
                </p>
                <p className="mt-2 text-2xl tracking-tighter text-gray-500 text-opacity-80">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-[28px] font-semibold tracking-tighter"
            variants={itemSlide}
          >
            Skills
          </motion.h2>
          <div className="-mb-2 w-full columns-[130px] gap-2 md:w-1/2 md:min-w-[450px] md:columns-[200px]">
            {resume.skill?.map((skill: any) => (
              <motion.p
                key={skill.description}
                className="mb-2 text-xl font-medium tracking-tighter text-gray-500 text-opacity-80 md:text-2xl"
                variants={itemSlide}
              >
                {skill.description}
              </motion.p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <motion.h2
            className="text-[28px] font-semibold tracking-tighter"
            variants={itemSlide}
          >
            Interests
          </motion.h2>
          <div className="w-full columns-[130px] gap-2 md:w-1/2 md:min-w-[450px] md:columns-[200px]">
            {resume.skill?.map((skill: any) => (
              <motion.p
                key={skill.description}
                className="mb-2 text-xl font-medium tracking-tighter text-gray-500 text-opacity-80 md:text-2xl"
                variants={itemSlide}
              >
                {skill.description}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
