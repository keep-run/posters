import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    // { path: "/", component: "@/pages/home/index", layout: false },
    { path: "/", component: "@/pages/loading/index", layout: true },
    { path: "/anim", component: "@/pages/animation/index", layout: true },
    { path: "/guide", component: "@/pages/guide/index", layout: true },
    { path: "/docs", component: "docs" },
    { path: "/test", component: "@/pages/test/index", layout: false },
    { path: "/diy", component: "@/pages/diy/index", layout: true },
  ],
  npmClient: "cnpm",
  publicPath: "/posters/",
  base: "/posters/",
  hash: true,
});
