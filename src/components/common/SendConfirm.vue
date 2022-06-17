<template>
  <el-dialog :visible.sync="dialog.show" width="350px;">
    <span slot="title">{{ dialog.title }}</span>
    <span>{{ dialog.content }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog" v-if="!dialog.hideCloseBtn"
          >취소</el-button
        >
        <el-button type="primary" @click="confirm">확인</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ConfirmDialog",
  props: {
    dialog: {
      type: Object,
      default() {
        return {
          show: false,
          content: "",
          title: "",
        };
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit("close");
      this.dialog.show = false;
    },
    confirm() {
      this.$emit("confirm");
      this.dialog.show = false;
    },
  },
});
</script>
