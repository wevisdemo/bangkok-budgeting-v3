<template>
  <div
    id="byYears"
    class="mt-7 md:w-[80%] mx-auto lg:w-full flex lg:space-x-[35px] min-h-screen flex-col lg:flex-row justify-center relative"
  >
    <div class="fixed w-full bottom-0">
      <div
        id="scrollTopTop"
        @click="scrollToTop"
        class="absolute flex items-center cursor-pointer bottom-0 left-[50%] translate-x-[-50%] bg-white text-wv-gray-1 py-[8px] px-[12px] z-30 rounded-[5px]"
      >
        <img src="~/assets/images/scrollTop.svg" class="mr-2" />
        กลับไปด้านบน
      </div>
    </div>
    <ModalDetails
      :handle-modal="() => handleModal()"
      :is-open="isOpen"
      page="organize"
    />
    <!-- ------------ -->
    <div id="filter" class="flex space-y-1 flex-col">
      <FilterByYear :yearData="yearData" :filterData="filterData" />
      <FilterByDistrict :districtData="districtData" :filterData="filterData" />
      <FilterByComnunity :comnuData="comnuData" :filterData="filterData" />
      <!-- ------------- -->
    </div>
    <div class="lg:max-w-[685px] mt-3 flex-1 flex flex-col justify-between">
      <div class="flex justify-between mt-5">
        <div
          class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer mb-4"
        >
          <p class="">เรียงตาม</p>
          <el-select
            v-model="selectedFilter"
            placeholder="Select"
            class="sortInput"
            size="mini"
          >
            <el-option
              v-for="(item, key) in filterList"
              :key="key"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </div>
        <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
      </div>

      <div
        v-for="(item, key) in barChartData"
        :key="key"
        :id="`card-${key + 1}`"
        class="borderOrganize my-[5px] flex hover:border-black hover:border-[2px] border-[2px] border-transparent cursor-pointer"
        @click="() => selectOrganize(item.nameOrganization)"
      >
        <div class="wv-h8 text-gray-300">
          {{ key + 1 }}
        </div>
        <div class="ml-5 flex flex-col flex-1">
          <div class="flex justify-between">
            <div class="wv-b4 font-bold">
              {{ item.nameOrganization }}
            </div>
            <div class="flex items-center">
              <div v-if="isMillion">
                <span class="wv-b6 font-bold">
                  {{
                    (item.amount / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </span>
                <span class="wv-b7">ล้านบาท</span>
              </div>
              <div v-else class="wv-b6 font-bold">
                {{ ((item.amount / chartData.amount) * 100).toFixed(2) }} %
              </div>
              <div class="ml-1">
                <img src="~/assets/images/list-button.svg" />
              </div>
            </div>
          </div>

          <div class="h-[10px] w-full bg-wv-gray-4 flex">
            <div
              v-for="strategy in strategyList()"
              :key="strategy"
              class="h-[10px]"
              :style="{ width: drawChart(item, strategy) }"
            ></div>
          </div>
        </div>
      </div>
      <div
        @click="scrollToTop"
        class="flex items-center my-5 cursor-pointer bottom-0 bg-white text-wv-gray-1 py-[8px] px-[12px] rounded-[5px]"
        id="scrollTopBottom"
      >
        <img src="~/assets/images/scrollTop.svg" class="mr-2" />
        กลับไปด้านบน
      </div>
      <ShareLabel />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { filterByOrganize } from "../../budget/charts/filterBy";
import { orderByStrategy, strategyList } from "~/components/budget/utils";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import ToggleUnit from "~/components/budget/charts/ToggleUnit.vue";
import DropDownYearList from "~/components/budget/charts/DropDownYearList.vue";
import ShareLabel from "../../budget/ShareLabel.vue";
import FilterByYear from "../filter/FilterByYear.vue";
import FilterByDistrict from "../filter/FilterByDistrict.vue";
import FilterByComnunity from "../filter/FilterByComnunity.vue";
import { districtCommunityList } from "../districtCommunityList";

export default {
  components: {
    ModalDetails,
    ToggleUnit,
    DropDownYearList,
    ShareLabel,
    FilterByYear,
    FilterByDistrict,
    FilterByComnunity,
  },
  data() {
    return {
      districtCommunityList,
      barChartData: [],
      isOpen: false,
      maxValue: 0,
      isMillion: true,
      isOpenYearSelected: false,
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      filterData: {
        year: "",
        district: "",
        community: "",
      },
      yearData: [],
      comnuData: [],
      districtData: [],
    };
  },
  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectYearOrganize: "updateSelectYearOrganize",
    }),
    orderByStrategy,
    strategyList,
    filterByOrganize,
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    fetchByOrganizeYear(year) {
      const response = this.$store.getters[
        "data/getChartDataGroupByOrganizations"
      ]({
        year,
      });
      this.barChartData = filterByOrganize(this.selectedFilter, response);
    },

    fetchByOrganize(nameOrganization) {
      const response = this.$store.getters["data/getBudgetItems"]({
        nameOrganization,
      });
      let filterYear;
      if (this.selectYearOrganize.value) {
        filterYear = response.items.filter(
          (i) => i.budgetYear === this.selectYearOrganize.value
        );
      } else {
        filterYear = response;
      }
      this.updateIsModalDetails({
        items: this.selectYearOrganize.value ? filterYear : response.items,
        total: this.selectYearOrganize.value
          ? filterYear.length
          : response.total,
      });
    },
    selectFilter(label) {
      this.selectedFilter = label;
      const resultFilter = filterByOrganize(label, this.barChartData);
      this.barChartData = resultFilter;
    },
    selectOrganize(nameOrganization) {
      this.fetchByOrganize(nameOrganization);
      this.updateSubTitleModal(`ที่ของบโดย "${nameOrganization}""`);
      this.handleModal();
    },
    drawChart(item, strategy) {
      const matchStrategy = item.strategies.filter(
        (i) => i.name === strategy
      )[0];
      const divide = this.isMillion
        ? this.maxValue.amount
        : this.chartData.amount;
      return matchStrategy && `${(matchStrategy.amount / divide) * 100}%`;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    handleSelectedYear() {
      this.isOpenYearSelected = !this.isOpenYearSelected;
    },

    handleScroll() {
      const elem = document.querySelector("#topic-pointer");
      if (elem) {
        const pointerTop = elem.getBoundingClientRect().top;
        const bottombutton = document.querySelector("#scrollTopBottom");
        if (
          bottombutton.getBoundingClientRect().top > window.innerHeight &&
          pointerTop < 0
        ) {
          document.querySelector("#scrollTopTop").style.opacity = "1";
          document.querySelector("#scrollTopBottom").style.opacity = "0";
        } else {
          document.querySelector("#scrollTopTop").style.opacity = "0";
          document.querySelector("#scrollTopBottom").style.opacity = "1";
        }
      }
    },
  },
  mounted() {
    document.querySelector("#scrollTopTop").style.opacity = "0";
    document.querySelector("#scrollTopBottom").style.opacity = "0";
    const commuData = this.$store.getters["data/getCommunity"]();
    const yearGroup = _.groupBy(commuData, "budget_year");
    this.yearData = Object.keys(yearGroup);

    this.comnuData = this.districtCommunityList.map((d) => d.community);
    this.districtData = _.uniqBy(
      this.districtCommunityList.map((d) => d.districts)
    );
  },

  computed: {
    ...mapState([
      "organizeData",
      "isModalDetails",
      "chartData",
      "selectYearOrganize",
    ]),
  },
  watch: {
    organizeData: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.barChartData = orderByStrategy(newValue, "amount", "desc");
        this.maxValue = this.barChartData[0];
      },
    },
    selectedFilter(newValue) {
      this.selectFilter(newValue);
    },
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.borderOrganize {
  background: #ffffff;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
.el-button:focus,
.el-button:hover {
  color: unset;
  border-color: unset;
  background-color: unset;
}
</style>
