import HomePage from "@/pages/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
