<template>
  <div class="side_menu_container">
    <aside>
      <div class="menu_tree_management">
        <div class="title">메뉴 관리</div>
        <div class="table_ctn">
          <div class="menu_tree">
            <ul>
              <li>
                <input type="checkbox" id="ch1" />
                <label for="ch1">업무표준 관리</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/businessManage">업무코드관리</router-link>
                  </li>
                  <li>
                    <router-link to="/callerManage">발신번호관리</router-link>
                  </li>
                  <li>
                    <router-link to="/templateManage">템플릿관리</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch2" />
                <label for="ch2">채널관리</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/distributionManage">분배관리</router-link>
                  </li>
                  <li>
                    <router-link to="/contractManage">계약관리</router-link>
                  </li>
                  <li>
                    <router-link to="/notiTalkManage">알림톡관리</router-link>
                  </li>
                  <li><router-link to="/rcsManage">RCS관리</router-link></li>
                  <li><router-link to="/pushManage">PUSH관리</router-link></li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch3" />
                <label for="ch3">계약서류발송</label>
                <ul class="sub_menu">
                  <li><router-link to="/sendEmail">Email 발송</router-link></li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch4" />
                <label for="ch4">발송</label>
                <ul class="sub_menu">
                  <li><router-link to="/freeForm">자유작성형</router-link></li>
                  <li>
                    <router-link to="/businessCode">업무코드선택형</router-link>
                  </li>
                  <li>
                    <router-link to="/approvalManage">발송승인관리</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch5" />
                <label for="ch5">대량발송관리</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/scheduleManage">발송일정관리</router-link>
                  </li>
                  <li>
                    <router-link to="/shipmentControl"
                      >발송현황 및 제어</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch6" />
                <label for="ch6">고객별내역조회</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/customerHistory"
                      >고객발송이력</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/customerInfo">고객동의정보</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch7" />
                <label for="ch7">통계</label>
                <ul class="sub_menu">
                  <li><router-link to="/allStatistics">전체</router-link></li>
                  <li>
                    <router-link to="/templateCode">템플릿코드별</router-link>
                  </li>
                  <li><router-link to="/byBatch">배치별</router-link></li>
                  <li><router-link to="/employee">부서/직원별</router-link></li>
                  <li><router-link to="/channel">채널별</router-link></li>
                  <li><router-link to="/analysis">수익성분석</router-link></li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch8" />
                <label for="ch8">서비스 설정</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/menuPermissionManage"
                      >메뉴권한관리</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/userRightsManage"
                      >사용자권한관리</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/limitManage"
                      >부점코드 및 한도관리</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <input type="checkbox" id="ch9" />
                <label for="ch9">시스템관리</label>
                <ul class="sub_menu">
                  <li>
                    <router-link to="/operationMonitor"
                      >운영현황모니터</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/batchManage"
                      >배치프로그램관리</router-link
                    >
                  </li>
                  <li><router-link to="/otherManage">기타관리</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LeftMenu",
  data() {
    return {};
  },
});
</script>
