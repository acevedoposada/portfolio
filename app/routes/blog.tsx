import type { LinksFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";

import { projectId } from "~/utils/db.server";

import blogStyles from "~/styles/pages/blog.css";

console.log(process.env);

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: blogStyles }];
};

// export async function getPosts() {
//   const querySnapshot = await db.collection("posts").get();
//   const data: any[] = [];
//   querySnapshot.forEach((doc) => {
//     data.push({ ...doc.data(), id: doc.id });
//   });

//   return data;
// }

// export const loader = () => {
//   return getPosts();
// };

export default function Blog() {
  // const data = useLoaderData();

  return (
    <div>
      <h1 className="text-[56px]">Blog</h1>
      {/* {data.map((element: any) => (
        <div key={element.id}>{element.title}</div>
      ))} */}
      {projectId}
    </div>
  );
}
