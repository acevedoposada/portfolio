import { useEffect, useMemo, useState } from "react";
import { useLocation } from "@remix-run/react";

export const useGeneralLayout = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const location = useLocation();

  const routes = useMemo(
    () => [
      { path: "/", label: "Home", title: null },
      { path: "/works", label: "Works", title: "All Works" },
      { path: "/about", label: "About", title: "About Me" },
      { path: "/resume", label: "Resume", title: null },
      { path: "/blog", label: "Blog", title: null },
    ],
    []
  );

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      setTitle(currentRoute.title);
    }
  }, [location.pathname, routes]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setShowNavbar(false);
      }
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const toggleNavbar = () => setShowNavbar(!showNavbar);

  return { title, routes, location, showNavbar, toggleNavbar };
};
