import { createFileRoute } from "@tanstack/react-router";
import MyJourneyPage from "@/pages/JourneyPage";

export const Route = createFileRoute("/journey")({
  component: MyJourneyPage,
});
