import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

import { Card } from "~/components";
import { RiLayoutMasonryLine, RiPenNibLine } from "react-icons/ri";
import { TbPresentation } from "react-icons/tb";

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

const card = {
  hide: { x: 100, opacity: 0 },
  appear: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardChildren = {
  hide: { x: 200, opacity: 0 },
  appear: { x: 0, opacity: 1 },
};

export default function Contact() {
  return (
    <div className="grid">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-10 md:flex-row md:gap-20"
      >
        <aside className="md:lg-[400px] md:lg-[400px] flex w-full flex-col justify-between gap-8 md:gap-0 lg:w-[500px] lg:min-w-[500px]">
          <div className="flex flex-col gap-4">
            <motion.h2
              variants={item}
              className="text-[40px] font-semibold tracking-tighter dark:text-white"
            >
              Get in Touch ✨
            </motion.h2>
            <motion.p
              variants={item}
              className="text-2xl tracking-tighter text-gray-500"
            >
              I’m always open to collaborate on a project or hear about an
              opportunity!
            </motion.p>
          </div>
          <div className="flex flex-col gap-8">
            <motion.div variants={item}>
              <p className="text-sm tracking-tight dark:text-white">
                WANT TO CALL ME?
              </p>
              <a
                href="https://calendly.com/david-acevedo-/30min"
                target="_blank"
                rel="noreferrer"
                className="text-[22px] font-medium text-gray-500 hover:text-primary-500 hover:underline"
              >
                Schedule a call with me
              </a>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-sm tracking-tight dark:text-white">
                JUST WANT TO EMAIL ME?
              </p>
              <a
                href="mailto:hello@david-acevedo.com"
                target="_blank"
                rel="noreferrer"
                className="text-[22px] font-medium text-gray-500 hover:text-primary-500 hover:underline"
              >
                hello@david-acevedo.com
              </a>
            </motion.div>
          </div>
          <div className="flex gap-8">
            <motion.a
              variants={item}
              href="https://github.com/acevedoposada"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
            >
              <FiGithub size={25} />
            </motion.a>
            <motion.a
              variants={item}
              href="https://www.instagram.com/davidchacevedo_/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
            >
              <FiInstagram size={25} />
            </motion.a>
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500"
            >
              <FiLinkedin size={25} />
            </motion.a>
          </div>
        </aside>
        <Card
          variants={card}
          initial="hide"
          animate="appear"
          className="flex w-full flex-col gap-6 overflow-hidden p-6 shadow-2xl"
        >
          <motion.input
            variants={cardChildren}
            className="rounded-lg bg-sky-100 p-4 focus:outline-none"
            placeholder="Name"
          />
          <motion.input
            variants={cardChildren}
            className="rounded-lg bg-sky-100 p-4 focus:outline-none"
            placeholder="Email"
          />
          <motion.textarea
            variants={cardChildren}
            className="min-h-[150px] rounded-lg bg-sky-100 p-4 focus:outline-none"
            placeholder="Type your message"
          ></motion.textarea>
          <motion.button
            variants={cardChildren}
            className="w-full rounded-lg bg-primary-500 p-4 font-medium text-white hover:bg-primary-400"
          >
            Send Message
          </motion.button>
        </Card>
      </motion.div>
      <section className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        <Card className="py-10 px-6">
          <RiLayoutMasonryLine className="mb-8 text-[48px] text-primary-500 opacity-90 md:text-[80px]" />
          <p className="text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
            Web
          </p>
          <p className="text-lg dark:text-white">
            Tailor-made websites according to the requirements you request
          </p>
        </Card>
        <Card className="py-10 px-6">
          <RiPenNibLine className="mb-8 text-[48px] text-primary-500 opacity-90 md:text-[80px]" />
          <p className="text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
            Visual
          </p>
          <p className="text-lg dark:text-white">
            Trained to create graphic pieces and make your sites beautiful
          </p>
        </Card>
        <Card className="py-10 px-6 md:col-span-2 lg:col-span-1">
          <TbPresentation className="mb-8 text-[48px] text-primary-500 opacity-90 md:text-[80px]" />
          <p className="text-xl font-medium tracking-tighter text-gray-500 md:mt-2 md:text-2xl">
            Analysis
          </p>
          <p className="text-lg dark:text-white">
            Analyze, organize and plan information systems requirements
          </p>
        </Card>
      </section>
    </div>
  );
}
