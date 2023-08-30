import { AnimatePresence, motion } from "framer-motion";
import type { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";

import { db } from "~/utils/db.server";

import blogStyles from "~/styles/pages/blog.css";
import { Card } from "~/components";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: blogStyles }];
};

export async function getPosts() {
  const querySnapshot = await db.collection("blog").get();
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  const getDistribution = () => {
    let distribution: string[] = [];
    for (let i = 0; i < Math.round(data.length / 2); i++) {
      if (i % 2) {
        distribution = [...distribution, "col-span-2", "col-span-1"];
      } else {
        distribution = [...distribution, "col-span-1", "col-span-2"];
      }
    }
    return distribution;
  };

  return { items: data, distribution: getDistribution() };
}

export const loader = () => {
  return getPosts();
};

export default function Blog() {
  const { items, distribution } = useLoaderData();

  const [selectedId, setSelectedId] = useState<any | null>(null);

  console.log(process.env);

  return (
    <div className="blog__content mx-auto pt-6 md:w-11/12">
      <div className="blog__content__posts md w-full gap-7">
        {items.map((item: any, idx: number) => (
          <Card
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item)}
            className={clsx(
              "blog__content__posts__item flex h-56 cursor-pointer flex-col items-end overflow-hidden",
              distribution[idx]
            )}
          >
            <motion.img
              className="h-1/2 w-full object-cover"
              alt=""
              layoutId={`image-${item.id}`}
              src="https://picsum.photos/700/300"
            />
            <div className="w-full p-5">
              <motion.h5
                layoutId={`description-${item.description}`}
                className="leading-tight text-slate-400"
              >
                {item.description}
              </motion.h5>
              <motion.h2
                layoutId={`title-${item.title}`}
                className="text-3xl font-bold leading-tight tracking-tighter dark:text-white"
              >
                {item.title}
              </motion.h2>
            </div>
          </Card>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <>
            <div className="pointer-events-none fixed top-0 left-0 z-50 flex h-screen w-screen place-content-center place-items-center">
              <Card
                layoutId={selectedId.id}
                className="relative mx-auto w-11/12 bg-white shadow-primary-700 [pointer-events:all] md:w-10/12 lg:w-7/12"
                disableHover
              >
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-0 right-0 -mt-[50px] rounded-full bg-primary-100 p-2 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <IoClose size={25} className="text-primary-600" />
                </motion.button>
                <motion.img
                  src="https://picsum.photos/1200/500"
                  className="mx-auto -mt-[5%] h-64 w-11/12 rounded-3xl bg-primary-500 object-cover shadow-xl transition-[margin] hover:-mt-[6%] hover:mb-[1%]"
                  alt=""
                  layoutId={`image-${selectedId.id}`}
                />
                <div className="mx-auto w-11/12 py-5 lg:py-10">
                  <motion.h5
                    layoutId={`description-${selectedId.description}`}
                    className="text-sm leading-tight text-slate-400 md:text-xl lg:text-2xl"
                  >
                    {selectedId.description}
                  </motion.h5>
                  <motion.h2
                    layoutId={`title-${selectedId.title}`}
                    className="text-2xl font-bold leading-tight tracking-tighter dark:text-white md:text-4xl lg:text-8xl"
                  >
                    {selectedId.title}
                  </motion.h2>
                </div>
              </Card>
            </div>
            <motion.div
              onClick={() => setSelectedId(null)}
              className="fixed top-0 left-0 z-40 h-full w-full cursor-pointer bg-primary-500 bg-opacity-50 dark:bg-zinc-700 dark:bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
