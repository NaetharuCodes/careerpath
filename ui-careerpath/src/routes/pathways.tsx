import { createFileRoute } from "@tanstack/react-router";
import Pathways from "@/pages/Pathways";

export const Route = createFileRoute("/pathways")({
  component: Pathways,
});
