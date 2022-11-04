import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/pages/works.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Works() {
  return <div>Works</div>;
}
