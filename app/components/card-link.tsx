import { ImArrowRight2 } from "react-icons/im";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import type { CardProps } from "~/components";
import { Card, Link, IconButton } from "~/components";

type CardColors = "primary";

interface Classes {
  card?: string;
  image?: string;
  children?: string;
  iconWrapper?: string;
}

interface CardLinkProps extends CardProps {
  classes?: Classes;
  uri: string;
  isExternal?: boolean;
  color?: CardColors;
  imgSrc?: string;
}

export const CardLink: FuncComponent<CardLinkProps> = ({
  children,
  className,
  classes,
  uri,
  isExternal,
  color,
  imgSrc,
}) => {
  const colorClasses: Record<CardColors, { wrapper: string; button: string }> =
    {
      primary: {
        wrapper: "!bg-primary-500",
        button:
          "!border-white !text-white !bg-transparent group-hover:!bg-white group-hover:!text-primary-500 group-hover:!border-white",
      },
    };

  return (
    <Link to={uri} className={className} isExternal={isExternal}>
      <Card
        className={clsx(
          classes?.card,
          "group flex h-full cursor-pointer flex-col overflow-hidden",
          color && colorClasses[color].wrapper
        )}
      >
        {imgSrc && (
          <img
            className="h-full max-h-[60%] bg-center object-cover"
            alt=""
            src={imgSrc}
          />
        )}
        <div className="flex h-full w-full">
          <div
            className={clsx(
              "flex h-full w-full flex-col pb-5 pl-5 md:py-8 md:pl-8",
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
            <IconButton
              className={clsx(color && colorClasses[color].button, {
                "-rotate-45": isExternal,
              })}
            >
              <ImArrowRight2 size={17} />
            </IconButton>
          </div>
        </div>
      </Card>
    </Link>
  );
};
