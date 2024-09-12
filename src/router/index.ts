import { createRouter, createWebHistory, type RouterOptions } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routerOptions: RouterOptions = {
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
  ],
};

const router = createRouter(routerOptions);

export default router;
