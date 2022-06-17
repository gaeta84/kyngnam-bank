<template>
  <div class="send_message_container">
    <div class="inputs">
      <el-form :model="sendMessage" class="demo-ruleForm">
        <div class="topLine">----</div>
        <el-form-item required>
          <el-select
            v-model="sendMessage.value"
            filterable
            placeholder="최근발신번호"
            @change="phoneNumberChange($event)"
            allow-create
            default-first-option
            style="width: 320px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item required>
          <el-col :span="20">
            <el-input
              v-model="sendMessage.textarea"
              :rows="12"
              type="textarea"
              @input="bytesCount"
            />
          </el-col>
        </el-form-item>
        <div class="validation-box">
          <span class="message-name">{{ messageText }}</span>
          <span class="check-bytes" :style="{ color: isRed }"
            >{{ byteLength }} / {{ totalByteLength }} Bytes</span
          >
        </div>
        <div class="button-box">
          <el-button type="primary" round size="small" @click="moveDropzone"
            >dropzone 이동</el-button
          >
          <el-button type="primary" round size="small" @click="moveTree"
            >tree 이동</el-button
          >
          <el-button type="primary" round size="small" @click="sendBtn"
            >즉시전송</el-button
          >
          <ConfirmDialog :dialog="confirmDialog" @confirm="confirmBtn" />
          <ConfirmDialog :dialog="successDialog" @confirm="successBtn" />
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Utils from "@/scripts/utils";
import ConfirmDialog from "@/components/common/SendConfirm.vue";
import SendMessageUseCase from "@/usecases/SendMessageUseCase";
export default Vue.extend({
  data() {
    return {
      sendMessageUseCase: new SendMessageUseCase(),
      messageText: "SMS",
      byteLength: 0,
      totalByteLength: 90,
      isRed: "",
      options: [
        {
          value: "01011112222",
        },
        {
          value: "01022223333",
        },
      ],
      sendMessage: {
        value: "",
        textarea: "",
      },
      confirmDialog: {
        show: false,
        title: "Confirm",
        content: "문자를 전송하시겠습니까?",
      },
      successDialog: {
        show: false,
        title: "Success",
        content: "문자전송이 성공하였습니다.",
        hideCloseBtn: true,
      },
    };
  },
  components: {
    ConfirmDialog,
  },
  methods: {
    phoneNumberChange(e: any) {
      let result = new Utils().checkNumber(e);
      if (result) {
        this.sendMessage.value = e;
      } else {
        this.sendMessage.value = "";
      }
    },
    sendBtn() {
      if (this.sendMessage.value === null || this.sendMessage.value === "") {
        alert("폰번호를 입력해주세요");
        return false;
      }
      if (
        this.sendMessage.textarea === null ||
        this.sendMessage.textarea === ""
      ) {
        alert("내용을 입력해주세요");
        return false;
      }
      this.confirmDialog.show = true;
    },

    // 문자보내기 총바이트로 유효성검사
    bytesCount(e: any) {
      this.sendMessage.textarea = e;
      this.byteLength = new Utils().checkByte(this.sendMessage.textarea);

      if (this.byteLength > 2000) {
        this.isRed = "red";
      } else {
        this.isRed = "";
      }

      if (this.byteLength > 90) {
        this.totalByteLength = 2000;
        this.messageText = "LMS";
      } else {
        this.totalByteLength = 90;
        this.messageText = "SMS";
      }
    },
    async confirmBtn() {
      const payload: any = {
        hpNumber: this.sendMessage.value,
        message: this.sendMessage.textarea,
      };
      const result = await this.sendMessageUseCase.sendMessage(payload);
      if (result.code === 200) {
        this.successDialog.show = true;
        this.sendMessage.value = "";
        this.sendMessage.textarea = "";
      }
    },
    successBtn() {
      this.successDialog.show = false;
    },
    moveDropzone() {
      this.$router.push("/dropzone");
    },
    moveTree() {
      this.$router.push("/tree");
    },
  },
});
</script>
