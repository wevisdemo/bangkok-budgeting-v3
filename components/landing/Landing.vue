<template>
  <div>
    <BoxContainer class="relative overflow-hidden h-full">
      <div
        class="flex flex-col sm:flex-row gap-6 justify-between p-0 sm:px-10 lg:px-20 lg:pt-10"
      >
        <div
          class="flex flex-col gap-3 sm:w-min z-10 sm:pt-30 sm:pb-20 text-center sm:text-left"
        >
          <h1 class="wv-h2 wv-kondolar font-extrabold">
            <div>Bangkok</div>
            <div>Budgeting</div>
          </h1>
          <div class="wv-b3 wv-bold hidden sm:block">
            <p>เปิดเผย โปร่งใส<br />เข้าใจแผนการใช้งบกรุงเทพมหานคร</p>
          </div>
          <div class="wv-b4 wv-bold block sm:hidden">
            <p>เปิดเผย โปร่งใส<br />เข้าใจแผนการใช้งบกรุงเทพมหานคร</p>
          </div>
          <div class="flex items-cente justify-center md:justify-start">
            <p class="wv-b7">ร่วมพัฒนาโดย</p>
            <div class="w-[50px] ml-2">
              <img
                :src="require(`~/assets/images/partners/hand.png`)"
                alt="hand"
              />
            </div>
          </div>

          <div class="block sm:hidden w-full">
            <Lottie :options="defaultOptions" />
          </div>
        </div>
      </div>
      <div class="max-w-[1000px] hidden sm:block opacity-95 mx-auto w-full">
        <Lottie :options="defaultOptions" />
      </div>
    </BoxContainer>
    <div
      class="flex flex-col overflow-hidden md:flex-row container px-3 mx-auto justify-between space-x-2"
    >
      <div
        id="section-bkk"
        class="bg-white md:max-w-[50%] p-4 rounded-lg flex-1"
      >
        <SurveyMainCard :data="surveyBudgetBKK" :type="BudgetingType.BKK" />
        <p class="wv-b3 font-bold text-center my-2">ข้อมูลที่น่าสนใจ</p>
        <InterestingCard :data="topInterestGreen" :type="BudgetingType.BKK" />
      </div>
      <div
        id="section-comunityfund"
        class="bg-white p-4 mt-5 md:mt-0 rounded-lg flex-1 md:max-w-[50%]"
      >
        <SurveyMainCard
          :data="surveyBudgetCommunityFund"
          :type="BudgetingType.CommunityFund"
        />
        <p class="wv-b3 font-bold text-center my-2">ข้อมูลที่น่าสนใจ</p>
        <InterestingCard
          :data="topInterestYellow"
          :type="BudgetingType.CommunityFund"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Lottie from "vue-lottie/src/lottie.vue";
import NavLinks from "~/components/landing/NavLinks.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import landingAnimation from "~/assets/lottie/landing.json";
import SurveyMainCard from "./SurveyMainCard.vue";
import { BudgetingType } from "../commonType";
import InterestingCard from "./InterestingCard.vue";

export default Vue.extend({
  name: "LandingPage",
  components: {
    NavLinks,
    BoxContainer,
    Lottie,
    SurveyMainCard,
    InterestingCard,
  },
  data() {
    return {
      BudgetingType,
      defaultOptions: {
        animationData: landingAnimation,
        loop: true,
        autoplay: true,
      },
      topInterestGreen: [
        {
          topic: "แผนนโยบายที่ใช้งบมากที่สุด",
          header: "สุขภาพดี",
          budget: "1,800",
          path: "bkkbudget/explore",
          query: { select: "YearlyBudget" },
        },
        {
          topic: "หน่วยงานที่ได้รับงบมากที่สุด",
          header: "สำนักการระบายน้ำ",
          budget: "1,730",
          path: "bkkbudget/explore",
          query: { select: "OrganizeBudget", key: "สำนักการระบายน้ำ" },
        },
        {
          topic: "คีย์เวิร์ดที่พบบ่อยมากที่สุด",
          header: "ก่อสร้าง",
          budget: "82",
          path: "bkkbudget/explore",
          query: { select: "OrganizeBudget", key: "N/A" },
        },
      ],
      topInterestYellow: [
        {
          topic: "เขตที่ได้รับ<br/>การจัดสรรงบมากที่สุด",
          header: "หนองจอก",
          budget: "19.8",
          path: "communityfund/explore",
          query: { select: "YearlyBudget", district: "หนองจอก" },
        },
        {
          topic: "เขตที่เบิกใช้งบ<br/>มากที่สุดในปีปัจจุบัน (2566)",
          header: "หนองจอก",
          budget: "13.7",
          path: "communityfund/explore",
          query: { select: "YearlyBudget", district: "หนองจอก", year: "2566" },
        },
        {
          topic: "รายการชุมชนจัดซื้อมากที่สุด",
          header: "โต๊ะ",
          budget: "148",
          path: "communityfund/explore",
          query: { select: "OrganizeBudget", key: "โต๊ะ" },
        },
      ],
      surveyBudgetBKK: {
        title: "สำรวจงบประมาณกรุงเทพมหานคร",
        title_mb: "สำรวจงบประมาณ<br/>กรุงเทพมหานคร",
        des: "เพื่อขับเคลื่อนสู่ <br/>'เมืองน่าอยู่สำหรับทุกคน'",
        bullet: [
          "ทำความเข้าใจแผนการใช้งบ",
          "สำรวจการใช้งบประมาณ",
          "อยากให้ใช้งบทำอะไร",
        ],
      },
      surveyBudgetCommunityFund: {
        title: "สำรวจงบประมาณพัฒนาชุมชนเมือง",
        title_mb: "สำรวจงบประมาณ<br/>พัฒนาชุมชนเมือง",
        des: "โคงการชุมชมเข้มแข็งฯ<br/> 200,000 บาทต่อชุมชน",
        bullet: [
          "ทำความรู้จักโครงการชุมชนเข้มแข็ง",
          "สำรวจโครงการของชุมชนตามเขตที่คุณสนใจ",
          "อยากให้ชุมชนของคุณพัฒนาโครงการอะไร",
        ],
      },
    };
  },
});
</script>
