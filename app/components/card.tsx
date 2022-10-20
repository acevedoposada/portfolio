import clsx from "clsx";

import type { FuncComponent } from "~/models/common.types";

export interface CardProps {
  className?: string;
}

export const Card: FuncComponent<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-card shadow-lg shadow-primary-100 transition-shadow hover:shadow-primary-200",
        className
      )}
    >
      {children}
    </div>
  );
};
