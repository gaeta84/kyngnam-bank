<template>
  <div class="login_container">
    <span class="test"
      >(TEST)아무 아이디와 비밀번호를 입력하고 로그인버튼을 누르면 메인페이지로
      이동됩니다.</span
    >
    <div class="login_wrap">
      <div>
        <span class="user_id">아이디</span>
        <input type="text" v-model="userId" class="user_id" />

        <span class="password">비밀번호</span>
        <input
          type="password"
          v-model="password"
          @keyup.enter="login"
          class="user_password"
        />
        <div class="text_box">
          <p class="email_init" @click="emailInit">
            이메일로 비밀번호 초기화 하기
          </p>

          <p class="messenger_init" @click="messengerInit">
            메신저로 비밀번호 초기화 하기
          </p>
        </div>
      </div>
      <button class="btn btn-primary" @click="login">로그인</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    emailInit() {
      alert("준비중입니다.");
    },
    messengerInit() {
      alert("준비중입니다.");
    },
    login() {
      if (this.userId === "") {
        alert("아이디를 입력해주세요.");
        return false;
      }
      if (this.password === "") {
        alert("비밀번호를 입력해주세요.");
        return false;
      }
      this.$router.push("/main");
    },
  },
});
</script>
