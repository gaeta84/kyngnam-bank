<template>
  <header>
    <div class="header_container">
      <div class="logo_info">
        <div class="inner">
          <span class="logo_img" @click="home" style="cursor: pointer"
            >Image Logo</span
          >
        </div>
      </div>
      <div class="login_info">
        <div class="login_info_inner">
          <span class="user">
            <a @click="logout">로그아웃</a>
            <a @click="isReady">내정보</a>
            <a @click="isReady">메뉴얼</a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderLayout",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    logout() {
      alert("로그아웃 되었습니다.");
    },
    isReady() {
      alert("준비중입니다.");
    },
  },
});
</script>
