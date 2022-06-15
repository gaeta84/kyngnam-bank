import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "sendView",
    component: () => import("@/views/SendMessageView.vue"),
  },
  {
    path: "/dropzone",
    name: "dropZone",
    component: () => import("@/components/elements/dropZone.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("@/components/elements/tree.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
