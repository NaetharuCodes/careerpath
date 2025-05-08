import { createFileRoute } from "@tanstack/react-router";
import CodeCourse from "@/pages/CodeCourse";

export const Route = createFileRoute("/codecourse")({
  component: CodeCourse,
});
