import { createContext } from "react";

import type { Navigation } from "~/utils/routes";

export const NavigationContext = createContext<{ routes: Navigation[] }>({
  routes: [],
});
