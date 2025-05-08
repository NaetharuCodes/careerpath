import { createFileRoute } from "@tanstack/react-router";
import Dash from "@/pages/Dash";

export const Route = createFileRoute("/dash")({
  component: Dash,
});
