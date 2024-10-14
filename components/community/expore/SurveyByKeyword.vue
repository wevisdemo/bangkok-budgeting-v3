<template>
  <div class="relative">
    <p class="wv-b7 text-wv-gray-1 text-center my-[30px]">
      <span class="font-bold">หมายเหตุ</span> :
      คียเวิร์ดเหล่านี้เป็นการค้นหาและตัดคำเบื้องต้นโดยคอมพิวเตอร์
      โดยรวบรวมจากทุกข้อมูลที่มีคำนั้นปรากฎ โปรดตรวจสอบบริบทของคำก่อนการใช้งาน
    </p>
    <div
      v-if="$mq === 'md'"
      @click="handdleModalMobile"
      class="py-[10px] my-[10px] text-left flex justify-between wv-b5 border-black border w-[300px] mx-auto relative rounded-[5px] pl-8"
    >
      <img
        src="~/assets/images/searchIcon.svg"
        class="absolute top-[50%] left-0 translate-y-[-50%] ml-2"
      />
      {{ selectedKey.Word || "พิมพ์คีย์เวิร์ด" }}
    </div>
    <FilterByDistrict
      :filterData="filterData"
      :districtData="districtData"
      :handleFilterData="handleFilterData"
    />
    <FilterByComnunity
      :filterData="filterData"
      :commuData="originData"
      :handleFilterData="handleFilterData"
    />
    <div class="flex flex-col lg:flex-row">
      <div
        v-if="($mq === 'md' && mobileKeyword) || $mq === 'lg'"
        class="lg:w-[400px] lg:h-fit border-2 border-black rounded-[5px] p-[22px] fixed h-screen lg:relative inset-0 bg-white z-[20]"
      >
        <div
          class="absolute top-0 right-0 m-5"
          @click="handdleModalMobile"
          v-if="$mq === 'md'"
        >
          <div
            class="wv-b5 border-black rounded-[5px] border py-[5px] px-[10px]"
          >
            ตกลง
          </div>
        </div>

        <div
          class="md:px-16 lg:px-0 lg:py-0 md:py-16 mx-auto mt-[40px] md:mt-0"
        >
          <div>
            <div class="relative">
              <img
                src="~/assets/images/searchIcon.svg"
                class="absolute top-0 left-0 ml-2"
              />
              <input
                v-model="data"
                type="text"
                class="border-b border-b-black w-full wv-b5 mb-3 pl-8"
                placeholder="พิมพ์คีย์เวิร์ด"
              />
            </div>
            <div class="flex flex-col justify-between wv-b7 mb-[10px]">
              <div class="flex items-center">
                เรียงตาม
                <el-select
                  v-model="selectSort"
                  placeholder="Select"
                  class="sortInput"
                  size="mini"
                >
                  <el-option
                    v-for="item in sortList"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="flex mt-3">
                <p class="w-[100px]"></p>
                <p class="opacity-50 flex-1 text-center ml-2">จำนวนที่พบ</p>
                <p class="opacity-50 flex-1 text-end">งบ (ล้านบาท)</p>
              </div>
            </div>
          </div>
          <div class="h-[70vh] md:h-[80vh] lg:h-full overflow-auto">
            <div
              v-for="(item, index) in filterKeyword.slice(0, 50)"
              :key="index"
              class="flex justify-between py-[2.5px] text-right px-[10px] rounded-[5px] cursor-pointer"
              :class="
                selectedKey.Word === item.Word
                  ? 'text-white bg-black '
                  : 'hover:bg-wv-gray-4'
              "
              @click="() => selectKey(item)"
            >
              <div class="flex items-center w-[100px]">
                <div
                  class="w-[10px] h-[10px] rounded-full border border-wv-gray-2 mr-[5px]"
                >
                  <img
                    v-if="selectedKey.Word === item.Word"
                    src="~/assets/icons/selected.svg"
                    alt="selected"
                    class="w-full"
                  />
                </div>
                <p class="wv-b6 font-bold text-left">{{ item.Word }}</p>
              </div>
              <p class="wv-b7 opacity-50 flex-1 text-center">
                {{ item.total }}
              </p>
              <p class="wv-b7 opacity-50 flex-1">
                {{ convertMillion(item.amount) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:ml-5 flex-1">
        <div
          class="px-5 pt-5 pb-10 borderKey h-fit max-w-[685px] mx-auto"
          v-if="chartData.years && selectedKey.Word"
        >
          <div class="flex justify-between">
            <div>
              <p class="wv-h8 font-bold wv-kondolar">{{ selectedKey.Word }}</p>
              <p class="wv-b5">
                พบใน
                <span class="font-bold">{{
                  totalProject?.toLocaleString("en-US", {})
                }}</span>
                รายการ <br class="lg:hidden" />ใช้งบรวม
                <span class="font-bold">{{
                  convertMillion(totalFilterAmout)
                }}</span>
                ล้านบาท <br class="md:hidden" />({{
                  ((totalFilterAmout / maxOrigin) * 100).toFixed()
                }}% ของงบทั้งหมด)
              </p>
            </div>
            <ModalDetails
              :handle-modal="() => handleModal()"
              :is-open="isOpen"
              :commuData="commuData"
              page="keyword"
            >
              <div
                class="bg-black flex text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
                @click="handleModal"
              >
                <img src="~/assets/icons/seemore.svg" class="mr-2" />
                ดูรายการใช้งบ
              </div>
            </ModalDetails>
          </div>
          <ToggleUnit :toggle="() => toggle()" :isMillion="isMillion" />
          <div class="h-[500px] mt-10 relative pl-[35px]">
            <div class="absolute inset-0 flex flex-col-reverse mt-[0.5px]">
              <div
                v-for="item in formatYAxis()"
                :key="item.id"
                class="flex-1 relative border-t-[0.5px] border-t-wv-gray-3"
              >
                <div
                  class="translate-y-[-50%] absolute top-0 bg-white text-wv-gray-1 wv-b7"
                >
                  {{ item.toFixed(0).toLocaleString("en-US", {}) }}
                </div>
              </div>
            </div>
            <div class="flex space-x-[20px] h-full items-end relative">
              <div
                v-for="(item, key) in itemsChart.years"
                :key="key"
                v-if="itemsChart"
                class="flex-1 md:ml-[25px] flex flex-col-reverse items-center relative z-10 h-full"
              >
                <div
                  class="absolute bottom-0 wv-b5 translate-y-[120%] left-[50%] translate-x-[-50%] z-20"
                >
                  `{{ key }}
                </div>

                <div
                  class="relative z-20 w-full bg-wv-yellow-70"
                  :style="{
                    height: `${(item.amount / maxOrigin) * 100}%`,
                  }"
                ></div>

                <div class="flex absolute bottom-0 w-full h-full items-end">
                  <div
                    :key="key"
                    class="bg-wv-gray-20 flex-1"
                    :style="{
                      height: isMillion
                        ? `${
                            (calOriginFilter()[key].amount / maxOrigin) * 100
                          }%`
                        : `${100}%`,
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShareLabel />
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { convertMillion, orderByStrategy } from "../../budget/utils";
import ToggleUnit from "../../budget/charts/ToggleUnit.vue";
import { filterByKey } from "~/components/budget/charts/filterBy";
import ShareLabel from "../../budget/ShareLabel.vue";
import { keywords } from "~/data/community/keywords";
import ModalDetails from "./ModalDetails.vue";
import FilterByDistrict from "../filter/FilterByDistrict.vue";
import FilterByComnunity from "../filter/FilterByComnunity.vue";

export default {
  components: {
    ToggleUnit,
    ModalDetails,
    ShareLabel,
    FilterByComnunity,
    FilterByDistrict,
  },
  computed: {
    ...mapState(["chartData"]),
  },
  data() {
    return {
      filterData: {
        year: "",
        district: "",
        community: "",
      },
      districtData: [],
      commuData: [],
      data: "",
      originData: [],
      originFilterWord: [],
      filterKeyword: [],
      selectedKey: {},
      itemsChart: [],
      isMillion: true,
      selectFilter: "",
      selectSort: "งบมากไปน้อย",
      totalProject: {},
      totalFilterAmout: 0,
      maxOrigin: 0,
      isOpen: false,
      sortList: ["งบมากไปน้อย", "จำนวนที่พบ", "ตัวอักษร"],
      mobileKeyword: false,
    };
  },
  methods: {
    ...mapActions({
      updateSelectKeywordStrategy: "updateSelectKeywordStrategy",
    }),
    convertMillion,
    keywords,
    filterByKey,
    orderByStrategy,
    handdleModalMobile() {
      this.mobileKeyword = !this.mobileKeyword;
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    formatYAxis() {
      const result = [...Array(5)].map(
        (_, index) => ((parseInt(this.maxOrigin) / 5) * (index + 1)) / 1000000
      );
      const percent = [...Array(5)].map((_, index) => (100 / 5) * (index + 1));
      return this.isMillion ? [...result] : [...percent];
    },
    maxBudgets() {
      return this.roundBudget(
        Math.max(...this.chartData.years.map((o) => o.amount)).toString()
      );
    },
    roundBudget(items) {
      const startNumber = Number(items?.slice(0, 1)) + 1;
      const digits = items?.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    maxSelectedFilter() {
      const formatValue = _.chain(this.itemsChart.years)
        .mapValues((d) => d.organize[this.selectFilter])
        .mapValues((s) => ({ amount: s && _.sum(Object.values(s)) }))
        .value();
      return this.roundBudget(
        _.maxBy(Object.values(formatValue), "amount")?.amount.toString()
      );
    },

    selectKey(item) {
      this.selectedKey = item;
      this.initFilterByKey(item);
      this.filterData = {
        ...this.filterData,
        district: "",
        community: "",
      };
    },
    calOriginFilter() {
      return _.chain(this.handleFilterKeyword(this.filterData.key))
        .groupBy("budget_year")
        .mapValues((d) => ({
          amount: _.sumBy(
            this.handleFilterKeyword(this.filterData.key).filter(
              (a) => a.budget_year === d[0].budget_year
            ),
            "amount"
          ),
        }))
        .value();
    },
    calByFilter() {
      return _.chain(this.originData)
        .groupBy("budget_year")
        .mapValues((d) => ({
          amount: _.sumBy(
            this.originData.filter((a) => a.budget_year === d[0].budget_year),
            "amount"
          ),
        }))
        .value();
    },
    calHeight(item, max) {
      return `${(item / max) * 100}%`;
    },

    handleFilterKeyword(keyword) {
      return this.originData.filter((c) => c.project_name.includes(keyword));
    },
    formatItem(item) {
      return {
        years: _.chain(item)
          .groupBy("budget_year")
          .mapValues((d) => ({
            amount: _.sumBy(
              item.filter((a) => a.budget_year === d[0].budget_year),
              "amount"
            ),
          }))
          .value(),
      };
    },

    initFilterByKey(item) {
      this.commuData = this.handleFilterKeyword(item.Word);
      this.filterData = { key: item.Word };
      this.itemsChart = this.formatItem(this.commuData);
      this.totalProject = this.commuData.length;
      this.totalFilterAmout = _.sumBy(this.commuData, "amount");
      this.maxOrigin = _.sumBy(this.originData, "amount");
      this.districtData = _.uniqBy(
        Object.values(this.commuData)?.map((d) => d.district)
      );
    },
    handleFilterData({ district, community }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
      };
      this.commuData = this.handleFilterKeyword(this.filterData.key);
      if (district && community) {
        this.commuData = this.originData.filter(
          (o) => o.community === community && o.district === district
        );
      } else if (district) {
        this.originData = this.handleFilterKeyword(this.filterData.key);
        this.commuData = this.originData.filter((c) => c.district == district);
      } else if (community) {
        this.commuData = this.originData.filter(
          (o) => o.community === community
        );
      }
      if (district) {
      }
      this.totalProject = this.commuData.length;
      this.totalFilterAmout = _.sumBy(this.commuData, "amount");
      this.itemsChart = this.formatItem(this.commuData);
    },
    fetchOriginFilterKey() {
      return keywords().map((d) => {
        return {
          total: d.Count,
          Word: d.Word,
          amount: _.sumBy(this.handleFilterKeyword(d.Word), "amount"),
        };
      });
    },
  },
  watch: {
    data: {
      immediate: true,
      deep: false,
      handler(newValue) {
        this.filterKeyword = this.fetchOriginFilterKey()?.filter((d) =>
          d.Word.toString().includes(newValue)
        );
      },
    },
    selectSort(label) {
      this.filterKeyword = this.filterByKey(label, this.filterKeyword);
    },
  },
  mounted() {
    this.originData = this.$store.getters["data/getCommunity"]();
    this.commuData = this.originData;
    this.selectKey(keywords()[0]);
    this.filterKeyword = this.fetchOriginFilterKey();
    this.yearGroup = _.groupBy(this.commuData, "budget_year");
  },
};
</script>

<style lang="scss">
.borderKey {
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.el-select-dropdown__item.selected {
  @apply text-black;
}
.sortInput > .el-input > .el-input__inner {
  margin-left: 8px;
  width: 120px;
  // height: 22px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid #737373;
  border-radius: 0%;
  font-weight: bold;
  padding: 0%;
}
</style>
