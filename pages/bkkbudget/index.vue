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
              <p class="wv-h8 font-bold">ขอบคุณที่ร่วมตอบคำถาม</p>
              <p class="wv-b5 mt-1">
                หากคุณต้องการเสนอโครงการให้เกิดขึ้นจริง ในชุมชนของคุณ
                เราขอชวนคุณสำรวจต่อ !
              </p>
              <button
                class="wv-b5 border-black py-2 border opacity-60 mt-3 w-full rounded-[5px]"
              >
                สำรวจโครงการพัฒนาชุมชนเมืองฯ
              </button>
              <button
                class="wv-b5 border-black border py-2 opacity-60 mt-2 w-full rounded-[5px]"
              >
                ย้อนกลับหน้าแรก
              </button>
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
          title: "วางแผนแก้ปัญหาแบบไหน",
          anchorLink: "/bkkbudget#problemPlanning",
        },
        {
          title: "ใช้ทำอะไรไปแล้ว",
          anchorLink: "/bkkbudget#budgetplans",
        },
        {
          title: "อยากให้งบทำเรื่องอะไร",
          anchorLink: "/bkkbudget#projectsDevelopment",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
