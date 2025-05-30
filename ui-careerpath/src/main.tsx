import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import "./App.css";

const router = createRouter({ 
  routeTree,
  basepath: import.meta.env.BASE_URL
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
