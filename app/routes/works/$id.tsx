import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ params }) => {
  return { id: params.id };
};

export default function ProjectDetails() {
  const { id } = useLoaderData();

  return (
    <div>
      <p>
        <Link to="/works">All Works</Link>
      </p>
      <p>Id: {id}</p>
    </div>
  );
}
