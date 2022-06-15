<template>
  <div class="container">
    <p>dropzone 라이브러리 브라우저 테스트</p>
    <vue-dropzone
      ref="dropzone"
      id="drop1"
      :options="dropOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>
    <button @click="removeAllFiles">Remove All Files</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import vueDropzone from "vue2-dropzone";

export default Vue.extend({
  data() {
    return {
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 2, // MB
        maxFiles: 4,
        chunking: true,
        chunkSize: 500, // Bytes
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true,
      },
    };
  },
  components: {
    vueDropzone,
  },
  methods: {
    afterComplete(file: any) {
      console.log(file);
    },
    removeAllFiles() {
      (this.$refs.dropzone as any).removeAllFiles();
    },
  },
});
</script>
<style lang="scss">
.container {
  margin-top: 100px;
}
p {
  font-size: 18px;
  font-weight: 700;
}
button {
  margin-top: 10px;
}
</style>
