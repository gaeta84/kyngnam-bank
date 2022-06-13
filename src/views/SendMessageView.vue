<template>
	<SendViewContainer />
</template>

<script lang="ts">
  import Vue from "vue";
  import SendViewContainer from "@/components/elements/sendView.vue";

  export default Vue.extend({
    name: "SendView",
    components: {
      SendViewContainer
    }
  });
</script>