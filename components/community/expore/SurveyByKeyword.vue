<template>
  <div class="relative">
    <div
      class="wv-b7 text-wv-gray-1 md:hidden justify-center flex ml-3 text-start my-[15px]"
    >
      <svg
        class="mr-2 mt-1"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.96392 10.4443H2.38485C1.62177 10.4443 1.04624 10.1785 0.764007 9.69607C0.481708 9.21319 0.536527 8.58817 0.918026 7.93587L4.70745 1.45601C5.08868 0.803623 5.60981 0.444336 6.17419 0.444336C6.73863 0.444336 7.25968 0.803535 7.64093 1.45601L11.4304 7.93587C11.8118 8.58817 11.8666 9.21319 11.5844 9.69607C11.3022 10.1785 10.7267 10.4443 9.96371 10.4443H9.96392ZM6.94777 8.1636C6.94777 7.77471 6.62839 7.4593 6.23441 7.4593C5.84052 7.4593 5.52106 7.77462 5.52106 8.1636C5.52106 8.55249 5.84043 8.8679 6.23441 8.8679C6.62839 8.8679 6.94777 8.55257 6.94777 8.1636ZM6.967 3.9255C6.967 3.52619 6.63904 3.20239 6.23459 3.20239C5.83015 3.20239 5.50219 3.52619 5.50219 3.9255L5.67518 6.49196H5.67752C5.70264 6.77538 5.94095 6.99862 6.2346 6.99862C6.50617 6.99862 6.73287 6.80841 6.78527 6.55561C6.78952 6.53517 6.78986 6.51327 6.79177 6.49206H6.79671L6.967 3.9255Z"
          fill="#6E6E6E"
        />
      </svg>
      <p>
        <span class="font-bold">หมายเหตุ</span> :
        คียเวิร์ดเหล่านี้เป็นการค้นหาและตัดคำเบื้องต้น<br />
        โดยคอมพิวเตอร์ โดยรวบรวมจากทุกข้อมูลที่มีคำนั้นปรากฎ<br />
        โปรดตรวจสอบบริบทของคำก่อนการใช้งาน
      </p>
    </div>
    <div
      v-if="$mq === 'md'"
      @click="handdleModalMobile"
      class="py-[10px] my-[10px] text-left flex justify-between wv-b5 border-black border mx-auto relative rounded-[5px] pl-8"
    >
      <img
        src="~/assets/images/searchIcon.svg"
        class="absolute top-[50%] left-0 translate-y-[-50%] ml-2"
      />
      {{ selectedKey.Word || "พิมพ์คีย์เวิร์ด" }}
    </div>
    <div
      class="flex-col space-y-2 mb-3 flex lg:hidden"
      v-if="chartData.years && selectedKey.Word"
    >
      <FilterByDistrict
        :filterData="filterData"
        :districtData="districtData"
        :handleFilterData="handleFilterData"
      />
      <FilterByComnunity
        :filterData="filterData"
        :originData="originData"
        :handleFilterData="handleFilterData"
      />
      <FilterByObjective
        :filterData="filterData"
        :originData="originData"
        :handleFilterData="handleObjectiveChange"
        :commuData="objectiveFilter"
      />
    </div>

    <div class="flex flex-col lg:flex-row mt-3">
      <div>
        <div
          class="wv-b7 text-wv-gray-1 hidden justify-start md:flex ml-3 text-start my-[15px]"
        >
          <svg
            class="mr-2 mt-1"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.96392 10.4443H2.38485C1.62177 10.4443 1.04624 10.1785 0.764007 9.69607C0.481708 9.21319 0.536527 8.58817 0.918026 7.93587L4.70745 1.45601C5.08868 0.803623 5.60981 0.444336 6.17419 0.444336C6.73863 0.444336 7.25968 0.803535 7.64093 1.45601L11.4304 7.93587C11.8118 8.58817 11.8666 9.21319 11.5844 9.69607C11.3022 10.1785 10.7267 10.4443 9.96371 10.4443H9.96392ZM6.94777 8.1636C6.94777 7.77471 6.62839 7.4593 6.23441 7.4593C5.84052 7.4593 5.52106 7.77462 5.52106 8.1636C5.52106 8.55249 5.84043 8.8679 6.23441 8.8679C6.62839 8.8679 6.94777 8.55257 6.94777 8.1636ZM6.967 3.9255C6.967 3.52619 6.63904 3.20239 6.23459 3.20239C5.83015 3.20239 5.50219 3.52619 5.50219 3.9255L5.67518 6.49196H5.67752C5.70264 6.77538 5.94095 6.99862 6.2346 6.99862C6.50617 6.99862 6.73287 6.80841 6.78527 6.55561C6.78952 6.53517 6.78986 6.51327 6.79177 6.49206H6.79671L6.967 3.9255Z"
              fill="#6E6E6E"
            />
          </svg>
          <p>
            <span class="font-bold">หมายเหตุ</span> :
            คียเวิร์ดเหล่านี้เป็นการค้นหาและตัดคำเบื้องต้นโดยคอมพิวเตอร์
            โดยรวบรวม<br />จากทุกข้อมูลที่มีคำนั้นปรากฎ
            โปรดตรวจสอบบริบทของคำก่อนการใช้งาน
          </p>
        </div>

        <div
          v-if="($mq === 'md' && mobileKeyword) || $mq === 'lg'"
          class="lg:w-[480px] lg:h-fit border-2 border-black rounded-[5px] p-[22px] fixed h-screen lg:relative inset-0 bg-white z-[20]"
        >
          <i
            class="el-icon-close mr-4 cursor-pointer w-[15px] absolute top-0 right-0 m-5"
            @click="handdleModalMobile"
            v-if="$mq === 'md' && !isSelectedKey"
          />
          <div
            class="font-bold py-[5px] px-[8px] rounded-[5px] absolute top-0 right-0 m-5 mr-4 cursor-pointer wv-b6 border border-black"
            @click="handdleModalMobile"
            v-if="$mq === 'md' && isSelectedKey"
          >
            ตกลง
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
                <div class="flex mt-3 opacity-50">
                  <p class="w-[100px]">คีย์เวิร์ด</p>
                  <p class="flex-1 text-center ml-2 justify-end flex">
                    จำนวนที่พบ
                  </p>
                  <!-- <p class="flex-1 text-end">งบ (ล้านบาท)</p> -->
                </div>
              </div>
            </div>
          </div>
          <div
            class="h-[70vh] md:h-[80vh] lg:h-full overflow-auto"
            ref="scrollContainer"
          >
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
              <p class="wv-b7 opacity-50 flex-1 text-center justify-end flex">
                {{ item.total }}
              </p>
              <!-- <p class="wv-b7 opacity-50 flex-1">
                {{ convertMillion(item.amount) }}
              </p> -->
            </div>
          </div>
          <button
            @click="scrollToTop"
            class="fixed bottom-2 wv-b6 left-[50%] bg-white shadow-lg px-4 py-2 rounded-t-lg flex items-center translate-x-[-50%] space-x-2 text-gray-500 hover:bg-gray-100 z-50"
          >
            <img
              src="~/assets/images/toTop.png"
              alt="selected"
              class="w-[15px] h-[15px]"
            />
            <span>กลับไปด้านบน</span>
          </button>
        </div>
      </div>

      <div class="md:ml-5 flex-1">
        <div
          class="px-5 pt-5 pb-10 borderKey h-fit max-w-[685px] mx-auto"
          v-if="chartData.years && selectedKey.Word"
        >
          <div class="flex-col space-y-2 mb-3 hidden lg:flex">
            <FilterByDistrict
              :filterData="filterData"
              :districtData="districtData"
              :handleFilterData="handleFilterData"
            />
            <FilterByComnunity
              :filterData="filterData"
              :originData="originData"
              :handleFilterData="handleFilterData"
            />
            <FilterByObjective
              :filterData="filterData"
              :originData="originData"
              :handleFilterData="handleObjectiveChange"
              :commuData="objectiveFilter"
            />
          </div>
          <div class="flex justify-between">
            <div class="mb-3">
              <p class="wv-b3 font-bold wv-kondolar">
                พบ {{ totalProject?.toLocaleString("en-US", {}) }} โครงการ
              </p>
              <div class="wv-b5">
                <p class="wv-b6 opacity-50">
                  ({{ ((totalProject / maxOrigin) * 100).toFixed() }}%
                  ของงบทั้งหมด)
                </p>
              </div>
              <p class="wv-b6 opacity-50 mb-5">
                ในคีย์เวิร์ด “{{ selectedKey.Word }}”
              </p>
            </div>
            <ModalDetails
              :handle-modal="() => handleModal()"
              :is-open="isOpen"
              :commuData="commuData"
              :filterData="filterData"
              page="keyword"
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
                v-if="filterData.community"
                class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
                :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20D%20like%20'%25${selectedKey.Word}%25'or%20F%20like%20%20'%25${selectedKey.Word}%25')and%20B%20%3D%20'${filterData.district}'%20and%20C%20%3D%20'${filterData.community}'`"
                target="_blank"
              >
                <img
                  src="~/assets/images/download.svg"
                  class="w-3 h-3 mr-2"
                />ดาวน์โหลดข้อมูล</a
              >
              <a
                v-else-if="!filterData.community && filterData.district"
                class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
                :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20D%20like%20'%25${selectedKey.Word}%25'or%20F%20like%20%20'%25${selectedKey.Word}%25')and%20B%20%3D%20'${filterData.district}'`"
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
                :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=453189989&&tq=where(%20D%20like%20'%25${selectedKey.Word}%25'or%20F%20like%20%20'%25${selectedKey.Word}%25')`"
                target="_blank"
              >
                <img
                  src="~/assets/images/download.svg"
                  class="w-3 h-3 mr-2"
                />ดาวน์โหลดข้อมูล</a
              >
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
                  {{ Number(item.toFixed(0)).toLocaleString() }}
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
                  class="absolute bottom-0 font-bold wv-b5 translate-y-[120%] left-[50%] translate-x-[-50%] z-20"
                >
                  `{{ key.substring(2) }}
                </div>

                <div
                  class="relative z-20 w-full bg-wv-yellow-70"
                  :style="{
                    height: `${(item?.amount / maxOrigin) * 100}%`,
                  }"
                >
                  <div
                    class="absolute top-0 translate-y-[-100%] left-[50%] translate-x-[-50%] wv-b7 font-bold"
                  >
                    {{
                      item?.amount > 0
                        ? !isMillion
                          ? `${((item?.amount / maxOrigin) * 100).toFixed(0)}%`
                          : item?.amount
                        : ""
                    }}
                  </div>
                </div>

                <div class="flex absolute bottom-0 w-full h-full items-end">
                  <div
                    :key="key"
                    :class="
                      key === '2568'
                        ? ' border-[2px] rounded border-wv-gray-20 border-dashed flex-1 relative'
                        : ' bg-wv-gray-20 flex-1 rounded relative'
                    "
                    :style="{
                      height:
                        !isMillion || key === '2568'
                          ? `${100}%`
                          : `${
                              (calOriginFilter()[key]?.amount / maxOrigin) * 100
                            }%`,
                    }"
                  >
                    <p
                      class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[100%] wv-b7 font-bold opacity-50"
                    >
                      {{
                        !isMillion
                          ? ""
                          : calOriginFilter()[key]?.amount?.toLocaleString()
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShareLabel />
      </div>
    </div>
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
import FilterByObjective from "../filter/FilterByObjective.vue";

export default {
  components: {
    ToggleUnit,
    ModalDetails,
    ShareLabel,
    FilterByComnunity,
    FilterByDistrict,
    FilterByObjective,
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
      isSelectedKey: false,
      itemsChart: [],
      isMillion: true,
      selectFilter: "",
      selectSort: "จำนวนที่พบ",
      totalProject: {},
      // totalFilterAmout: 0,
      maxOrigin: 0,
      isOpen: false,
      sortList: ["จำนวนที่พบ", "ตัวอักษร"],
      mobileKeyword: false,
      objectiveFilter: [],
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
      this.isSelectedKey = false;
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    scrollToTop() {
      const el = this.$refs.scrollContainer;
      if (el) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    formatYAxis() {
      const result = [...Array(5)].map(
        (_, index) => (parseInt(this.maxOrigin) / 5) * (index + 1)
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
      this.isSelectedKey = true;
      this.selectedKey = item;
      this.initFilterByKey(item);
      this.filterData = {
        ...this.filterData,
        district: "",
        community: "",
      };
      this.disableCheckBox();
    },
    calOriginFilter() {
      return _.chain(this.handleFilterKeyword(this.filterData.key))
        .groupBy("budget_year")
        .mapValues((d) => ({
          amount: this.originData.filter(
            (a) => a.budget_year === d[0].budget_year
          ).length,
        }))
        .value();
    },
    // calByFilter() {
    //   return _.chain(this.originData)
    //     .groupBy("budget_year")
    //     .mapValues((d) => ({
    //       amount: _.sumBy(
    //         this.originData.filter((a) => a.budget_year === d[0].budget_year),
    //         "amount"
    //       ),
    //     }))
    //     .value();
    // },
    calHeight(item, max) {
      return `${(item / max) * 100}%`;
    },

    handleFilterKeyword(keyword) {
      return this.originData.filter(
        (c) =>
          c.project_name.includes(keyword) ||
          (Array.isArray(c.procurement_list) &&
            c.procurement_list.some((item) => item.includes(keyword)))
      );
    },
    formatItem(item) {
      const years = _.chain(item)
        .groupBy("budget_year")
        .mapValues((d) => ({
          amount: item.filter((a) => a.budget_year === d[0].budget_year)
            ?.length,
        }))
        .value();

      if (!years["2568"]) {
        years["2568"] = {
          amount: 0,
        };
      }

      const sortedYears = Object.keys(years)
        .sort()
        .reduce((obj, key) => {
          obj[key] = years[key];
          return obj;
        }, {});

      return {
        years: sortedYears,
      };
    },

    initFilterByKey(item) {
      this.commuData = this.handleFilterKeyword(item.Word);
      this.filterData = { key: item.Word };
      this.itemsChart = this.formatItem(this.commuData);
      this.totalProject = this.commuData.length;
      // this.totalFilterAmout = _.sumBy(this.commuData, "amount");
      this.maxOrigin = this.originData.length;

      this.districtData = _.uniqBy(
        Object.values(this.commuData)?.map((d) => d.district)
      );
    },

    disableCheckBox() {
      const availableObjectives = [
        ...new Set(this.commuData.map((item) => item.project_objective)),
      ];
      this.filterData = {
        ...this.filterData,
        objectives: availableObjectives,
      };

      this.$nextTick(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          const isDisabled = checkbox
            .closest("label")
            ?.classList.contains("disabled-objective");
          checkbox.checked = !isDisabled;
        });
      });
    },
    handleObjectiveChange({ district, community, objectives }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
        objectives,
      };
      this.commuData = this.originData;
      if (community && district) {
        this.commuData = this.originData.filter(
          (o) => o.district === district && o.community === community
        );
        this.objectiveFilter = this.commuData;
      } else if (district) {
        this.commuData = this.originData.filter((o) => o.district === district);
        this.objectiveFilter = this.commuData;
      }
      if (objectives && objectives.length > 0) {
        this.commuData = this.commuData.filter((o) =>
          objectives.includes(o.project_objective)
        );
      }
    },
    handleFilterData({ district, community, objectives }) {
      this.filterData = {
        ...this.filterData,
        district,
        community,
        objectives,
      };
      this.commuData = this.handleFilterKeyword(this.filterData.key);
      if (district && community) {
        this.commuData = this.originData.filter(
          (o) => o.district === district && o.community === community
        );
        this.objectiveFilter = this.commuData;
        this.disableCheckBox();
      } else if (district) {
        this.commuData = this.originData.filter((c) => c.district == district);
        this.objectiveFilter = this.commuData;
        this.disableCheckBox();
      }

      this.totalProject = this.commuData.length;
      // this.totalFilterAmout = _.sumBy(this.commuData, "amount");
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
    if (!this.originData || !this.originData.length) {
      console.warn("No data found in store");
      return;
    }
    this.commuData = _.cloneDeep(this.originData);
    this.objectiveFilter = this.commuData;
    this.filterKeyword = this.fetchOriginFilterKey();
    const initialKeyword =
      keywords().filter((k) => k.Word === this.$route.query.key)[0] ||
      keywords()[0];
    if (initialKeyword) {
      this.selectKey(initialKeyword);
    }

    this.filterKeyword = this.fetchOriginFilterKey();
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
