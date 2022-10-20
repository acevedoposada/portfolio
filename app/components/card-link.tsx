import { ImArrowRight2 } from "react-icons/im";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import type { CardProps } from "~/components";
import { Card, Link } from "~/components";

interface Classes {
  card?: string;
  children?: string;
  iconWrapper?: string;
}

interface CardLinkProps extends CardProps {
  classes?: Classes;
  uri: string;
  isExternal?: boolean;
}

export const CardLink: FuncComponent<CardLinkProps> = ({
  children,
  className,
  classes,
  uri,
  isExternal,
}) => {
  return (
    <Link to={uri} className={className} isExternal={isExternal}>
      <Card className={clsx(classes?.card, "group flex h-full cursor-pointer")}>
        <div
          className={clsx(
            "flex h-full w-full flex-col py-5 pl-5 md:py-8 md:pl-8",
            classes?.children
          )}
        >
          {children}
        </div>
        <div
          className={clsx(
            "flex items-end pl-2 pr-5 pb-5 md:pr-8 md:pl-2 md:pb-8",
            classes?.iconWrapper
          )}
        >
          <button
            className={clsx(
              "flex h-8 min-h-[2rem] w-8 min-w-[2rem] items-center justify-center rounded-full border-2 border-gray-400 bg-gray-100 text-gray-400 transition-all group-hover:border-primary-500 group-hover:bg-primary-100 group-hover:text-primary-500",
              {
                "-rotate-45": isExternal,
              }
            )}
          >
            <ImArrowRight2 size={17} />
          </button>
        </div>
      </Card>
    </Link>
  );
};
