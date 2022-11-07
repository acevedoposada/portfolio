import type { RemixLinkProps } from "@remix-run/react/dist/components";
import { Link as RemixLink } from "@remix-run/react";

import type { FuncComponent } from "~/models/common.types";

interface LinkProps extends RemixLinkProps {
  isExternal?: boolean;
}

export const Link: FuncComponent<LinkProps> = (props) => {
  const { isExternal, to, children, className } = props;
  if (isExternal)
    return (
      <a
        className={className}
        href={to as string}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  return <RemixLink {...props}>{children}</RemixLink>;
};
