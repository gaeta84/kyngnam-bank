declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue2-dropzone" {
  import vueDropzone from "vue2-dropzone";
  export default vueDropzone;
}

declare module "vue-tree-list" {
  import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
  export { VueTreeList, Tree, TreeNode };
}

declare module "vue-router-tab" {
  import RouterTab from "vue-router-tab";
  export default RouterTab;
}

declare module "vue-router-tab" {
  import { RouterTabRoutes } from "vue-router-tab";
  export { RouterTabRoutes };
}
