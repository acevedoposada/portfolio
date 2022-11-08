import { useContext, useEffect, useState } from "react";
import { useLocation } from "@remix-run/react";

import { NavigationContext } from "~/context/navigation";

export const useGeneralLayout = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const location = useLocation();

  const { routes } = useContext(NavigationContext);

  const validateMobileScreen = (): boolean =>
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      setTitle(currentRoute.title);
    }
  }, [location, routes]);

  useEffect(() => {
    setIsMobile(validateMobileScreen());

    window.addEventListener("resize", () => {
      if (!validateMobileScreen()) {
        setShowNavbar(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const toggleNavbar = () => isMobile && setShowNavbar(!showNavbar);

  return { title, routes, location, showNavbar, toggleNavbar, isMobile };
};
