import { createFileRoute } from "@tanstack/react-router";
import ResourcesPage from "@/pages/Resources";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});
