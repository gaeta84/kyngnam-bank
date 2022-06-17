import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "sendView",
    component: () => import("@/components/view/SendMessageView.vue"),
  },
  {
    path: "/dropzone",
    name: "dropZone",
    component: () => import("@/components/view/DropZone.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("@/components/view/Tree.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
