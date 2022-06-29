import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouterTabRoutes } from "vue-router-tab";
import Frame from "@/components/layout/Frame.vue";

const importPage = (view: string) => () =>
  import(`@/components/view/${view}.vue`);

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Frame,
    children: [
      ...RouterTabRoutes,
      {
        path: "/",
        name: "sendView",
        component: importPage("SendMessageView"),
        meta: {
          title: "메인",
        },
      },
      {
        path: "/dropzone",
        name: "dropZone",
        component: importPage("DropZone"),
        meta: {
          title: "dropzone테스트",
        },
      },
      {
        path: "/tree",
        name: "tree",
        component: importPage("Tree"),
        meta: {
          title: "tree테스트",
        },
      },
      {
        path: "/businessManage",
        name: "businessManage",
        component: importPage("BusinessManage"),
        meta: {
          title: "업무코드관리",
        },
      },
      {
        path: "/callerManage",
        name: "callerManage",
        component: importPage("CallerManage"),
        meta: {
          title: "발신번호관리",
        },
      },
      {
        path: "/templateManage",
        name: "templateManage",
        component: importPage("TemplateManage"),
        meta: {
          title: "템플릿관리",
        },
      },
      {
        path: "/allStatistics",
        name: "allStatistics",
        component: importPage("AllStatistics"),
        meta: {
          title: "통계 전체",
        },
      },
      {
        path: "/analysis",
        name: "analysis",
        component: importPage("Analysis"),
        meta: {
          title: "수익성분석",
        },
      },
      {
        path: "/approvalManage",
        name: "approvalManage",
        component: importPage("ApprovalManage"),
        meta: {
          title: "발송승인관리",
        },
      },
      {
        path: "/batchManage",
        name: "batchManage",
        component: importPage("BatchManage"),
        meta: {
          title: "배치프로그램관리",
        },
      },
      {
        path: "/businessCode",
        name: "sendVbusinessCodeiew",
        component: importPage("BusinessCode"),
        meta: {
          title: "업무코드선택형",
        },
      },
      {
        path: "/channel",
        name: "channel",
        component: importPage("Channel"),
        meta: {
          title: "채널별",
        },
      },
      {
        path: "/contractManage",
        name: "contractManage",
        component: importPage("ContractManage"),
        meta: {
          title: "계약관리",
        },
      },
      {
        path: "/customerHistory",
        name: "customerHistory",
        component: importPage("CustomerHistory"),
        meta: {
          title: "고객발송이력",
        },
      },
      {
        path: "/customerInfo",
        name: "customerInfo",
        component: importPage("CustomerInfo"),
        meta: {
          title: "고객동의정보",
        },
      },
      {
        path: "/distributionManage",
        name: "distributionManage",
        component: importPage("DistributionManage"),
        meta: {
          title: "분배관리",
        },
      },
      {
        path: "/employee",
        name: "employee",
        component: importPage("Employee"),
        meta: {
          title: "부서/직원별",
        },
      },
      {
        path: "/freeForm",
        name: "freeForm",
        component: importPage("FreeForm"),
        meta: {
          title: "자유작성형",
        },
      },
      {
        path: "/limitManage",
        name: "limitManage",
        component: importPage("LimitManage"),
        meta: {
          title: "부점코드 및 한도관리",
        },
      },
      {
        path: "/menuPermissionManage",
        name: "menuPermissionManage",
        component: importPage("MenuPermissionManage"),
        meta: {
          title: "메뉴권한관리",
        },
      },
      {
        path: "/notiTalkManage",
        name: "notiTalkManage",
        component: importPage("NotiTalkManage"),
        meta: {
          title: "알림톡관리",
        },
      },
      {
        path: "/operationMonitor",
        name: "operationMonitor",
        component: importPage("OperationMonitor"),
        meta: {
          title: "운영현황모니터",
        },
      },
      {
        path: "/otherManage",
        name: "otherManage",
        component: importPage("OtherManage"),
        meta: {
          title: "기타관리",
        },
      },
      {
        path: "/pushManage",
        name: "pushManage",
        component: importPage("PushManage"),
        meta: {
          title: "PUSH관리",
        },
      },
      {
        path: "/rcsManage",
        name: "rcsManage",
        component: importPage("RcsManage"),
        meta: {
          title: "RCS관리",
        },
      },
      {
        path: "/scheduleManage",
        name: "scheduleManage",
        component: importPage("ScheduleManage"),
        meta: {
          title: "발송일정관리",
        },
      },
      {
        path: "/sendEmail",
        name: "sendEmail",
        component: importPage("SendEmail"),
        meta: {
          title: "Email 발송",
        },
      },
      {
        path: "/shipmentControl",
        name: "shipmentControl",
        component: importPage("ShipmentControl"),
        meta: {
          title: "발송현황 및 제어",
        },
      },
      {
        path: "/templateCode",
        name: "templateCode",
        component: importPage("TemplateCode"),
        meta: {
          title: "템플릿코드별",
        },
      },
      {
        path: "/userRightsManage",
        name: "userRightsManage",
        component: importPage("UserRightsManage"),
        meta: {
          title: "사용자권한관리",
        },
      },
      {
        path: "/byBatch",
        name: "byBatch",
        component: importPage("ByBatch"),
        meta: {
          title: "배치별",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
