import { Outlet, createRootRoute } from "@tanstack/react-router";
import AppShell from "@/components/ui/appshell/AppShell";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
