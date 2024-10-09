<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream text-center">
      <div
        id="section-bkk-header "
        class="text-center pt-8 pb-32 bg-gradient-to-b from-wv-yello via-[70%]"
      >
        <p class="wv-h4 font-bold">สำรวจงบประมาณ <br />กรุงเทพมหานคร</p>
        <p class="wv-b3 font-bold pt-3">
          เพื่อขับเคลื่อนสู่<br />
          'เมืองน่าอยู่สำหรับทุกคน'
        </p>
      </div>
      <div id="section-navigation" class="text-center mt-[-25%]">
        <p class="wv-b7 opacity-70 mb-2">กดเลือกเนื้อหาที่สนใจ</p>
        <div class="bg-wv-yello mx-5">
          <NavLinks :links="communityPlans" arrow-direction="Down" />
        </div>
      </div>
      <GetToknow />
      <Goal />
      <p class="wv-h5 font-bold">
        สำรวจโครงการ<br />
        ชุมชนเข้มแข็งฯ
      </p>
      <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
        <BudgetUsage class="mb-5" />
        <BudgetExplorer />
      </div>
    </div>
  </div>
</template>
<script>
import BudgetExplorer from "~/components/community/BudgetExplorer.vue";
import BudgetUsage from "~/components/community/BudgetUsage.vue";
import GetToknow from "~/components/community/getToknow.vue";
import Goal from "~/components/community/goal.vue";
import NavLinks from "~/components/landing/NavLinks.vue";

export default {
  components: {
    NavLinks,
    GetToknow,
    Goal,
    BudgetExplorer,
    BudgetUsage,
  },
  data() {
    return {
      communityPlans: [
        {
          title: "วางแผนแก้ปัญหาแบบไหน",
          anchorLink: "/communityfund#problemPlanning",
        },
        {
          title: "ใช้ทำอะไรไปแล้ว",
          anchorLink: "/communityfund#budgetplans",
        },
        {
          title: "อยากให้งบทำเรื่องอะไร",
          anchorLink: "/communityfund#projectsDevelopment",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
