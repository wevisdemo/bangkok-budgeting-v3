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
      class="py-[10px] my-[10px] text-left flex justify-between wv-b5 border-black border w-[300px] mx-auto relative rounded-[5px] pl-8"
    >
      <img
        src="~/assets/images/searchIcon.svg"
        class="absolute top-[50%] left-0 translate-y-[-50%] ml-2"
      />
      {{ selectedKey.Word || "พิมพ์คีย์เวิร์ด" }}
    </div>
    <div class="flex flex-col lg:flex-row mt-3">
      <div>
        <div class="wv-b7 text-wv-gray-1 hidden md:flex text-start my-[30px]">
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
            โดยรวบรวม<br />จากทุกข้อมูลที่มีคำนั้นปรากฎโปรดตรวจสอบบริบทของคำก่อนการใช้งาน
          </p>
        </div>
        <div
          v-if="($mq === 'md' && mobileKeyword) || $mq === 'lg'"
          class="lg:w-[400px] mb-5 lg:h-fit border-2 border-black rounded-[5px] p-[22px] fixed h-screen lg:relative inset-0 bg-white z-[20]"
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
                <p class="wv-b7 opacity-50 flex-1 text-center justify-end flex">
                  {{ item.total }}
                </p>
                <!-- <p class="wv-b7 opacity-50 flex-1">
                  {{ convertMillion(item.amount) }}
                </p> -->
              </div>
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
              <p class="wv-h8 font-bold wv-kondolar">
                “{{ selectedKey.Word }}”
              </p>
              <p class="wv-b3 font-bold">
                พบ {{ rawData?.total?.toLocaleString("en-US", {}) }} รายการ
              </p>
              <p class="wv-b5 font-bold">
                ใช้งบรวม {{ convertMillion(totalFilterAmout) || 0 }} ล้านบาท
              </p>
              <p class="wv-b6 opacity-50">
                ({{ ((totalFilterAmout / chartData.amount) * 100).toFixed(2) }}%
                ของงบทั้งหมด)
              </p>
            </div>
            <ModalDetails
              :handle-modal="() => handleModal()"
              :is-open="isOpen"
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
                v-if="selectedKey.Word"
                class="wv-b7 underline opacity-50 flex items-center cursor-pointer"
                :href="`https://docs.google.com/spreadsheets/d/15Xd-xM-Mi3qVRRyyqMxHrRgXYT3WNmWIzpvdUn9xWZo/gviz/tq?tqx=out:csv&gid=1915709666&&tq=where%20B%20like%20'%25${selectedKey.Word}%25'`"
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
          <!-- dropdown÷ -->
          <div class="flex items-center my-3 wv-b5">
            โดย
            <el-select v-model="selectFilter" placeholder="Select" class="ml-2">
              <el-option
                v-for="item in filterOrganize"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>
          <!--  -->
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
                  {{ item.toLocaleString("en-US", {}) }}
                </div>
              </div>
            </div>
            <div class="flex space-x-[5px] h-full items-end relative">
              <div
                v-for="(item, key) in itemsChart.years"
                :key="key"
                v-if="itemsChart"
                class="flex-1 md:ml-[25px] flex flex-col-reverse items-center relative z-10 h-full"
              >
                <div
                  class="absolute bottom-0 wv-b5 translate-y-[120%] font-bold left-[50%] translate-x-[-50%] z-20"
                  :class="key != '70' ? '' : 'opacity-50'"
                >
                  `{{ key }}
                </div>

                <div
                  v-if="
                    item.organize[selectFilter] &&
                    selectFilter !== filterOrganize[0]
                  "
                  class="relative z-20 w-full"
                  v-for="strategy in strategyList()"
                  :key="strategy"
                  :class="bgColorSet(strategy)"
                  :style="{
                    height: calHeight(
                      displayOrganizeValue(
                        item.organize[selectFilter] || 0,
                        strategy
                      ),
                      item.amount
                    ),
                  }"
                ></div>
                <div
                  v-if="
                    selectFilter === filterOrganize[0] && item.all[strategy]
                  "
                  class="relative z-20 w-full"
                  v-for="strategy in strategyList()"
                  :key="strategy"
                  :class="bgColorSet(strategy)"
                  :style="{
                    height: calHeight(item.all[strategy], item.amount),
                  }"
                ></div>
                <!--  number -->
                <div
                  class="z-[20] wv-b7 font-bold relative"
                  v-if="isMillion && selectFilter === filterOrganize[0]"
                >
                  <div
                    class="absolute left-[50%] translate-x-[-50%] translate-y-[-100%]"
                  >
                    {{ key != "70" ? convertMillion(item.amount) : "" }}
                  </div>
                </div>
                <div
                  class="z-[20] wv-b7 font-bold"
                  v-if="isMillion && selectFilter !== filterOrganize[0]"
                >
                  {{
                    key != "70"
                      ? convertMillion(
                          displayAmoutOrganize(item.organize[selectFilter])
                        )
                      : ""
                  }}
                </div>
                <!-- <div
                  class="z-[20] wv-b7 font-bold absolute top-0 translate-y-[-100%]"
                  v-if="!isMillion && selectFilter === filterOrganize[0]"
                >
                  {{ `100%` }}
                </div> -->
                <div
                  class="z-[20] wv-b7 font-bold"
                  v-if="!isMillion && selectFilter !== filterOrganize[0]"
                >
                  {{
                    (
                      (displayAmoutOrganize(item.organize[selectFilter]) /
                        item.amount) *
                      100
                    ).toFixed(2)
                  }}%
                </div>

                <!--  -->
                <div
                  class="flex absolute bottom-0 w-full h-full items-end"
                  v-if="!(selectFilter !== filterOrganize[0] && isMillion)"
                >
                  <div
                    :key="key"
                    :class="
                      key != '70'
                        ? 'bg-wv-gray-4 flex-1 rounded'
                        : ' border-[2px] flex-1  border-black opacity-75  rounded border-dashed'
                    "
                    :style="{
                      height:
                        isMillion && key != '70'
                          ? calHeight(displayMaxAmout(key) || 0, item?.amount)
                          : '100%',
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-[685px] text-center lg:text-left mt-5 mx-auto">
          <p class="wv-b6 font-bold">งบแผนงานพัฒนา 9 ด้าน(ดี)</p>
          <div class="mt-5 flex-wrap grid grid-cols-3 px-3 text-start">
            <div
              v-for="(item, key) in navData()"
              :key="key"
              class="flex items-center space-x-2 py-[5px] w-full"
            >
              <div
                class="min-w-[10px] min-h-[10px] rounded-[2px]"
                :class="bgColorSet(item.name)"
              />
              <div class="flex wv-b5 text-wv-gray-1">
                {{ item.name }}
              </div>
            </div>
          </div>
          <ShareLabel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { convertMillion, bgColorSet, strategyList } from "../budget/utils";
import ToggleUnit from "../budget/charts/ToggleUnit.vue";
import { keywords } from "~/data/budgets/keywords";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import { navData } from "~/components/expore/navData";
import { filterByKey } from "~/components/budget/charts/filterBy";
import ShareLabel from "../budget/ShareLabel.vue";

export default {
  components: {
    ToggleUnit,
    ModalDetails,
    ShareLabel,
  },
  computed: {
    ...mapState(["chartData"]),
  },
  data() {
    return {
      data: "",
      filterKeyword: "",
      selectedKey: {},
      itemsChart: [],
      isMillion: true,
      selectFilter: "",
      selectSort: "งบมากไปน้อย",
      rawData: {},
      totalFilterAmout: 0,
      filterOrganize: [],
      isOpen: false,
      sortList: ["งบมากไปน้อย", "จำนวนที่พบ", "ตัวอักษร"],
      mobileKeyword: false,
      isSelectedKey: false,
    };
  },

  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectKeywordStrategy: "updateSelectKeywordStrategy",
    }),
    convertMillion,
    bgColorSet,
    strategyList,
    keywords,
    filterByKey,
    navData,
    handdleModalMobile() {
      this.isSelectedKey = false;
      this.mobileKeyword = !this.mobileKeyword;
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    formatYAxis() {
      const max =
        this.selectFilter === this.filterOrganize[0]
          ? this.maxBudgets()
          : this.maxSelectedFilter();
      const result = [...Array(5)].map(
        (_, index) => ((parseInt(max) / 5) * (index + 1)) / 1000000
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
    displayAmoutOrganize(org) {
      return org ? _.sum(Object.values(org)) : 0;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    displayOrganizeValue(org, str) {
      return str in org ? org[str] : 0;
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
    displayMaxAmout(year) {
      return (
        this.chartData.years.filter((d) => d.year === parseInt(year))[0]
          .amount || 0
      );
    },
    selectKey(item) {
      this.isSelectedKey = true;
      this.selectedKey = item;
      this.fetchbudgetItem(item);
    },
    calHeight(item, max) {
      const filterDefault = this.selectFilter === this.filterOrganize[0];
      const divideOrganize =
        !filterDefault && this.isMillion
          ? this.maxSelectedFilter()
          : this.maxBudgets();
      return this.isMillion
        ? `${(item / divideOrganize) * 100}%`
        : `${(item / max) * 100}%`;
    },
    fetchbudgetItem(item) {
      const response = this.$store.getters["data/getBudgetItems"]({
        keyword: item.Word,
      });
      this.itemsChart = {
        years: _.chain(response.items)
          .groupBy("budgetYear")
          .mapValues((d) => ({
            amount: _.sumBy(
              response.items.filter((a) => a.budgetYear === d[0].budgetYear),
              "amount"
            ),
            organize: _.chain(d)
              .groupBy("nameOrganization")
              .mapValues((s) =>
                _.chain(s)
                  .groupBy("strategy")
                  .mapValues((s) => _.sumBy(s, "amount"))
                  .value()
              )
              .value(),
            all: _.chain(d)
              .groupBy("strategy")
              .mapValues((s) => _.sumBy(s, "amount"))
              .value(),
          }))
          .value(),
        total: response.total,
      };
      console.log(this.itemsChart, "this.itemsChart ");

      if (!this.itemsChart.years["70"]) {
        this.itemsChart.years["70"] = {
          amount: 0,
          organize: {},
          all: {},
        };
      }

      console.log(this.itemsChart, "itemsChart");

      this.rawData = response;
      this.totalFilterAmout = _.sumBy(response.items, "amount");
      const groupOrganize = Object.keys(
        _.groupBy(response.items, "nameOrganization")
      );
      this.filterOrganize = [
        `ทุกหน่วยงาน (${groupOrganize.length} หน่วยงาน)`,
        ...groupOrganize,
      ];
      this.selectFilter = this.filterOrganize[0];
      this.updateSelectKeywordStrategy({ label: "ทุกปี", value: "" });
      this.updateIsModalDetails(response);
      this.updateSubTitleModal(
        `ที่มีคำว่า “${this.selectedKey.Word}” ในชื่อ ซึ่งของบโดย “${this.filterOrganize.length} หน่วยงาน”`
      );
    },
  },
  watch: {
    data: {
      immediate: true,
      deep: false,
      handler(newValue) {
        const result = keywords().filter((d) =>
          d.Word.toString().includes(newValue)
        );
        const formatFilter = result.map((r) => {
          const item = this.$store.getters["data/getBudgetItems"]({
            keyword: r.Word,
          });
          return {
            total: item.total,
            Word: r.Word,
            amount: _.sumBy(item.items, "amount"),
          };
        });
        this.filterKeyword = this.filterByKey(this.selectSort, formatFilter);
      },
    },
    selectFilter() {
      if (this.selectFilter !== this.filterOrganize[0])
        this.maxSelectedFilter();
    },
    selectSort(label) {
      this.filterKeyword = this.filterByKey(label, this.filterKeyword);
    },
  },
  mounted() {
    this.selectKey(
      this.filterKeyword.filter((k) => k.Word === this.$route.query.key)[0] ||
        this.filterKeyword[0]
    );
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
