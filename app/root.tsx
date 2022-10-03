import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import globalStyles from "./styles/global.css";
import {
  GeneralLayout,
  links as generalLayoutStyles,
} from "~/components/general-layout";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: globalStyles },
    ...generalLayoutStyles(),
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "David Acevedo | Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-sky-100">
        <GeneralLayout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </GeneralLayout>
      </body>
    </html>
  );
}
