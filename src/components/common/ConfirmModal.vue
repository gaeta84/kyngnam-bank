<template>
  <div class="modal" v-if="dialog.show">
    <div class="bg"></div>

    <div class="modal_box">
      <span class="title">
        {{ dialog.title }}
      </span>
      <span class="cancle" @click="closeDialog"> x </span>
      <span class="content">
        {{ dialog.content }}
      </span>
      <div class="btn_box">
        <button class="close_btn" @click="closeDialog">취소</button>
        <button class="confirm_btn" @click="confirm">확인</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ConfirmModal",
  props: {
    dialog: {
      type: Object,
      default() {
        return {
          show: false,
          content: "문자를 전송하시겠습니까?",
          title: "알림",
        };
      },
    },
  },
  data() {
    return {};
  },
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
