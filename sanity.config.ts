import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";

const config = defineConfig({
  projectId: "18g0ukic",
  dataset: "production",
  title: "Portfolio Admin",
  basePath: "/admin",
  apiVersion: "2023-07-07",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
export default config;
