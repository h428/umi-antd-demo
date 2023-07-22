import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/menu", component: "demo/menu/Menu" },
  ],
  npmClient: "yarn",
});
