<template>
  <VizChart>
    <div class="flex flex-col lg:flex-row">
      <div
        id="OrganizeBudget"
        class="flex flex-1 flex-col gap-4 justify-between"
      >
        <p class="wv-b3 flex-grow max-w-[253px] text-center sm:text-left mb-3">
          <span class="font-bold">5 อันดับหน่วยงาน</span>ที่ได้รับงบฯ
          สูงที่สุดในปี 25{{ currentYear }} จาก<br />
          {{ rawData.length }} หน่วยงาน
        </p>

        <div class="hidden lg:block">
          <StrategyLegend variant="budget-usage" />
        </div>
      </div>
      <div class="w-full flex-1 flex flex-col justify-between gap-4">
        <div>
          <div
            v-for="(item, key) in chartOrganize"
            :key="key"
            class="flex mb-5"
          >
            <div class="wv-h8 text-gray-300 mr-5">
              {{ key + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex justify-between w-full">
                <div class="wv-b4 font-bold">{{ item.nameOrganization }}</div>
                <div class="wv-b6">
                  <span class="font-bold">
                    {{ convertMillion(item.amount) }}</span
                  >
                  ล้านบาท
                </div>
              </div>
              <div class="flex bg-gray-100">
                <div
                  v-for="strategy in strategyList()"
                  :key="strategy"
                  class="h-[10px]"
                  :style="{ width: drawChart(item, strategy) }"
                  :class="bgColorSet(strategy)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:hidden block mt-5">
          <StrategyLegend variant="budget-usage" />
        </div>
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{
              path: `${!isBkkBudgetPath ? 'explore' : '/bkkbudget/explore'}`,
              query: { select: 'OrganizeBudget' },
            }"
            class="flex items-center py-2 px-2 rounded bg-wv-green text-black h-min"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.05289"
                cy="6.56449"
                r="3.92676"
                transform="rotate(-30 7.05289 6.56449)"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M9.08948 10.3943L11.2794 14.1874"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

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
import { filterByOrganize } from "./filterBy";
import { convertMillion, bgColorSet, strategyList } from "../utils";

export default Vue.extend({
  name: "OrganizeBudget",
  components: { VizChart, StrategyLegend },
  data() {
    return {
      isBkkBudgetPath: false,
      chartOrganize: [],
      rawData: [],
      currentYear: [],
    };
  },

  mounted() {
    const currentPath = String(this.$route.path || "");
    this.isBkkBudgetPath = currentPath.includes("bkkbudget");
    this.rawData = filterByOrganize(
      "งบมากไปน้อย",
      this.$store.getters["data/getChartDataGroupByOrganizations"]({ year: 69 })
    );
    const chartData = this.$store.getters["data/getChartData"]();
    this.chartOrganize = this.rawData.slice(0, 5);
    this.currentYear = chartData.years[chartData.years.length - 1].year;
  },
  methods: {
    convertMillion,
    filterByOrganize,
    bgColorSet,
    strategyList,
    drawChart(item, strategy) {
      const matchStrategy = item.strategies.filter(
        (i) => i.name === strategy
      )[0];
      return (
        matchStrategy &&
        `${(matchStrategy.amount / this.chartOrganize[0].amount) * 100}%`
      );
    },
  },
});
</script>
