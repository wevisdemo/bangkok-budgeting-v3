<template>
  <VizChart>
    <div class="flex flex-col lg:flex-row">
      <div
        id="YearlyBudget"
        class="max-w-[400px] flex flex-col gap-4 justify-between"
      >
        <p class="wv-b3 flex-grow font-bold text-center sm:text-left mb-3">
          ค้นหาข้อมูลโครงการฯ<br />
          ตามเขตและชุมชนที่คุณสนใจ
        </p>
      </div>
      <img src="~/assets/illustrations/BKKMap.svg" alt="BKK map" class="my-5" />
      <div class="mb-5">
        <p class="wv-b5">
          เขตที่ใช้งบประมาณโครงการ<br />
          ชุมชนเข้มแข็งฯ มากที่สุดในปี <b>current year</b> คือ
        </p>
        <p class="wv-h5 font-bold">“Top of Community”</p>
        <div class="opacity-50 wv-b6">
          <p>งบประมาณ <b>17,200,000</b> บาท</p>
          <p>ประกอบด้วย <b>99 ชุมชน</b> ดำเนิน <b>218 โครงการ</b></p>
        </div>
      </div>
      <div class="w-full flex flex-col justify-between gap-4">
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{
              path: 'communityfund/explore',
              query: { select: 'YearlyBudget' },
            }"
            class="flex items-center py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
          >
            สำรวจหน่วยงานที่เหลือ
            <i class="el-icon-right ml-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";

export default Vue.extend({
  name: "OrganizeBudget",
  components: { VizChart, StrategyLegend },
  data() {
    return {
      currentCommu: undefined,
    };
  },

  mounted() {
    const chartData = this.$store.getters["data/getCommunity"]();
    const groupYear = _.chain(chartData).groupBy("budget_year").value();
    const groupDistrict = {
      valueAmount: _.chain(Object.values(groupYear)[0])
        .groupBy("district")
        .mapValues((s) => _.sumBy(s, "amount"))
        .value(),
    };
  },
  methods: {},
});
</script>
