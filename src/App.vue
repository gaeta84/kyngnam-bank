<template>
  <div id="app">
    <HeaderLayout />
    <LeftMenu />
    <router-view />
    <FooterLayout />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderLayout from "@/components/common/HeaderLayout.vue";
import LeftMenu from "@/components/common/LeftMenu.vue";
import FooterLayout from "@/components/common/FooterLayout.vue";

export default Vue.extend({
  components: {
    HeaderLayout,
    LeftMenu,
    FooterLayout,
  },
});
</script>
