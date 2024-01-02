import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/home/index" ,layout: false },
    { path: "/docs", component: "docs" },
    { path: "/diy", component: "@/pages/diy/index",layout: false },
  ],
  npmClient: 'cnpm',
});
