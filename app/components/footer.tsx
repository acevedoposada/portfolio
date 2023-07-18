import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "@remix-run/react";
import { useContext } from "react";

import { NavigationContext } from "~/context/navigation";

export const Footer = () => {
  const { routes } = useContext(NavigationContext);

  return (
    <footer className="flex flex-col items-center pt-20">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Link to="/">
          <h3 className="pointer-events-none -mt-1 select-none whitespace-nowrap text-xl font-bold leading-none text-cyan-900 dark:text-secondary-700">
            David Acevedo
            <span className="text-3xl leading-none text-sky-500">.</span>
          </h3>
        </Link>
        {routes && (
          <div className="flex gap-6">
            {routes?.map(
              (route, index) =>
                route.enable && (
                  <Link
                    key={index}
                    to={route.path}
                    className="pt-1 text-gray-500 hover:text-primary-500 hover:underline"
                  >
                    {route.label}
                  </Link>
                )
            )}
          </div>
        )}
      </div>
      <div className="flex gap-8 pt-6 pb-4">
        <a
          href="https://github.com/acevedoposada"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500 hover:shadow-lg"
        >
          <FiGithub size={25} />
        </a>
        <a
          href="https://www.instagram.com/davidchacevedo_/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500 hover:shadow-lg"
        >
          <FiInstagram size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-david-acevedo-posada/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-2 text-gray-400 shadow-primary-500 transition-all hover:text-secondary-500 hover:shadow-lg"
        >
          <FiLinkedin size={25} />
        </a>
      </div>
      <div className="py-4 text-gray-400">
        <span>© {new Date().getFullYear()} Portfolio. v1.0.0</span>
      </div>
    </footer>
  );
};
