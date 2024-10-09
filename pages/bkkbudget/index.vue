<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream text-center">
      <div
        id="section-bkk-header "
        class="text-center pt-8 pb-32 bg-gradient-to-b from-wv-green via-[70%]"
      >
        <p class="wv-h4 font-bold">สำรวจงบประมาณ <br />กรุงเทพมหานคร</p>
        <p class="wv-b3 font-bold pt-3">
          เพื่อขับเคลื่อนสู่<br />
          'เมืองน่าอยู่สำหรับทุกคน'
        </p>
      </div>
      <div id="section-navigation" class="text-center mt-[-25%]">
        <p class="wv-b7 opacity-70 mb-2">กดเลือกเนื้อหาที่สนใจ</p>
        <div class="bg-wv-green mx-5">
          <NavLinks :links="budgetPlans" arrow-direction="Down" />
        </div>
      </div>

      <MissionStatement />
      <!-- <PersistProblems /> -->
      <StrategicPlans />
      <!-- <DevelopmentTimeline /> -->
      <BudgetPlans />
      <AllocationQuestion />
      <ProjectDevelopment />
      <!-- <IdeaVote /> -->
      <!-- <ProjectShare /> -->
      <!-- <ParticipatoryBudgeting /> -->
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
