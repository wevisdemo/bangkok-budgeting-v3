<template>
  <div
    v-if="chartData.years"
    id="wrapper-horizontal-barchart"
    class="max-w-[685px] h-fit flex-1 flex flex-col justify-between w-full mx-auto"
  >
    <div class="flex justify-between items-center mb-6">
      <div>
        <p class="wv-b3 font-bold">
          พบ {{ filterItems.length.toLocaleString("en-US", {}) }} รายการ
        </p>
        <p class="wv-b5 font-bold">
          ใช้งบรวม {{ convertMillion(summaryAmount) || 0 }} ล้านบาท
        </p>
        <p class="wv-b6 opacity-50">
          ({{ ((summaryAmount / totalAmount) * 100).toFixed(2) }} %
          ของงบทั้งหมด)
        </p>
      </div>
      <ModalDetails
        :handle-modal="() => handleModal()"
        :is-open="isOpen"
        :is-selected-year="(year) => isSelectedYear(year)"
        page="strategy"
        class="flex flex-col items-end space-y-2"
      >
        <div
          class="bg-black flex text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
          @click="handleModal"
        >
          <img src="~/assets/icons/seemore.svg" class="mr-2" />
          ดูรายการใช้งบ
        </div>
        <a
          v-if="chartSelected == 'ไม่พบข้อมูล'"
          class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
          :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=1915709666&&tq=where%20D%20%3D%20'N/A'%20or%20E%20%3D%20'N/A'`"
          target="_blank"
        >
          <img
            src="~/assets/images/download.svg"
            class="w-3 h-3 mr-2"
          />ดาวน์โหลดข้อมูล</a
        >
        <a
          v-else-if="chartSelected"
          class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
          :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=1915709666&&tq=where%20D%20%3D%20'${chartSelected}'%20or%20E%20%3D%20'${chartSelected}'`"
          target="_blank"
        >
          <img
            src="~/assets/images/download.svg"
            class="w-3 h-3 mr-2"
          />ดาวน์โหลดข้อมูล</a
        >
        <a
          v-else
          class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
          :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=1915709666&&tq=select%20*`"
          target="_blank"
        >
          <img
            src="~/assets/images/download.svg"
            class="w-3 h-3 mr-2"
          />ดาวน์โหลดข้อมูล</a
        >
      </ModalDetails>
    </div>
    <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
    <div
      class="flex pl-[35px] md:pl-[50px] lg:pl-[25px] flex-1 mx-auto w-full md:h-[500px] md:min-h-[500px] md:max-h-[500px] min-h-[250px] h-[250px] relative mt-5"
    >
      <div class="absolute inset-0 flex flex-col-reverse mt-[0.5px]">
        <div
          v-for="item in formatYAxis()"
          :key="item.id"
          class="flex-1 relative border-t-[0.5px] border-t-wv-gray-3"
        >
          <div
            class="translate-y-[-50%] absolute top-0 bg-white text-wv-gray-1 wv-b7"
          >
            {{ item.toLocaleString("en-US", {}) }}
          </div>
        </div>
      </div>
      <div
        v-for="(d, index) in chartData.years"
        :key="index"
        class="flex flex-col-reverse flex-1 pl-[5px] lg:pl-[25px] relative w-full"
      >
        <div
          class="wv-b5 font-bold text-center mt-2 absolute pl-[5px] lg:pl-[25px] bottom-[-5px] translate-y-[100%] left-[50%] translate-x-[-51%]"
        >
          ’{{ d.year }}
        </div>
        <div
          v-for="(strategy, i) in navData()"
          :id="strategy.name"
          :key="i"
          class="relative"
          :style="`height: ${heightChart(
            d.strategies.filter((d) => d.name === strategy.name)[0]?.amount,
            d.amount
          )}`"
          @mouseenter="(e) => mouseEnter(e)"
          @mouseleave="mouseLeave"
        >
          <div
            :id="'strategy-' + strategy.name"
            class="borderSubStrategy cursor-pointer wrapper-strategy z-10 absolute inset-0 h-full"
            :class="bgColorSet(strategy.name)"
            @click="() => handleStrategy(strategy.name)"
          ></div>
          <div
            :id="'strategy-amount-' + strategy.name"
            class="absolute inset-0 h-full wv-b7 font-bold wrapper-amount-strategy pointer-events-none"
          >
            <p
              v-if="chartSelected === strategy.name"
              class="absolute top-0 translate-y-[-100%] left-[50%] translate-x-[-50%] z-40"
            >
              {{
                isMillion
                  ? convertMillion(
                      d.strategies.filter((d) => d.name === strategy.name)[0]
                        ?.amount || 0
                    )
                  : `${(
                      (d.strategies.filter((d) => d.name === strategy.name)[0]
                        ?.amount /
                        d.amount) *
                        100 || 0
                    ).toFixed()}%`
              }}
            </p>
          </div>

          <div
            v-for="subStrategy in strategy.substrategies"
            v-if="pickSubStrategy(d.strategies, strategy.name, subStrategy)"
            :key="subStrategy"
            :id="getSubStrategyId(d.strategies, strategy.name, subStrategy)"
            :style="`height: ${
              (pickSubStrategy(d.strategies, strategy.name, subStrategy)
                ?.amount /
                d.strategies.filter((d) => d.name === strategy.name)[0]
                  ?.amount) *
              100
            }%`"
            :class="bgColorSet(strategy.name)"
            class="borderSubStrategy cursor-pointer w-full wrapper-sub-strategy relative h-full"
            @click="
              () =>
                handleSubStrategy(
                  pickSubStrategy(d.strategies, strategy.name, subStrategy)
                    ?.name
                )
            "
            @mouseenter="(e) => mouseEnter(e, 'isSubStrategy')"
            @mouseleave="(e) => mouseLeave(e, 'isSubStrategy')"
          >
            <div
              v-if="
                chartSelected ===
                  pickSubStrategy(d.strategies, strategy.name, subStrategy)
                    ?.name &&
                pickSubStrategy(d.strategies, strategy.name, subStrategy) &&
                strategy.name !== 'ไม่พบข้อมูล'
              "
              class="absolute top-0 t wv-b7 translate-y-[-100%] left-[50%] translate-x-[-50%] font-bold pointer-events-none"
            >
              {{
                isMillion
                  ? convertMillion(
                      pickSubStrategy(d.strategies, strategy.name, subStrategy)
                        ?.amount
                    )
                  : `${
                      (
                        (pickSubStrategy(
                          d.strategies,
                          strategy.name,
                          subStrategy
                        )?.amount /
                          d.amount) *
                        100
                      ).toFixed(0) + "%"
                    }`
              }}
            </div>
          </div>
        </div>

        <div
          v-if="!chartSelected && isMillion"
          class="relative wv-b7 font-bold text-center"
        >
          <div
            class="absolute translate-y-[-100%] left-[50%] translate-x-[-50%]"
          >
            {{ convertMillion(d.amount) }}
          </div>
        </div>
      </div>
      <div
        class="flex flex-col-reverse flex-1 pl-[5px] lg:pl-[25px] relative w-full"
      >
        <div
          class="wv-b5 font-bold opacity-50 text-center mt-2 absolute pl-[5px] lg:pl-[25px] bottom-[-5px] translate-y-[100%] left-[50%] translate-x-[-51%]"
        >
          ’70
        </div>
        <div
          class="border-[2px] flex-1 border-black opacity-75 rounded border-dashed w-full h-full"
        ></div>
      </div>
    </div>
  </div>
  <div
    v-else
    id="wrapper-horizontal-barchart "
    class="lg:min-w-[685px] min-h-[550px] h-fit"
  />
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import {
  bgColorSet,
  convertMillion,
  handleAddSelected,
  handleRemoveSelected,
} from "../utils";
import ModalDetails from "./ModalDetails.vue";
import ToggleUnit from "./ToggleUnit.vue";
import { navData } from "~/components/expore/navData";

export default {
  components: { ToggleUnit, ModalDetails },
  data() {
    return {
      prevSelected: "",
      isOpen: false,
      isMillion: true,
      summaryAmount: 0,
      totalAmount: 0,
      filterItems: [],
    };
  },
  computed: {
    ...mapState(["strategyChoice", "chartSelected", "chartData"]),
    maxBudgets() {
      return Math.max(...this.chartData.years.map((o) => o.amount)).toString();
    },
    roundBudget() {
      const startNumber = Number(this.maxBudgets.slice(0, 1)) + 1;
      const digits = this.maxBudgets.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
  },
  methods: {
    ...mapActions({
      updateChartSelected: "updateChartSelected",
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectYearStrategy: "updateSelectYearStrategy",
      updateStrategy: "updateStrategy",
    }),
    bgColorSet,
    convertMillion,
    navData,
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    sumByStrategy(subStrategy) {
      return divideMillion(_.sumBy(subStrategy, (sub) => sub.amount));
    },
    divideMillion(num) {
      return num / 1000000;
    },
    heightChart(amount, strategyAmount) {
      const divide = this.isMillion ? this.roundBudget : strategyAmount;
      const percent = Number(amount / divide) * 100;
      return percent + "%";
    },
    mouseEnter(e, isSubStrategy) {
      const elemId = e.target.id;
      isSubStrategy
        ? handleAddSelected("#" + elemId, "hoverActive")
        : handleAddSelected("#strategy-" + elemId, "hoverActive");
    },
    mouseLeave(e, isSubStrategy) {
      const elemId = e.target.id;
      isSubStrategy
        ? handleRemoveSelected("#" + elemId, "hoverActive")
        : handleRemoveSelected("#strategy-" + elemId, "hoverActive");
    },
    handleStrategy(strategy) {
      this.currentSelected = strategy;
      handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
      handleRemoveSelected(".wrapper-sub-strategy", "grayScale");
      handleAddSelected(".wrapper-strategy", "grayScale");
      handleRemoveSelected(".wrapper-strategy", "hidden");
      handleAddSelected("#strategy-" + strategy, "hidden");
      this.filterItems = this.$store.getters["data/getBudgetItems"]({
        strategy,
      }).items;
      this.summaryAmount = _.sumBy(this.filterItems, "amount");
      this.updateChartSelected(strategy);
      this.fetchByStrategy(strategy);
      strategy === "ไม่พบข้อมูล"
        ? this.updateSubTitleModal(`“${strategy}”`)
        : this.updateSubTitleModal(
            `ตามแผนงานพัฒนา 9 ด้าน(ดี) ด้าน “<b>${strategy}</b>”`
          );
      this.prevSelected = this.currentSelected;
    },
    createValidSelector(text) {
      return text.toLowerCase().replace(/[\s()]/g, "-"); // Replace spaces and parentheses with dash
    },
    getSubStrategyId(strategies, strategyName, subStrategy) {
      const strategyData = this.pickSubStrategy(
        strategies,
        strategyName,
        subStrategy
      );
      if (!strategyData?.name) return "";
      return `subStrategy-${this.createValidSelector(strategyData.name)}`;
    },
    handleSubStrategy(strategy) {
      this.currentSelected = strategy;
      const validSelector = this.createValidSelector(strategy);
      handleAddSelected(".wrapper-sub-strategy", "grayScale");
      handleRemoveSelected(`[id='subStrategy-${validSelector}']`, "grayScale");

      if (this.prevSelected === this.currentSelected) {
        this.updateChartSelected();
        handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
        this.updateSubTitleModal("ตามแผนงานพัฒนา 9 ด้าน(ดี)");
        this.currentSelected = "";
        this.summaryAmount = this.chartData.amount;
        this.filterItems = this.$store.getters["data/getBudgetItems"]().items;
      } else {
        this.filterItems = this.$store.getters["data/getBudgetItems"]({
          substrategy: strategy,
        }).items;
        this.summaryAmount = _.sumBy(this.filterItems, "amount");
        handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
        handleAddSelected(`[id='subStrategy-${validSelector}']`, "z-[20]");
        this.fetchBySubStrategy(strategy);
        strategy === "ไม่พบข้อมูล"
          ? this.updateSubTitleModal(`"${strategy}"`)
          : this.updateSubTitleModal(
              `ตามแผนงานพัฒนา 9 ด้าน(ดี) ด้าน “<b>${strategy}</b>”`
            );
        this.updateChartSelected(strategy);
      }
      this.prevSelected = this.currentSelected;
    },

    formatYAxis() {
      const result = [...Array(5)].map(
        (_, index) => ((parseInt(this.roundBudget) / 5) * (index + 1)) / 1000000
      );
      const percent = [...Array(5)].map((_, index) => (100 / 5) * (index + 1));
      return this.isMillion ? [...result] : [...percent];
    },
    fetchByStrategy(strategy) {
      const response = this.$store.getters["data/getBudgetItems"]({ strategy });
      this.updateIsModalDetails(response);
    },
    fetchBySubStrategy(substrategy) {
      const response = this.$store.getters["data/getBudgetItems"]({
        substrategy,
      });
      this.updateIsModalDetails(response);
    },
    isSelectedYear(year) {
      if (year?.value) {
        this.updateSelectYearStrategy(year);
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            (str) => str.budgetYear === year.value
          ),
          total: this.isModalDetails?.items?.filter(
            (str) => str.budgetYear === year.value
          ).length,
        };
      } else {
        this.updateSelectYearStrategy({ label: "ทุกปี", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
    pickSubStrategy(data, stra, sub) {
      return data
        .filter((d) => d.name === stra)[0]
        ?.substrategies.filter((s) => s.name === sub)[0];
    },
  },
  watch: {
    strategyChoice(newValue) {
      const filterStrategy = navData().filter((d) => d.name === newValue);
      const filterSubStrategy = navData().find((d) =>
        d.substrategies.filter((s) => s === newValue)
      );
      if (filterStrategy[0]) {
        this.handleStrategy(newValue);
      } else if (!filterStrategy[0] && filterSubStrategy && newValue) {
        this.handleSubStrategy(newValue);
      } else {
        const getData = this.$store.getters["data/getBudgetItems"]();
        this.updateIsModalDetails(getData);
        this.updateSubTitleModal(`ตามแผนงานพัฒนา 9 ด้าน(ดี)`);
        this.filterItems = getData.items;
        this.updateChartSelected();
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
        this.summaryAmount = this.chartData.amount;
      }
    },
  },
  mounted() {
    this.summaryAmount = this.chartData.amount;
    this.totalAmount = this.chartData.amount;
    this.filterItems = this.$store.getters["data/getBudgetItems"]().items;
  },
};
</script>

<style lang="scss" scoped>
.borderSubStrategy {
  box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  -webkit-box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  border-radius: 3px;
  box-sizing: border-box;
}
.hoverActive {
  @apply border-[2px] border-black;
}
.grayScale {
  @apply bg-wv-gray-4;
}
#wrapper-horizontal-barchart {
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @apply px-[20px] pt-[20px] py-[40px];
}
</style>
