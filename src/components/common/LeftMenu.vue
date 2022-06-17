<template>
  <div class="menu_tree_management">
    <div class="title">메뉴 관리</div>
    <div class="table_ctn">
      <div class="menu_tree">
        <ul>
          <li>
            <input type="checkbox" id="ch1" />
            <label for="ch1">업무표준 관리</label>
            <ul class="sub_menu">
              <li>업무코드관리</li>
              <li>발신번호관리</li>
              <li>템플릿관리</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch2" />
            <label for="ch2">채널관리</label>
            <ul class="sub_menu">
              <li>분배관리</li>
              <li>계약관리</li>
              <li>알림톡관리</li>
              <li>RCS관리</li>
              <li>PUSH관리</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch3" />
            <label for="ch3">계약서류발송</label>
            <ul class="sub_menu">
              <li>Email 발송</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch4" />
            <label for="ch4">발송</label>
            <ul class="sub_menu">
              <li>자유작성형</li>
              <li>업무코드선택형</li>
              <li>발송승인관리</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch5" />
            <label for="ch5">대량발송관리</label>
            <ul class="sub_menu">
              <li>발송일정관리</li>
              <li>발송현황 및 제어</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch6" />
            <label for="ch6">고객별내역조회</label>
            <ul class="sub_menu">
              <li>고객발송이력</li>
              <li>고객동의정보</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch7" />
            <label for="ch7">통계</label>
            <ul class="sub_menu">
              <li>전체</li>
              <li>템플릿코드별</li>
              <li>배치별</li>
              <li>부서/직원별</li>
              <li>채널별</li>
              <li>수익성분석</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch8" />
            <label for="ch8">서비스 설정</label>
            <ul class="sub_menu">
              <li>메뉴권한관리</li>
              <li>사용자권한관리</li>
              <li>부점코드 및 한도관리</li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="ch9" />
            <label for="ch9">시스템관리</label>
            <ul class="sub_menu">
              <li>운영현황모니터</li>
              <li>배치프로그램관리</li>
              <li>기타관리</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
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

<style>
/*메뉴트리 영역설정*/
.menu_tree_management {
  width: 260px;
  float: left;
  border: 1px solid #bcbcbc;
  margin-top: 10px;
}

ul {
  list-style: none;
}

/*타이틀 스타일링 */
.menu_tree_management .title {
  height: 18px;
  line-height: 18px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: solid 1px black;
}

/* 메뉴트리 영역*/

/* 1. 체크박스 숨기기*/
.menu_tree_management input[type="checkbox"] {
  display: none;
}

/* 2. 라벨 스타일링*/

/* 3. 라벨 앞의 아이콘 넣기*/
.menu_tree_management input[type="checkbox"] + label::before {
  content: "ㅇ";
  position: absolute;
  width: 19px;
  height: 19px;
  left: 0;
  top: 0;
}

/* 4. 체크 되었을때 아이콘 변경*/
.menu_tree_management input[type="checkbox"]:checked + label::before {
}

/* 서브메뉴 노출 */

/* 5. ul.sub_menu 숨기기*/
.menu_tree_management input[type="checkbox"] + label ~ * {
  display: none;
}

/* 6. 체크시 ul.sub_menu 나타나기*/
.menu_tree_management input[type="checkbox"]:checked + label ~ * {
  display: block;
}

.menu_tree_management input[type="checkbox"] + label {
  cursor: pointer;
  border-bottom: solid 1px black;
}

.menu_tree_management .table_ctn .menu_tree > ul {
  float: left;
  margin-top: -10px;
}

/* 7. 라벨 스타일링*/
.menu_tree_management .table_ctn .menu_tree > ul > li {
  margin-bottom: 20px;
}

.menu_tree_management .table_ctn .menu_tree > ul > li:last-child {
  margin-bottom: 0px;
}

/* 서브메뉴 스타일링 */
.menu_tree_management .table_ctn .menu_tree .sub_menu {
  margin-top: 15px;
  text-indent: 30px;
}

.menu_tree_management .table_ctn .menu_tree .sub_menu > li {
  position: relative;
  padding-right: 15px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666666;
}

/* 7. 서브메뉴 앞 기호넣기 */
.menu_tree_management .table_ctn .menu_tree .sub_menu > li:before {
  content: "∟";
  margin-right: 5px;
}
</style>
