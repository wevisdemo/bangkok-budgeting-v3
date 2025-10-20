<template>
  <div
    id="byYears"
    class="mt-7 md:w-[80%] mx-auto lg:w-full flex lg:space-x-[35px] min-h-screen flex-col lg:flex-row justify-between relative"
  >
    <div
      class="fixed w-full bottom-0"
      :class="resultKeySearch.length > 8 ? '' : 'hidden'"
    >
      <div
        id="scrollTopTop"
        @click="scrollToTop"
        class="absolute flex items-center cursor-pointer bottom-0 left-[50%] translate-x-[-50%] bg-white text-wv-gray-1 py-[8px] px-[12px] z-30 rounded-[5px]"
      >
        <img src="~/assets/images/scrollTop.svg" class="mr-2" />
        กลับไปด้านบน
      </div>
    </div>

    <div class="lg:max-w-[400px] text-center lg:text-left">
      <p class="wv-b6">
        <b>งบแผนงานพัฒนา 9 ด้าน(ดี) </b>
      </p>
      <div class="mt-2 flex-wrap grid-cols-1 px-3 text-start hidden md:grid">
        <div
          v-for="(item, key) in navData()"
          :key="key"
          class="flex items-center space-x-2 py-[1px]"
        >
          <div
            class="min-w-[10px] min-h-[10px] rounded-[2px]"
            :class="bgColorSet(item.name)"
          />
          <div class="flex wv-b6 text-wv-gray-1">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-[685px] mt-3 flex-1">
      <div class="shadow-2xl p-[20px] md:p-[30px] flex flex-col">
        <div class="relative">
          <img
            src="~/assets/images/searchIcon.svg"
            class="absolute top-[50%] translate-y-[-100%] left-0 ml-2"
          />
          <input
            v-model="filterOrganize"
            type="text"
            class="border rounded-[5px] p-3 border-black w-full wv-b5 mb-3 pl-8"
            placeholder="ค้นหาหน่วยงานที่สนใจ..."
          />
        </div>
        <div class="flex items-center">
          <p class="wv-b4 font-bold mr-2 wv-kondolar" id="topic-pointer">
            หน่วยงานที่ได้รับงบในปี
          </p>
          <el-select
            v-model="selectFilterYear"
            placeholder="Select"
            class="ml-2 w-[150px] wv-b4 font-bold"
          >
            <el-option
              v-for="(item, index) in yearList"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="flex justify-between items-center mb-6">
          <div>
            <p class="wv-b3 font-bold">
              พบ
              {{ resultKeySearch.length.toLocaleString("en-US", {}) }}
              รายการ
            </p>
            <p class="wv-b5 font-bold">
              ใช้งบรวม {{ convertMillion(filterTotalAmount) || 0 }} ล้านบาท
            </p>
            <p class="wv-b6 opacity-50">
              ({{ ((filterTotalAmount / totalAmount) * 100).toFixed(2) }}%
              ของงบทั้งหมด)
            </p>
          </div>
          <a
            v-if="filterOrganize"
            class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
            :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=1915709666&&tq=where%20F%20like%20'%25${filterOrganize}%25'`"
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
        </div>
        <div class="mt-5 flex-wrap grid grid-cols-3 px-3 text-start md:hidden">
          <div
            v-for="(item, key) in navData()"
            :key="key"
            class="flex items-center space-x-2 py-[5px]"
          >
            <div
              class="min-w-[10px] min-h-[10px] rounded-[2px]"
              :class="bgColorSet(item.name)"
            />
            <div class="flex wv-b6 text-wv-gray-1">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-5">
          <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
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
        </div>
        <div v-if="resultKeySearch.length === 0" class="text-center my-5">
          ไม่พบข้อมูล
        </div>
        <div
          v-for="(item, key) in resultKeySearch.slice(0, this.sliceDivide)"
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
              <div class="wv-b4 font-bold max-w-[250px]">
                {{ item.nameOrganization }}
              </div>
              <div class="flex items-center">
                <div v-if="isMillion">
                  <span class="wv-b6 font-bold">
                    <!-- {{
                      (item.amount / 1000000).toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                    }} -->
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
                :class="bgColorSet(strategy)"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="flex mt-3 cursor-pointer items-center justify-center wv-b5 opacity-50"
          @click="seeMore"
          v-if="
            resultKeySearch.length -
              resultKeySearch.slice(0, this.sliceDivide).length >
            0
          "
        >
          <p class="mr-1">
            ดูอีก
            {{
              resultKeySearch.length -
              resultKeySearch.slice(0, this.sliceDivide).length
            }}
            รายการที่เหลือ
          </p>
          <p class="wv-b3">+</p>
        </div>
        <div
          v-if="resultKeySearch.length > 8"
          @click="scrollToTop"
          class="flex items-center w-fit my-5 cursor-pointer bottom-0 bg-white text-wv-gray-1 py-[8px] px-[12px] rounded-[5px]"
          id="scrollTopBottom"
        >
          <img src="~/assets/images/scrollTop.svg" class="mr-2" />
          กลับไปด้านบน
        </div>
      </div>
      <ShareLabel class="mt-5" />
    </div>
    <ModalDetails
      :handle-modal="() => handleModal()"
      :is-open="isOpen"
      page="organize"
      v-if="isOpen"
    />
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { filterByOrganize } from "../budget/charts/filterBy";
import { navData } from "~/components/expore/navData";
import {
  bgColorSet,
  convertMillion,
  orderByStrategy,
  strategyList,
} from "~/components/budget/utils";
import { getChartDataGroupByOrganizations } from "~/data/get-chart-data";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import ToggleUnit from "~/components/budget/charts/ToggleUnit.vue";
import DropDownYearList from "~/components/budget/charts/DropDownYearList.vue";
import ShareLabel from "../budget/ShareLabel.vue";

export default {
  components: { ModalDetails, ToggleUnit, DropDownYearList, ShareLabel },
  data() {
    return {
      filterOrganize: "",
      resultKeySearch: [],
      barChartData: [],
      isOpen: false,
      maxValue: 0,
      isMillion: true,
      isOpenYearSelected: false,
      filterYears: [],
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      isFilterModal: false,
      selectFilterYear: "ทุกปี",
      yearList: [
        { label: "ทุกปี", value: "" },
        { label: "2568", value: 68 },
        { label: "2569", value: 69 },
      ],
      filterTotalAmount: 0,
      totalAmount: 0,
      sliceDivide: 10,
    };
  },
  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectYearOrganize: "updateSelectYearOrganize",
    }),
    navData,
    bgColorSet,
    orderByStrategy,
    strategyList,
    filterByOrganize,
    getChartDataGroupByOrganizations,
    convertMillion,
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    seeMore() {
      this.sliceDivide = this.sliceDivide + 10;
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
      this.resultKeySearch = this.barChartData;
      this.filterOrganize = "";
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
    handleFilter() {
      this.isFilterModal = !this.isFilterModal;
      this.isOpenYearSelected = false;
    },
    selectFilter(label) {
      this.selectedFilter = label;
      const resultFilter = filterByOrganize(label, this.barChartData);
      this.barChartData = resultFilter;
      this.resultKeySearch = resultFilter;
    },
    selectOrganize(nameOrganization) {
      this.fetchByOrganize(nameOrganization);
      this.updateSubTitleModal(`ที่ของบโดย “<b>${nameOrganization}</b>”`);
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
    isSelectedYear(year) {
      if (year) {
        this.updateSelectYearOrganize(year);
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            (str) => str.budgetYear === year
          ),
          total: this.isModalDetails?.items?.filter(
            (str) => str.budgetYear === year
          ).length,
        };
      } else {
        this.updateSelectYearOrganize({ label: "ทุกปี", value: "" });
        this.filterYears = this.isModalDetails;
      }
      this.fetchByOrganizeYear(year);
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
    if (this.$route.query.key)
      this.resultKeySearch = this.barChartData.filter((s) =>
        s.nameOrganization.toString().includes(this.$route.query.key)
      );
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
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
    selectFilterYear(newValue) {
      this.isSelectedYear(newValue);
      this.sliceDivide = 10;
    },
    selectedFilter(newValue) {
      this.selectFilter(newValue);
    },
    filterOrganize: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.resultKeySearch = this.barChartData.filter((s) => {
          return s.nameOrganization.toString().includes(newValue);
        });
        this.filterTotalAmount = _.sumBy(this.resultKeySearch, "amount");
        this.totalAmount = _.sumBy(this.barChartData, "amount");
        this.sliceDivide = 10;
      },
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
</style>
