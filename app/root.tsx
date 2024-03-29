import { orderBy, reduce } from "lodash";
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
import { useContext } from "react";
import { ThemeContext } from "./context/theme";

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

  const environment: string = process.env.ENVIRONMENT as string;

  return {
    routes: orderBy(
      reduce(
        routes,
        (prev: Navigation[], curr) => {
          if (!curr.environment[environment as keyof typeof curr.environment])
            return prev;
          return [...prev, curr];
        },
        []
      ),
      "order"
    ),
  };
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "David Acevedo | Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { routes } = useLoaderData();
  const { isDark } = useContext(ThemeContext);

  return (
    <html lang="en" className={isDark ? "dark" : "light"}>
      <head>
        <Meta />
        <Links />
      </head>
      <NavigationContext.Provider value={{ routes }}>
        <body className="bg-sky-100 dark:bg-zinc-900">
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
