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
  {
    path: "/businessManage",
    name: "businessManage",
    component: () => import("@/components/view/BusinessManage.vue"),
  },
  {
    path: "/callerManage",
    name: "callerManage",
    component: () => import("@/components/view/CallerManage.vue"),
  },
  {
    path: "/templateManage",
    name: "templateManage",
    component: () => import("@/components/view/TemplateManage.vue"),
  },
  {
    path: "/allStatistics",
    name: "allStatistics",
    component: () => import("@/components/view/AllStatistics.vue"),
  },
  {
    path: "/analysis",
    name: "analysis",
    component: () => import("@/components/view/Analysis.vue"),
  },
  {
    path: "/approvalManage",
    name: "approvalManage",
    component: () => import("@/components/view/ApprovalManage.vue"),
  },
  {
    path: "/batchManage",
    name: "batchManage",
    component: () => import("@/components/view/BatchManage.vue"),
  },
  {
    path: "/businessCode",
    name: "businessCode",
    component: () => import("@/components/view/BusinessCode.vue"),
  },
  {
    path: "/channel",
    name: "channel",
    component: () => import("@/components/view/Channel.vue"),
  },
  {
    path: "/contractManage",
    name: "contractManage",
    component: () => import("@/components/view/ContractManage.vue"),
  },
  {
    path: "/customerHistory",
    name: "customerHistory",
    component: () => import("@/components/view/CustomerHistory.vue"),
  },
  {
    path: "/customerInfo",
    name: "customerInfo",
    component: () => import("@/components/view/CustomerInfo.vue"),
  },
  {
    path: "/distributionManage",
    name: "distributionManage",
    component: () => import("@/components/view/DistributionManage.vue"),
  },
  {
    path: "/employee",
    name: "employee",
    component: () => import("@/components/view/Employee.vue"),
  },
  {
    path: "/freeForm",
    name: "freeForm",
    component: () => import("@/components/view/FreeForm.vue"),
  },
  {
    path: "/limitManage",
    name: "limitManage",
    component: () => import("@/components/view/LimitManage.vue"),
  },
  {
    path: "/menuPermissionManage",
    name: "menuPermissionManage",
    component: () => import("@/components/view/MenuPermissionManage.vue"),
  },
  {
    path: "/notiTalkManage",
    name: "notiTalkManage",
    component: () => import("@/components/view/NotiTalkManage.vue"),
  },
  {
    path: "/operationMonitor",
    name: "operationMonitor",
    component: () => import("@/components/view/OperationMonitor.vue"),
  },
  {
    path: "/otherManage",
    name: "otherManage",
    component: () => import("@/components/view/OtherManage.vue"),
  },
  {
    path: "/pushManage",
    name: "pushManage",
    component: () => import("@/components/view/PushManage.vue"),
  },
  {
    path: "/rcsManage",
    name: "rcsManage",
    component: () => import("@/components/view/RCSManage.vue"),
  },
  {
    path: "/scheduleManage",
    name: "scheduleManage",
    component: () => import("@/components/view/ScheduleManage.vue"),
  },
  {
    path: "/sendEmail",
    name: "sendEmail",
    component: () => import("@/components/view/SendEmail.vue"),
  },
  {
    path: "/shipmentControl",
    name: "shipmentControl",
    component: () => import("@/components/view/ShipmentControl.vue"),
  },
  {
    path: "/templateCode",
    name: "templateCode",
    component: () => import("@/components/view/TemplateCode.vue"),
  },
  {
    path: "/userRightsManage",
    name: "userRightsManage",
    component: () => import("@/components/view/UserRightsManage.vue"),
  },
  {
    path: "/byBatch",
    name: "byBatch",
    component: () => import("@/components/view/ByBatch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
