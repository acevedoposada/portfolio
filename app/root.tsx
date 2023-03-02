import { orderBy } from "lodash";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import {
  GeneralLayout,
  links as generalLayoutStyles,
} from "~/layouts/general-layout";
import tailwindStylesheetUrl from "~/styles/tailwind.css";
import { NavigationContext } from "~/context/navigation";
import GlobalLoading from "~/components/global-loading";
import type { Navigation } from "~/utils/routes";
import globalStyles from "~/styles/global.css";
import { db } from "~/utils/db.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: globalStyles },
    ...generalLayoutStyles(),
  ];
};

export const loader: LoaderFunction = async () => {
  const querySnapshot = await db.collection("navigation").get();

  const routes: Navigation[] = [];

  querySnapshot.forEach((item) =>
    routes.push({
      id: item.id,
      ...(item.data() as Omit<Navigation, "id">),
    })
  );

  return { routes: orderBy(routes, "order") };
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "David Acevedo | Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { routes } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <NavigationContext.Provider value={{ routes }}>
        <body className="bg-sky-100">
          <GlobalLoading />
          <GeneralLayout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </GeneralLayout>
        </body>
      </NavigationContext.Provider>
    </html>
  );
}
