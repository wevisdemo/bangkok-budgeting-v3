<template>
  <VizChart>
    <div class="flex">
      <div class="flex flex-col flex-1 text-center md:text-left">
        <div
          id="YearlyBudget"
          class="max-w-[400px] flex flex-col gap-4 justify-between"
        >
          <p class="wv-b3 flex-grow font-bold text-center sm:text-left mb-3">
            ค้นหาข้อมูลโครงการฯ<br />
            ตามเขตและชุมชนที่คุณสนใจ
          </p>
        </div>
        <BkkMap class="md:hidden w-full" />
        <div class="mb-5">
          <p class="wv-b5">
            เขตที่ใช้งบประมาณโครงการ<br />
            ชุมชนเข้มแข็งฯ มากที่สุดในปี <b>{{ currentYear }}</b> คือ
          </p>
          <p class="wv-h5 font-bold">“{{ topDistrict }}”</p>
          <div class="opacity-50 wv-b6">
            <p>
              งบประมาณ <b>{{ totalAmount.toLocaleString("en-US", {}) }}</b> บาท
            </p>
            <p>
              ประกอบด้วย <b>{{ totalCommunity }} ชุมชน</b> ดำเนิน
              <b>{{ totalProject }} โครงการ</b>
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col justify-between gap-4 md:hidden">
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
      <div class="hidden flex-1 md:block">
        <BkkMap class="w-full" />
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
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";
import BkkMap from "./BkkMap.vue";
import * as d3 from "d3";
import { mapingColorDistrict, mapingDistrict } from "./filter/MapingDistrict";

export default Vue.extend({
  name: "OrganizeBudget",
  components: { VizChart, StrategyLegend, BkkMap },
  data() {
    return {
      currentCommu: undefined,
      currentYear: "",
      topDistrict: "",
      totalAmount: 0,
      totalCommunity: 0,
      totalProject: 0,
    };
  },

  mounted() {
    const chartData = this.$store.getters["data/getCommunity"]();
    const groupYear = _.chain(chartData).groupBy("budget_year").value();
    const sortUpdatedYear = _.sortedUniq(Object.keys(groupYear).reverse());
    const groupDistrict = _.chain(groupYear[sortUpdatedYear[0]])
      .groupBy("district")
      .mapValues((s) => _.sumBy(s, "amount"))
      .value();
    const districtSort = Object.keys(groupDistrict)
      .sort(function (a, b) {
        return groupDistrict[a] - groupDistrict[b];
      })
      .reverse();
    this.currentYear = sortUpdatedYear[0];
    this.topDistrict = districtSort[0];
    this.totalAmount = _.sumBy(groupYear[this.currentYear], "amount");
    this.totalCommunity = Object.keys(
      _.groupBy(groupYear[this.currentYear], "community")
    ).length;
    this.totalProject = groupYear[this.currentYear].length;

    d3.selectAll(".pathBKK").each(function (d) {
      const district = mapingDistrict(d3.select(this).attr("id"));
      d3.select(this)
        .attr("fill", mapingColorDistrict(groupDistrict[district]))
        .style("opacity", () => {
          return districtSort[0] !== district ? "50%" : "100%";
        })
        .style("stroke", () => (districtSort[0] !== district ? "" : "black"));
    });
  },
  methods: {
    mapingDistrict,
    mapingColorDistrict,
  },
});
</script>
