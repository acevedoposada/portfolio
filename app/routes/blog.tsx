import type { LinksFunction } from "@remix-run/node";
import Lottie from "react-lottie";

import animationData from "~/assets/lottie/working.json";
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
    <div className="mx-auto min-h-screen text-center md:w-1/2">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height="100%"
        width="100%"
      />
      <h1 className="-mt-10 text-3xl font-medium tracking-tighter text-cyan-900 md:-mt-24">
        Woking on this page
      </h1>
    </div>
  );
}
