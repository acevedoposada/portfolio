import { HiArrowRight } from "react-icons/hi";
import { Link } from "@remix-run/react";
import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

import type { CardProps } from "~/components/card";
import { Card } from "~/components/card";

interface Classes {
  card?: string;
}

export const CardLink: FuncComponent<
  CardProps & { classes?: Classes; uri: string }
> = ({ children, className, classes, uri }) => {
  return (
    <Link to={uri} className={className}>
      <Card className={clsx(classes?.card, "group h-full")}>
        {children}
        <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 bg-gray-100 text-gray-400 transition-all group-hover:border-primary-500 group-hover:bg-primary-100 group-hover:text-primary-500">
          <HiArrowRight size={20} />
        </button>
      </Card>
    </Link>
  );
};
