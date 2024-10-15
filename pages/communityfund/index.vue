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
          <div class="max-w-[360px] mx-auto">
            <p class="wv-b7 opacity-70 mb-2">กดเลือกเนื้อหาที่สนใจ</p>
            <div class="bg-wv-yellow md:bg-white mx-5 rounded-[5px]">
              <NavLinks :links="communityPlans" arrow-direction="Down" />
            </div>
          </div>
        </div>
      </div>
      <div class="wv-b3 mx-auto">
        <img src="~/assets/images/landingCommu.png" class="mx-auto" />
        <p class="opacity-50 mt-3 wv-b7">เลื่อนเพื่อเข้าเนื้อหา</p>
      </div>
      <GetToknow />
      <Goal />
      <p class="wv-h5 font-bold mt-10">
        สำรวจโครงการ<br class="md:hidden" />
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
