import type { LinksFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";

import blogStyles from "~/styles/pages/blog.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: blogStyles }];
};

export async function getPosts() {
  const querySnapshot = await db.collection("posts").get();
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return data;
}

export const loader = () => {
  return getPosts();
};

export default function Blog() {
  // const data = useLoaderData();

  return (
    <div className="blog__content mx-auto -mt-5 flex flex-col items-center justify-center md:w-1/2">
      <img
        src="/assets/memoji-working.png"
        alt=""
        width="400"
        height="400"
        className="select-none"
      />
      <h1 className="mt-6 text-3xl font-medium tracking-tighter text-cyan-900">
        Woking on this page
      </h1>
    </div>
  );
}
