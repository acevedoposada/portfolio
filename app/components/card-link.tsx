import type { FuncComponent } from "~/models/common.types";

import type { CardProps } from "~/components/card";
import { Card } from "~/components/card";
import clsx from "clsx";
import { Link } from "@remix-run/react";

interface Classes {
  card?: string;
}

export const CardLink: FuncComponent<
  CardProps & { classes?: Classes; uri: string }
> = ({ children, className, classes, uri }) => {
  return (
    <Link to={uri} className={className}>
      <Card className={clsx(classes?.card, "h-full")}>{children}</Card>
    </Link>
  );
};
