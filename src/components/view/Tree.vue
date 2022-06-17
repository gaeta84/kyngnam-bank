<template>
  <div>
    <el-button @click="addNode" type="primary">메뉴생성</el-button>
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      v-bind:default-expanded="false"
    >
      <template v-slot:leafNameDisplay="slotProps">
        <span>
          {{ slotProps.model.name }}
          <span class="muted">#{{ slotProps.model.id }}</span>
        </span>
      </template>
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon" slot="leafNodeIcon">🍃</span>
      <span class="icon" slot="treeNodeIcon">🌲</span>
    </vue-tree-list>
    <el-button @click="getNewTree" type="info">소스 보기</el-button>
    <pre>
      {{ newTree }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";

export default Vue.extend({
  name: "Tree",
  data() {
    return {
      newTree: {},
      data: new Tree([
        {
          name: "Node 1",
          id: 1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 2,
              isLeaf: true,
              pid: 1,
            },
          ],
        },
        {
          name: "Node 2",
          id: 3,
          pid: 0,
          disabled: true,
        },
        {
          name: "Node 3",
          id: 4,
          pid: 0,
        },
      ]),
    };
  },
  components: {
    VueTreeList,
  },
  methods: {
    onDel(node: any) {
      console.log(node);
      node.remove();
    },

    onChangeName(params: any) {
      console.log(params);
    },

    onAddNode(params: any) {
      console.log(params);
    },

    onClick(params: any) {
      console.log(params);
    },

    addNode() {
      const node = new TreeNode({ name: "new node", isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },

    getNewTree() {
      function _dfs(oldNode: any) {
        let newNode = {};

        for (let k in oldNode) {
          if (k !== "children" && k !== "parent") {
            (newNode as any)[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          (newNode as any).children = [];
          for (let i = 0, len = oldNode.children.length; i < len; i++) {
            ((newNode as any).children as any).push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      this.newTree = _dfs(this.data);
    },
  },
});
</script>
