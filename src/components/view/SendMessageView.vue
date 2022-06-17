<template>
  <SendMessageContainer />
</template>

<script lang="ts">
import Vue from "vue";
import SendMessageContainer from "@/components/layout/SendMessage.vue";

export default Vue.extend({
  name: "SendMessageView",
  components: {
    SendMessageContainer,
  },
});
</script>
