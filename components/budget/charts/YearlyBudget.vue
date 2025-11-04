<template>
  <VizChart>
    <div class="flex flex-col lg:flex-row">
      <div
        id="YearlyBudget"
        class="flex flex-col justify-between flex-1 mb-2 md:mb-0"
      >
        <div class="wv-b3 text-center sm:text-left">
          <span class="font-bold">งบแผนงานพัฒนา 9 ด้าน(ดี) </span
          ><br />ส่วนใหญ่ถูกใช้ในด้าน
          <p class="mt-2 text-strategy-5 wv-h5 font-black mb-2 wv-kondolar">
            “สุขภาพดี”
          </p>
        </div>

        <div class="hidden lg:block">
          <StrategyLegend variant="yearly-budget" />
        </div>
      </div>
      <div class="flex-1">
        <div
          class="flex h-[280px] md:h-[480px] lg:h-[580px] w-full justify-between"
        >
          <div
            v-for="(item, key) in chartResponse"
            :key="key"
            class="w-full flex-1 relative flex items-end ml-[5px] md:ml-[15px]"
          >
            <div
              v-if="totalBudget?.filter((i) => i.year === item.year)[0]?.amount"
              class="border-wv-gray-30 border-[2px] border-dashed rounded-[5px] absolute w-full flex-1"
              :style="{
                height: `${calHeight(
                  totalBudget?.filter((i) => i.year === item.year)[0]?.amount
                )}%`,
              }"
            >
              <div
                class="absolute top-0 translate-y-[-100%] wv-b7 text-wv-gray-30 font-bold left-[50%] translate-x-[-50%]"
              >
                {{
                  convertMillion(
                    totalBudget?.filter((i) => i.year === item.year)[0]?.amount,
                    false
                  )
                }}
              </div>
            </div>
            <div
              v-else
              class="border-[2px] h-full border-wv-gray-30 border-dashed rounded-[5px] absolute w-full flex-1"
            ></div>
            <div
              v-if="totalBudget?.filter((i) => i.year === item.year)[0]?.amount"
              class="flex flex-col-reverse w-full h-full relative justify-items-end"
            >
              <div
                class="relative z-20 w-full"
                v-for="strategy in item?.strategies"
                :key="strategy.name"
                :class="bgColorSet(strategy.name)"
                :style="{
                  height: `${calHeight(strategy?.amount)}%`,
                }"
              >
                <!-- <p
                  v-if="strategy === 'บริหารจัดการดี'"
                  class="absolute text-white wv-b7 md:wv-b6 font-bold top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                >
                  {{
                    calHeight(
                      item?.strategies?.filter(
                        (str) => str.name === strategy
                      )[0]?.amount
                    ).toFixed(2)
                  }}%
                </p> -->
              </div>
              <div
                class="border-[3px] border-black rounded-[3px] absolute z-20 w-full"
                v-if="item.strategies"
                :style="{
                  height: `${calHeight(item.amount)}%`,
                }"
              ></div>
              <div class="wv-b7 md:wv-b5 font-bold mx-auto relative">
                <div
                  class="absolute translate-y-[-100%] left-[50%] translate-x-[-50%]"
                >
                  {{ convertMillion(item.amount, false) }}
                </div>
              </div>
            </div>
            <div
              class="absolute bottom-[-30px] left-[50%] wv-b5 translate-x-[-50%] wv-b5 font-bold"
              :style="{
                opacity: totalBudget?.filter((i) => i.year === item.year)[0]
                  ?.amount
                  ? ''
                  : '50%',
              }"
            >
              ’{{ item.year }}
            </div>
          </div>
        </div>
        <div class="lg:hidden block mt-16">
          <StrategyLegend variant="yearly-budget" />
        </div>
        <div class="w-full flex flex-col justify-between gap-4 mt-12">
          <div class="flex justify-center sm:justify-end">
            <NuxtLink
              :to="{
                path: 'bkkbudget/explore',
                query: { select: 'YearlyBudget' },
              }"
              class="py-2 px-2 flex items-center rounded bg-wv-green text-black h-min"
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

              สำรวจงบยุทธศาสตร์รายปีเพิ่มเติม
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
import { convertMillion, strategyList, bgColorSet } from "../utils";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";

export default Vue.extend({
  name: "YearlyBudget",
  components: { VizChart, StrategyLegend },
  data() {
    return {
      chartResponse: [],
      totalBudget: [
        { year: 68, amount: 89969500000 },
        { year: 69, amount: 74956095550 },
        { year: 70, amount: 0 },
      ],
    };
  },
  mounted() {
    this.chartResponse = this.$store.getters["data/getChartData"]().years;
    if (this.chartResponse.length < 3) {
      this.chartResponse = [...this.chartResponse, { year: 70, amount: 0 }];
    }
  },
  methods: {
    convertMillion,
    strategyList,
    bgColorSet,
    roundBudget(items) {
      const startNumber = Number(items?.slice(0, 1)) + 1;
      const digits = items?.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
    calHeight(item) {
      const totalAmount = this.roundBudget(
        Math.max(...this.totalBudget.map((o) => o.amount)).toString()
      );
      return (item / Number(totalAmount)) * 100;
    },
  },
});
</script>
