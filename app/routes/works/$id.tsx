import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BsArrowLeftShort } from "react-icons/bs";
import PreloadImage from "react-preload-image";
import { motion } from "framer-motion";

import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  const result = await db
    .collection("projects")
    .doc(params.id as string)
    .get();

  return { project: result.data() };
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `David Acevedo | ${data?.project?.title} ${data?.project?.category}`,
  };
};

export default function ProjectDetails() {
  const { project } = useLoaderData();

  return (
    <div className="min-h-screen">
      <Link to="/" className="mb-5 flex items-center">
        <motion.span
          className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <BsArrowLeftShort size={30} className="text-primary-600" />
        </motion.span>
        <div className="-ml-0.5 overflow-x-hidden">
          <motion.h2
            className="pl-4 text-xl font-semibold tracking-tighter text-cyan-900 dark:text-secondary-600 md:text-3xl"
            initial={{
              translateX: -100,
              opacity: 0,
            }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.category} - {project.title}
          </motion.h2>
        </div>
      </Link>
      <section className="pt-8 pb-12">
        <p className="mb-10 text-3xl font-medium tracking-tighter dark:text-white md:text-7xl">
          {project.description}
        </p>
        <a
          className="text-lg tracking-tighter text-gray-500 hover:text-primary-500 md:text-xl"
          href={project.uri}
          target="_blank"
          rel="noreferrer"
        >
          View live site
        </a>
      </section>
      {project.images.portrait_logo && (
        <motion.div
          className="h-32 overflow-hidden rounded-3xl bg-primary-200 md:h-[426px]"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <PreloadImage
            className="relative h-full w-full object-cover"
            src={project.images.portrait_logo}
            alt="portrait"
            lazy
          />
        </motion.div>
      )}
    </div>
  );
}
