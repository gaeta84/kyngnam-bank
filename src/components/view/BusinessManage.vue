<template>
  <div>
    <div>업무표준관리 -> 업무코드관리</div>
    <grid :cols="cols" :rows="rows"></grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Grid } from "gridjs-vue";

export default Vue.extend({
  name: "BusinessManage",
  components: {
    Grid,
  },
  data() {
    return {
      cols: ["Make", "Model", "Year", "Color"],
      rows: [
        ["Ford", "Fusion", "2011", "Silver"],
        ["Chevrolet", "Cruz", "2018", "White"],
      ],
    };
  },
  mounted() {},
  methods: {},
});
</script>
