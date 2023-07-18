import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

import { ThemeProvider } from "./context/theme";

hydrateRoot(
  document,
  <ThemeProvider>
    <RemixBrowser />
  </ThemeProvider>
);
