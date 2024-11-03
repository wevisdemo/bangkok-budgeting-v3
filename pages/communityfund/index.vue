<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream text-center">
      <div
        class="flex flex-col md:flex-row bg-gradient-to-b from-wv-yellow via-[70%] justify-center pt-10"
      >
        <div id="section-bkk-header " class="text-center pb-5 flex-1">
          <p class="wv-h4 font-bold">สำรวจงบประมาณ <br />พัฒนาชุมชนเมือง</p>
          <p class="wv-b3 font-bold pt-3">
            โคงการชุมชมเข้มแข็งฯ 200,000 บาทต่อชุมชน
          </p>
        </div>
        <div id="section-navigation" class="text-center flex-1">
          <div class="max-w-[400px] mx-auto">
            <p class="wv-b7 opacity-70 mb-2">กดเลือกเนื้อหาที่สนใจ</p>
            <div class="bg-wv-yellow md:bg-white mx-5 rounded-[5px]">
              <NavLinks :links="communityPlans" arrow-direction="Down" />
            </div>
          </div>
        </div>
      </div>
      <div class="wv-b3 mx-auto">
        <img src="~/assets/images/landingCommu.png" class="mx-auto" />
        <div
          class="opacity-50 mt-3 wv-b7 flex space-x-1 items-center justify-center"
        >
          <span>เลื่อนเพื่อเข้าเนื้อหา</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6"
              cy="6"
              r="5"
              stroke="black"
              stroke-width="0.787917"
            />
            <path
              d="M3.85156 5.01334L5.99949 7.71939L8.14741 5.01334"
              stroke="black"
              stroke-width="0.787917"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <GetToknow />
      <Goal />
      <p class="wv-h5 font-bold mt-10" id="community-survey">
        สำรวจโครงการ<br class="md:hidden" />
        ชุมชนเข้มแข็งฯ
      </p>
      <div class="max-w-7xl py-6 m-auto">
        <div class="px-3 md:px-6">
          <BudgetUsage class="mb-5" />
          <BudgetExplorer />
          <DesignCommunity />
        </div>
        <ShowYourIdea />
        <div class="px-3 md:px-6">
          <FinalNavigatePage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BudgetExplorer from "~/components/community/BudgetExplorer.vue";
import BudgetUsage from "~/components/community/BudgetUsage.vue";
import DesignCommunity from "~/components/community/DesignCommunity.vue";
import GetToknow from "~/components/community/getToknow.vue";
import Goal from "~/components/community/goal.vue";
import NavLinks from "~/components/landing/NavLinks.vue";
import FinalNavigatePage from "~/components/community/FinalNavigatePage.vue";
import ShowYourIdea from "~/components/community/ShowYourIdea.vue";

export default {
  components: {
    NavLinks,
    GetToknow,
    Goal,
    BudgetExplorer,
    BudgetUsage,
    DesignCommunity,
    ShowYourIdea,
    FinalNavigatePage,
  },
  data() {
    return {
      communityPlans: [
        {
          title: "ทำความรู้จักโครงการชุมชนเข้มแข็งฯ",
          anchorLink: "/communityfund#section-get-to-know",
        },
        {
          title: "สำรวจโครงการของชุมชนตามเขตที่คุณสนใจ",
          anchorLink: "/communityfund#community-survey",
        },
        {
          title: "อยากให้ชุมชนของคุณพัฒนาโครงการอะไร",
          anchorLink: "/communityfund#community-plans",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
