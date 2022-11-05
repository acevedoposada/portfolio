import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";

export const loader: LoaderFunction = ({ params }) => {
  return { id: params.id };
};

export default function ProjectDetails() {
  const { id } = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/works");
  }, [navigate]);

  return (
    <div>
      <p>
        <Link to="/works">All Works</Link>
      </p>
      <p>Id: {id}</p>
    </div>
  );
}
