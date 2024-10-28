<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream text-center">
      <div
        class="flex flex-col md:flex-row bg-gradient-to-b from-wv-green via-[70%] justify-center pt-10"
      >
        <div id="section-bkk-header " class="text-center pb-5 flex-1">
          <p class="wv-h4 font-bold">สำรวจงบประมาณ <br />กรุงเทพมหานคร</p>
          <p class="wv-b3 font-bold pt-3">
            เพื่อขับเคลื่อนสู่<br />
            'เมืองน่าอยู่สำหรับทุกคน'
          </p>
        </div>
        <div id="section-navigation" class="text-center flex-1">
          <div class="max-w-[360px] mx-auto">
            <p class="wv-b7 opacity-70 mb-2">กดเลือกเนื้อหาที่สนใจ</p>
            <div class="bg-wv-green md:bg-white mx-5 rounded-[5px]">
              <NavLinks :links="budgetPlans" arrow-direction="Down" />
            </div>
          </div>
        </div>
      </div>

      <MissionStatement />
      <!-- <PersistProblems /> -->
      <StrategicPlans />
      <!-- <DevelopmentTimeline /> -->
      <BudgetPlans />
      <AllocationQuestion />
      <ProjectDevelopment />
      <!-- <ProjectShare /> -->
      <!-- <ParticipatoryBudgeting /> -->
      <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
        <div
          id="budgetplans"
          class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8"
        >
          <div
            class="flex justify-center py-10 items-center w-full text-center"
          >
            <img
              src="~/assets/illustrations/budgetplans.svg"
              alt="Budget plan"
              width="100%"
              height="auto"
              class="max-w-[600px]"
            />
            <div class="absolute max-w-[284px] mx-auto text-center">
              <div class="wv-h8 font-bold">ขอบคุณที่ร่วมตอบคำถาม</div>
              <p class="wv-b5 mt-1">
                หากคุณต้องการเสนอโครงการให้เกิดขึ้นจริง ในชุมชนของคุณ
                เราขอชวนคุณสำรวจต่อ !
              </p>
              <NuxtLink
                :to="{
                  path: 'communityfund',
                }"
                class="wv-b5 flex w-full justify-center items-center mx-auto border-black py-2 border opacity-60 mt-3 rounded-[5px]"
              >
                สำรวจโครงการพัฒนาชุมชนเมืองฯ<svg
                  class="ml-1"
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0466 6.66607C18.3395 6.37318 18.3395 5.89831 18.0466 5.60541L13.2736 0.832441C12.9807 0.539548 12.5059 0.539548 12.213 0.832441C11.9201 1.12533 11.9201 1.60021 12.213 1.8931L16.4556 6.13574L12.213 10.3784C11.9201 10.6713 11.9201 11.1461 12.213 11.439C12.5059 11.7319 12.9807 11.7319 13.2736 11.439L18.0466 6.66607ZM0.849609 6.88574H17.5163V5.38574H0.849609V6.88574Z"
                    fill="#454343"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="{
                  path: '/',
                }"
                class="wv-b5 border-black border py-2 opacity-60 mt-2 w-full flex justify-center rounded-[5px]"
              >
                ย้อนกลับหน้าแรก<svg
                  class="ml-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.712 1.27224C10.4191 0.979349 9.9442 0.979349 9.65131 1.27224L4.87834 6.04521C4.58545 6.33811 4.58545 6.81298 4.87834 7.10587C5.17123 7.39877 5.64611 7.39877 5.939 7.10587L10.1816 2.86323L14.4243 7.10587C14.7172 7.39877 15.192 7.39877 15.4849 7.10587C15.7778 6.81298 15.7778 6.33811 15.4849 6.04521L10.712 1.27224ZM10.9316 18.4692L10.9316 1.80257L9.43164 1.80257L9.43164 18.4692L10.9316 18.4692Z"
                    fill="#454343"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import BudgetPlans from "~/components/budget/BudgetPlans.vue";
import DevelopmentTimeline from "~/components/DevelopmentTimeline.vue";
import ProjectShare from "~/components/ProjectShare.vue";
import MissionStatement from "~/components/MissionStatement.vue";
import ParticipatoryBudgeting from "~/components/ParticipatoryBudgeting.vue";
import PersistProblems from "~/components/PersistProblems.vue";
import ProjectDevelopment from "~/components/ProjectDevelopment.vue";
import StrategicPlans from "~/components/StrategicPlans.vue";
import IdeaVote from "~/components/vote/IdeaVote.vue";
import NavLinks from "~/components/landing/NavLinks.vue";

export default {
  components: {
    AllocationQuestion,
    PersistProblems,
    StrategicPlans,
    DevelopmentTimeline,
    BudgetPlans,
    MissionStatement,
    ProjectDevelopment,
    ProjectShare,
    ParticipatoryBudgeting,
    IdeaVote,
    NavLinks,
  },
  data() {
    return {
      budgetPlans: [
        {
          title: "ทำความเข้าใจแผนการใช้งบ",
          anchorLink: "/bkkbudget#sections-strategy-plan",
        },
        {
          title: "สำรวจการใช้งบประมาณ",
          anchorLink: "/bkkbudget#budget-plans",
        },
        {
          title: "อยากให้ใช้งบทำอะไร",
          anchorLink: "/bkkbudget#allocate-question",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style lang=""></style>
