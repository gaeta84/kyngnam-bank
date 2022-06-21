<template>
  <div class="box_container">
    <div class="top_line"></div>
    <div class="preview_wrap">
      <div :class="{ content: active }">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PhonePreview",
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    item: {
      type: String,
      default: "미리보기 화면",
    },
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>
